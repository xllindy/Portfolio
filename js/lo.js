/* Open full image */
const imagefull = document.getElementById('imagefull');
const imagefullImage = document.getElementById('imagefull-image');
const closeBtn = document.querySelector('.imagefull .close');
const images = document.querySelectorAll('.images img');

/* Toont overlay */
images.forEach(image => {
    image.addEventListener('click', function() {
        imagefull.style.display = 'flex';
        imagefullImage.src = this.src; /* Stelt de src in van geklikte afbeelding */
    });
});

/* Verbergt de overlay */
closeBtn.addEventListener('click', function() {
    imagefull.style.display = 'none'; 
});

/* Verbergt de overlay */
imagefull.addEventListener('click', function(e) {
    if (e.target !== imagefullImage) { /* Controleerd of er geklikt wordt */
        imagefull.style.display = 'none';
    }
});
