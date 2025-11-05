document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.weapon-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxTags = document.getElementById('lightbox-tags');
    const closeButton = lightbox?.querySelector('.lightbox__close');
    const backdrop = lightbox?.querySelector('.lightbox__backdrop');
    const muteToggle = document.querySelector('.mute-toggle');

    let lastFocusedElement = null;
    let hideTimeout = null;

    const openLightbox = (card) => {
        if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxDescription || !lightboxTags) {
            return;
        }

        clearTimeout(hideTimeout);
        lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

        const imgSrc = card.getAttribute('data-image');
        const title = card.querySelector('h3')?.textContent?.trim() ?? '';
        const description = card.querySelector('p')?.textContent?.trim() ?? '';
        const tags = Array.from(card.querySelectorAll('.card-tags li'));

        lightboxImage.src = imgSrc ?? '';
        lightboxImage.alt = title;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;

        lightboxTags.innerHTML = '';
        tags.forEach((tag) => {
            const clone = document.createElement('li');
            clone.innerHTML = tag.innerHTML;
            lightboxTags.appendChild(clone);
        });

        lightbox.removeAttribute('hidden');
        lightbox.classList.add('is-active');
        document.body.classList.add('no-scroll');

        if (closeButton) {
            closeButton.focus();
        }
    };

    const closeLightbox = () => {
        if (!lightbox) {
            return;
        }

        lightbox.classList.remove('is-active');
        document.body.classList.remove('no-scroll');

        hideTimeout = window.setTimeout(() => {
            lightbox.setAttribute('hidden', '');
            if (lightboxImage) {
                lightboxImage.src = '';
                lightboxImage.alt = '';
            }
        }, 300);

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    };

    cards.forEach((card) => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('click', () => openLightbox(card));
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(card);
            }
        });
    });

    closeButton?.addEventListener('click', closeLightbox);
    backdrop?.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });

    if (muteToggle) {
        muteToggle.setAttribute('aria-pressed', 'true');
        muteToggle.addEventListener('click', () => {
            const muted = muteToggle.getAttribute('data-muted') === 'true';
            const nextState = !muted;
            muteToggle.setAttribute('data-muted', nextState.toString());
            muteToggle.setAttribute('aria-pressed', nextState ? 'true' : 'false');
            muteToggle.textContent = nextState ? 'Звук: выкл' : 'Звук: вкл';
        });
    }
});
