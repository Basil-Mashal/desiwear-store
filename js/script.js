document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Optional: Close mobile menu when clicking a nav link (improves UX)
    const navItems = navLinks ? navLinks.querySelectorAll('a') : [];
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Hero Carousel (for index.html)
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        const slides = heroCarousel.querySelectorAll('.hero-slide');
        const dots = heroCarousel.querySelectorAll('.carousel-dots .dot');
        const prevBtn = heroCarousel.querySelector('.prev-btn');
        const nextBtn = heroCarousel.querySelector('.next-btn');
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
        };

        prevBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto-play carousel
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Testimonials Carousel (for index.html)
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    if (testimonialsCarousel) {
        const track = testimonialsCarousel.querySelector('.carousel-track');
        const slides = testimonialsCarousel.querySelectorAll('.testimonial-card');
        const prevBtn = testimonialsCarousel.querySelector('.prev-btn');
        const nextBtn = testimonialsCarousel.querySelector('.next-btn');
        let currentSlide = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        };

        prevBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        nextBtn?.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        });
    }
});