// script.js

console.log("Website Loaded Successfully");

/* Random Extra Glitch Burst */
const glitch = document.querySelector(".glitch");

setInterval(()=>{
    glitch.style.transform = "skew(5deg)";
    
    setTimeout(()=>{
        glitch.style.transform = "skew(0deg)";
    },120);

},3000);            title.style.transition = "all 1.2s ease";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
        }, 300);
    }

    // Paragraph reveal animation
    const text = document.querySelector(".content p");

    if (text) {
        text.style.opacity = "0";

        setTimeout(() => {
            text.style.transition = "all 1.5s ease";
            text.style.opacity = "1";
        }, 900);
    }

});}

.menu{
    font-size:24px;
    font-weight:700;
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
