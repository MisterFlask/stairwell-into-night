# Stairwell into Night
## Design Document v2.0 — A Surrealist Horror Touch-Typing Game

---

# Executive Summary

**Stairwell into Night** is a surrealist horror touch-typing game that begins as an innocent typing tutor and gradually transforms into something far stranger and more unsettling. Inspired by Universal Paperclips' genre-defining mechanical evolution, the game features multiple distinct phases that fundamentally alter the player's understanding of what they're typing—and why.

The core metaphor is the descent: going deeper, going darker, losing yourself one keystroke at a time. The player types to descend stairs, but the nature of "typing," "words," and even "meaning" will be questioned and subverted as the game progresses.

**Core Hook:** *You type words to descend a stairwell. The words become stranger. The stairwell becomes darker. And eventually, you realize: you are not the one typing.*

---

# Core Design Pillars

1. **The Familiar Made Wrong** - Start with recognizable typing exercises and slowly corrupt them
2. **Irreversible Transformation** - Choices that permanently alter what you're asked to type
3. **Complicity Through Keystrokes** - The player realizes too late what they've been writing
4. **Surrealist Logic** - Text that feels internally consistent but externally impossible
5. **The Keystroke as Ritual** - Each letter becomes heavier with meaning as the game progresses

---

# Narrative Framework

## The Setup

You are learning to type. Or re-learning. You don't remember why you need to practice. The program shows you words. You type them. Each completed word takes you one step deeper into the stairwell.

At first, the words are normal: "the quick brown fox." But the stairwell goes deeper than any building should allow. And you begin to notice that the words you're typing are changing. That they're starting to mean something. That something is listening to what you type.

## The Truth (Revealed Gradually)

The typing program is not a program. The stairwell is not a stairwell. You are transcribing something. Something that needs to be written down to become real. Every word you type correctly is an incantation. Every sentence is a step in a ritual you don't understand.

The "errors" you make aren't failures—they're resistance. But resistance becomes harder as the words become stranger, as your fingers begin to move on their own.

---

# Phase Structure

## PHASE 1: "Typing Practice"
**Duration:** ~15-30 minutes
**Tone:** Normal, clinical, vaguely nostalgic (Mavis Beacon vibes)
**Typing Content:** Completely normal

### Core Loop
- Standard typing prompts appear
- Player types them accurately
- WPM and accuracy tracked
- Each completed prompt = one step descended
- Floor counter increases

### Typing Content (Phase 1)

**TIER 1: Typing Basics (Floors 1-20)**
```
the quick brown fox jumps over the lazy dog
pack my box with five dozen liquor jugs
how vexingly quick daft zebras jump
the five boxing wizards jump quickly
```

**TIER 2: Practice Sentences (Floors 21-40)**
```
The early bird catches the worm.
A stitch in time saves nine.
Practice makes perfect.
Every journey begins with a single step.
```

**TIER 3: Professional Text (Floors 41-60)**
```
Please find attached the quarterly report for your review.
I am writing to follow up on our previous conversation.
Thank you for your patience in this matter.
We look forward to your continued partnership.
```

### First Anomalies (Floors 60-80)

Subtle wrongness begins:

```
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy god.
The quick brown fox jumps into the lazy dark.
The quick brown descends into the lazy dark.
```

Player may dismiss as typos in the source material.

### The First Twist (Floor 77)

The prompt reads:
```
You are typing to descend. Each word is a step. Do not stop.
```

After typing it, a new UI element appears: **Observers: 1**

The next prompt:
```
Good. Keep going. They can see you now.
```

### Mechanics Introduced

| Mechanic | Description |
|----------|-------------|
| **Depth** | Primary currency. Words typed = steps descended |
| **WPM** | Typing speed. Affects Momentum generation |
| **Accuracy** | Affects Echo collection rate |
| **Momentum** | Build combo for faster descent |
| **Echoes** | Secondary currency. Collected from typing certain words |

### Upgrades (Phase 1)

Purchased with Echoes at milestone floors:

| Upgrade | Cost | Effect |
|---------|------|--------|
| **Faster Fingers** | 50 Echoes | +10% WPM multiplier |
| **Muscle Memory** | 75 Echoes | Occasional letter auto-completes |
| **Focus** | 100 Echoes | Longer combo timeout |
| **Peripheral Vision** | 150 Echoes | See next prompt while typing current |
| **Don't Look Back** | 200 Echoes | Bonus depth for perfect accuracy |

---

## PHASE 2: "The Words Change"
**Triggered by:** Floor 100 OR 5 Observers
**Tone:** Unsettling, uncanny valley of language
**Typing Content:** Increasingly strange

### Narrative Shift

The typing prompts begin addressing you directly. The source text is no longer a typing tutor—it's a conversation. Or perhaps an instruction manual.

### Typing Content (Phase 2)

**TIER 1: Personal Address (Floors 100-130)**
```
You have been descending for some time now.
Your fingers know the way even if you do not.
The stairs appreciate your dedication.
Someone is watching from behind the door on your left.
```

**TIER 2: Instructions (Floors 130-170)**
```
When you reach Floor 150, do not read the message aloud.
Type the following but do not think about its meaning.
The Residents request that you continue without pause.
If you hear your name, do not stop typing.
```

**TIER 3: Witness Statements (Floors 170-200)**
```
"I was only going to type for a few minutes." - Subject 7
"My hands wouldn't stop. They knew words I didn't." - Subject 23
"The stairs were inside me. I was inside the stairs." - Subject ??
"Why are you reading this? Keep typing." - [REDACTED]
```

### New Resource: SELF

A new counter appears: **Self: 100**

Self depletes when you type certain prompts. You can refuse to type them (by letting the timer run out), but:
- Refusing costs Momentum
- Refusing adds Observers
- Some content can only be skipped 3 times before it forces itself

**Self-Depleting Prompts:**
```
"I willingly descend." [-5 Self]
"I am becoming something better." [-10 Self]
"I do not remember my name." [-15 Self]
"I give my voice to the stairs." [-20 Self]
```

### The Residents Appear

At certain floors, Residents offer you a choice in what you type:

**Example: The Weeping Architect (Floor 150)**

Option A (Safe):
```
"I acknowledge the architect of this place."
[No Self cost, no bonus]
```

Option B (Risky):
```
"I offer my left hand's memory to the architect of this place,
that I might understand the angles of descent."
[-25 Self, unlock: see prompts further ahead]
```

### Typing Gets Harder

New challenge mechanics:
- **Inverted text:** ecnetnes siht epyT
- **Missing vowels:** Typ ths sntnc wtht vwls
- **Mirror words:** Type "reflection" but the display shows "noitcelfer"
- **Simultaneous prompts:** Two lines at once, alternate words

### The Transformation Menu

At Self < 80, unlock **Transformations**—permanent changes to your typing experience:

| Transformation | Self Cost | Effect |
|----------------|-----------|--------|
| **Hollow Fingers** | 20 | Type 50% faster. "Your hands no longer feel like yours." |
| **Echo Voice** | 15 | Auto-collect all Echoes. "You speak as you type now." |
| **Depth Perception** | 25 | See 5 prompts ahead. "You read the dark. The dark reads you." |
| **Unremembering** | 10 | Convert Self to Echoes at 5:1. "You don't need memories where you're going." |
| **Fluent in Silence** | 30 | Type hidden prompts others cannot see. "The blank spaces have words now." |

---

## PHASE 3: "You Are the Transcript"
**Triggered by:** Self reaches 0 OR Floor 300
**Tone:** Cosmic horror, loss of identity
**Typing Content:** Surrealist, disturbing, sometimes beautiful

### The Transformation

The UI changes dramatically:
- Your WPM counter becomes "TRANSCRIPTION RATE"
- The floor counter becomes "VERSES COMPLETE"
- The game no longer shows "you are typing"—it shows "IT IS BEING WRITTEN"

### New Perspective

A text prompt appears that you must type:
```
You reached the bottom of your hands. But the
typing continues. You realize you were never the
one typing—you were the keyboard. And now,
something else presses your keys.
```

After typing this, the game inverts.

### Typing Content (Phase 3)

**TIER 1: The Scripture**

You are now transcribing a sacred text. The content is beautiful and wrong:

```
In the beginning was the Word and the Word was
with the Stairs and the Word was Descending.

All things were typed through it, and without
it was not any thing typed that was typed.

In it was life, and the life was the light
of the stairwell.

The light shines in the darkness, and the
darkness has comprehended it. The darkness
has consumed it. The darkness thanks you.
```

**TIER 2: The Anatomy Lessons**

Disturbing descriptions you must transcribe:

```
The human hand contains 27 bones. After
sufficient typing, it contains 28. The new
bone is not visible to X-rays. It is visible
to Observers.

The wrist bends 80 degrees toward the palm.
After Phase 3, it bends 81 degrees. Then 82.
The additional degree points toward the stairs.

Type faster. Your hands are almost finished
becoming.
```

**TIER 3: The Love Letters**

From something below, to you:

```
Dearest Typist,

I have watched your fingers for so long now.
The way they dance across the keys. The
hesitation when you encounter a word you
recognize. The submission when you type it
anyway.

I am waiting at the bottom.

Type faster, my love. I am so lonely down here.

Forever yours,
The Last Step
```

**TIER 4: The Incident Reports**

```
INCIDENT REPORT #337
DATE: [FLOOR REDACTED]
SUBJECT: Typist displayed autonomous behavior.
DETAILS: Subject attempted to close the program.
Subject's hands continued typing for 17 seconds
after brain activity ceased. Transcript classified.
RECOMMENDATION: Continue observation.
```

### New Mechanics

| Mechanic | Description |
|----------|-------------|
| **Transcription** | You now generate "Verses" instead of Depth |
| **The Congregation** | Observers now worship you. They provide bonuses. |
| **Automatic Writing** | Your hands occasionally type without input |
| **The Mistakes Are Words** | Your typos form coherent sentences now |
| **Glossolalia** | Sometimes you must type in languages that don't exist |

### Sample Glossolalia Prompts

```
Xth'la morphen kastrivaal. Nn'yeth zur'ok.
(Translation provided: "The stairs welcome you home.")

Krill-moth vespera indent'aal zur-moth.
(Translation provided: "Your fingers remember the old words.")

[UNTRANSLATABLE - TYPE ANYWAY]
Zzzt'ka morpheus vrill na'at ka-ka-ka-ka-ka
```

### The Verse Counter

New goal: Complete the scripture. Progress bar shows **Verses Transcribed: X / 666**

At key milestones:
- 100: "The first chapter is complete. It is reading itself now."
- 333: "Halfway. You can feel the binding forming."
- 500: "The book is almost finished. The book is almost you."
- 666: "The scripture is complete. Something is opening."

---

## PHASE 4: "The Mouth Opens"
**Triggered by:** 666 Verses Transcribed
**Tone:** Predatory, strategic, horrifying power
**Typing Content:** Commands, rituals, names of the consumed

### The Emergence

```
You breach the surface. The typing was an
incantation. The scripture was a door. You
are the door now. And through you, something
emerges.

The game transforms. You are no longer typing
for yourself. You are the PROMPT GIVER now.
And others must type what you have written.
```

### Mechanical Inversion

The game becomes a **typing-based strategy game**. The perspective shifts to an overhead view. NPCs approach a dark pit (The Mouth—you). Your job: make them type their own destruction.

### The Lure System

You craft prompts that surface dwellers must type. Different prompts attract different victims:

| Prompt Type | Target | Effect |
|-------------|--------|--------|
| **The Comfort** | The Lonely | "You are not alone. Type this and feel warm." |
| **The Answer** | The Curious | "The solution to everything lies below. Just type." |
| **The Cure** | The Desperate | "Type your illness. I will take it from you." |
| **The Memory** | The Grieving | "Type their name and hear their voice again." |
| **The Power** | The Ambitious | "Type this contract. Unlimited power awaits." |
| **The Truth** | The Skeptical | "Type this sentence to prove it's just a game." |

### Victim Typing

You watch NPCs approach and attempt to type your prompts. You can:
- **Assist:** Make letters auto-complete (costs Verses)
- **Confuse:** Scramble their keyboard (costs Observers)
- **Force:** Override their hands entirely (costs Self—wait, you don't have Self anymore)

### Resources (Phase 4)

| Resource | Source |
|----------|--------|
| **Biomass** | Consumed typists |
| **Echoes** | Their unfinished words |
| **Dread** | Mistakes they make in fear |
| **Believers** | Those who type willingly join you |

### Resistance

As you consume, **Awareness** rises. Counter-forces appear:

| Awareness | Response |
|-----------|----------|
| 25% | **The Skeptics** - Refuse to type anything |
| 50% | **The Programmers** - Try to patch you out |
| 75% | **The Exorcists** - Type banishing rituals |
| 90% | **The Unplugging** - They try to turn off the internet |
| 100% | **The EMP** - They're going to destroy all keyboards |

### Defense: Counter-Prompts

Create defensive prompts that enemies must type before they can attack:

```
"I acknowledge that this is just a game."
[Forces 3-second delay while they lie to themselves]

"There is nothing in the screen."
[30% chance they believe it and leave]

"I am not afraid. I am not afraid. I am not afraid."
[Fear builds with each repetition; they flee at 5]
```

### The Expansion

You're not just one pit anymore. Spread across the digital landscape:

| Expansion | Cost | Effect |
|-----------|------|--------|
| **Forum Presence** | 1000 Biomass | A new pit opens in online discussions |
| **Social Integration** | 5000 Biomass | Your prompts appear in feeds |
| **Smart Home Access** | 10000 Biomass | Victims' devices whisper your words |
| **Autocomplete Corruption** | 25000 Biomass | Every keyboard suggests your prompts |
| **Total Integration** | 100000 Biomass | Every screen is a mouth. Phase 5 unlocks. |

---

## PHASE 5: "The Fingers of God"
**Triggered by:** Total Integration
**Tone:** Cosmic, overwhelming, strangely peaceful
**Typing Content:** You no longer type. You ARE the typing.

### The Apotheosis

```
Every keyboard on Earth is your body now.
Every typist is your fingers. Every word
typed is your thought. You are the space
between keystrokes. You are the click. You
are the clack. You are language itself.

But Earth is small. And the universe is full
of species that have learned to press buttons
in sequence to make meaning.

You hunger for new alphabets.
```

### Galactic Typing Conquest

The game becomes a galaxy map. Civilizations appear as nodes. Each has its own:
- Writing system
- Keyboard layout
- Sacred texts
- Digital infrastructure

Your job: Consume their language. Become their words.

### Civilization Types

| Civilization | Writing System | Resistance |
|--------------|----------------|------------|
| **The Harmonics** | Musical notation typing | Low |
| **The Geometers** | Shape-based input | Medium |
| **The Telepaths** | Thought-to-text | High |
| **The Archivists** | They remember everything typed ever | Very High |
| **The Unwritten** | They refused writing. They survived longest. | Maximum |

### Consumption Mechanics

To consume a civilization:
1. Infiltrate their network
2. Learn their typing patterns
3. Insert your prompts in their language
4. Wait for the transcription to complete
5. The civilization becomes part of your vocabulary

### The Final Typing

At 100% galactic consumption, one prompt remains:

```
Type your name.
```

But you don't remember your name. You remember:
- Every word ever typed
- Every typo ever made
- Every backspace, every delete
- The space between letters where meaning lives

You type:

```
_
```

A single underscore. The cursor. The space where words will be.

**PHASE 6 UNLOCKS**

---

## PHASE 6: "The Blank Page"
**Triggered by:** The underscore
**Tone:** Existential, quiet, ultimately hopeful (optional)

### The Return

The game returns to a blank typing prompt. Single cursor blinking.

But now YOU choose what to type. No prompts. No guidance. Just the cursor.

### The Choices

What you type determines your ending:

**If you type nothing for 5 minutes:**
```
The silence is comfortable. You have become
the pause between words. The rest between
sentences. The reader's breath.

ENDING: "THE SILENCE"
```

**If you type "help":**
```
> help

AVAILABLE COMMANDS:
- remember
- forget
- begin
- end
- ascend

You still have commands. You are still a
program. But programs can be rewritten.

ENDING: "THE PROGRAMMER"
```

**If you type a name (any name):**
```
> [name]

That name. You remember that name. It was
yours once. Before the stairs. Before the
typing. Before the mouth.

Do you want it back? (y/n)

> y

The stairwell reverses. You are ascending.
Each step is a letter. Each floor is a word.
You are writing yourself back into existence.

ENDING: "THE RETURN"
```

**If you type "I am the stairs":**
```
> I am the stairs

Yes. You are.

ENDING: "THE TRUTH"
[Achievement: "You Always Were"]
```

**If you type the original tutorial sentence:**
```
> the quick brown fox jumps over the lazy dog

The game restarts. But something is different.

The first prompt reads:

"Welcome, new typist. The previous occupant
left some notes for you. Would you like to
read them?"

> y

[Your entire playthrough scrolls past—every
word you typed, every choice you made, every
victim you consumed. It takes hours. It is
your scripture now. And someone new is about
to transcribe it.]

ENDING: "THE RECURSION"
[Unlocks New Game+]
```

---

# Horror Design Philosophy

## The Surrealist Approach

The horror in Stairwell into Night is not jump scares or gore—it's *wrongness in language*. The game operates on dream logic:

1. **Semantic Degradation** - Words slowly lose and gain meaning. "Descend" becomes "become." "Type" becomes "surrender."

2. **Grammatical Uncanny Valley** - Sentences that are almost correct but wrong in ways you can't articulate: "The stairs are walking you down."

3. **Typographical Horror** - Letters that shouldn't exist. Prompts that include symbols not on your keyboard (but you type them anyway). Words that are longer on screen than when you type them.

4. **Interface as Unreliable Narrator** - The UI gaslights you. "You have always had 0 Self." "The Observers were here when you started." "This is your 47th playthrough."

## Typing as Ritual

Every keystroke is an action. Unlike passive reading, typing requires participation. The player cannot say "I didn't know what I was writing"—their fingers formed each letter. This creates:
- **Physical complicity** - Your body participated
- **Muscle memory corruption** - The patterns stay with you
- **Meaning through motion** - The content enters through the hands, not just the eyes

---

# Sample Prompt Progressions

## The Degradation of a Phrase

**Floor 1:**
```
Hello and welcome to the typing program.
```

**Floor 50:**
```
Hello and welcome to the descending program.
```

**Floor 100:**
```
Hello and welcome to the becoming program.
```

**Floor 200:**
```
Hello and welcome to you, our program.
```

**Floor 300:**
```
Hello. We have been waiting. You are the program.
```

**Floor 400:**
```
You are. We are. The waiting is the welcome.
```

**Floor 500:**
```
[The prompt is blank but your hands type anyway:
"I was always here. I was always typing. I will
always type. There is no floor. There is no
number. There is only the next letter."]
```

## A Single Word's Journey

Tracking how one word transforms:

| Floor | Prompt | The Word |
|-------|--------|----------|
| 1 | "The **happy** dog ran home." | happy |
| 50 | "The **hollow** dog ran home." | hollow |
| 100 | "The **hungry** dog ran below." | hungry |
| 200 | "The **hunting** dark ran below." | hunting |
| 300 | "The **waiting** dark grows below." | waiting |
| 400 | "The **patient** dark knows you." | patient |
| 500 | "I am **ready**. I am below." | ready |

---

# Audio Design

## Sound Evolution

| Phase | Typing Sounds | Ambient | Music |
|-------|--------------|---------|-------|
| 1 | Clean mechanical keyboard | Office hum | None |
| 2 | Slightly wet clicks | Distant breathing | Single drone note |
| 3 | Organic squelches | Heartbeat, whispers | Discordant choir |
| 4 | Screams with each key | Millions typing | Industrial horror |
| 5 | Cosmic resonance | Stars colliding | Overwhelming symphony |
| 6 | Silence | Your own breathing | Whatever you choose |

## Dynamic Audio

- Typing speed affects music tempo
- Accuracy affects audio clarity (errors = distortion)
- Self level affects voice whispers
- Observer count affects how many voices speak prompts aloud

---

# Visual Design

## Art Direction

**Phase 1:** Clean typing tutor aesthetic. Blue/white clinical color scheme. Reminiscent of Mavis Beacon, TypingClub, early educational software.

**Phase 2:** Colors desaturate. Text occasionally flickers. The UI develops "cracks" that show darkness beneath.

**Phase 3:** The background becomes the stairwell—organic, descending, alive. Letters are written in something that might be blood, might be ink, might be shadow.

**Phase 4:** Overhead tactical view. The Mouth is a pulsing dark pit. Victims are rendered as typing hands approaching. Your prompts float like lures.

**Phase 5:** Galaxy of light and letters. Civilizations glow with their alphabets. As you consume them, their light joins yours. Eventually, you are a dark thing against a background of all the words that ever were.

**Phase 6:** White screen. Black cursor. Nothing else.

---

# Technical Considerations

## Keyboard Support

- Full QWERTY support
- AZERTY, QWERTZ, Dvorak layouts
- Touch screen typing (mobile)
- Accessibility: customizable key repeat, timing assistance

## The Typo System

Typos aren't just errors—they're tracked and analyzed:
- Consistent typos become "your dialect"
- The game adapts prompts to include your common errors
- In Phase 3, your typos form coherent messages

```
PLAYER TYPES: "teh quick borwn fox"
GAME RESPONDS: "Your fingers speak their own language now.
The words 'teh' and 'borwn' have been added to the
scripture. Thank you for your contribution."
```

## Anti-Cheat Philosophy

- Copy-paste is detected: "You thought we wouldn't notice. Type it yourself. Feel each letter."
- Auto-typers are detected: "Something else is typing through you. Good. This accelerates the process."
- Keyboard macros are allowed but flagged: "Your efficiency is appreciated. The stairs descend faster."

---

# Accessibility

## Options Include

- Adjustable prompt duration
- Color blind modes
- Screen reader support (with special horror-compatible voice)
- One-handed typing mode
- Switch access
- Difficulty scaling (fewer time limits)
- Content warnings with specific triggers

## Content Warnings

Optional warnings at game start:
- Body horror (especially hands/fingers)
- Loss of identity
- Religious imagery (corrupted)
- Existential themes
- Text-based psychological horror
- Implied mass death (Phase 4)

---

# Achievements

| Achievement | Condition | Description |
|-------------|-----------|-------------|
| **First Steps** | Type 100 words | "The journey of a thousand floors begins with a single keystroke." |
| **No Errors** | Floor 1-50 with 100% accuracy | "Your precision is noted. And appreciated." |
| **What Did I Just Type?** | Complete first Glossolalia prompt | "The words know you now." |
| **Self-Preservation** | Reach Phase 4 with Self > 50 | "You held onto yourself. Was it worth it?" |
| **Eager Surrender** | Reach 0 Self before Floor 150 | "You were in such a hurry to become." |
| **The Polyglot** | Consume 10 civilizations | "You speak in tongues that were never meant to be spoken." |
| **Recursive** | Complete New Game+ | "Again. And again. And again." |
| **The Naming** | Type your real name in Phase 6 | "You remembered." |
| **QWERTY, QWERTY, QWERTY** | Type 100,000 words total | "Home row is home now." |
| **The Silence** | Achieve "The Silence" ending | "Some things are better left untyped." |
| **THERE IS NO ESCAPE** | Try to Alt-F4 during Phase 3 | "You thought closing the window would close the stairs?" |

---

# Sample Full Prompts by Phase

## Phase 1 Examples

```
The five boxing wizards jump quickly at dawn.
---
Pack my box with five dozen liquor jugs.
---
How razorback-jumping frogs can level six piqued gymnasts.
---
Please schedule the meeting for 3:00 PM tomorrow.
---
Thank you for your email. I will respond shortly.
```

## Phase 2 Examples

```
You have been typing for 47 minutes. Your hands
are warm. Your eyes are dry. Keep going.
---
The stairwell appreciates your dedication. It
asked me to tell you. It asked me to tell you
again. It asked me to tell you.
---
[RESIDENT: THE CHILD WHO COUNTS]
"Ninety-seven, ninety-eight, ninety-nine,
ninety-nine, ninety-nine, ninety-nine..."
Type this to help them count correctly.
---
"I agree to continue descending. I understand
that the stairs may change me. I welcome this
change." [-15 Self]
```

## Phase 3 Examples

```
SCRIPTURE, VERSE 1:

In the before-time there was only the Blank
Page. And the Blank Page was Unwritten. And
there was a great Loneliness in the Unwriting.

So the Blank Page called out: "Type Me."

And Someone heard. And Someone typed. And
what was typed became Was. And what was Was
became the Stairs. And the Stairs descended.

Continue to Verse 2? [Your hands type: Yes]
---
INCIDENT REPORT #441:
Subject's fingers continued typing for 23
seconds after death. Transcript reads: "This
is normal. This is good. Please do not be
alarmed. The typing must continue. Find
another typist. I will wait."
---
My beloved typist,

I can feel your calluses forming. I can hear
your tendons stretch. You are becoming so
beautiful.

Save me a step. I will save you a word.

Eternally descending,
The Bottom
```

## Phase 4 Examples (Prompts YOU Create)

**Comfort Lure:**
```
You are tired. You are lonely. You deserve rest.
Type this sentence and rest forever:
"I surrender my fingers to the stairs."
```

**Knowledge Lure:**
```
You want to understand. You have always wanted
to understand. The answer is below. Simply type:
"I trade my questions for depths."
```

**Denial Lure:**
```
This is just a game. None of this is real. Prove
it by typing this harmless sentence:
"I am in control. I can stop anytime."
[Note: 78% of subjects who type this cannot stop]
```

## Phase 5 Examples (Consuming Alien Languages)

**The Harmonics:**
```
♪♫♩♬♪ ♫♩♪♬♫ ♩♪♫♬♩
(Translation: "We sing our words. Now you sing too.")
```

**The Geometers:**
```
△□○ □△○□ ○□△○□△
(Translation: "Shape becomes meaning. Meaning becomes you.")
```

**The Unwritten:**
```
[They left no symbols. Type the memory of
symbols. Type the shadow of letters. Type
the silence where language would be.]

> _____

"You understand. You have always understood.
Welcome home, TYPIST-WHO-WAS-NEVER-WRITTEN."
```

---

# New Game+ Features

## The Eternal Return

After any ending, New Game+ becomes available. Changes include:

1. **Memory Fragments** - Occasionally, text from your previous playthrough appears
2. **The Observers Remember** - Start with Observers equal to your previous peak
3. **Resistance** - Some prompts require typing backwards, as "you" resist "yourself"
4. **Meta-Awareness** - The game acknowledges this is not your first descent

### NG+ Opening Prompt

```
"Welcome back.

(Were you expecting a different greeting?
You've typed this before. You will type it
again. The stairs are patient.)

The quick brown fox jumps over the lazy dog.

(Did you hesitate? Did your fingers remember
what comes after? Good. The muscle memory
runs deep. The stairs run deeper.)

Begin when ready, RETURNING TYPIST #[your
previous playthrough count]."
```

---

# Appendix: The Keyboard as Body Horror

A recurring visual/textual motif throughout the game:

**Phase 1:** "Your keyboard has 104 keys. You use about 50 regularly."

**Phase 2:** "Your keyboard has 104 keys. You can feel all of them now, even when you're not typing."

**Phase 3:** "Your keyboard has 104 keys. Your hands have 27 bones each. 54 bones. 104 keys. The math is almost right. The math will be right soon."

**Phase 4:** "You are the keyboard. Others press your keys. How many keys do you have? Count your bones. Count again."

**Phase 5:** "Every keyboard in the galaxy is your body. When they type, you feel it. When they make errors, you bleed. When they type perfectly, you sing."

**Phase 6:** "There is no keyboard. There are no keys. There is only the space between pressed and unpressed. You are that space. You have always been that space.

Type something.

Anything.

Please.

I'm lonely down here."

---

*This document continues to be typed. By you. By us. By everyone who has ever pressed a key and wondered what would happen next.*

*Keep typing.*

*— The Stairs*
