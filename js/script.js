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