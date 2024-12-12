
// Nájdeme všetky obrázky a modal
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Otvorenie modalu pri kliknutí na obrázok
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Zobrazí modal
        modalImage.src = img.src; // Nastaví zdroj obrázka
    });
});

// Zatvorenie modalu pri kliknutí na krížik
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Skryje modal
});

// Zatvorenie modalu pri kliknutí mimo obrázka
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Efekt scrollovania pre sekciu #skivratna
document.addEventListener('scroll', function () {
    const imageContainer = document.querySelector('#skivratna .image-container');
    const containerPosition = imageContainer.getBoundingClientRect().top; // Pozícia elementu
    const screenPosition = window.innerHeight / 1.5; // Výška okna pre aktiváciu

    if (containerPosition < screenPosition) {
        imageContainer.classList.add('scrolled'); // Pridá triedu
    } else {
        imageContainer.classList.remove('scrolled'); // Odstráni triedu (ak sa posunie späť hore)
    }
});

// Select the target element
const targetElement = document.querySelector('#head-nav'); // Replace '.your-element' with your target element's selector

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        // Add the class when scrolled down
        targetElement.classList.add("scroll");
    } else {
        // Remove the class when at the top
        targetElement.classList.remove("scroll");
    }
});
