// MIRROR BREAK INTRO

setTimeout(()=>{

const intro = document.getElementById("intro");
const site = document.getElementById("site");

intro.style.transition = "1s";
intro.style.transform = "scale(2) rotate(15deg)";
intro.style.opacity = "0";

site.style.opacity = "1";
site.style.transform = "scale(1)";

document.body.style.overflow = "auto";

setTimeout(()=>{
intro.remove();
},1000);

},3500);


// MENU

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.onclick = ()=>{
sideMenu.classList.add("show");
overlay.classList.add("show");
};

closeBtn.onclick = ()=>{
sideMenu.classList.remove("show");
overlay.classList.remove("show");
};

overlay.onclick = ()=>{
sideMenu.classList.remove("show");
overlay.classList.remove("show");
};


// RANDOM GLITCH BURST

const glitch = document.querySelector(".glitch");

setInterval(()=>{

glitch.style.transform = "skew(6deg) scale(1.02)";

setTimeout(()=>{
glitch.style.transform = "";
},120);

},2500);
