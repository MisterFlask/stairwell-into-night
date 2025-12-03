import { gameState } from '../GameState';
import type { Entity, Tech, Bait, Defense } from '../types';

const GRID_WIDTH = 13;
const GRID_HEIGHT = 9;
const HEX_WIDTH = 52;
const HEX_HEIGHT = 60;

const baits: Bait[] = [
  { id: 'lost_child', name: 'Lost Child', cost: { echoes: 50 }, attracts: ['wanderer', 'seeker'], description: 'They hear crying from below.' },
  { id: 'treasure', name: 'Treasure Gleam', cost: { biomass: 100 }, attracts: ['wanderer', 'hunter'], description: 'Gold light from impossible depths.' },
  { id: 'familiar_voice', name: 'Familiar Voice', cost: { echoes: 200 }, attracts: ['seeker', 'wanderer'], description: 'Someone they lost calls to them.' },
  { id: 'the_answer', name: 'The Answer', cost: { echoes: 500 }, attracts: ['seeker'], description: 'The solution to everything waits below.' },
  { id: 'mass_hysteria', name: 'Mass Hysteria', cost: { dread: 1000 }, attracts: ['wanderer', 'seeker', 'hunter'], description: 'The whole town walks toward you, dreaming.' }
];

const defenses: Defense[] = [
  { id: 'tooth_ring', name: 'Tooth Ring', cost: 100, effect: 'Basic perimeter defense', built: false },
  { id: 'confusion_spire', name: 'Confusion Spire', cost: 250, effect: 'Soldiers attack each other', built: false },
  { id: 'false_ground', name: 'False Ground', cost: 500, effect: 'Hidden pit traps', built: false },
  { id: 'silence_membrane', name: 'Silence Membrane', cost: 400, effect: 'Blocks communications', built: false },
  { id: 'puppet_garden', name: 'Puppet Garden', cost: 1000, effect: 'Captured soldiers defend you', built: false }
];

const techs: Tech[] = [
  // Tier 1
  { id: 'deeper_roots', name: 'Deeper Roots', tier: 1, cost: 200, effect: '+50% Dread radius', researched: false, unlocked: true },
  { id: 'efficient_digestion', name: 'Efficient Digestion', tier: 1, cost: 300, effect: '+50% Biomass from consumption', researched: false, unlocked: true },
  { id: 'surface_mimicry', name: 'Surface Mimicry', tier: 1, cost: 250, effect: '-25% Awareness gain', researched: false, unlocked: true },
  // Tier 2
  { id: 'mass_graves', name: 'Mass Graves', tier: 2, cost: 800, effect: 'Consume multiple targets', researched: false, unlocked: false },
  { id: 'the_fog', name: 'The Fog', tier: 2, cost: 600, effect: '-50% Awareness gain', researched: false, unlocked: false },
  { id: 'willing_servants', name: 'Willing Servants', tier: 2, cost: 1000, effect: 'Ordained spawn naturally', researched: false, unlocked: false },
  // Tier 3
  { id: 'psychic_scream', name: 'Psychic Scream', tier: 3, cost: 2000, effect: 'Dread damages soldiers', researched: false, unlocked: false },
  { id: 'false_memories', name: 'False Memories', tier: 3, cost: 2500, effect: 'Reset Awareness to 50%', researched: false, unlocked: false },
  // Tier 4 - Expansion
  { id: 'the_widening', name: 'The Widening', tier: 4, cost: 5000, effect: 'Mouth expands to 3x3', researched: false, unlocked: false },
  { id: 'continental_throat', name: 'Continental Throat', tier: 4, cost: 25000, effect: 'Mouth expands to 5x5', researched: false, unlocked: false },
  { id: 'planetary_consumption', name: 'Planetary Consumption', tier: 4, cost: 100000, effect: 'CONSUME THE WORLD', researched: false, unlocked: false }
];

const entityTypes = {
  wanderer: { biomass: 10, danger: 0, speed: 1, symbol: '?' },
  seeker: { biomass: 25, danger: 0, speed: 2, symbol: '!' },
  hunter: { biomass: 15, danger: 1, speed: 1, symbol: '?' },
  soldier: { biomass: 5, danger: 2, speed: 1, symbol: '?' },
  priest: { biomass: 50, danger: 3, speed: 1, symbol: '?' },
  ordained: { biomass: 200, danger: -1, speed: 3, symbol: '?' }
};

let entityIdCounter = 0;

export function initStrategyPhase(): void {
  gameState.techs = JSON.parse(JSON.stringify(techs));
  gameState.dread = 100;

  initHexGrid();
  spawnInitialEntities();
  renderGrid();
  renderControls();
  startStrategyLoop();

  log("The Mouth opens. The surface world awaits.");
}

function initHexGrid(): void {
  gameState.hexGrid = [];

  for (let y = 0; y < GRID_HEIGHT; y++) {
    gameState.hexGrid[y] = [];
    for (let x = 0; x < GRID_WIDTH; x++) {
      gameState.hexGrid[y][x] = {
        x,
        y,
        type: 'empty',
        structure: undefined,
        entity: undefined
      };
    }
  }

  // Place the Mouth in the center
  const centerX = Math.floor(GRID_WIDTH / 2);
  const centerY = Math.floor(GRID_HEIGHT / 2);
  gameState.hexGrid[centerY][centerX].type = 'mouth';
}

function spawnInitialEntities(): void {
  // Spawn some wanderers at the edges
  for (let i = 0; i < 5; i++) {
    spawnEntity('wanderer');
  }
}

function spawnEntity(type: keyof typeof entityTypes): void {
  // Spawn at random edge
  const edge = Math.floor(Math.random() * 4);
  let x: number, y: number;

  switch (edge) {
    case 0: // Top
      x = Math.floor(Math.random() * GRID_WIDTH);
      y = 0;
      break;
    case 1: // Bottom
      x = Math.floor(Math.random() * GRID_WIDTH);
      y = GRID_HEIGHT - 1;
      break;
    case 2: // Left
      x = 0;
      y = Math.floor(Math.random() * GRID_HEIGHT);
      break;
    default: // Right
      x = GRID_WIDTH - 1;
      y = Math.floor(Math.random() * GRID_HEIGHT);
  }

  const entity: Entity = {
    id: `entity_${entityIdCounter++}`,
    type,
    x,
    y,
    biomassValue: entityTypes[type].biomass,
    danger: entityTypes[type].danger
  };

  gameState.entities.push(entity);
}

function renderGrid(): void {
  const gridEl = document.getElementById('hex-grid');
  if (!gridEl) return;

  gridEl.innerHTML = '';

  const centerX = Math.floor(GRID_WIDTH / 2);
  const centerY = Math.floor(GRID_HEIGHT / 2);

  for (let y = 0; y < GRID_HEIGHT; y++) {
    for (let x = 0; x < GRID_WIDTH; x++) {
      const hex = document.createElement('div');
      hex.className = 'hex';

      const tile = gameState.hexGrid[y][x];
      if (tile.type === 'mouth') {
        hex.classList.add('mouth');

        // Expand mouth visual based on size
        if (gameState.mouthSize >= 3) {
          const isNearCenter = Math.abs(x - centerX) <= 1 && Math.abs(y - centerY) <= 1;
          if (isNearCenter) hex.classList.add('mouth');
        }
      }
      if (tile.structure) {
        hex.classList.add('structure');
        hex.textContent = '?';
      }

      // Position hex
      const offsetX = y % 2 === 0 ? 0 : HEX_WIDTH / 2;
      hex.style.left = `${x * HEX_WIDTH + offsetX + 20}px`;
      hex.style.top = `${y * (HEX_HEIGHT * 0.75) + 20}px`;

      hex.dataset.x = String(x);
      hex.dataset.y = String(y);

      hex.onclick = () => handleHexClick(x, y);

      gridEl.appendChild(hex);
    }
  }

  // Render entities
  gameState.entities.forEach(entity => {
    const entityEl = document.createElement('div');
    entityEl.className = `entity ${entity.type}`;
    entityEl.textContent = entityTypes[entity.type].symbol;

    const offsetX = entity.y % 2 === 0 ? 0 : HEX_WIDTH / 2;
    entityEl.style.left = `${entity.x * HEX_WIDTH + offsetX + 30}px`;
    entityEl.style.top = `${entity.y * (HEX_HEIGHT * 0.75) + 35}px`;

    gridEl.appendChild(entityEl);
  });
}

function renderControls(): void {
  // Render baits
  const baitList = document.getElementById('bait-list');
  if (baitList) {
    baitList.innerHTML = '';
    baits.forEach(bait => {
      const canAfford = checkBaitCost(bait);
      const div = document.createElement('div');
      div.className = `bait-item${canAfford ? '' : ' locked'}`;
      div.innerHTML = `<strong>${bait.name}</strong><br>
        <small>${formatBaitCost(bait.cost)}</small>`;
      div.title = bait.description;
      if (canAfford) {
        div.onclick = () => useBait(bait);
      }
      baitList.appendChild(div);
    });
  }

  // Render defenses
  const defenseList = document.getElementById('defense-list');
  if (defenseList) {
    defenseList.innerHTML = '';
    defenses.forEach(def => {
      if (def.built) return;
      const canAfford = gameState.biomass >= def.cost;
      const div = document.createElement('div');
      div.className = `defense-item${canAfford ? '' : ' locked'}`;
      div.innerHTML = `<strong>${def.name}</strong><br>
        <small>${def.cost} Biomass</small>`;
      div.title = def.effect;
      if (canAfford) {
        div.onclick = () => buildDefense(def);
      }
      defenseList.appendChild(div);
    });
  }

  // Render tech
  const techList = document.getElementById('tech-list');
  if (techList) {
    techList.innerHTML = '';
    gameState.techs.forEach(tech => {
      if (!tech.unlocked || tech.researched) return;
      const canAfford = gameState.biomass >= tech.cost;
      const div = document.createElement('div');
      div.className = `tech-item${canAfford ? '' : ' locked'}`;
      div.innerHTML = `<strong>${tech.name}</strong> (T${tech.tier})<br>
        <small>${tech.cost} Biomass</small>`;
      div.title = tech.effect;
      if (canAfford) {
        div.onclick = () => researchTech(tech);
      }
      techList.appendChild(div);
    });
  }

  // Update stats
  updateStrategyStats();
}

function updateStrategyStats(): void {
  const setNum = (id: string, val: number | string) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(Math.floor(Number(val)));
  };

  setNum('biomass-num', gameState.biomass);
  setNum('strat-echoes-num', gameState.echoes);
  setNum('dread-num', gameState.dread);
  setNum('awareness-num', gameState.awareness);
  setNum('turn-num', gameState.turn);

  const phaseIndicator = document.getElementById('phase-indicator');
  if (phaseIndicator) {
    const phases = { lure: 'Lure Phase', consume: 'Consume Phase', defense: 'Defense Phase' };
    phaseIndicator.textContent = phases[gameState.turnPhase];
  }
}

function checkBaitCost(bait: Bait): boolean {
  if (bait.cost.biomass && gameState.biomass < bait.cost.biomass) return false;
  if (bait.cost.echoes && gameState.echoes < bait.cost.echoes) return false;
  if (bait.cost.dread && gameState.dread < bait.cost.dread) return false;
  return true;
}

function formatBaitCost(cost: Bait['cost']): string {
  const parts = [];
  if (cost.biomass) parts.push(`${cost.biomass} Bio`);
  if (cost.echoes) parts.push(`${cost.echoes} Echo`);
  if (cost.dread) parts.push(`${cost.dread} Dread`);
  return parts.join(', ');
}

function useBait(bait: Bait): void {
  if (!checkBaitCost(bait)) return;

  if (bait.cost.biomass) gameState.biomass -= bait.cost.biomass;
  if (bait.cost.echoes) gameState.echoes -= bait.cost.echoes;
  if (bait.cost.dread) gameState.dread -= bait.cost.dread;

  gameState.activeBaits.push(bait.id);

  // Spawn attracted entities
  const numToSpawn = Math.floor(Math.random() * 3) + 2;
  for (let i = 0; i < numToSpawn; i++) {
    const type = bait.attracts[Math.floor(Math.random() * bait.attracts.length)] as keyof typeof entityTypes;
    spawnEntity(type);
  }

  log(`Used ${bait.name}. ${numToSpawn} entities lured.`);
  renderGrid();
  renderControls();
}

function buildDefense(def: Defense): void {
  if (gameState.biomass < def.cost) return;

  gameState.biomass -= def.cost;
  def.built = true;
  gameState.defenses.push(def.id);

  log(`Built ${def.name}.`);
  renderControls();
}

function researchTech(tech: Tech): void {
  if (gameState.biomass < tech.cost || tech.researched) return;

  gameState.biomass -= tech.cost;
  tech.researched = true;

  // Apply effects
  applyTechEffect(tech);

  // Unlock next tier
  const nextTier = tech.tier + 1;
  gameState.techs.forEach(t => {
    if (t.tier === nextTier) t.unlocked = true;
  });

  log(`Researched ${tech.name}.`);
  renderControls();

  // Check for planetary consumption
  if (tech.id === 'planetary_consumption') {
    transitionToPhase5();
  }
}

function applyTechEffect(tech: Tech): void {
  switch (tech.id) {
    case 'deeper_roots':
      gameState.dread *= 1.5;
      break;
    case 'efficient_digestion':
      // Handled in consumption
      break;
    case 'surface_mimicry':
      // Handled in awareness calc
      break;
    case 'the_widening':
      gameState.mouthSize = 3;
      log("The Mouth widens. You were so small before.");
      break;
    case 'continental_throat':
      gameState.mouthSize = 5;
      log("Nations will fall into you now.");
      break;
    case 'false_memories':
      gameState.awareness = Math.max(0, gameState.awareness - 50);
      break;
  }
}

function handleHexClick(x: number, y: number): void {
  // For now, just log the click
  const tile = gameState.hexGrid[y][x];
  if (tile.type === 'mouth') {
    log("The Mouth hungers.");
  }
}

function startStrategyLoop(): void {
  // End phase button
  const endPhaseBtn = document.getElementById('end-phase-btn');
  if (endPhaseBtn) {
    endPhaseBtn.onclick = () => advanceTurnPhase();
  }
}

function advanceTurnPhase(): void {
  switch (gameState.turnPhase) {
    case 'lure':
      gameState.turnPhase = 'consume';
      processConsumption();
      break;
    case 'consume':
      gameState.turnPhase = 'defense';
      processDefense();
      break;
    case 'defense':
      gameState.turnPhase = 'lure';
      endTurn();
      break;
  }

  renderControls();
}

function processConsumption(): void {
  const centerX = Math.floor(GRID_WIDTH / 2);
  const centerY = Math.floor(GRID_HEIGHT / 2);

  const consumed: Entity[] = [];
  let totalBiomass = 0;

  gameState.entities.forEach(entity => {
    const dist = Math.abs(entity.x - centerX) + Math.abs(entity.y - centerY);
    const mouthRadius = Math.ceil(gameState.mouthSize / 2);

    if (dist <= mouthRadius) {
      consumed.push(entity);
      let biomass = entity.biomassValue;

      // Efficient digestion bonus
      if (gameState.techs.find(t => t.id === 'efficient_digestion' && t.researched)) {
        biomass *= 1.5;
      }

      totalBiomass += biomass;
      gameState.awareness += entity.danger * 2;
    }
  });

  // Remove consumed entities
  consumed.forEach(entity => {
    const idx = gameState.entities.indexOf(entity);
    if (idx >= 0) gameState.entities.splice(idx, 1);
  });

  gameState.biomass += Math.floor(totalBiomass);

  if (consumed.length > 0) {
    log(`Consumed ${consumed.length} entities for ${Math.floor(totalBiomass)} Biomass.`);
  }

  renderGrid();
}

function processDefense(): void {
  // Move entities toward the mouth
  const centerX = Math.floor(GRID_WIDTH / 2);
  const centerY = Math.floor(GRID_HEIGHT / 2);

  gameState.entities.forEach(entity => {
    const speed = entityTypes[entity.type as keyof typeof entityTypes].speed;

    for (let i = 0; i < speed; i++) {
      // Move toward center
      if (entity.x < centerX) entity.x++;
      else if (entity.x > centerX) entity.x--;

      if (entity.y < centerY) entity.y++;
      else if (entity.y > centerY) entity.y--;
    }
  });

  // Soldiers attack
  const hasPuppetGarden = gameState.defenses.includes('puppet_garden');
  const hasConfusionSpire = gameState.defenses.includes('confusion_spire');

  gameState.entities.forEach(entity => {
    if (entity.type === 'soldier') {
      const dist = Math.abs(entity.x - centerX) + Math.abs(entity.y - centerY);
      if (dist <= 2) {
        if (hasConfusionSpire && Math.random() < 0.5) {
          log("Soldier turns on allies.");
          // Remove a random non-soldier
          const target = gameState.entities.find(e => e.type !== 'soldier' && e.id !== entity.id);
          if (target) {
            const idx = gameState.entities.indexOf(target);
            if (idx >= 0) gameState.entities.splice(idx, 1);
          }
        } else if (!hasPuppetGarden) {
          gameState.awareness += 5;
          log("Soldier attacks the Mouth!");
        }
      }
    }
  });

  renderGrid();
}

function endTurn(): void {
  gameState.turn++;

  // Dread increases
  gameState.dread += 10;

  // Spawn new entities based on awareness
  const spawnCount = Math.floor(gameState.awareness / 25) + 2;
  for (let i = 0; i < spawnCount; i++) {
    const roll = Math.random();
    if (gameState.awareness > 50 && roll < 0.3) {
      spawnEntity('soldier');
    } else if (gameState.awareness > 25 && roll < 0.5) {
      spawnEntity('hunter');
    } else if (roll < 0.7) {
      spawnEntity('seeker');
    } else {
      spawnEntity('wanderer');
    }
  }

  // Ordained spawn if researched
  if (gameState.techs.find(t => t.id === 'willing_servants' && t.researched) && Math.random() < 0.2) {
    spawnEntity('ordained');
    log("The Ordained approach, willing.");
  }

  // Awareness decay with surface mimicry
  if (gameState.techs.find(t => t.id === 'surface_mimicry' && t.researched)) {
    gameState.awareness = Math.max(0, gameState.awareness - 5);
  }
  if (gameState.techs.find(t => t.id === 'the_fog' && t.researched)) {
    gameState.awareness = Math.max(0, gameState.awareness - 10);
  }

  // Cap awareness
  gameState.awareness = Math.min(100, gameState.awareness);

  // Check for resistance events
  checkResistanceEvents();

  log(`Turn ${gameState.turn} begins.`);
  renderGrid();
  renderControls();
}

function checkResistanceEvents(): void {
  if (gameState.awareness >= 25 && gameState.awareness < 50) {
    // Local militia - more soldiers
    if (Math.random() < 0.3) {
      spawnEntity('soldier');
      spawnEntity('soldier');
      log("Local militia mobilizes.");
    }
  } else if (gameState.awareness >= 50 && gameState.awareness < 75) {
    // The Cordon
    if (Math.random() < 0.2) {
      for (let i = 0; i < 4; i++) spawnEntity('soldier');
      log("The Cordon tightens.");
    }
  } else if (gameState.awareness >= 75 && gameState.awareness < 90) {
    // Project SEAL
    if (Math.random() < 0.15) {
      spawnEntity('priest');
      gameState.dread = Math.max(0, gameState.dread - 50);
      log("Project SEAL deploys countermeasures.");
    }
  } else if (gameState.awareness >= 90) {
    // The Burning
    if (Math.random() < 0.1 && !gameState.defenses.includes('absorption_wall')) {
      gameState.biomass = Math.floor(gameState.biomass * 0.8);
      log("They try to burn you. It hurts.");
    }
  }
}

function transitionToPhase5(): void {
  gameState.phase = 5;

  log("The world is consumed. You rise.");

  // Hide strategy UI, show action UI
  document.getElementById('strategy-phase')?.classList.add('hidden');
  document.getElementById('action-phase')?.classList.remove('hidden');

  // Initialize action phase
  import('./ActionPhase').then(module => {
    module.initActionPhase();
  });
}

function log(message: string): void {
  const logEl = document.getElementById('strategy-log');
  if (logEl) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = `[${gameState.turn}] ${message}`;
    logEl.insertBefore(entry, logEl.firstChild);

    // Keep only last 20 entries
    while (logEl.children.length > 20) {
      logEl.removeChild(logEl.lastChild!);
    }
  }
}
