document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Section Entrance Animation
  const heroTl = gsap.timeline();
  heroTl.from(".hero-content h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  })
  .from(".hero-content .subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from(".hero-content .dates", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");

  // 2. Scroll Animations for Cards and Content
  const cards = document.querySelectorAll(".glass-card");

  cards.forEach((card) => {
    // Select all table rows or list items inside the card for staggering
    const rows = card.querySelectorAll("tbody tr, .styled-list li");

    // Create a timeline for each card linked to its scroll position
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%", // Animation starts when top of card hits 85% of viewport
        toggleActions: "play none none reverse" // Reverses on scroll up
      }
    });

    // Animate the card itself
    cardTl.from(card, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // If there are table rows or list items, stagger them in
    if (rows.length > 0) {
      cardTl.from(rows, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4"); // Overlap with the card animation
    }
  });

  // 3. Floating Action Button (FAB) Logic
  const fabBtn = document.getElementById("fabBtn");
  if (fabBtn) {
    window.addEventListener("scroll", () => {
      // Show FAB after scrolling down 500px
      if (window.scrollY > 500) {
        fabBtn.classList.add("visible");
      } else {
        fabBtn.classList.remove("visible");
      }
    });
  }
});

