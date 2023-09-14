gsap.from('.title-animation h2', 1, {
  delay: 0.5,
  y: -30,
  opacity: 0
})

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

gsap.fromTo(
  "#myText",
  { opacity: 0 },
  {
    y: -30,
    opacity: 1,
    duration: 1,
    delay: 3,
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

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})