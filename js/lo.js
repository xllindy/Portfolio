/* Scrolling navigation */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId); 
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

/* Open full image */
document.addEventListener('DOMContentLoaded', function() {
    const imagefull = document.getElementById('imagefull');
    const imagefullImage = document.getElementById('imagefull-image');
    const closeBtn = document.querySelector('.imagefull .close');
    const images = document.querySelectorAll('.images img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            imagefull.style.display = 'flex';
            imagefullImage.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        imagefull.style.display = 'none';
    });

    imagefull.addEventListener('click', function(e) {
        if (e.target !== imagefullImage) {
            imagefull   .style.display = 'none';
        }
    });
});