window.addEventListener('mousemove',e=>{
 const x=(e.clientX/window.innerWidth-.5)*20;
 const y=(e.clientY/window.innerHeight-.5)*20;
 document.querySelectorAll('.line').forEach((line,i)=>{
   line.style.transform=`rotate(28deg) translate(${x*(i+1)*0.2}px,${y*(i+1)*0.2}px)`;
 });
});
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Typing effect
const text = "WELCOME TO MY WORLD";
const target = document.querySelector(".bigtext");

if (target) {
  let i = 0;
  target.innerHTML = "";

  function typeText() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeText, 80);
    }
  }

  typeText();
}

// Button click effect
const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.innerText = "Message Sent!";
    btn.style.background = "#00c853";

    setTimeout(() => {
      btn.innerText = "Send";
      btn.style.background = "#ff3b30";
    }, 2500);
  });
}
