// Animation function for the adventure message
function showAdventureMessage() {
    const message = document.getElementById('adventure-message');
    if (message) {
        message.classList.add('show');
    }
}

// Music player in separate tab
let musicWindow = null;

// Background music management with separate tab
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation delays to planets
    const planets = document.querySelectorAll('.planet');
    planets.forEach((planet, index) => {
        const delay = planet.getAttribute('data-delay') || 0;
        planet.style.animationDelay = delay + 's';
    });
    
    // Handle music toggle button
    const musicToggle = document.getElementById('musicToggle');
    
    if (musicToggle) {
        // Check if music window exists
        const musicWindowOpen = sessionStorage.getItem('musicWindowOpen') === 'true';
        musicToggle.textContent = musicWindowOpen ? '🎵' : '🔇';
        
        // Music toggle button - opens new tab or closes it
        musicToggle.addEventListener('click', function() {
            if (!musicWindow || musicWindow.closed) {
                // Open music player in new tab
                musicWindow = window.open('music_player.html', 'MusicPlayer', 'width=400,height=500');
                sessionStorage.setItem('musicWindowOpen', 'true');
                musicToggle.textContent = '🎵';
            } else {
                // Close music window
                musicWindow.close();
                musicWindow = null;
                sessionStorage.setItem('musicWindowOpen', 'false');
                musicToggle.textContent = '🔇';
            }
        });
        
        // Listen for messages from music player
        window.addEventListener('message', function(event) {
            if (event.data.type === 'musicStarted') {
                musicToggle.textContent = '🎵';
                sessionStorage.setItem('musicWindowOpen', 'true');
            }
        });
        
        // Check if window is still open periodically
        setInterval(() => {
            if (musicWindow && musicWindow.closed) {
                musicWindow = null;
                sessionStorage.setItem('musicWindowOpen', 'false');
                musicToggle.textContent = '🔇';
            }
        }, 1000);
    }
});

