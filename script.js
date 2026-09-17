const dropdown=document.querySelector('.dropdown');
const trigger=dropdown.querySelector('button');
function closeMenu(){dropdown.classList.remove('open');trigger.setAttribute('aria-expanded','false');}
trigger.addEventListener('click',()=>{const open=dropdown.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(!dropdown.contains(e.target))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();trigger.focus();}});
dropdown.addEventListener('focusout',e=>{if(!dropdown.contains(e.relatedTarget))closeMenu();});
const slides=[...document.querySelectorAll('.slide')];
if(slides.length){let current=0;let paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const dots=[...document.querySelectorAll('.dot')];const pause=document.querySelector('#pause');function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.classList.toggle('current',i===current);s.setAttribute('aria-hidden',String(i!==current));});dots.forEach((d,i)=>d.setAttribute('aria-current',String(i===current)));document.querySelector('.count').textContent=`0${current+1} / 0${slides.length}`;}function label(){pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?'Diavetítés indítása':'Diavetítés szüneteltetése');}dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));document.querySelector('#prev').addEventListener('click',()=>show(current-1));document.querySelector('#next').addEventListener('click',()=>show(current+1));pause.addEventListener('click',()=>{paused=!paused;label();});setInterval(()=>{if(!paused&&!document.hidden&&!document.querySelector('.hero').matches(':hover, :focus-within'))show(current+1);},5500);label();show(0);}
