gsap.fromTo(
  "#ScrollAnimation",
  { opacity: 0 },
  {
    y: -30,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#ScrollAnimation",
      start: "top bottom",
      end: "center",
      toggleActions: "play none none none",
    },
  }
);

const alert = document.querySelector(".form-submit");

function openAlert() {
  alert.classList.add("form-submit-active");
}
