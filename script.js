// Loading Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.to(".loader-bar", { width: "100%", duration: 1 })
      .to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
      .from(".hero-content h1", { opacity: 0, y: 50, duration: 1, stagger: 0.2 })
      .from("nav", { opacity: 0, duration: 1 }, "-=0.5");
});

// Scroll Hover effect on Menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('mouseenter', () => {
    gsap.to(".menu-btn span", { backgroundColor: "#ff3c28", stagger: 0.1 });
});
menuBtn.addEventListener('mouseleave', () => {
    gsap.to(".menu-btn span", { backgroundColor: "#ffffff", stagger: 0.1 });
});

// Parallax/Smooth reveal using GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from(".glass-card", {
    scrollTrigger: {
        trigger: ".glass-card",
        start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: "power3.out"
});

// Floating animation for the scroll arrow
gsap.to(".scroll-indicator", {
    y: 20,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut"
});
 e.position.set((Math.random()*8)-4,0.5,50+i*25);
 scene.add(e); enemies.push(e);
}

camera.position.set(0,5,-8);
camera.lookAt(0,0.5,10);

let keys={},speed=0.4,score=0;
onkeydown=e=>keys[e.key]=true;
onkeyup=e=>keys[e.key]=false;

function reset(){score=0;speed=0.4;player.position.x=0;enemies.forEach((e,i)=>{e.position.z=50+i*25;});}

function animate(){requestAnimationFrame(animate);
 if(keys['ArrowLeft']||keys['a']) player.position.x-=0.15;
 if(keys['ArrowRight']||keys['d']) player.position.x+=0.15;
 if(keys['ArrowUp']||keys['w']) speed=Math.min(1.8,speed+0.01);
 if(keys['Shift']) speed=Math.min(2.8,speed+0.03);
 else speed=Math.max(0.4,speed-0.005);
 player.position.x=Math.max(-4.8,Math.min(4.8,player.position.x));
 
 lines.forEach(l=>{l.position.z-=speed*2;if(l.position.z<-10)l.position.z=420;});
 enemies.forEach(e=>{
   e.position.z-=speed*2;
   if(e.position.z<-10){e.position.z=180+Math.random()*120;e.position.x=(Math.random()*8)-4;score+=10;}
   if(Math.abs(e.position.z-player.position.z)<2 && Math.abs(e.position.x-player.position.x)<1.3){alert('Crash! Score:'+score);reset();}
 });
 score+=0.1;
 document.getElementById('speed').textContent=Math.floor(speed*120);
 document.getElementById('score2').textContent=Math.floor(score);
 renderer.render(scene,camera);
}
animate();
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
