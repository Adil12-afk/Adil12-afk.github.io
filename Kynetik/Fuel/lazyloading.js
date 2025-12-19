document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                
                img.src = img.dataset.src;
                
                
                
                obs.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));

});