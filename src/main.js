var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "0% 95%",
    end: "60% 50%",
    scrub: "0.3",
  },
});

tl.to(".home-can", {
  top: "95%",
  left: "12%",
  rotate: "30deg",
  ease: "power1.inOut",
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-section",
    start: "0% 95%",
    end: "20% 10%",
    scrub: 0.3,
    markers: false,
  },
});

tl2.to(".home-can", {
  width: "30%",
  top: "330%",
  left: "35%",
  rotate: "0deg",
  ease: "power1.inOut",
});
