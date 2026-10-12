/* Apply saved appearance before paint. Storage restrictions never block use. */
(function(){
  const themes=['forest','ocean','violet','amber','midnight','cursed','shinobi','wisteria'];
  let saved={};
  try{saved=JSON.parse(localStorage.getItem('os-lab-appearance-v1')||'{}')||{};}catch{}
  const root=document.documentElement;
  root.dataset.theme=themes.includes(saved.theme)?saved.theme:'forest';
  root.dataset.sidebar=saved.sidebar==='hidden'?'hidden':'visible';
  root.dataset.motion=saved.motion==='off'?'off':'on';
  const fonts=['system','humanist','serif','book','mono'],sizes=['small','normal','large','xl','xxl'];
  root.dataset.font=fonts.includes(saved.font)?saved.font:'system';
  root.dataset.size=sizes.includes(saved.size)?saved.size:'normal';
  document.addEventListener('DOMContentLoaded',()=>{
    const motion=document.getElementById('motionToggle');
    const toggle=document.getElementById('sidebarToggle'),label=document.getElementById('sidebarLabel'),select=document.getElementById('themeSelect');
    function save(){try{localStorage.setItem('os-lab-appearance-v1',JSON.stringify({theme:root.dataset.theme,sidebar:root.dataset.sidebar,motion:root.dataset.motion,font:root.dataset.font,size:root.dataset.size}));}catch{}}
    function sync(){const visible=root.dataset.sidebar!=='hidden';const text=visible?'Hide sidebar':'Show sidebar';toggle.setAttribute('aria-expanded',String(visible));toggle.setAttribute('aria-label',text);toggle.title=text;label.textContent=text;select.value=root.dataset.theme;motion.textContent=root.dataset.motion==='off'?'Motion off':'Motion on';motion.setAttribute('aria-pressed',String(root.dataset.motion!=='off'));}
    toggle.addEventListener('click',()=>{root.dataset.sidebar=root.dataset.sidebar==='hidden'?'visible':'hidden';sync();save();});
    select.addEventListener('change',()=>{if(themes.includes(select.value)){root.dataset.theme=select.value;save();}});
    motion.addEventListener('click',()=>{root.dataset.motion=root.dataset.motion==='off'?'on':'off';sync();save();document.dispatchEvent(new Event('os-motion-change'));});
    const font=document.getElementById('fontSelect'),size=document.getElementById('sizeSelect');
    font.value=root.dataset.font;size.value=root.dataset.size;
    font.addEventListener('change',()=>{if(fonts.includes(font.value)){root.dataset.font=font.value;save();}});
    size.addEventListener('change',()=>{if(sizes.includes(size.value)){root.dataset.size=size.value;save();}});
    sync();
  });
})();
