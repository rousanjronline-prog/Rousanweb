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

document.querySelector('form').addEventListener('submit',e=>{
 e.preventDefault();
 alert('Message sent successfully!');
});
