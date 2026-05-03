window.addEventListener('load',()=>{
 setTimeout(()=>document.getElementById('loader').style.display='none',1200);
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
 link.addEventListener('click',e=>{
  e.preventDefault();
  document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
 });
});

document.querySelector('form').addEventListener('submit',e=>{
 e.preventDefault();
 alert('Message sent successfully!');
});
