document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section').forEach((section, i) => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }});
    });

    document.querySelector('.scroll-btn').addEventListener('click', function() {
        gsap.to(window, {scrollTo: {y: '.projects', offsetY: 50}, duration: 1.2, ease: 'power2.out'});
    });

    ScrollTrigger.create({
        trigger: '.container',
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false
    });
});
