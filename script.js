// script.js

// ScrollReveal config
ScrollReveal().reveal('.slide h2', {
    delay: 200,
    origin: 'top',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });
  
  ScrollReveal().reveal('.slide p, .slide ul, .slide blockquote, .slide h3', {
    delay: 300,
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    interval: 100,
    reset: false
  });
  
  // Slide navigation
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  
  function showSlide(index) {
    slides[currentSlide].scrollIntoView({ behavior: "smooth" });
  }
  
  document.getElementById("next").addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });
  
  // Optional: scroll tracking to update currentSlide index
  window.addEventListener("scroll", () => {
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentSlide = i;
      }
    });
  });
  