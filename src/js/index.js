// slides automáticos
const slides = document.querySelectorAll(".slide");
const controls = document.querySelectorAll(".controles button");
let current = 0;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        controls[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            controls[i].classList.add("active");
        }
    });
}

controls.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        current = i;
        mostrarSlide(current);
    });
});

// Automático cada 5s
setInterval(() => {
    current = (current + 1) % slides.length;
    mostrarSlide(current);
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".usage");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let index = [...cards].indexOf(entry.target);

          // mostrar de dos en dos
          entry.target.classList.add("show");
          if (cards[index + 1]) {
            setTimeout(() => {
              cards[index + 1].classList.add("show");
            }, 200); // pequeño delay para que entre la pareja
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
  });


  const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav.links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
  navToggle.classList.toggle('open');
});