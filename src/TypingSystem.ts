// Typing System - Sentences organized by floor progression
// Sentences get longer and more unsettling as you descend

export interface Sentence {
  text: string;
  minFloor: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Phase 1: Early descent (floors 0-49) - Short, simple sentences
const phase1Sentences: Sentence[] = [
  // Easy - 2-4 words
  { text: "Keep walking.", minFloor: 0, difficulty: 'easy' },
  { text: "Step down.", minFloor: 0, difficulty: 'easy' },
  { text: "Don't stop.", minFloor: 0, difficulty: 'easy' },
  { text: "One more step.", minFloor: 0, difficulty: 'easy' },
  { text: "Into darkness.", minFloor: 0, difficulty: 'easy' },
  { text: "Another floor.", minFloor: 0, difficulty: 'easy' },
  { text: "Keep descending.", minFloor: 0, difficulty: 'easy' },
  { text: "The stairs continue.", minFloor: 5, difficulty: 'easy' },
  { text: "Deeper still.", minFloor: 5, difficulty: 'easy' },
  { text: "No turning back.", minFloor: 10, difficulty: 'easy' },

  // Medium - 5-8 words
  { text: "The light fades behind you.", minFloor: 10, difficulty: 'medium' },
  { text: "Your footsteps echo strangely here.", minFloor: 15, difficulty: 'medium' },
  { text: "Something watches from below.", minFloor: 20, difficulty: 'medium' },
  { text: "The walls feel closer now.", minFloor: 25, difficulty: 'medium' },
  { text: "You don't remember starting this descent.", minFloor: 30, difficulty: 'medium' },
  { text: "The darkness has a weight.", minFloor: 35, difficulty: 'medium' },
  { text: "Each step takes you further.", minFloor: 40, difficulty: 'medium' },
  { text: "The concrete is cold underfoot.", minFloor: 45, difficulty: 'medium' },
];

// Phase 2: Middle descent (floors 50-199) - Longer, stranger sentences
const phase2Sentences: Sentence[] = [
  { text: "The doors are watching.", minFloor: 50, difficulty: 'easy' },
  { text: "Something moved behind you.", minFloor: 50, difficulty: 'easy' },
  { text: "They know you're here.", minFloor: 55, difficulty: 'easy' },
  { text: "Don't look at the doors.", minFloor: 60, difficulty: 'medium' },
  { text: "The residents are waking up.", minFloor: 65, difficulty: 'medium' },
  { text: "You can hear breathing that isn't yours.", minFloor: 70, difficulty: 'medium' },
  { text: "The floor numbers stopped making sense.", minFloor: 75, difficulty: 'medium' },
  { text: "Something is following your echoes.", minFloor: 80, difficulty: 'medium' },
  { text: "The walls are sweating something dark.", minFloor: 85, difficulty: 'hard' },
  { text: "You passed this door before. It's different now.", minFloor: 90, difficulty: 'hard' },
  { text: "The stairs are becoming softer beneath your feet.", minFloor: 95, difficulty: 'hard' },
  { text: "Your reflection in the wall doesn't match your movements.", minFloor: 100, difficulty: 'hard' },
  { text: "The air tastes like memories you've never had.", minFloor: 110, difficulty: 'hard' },
  { text: "Something with too many limbs retreated into a doorway.", minFloor: 120, difficulty: 'hard' },
  { text: "The stairs have started to curve in impossible directions.", minFloor: 130, difficulty: 'hard' },
  { text: "You can feel the building breathing around you now.", minFloor: 140, difficulty: 'hard' },
];

// Phase 3: Deep descent (floors 200-499) - Surreal and disturbing
const phase3Sentences: Sentence[] = [
  { text: "You are becoming the descent.", minFloor: 200, difficulty: 'medium' },
  { text: "The stairs recognize you now.", minFloor: 210, difficulty: 'medium' },
  { text: "Something old is digesting you slowly.", minFloor: 220, difficulty: 'hard' },
  { text: "The boundary between you and the stairwell thins.", minFloor: 230, difficulty: 'hard' },
  { text: "You watch yourself descending from every angle.", minFloor: 240, difficulty: 'hard' },
  { text: "The residents speak through your throat when you sleep.", minFloor: 250, difficulty: 'hard' },
  { text: "Gravity here is a suggestion you've started to ignore.", minFloor: 260, difficulty: 'hard' },
  { text: "Your bones are hollow now. They echo beautifully.", minFloor: 270, difficulty: 'hard' },
  { text: "The darkness has learned to wear your face.", minFloor: 280, difficulty: 'hard' },
  { text: "You remember being born at the bottom of these stairs.", minFloor: 290, difficulty: 'hard' },
  { text: "The stairwell shivers when you take a step.", minFloor: 300, difficulty: 'hard' },
  { text: "Other descenders pass through you without noticing.", minFloor: 350, difficulty: 'hard' },
  { text: "You have always been the thing at the bottom.", minFloor: 400, difficulty: 'hard' },
  { text: "The mouth opens. It is you. It has always been you.", minFloor: 450, difficulty: 'hard' },
];

// All sentences combined
const allSentences: Sentence[] = [...phase1Sentences, ...phase2Sentences, ...phase3Sentences];

// Typing state
export interface TypingState {
  currentSentence: string;
  typedText: string;
  startTime: number | null;
  completedSentences: number;
  totalCharactersTyped: number;
  totalErrors: number;
  currentErrors: number;
  wordsPerMinute: number;
  accuracy: number;
  streak: number;
  bestStreak: number;
}

export function createInitialTypingState(): TypingState {
  return {
    currentSentence: '',
    typedText: '',
    startTime: null,
    completedSentences: 0,
    totalCharactersTyped: 0,
    totalErrors: 0,
    currentErrors: 0,
    wordsPerMinute: 0,
    accuracy: 100,
    streak: 0,
    bestStreak: 0,
  };
}

// Get a sentence appropriate for the current floor
export function getNextSentence(floor: number, difficulty?: 'easy' | 'medium' | 'hard'): string {
  const available = allSentences.filter(s => s.minFloor <= floor);

  // Filter by difficulty if specified
  let filtered = difficulty
    ? available.filter(s => s.difficulty === difficulty)
    : available;

  // If no sentences match, fall back to all available
  if (filtered.length === 0) {
    filtered = available;
  }

  // Bias towards higher-floor sentences for variety
  const weighted: Sentence[] = [];
  filtered.forEach(s => {
    // More recent sentences get higher weight
    const weight = Math.max(1, Math.floor((s.minFloor + 50) / 50));
    for (let i = 0; i < weight; i++) {
      weighted.push(s);
    }
  });

  const selected = weighted[Math.floor(Math.random() * weighted.length)];
  return selected?.text || "Keep walking.";
}

// Calculate characters per minute
export function calculateWPM(charactersTyped: number, timeMs: number): number {
  if (timeMs <= 0) return 0;
  const minutes = timeMs / 60000;
  // Average word length is 5 characters
  const words = charactersTyped / 5;
  return Math.round(words / minutes);
}

// Calculate accuracy
export function calculateAccuracy(correctChars: number, totalChars: number): number {
  if (totalChars <= 0) return 100;
  return Math.round((correctChars / totalChars) * 100);
}

// Check typing progress and return match info
export interface TypingMatch {
  correctChars: number;
  errors: number;
  isComplete: boolean;
  justCompleted: boolean;
}

export function checkTyping(typed: string, target: string): TypingMatch {
  let correctChars = 0;
  let errors = 0;

  for (let i = 0; i < typed.length; i++) {
    if (i < target.length && typed[i] === target[i]) {
      correctChars++;
    } else {
      errors++;
    }
  }

  const isComplete = typed.length >= target.length && errors === 0;
  const justCompleted = isComplete && typed.length === target.length;

  return { correctChars, errors, isComplete, justCompleted };
}

// Get depth bonus based on typing performance
export function getDepthBonus(
  baseDepth: number,
  accuracy: number,
  wpm: number,
  streak: number
): number {
  let bonus = baseDepth;

  // Accuracy bonus: perfect = 2x, 90%+ = 1.5x, 80%+ = 1.2x
  if (accuracy >= 100) {
    bonus *= 2;
  } else if (accuracy >= 90) {
    bonus *= 1.5;
  } else if (accuracy >= 80) {
    bonus *= 1.2;
  }

  // WPM bonus: 60+ = 1.5x, 40+ = 1.25x
  if (wpm >= 60) {
    bonus *= 1.5;
  } else if (wpm >= 40) {
    bonus *= 1.25;
  }

  // Streak bonus: every 5 sentences = +10%
  bonus *= (1 + Math.floor(streak / 5) * 0.1);

  return Math.round(bonus);
}
