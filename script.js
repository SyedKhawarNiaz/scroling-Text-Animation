window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    gsap.to(".under-move", {
      transform: "translateX(-200%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to("img", {
      rotate: 180,
    });
  } else {
    gsap.to(".under-move", {
      transform: "translateX(0%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to("img", {
      rotate: 0,
    
    });
  }
});
