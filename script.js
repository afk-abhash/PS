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
        // Check localStorage for initial state
        const wasPlaying = localStorage.getItem('ourUniverse_isPlaying') !== 'false';
        musicToggle.textContent = wasPlaying ? '🎵' : '🔇';
        
        // Listen for messages from the audio player iframe
        window.addEventListener('message', function(event) {
            if (event.data.type === 'musicStatus') {
                musicToggle.textContent = event.data.playing ? '🎵' : '🔇';
            }
        });
        
        // Music toggle button
        musicToggle.addEventListener('click', function() {
            if (audioPlayerFrame.contentWindow) {
                audioPlayerFrame.contentWindow.postMessage({ type: 'toggleMusic' }, '*');
            }
        });
        
        // Ensure iframe loads quickly
        audioPlayerFrame.addEventListener('load', function() {
            // Iframe loaded, it will auto-resume from localStorage
        });
    }
});

