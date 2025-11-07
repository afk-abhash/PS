// Animation function for the adventure message
function showAdventureMessage() {
    const message = document.getElementById('adventure-message');
    if (message) {
        message.classList.add('show');
    }
}

// Add floating animation delays to planets
document.addEventListener('DOMContentLoaded', function() {
    const planets = document.querySelectorAll('.planet');
    planets.forEach((planet, index) => {
        const delay = planet.getAttribute('data-delay') || 0;
        planet.style.animationDelay = delay + 's';
    });
});

