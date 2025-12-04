import { gameState } from './GameState';
import { initClickerPhase, updateUI, focusTypingInput } from './phases/ClickerPhase';

// Initialize game
function init(): void {
  console.log('Stairwell into Night - Initializing...');

  // Start with Phase 1 (Typing)
  initClickerPhase();

  // Initial narrative
  showIntroduction();

  // Focus typing input when clicking anywhere in the game
  document.getElementById('clicker-phase')?.addEventListener('click', (e) => {
    // Don't steal focus if clicking on upgrades/transformations
    const target = e.target as HTMLElement;
    if (!target.closest('#upgrades-panel') && !target.closest('#transformations-panel') && !target.closest('#event-modal')) {
      focusTypingInput();
    }
  });
}

function showIntroduction(): void {
  const narrative = document.getElementById('narrative-box');
  if (narrative) {
    narrative.innerHTML = '<em>You stand at the top of a stairwell. You don\'t remember how you got here. The only direction is down.</em>';
  }
}

// Start the game when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for debugging
(window as any).gameState = gameState;
(window as any).skipToPhase = (phase: number) => {
  if (phase === 4) {
    gameState.phase = 3;
    gameState.floorsAbove = 1000;
    updateUI();
  } else if (phase === 5) {
    gameState.phase = 4;
    gameState.biomass = 100000;
    document.getElementById('clicker-phase')?.classList.add('hidden');
    document.getElementById('strategy-phase')?.classList.remove('hidden');
    import('./phases/StrategyPhase').then(m => {
      m.initStrategyPhase();
      // Research planetary consumption
      const tech = gameState.techs.find(t => t.id === 'planetary_consumption');
      if (tech) {
        tech.unlocked = true;
      }
    });
  }
};
