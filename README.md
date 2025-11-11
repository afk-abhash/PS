# Our Little Universe for Priyanka 💖

A romantic interactive website with memories, stories, and a mini-game.

## Features
- 🌌 Interactive planet universe map
- 📖 Scrollable story page with all memories
- 🎮 Love Quest mini-game
- 🎵 Background music (M83 - Outro)
- 🔒 Password-protected private photo gallery

## Setup
1. Open `index.html` in a web browser
2. Navigate through the story or explore the planet map
3. For private memories, you'll need the password

## Private Content Security
The `assets/US/` folder contains private photos that ARE included in the repo for deployment but are protected by:
1. **Password Protection**: Users must enter password `021125` to access the gallery
2. **Session-based Authentication**: Access token stored in session (cleared on browser close)
3. **Obfuscated Paths**: Photo paths are Base64 encoded in the code
4. **Obscure Folder Name**: `US` folder is not obviously named "photos" or "private"

**Security Model**: This provides reasonable privacy for a personal romantic project. Anyone with repo access CAN technically find the photos, but they won't appear in normal browsing and require the password through the application. For maximum security, host photos on a private server or use actual backend authentication.

## Music
Background music plays continuously from 1:25 onwards and loops seamlessly.

## Technologies
- Pure HTML, CSS, and JavaScript
- No frameworks or dependencies
- Works offline

---
Made with 💖 for Priyanka

