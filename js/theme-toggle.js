const STORAGE_KEY = 'ww1-theme';
const THEMES = { LIGHT: 'light', DARK: 'dark' };

function getStoredTheme(){
  try{
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === THEMES.LIGHT || saved === THEMES.DARK ? saved : null;
  }catch{
    return null;
  }
}

function storeTheme(theme){
  try{
    localStorage.setItem(STORAGE_KEY, theme);
  }catch{
    /* ignore */
  }
}

export function initThemeToggle(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if(!btn) return;

  const status = btn.querySelector('.theme-toggle__status');
  const media = window.matchMedia('(prefers-color-scheme: light)');
  const stored = getStoredTheme();
  let current = stored || (media.matches ? THEMES.LIGHT : THEMES.DARK);

  const applyTheme = (theme, { persist = true } = {}) => {
    const isLight = theme === THEMES.LIGHT;
    if(isLight){
      root.setAttribute('data-theme', THEMES.LIGHT);
      root.style.colorScheme = 'light';
    }else{
      root.removeAttribute('data-theme');
      root.style.colorScheme = 'dark';
    }
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    btn.setAttribute('aria-label', isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему');
    if(status){
      status.textContent = isLight ? 'Светлая' : 'Тёмная';
    }
    if(persist){
      storeTheme(theme);
    }
  };

  applyTheme(current, { persist: Boolean(stored) });

  btn.addEventListener('click', ()=>{
    current = current === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    applyTheme(current);
  });

  if(!stored){
    const handleMediaChange = (event) => {
      current = event.matches ? THEMES.LIGHT : THEMES.DARK;
      applyTheme(current, { persist: false });
    };
    if(typeof media.addEventListener === 'function'){
      media.addEventListener('change', handleMediaChange);
    }else if(typeof media.addListener === 'function'){
      media.addListener(handleMediaChange);
    }
  }
}



