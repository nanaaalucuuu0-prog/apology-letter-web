// Falling hearts and flowers animation
function createFallingItem() {
    const items = ['❤️', '💕', '🌹', '🌸', '💐', '🦋', '💖', '✨'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const fallingItem = document.createElement('div');
    fallingItem.className = 'falling-item';
    fallingItem.textContent = randomItem;
    
    const randomX = Math.random() * window.innerWidth;
    fallingItem.style.left = randomX + 'px';
    fallingItem.style.top = '-50px';
    
    const duration = Math.random() * 3 + 4; // 4-7 seconds
    fallingItem.style.animationDuration = duration + 's';
    
    document.querySelector('.falling-container').appendChild(fallingItem);
    
    setTimeout(() => fallingItem.remove(), duration * 1000);
}

// Create falling items every 300ms
setInterval(createFallingItem, 300);

// Envelope interaction
const envelope = document.getElementById('envelope');
const letterSection = document.getElementById('letterSection');
const carouselSection = document.getElementById('carouselSection');
const finalMessage = document.getElementById('finalMessage');
const btnNext = document.getElementById('btnNext');
const btnRestart = document.getElementById('btnRestart');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        document.querySelector('.envelope-section').style.display = 'none';
        letterSection.style.display = 'block';
    }, 600);
});

// Go to carousel
btnNext.addEventListener('click', () => {
    letterSection.style.display = 'none';
    carouselSection.style.display = 'block';
    initCarousel();
});

// Carousel functionality
let currentSlide = 1;
const totalSlides = 5;

function initCarousel() {
    // Create dots
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    showSlide(currentSlide);
}

function showSlide(n) {
    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;
    
    // Hide all slides
    document.querySelectorAll('.carousel-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    document.getElementById('slide' + currentSlide).classList.add('active');
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentSlide);
    });
    
    // Update counter
    document.getElementById('currentSlide').textContent = currentSlide;
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Carousel buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    if (currentSlide === totalSlides) {
        setTimeout(() => {
            carouselSection.style.display = 'none';
            finalMessage.style.display = 'block';
        }, 500);
    }
});

document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Restart button
btnRestart.addEventListener('click', () => {
    location.reload();
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (carouselSection.style.display === 'block') {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    }
});

// Touch/swipe support for carousel
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        nextSlide(); // Swipe left
    }
    if (touchEndX - touchStartX > 50) {
        prevSlide(); // Swipe right
    }
}