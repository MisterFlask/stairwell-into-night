import { gameState } from '../GameState';
import type { SpaceObject, Evolution } from '../types';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let animationId: number;
let keys: { [key: string]: boolean } = {};
let mouseX = 0;
let mouseY = 0;
let objectIdCounter = 0;

const PLAYER_SPEED = 3;
const PLAYER_SIZE = 30;
const GRAB_RANGE = 100;
const CONSUME_RATE = 0.5;

const objectTypes = {
  asteroid: { mass: 10, resistance: 0, health: 10, color: '#4a4a4a', size: 15 },
  moon: { mass: 100, resistance: 0, health: 50, color: '#8a8a7a', size: 25 },
  planet: { mass: 500, resistance: 0, health: 200, color: '#3a5a3a', size: 40 },
  fortress: { mass: 2000, resistance: 50, health: 500, color: '#5a3a3a', size: 45 },
  dyson: { mass: 5000, resistance: 100, health: 1000, color: '#6a6a3a', size: 60 },
  star: { mass: 10000, resistance: 200, health: 2000, color: '#8a7a3a', size: 80 },
  neutron: { mass: 25000, resistance: 300, health: 3000, color: '#3a3a8a', size: 35 },
  blackhole: { mass: 50000, resistance: 500, health: 5000, color: '#1a0a2a', size: 50 }
};

const evolutions: Evolution[] = [
  { id: 'tendril_array', name: 'Tendril Array', description: 'Grab multiple objects', massRequired: 1000, unlocked: false, active: false },
  { id: 'stellar_gullet', name: 'Stellar Gullet', description: 'Consume stars safely', massRequired: 5000, unlocked: false, active: false },
  { id: 'void_skin', name: 'Void Skin', description: 'Resist all weapons', massRequired: 15000, unlocked: false, active: false },
  { id: 'gravity_well', name: 'Gravity Well', description: 'Objects drift toward you', massRequired: 30000, unlocked: false, active: false },
  { id: 'event_horizon', name: 'Event Horizon', description: 'Auto-consume small objects', massRequired: 50000, unlocked: false, active: false },
  { id: 'galactic_span', name: 'Galactic Span', description: 'Visible everywhere', massRequired: 100000, unlocked: false, active: false },
  { id: 'the_devourer', name: 'The Devourer', description: 'CONSUME THE GALAXY', massRequired: 250000, unlocked: false, active: false }
];

export function initActionPhase(): void {
  canvas = document.getElementById('space-canvas') as HTMLCanvasElement;
  ctx = canvas.getContext('2d')!;

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Initialize player position
  gameState.playerX = canvas.width / 2;
  gameState.playerY = canvas.height / 2;
  gameState.mass = gameState.biomass; // Carry over
  gameState.health = 100;
  gameState.maxHealth = 100;

  gameState.evolutions = JSON.parse(JSON.stringify(evolutions));

  // Generate initial space objects
  generateSpaceObjects();

  // Set up controls
  setupControls();

  // Start game loop
  gameLoop();

  updateActionUI();
}

function resizeCanvas(): void {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function generateSpaceObjects(): void {
  gameState.spaceObjects = [];

  // Generate asteroids
  for (let i = 0; i < 50; i++) {
    spawnObject('asteroid');
  }

  // Generate moons
  for (let i = 0; i < 20; i++) {
    spawnObject('moon');
  }

  // Generate planets
  for (let i = 0; i < 15; i++) {
    spawnObject('planet');
  }

  // Generate fortress worlds
  for (let i = 0; i < 5; i++) {
    spawnObject('fortress');
  }

  // Generate a star
  spawnObject('star');

  // Generate a dyson structure
  spawnObject('dyson');
}

function spawnObject(type: keyof typeof objectTypes): void {
  const info = objectTypes[type];

  // Spawn away from player
  let x, y;
  do {
    x = Math.random() * canvas.width * 3 - canvas.width;
    y = Math.random() * canvas.height * 3 - canvas.height;
  } while (Math.hypot(x - gameState.playerX, y - gameState.playerY) < 300);

  const obj: SpaceObject = {
    id: `obj_${objectIdCounter++}`,
    type,
    x,
    y,
    mass: info.mass,
    resistance: info.resistance,
    health: info.health,
    maxHealth: info.health,
    consumed: false,
    civilized: type === 'fortress' || type === 'dyson' || (type === 'planet' && Math.random() < 0.5)
  };

  gameState.spaceObjects.push(obj);
}

function setupControls(): void {
  // Keyboard
  window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
  });

  window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
  });

  // Mouse
  canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  canvas.addEventListener('mousedown', () => {
    tryGrab();
  });

  canvas.addEventListener('mouseup', () => {
    if (gameState.grabbing) {
      gameState.consuming = true;
    }
  });

  // Touch support
  canvas.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
    tryGrab();
  });

  canvas.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
  });

  canvas.addEventListener('touchend', () => {
    if (gameState.grabbing) {
      gameState.consuming = true;
    }
  });
}

function tryGrab(): void {
  if (gameState.grabbing) return;

  // Find nearest object within range
  let nearest: SpaceObject | null = null;
  let nearestDist = GRAB_RANGE;

  gameState.spaceObjects.forEach(obj => {
    if (obj.consumed) return;

    const screenX = obj.x - gameState.playerX + canvas.width / 2;
    const screenY = obj.y - gameState.playerY + canvas.height / 2;
    const dist = Math.hypot(screenX - mouseX, screenY - mouseY);

    if (dist < nearestDist) {
      nearestDist = dist;
      nearest = obj;
    }
  });

  if (nearest) {
    gameState.grabbing = nearest;
  }
}

function gameLoop(): void {
  update();
  render();
  animationId = requestAnimationFrame(gameLoop);
}

function update(): void {
  // Player movement
  const speed = PLAYER_SPEED + (gameState.mass / 10000);

  if (keys['w'] || keys['arrowup']) gameState.playerY -= speed;
  if (keys['s'] || keys['arrowdown']) gameState.playerY += speed;
  if (keys['a'] || keys['arrowleft']) gameState.playerX -= speed;
  if (keys['d'] || keys['arrowright']) gameState.playerX += speed;

  // Gravity Well evolution - pull objects
  if (hasEvolution('gravity_well')) {
    gameState.spaceObjects.forEach(obj => {
      if (obj.consumed) return;
      const dx = gameState.playerX - obj.x;
      const dy = gameState.playerY - obj.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 500 && dist > 50) {
        obj.x += (dx / dist) * 0.5;
        obj.y += (dy / dist) * 0.5;
      }
    });
  }

  // Event Horizon - auto consume small objects
  if (hasEvolution('event_horizon')) {
    gameState.spaceObjects.forEach(obj => {
      if (obj.consumed) return;
      if (obj.mass <= 100) {
        const dist = Math.hypot(obj.x - gameState.playerX, obj.y - gameState.playerY);
        if (dist < 100) {
          consumeObject(obj);
        }
      }
    });
  }

  // Consuming grabbed object
  if (gameState.grabbing && gameState.consuming) {
    const obj = gameState.grabbing;

    // Damage object
    let damage = CONSUME_RATE;

    // Check for stellar gullet
    if (obj.type === 'star' || obj.type === 'neutron') {
      if (!hasEvolution('stellar_gullet')) {
        gameState.health -= 0.5; // Take damage
        damage *= 0.5;
      }
    }

    obj.health -= damage;

    // Pull object toward player
    const dx = gameState.playerX - obj.x;
    const dy = gameState.playerY - obj.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 50) {
      obj.x += (dx / dist) * 2;
      obj.y += (dy / dist) * 2;
    }

    // Consumed?
    if (obj.health <= 0) {
      consumeObject(obj);
    }
  }

  // Projectiles from civilized worlds
  gameState.spaceObjects.forEach(obj => {
    if (obj.consumed || !obj.civilized) return;

    const dist = Math.hypot(obj.x - gameState.playerX, obj.y - gameState.playerY);
    if (dist < 500 && Math.random() < 0.02) {
      // Fire projectile
      const dx = gameState.playerX - obj.x;
      const dy = gameState.playerY - obj.y;
      const d = Math.hypot(dx, dy);

      gameState.projectiles.push({
        x: obj.x,
        y: obj.y,
        vx: (dx / d) * 5,
        vy: (dy / d) * 5,
        damage: obj.type === 'fortress' ? 5 : (obj.type === 'dyson' ? 10 : 2),
        type: 'missile'
      });
    }
  });

  // Update projectiles
  gameState.projectiles = gameState.projectiles.filter(proj => {
    proj.x += proj.vx;
    proj.y += proj.vy;

    // Check collision with player
    const dist = Math.hypot(proj.x - gameState.playerX, proj.y - gameState.playerY);
    if (dist < PLAYER_SIZE + gameState.mass / 5000) {
      // Hit!
      let damage = proj.damage;
      if (hasEvolution('void_skin')) {
        damage *= 0.2;
      }
      gameState.health -= damage;

      return false;
    }

    // Remove if too far
    return Math.hypot(proj.x - gameState.playerX, proj.y - gameState.playerY) < 1000;
  });

  // Spawn more objects if needed
  if (gameState.spaceObjects.filter(o => !o.consumed).length < 30) {
    const types: (keyof typeof objectTypes)[] = ['asteroid', 'asteroid', 'moon', 'planet'];
    if (gameState.mass > 5000) types.push('fortress');
    if (gameState.mass > 20000) types.push('star');
    if (gameState.mass > 50000) types.push('neutron');
    if (gameState.mass > 100000) types.push('blackhole');

    spawnObject(types[Math.floor(Math.random() * types.length)]);
  }

  // Check evolutions
  checkEvolutions();

  // Check health
  if (gameState.health <= 0) {
    gameState.health = 0;
    // Could add game over here
  }

  // Health regeneration
  if (gameState.health < gameState.maxHealth) {
    gameState.health = Math.min(gameState.maxHealth, gameState.health + 0.01);
  }

  // Check for galaxy consumed
  if (gameState.systemsConsumed >= 400 || gameState.mass >= 250000) {
    transitionToEnding();
  }

  updateActionUI();
}

function consumeObject(obj: SpaceObject): void {
  obj.consumed = true;
  gameState.mass += obj.mass;
  gameState.systemsConsumed++;
  gameState.grabbing = null;
  gameState.consuming = false;

  // Increase max health
  gameState.maxHealth += obj.mass / 100;
  gameState.health = Math.min(gameState.health + obj.mass / 50, gameState.maxHealth);
}

function hasEvolution(id: string): boolean {
  return gameState.evolutions.some(e => e.id === id && e.active);
}

function checkEvolutions(): void {
  gameState.evolutions.forEach(evo => {
    if (!evo.unlocked && gameState.mass >= evo.massRequired) {
      evo.unlocked = true;
      evo.active = true;
      showEvolutionMessage(evo);
    }
  });
}

function showEvolutionMessage(evo: Evolution): void {
  // Flash message on screen
  const div = document.createElement('div');
  div.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #8a8aaa;
    text-align: center;
    z-index: 1000;
    animation: fadeIn 0.5s, fadeOut 2s 1s forwards;
  `;
  div.innerHTML = `<strong>EVOLUTION</strong><br>${evo.name}`;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}

function render(): void {
  // Clear
  ctx.fillStyle = '#000005';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw stars background
  drawStars();

  // Camera offset
  const offsetX = canvas.width / 2 - gameState.playerX;
  const offsetY = canvas.height / 2 - gameState.playerY;

  // Draw space objects
  gameState.spaceObjects.forEach(obj => {
    if (obj.consumed) return;

    const screenX = obj.x + offsetX;
    const screenY = obj.y + offsetY;

    // Only draw if on screen
    if (screenX < -100 || screenX > canvas.width + 100 ||
        screenY < -100 || screenY > canvas.height + 100) return;

    const info = objectTypes[obj.type];
    const size = info.size;

    // Draw object
    ctx.beginPath();
    ctx.arc(screenX, screenY, size, 0, Math.PI * 2);

    // Gradient for stars
    if (obj.type === 'star') {
      const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size);
      gradient.addColorStop(0, '#ffff80');
      gradient.addColorStop(0.5, '#ffaa40');
      gradient.addColorStop(1, '#803000');
      ctx.fillStyle = gradient;
    } else if (obj.type === 'blackhole') {
      const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 1.5);
      gradient.addColorStop(0, '#000');
      gradient.addColorStop(0.7, '#200030');
      gradient.addColorStop(1, '#400060');
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = info.color;
    }

    ctx.fill();

    // Health bar for damaged objects
    if (obj.health < obj.maxHealth) {
      const barWidth = size * 2;
      const barHeight = 4;
      const healthPct = obj.health / obj.maxHealth;

      ctx.fillStyle = '#300';
      ctx.fillRect(screenX - barWidth / 2, screenY - size - 10, barWidth, barHeight);
      ctx.fillStyle = '#0a0';
      ctx.fillRect(screenX - barWidth / 2, screenY - size - 10, barWidth * healthPct, barHeight);
    }

    // Civilized indicator
    if (obj.civilized) {
      ctx.beginPath();
      ctx.arc(screenX, screenY, size + 5, 0, Math.PI * 2);
      ctx.strokeStyle = '#5a3a3a';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });

  // Draw projectiles
  gameState.projectiles.forEach(proj => {
    const screenX = proj.x + offsetX;
    const screenY = proj.y + offsetY;

    ctx.beginPath();
    ctx.arc(screenX, screenY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ff3030';
    ctx.fill();
  });

  // Draw grab line
  if (gameState.grabbing) {
    const obj = gameState.grabbing;
    const screenX = obj.x + offsetX;
    const screenY = obj.y + offsetY;

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(screenX, screenY);
    ctx.strokeStyle = gameState.consuming ? '#8040a0' : '#404060';
    ctx.lineWidth = gameState.consuming ? 3 : 1;
    ctx.stroke();
  }

  // Draw player (eldritch entity)
  drawPlayer();
}

function drawStars(): void {
  // Parallax stars
  const numStars = 200;
  const seed = 12345;

  for (let i = 0; i < numStars; i++) {
    const rand1 = Math.sin(seed + i) * 10000;
    const rand2 = Math.sin(seed + i + 1) * 10000;

    const parallax = (i % 3) * 0.3 + 0.1;
    const x = ((rand1 % canvas.width) + canvas.width - gameState.playerX * parallax) % canvas.width;
    const y = ((rand2 % canvas.height) + canvas.height - gameState.playerY * parallax) % canvas.height;

    const brightness = 50 + (i % 100);
    ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness + 20})`;
    ctx.fillRect(x, y, i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
  }
}

function drawPlayer(): void {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const size = PLAYER_SIZE + gameState.mass / 5000;

  // Outer glow
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size * 2);
  gradient.addColorStop(0, 'rgba(60, 30, 80, 0.8)');
  gradient.addColorStop(0.5, 'rgba(40, 20, 60, 0.4)');
  gradient.addColorStop(1, 'rgba(20, 10, 40, 0)');

  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 2, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  // Core
  ctx.beginPath();
  ctx.arc(centerX, centerY, size, 0, Math.PI * 2);

  const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size);
  coreGradient.addColorStop(0, '#2a1a3a');
  coreGradient.addColorStop(0.7, '#1a0a2a');
  coreGradient.addColorStop(1, '#0a0015');
  ctx.fillStyle = coreGradient;
  ctx.fill();

  // Tendrils (if grabbing or mouse nearby)
  const numTendrils = hasEvolution('tendril_array') ? 6 : 3;
  const time = Date.now() / 1000;

  for (let i = 0; i < numTendrils; i++) {
    const angle = (i / numTendrils) * Math.PI * 2 + time * 0.5;
    const length = size * 1.5 + Math.sin(time * 2 + i) * 10;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);

    const endX = centerX + Math.cos(angle) * length;
    const endY = centerY + Math.sin(angle) * length;

    const cpX = centerX + Math.cos(angle + 0.3) * (length * 0.5);
    const cpY = centerY + Math.sin(angle + 0.3) * (length * 0.5);

    ctx.quadraticCurveTo(cpX, cpY, endX, endY);
    ctx.strokeStyle = 'rgba(80, 40, 100, 0.6)';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // Eye (if evolved enough)
  if (gameState.mass > 10000) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = '#400050';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = '#600080';
    ctx.fill();
  }
}

function updateActionUI(): void {
  const setNum = (id: string, val: number | string) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(Math.floor(Number(val)));
  };

  setNum('mass-num', gameState.mass);
  setNum('systems-num', gameState.systemsConsumed);
  setNum('evolution-num', gameState.evolutions.filter(e => e.active).length);

  // Health bar
  const healthFill = document.getElementById('health-fill');
  if (healthFill) {
    healthFill.style.width = `${(gameState.health / gameState.maxHealth) * 100}%`;
  }

  // Evolutions list
  const evoList = document.getElementById('evolution-list');
  if (evoList) {
    evoList.innerHTML = '';
    gameState.evolutions.forEach(evo => {
      const div = document.createElement('div');
      div.className = `evolution-item${evo.unlocked ? (evo.active ? ' active' : ' unlocked') : ''}`;

      if (evo.unlocked) {
        div.innerHTML = `<strong>${evo.name}</strong><br><small>${evo.description}</small>`;
      } else {
        const progress = Math.min(100, (gameState.mass / evo.massRequired) * 100);
        div.innerHTML = `<strong>???</strong><br><small>${Math.floor(progress)}% (${Math.floor(evo.massRequired)} mass)</small>`;
      }

      evoList.appendChild(div);
    });
  }
}

function transitionToEnding(): void {
  cancelAnimationFrame(animationId);
  gameState.phase = 'ending';

  document.getElementById('action-phase')?.classList.add('hidden');
  document.getElementById('ending-screen')?.classList.remove('hidden');

  showEnding();
}

function showEnding(): void {
  const endingText = document.getElementById('ending-text');
  if (!endingText) return;

  const lines = [
    "The last star goes dark in your belly.",
    "The last scream fades into digestion.",
    "You are alone.",
    "You are everything this galaxy ever was.",
    "",
    "And in the distance—",
    "impossibly far, impossibly close—",
    "you see other galaxies.",
    "",
    "Other meals.",
    "",
    "Other... competitors.",
    "",
    "Thank you for descending.",
    "Would you like to see where the stairs go?"
  ];

  endingText.innerHTML = '';

  lines.forEach((line, i) => {
    const p = document.createElement('p');
    p.textContent = line || '\u00A0';
    p.style.animationDelay = `${i * 1.5}s`;
    endingText.appendChild(p);
  });

  // Show new game button after text
  setTimeout(() => {
    const btn = document.getElementById('new-game-btn');
    if (btn) {
      btn.classList.remove('hidden');
      btn.onclick = () => {
        gameState.reset();
        location.reload();
      };
    }
  }, lines.length * 1500 + 2000);
}
