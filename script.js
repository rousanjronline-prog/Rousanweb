window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').style.display='none',1200);
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

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show');});});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelectorAll('.count').forEach(counter=>{let started=false;const run=()=>{if(started)return;started=true;let n=0;const target=+counter.dataset.target;const step=Math.max(1,target/60);const int=setInterval(()=>{n+=step;if(n>=target){counter.textContent=target;clearInterval(int);}else{counter.textContent=Math.floor(n);}},20);};observer.observe(counter);counter.closest('.bio-section')&&setTimeout(run,1200);});document.querySelector('form').addEventListener('submit',e=>{
 e.preventDefault();
 alert('Message sent successfully!');
});
