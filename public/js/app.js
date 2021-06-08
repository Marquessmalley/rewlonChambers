const burger = document.querySelector(".burger");

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    gsap.to("#logo", 1, { color: "black" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    gsap.to("#logo", 1, { color: "black" });
    document.body.classList.remove("hide");
  }
}
burger.addEventListener("click", navToggle);

// Home Page Animations
const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

timeline
  .from(".main-header", { duration: 2, ease: "bounce", y: "-100%" })
  .from(".main-img", {
    opacity: 0,
    stagger: 0.5,
  })
  .from(".home-text", { duration: 0.5, x: "-200%", ease: "in", opacity: 0 });

// Mixtape Page Animations
const mixtapeTimeline = gsap.timeline();
mixtapeTimeline
  .from(".hero-head", { duration: 1, y: "-200%", ease: "in", opacity: 0 })
  .fromTo(
    ".mix-img",
    { opacity: 1, duration: 1.7, delay: 0.5, scale: 0, rotation: 720 },
    { opacity: 1, duration: 1.7, delay: 0.5, scale: 1, rotation: 0 }
  )
  .from(".names", { duration: 0.5, x: "-100vw", opacity: 0 })
  .from(".artist", { duration: 0.5, x: "-100vw", opacity: 0, stagger: 0.5 });

// General Art Page

const aboutTimeline = gsap.timeline();

aboutTimeline
  .from(".gals", {
    duration: 0.5,
    x: "-100vw",
    ease: "in",
    opacity: 0,
    stagger: 0.5,
  })
  .from(
    ".gal",
    {
      duration: 0.5,
      x: "-100vw",
      ease: "in",
      opacity: 0,
      stagger: 0.5,
    },
    "<.5"
  );
