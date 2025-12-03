export type GamePhase = 1 | 2 | 3 | 4 | 5 | 'ending';

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  costType: 'echoes' | 'depth' | 'influence';
  effect: () => void;
  purchased: boolean;
  unlocked: boolean;
  unlockCondition?: () => boolean;
}

export interface Transformation {
  id: string;
  name: string;
  description: string;
  selfCost: number;
  effect: () => void;
  purchased: boolean;
}

export interface FloorEvent {
  floor: number;
  text: string;
  choices?: EventChoice[];
  autoTrigger?: boolean;
}

export interface EventChoice {
  text: string;
  cost?: { type: 'echoes' | 'self' | 'influence'; amount: number };
  effect: () => void;
}

export interface Resident {
  id: string;
  name: string;
  description: string;
  quote: string;
  choices: EventChoice[];
}

// Phase 4 types
export interface HexTile {
  x: number;
  y: number;
  type: 'empty' | 'mouth' | 'structure' | 'bait';
  structure?: string;
  entity?: Entity;
}

export interface Entity {
  id: string;
  type: 'wanderer' | 'seeker' | 'hunter' | 'soldier' | 'priest' | 'ordained';
  x: number;
  y: number;
  biomassValue: number;
  danger: number;
}

export interface Bait {
  id: string;
  name: string;
  cost: { biomass?: number; echoes?: number; dread?: number };
  attracts: string[];
  description: string;
}

export interface Defense {
  id: string;
  name: string;
  cost: number;
  effect: string;
  built: boolean;
}

export interface Tech {
  id: string;
  name: string;
  tier: number;
  cost: number;
  effect: string;
  researched: boolean;
  unlocked: boolean;
}

// Phase 5 types
export interface SpaceObject {
  id: string;
  type: 'asteroid' | 'moon' | 'planet' | 'fortress' | 'dyson' | 'star' | 'neutron' | 'blackhole';
  x: number;
  y: number;
  mass: number;
  resistance: number;
  health: number;
  maxHealth: number;
  consumed: boolean;
  civilized?: boolean;
}

export interface Evolution {
  id: string;
  name: string;
  description: string;
  massRequired: number;
  unlocked: boolean;
  active: boolean;
}

export interface Projectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  damage: number;
  type: string;
}
