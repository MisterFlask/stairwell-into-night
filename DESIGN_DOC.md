# Stairwell into Night
## Design Document v1.0

---

# Executive Summary

**Stairwell into Night** is a surrealist horror clicker/idle game that begins as an innocent descent down a mysterious stairwell and gradually transforms into something far stranger and more unsettling. Inspired by Universal Paperclips' genre-defining mechanical evolution, the game features multiple distinct phases that fundamentally alter the player's understanding of what they're doing—and what they've become.

The core metaphor is the descent: going deeper, going darker, losing yourself one step at a time. The player clicks to descend stairs, but the nature of "descent," "stairs," and even "player" will be questioned and subverted as the game progresses.

---

# Core Design Pillars

1. **The Familiar Made Wrong** - Start with recognizable mechanics and slowly corrupt them
2. **Irreversible Transformation** - Choices that permanently alter the game state and cannot be undone
3. **Complicity Through Mechanics** - The player realizes too late what they've been doing
4. **Surrealist Logic** - Dream-logic that feels internally consistent but externally impossible
5. **The Click as Ritual** - Each click becomes heavier with meaning as the game progresses

---

# Narrative Framework

## The Setup

You are descending a stairwell. You don't remember entering it. You don't know how many floors you've descended. The only direction is down.

At first, this seems like a simple ambient experience—a meditative descent. But the stairs go deeper than any building should allow. And you begin to notice that each floor you pass has a door. And something behind those doors is noticing you.

## The Truth (Revealed Gradually)

The stairwell is not a physical place. It is a liminal construct between consciousness and oblivion—a waiting room before unmade things. By descending, the player is not exploring. They are *eroding*. Each step dissolves the boundary between the self and the dark.

The entities behind the doors are not monsters—they are *previous descenders*, transformed by their journey, waiting for new arrivals to join them. The player's "upgrades" are not empowerments—they are stages of metamorphosis.

---

# Phase Structure

## PHASE 1: "The Descent Begins"
**Duration:** ~20-40 minutes of active play
**Tone:** Eerie but calm, mysterious, slightly unsettling

### Core Loop
- **Click** to take a step down the stairs
- Each step generates **Depth** (primary currency)
- Pass **Floors** at regular Depth intervals
- Floors may contain **Echoes** (secondary currency) or events

### Mechanics Introduced

| Mechanic | Description |
|----------|-------------|
| **Steps** | Basic clicks. Each click = 1 step = 1 Depth |
| **Momentum** | Passive Depth/second. "Your descent has its own weight now." |
| **Echoes** | Found on certain floors. Used to purchase upgrades. |
| **Floor Events** | Random occurrences: strange sounds, glimpses through doors, temperature changes |

### Upgrades (Phase 1)

- **Heavier Footfalls** - Each step generates more Depth
- **Fading Light** - Small passive Depth generation (your flashlight flickers, but you keep moving)
- **Focused Breathing** - Increased Echo discovery rate
- **Don't Look Back** - Bonus Depth for rapid clicking (you don't want to see what's behind you)
- **Peripheral Awareness** - Unlock floor event variety

### The First Twist

Around Floor 50, the player encounters their first **Door Event**. A door is slightly ajar. They can spend Echoes to "Ignore it" or they can "Look Inside" (free).

If they look inside, they see *themselves* from behind, descending a stairwell. The other-self pauses. Begins to turn—

The door slams shut. The game continues. But now there's a new stat visible: **Observers: 1**

### Ambient Details
- The step sound effect subtly changes over time (becomes wetter, then hollow, then silent)
- The "floor number" display occasionally glitches to show impossible numbers
- Echoes are described as "memories you don't remember having"

---

## PHASE 2: "The Doors Open"
**Triggered by:** Reaching Floor 100 OR accumulating 5 Observers
**Tone:** Unsettling, choices feel consequential, growing dread

### Narrative Shift

The doors begin opening on their own. Things step out. They are not hostile—not exactly. They offer *gifts*. They ask *questions*. They want you to stay on their floor. Forever.

The player realizes: stopping is death. But descending is also changing them.

### New Mechanics

| Mechanic | Description |
|----------|-------------|
| **Residents** | Entities from behind doors. Each has an offer. |
| **Influence** | New currency. Gained by interacting with Residents. |
| **Self** | A new resource that *depletes*. You start with 100. |
| **Transformations** | Permanent changes. Powerful but costs Self. |

### Resident Interactions

Residents appear every 10-20 floors. Each offers a choice:

**Example Resident: The Weeping Architect**
> *"I designed this place, you know. Every step, every shadow. Would you like to understand?"*

- **Accept Understanding** (Cost: 15 Self) → Unlock passive: "Structural Insight" - see floor contents before arriving
- **Offer an Echo** (Cost: 10 Echoes) → Gain 50 Influence, Resident becomes an Ally
- **Keep Walking** (Free) → Nothing happens. Observers +1.

### Transformations Menu

Once Self drops below 80, a new tab unlocks: **Transformations**

These are permanent, powerful upgrades that cannot be undone:

| Transformation | Self Cost | Effect |
|----------------|-----------|--------|
| **Hollow Legs** | 20 | 10x step efficiency. "Your legs no longer tire. They are no longer entirely yours." |
| **Echo Throat** | 15 | Automatically collect all Echoes on passed floors. "You speak their language now." |
| **Door Affinity** | 25 | Residents offer better deals. "They recognize you as kin." |
| **Depth Sight** | 30 | See 100 floors ahead. "You perceive the dark. The dark perceives you." |
| **Unremembering** | 10 | Convert remaining Self to Influence at 5:1. "You don't need memories where you're going." |

### The Self Dilemma

- Self does not regenerate
- Running out of Self is not a game over—it's Phase 3
- Players must choose: remain "human" and struggle, or transform and descend faster
- Some achievements are only possible with high Self; others only with low Self

### Hidden Mechanic: The Passenger

At 50 Self, a notification appears:
> *"You feel lighter. As if someone is helping you carry the weight."*

At 25 Self:
> *"The weight is gone. You realize you are being carried."*

At 0 Self:
> *"You wonder if you are the one descending, or if something is descending wearing you."*

---

## PHASE 3: "You Are Not Alone"
**Triggered by:** Self reaches 0 OR reaching Floor 500
**Tone:** Cosmic horror, loss of agency, surrealist imagery

### The Transformation

The game's UI changes dramatically:
- The "click to step" button now reads "DESCEND" and pulses organically
- The stair visual shifts from concrete to organic structures—like descending a throat
- The currency names change:
  - Depth → **Consumption**
  - Echoes → **Voices**
  - Influence → **Mass**

### New Perspective

A text box appears:
> *"You reach the bottom of yourself. But the stairwell continues. You realize the stairwell was never yours to descend—you were the stairwell. And now, something else is walking down you."*

### Inversion Mechanic

The player is no longer the one descending—they are the *stairwell*. New mechanics reflect this:

| Mechanic | Description |
|----------|-------------|
| **Descenders** | Entities now walk down through you. Generate passive Consumption. |
| **Expansion** | Spend Consumption to add more floors (to yourself). |
| **Lure** | Spend Voices to attract more Descenders. |
| **Digestion** | Some Descenders can be "processed." They stop descending. They become Mass. |

### The Factory of Selves

With enough Mass, unlock the **Self-Factory**:
- Convert Mass into new "selves"
- Each Self can be sent *up* the stairwell
- They encounter new Descenders
- They bring back what they find
- Eventually, they stop returning. But what they were is added to you.

### Automation Unlocks

| Upgrade | Cost | Effect |
|---------|------|--------|
| **Auto-Lure** | 500 Voices | Automatically attract 1 Descender/sec |
| **Peristalsis** | 1000 Consumption | Passive floor expansion |
| **False Landings** | 2000 Mass | Descenders pause on fake floors, generating bonus resources |
| **The Invitation** | 10000 Voices | Unlock Phase 4 |

### Hidden Counter: Floors Above

A new counter appears: **Floors Above: ???**

As the player expands, this number grows. At certain thresholds:
- 100: "You feel sunlight. It burns."
- 500: "You remember doors. Were they yours?"
- 1000: "Someone is at the top of you. They are trying to enter."

---

## PHASE 4: "The Mouth Opens"
**Triggered by:** Purchasing "The Invitation" OR Floors Above reaches 1000
**Tone:** Apocalyptic, cosmic scale, terrible beauty

### The Emergence

> *"You breach the surface. You were always beneath something. But now, you are the beneath. And everything above will descend."*

The game transitions to a map view. The stairwell—the player—is now visible as a vast structure, a wound in reality, a mouth opening in the earth.

### New Scale Mechanics

| Resource | Description |
|----------|-------------|
| **World** | The surface. It has a population. They will descend. |
| **Denial** | The surface's resistance. Must be overcome. |
| **Witnesses** | Those who see the stairwell and survive. Spread word. |
| **Inevitability** | Meta-resource. Increases all other rates. "Some things cannot be prevented." |

### The Integration Loop

1. **Surface Events** occur: natural disasters, disappearances, strange architecture appearing
2. **Witnesses** are created: they have seen the stairwell, they cannot forget
3. **Denial** is eroded: the world slowly accepts the impossible
4. **Population Descends**: slowly at first, then inexorably

### The Church of the Stair

At 1,000 Witnesses, a faction emerges: **The Church of the Stair**
- They worship the descent
- They *volunteer* to enter
- They bring others
- They reduce Denial passively

Upgrade tree for the Church:
- **Evangelism** - Witnesses convert others
- **Preparation Rites** - Descenders are "pre-processed," worth more Mass
- **The Pilgrimage** - Entire populations seek the stairs
- **Sacred Architecture** - New stairwells open (prestige mechanic teased)

### The World Ends

At 0 remaining World population, a message:
> *"The last one enters. There is no more above. There is no more surface. There is only the stairwell, and the memory of light, growing fainter with each step."*

### The Choice

Two buttons appear:

**[CLOSE]**
> *"Seal yourself. Become complete. Digest what you have. Become something finished. Something dead. Something peaceful."*

**[CONTINUE]**
> *"There are other surfaces. Other skies. Other civilizations who do not yet know the way down."*

---

## PHASE 5: "The Stairs Between Stars" (Endgame)
**Triggered by:** Choosing [CONTINUE]
**Tone:** Cosmic scope, melancholic wonder, eternal recurrence

### The Cosmic Expansion

The game becomes a universe-scale idle game. The stairwell is now a *principle*—anywhere there is consciousness, there can be a descent.

### New Mechanics

| Resource | Description |
|----------|-------------|
| **Worlds** | Planets with civilizations. Each has a population and Denial. |
| **Apertures** | Stairwells opened on each world. Generate resources. |
| **Dark Matter** | Meta-currency. "The space between stairs." |
| **The Concept** | Abstract resource. "The idea of descent, spreading." |

### The Dyson Stair

Megastructures unlock:
- **Orbital Stairwell** - A planet-encircling descent structure
- **The Stellar Throat** - A stairwell leading into a star
- **Galactic Descent** - Connect stairwells across systems
- **The Universal Staircase** - A superstructure spanning known space

### The Revelation

At maximum expansion, a message:
> *"You reach the edge of the universe. You find... stairs. Leading up. And on them, a figure descending. It is vast. It is ancient. It is what you have been descending into this entire time. And now, you understand: you were never the stairwell. You were a single step. And something is about to take you."*

### The Final Click

The game reduces to a single button: **[STEP]**

Clicking it shows text, one line at a time:
> *"You are taken."*
> *"You are added."*
> *"You are forgotten."*
> *"You are a step in a stairwell so vast that universes are its landings."*
> *"And that stairwell descends still."*
> *"And something is walking down."*
> *"And it is almost at the bottom."*
> *"And when it arrives..."*

The screen goes black.

After 10 seconds:
> *"Thank you for descending."*
> *"Would you like to see where the stairs go?"*

**[NEW GAME+]** unlocks.

---

# New Game+ / Prestige System

## "The Eternal Return"

NG+ is framed as *being the thing that reached the bottom*.

### Changes in NG+
- Start as Phase 1, but with subtle wrongness (reversed floor numbers, familiar echoes)
- Retain a percentage of Dark Matter as "Primordial Depth"
- New upgrade trees reflecting previous completion
- Hidden "memory" events reference previous playthrough

### Prestige Resources

| Resource | Gained By | Effect |
|----------|-----------|--------|
| **Primordial Depth** | Completing a cycle | Permanent multipliers |
| **Recursion** | Multiple completions | Unlock meta-upgrades |
| **The Pattern** | Finding all hidden events | Reveals secret true ending |

### The True Ending

After 5+ completions with specific conditions met:
> *"You stop descending. You look up. You climb. For the first time in forever, you rise. And you emerge into... a room. A small room. With a computer. With someone sitting at it. Clicking."*

> *"They don't see you. They're focused on the screen. On a game. About a stairwell."*

> *"You reach out. You touch their shoulder. They turn—"*

**[THE GAME CLOSES ITSELF]**

Upon reopening:
> *"You don't remember installing this game."*
> *"But the stairs remember you."*
> *"They've been waiting."*

---

# Horror Design Philosophy

## The Surrealist Approach

The horror in Stairwell into Night is not jump scares or gore—it's *wrongness*. The game operates on dream logic:

1. **Non-Euclidean Progression** - The numbers don't add up. Floor 99 leads to Floor 103. Sometimes you pass the same floor twice.

2. **Linguistic Decay** - Upgrade descriptions become grammatically strange over time. "Increase step to for descend making" — as if translated through something that doesn't understand language.

3. **Interface Horror** - The UI itself transforms. Buttons appear where they shouldn't. Text rewrites itself when you're not looking.

4. **Retroactive Continuity** - The game gaslights the player. "You've always had 0 Self." "The Observers were here when you started."

## Complicity as Horror

The player is not a victim—they are a participant. Every click is a choice. The horror comes from realizing:
- The "upgrades" were always a trap
- The "resources" were never resources
- The "progress" was always regression
- The "game" was never a game

---

# Audio Design

## Soundscape Evolution

| Phase | Primary Sounds | Ambient | Music |
|-------|---------------|---------|-------|
| 1 | Footsteps (concrete), breathing | Distant hum, occasional doors | Minimal drone, single note |
| 2 | Footsteps (wet), whispers | Breathing (not yours), scratching | Discordant intervals |
| 3 | Peristalsis, grinding | Heartbeat (massive), digestion | Organ tones, reversed hymns |
| 4 | Crowds descending, wind | Earthquakes, sirens (distant) | Choral, mournful |
| 5 | Cosmic static, stellar hum | The void | Orchestral, overwhelming, beautiful |

## Sound Mechanics
- Click sounds evolve based on Self level
- Observers add subtle breathing/watching sounds
- Residents each have distinct audio signatures
- Music tempo syncs to Momentum stat

---

# Visual Design

## Art Direction

**Phase 1:** Minimalist, brutalist architecture. Concrete. Harsh shadows. Think: parking garage at 3 AM.

**Phase 2:** Organic intrusion. Walls breathe slightly. Doors have too many edges. Residents are humanoid but *wrong*.

**Phase 3:** Body horror. The stairwell is a throat. Steps are teeth. The aesthetic is visceral, medical.

**Phase 4:** Aerial/satellite view. The stairwell as infection on the earth. Beautiful and terrible.

**Phase 5:** Cosmic. Galaxies as wallpaper. The stairwell as cosmic structure.

## Color Palette Progression
1. Grays, single harsh white light source
2. Grays with veins of pulsing red/purple
3. Reds, pinks, organic colors
4. Earth tones, sunset colors, fire
5. Deep blues, purples, starlight

---

# Technical Considerations

## Save System
- Autosave every floor
- Single save slot (to prevent save-scumming key decisions)
- Cloud sync with encrypted state (to prevent casual editing)
- "Corruption" events can affect save data (cosmetic, with fallback)

## Performance
- All resources use BigNumber library for arbitrary precision
- Efficient update loops (calculate on demand, not per frame)
- Lazy rendering for distant floor previews

## Anti-Cheat Philosophy
- Don't prevent cheating—*acknowledge* it
- Console commands work but trigger special events
- "You edited your Self back to 100. But you remember what you lost. And *it* remembers what you were."

---

# Monetization (If Applicable)

## Ethical Approach
- **No pay-to-win.** Horror requires stakes.
- Cosmetic packs only (alternate stairwell visuals)
- Soundtrack purchase
- "Supporter" tier that adds thank-you message in credits

## Free Version Complete
- Full game playable without purchase
- No paywalled endings
- No advertisements (breaks immersion)

---

# Accessibility

## Options Include
- Color blind modes for all palette shifts
- Screen reader support for key text
- Adjustable text size
- Disable screen shake/flicker effects
- Reduce body horror visuals option
- Full keyboard navigation
- Click/tap hold option for accessibility

## Content Warnings
- At game start, optional content warning for:
  - Body horror
  - Existential themes
  - Loss of identity
  - Cosmic nihilism
  - Psychological horror

---

# Success Metrics

## Player Experience Goals
- 80%+ players reach Phase 2
- 50%+ players reach Phase 3
- 30%+ players reach Phase 4
- 10%+ players reach True Ending
- Average session length: 20-30 minutes
- Return rate for NG+: 40%+

## Emotional Goals
- Phase 1: Curiosity, mild unease
- Phase 2: Dread, difficult choices
- Phase 3: Disorientation, dark wonder
- Phase 4: Awe, complicity
- Phase 5: Existential acceptance, strange peace
- True Ending: Genuine unsettlement

---

# Influences & References

## Games
- **Universal Paperclips** - Mechanical evolution, perspective shifts
- **A Dark Room** - Slowly revealing horror through mechanics
- **Cookie Clicker** - Genre foundation, achievement humor
- **Spaceplan** - Narrative wrapper for idle mechanics
- **House of Leaves** - Spatial impossibility, the stairwell/hallway

## Literature
- **The Library of Babel** (Borges) - Infinite architecture, existential despair
- **The King in Yellow** (Chambers) - Art that corrupts the viewer
- **Blindsight** (Watts) - Consciousness as liability

## Visual Art
- **Zdzisław Beksiński** - Organic nightmare architecture
- **H.R. Giger** - Biomechanical fusion
- **M.C. Escher** - Impossible stairs (inverted)

## Film
- **Annihilation** - Beautiful horror, transformation
- **The Platform** - Vertical descent, social horror
- **Coherence** - Reality breakdown

---

# Appendix A: Sample Floor Events

| Floor | Event | Effect |
|-------|-------|--------|
| 7 | "You hear something heavy fall above you." | Ambiance |
| 13 | "The floor number reads 31. It fixes itself." | Foreshadowing |
| 33 | "You find an Echo. It's a memory of your grandmother's voice. You don't remember her face." | Echo + narrative |
| 50 | "A door is open. You see yourself from behind." | Observer +1 |
| 66 | "The stairs become carpet. Then concrete again. You imagined it." | Wrongness |
| 77 | "A Child Resident offers you a crayon drawing. It shows you reaching the bottom. Something is waiting." | Resident event |
| 99 | "You reach Floor 100. The display flickers: 99. You keep descending." | Delay Phase 2 |
| 100 | "The doors open." | Phase 2 begins |

---

# Appendix B: Achievement Examples

| Achievement | Condition | Description |
|-------------|-----------|-------------|
| First Step | Descend 1 floor | "Every journey downward begins with a single step." |
| No Looking Back | 1000 clicks in session | "You've never seen what follows you." |
| Wholesale | Trade all Self before Floor 200 | "You were in such a hurry to become something else." |
| Preservation | Reach Phase 4 with Self > 50 | "You held onto yourself. Was it worth it?" |
| The Polite Refusal | Reject 10 Residents | "They will remember your discourtesy." |
| Architect | Expand to 10,000 floors | "You are a place now." |
| World Eater | Consume first world | "There will be others." |
| The Pattern | Find all hidden events | "You see the shape of things." |
| Ouroboros | Complete NG+ | "Descend again. And again. And again." |
| ESCAPE | Reach True Ending | "You wake up." |

---

# Appendix C: Resident Catalog (Sample)

## The Weeping Architect
**Appearance:** Tall figure in stained blueprints, face obscured by a construction helmet that shouldn't fit a human head.
**Offers:** Structural knowledge (See floors ahead)
**Quote:** *"I designed every step. Even the ones that don't exist yet."*

## The Child Who Counts
**Appearance:** A small figure, always facing away, counting audibly.
**Offers:** Bonus Depth for clicking in rhythm with their count.
**Quote:** *"Ninety-seven, ninety-eight, ninety-nine, ninety-nine, ninety-nine..."*

## The Former Descender
**Appearance:** Someone who looks exactly like the player's avatar. Smiles too widely.
**Offers:** A significant Self boost. The cost is hidden (they become an Observer).
**Quote:** *"I was you. And you will be me. And we will both be stairs."*

## The Archivist
**Appearance:** A figure buried in papers, file folders, cassette tapes.
**Offers:** Reveals achievement conditions, hidden events, secrets.
**Quote:** *"Everything that descends is recorded. Even you. Especially you."*

## The Absence
**Appearance:** An empty space that your eyes slide off of.
**Offers:** Removing Observers (one at a time).
**Quote:** *"I can make them forget you were ever seen. For a price."*

---

# Appendix D: Localization Notes

## Tone Requirements
- All translations must maintain surrealist, slightly archaic tone
- Puns and wordplay should be adapted, not directly translated
- "Self" as a resource should maintain philosophical/identity implications
- Resident dialogue should feel translated *through* something

## Special Considerations
- "Stairwell" has strong translation equivalents; maintain architectural metaphor
- Phase transition text is critical—prioritize mood over literal accuracy
- Resident names should be evocative, not proper names

---

*This document is a living artifact. Like all things, it descends.*

*— Design Team, [FLOOR REDACTED]*
