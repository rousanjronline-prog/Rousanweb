const menuBtn=document.getElementById('menuBtn');
const menuPanel=document.getElementById('menuPanel');
menuBtn.onclick=()=>menuPanel.classList.toggle('show');
window.addEventListener('mousemove',e=>{
 const x=(e.clientX/window.innerWidth-.5)*20;
 const y=(e.clientY/window.innerHeight-.5)*20;
 document.querySelectorAll('.line').forEach((line,i)=>{
 line.style.transform=`rotate(28deg) translate(${x*(i+1)*0.2}px,${y*(i+1)*0.2}px)`;
 });
});
