import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 10, 100); // Dark fog for dystopian feel

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Pitch black background
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Lighting: Simulate load shedding
const ambientLight = new THREE.AmbientLight(0x404040, 0.1); // Very dim
scene.add(ambientLight);

// Flickering hurricane lamp
const lampLight = new THREE.PointLight(0xffaa00, 1, 50);
lampLight.position.set(0, 5, 0);
lampLight.castShadow = true;
scene.add(lampLight);

// Mobile phone screen light
const phoneLight = new THREE.PointLight(0x00aaff, 0.5, 20);
phoneLight.position.set(2, 2, 2);
scene.add(phoneLight);

// Diesel generator glow (distant)
const generatorLight = new THREE.PointLight(0xff0000, 0.3, 100);
generatorLight.position.set(10, 10, -20);
scene.add(generatorLight);

// Dust particles
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 200;
}
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Ground (alley)
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Buildings (simple boxes)
const buildingGeometry = new THREE.BoxGeometry(5, 20, 5);
const buildingMaterial = new THREE.MeshLambertMaterial({ color: 0x222222 });
for (let i = 0; i < 10; i++) {
  const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
  building.position.set((Math.random() - 0.5) * 50, 10, (Math.random() - 0.5) * 50);
  building.castShadow = true;
  scene.add(building);
}

// Player (Citizen)
const playerGeometry = new THREE.BoxGeometry(1, 2, 1);
const playerMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.set(0, 1, 5);
scene.add(player);

// Leader (Engineer)
const leaderGeometry = new THREE.BoxGeometry(1, 2, 1);
const leaderMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const leader = new THREE.Mesh(leaderGeometry, leaderMaterial);
leader.position.set(-5, 1, 0);
// Add helmet (simple cylinder)
const helmetGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.5);
const helmetMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const helmet = new THREE.Mesh(helmetGeometry, helmetMaterial);
helmet.position.set(0, 0.5, 0);
leader.add(helmet);
scene.add(leader);

// Opposition
const oppositionGeometry = new THREE.BoxGeometry(1, 2, 1);
const oppositionMaterial = new THREE.MeshLambertMaterial({ color: 0x000080 });
const opposition = new THREE.Mesh(oppositionGeometry, oppositionMaterial);
opposition.position.set(5, 1, 0);
scene.add(opposition);

// UI HUD (simple text)
const hudCanvas = document.createElement('canvas');
hudCanvas.width = 512;
hudCanvas.height = 256;
const hudContext = hudCanvas.getContext('2d');
hudContext.fillStyle = 'rgba(0,0,0,0.5)';
hudContext.fillRect(0, 0, 512, 256);
hudContext.fillStyle = 'white';
hudContext.font = '20px Arial';
hudContext.fillText('Census Form HUD', 10, 30);
hudContext.fillText('Load Shedding: 70%', 10, 60);
hudContext.fillText('Meme Generator: Ready', 10, 90);
const hudTexture = new THREE.CanvasTexture(hudCanvas);
const hudMaterial = new THREE.MeshBasicMaterial({ map: hudTexture, transparent: true });
const hudGeometry = new THREE.PlaneGeometry(5, 2.5);
const hud = new THREE.Mesh(hudGeometry, hudMaterial);
hud.position.set(0, 0, -5);
scene.add(hud);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Flicker lights
  lampLight.intensity = 0.5 + Math.random() * 0.5;
  phoneLight.intensity = 0.3 + Math.random() * 0.2;

  // Move particles
  particles.rotation.y += 0.001;

  // Simple player movement (WASD)
  if (keys['w']) player.position.z -= 0.1;
  if (keys['s']) player.position.z += 0.1;
  if (keys['a']) player.position.x -= 0.1;
  if (keys['d']) player.position.x += 0.1;

  camera.position.x = player.position.x;
  camera.position.z = player.position.z + 5;
  camera.lookAt(player.position);

  renderer.render(scene, camera);
}

// Keyboard input
const keys = {};
window.addEventListener('keydown', (e) => keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();