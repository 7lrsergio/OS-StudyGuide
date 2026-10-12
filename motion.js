/* One-time scroll reveals; no animation delays on answering or timer controls. */
(function(){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const allowed=()=>!reduced.matches&&document.documentElement.dataset.motion!=='off';
 let observer;
 function revealAll(){document.querySelectorAll('.scroll-reveal').forEach(e=>{e.classList.add('is-visible');observer?.unobserve(e);});}
 function observe(){
   if(!allowed()||!('IntersectionObserver' in window)){revealAll();return;}
   observer??=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}},{threshold:0.08,rootMargin:'0px 0px -16px 0px'});
   document.querySelectorAll('.view:not([hidden]) .guide-card, .view:not([hidden]) .setup-grid > .panel, .view:not([hidden]) .metric').forEach(e=>{
     if(!e.classList.contains('scroll-reveal')){e.classList.add('scroll-reveal');observer.observe(e);}
   });
 }
 let queued=false;
 function updateScroll(){queued=false;const max=document.documentElement.scrollHeight-innerHeight;document.getElementById('scrollProgress').style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;}
 function scheduleScroll(){if(!queued){queued=true;requestAnimationFrame(updateScroll);}}
 addEventListener('scroll',scheduleScroll,{passive:true});addEventListener('resize',scheduleScroll);
 document.addEventListener('os-motion-change',()=>{if(!allowed())revealAll();else observe();});
 reduced.addEventListener('change',()=>{if(!allowed())revealAll();else observe();});
 // Keyboard navigation must never land in an invisible reveal target.
 document.addEventListener('focusin',e=>{const card=e.target.closest('.scroll-reveal');if(card){card.classList.add('is-visible');observer?.unobserve(card);}});
 window.OSMotion={observe(){observe();scheduleScroll();}};
})();
