import type { GamePhase, Upgrade, Transformation, HexTile, Entity, Tech, SpaceObject, Evolution, Projectile } from './types';

class GameState {
  // Core state
  phase: GamePhase = 1;

  // Phase 1-3 resources
  depth: number = 0;
  floor: number = 0;
  echoes: number = 0;
  momentum: number = 0;
  self: number = 100;
  observers: number = 0;
  influence: number = 0;

  // Multipliers
  depthPerClick: number = 1;
  echoChance: number = 0.1;
  depthPerFloor: number = 10;

  // Phase tracking
  floorsAbove: number = 0;
  totalDescenders: number = 0;

  // Phase 4 resources
  biomass: number = 0;
  dread: number = 0;
  awareness: number = 0;
  turn: number = 1;
  turnPhase: 'lure' | 'consume' | 'defense' = 'lure';
  mouthSize: number = 1;

  // Phase 4 state
  hexGrid: HexTile[][] = [];
  entities: Entity[] = [];
  activeBaits: string[] = [];
  techs: Tech[] = [];
  defenses: string[] = [];

  // Phase 5 resources
  mass: number = 0;
  health: number = 100;
  maxHealth: number = 100;
  systemsConsumed: number = 0;

  // Phase 5 state
  playerX: number = 0;
  playerY: number = 0;
  playerVX: number = 0;
  playerVY: number = 0;
  spaceObjects: SpaceObject[] = [];
  projectiles: Projectile[] = [];
  evolutions: Evolution[] = [];
  grabbing: SpaceObject | null = null;
  consuming: boolean = false;

  // Upgrades
  upgrades: Upgrade[] = [];
  transformations: Transformation[] = [];

  // Event state
  currentEvent: { text: string; choices: any[] } | null = null;

  // Flags
  hasSeenDoor: boolean = false;
  isPassenger: boolean = false;

  // Singleton
  private static instance: GameState;

  static getInstance(): GameState {
    if (!GameState.instance) {
      GameState.instance = new GameState();
    }
    return GameState.instance;
  }

  reset(): void {
    this.phase = 1;
    this.depth = 0;
    this.floor = 0;
    this.echoes = 0;
    this.momentum = 0;
    this.self = 100;
    this.observers = 0;
    this.influence = 0;
    this.depthPerClick = 1;
    this.echoChance = 0.1;
    this.depthPerFloor = 10;
    this.floorsAbove = 0;
    this.totalDescenders = 0;
    this.biomass = 0;
    this.dread = 0;
    this.awareness = 0;
    this.turn = 1;
    this.turnPhase = 'lure';
    this.mouthSize = 1;
    this.hexGrid = [];
    this.entities = [];
    this.activeBaits = [];
    this.techs = [];
    this.defenses = [];
    this.mass = 0;
    this.health = 100;
    this.maxHealth = 100;
    this.systemsConsumed = 0;
    this.playerX = 0;
    this.playerY = 0;
    this.playerVX = 0;
    this.playerVY = 0;
    this.spaceObjects = [];
    this.projectiles = [];
    this.evolutions = [];
    this.grabbing = null;
    this.consuming = false;
    this.upgrades = [];
    this.transformations = [];
    this.currentEvent = null;
    this.hasSeenDoor = false;
    this.isPassenger = false;
  }
}

export const gameState = GameState.getInstance();
