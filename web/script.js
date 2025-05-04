// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    // Options
    threshold: 0.5 // Trigger when at least 50% of the element is visible
});

// Start observing the element
let element = document.getElementById('header-section-intro');
observer.observe(element);
element = document.getElementById('header-section-llm');
observer.observe(element);
element = document.getElementById('header-section-robot');
observer.observe(element);
element = document.getElementById('header-section-trends');
observer.observe(element);