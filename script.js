// Récupère toutes les sections
const sections = document.querySelectorAll('.section');

// Index pour suivre la section active
let currentSectionIndex = 0;
let isScrolling = false; // Empêche le défilement multiple simultané

// Fonction pour passer à la section suivante ou précédente
const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return; // Vérifie les limites
    isScrolling = true;
    sections[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    currentSectionIndex = index;

    // Empêche le défilement rapide
    setTimeout(() => {
        isScrolling = false;
    }, 1000); // Temps pour laisser finir le scroll
};

// Gestion de l'événement 'wheel' pour détecter le scroll
window.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
        // Scroll vers le bas
        scrollToSection(currentSectionIndex + 1);
    } else if (event.deltaY < 0) {
        // Scroll vers le haut
        scrollToSection(currentSectionIndex - 1);
    }
});
