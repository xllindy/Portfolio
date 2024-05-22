/* Parallax effect */
let bg = document.getElementById("bg");
let nature = document.getElementById("nature");
let rock= document.getElementById("rock");
let title= document.getElementById("maintitle");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    nature.style.top = -value * 0.3 + 'px';
    rock.style.top = value * 0.07 + 'px';
    title.style.top = value * 1 + 'px';
})

/* Typing name effect */
const maintitle = document.getElementById('maintitle');
const newTitle = 'Lindy Rutten';
let charIndex = 0;

function writeTitle() {
    const interval = setInterval(() => {
        maintitle.textContent += newTitle[charIndex];
        charIndex++;
        if (charIndex === newTitle.length) {
            clearInterval(interval);
        }
    }, 100);
}
writeTitle();

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

/* Projects carousel */
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project-link');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
   
    let currentPairIndex = 0;
    let amountOfProjectsOnScreen=6
    let amountOfProjects=projects.length
    
    function showCurrentProjects() {
        projects.forEach((project, index) => {
            if((index>=currentPairIndex)&&(index<currentPairIndex+amountOfProjectsOnScreen)){
                project.classList.add("visible") 
            } else {
                project.classList.remove("visible")
            }
        });
    }

    showCurrentProjects();
    
    leftArrow.addEventListener('click', function() {
        if (currentPairIndex === 0) {
            currentPairIndex = amountOfProjects - amountOfProjectsOnScreen;
        } else {
            currentPairIndex = currentPairIndex - 2;
        }
        showCurrentProjects();
    });
    
    rightArrow.addEventListener('click', function() {
        if (currentPairIndex === amountOfProjects - amountOfProjectsOnScreen) {
            currentPairIndex = 0;
        } else {
            currentPairIndex = currentPairIndex + 2;
        }
        showCurrentProjects();
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