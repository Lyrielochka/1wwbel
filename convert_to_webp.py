from __future__ import annotations

import subprocess
import sys
from pathlib import Path

from PIL import Image

try:
    from imageio_ffmpeg import get_ffmpeg_exe
except Exception as exc:  # pragma: no cover - defensive import guard
    get_ffmpeg_exe = None
    _import_error = exc
else:
    _import_error = None


IMAGE_EXTS = {'.png', '.jpg', '.jpeg'}
VIDEO_EXTS = {'.mp4', '.mov', '.avi', '.webm', '.mkv'}


def convert_images(root: Path, quality: int = 80) -> int:
    converted = 0
    for path in root.rglob('*'):
        if path.suffix.lower() not in IMAGE_EXTS:
            continue
        target = path.with_suffix('.webp')
        if target.exists() and target.stat().st_mtime >= path.stat().st_mtime:
            continue
        try:
            with Image.open(path) as img:
                if img.mode in ('RGBA', 'LA', 'P'):
                    img = img.convert('RGBA')
                else:
                    img = img.convert('RGB')
                img.save(target, 'WEBP', quality=quality, method=6)
                converted += 1
        except Exception as exc:
            print(f'Failed to convert image {path}: {exc}')
    return converted


def _ffmpeg_path() -> str | None:
    if get_ffmpeg_exe is None:
        print(
            f'Cannot convert videos to WebP because imageio_ffmpeg is unavailable: {_import_error}',
            file=sys.stderr,
        )
        return None
    try:
        return get_ffmpeg_exe()
    except Exception as exc:  # pragma: no cover - runtime safeguard
        print(f'Failed to locate ffmpeg binary: {exc}', file=sys.stderr)
        return None


def convert_videos(root: Path, quality: int = 85, compression_level: int = 4) -> int:
    ffmpeg = _ffmpeg_path()
    if not ffmpeg:
        return 0

    converted = 0
    for path in root.rglob('*'):
        if path.suffix.lower() not in VIDEO_EXTS:
            continue
        target = path.with_suffix('.webp')
        if target.exists() and target.stat().st_mtime >= path.stat().st_mtime:
            continue

        cmd = [
            ffmpeg,
            '-y',
            '-i',
            str(path),
            '-c:v',
            'libwebp',
            '-quality',
            str(quality),
            '-compression_level',
            str(compression_level),
            '-loop',
            '0',
            '-an',
            str(target),
        ]

        try:
            subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        except subprocess.CalledProcessError as exc:
            print(f"Failed to convert video {path}: {exc.stderr.decode(errors='ignore')}")
            continue

        converted += 1

    return converted


if __name__ == '__main__':
    root_path = Path('.')
    images_converted = convert_images(root_path)
    videos_converted = convert_videos(root_path)
    print(f'Converted {images_converted} images and {videos_converted} videos to WebP')
