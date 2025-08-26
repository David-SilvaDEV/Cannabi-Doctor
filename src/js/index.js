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