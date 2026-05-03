// Premium Website JavaScript

// Loader remove smoothly
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1800);
  }
});

// Mouse parallax effect
document.addEventListener("mousemove", (e) => {
  const content = document.querySelector(".content");
  if (content) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    content.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Menu click popup
const menu = document.querySelector(".menu");
if (menu) {
  menu.addEventListener("click", () => {
    alert("Navigation menu can be connected here.");
  });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".about, .contact");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

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
