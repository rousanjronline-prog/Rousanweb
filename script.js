// WORKING MENU BUTTON

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.onclick = function () {
    sideMenu.classList.add("show");
    overlay.classList.add("show");
};

closeBtn.onclick = function () {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
};

overlay.onclick = function () {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
};

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        sideMenu.classList.remove("show");
        overlay.classList.remove("show");
    }
});
