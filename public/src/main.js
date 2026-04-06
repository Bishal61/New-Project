gsap.registerPlugin(ScrollTrigger);

const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTL
    .from(".hero-badge", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
    })
    .from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
    }, "-=0.4")
    .from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, "-=0.4")
    .from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.6,
    }, "-=0.3")
    .from(".hero-stats", {
        opacity: 0,
        y: 30,
        duration: 0.8,
    }, "-=0.4");

gsap.from(".hero-image", {
    opacity: 0,
    scale: 1.1,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.8,
});

gsap.to(".hero-image", {
    scale: 1,
    duration: 2,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
});

document.querySelectorAll(".section-header").forEach((header) => {
    gsap.from(header, {
        scrollTrigger: {
            trigger: header,
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

gsap.from(".about-attr", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%"
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.from(".about-images", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%"
    },
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".destinations-grid", {
    scrollTrigger: {
        trigger: ".destinations-section",
        start: "top 70%"
    },
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".timeline-progress", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: ".why-us-section",
        start: "top 60%",
        end: "bottom 60%",
        scrub: 1,
    },
});

gsap.from(".timeline-circle", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.25,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".why-us-section",
        start: "top 60%",
        end: "bottom 60%",
        scrub: 1,
    },
});

document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const card = item.querySelector(".timeline-card");
    const isEven = index % 2 === 0;
    
    gsap.from(card, {
        x: isEven ? 100 : -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse",
        },
    });
});




