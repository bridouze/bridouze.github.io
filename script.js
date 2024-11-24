// Carousel automatique
const track = document.querySelector('.carousel-track');
let index = 0;

setInterval(() => {
    const items = document.querySelectorAll('.carousel-item');
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
