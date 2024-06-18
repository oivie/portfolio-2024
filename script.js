// // -------- ANIMATION GSAP START --------
// gsap.registerPlugin(ScrollTrigger);

// // Fade in sections
// gsap.utils.toArray("section").forEach(section => {
// gsap.from(section, {
//     duration: 1,
//     autoAlpha: 0,
//     ease: 'none',
//     scrollTrigger: {
//     trigger: section,
//     start: "top 90%",
//     end: "bottom 25%",
//     toggleActions: "play none none reverse"
//     }
// });
// });

// // Animate header elements
// gsap.from("#main-intro h1", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });

// // Animate elements in the About Me section
// gsap.from("#about-me h2", { duration: 1, x: -100, opacity: 0, scrollTrigger: "#about-me" });

// // Portfolio items animation
// gsap.from("#portfolio h2", { duration: 1, x: 100, opacity: 0, scrollTrigger: "#portfolio" });


// gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll(".parallax-section").forEach(section => {
//     let parallaxTl = gsap.timeline({
//         scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom top",
//             scrub: true
//         }
//     });

//     // parallaxTl
//     //     .from(section.querySelector(".parallax-layer"), {
//     //         y: '-20%',
//     //         ease: "none"
//     //     });
// });

// // -------- NAVBAR START --------


// // -------- NAVBAR END --------


// // -------- NAVBAR END --------



// // -------- ANIMATION GSAP END --------





// // -------- NAVBAR START --------
// if (window.innerWidth > 768) {
//     // Initialize parallax effect
//     // Parallax code goes here
// }
// // -------- NAVBAR END --------


// // -------- INTRO TYPING START --------
// 'Full Stack Developer'
new TypeIt("#moving-txt", {
    strings: ['Full Stack Developer '],
    startDelay: 250,
    speed: 150,
    loop: true,
    loopDelay: 100,
    waitUntilVisible: true,
    // afterComplete: function (instance) {
    //     instance.destroy();
    // }
}).pause(2500).go();


// // -------- INTRO TYPING END --------

// gsap.utils.toArray(".portfolio-item").forEach(item => {
//     gsap.from(item, {
//         duration: 1,
//         autoAlpha: 0,
//         ease: 'none',
//         scrollTrigger: {
//             trigger: item,
//             start: "top 90%",
//             end: "bottom 25%",
//             toggleActions: "play none none reverse"
//         }
//     });
// });


// // -------- NAVBAR START --------
// // -------- NAVBAR END --------




// ---------------------------------------------------------
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
gsap.from("#portfolio h2", { duration: 1, x: 100, opacity: 0, scrollTrigger: "#portfolio" });

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








