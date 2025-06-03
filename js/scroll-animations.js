document.addEventListener('DOMContentLoaded', () => {
    const animatedEls = document.querySelectorAll('.project-card');

    function animateOnScroll() {
        animatedEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});