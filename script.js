// Slider Configuration
const slides = document.querySelectorAll('.slide');
const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const ctaButton = document.getElementById('ctaButton');

let currentIndex = Math.floor(slides.length / 2); // Start from middle
const totalSlides = slides.length;

// Determine visible slides based on screen size
function getVisibleSlides() {
    const width = window.innerWidth;
    if (width <= 768) {
        return 1; // Mobile: 1 card visible
    }
    return 5; // Desktop: always 5 cards visible
}

// Update active slide and CTA link
function updateSlider() {
    // Remove active class from all slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.style.display = 'block';
    });
    
    // Add active class to current slide
    slides[currentIndex].classList.add('active');
    
    // Update CTA button link
    const currentLink = slides[currentIndex].getAttribute('data-link');
    ctaButton.href = currentLink;
    
    const visibleSlides = getVisibleSlides();
    
    if (visibleSlides === 1) {
        // Mobile: show active slide + parts of adjacent slides
        slides.forEach((slide, index) => {
            slide.style.display = 'block';
        });
        
        // Center the active slide
        const activeSlide = slides[currentIndex];
        const containerWidth = sliderTrack.parentElement.offsetWidth;
        const slideLeft = activeSlide.offsetLeft;
        const slideWidth = activeSlide.offsetWidth;
        const offset = (containerWidth / 2) - (slideLeft + slideWidth / 2);
        sliderTrack.style.transform = `translateX(${offset}px)`;
    } else {
        // Desktop: show 5 cards centered around active
        const halfVisible = Math.floor(visibleSlides / 2);
        let startIndex = currentIndex - halfVisible;
        
        slides.forEach((slide, index) => {
            const distance = Math.abs(index - currentIndex);
            if (distance <= halfVisible) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        
        sliderTrack.style.transform = 'translateX(0)';
    }
}

// Navigate to specific slide
function goToSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    updateSlider();
}

// Previous slide
function prevSlide() {
    goToSlide(currentIndex - 1);
}

// Next slide
function nextSlide() {
    goToSlide(currentIndex + 1);
}

// Click on slide to make it active
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        if (index !== currentIndex) {
            goToSlide(index);
        } else {
            // If clicking on active slide, go to its link
            window.location.href = slide.getAttribute('data-link');
        }
    });
});

// Event listeners for navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}

// Update slider on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateSlider();
    }, 250);
});

// Initialize slider
updateSlider();

// Auto-play (optional - uncomment to enable)
/*
let autoplayInterval;
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Pause autoplay on hover
sliderTrack.addEventListener('mouseenter', stopAutoplay);
sliderTrack.addEventListener('mouseleave', startAutoplay);
*/
