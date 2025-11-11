// Animation function for the adventure message
function showAdventureMessage() {
    const message = document.getElementById('adventure-message');
    if (message) {
        message.classList.add('show');
    }
}

// Background music management with persistent iframe player
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation delays to planets
    const planets = document.querySelectorAll('.planet');
    planets.forEach((planet, index) => {
        const delay = planet.getAttribute('data-delay') || 0;
        planet.style.animationDelay = delay + 's';
    });
    
    // Handle persistent audio player
    const audioPlayerFrame = document.getElementById('audioPlayerFrame');
    const musicToggle = document.getElementById('musicToggle');
    
    if (audioPlayerFrame && musicToggle) {
        // Check localStorage directly for immediate button state
        const isMuted = localStorage.getItem('ourUniverse_isMuted') === 'true';
        musicToggle.textContent = isMuted ? '🔇' : '🎵';
        
        // Listen for messages from the audio player iframe
        window.addEventListener('message', function(event) {
            if (event.data.type === 'musicStatus') {
                musicToggle.textContent = event.data.muted ? '🔇' : '🎵';
            }
        });
        
        // Music toggle button
        musicToggle.addEventListener('click', function() {
            if (audioPlayerFrame.contentWindow) {
                audioPlayerFrame.contentWindow.postMessage({ type: 'toggleMusic' }, '*');
            }
        });
        
        // Request status update once iframe is loaded
        audioPlayerFrame.addEventListener('load', function() {
            setTimeout(() => {
                if (audioPlayerFrame.contentWindow) {
                    audioPlayerFrame.contentWindow.postMessage({ type: 'getMusicStatus' }, '*');
                }
            }, 100);
        });
    }
});

