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

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    const items = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8]
    ];

    let currentPairIndex = 0;
    
    function showCurrentProjects() {
        projects.forEach((project, index) => {
            const pairIndex = Math.floor(index / 2) % items.length;
            const [firstIndex, secondIndex] = items[pairIndex];
            if (pairIndex === currentPairIndex) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    showCurrentProjects();
    
    leftArrow.addEventListener('click', function() {
        currentPairIndex = (currentPairIndex === 0) ? items.length - 1 : currentPairIndex - 1;
        showCurrentProjects();
    });
    
    rightArrow.addEventListener('click', function() {
        currentPairIndex = (currentPairIndex === items.length - 1) ? 0 : currentPairIndex + 1;
        showCurrentProjects();
    });
});