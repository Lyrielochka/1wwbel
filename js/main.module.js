import { initAnchorScroll } from './scroll.js';
import { initReveal } from './reveal.js';
import { initCounters } from './counters.js';
import { initTimeline } from './timeline.js';
import { initTyping } from './typing.js';
import { initTicker } from './ticker.js';
import { initHeroes } from './heroes.js';
import { initGlossary } from './glossary.js';
import glossaryFallback from './fallback/glossary.js';
import heroesFallback from './fallback/heroes.js';
import { initParticles } from './particles.js';
import { initNav } from './nav.js';
import { initMap } from './map.js';
import { initThemeToggle } from './theme-toggle.js';
import { initValeraAssistant } from './assistant.js';

function onIdle(callback){
  if('requestIdleCallback' in window){
    requestIdleCallback(()=>{
      try{
        callback();
      }catch(err){
        console.error('[init idle error]', err);
      }
    }, { timeout: 1200 });
  }else{
    setTimeout(()=>{
      try{
        callback();
      }catch(err){
        console.error('[init idle error]', err);
      }
    }, 120);
  }
}

function onVisible(target, callback){
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if(!el) return;
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      if(entries.some(entry => entry.isIntersecting)){
        obs.disconnect();
        try{
          callback();
        }catch(err){
          console.error('[init visible error]', err);
        }
      }
    }, { rootMargin:'180px 0px' });
    obs.observe(el);
  }else{
    try{
      callback();
    }catch(err){
      console.error('[init visible error]', err);
    }
  }
}

async function run(){
  document.documentElement.classList.add('js');
  document.documentElement.classList.remove('no-js');
  try{
    initThemeToggle();
    initNav();
    initAnchorScroll();
    onIdle(()=>{
      initReveal();
      initCounters();
      initTimeline();
      initTyping();
      initTicker();
      initParticles();
      initValeraAssistant();
    });
    onVisible('#map', ()=>{ initMap(); });
    onVisible('#heroes', ()=>{ initHeroes({ url: 'data/heroes.json', fallbackData: heroesFallback }); });
    onVisible('.gloss, [data-glossary]', ()=>{ initGlossary({ url: 'data/glossary.json', fallbackData: glossaryFallback }); });
  }catch(err){
    console.error('[init error]', err);
    document.documentElement.classList.remove('js');
    document.documentElement.classList.add('no-js');
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', run, { once: true });
}else{
  run();
}
