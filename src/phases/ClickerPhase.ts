import { gameState } from '../GameState';
import type { Resident, EventChoice } from '../types';

// Narrative messages
const narratives: { [key: number]: string } = {
  0: "You stand at the top of a stairwell. You don't remember how you got here.",
  5: "The stairs descend into darkness. Your footsteps echo strangely.",
  15: "You've been walking for a while now. The light from above has faded.",
  30: "The walls feel closer. The air is different down here.",
  50: "A door stands slightly ajar. Something moves behind it.",
  75: "The concrete beneath your feet feels... softer.",
  100: "The doors are opening on their own now.",
  150: "They're watching you. All of them.",
  200: "You're not sure if you're walking anymore, or falling very slowly.",
  300: "The stairs have teeth.",
  400: "You can feel something breathing. Something vast.",
  500: "You reach the bottom of yourself.",
};

// Residents
const residents: Resident[] = [
  {
    id: 'architect',
    name: 'The Weeping Architect',
    description: 'A tall figure wrapped in stained blueprints. Its face is hidden beneath a construction helmet that doesn\'t fit a human head.',
    quote: '"I designed this place, you know. Every step, every shadow. Would you like to understand?"',
    choices: []
  },
  {
    id: 'child',
    name: 'The Child Who Counts',
    description: 'A small figure, always facing away, counting audibly. Ninety-seven, ninety-eight, ninety-nine, ninety-nine, ninety-nine...',
    quote: '"...ninety-nine, ninety-nine, ninety-nine..."',
    choices: []
  },
  {
    id: 'former',
    name: 'The Former Descender',
    description: 'Someone who looks exactly like you. Smiles too widely.',
    quote: '"I was you. And you will be me. And we will both be stairs."',
    choices: []
  },
  {
    id: 'absence',
    name: 'The Absence',
    description: 'An empty space that your eyes slide off of.',
    quote: '"I can make them forget you were ever seen. For a price."',
    choices: []
  }
];

export function initClickerPhase(): void {
  initUpgrades();
  initTransformations();
  updateUI();
  startMomentumLoop();
}

function initUpgrades(): void {
  gameState.upgrades = [
    {
      id: 'heavier_footfalls',
      name: 'Heavier Footfalls',
      description: '"Each step leaves a deeper impression."',
      cost: 10,
      costType: 'echoes',
      effect: () => { gameState.depthPerClick += 1; },
      purchased: false,
      unlocked: true
    },
    {
      id: 'fading_light',
      name: 'Fading Light',
      description: '"Your flashlight flickers, but you keep moving."',
      cost: 25,
      costType: 'echoes',
      effect: () => { gameState.momentum += 0.5; },
      purchased: false,
      unlocked: true
    },
    {
      id: 'focused_breathing',
      name: 'Focused Breathing',
      description: '"Memories surface more easily in the dark."',
      cost: 40,
      costType: 'echoes',
      effect: () => { gameState.echoChance += 0.05; },
      purchased: false,
      unlocked: true
    },
    {
      id: 'dont_look_back',
      name: "Don't Look Back",
      description: '"You don\'t want to see what\'s behind you."',
      cost: 75,
      costType: 'echoes',
      effect: () => { gameState.depthPerClick += 2; },
      purchased: false,
      unlocked: true
    },
    {
      id: 'peripheral_awareness',
      name: 'Peripheral Awareness',
      description: '"You notice more. You wish you didn\'t."',
      cost: 100,
      costType: 'echoes',
      effect: () => { gameState.echoChance += 0.1; },
      purchased: false,
      unlocked: true
    },
    {
      id: 'echo_resonance',
      name: 'Echo Resonance',
      description: '"The memories compound."',
      cost: 200,
      costType: 'echoes',
      effect: () => { gameState.momentum += 1; },
      purchased: false,
      unlocked: false,
      unlockCondition: () => gameState.floor >= 50
    },
    {
      id: 'gravity_embrace',
      name: 'Gravity\'s Embrace',
      description: '"Down is easier than up."',
      cost: 500,
      costType: 'echoes',
      effect: () => { gameState.depthPerClick *= 2; gameState.momentum *= 1.5; },
      purchased: false,
      unlocked: false,
      unlockCondition: () => gameState.floor >= 100
    }
  ];
}

function initTransformations(): void {
  gameState.transformations = [
    {
      id: 'hollow_legs',
      name: 'Hollow Legs',
      description: '"Your legs no longer tire. They are no longer entirely yours."',
      selfCost: 20,
      effect: () => { gameState.depthPerClick *= 10; },
      purchased: false
    },
    {
      id: 'echo_throat',
      name: 'Echo Throat',
      description: '"You speak their language now."',
      selfCost: 15,
      effect: () => { gameState.echoChance = 1.0; },
      purchased: false
    },
    {
      id: 'door_affinity',
      name: 'Door Affinity',
      description: '"They recognize you as kin."',
      selfCost: 25,
      effect: () => { gameState.influence += 100; },
      purchased: false
    },
    {
      id: 'depth_sight',
      name: 'Depth Sight',
      description: '"You perceive the dark. The dark perceives you."',
      selfCost: 30,
      effect: () => { gameState.momentum *= 3; },
      purchased: false
    },
    {
      id: 'unremembering',
      name: 'Unremembering',
      description: '"You don\'t need memories where you\'re going."',
      selfCost: 10,
      effect: () => {
        gameState.influence += Math.floor(gameState.self * 5);
        gameState.self = 0;
      },
      purchased: false
    }
  ];
}

export function descend(): void {
  const depth = gameState.depthPerClick;
  gameState.depth += depth;

  // Check for floor advancement
  const newFloor = Math.floor(gameState.depth / gameState.depthPerFloor);
  if (newFloor > gameState.floor) {
    const floorsGained = newFloor - gameState.floor;
    gameState.floor = newFloor;

    // Echo chance per floor
    for (let i = 0; i < floorsGained; i++) {
      if (Math.random() < gameState.echoChance) {
        gameState.echoes += 1;
      }
    }

    // Check for events
    checkFloorEvents();

    // Check phase transitions
    checkPhaseTransition();
  }

  // Update narrative
  updateNarrative();
  updateUI();
}

function checkFloorEvents(): void {
  const floor = gameState.floor;

  // First door event at floor 50
  if (floor >= 50 && !gameState.hasSeenDoor && gameState.phase === 1) {
    showDoorEvent();
    return;
  }

  // Resident encounters in Phase 2
  if (gameState.phase === 2 && floor % 25 === 0) {
    const resident = residents[Math.floor(Math.random() * residents.length)];
    showResidentEvent(resident);
    return;
  }

  // Random events
  if (Math.random() < 0.05) {
    showRandomEvent();
  }
}

function showDoorEvent(): void {
  gameState.hasSeenDoor = true;
  const choices: EventChoice[] = [
    {
      text: 'Look Inside (Free)',
      effect: () => {
        gameState.observers += 1;
        showModal(
          "You see yourself from behind, descending a stairwell. The other-you pauses. Begins to turn—\n\nThe door slams shut.",
          [{ text: 'Continue', effect: () => { hideModal(); updateUI(); } }]
        );
      }
    },
    {
      text: 'Ignore it',
      cost: { type: 'echoes', amount: 10 },
      effect: () => {
        if (gameState.echoes >= 10) {
          gameState.echoes -= 10;
          hideModal();
        }
      }
    }
  ];

  showModal(
    "A door stands slightly ajar. Through the crack, you see movement. Something familiar.\n\nSomething that looks like you.",
    choices
  );
}

function showResidentEvent(resident: Resident): void {
  const choices: EventChoice[] = [
    {
      text: `Accept their gift (Cost: 15 Self)`,
      cost: { type: 'self', amount: 15 },
      effect: () => {
        if (gameState.self >= 15) {
          gameState.self -= 15;
          gameState.depthPerClick *= 2;
          hideModal();
          updateUI();
        }
      }
    },
    {
      text: `Offer an Echo (Cost: 10 Echoes)`,
      cost: { type: 'echoes', amount: 10 },
      effect: () => {
        if (gameState.echoes >= 10) {
          gameState.echoes -= 10;
          gameState.influence += 50;
          hideModal();
          updateUI();
        }
      }
    },
    {
      text: 'Keep Walking (Free)',
      effect: () => {
        gameState.observers += 1;
        hideModal();
        updateUI();
      }
    }
  ];

  showModal(
    `<strong>${resident.name}</strong>\n\n${resident.description}\n\n<em>${resident.quote}</em>`,
    choices
  );
}

function showRandomEvent(): void {
  const events = [
    "You hear something heavy fall above you.",
    "The floor number reads " + (gameState.floor + Math.floor(Math.random() * 10)) + ". It fixes itself.",
    "You find an Echo. It's a memory of someone you've never met.",
    "The stairs become carpet. Then concrete again. You imagined it.",
    "You hear your name. No one is there.",
    "A door opens behind you. By the time you turn, it's closed.",
    "The walls are breathing. Slowly."
  ];

  const text = events[Math.floor(Math.random() * events.length)];
  setNarrative(text);
}

function checkPhaseTransition(): void {
  // Phase 1 -> Phase 2: Floor 100 or 5 observers
  if (gameState.phase === 1 && (gameState.floor >= 100 || gameState.observers >= 5)) {
    transitionToPhase2();
  }

  // Phase 2 -> Phase 3: Self = 0 or Floor 500
  if (gameState.phase === 2 && (gameState.self <= 0 || gameState.floor >= 500)) {
    transitionToPhase3();
  }

  // Phase 3 -> Phase 4: floorsAbove >= 1000 or specific upgrade
  if (gameState.phase === 3 && gameState.floorsAbove >= 1000) {
    transitionToPhase4();
  }
}

function transitionToPhase2(): void {
  gameState.phase = 2;
  setNarrative("The doors are opening on their own now. Things step out. They are not hostile—not exactly. They offer gifts. They ask questions.");

  // Show Self and Observers
  document.getElementById('self-display')?.classList.remove('hidden');
  document.getElementById('observers-display')?.classList.remove('hidden');
  document.getElementById('influence-display')?.classList.remove('hidden');
  document.getElementById('transformations-panel')?.classList.remove('hidden');

  updateUI();
}

function transitionToPhase3(): void {
  gameState.phase = 3;
  document.body.classList.add('phase-3');

  gameState.isPassenger = true;

  setNarrative("You reach the bottom of yourself. But the stairwell continues. You realize the stairwell was never yours to descend—you were the stairwell.");

  // Change button text
  const btn = document.getElementById('descend-btn');
  if (btn) btn.textContent = 'DESCEND';

  // Start floorsAbove counter
  startPhase3Loop();
  updateUI();
}

function transitionToPhase4(): void {
  gameState.phase = 4;

  // Hide clicker UI, show strategy UI
  document.getElementById('clicker-phase')?.classList.add('hidden');
  document.getElementById('strategy-phase')?.classList.remove('hidden');

  // Carry over echoes
  gameState.biomass = Math.floor(gameState.totalDescenders * 10);

  // Import and initialize strategy phase
  import('./StrategyPhase').then(module => {
    module.initStrategyPhase();
  });
}

function startMomentumLoop(): void {
  setInterval(() => {
    if (typeof gameState.phase === 'number' && gameState.phase <= 3 && gameState.momentum > 0) {
      gameState.depth += gameState.momentum;

      const newFloor = Math.floor(gameState.depth / gameState.depthPerFloor);
      if (newFloor > gameState.floor) {
        const floorsGained = newFloor - gameState.floor;
        gameState.floor = newFloor;

        for (let i = 0; i < floorsGained; i++) {
          if (Math.random() < gameState.echoChance) {
            gameState.echoes += 1;
          }
        }

        checkPhaseTransition();
      }

      updateUI();
    }
  }, 1000);
}

function startPhase3Loop(): void {
  setInterval(() => {
    if (gameState.phase === 3) {
      // Descenders walking through you
      const descenders = Math.floor(Math.random() * 3) + 1;
      gameState.totalDescenders += descenders;
      gameState.floorsAbove += descenders;

      // Generate resources
      gameState.depth += descenders * 10;
      gameState.influence += descenders;

      // Check for phase 4
      if (gameState.floorsAbove >= 1000) {
        transitionToPhase4();
      }

      updateUI();
    }
  }, 1000);
}

function updateNarrative(): void {
  const floors = Object.keys(narratives)
    .map(Number)
    .filter(f => f <= gameState.floor)
    .sort((a, b) => b - a);

  if (floors.length > 0) {
    const key = floors[0];
    setNarrative(narratives[key]);
  }
}

function setNarrative(text: string): void {
  const box = document.getElementById('narrative-box');
  if (box) {
    box.innerHTML = `<em>${text}</em>`;
    box.style.opacity = '0';
    setTimeout(() => { box.style.opacity = '1'; }, 50);
  }
}

export function purchaseUpgrade(id: string): void {
  const upgrade = gameState.upgrades.find(u => u.id === id);
  if (!upgrade || upgrade.purchased) return;

  if (upgrade.costType === 'echoes' && gameState.echoes >= upgrade.cost) {
    gameState.echoes -= upgrade.cost;
    upgrade.effect();
    upgrade.purchased = true;
    updateUI();
  }
}

export function purchaseTransformation(id: string): void {
  const trans = gameState.transformations.find(t => t.id === id);
  if (!trans || trans.purchased) return;

  if (gameState.self >= trans.selfCost) {
    gameState.self -= trans.selfCost;
    trans.effect();
    trans.purchased = true;

    // Check self thresholds
    checkSelfThresholds();
    updateUI();
  }
}

function checkSelfThresholds(): void {
  if (gameState.self <= 50 && gameState.self > 25) {
    setNarrative("You feel lighter. As if someone is helping you carry the weight.");
  } else if (gameState.self <= 25 && gameState.self > 0) {
    setNarrative("The weight is gone. You realize you are being carried.");
  } else if (gameState.self <= 0) {
    setNarrative("You wonder if you are the one descending, or if something is descending wearing you.");
  }
}

function showModal(text: string, choices: EventChoice[]): void {
  const modal = document.getElementById('event-modal');
  const content = document.getElementById('event-content');
  const choicesDiv = document.getElementById('event-choices');

  if (modal && content && choicesDiv) {
    content.innerHTML = text.replace(/\n/g, '<br>');
    choicesDiv.innerHTML = '';

    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'event-choice';
      btn.innerHTML = choice.text;
      if (choice.cost) {
        btn.innerHTML += `<div class="choice-cost">Cost: ${choice.cost.amount} ${choice.cost.type}</div>`;
      }
      btn.onclick = () => choice.effect();
      choicesDiv.appendChild(btn);
    });

    modal.classList.remove('hidden');
  }
}

function hideModal(): void {
  const modal = document.getElementById('event-modal');
  if (modal) modal.classList.add('hidden');
}

export function updateUI(): void {
  // Update stats
  const setNum = (id: string, val: number | string) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(Math.floor(Number(val)));
  };

  setNum('floor-num', gameState.floor);
  setNum('depth-num', gameState.depth);
  setNum('echoes-num', gameState.echoes);
  setNum('momentum-num', gameState.momentum);
  setNum('self-num', gameState.self);
  setNum('observers-num', gameState.observers);
  setNum('influence-num', gameState.influence);

  // Update upgrades
  const upgradesList = document.getElementById('upgrades-list');
  if (upgradesList) {
    upgradesList.innerHTML = '';
    gameState.upgrades.forEach(upgrade => {
      // Check unlock conditions
      if (upgrade.unlockCondition && !upgrade.unlocked) {
        upgrade.unlocked = upgrade.unlockCondition();
      }

      if (!upgrade.unlocked) return;

      const div = document.createElement('div');
      div.className = 'upgrade-item';
      if (upgrade.purchased) div.className += ' purchased';
      else if (gameState.echoes < upgrade.cost) div.className += ' locked';

      div.innerHTML = `
        <div class="upgrade-name">${upgrade.name}</div>
        <div class="upgrade-cost">${upgrade.cost} Echoes</div>
        <div class="upgrade-desc">${upgrade.description}</div>
      `;

      if (!upgrade.purchased && gameState.echoes >= upgrade.cost) {
        div.onclick = () => purchaseUpgrade(upgrade.id);
      }

      upgradesList.appendChild(div);
    });
  }

  // Update transformations (Phase 2+)
  if (typeof gameState.phase === 'number' && gameState.phase >= 2) {
    const transList = document.getElementById('transformations-list');
    if (transList) {
      transList.innerHTML = '';
      gameState.transformations.forEach(trans => {
        const div = document.createElement('div');
        div.className = 'transformation-item';
        if (trans.purchased) div.className += ' purchased';
        else if (gameState.self < trans.selfCost) div.className += ' locked';

        div.innerHTML = `
          <div class="upgrade-name">${trans.name}</div>
          <div class="upgrade-cost">${trans.selfCost} Self</div>
          <div class="upgrade-desc">${trans.description}</div>
        `;

        if (!trans.purchased && gameState.self >= trans.selfCost) {
          div.onclick = () => purchaseTransformation(trans.id);
        }

        transList.appendChild(div);
      });
    }
  }

  // Update stairwell visual
  updateStairwellVisual();
}

function updateStairwellVisual(): void {
  const container = document.getElementById('stairs-container');
  if (!container) return;

  container.innerHTML = '';

  const stairsToShow = 10;
  const currentFloorMod = gameState.floor % stairsToShow;

  for (let i = 0; i < stairsToShow; i++) {
    const stair = document.createElement('div');
    stair.className = 'stair';
    if (i === currentFloorMod) stair.className += ' current';

    const yPos = i * 28 + 20;
    const zPos = i * 20;
    stair.style.top = `${yPos}px`;
    stair.style.transform = `translateX(-50%) translateZ(${-zPos}px) rotateX(60deg)`;
    stair.style.opacity = String(1 - (i * 0.08));

    container.appendChild(stair);
  }
}
