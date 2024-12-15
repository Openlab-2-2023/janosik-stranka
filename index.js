document.addEventListener("DOMContentLoaded", (event) => {

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

    const galleryImages = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    function showModal(index) {
        currentIndex = index;
        modalImage.src = galleryImages[currentIndex].src;
        modal.style.display = 'flex';
    }

    function closeModalFunction() {
        modal.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => showModal(index));
    });

    closeModal.addEventListener('click', closeModalFunction);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'flex') {
            if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'Escape') {
                closeModalFunction();
            }
        }
    });

    const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeBtn = document.querySelector('.close-btn');

        // Open menu
        hamburger.addEventListener('click', () => {
            mobileMenu.style.display = 'block';
        });

        // Close menu
        closeBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });

        // Close menu on outside click
        window.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.style.display = 'none';
            }
        });
});