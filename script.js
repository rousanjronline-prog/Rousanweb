document.addEventListener("DOMContentLoaded", () => {

    const menuBtn  = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay  = document.getElementById("overlay");
    const glitch   = document.querySelector(".glitch");

    function openMenu(){
        sideMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu(){
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape"){
            closeMenu();
        }
    });

    /* Extra glitch burst */
    if(glitch){
        setInterval(() => {
            glitch.style.transform = "skew(4deg) scale(1.01)";

            setTimeout(() => {
                glitch.style.transform = "";
            }, 120);

        }, 3000);
    }

});    font-weight:700;
    cursor:pointer;
    text-transform:lowercase;
}

/* Hero Section */
.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:120px 40px;
    position:relative;
    overflow:hidden;
}

/* Red Neon Background Lines */
.hero::before,
.hero::after{
    content:'';
    position:absolute;
    width:1000px;
    height:4px;
    background:linear-gradient(90deg, transparent, #ff2b2b, transparent);
    box-shadow:0 0 20px #ff2b2b;
    transform:rotate(45deg);
    opacity:0.8;
}

.hero::before{
    top:18%;
    left:-25%;
}

.hero::after{
    bottom:10%;
    right:-25%;
}

.content{
    position:relative;
    z-index:2;
    max-width:900px;
}

.content h1{
    font-size:clamp(55px, 11vw, 140px);
    line-height:0.9;
    color:#ff2b2b;
    font-weight:900;
    text-transform:uppercase;
    margin-bottom:20px;
}

.content p{
    font-size:14px;
    max-width:650px;
    color:#dcdcdc;
    letter-spacing:1px;
    line-height:1.6;
    text-transform:uppercase;
}

/* Scroll Arrow */
.arrow{
    position:absolute;
    bottom:40px;
    left:50%;
    transform:translateX(-50%);
    font-size:50px;
    animation:float 1.5s infinite;
}

@keyframes float{
    0%,100%{
        transform:translate(-50%,0);
    }
    50%{
        transform:translate(-50%,10px);
    }
}

/* Mobile Responsive */
@media(max-width:768px){

    header{
        padding:18px 20px;
    }

    .logo{
        font-size:24px;
    }

    .menu{
        font-size:20px;
    }

    .hero{
        padding:100px 20px;
    }

    .content h1{
        font-size:60px;
    }

    .content p{
        font-size:12px;
    }

    .arrow{
        font-size:42px;
    }
}
