// TypeIt for moving text
new TypeIt("#moving-txt", {
    strings: ['Full-Stack Developer '],
    startDelay: 250,
    speed: 150,
    loop: true,
    loopDelay: 100,
    waitUntilVisible: true,
}).pause(2500).go();

// GSAP for animations
gsap.registerPlugin(ScrollTrigger);

// Fade in sections
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        duration: 1,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
        }
    });
});

// Animate header elements
gsap.from("#main-intro h1", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });

// Animate elements in the About Me section
gsap.from("#about-me h2", { duration: 1, x: -100, opacity: 0, scrollTrigger: "#about-me" });


// Portfolio items animation
gsap.from("#portfolio-dev h2", { duration: 1, x: 100, opacity: 0, scrollTrigger: "#portfolio-dev" });

gsap.from("#portfolio-ml h2", { duration: 1, x: 100, opacity: 0, scrollTrigger: "#portfolio-ml" });

gsap.utils.toArray(".portfolio-item").forEach(item => {
    gsap.from(item, {
        duration: 1,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
        }
    });
});


// Blobs animation
const blobs = document.querySelectorAll('.blob');

blobs.forEach((blob, i) => {
    const direction = i % 2 === 0 ? '+=50' : '-=50';
    gsap.to(blob, {
        x: direction,
        y: direction,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});
