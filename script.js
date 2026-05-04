window.addEventListener('load',()=>{for(let i=0;i<22;i++){const s=document.createElement('span');s.textContent='$';s.style.left=Math.random()*100+'%';s.style.animationDuration=(4+Math.random()*6)+'s';s.style.animationDelay=Math.random()*4+'s';document.querySelector('.money-rain').appendChild(s);} 
  setTimeout(()=>document.getElementById('loader').style.display='none',1200);document.addEventListener('mousemove',e=>{document.body.style.backgroundPosition=e.clientX/40+'px '+e.clientY/40+'px';});
});
const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.mobile-menu');
btn.addEventListener('click',()=>menu.classList.toggle('show'));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    menu.classList.remove('show');
  });
});

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show');});});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelectorAll('.count').forEach(counter=>{let started=false;const run=()=>{if(started)return;started=true;let n=0;const target=+counter.dataset.target;const step=Math.max(1,target/60);const int=setInterval(()=>{n+=step;if(n>=target){counter.textContent=target;clearInterval(int);}else{counter.textContent=Math.floor(n);}},20);};observer.observe(counter);counter.closest('.bio-section')&&setTimeout(run,1200);});let v=0;setInterval(()=>{v+=Math.floor(Math.random()*3)+1;const el=document.getElementById('visitors');if(el)el.textContent=v;},1200);// auto music play (on first interaction)
const music=document.getElementById('bgMusic');
document.addEventListener('click',()=>{
 if(music && music.paused){
  music.volume=0;
  music.play().then(()=>{
    let v=0;
    const fade=setInterval(()=>{
      v+=0.05;
      music.volume=v;
      if(v>=1) clearInterval(fade);
    },100);
  }).catch(()=>{});
 }
},{once:true});

// music button control
const btnMusic=document.querySelector('.music-toggle');
if(btnMusic&&music){
 btnMusic.addEventListener('click',()=>{
  if(music.paused){music.play();btnMusic.textContent='Pause';}
  else{music.pause();btnMusic.textContent='Music';}
 });
}
// force scroll theme
window.addEventListener('scroll',()=>{
 const y=window.scrollY;
 document.body.classList.toggle('lightmode', y>200);
});

document.querySelector('form').addEventListener('submit',e=>{
 e.preventDefault();
 alert('Message sent successfully!');
});
