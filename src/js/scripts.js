AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, rgba(26,26,46,0.95), rgba(22,33,62,0.95))';
    } else {
        navbar.style.background = 'linear-gradient(135deg, var(--dark), #16213e)';
    }
});

const video = document.getElementById('videoPlayer');
const modal = document.getElementById('videoModal');

modal.addEventListener('show.bs.modal', function () {
    video.load();
    video.play();
});

modal.addEventListener('hidden.bs.modal', function () {
    video.pause();
    video.currentTime = 0;
});

document.getElementById('ano-atual').textContent = new Date().getFullYear();