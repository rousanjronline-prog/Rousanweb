/* Google Font Import */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Montserrat', sans-serif;
    background:#000;
    color:#fff;
    overflow-x:hidden;
}

/* Header */
header{
    width:100%;
    padding:25px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background:rgba(0,0,0,0.35);
    backdrop-filter:blur(8px);
}

.logo{
    font-size:32px;
    font-weight:900;
    letter-spacing:2px;
    text-transform:uppercase;
}

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
