window.addEventListener('load', () => {
    console.log("Page fully loaded, starting animation...");
    
    const tl = gsap.timeline();
    
    tl.to(".loader-bar", { 
        width: "100%", 
        duration: 0.8, 
        ease: "power2.inOut" 
    })
    .to("#loader", { 
        y: "-100%", 
        duration: 0.8, 
        ease: "power4.inOut",
        onComplete: () => {
            // Remove the loader from DOM so it doesn't block clicks
            document.getElementById('loader').style.display = 'none';
        }
    })
    .from(".hero-content h1", { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        stagger: 0.2 
    });
});

// SAFETY TIMEOUT: If the page takes more than 5 seconds, force hide the loader
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader && loader.style.display !== 'none') {
        console.warn("Loader timed out. Forcing reveal.");
        gsap.to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" });
    }
}, 5000);
