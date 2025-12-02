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
**Tone:** Predatory patience, dark strategy, growing power
**Genre Shift:** Turn-Based Strategy Game

### The Emergence

> *"You breach the surface. The light is painful. But the light brings... visitors. And visitors bring sustenance."*

The game transforms into a **turn-based strategy game**. The view shifts to an overhead hex-grid map centered on a dark pit—**The Mouth** (your Stairwell, now visible from above). Surface dwellers move across the landscape. Your goal: lure them in, consume them, and defend against those who would destroy you.

### The Strategic Layer

Each turn consists of three phases:

1. **Lure Phase** - Deploy and activate bait to attract wanderers
2. **Consume Phase** - Process any who enter the Mouth
3. **Defense Phase** - Repel attacks from the Resistance

### Core Resources

| Resource | Description |
|----------|-------------|
| **Biomass** | Consumed from those who descend. Primary building material. |
| **Echoes** | Carried over from Phase 3. Used for psychic lures. |
| **Dread** | Generated passively. Radius of influence on the map. |
| **Teeth** | Defensive structures. Constructed from Biomass. |

### The Bait System

Lures attract different types of surface dwellers:

| Bait Type | Cost | Attracts | Description |
|-----------|------|----------|-------------|
| **The Lost Child** | 50 Echoes | Searchers, Parents | *"They hear crying from below."* |
| **The Treasure Gleam** | 100 Biomass | Adventurers, Thieves | *"Gold light from impossible depths."* |
| **The Familiar Voice** | 200 Echoes | Grieving, Lonely | *"Someone they lost calls to them."* |
| **The Answer** | 500 Echoes | Scholars, Seekers | *"The solution to everything waits below."* |
| **The Cure** | 300 Biomass + 200 Echoes | Desperate, Dying | *"Healing beyond medicine."* |
| **Mass Hysteria** | 1000 Dread | Crowds, Mobs | *"The whole town walks toward you, dreaming."* |

### Surface Dweller Types

| Type | Biomass Value | Behavior | Danger |
|------|---------------|----------|--------|
| **Wanderer** | 10 | Random movement, easily lured | None |
| **Seeker** | 25 | Moves toward active bait | None |
| **Hunter** | 15 | Investigates, may attack | Low |
| **Soldier** | 5 | Attacks on sight | Medium |
| **Priest** | 50 | Reduces Dread radius | High |
| **Scientist** | 30 | Studies you, enables countermeasures | Critical |
| **The Ordained** | 200 | Cultists. Walk directly in. | Negative (they help) |

### The Resistance

As you consume, **Awareness** builds globally. At thresholds, organized resistance appears:

| Awareness Level | Response |
|-----------------|----------|
| 25% | **Local Militia** - Armed patrols avoid the Mouth |
| 50% | **The Cordon** - Military perimeter established |
| 75% | **Project SEAL** - Scientists develop countermeasures |
| 90% | **The Burning** - They try to destroy you with fire |
| 100% | **Nuclear Option** - They're going to bomb the site |

### Defense Structures

Build defenses using Biomass:

| Structure | Cost | Effect |
|-----------|------|--------|
| **Tooth Ring** | 100 Biomass | Basic perimeter defense |
| **Confusion Spire** | 250 Biomass | Soldiers attack each other |
| **The False Ground** | 500 Biomass | Hidden pit traps across hexes |
| **Silence Membrane** | 400 Biomass | Blocks radio/communications |
| **Absorption Wall** | 800 Biomass | Converts explosives to Biomass |
| **The Puppet Garden** | 1000 Biomass | Captured soldiers defend you |

### The Tech Tree

Research unlocks using accumulated Biomass and consumed Scholars:

**TIER 1: Emergence**
- Deeper Roots (increased Dread radius)
- Efficient Digestion (+50% Biomass from consumption)
- Surface Mimicry (structures look natural)
- Echo Amplification (bait range increased)

**TIER 2: Establishment**
- Mass Graves (consume multiple targets per turn)
- The Fog (reduced Awareness generation)
- Willing Servants (The Ordained spawn naturally)
- Regeneration (heal damage between turns)

**TIER 3: Dominance**
- Psychic Scream (Dread damages nearby units)
- False Memories (Resistance believes you're gone)
- The Nursery (spawn defensive creatures)
- Infrastructure Consumption (eat buildings for massive Biomass)

### TIER 4: EXPANSION (The Final Three)

These three techs each **dramatically increase the size of the Mouth**:

| Tech | Cost | Effect |
|------|------|--------|
| **The Widening** | 5000 Biomass | Mouth expands to 3x3 hexes. *"You were so small before. So hungry."* |
| **Continental Throat** | 25000 Biomass | Mouth expands to 7x7 hexes. Visible from orbit. *"Nations fall into you now."* |
| **Planetary Consumption** | 100000 Biomass | Mouth consumes the world. **Unlocks Phase 5.** *"There is no more surface. There is no more resistance. There is only descent—and the space between stars, where other meals orbit."* |

### Victory Condition

The phase ends when **Planetary Consumption** is researched. The world is gone. You are vast. And hungry. And there are other worlds.

---

## PHASE 5: "The Hunger Between Stars"
**Triggered by:** Researching "Planetary Consumption"
**Tone:** Cosmic predator, terrible majesty, action intensity
**Genre Shift:** Action Game (Eldritch Space Combat)

### The Awakening

> *"You rise from the husk of the world. You are no longer a stairwell. You are not a mouth. You are something older. Something that moves between stars and feeds on what it finds."*

The game transforms into an **action game**. You are now a vast eldritch entity—a living geometry of impossible angles and hungry darkness—moving through space. Planets, moons, stars, and stranger things orbit before you.

### Control Scheme

- **Movement:** Direct control. Drift through space toward targets.
- **Primary Action (Click/Tap):** Extend tendrils to grab objects
- **Secondary Action (Hold):** Open the Maw—consume grabbed objects
- **Defensive Action:** Contract into defensive form (reduced hitbox, slower)

### The Consumption Mechanic

Objects have **Mass** and **Resistance**:

- **Mass** determines how much you grow when consuming
- **Resistance** determines how long consumption takes and if damage is dealt

| Object Type | Mass | Resistance | Notes |
|-------------|------|------------|-------|
| **Asteroid** | 10 | None | Tutorial food |
| **Moon** | 100 | None | Easy meal |
| **Dead Planet** | 500 | None | Abandoned, safe |
| **Living Planet** | 1000 | Low | Population fights back (missiles, nukes) |
| **Fortress World** | 2000 | High | Orbital defenses, energy shields |
| **Dyson Structure** | 5000 | Very High | Civilization's ultimate achievement |
| **Star** | 10000 | Extreme | Requires special evolution |
| **Neutron Star** | 25000 | Extreme | Deadly radiation |
| **Black Hole** | 50000 | Maximum | The ultimate meal |

### Growth System

As you consume, you **evolve**:

| Total Mass Consumed | Evolution |
|---------------------|-----------|
| 1,000 | **Tendril Array** - Grab multiple objects simultaneously |
| 5,000 | **Stellar Gullet** - Can consume stars without damage |
| 15,000 | **Void Skin** - Resist all conventional weapons |
| 30,000 | **Gravity Well** - Objects drift toward you |
| 50,000 | **Event Horizon** - Small objects auto-consumed on contact |
| 100,000 | **Galactic Span** - You are visible from anywhere in the galaxy |
| 250,000 | **The Devourer** - Phase 5 complete. Galaxy consumed. |

### Resistance Encounters

Civilizations fight back:

**TIER 1: Primitive Resistance**
- Missile swarms (minor damage, easily absorbed)
- Nuclear strikes (moderate damage, brief stun)
- Evacuation ships (escape = reduced Mass yield)

**TIER 2: Advanced Resistance**
- Plasma lances (continuous damage beams)
- Gravity traps (slow your movement)
- Shield networks (must be dismantled before planet consumption)

**TIER 3: Desperate Measures**
- Relativistic kill vehicles (massive damage, hard to dodge)
- Artificial singularities (temporary movement lock)
- The Phalanx (coordinated multi-system defense fleet)

**TIER 4: The Last Hope**
- **The Coalition Armada** (all remaining civilizations unite)
- **The God-Engine** (ancient weapon from a dead civilization, reactivated)
- **The Sacrifice** (they collapse stars to stop you—boss encounter)

### Boss Encounters

Certain systems contain **Leviathans**—creatures like yourself:

| Leviathan | Location | Behavior |
|-----------|----------|----------|
| **The First Hunger** | Galactic Core | Ancient, slow, massive. Territorial. |
| **The Swarm That Thinks** | Nebula Cluster | Many small entities acting as one |
| **The Mirror** | Void Between Galaxies | It looks exactly like you. It's always been following. |

Defeating Leviathans grants **Primordial Mass**—used for unique evolutions.

### Galactic Progress

The galaxy map shows consumption progress:

- **Systems Consumed: X / 400**
- **Civilizations Ended: X / 23**
- **Leviathans Defeated: X / 3**
- **Galactic Mass: X%**

At 100% Galactic Mass:

> *"The last star goes dark in your belly. The last scream fades into digestion. You are alone. You are everything this galaxy ever was. And in the distance—impossibly far, impossibly close—you see other galaxies. Other meals. Other... competitors."*

**Phase 6 Unlocks.**

---

## PHASE 6: [PLACEHOLDER - AWAITING DESIGN]
**Triggered by:** Consuming the galaxy (100% Galactic Mass)
**Tone:** TBD
**Genre:** TBD

> *Design Note: What comes after galactic consumption? The user's vision continues...*

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
| 4 | Strategic clicks, troop movements, screams | Wind across plains, distant sirens | Military drums corrupted, growing dread |
| 5 | Stellar consumption, ship explosions, void hum | The silence between stars | Orchestral chaos, triumphant horror |

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

**Phase 4:** Top-down hex strategy aesthetic. Clean tactical UI that slowly corrupts. The Mouth is a dark pit that grows. Surface dwellers rendered as tokens that become more detailed as they get closer. Fog of war that isn't fog—it's *attention*.

**Phase 5:** Space action aesthetic. You are rendered as impossible geometry—tendrils, angles, hungry void. Planets glow with life before consumption. Stars dim as you approach. The void between stars isn't empty—it's *you*.

## Color Palette Progression
1. Grays, single harsh white light source
2. Grays with veins of pulsing red/purple
3. Reds, pinks, organic colors
4. Greens and browns (surface world), shifting to corruption purples around the Mouth
5. Deep space blacks, stellar whites, consumption reds when feeding

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
