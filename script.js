// script.js

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
});sideMenu.classList.remove("show");
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
