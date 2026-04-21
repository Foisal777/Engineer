# Moha-Engineering: Reloaded

A high-fidelity, satirical video game concept set in a hyper-realistic, dystopian Dhaka, Bangladesh in 2026. Built with modern web technologies for cross-platform compatibility, including Termux.

## Concept Overview

The game satirizes the political and economic crises in Bangladesh through exaggerated, caricatured gameplay.

### Setting
- Hyper-realistic dystopian Dhaka with energy crisis.
- Visual style: Cyberpunk 2077 lighting blended with gritty Bangladeshi alleys.
- Environment: Massive cityscape with "Load Shedding" - 70% of screen pitch black, illuminated by flickering lamps, phone screens, and distant generator glows. Dust particles dance in the light.

### Characters (Caricatures)
- **The Leader (Engineer)**: Middle-aged in crisp white Panjabi with "Engineer" helmet. Stoic, bewildered, pointing at useless pipe diagrams.
- **The Opposition**: Disheveled suit, handkerchief, exaggerated tears. Always in front of broken microphone.
- **The Citizen (Player)**: Exhausted office worker with laptop bag and portable fan.

### Gameplay Scenes
1. **Oil Crisis**: Slow-motion cinematic of cooking oil bottle filled with air. Label: "Soyabin: Imagination Edition."
2. **Banking**: Walk into majestic bank that degrades to cheap tile, flickering lights, vault replaced with "NPL: 30.6%" sign.

### UI/UX
- HUD: Government census form with glitching data.
- Inventory: "Meme Generator" tool against censorship.

### Technical Specs
- Render: High quality WebGL (equivalent to 8K on capable hardware)
- Effects: Ray-tracing like shadows, depth of field simulation
- Bengali signs: Blurred for aesthetic context
- Multi-language: JavaScript (core 3D game), HTML/CSS (UI), Python (meme generator tool)

## Meme Generator Tool
A Python-based tool for generating satirical memes.
- Install Python dependencies: `pip install -r requirements.txt`
- Run: `python meme_generator.py`

## Setup Instructions

### On PC/Linux:
1. Install Node.js and npm.
2. Run `npm install` to install dependencies (Three.js, Vite).
3. Run `npm run dev` to start development server.
4. Open http://localhost:5173 in browser.

### On Termux (Android):
1. Install Termux from F-Droid or Google Play.
2. Install Node.js: `pkg install nodejs`
3. Clone the repo: `git clone https://github.com/Foisal777/Engineer.git`
4. Cd into folder: `cd Engineer`
5. Install deps: `npm install`
6. Run dev server: `npm run dev`
7. Open in browser or use Termux's built-in browser.

### Python Meme Tool:
- Install Python: `pkg install python` (Termux)
- Install deps: `pip install -r requirements.txt`
- Run: `python meme_generator.py`

## Development Notes
- Uses Three.js for 3D rendering.
- Cross-platform: Runs in browsers, including mobile.
- Expand with more scenes, animations, and satirical elements.
