---
title: Monstats.txt File Guide
summary: MANY THX TO ALL THOSE WHO WHERE KIND ENOUGH TO CONTRIBUTE DATA
keepId: 238
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 9271
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=238'
---
MANY THX TO ALL THOSE WHO WHERE KIND ENOUGH TO CONTRIBUTE DATA

Class: String Code (Monster Name)   
nameco: Reference Only (Can contain anything without any effect on the game)   
Type: Reference Only (Can contain anything without any effect on the game)   
Descriptor: String Code (Monsters Special Abilities) (eg: Lays Eggs)   
BaseId: Monster behaviour AI ID (eg: To give a monster a skeletons AI set this to 1)   
PopulateId: Reference Only (Levels.txt Spawning ID)   
Spawned: Boolean (1=Spawnable, 0=Unspawnable thru the M1-M25 Columns in Levels.txt)   
Beta: Reference Only (Can contain anything without any effect on the game)   
Code: Defines the Palshift.DAT file loaded for the Monster (has nothing to do with Animations)   
ClientOnly: Setting for Multiplayer (1=Spawned independently from the server, 0=Controled by the Server) (eg: Chickens)   
NoMap: Disabled (Pre v1.07 this allowed you to make monsters visible on the AutoMap)   
SizeX: The Area this monster Covers (Horizontally) (Untested, probably Reference Only)   
SizeY: The Area this monster Covers (Vertically) (Untested, probably Reference Only)   
Height: The Height of this monster (Untested, probably Reference Only)   
NoOverlays: Untested Boolean (1=No Overlay will be spawned for this monster?, 0=Overlays spawn as normal?)   
OverlayHeight: The Height of this monsters Overlays graphics (Untested, probably Reference Only)   
Velocity: Normal Speed (Walking Speed)   
Run: Running Speed (Only applies when the monster has RN Mode COF files and Animations)   
CanStealFrom: Ability to leech life/mana from this monster (1=yes, 0=no)   
ColdEffect: How much does this monster get slowed down when frozen, from 0(cannot be frozen) to 100(almost unable to move).   
Rarity: Has no Effect (Probably Reference Only)   
Level: MLvl for Normal   
Level(N): MLvl for Nightmare   
Level(H): MLvl for Hell   
MeleeRng: Melee Range (distance in cells this monster can hit you from)   
MinGrp: Minimum monster Group (when spawning)   
MaxGrp: Maximum monster Group (when spawning) 

\*Setting all the component columns to 0 makes a monster unselectable   
HD: Does this Monster have a HeaD Component. Boolean (for reference only, has no effect if changed)   
TR: Does this Monster have a ToRso Component. (Untested, probably Reference Only)   
LG: Does this Monster have a LeG Component. (Untested, probably Reference Only)   
RA: Does this Monster have a RightArm Component. (Untested, probably Reference Only)   
LA: Does this Monster have a LeftArm Component. (Untested, probably Reference Only)   
RH: Does this Monster have a RightHand Component. (Untested, probably Reference Only)   
LH: Does this Monster have a LeftHand Component. (Untested, probably Reference Only)   
SH: Does this Monster have a SHield Component. (Untested, probably Reference Only)   
S1: Does this Monster have a Skill1 Component. (Untested, probably Reference Only)   
S2: Does this Monster have a Skill2 Component. (Untested, probably Reference Only)   
S3: Does this Monster have a Skill3 Component. (Untested, probably Reference Only)   
S4: Does this Monster have a Skill4 Component. (Untested, probably Reference Only)   
S5: Does this Monster have a Skill5 Component. (Untested, probably Reference Only)   
S6: Does this Monster have a Skill6 Component. (Untested, probably Reference Only)   
S7: Does this Monster have a Skill7 Component. (Untested, probably Reference Only)   
S8: Does this Monster have a Skill8 Component. (Untested, probably Reference Only) 

TotalPieces: How many Components does this monster have in Total (Reference Only)   
SpawnComponents: Untested. All monsters are set to 0 in this column   
BaseW: Base Weapon aka: hth Hand to Hand and so on. (Change only if you Changed The base AI of the Monster)   
AIParam1: Modifyable AI Parameter 1   
Comment: Comment about the function of the Parameter   
AIParam2: Modifyable AI Parameter 2   
Comment: Comment about the function of the Parameter   
AIParam3: Modifyable AI Parameter 3   
Comment: Comment about the function of the Parameter   
AIParam4: Modifyable AI Parameter 4   
Comment: Comment about the function of the Parameter   
AIParam5: Modifyable AI Parameter 5   
Comment: Comment about the function of the Parameter 

Setting a Mode to 0 will make that animation invisible   
ModeDH - Has Death Animation   
ModeN - Has Neutral Animation (Standing)   
ModeW - Has Walk Animation   
ModeGH - Has GetHit Animation   
ModeA1 - Has Attack 1 Animation   
ModeA2 - Has Attack 2 Animation   
ModeB - Has Block Animation   
ModeC - Has Cast Animation   
ModeS1 - Has Skill1 Animation   
ModeS2 - Has Skill2 Animation   
ModeS3 - Has Skill3 Animation   
ModeS4 - Has Skill4 Animation   
ModeDD - Has Corpse Animation   
ModeKB - Has KnockBack Animation   
ModeSQ - Has Skill Sequence Animation (This dosent Exist, skill sequences are determined in Skills.txt in the Seqnum column)   
ModeRN - Has Run Animation   
ElMode - Elementally Enhanced Physical Attack Mode (normal enhanced hit = 4)   
ElType - Type of Element used by attack (there are more but primary: 1=fire, 2=lightning, 4=cold, 5=poison)   
ElOver - Overlay Effect (From overlays.txt, row# -2)   
ElPct - Chance to use Elemental Enhancement on Normal attack (aka 100=always use etc)   
ElMinD - Minimum Elemental Damage   
ElMaxD - Maximum Elemental Damage   
ElDur - Duration (for Cold and Poison etc)   
MissA1 - Missile used for Attack 1 (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissA2 - Missile used for Attack 2 (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissS1 - Missile used for Skill 1 (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissS2 - Missile used for Skill 2 (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissS3 - Missile used for Skill 3 (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissS4 - Missile used for Skill 4 (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissC - Missile used for Case (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MissSQ - Missile used for Sequence (Based on BASE AI) (65535=none, Missile ID = row# -2 from Missiles.txt)   
MoveA1 - Untested (for attack 1)   
MoveA2 - untested (for attack 2)   
MoveS1 - untested (for skill 1)   
MoveS2 - untested (for skill 2)   
MoveS3 - untested (for skill 3)   
MoveS4 - untested (for skill 4)   
MoveC - untested (for cast)   
Align: Is this monster fighting on your side (eg: Rogue Scouts) (1=yes, 0=no)   
IsMelee: Is this a Melee attacked? (1=yes, 0=no) (aka Can this monster spawn with MultiShot if it’s a boss)   
IsSel: Does this monster have a Lifebar when you scroll over it (1=yes, 0=no)   
IsSel2: Does this monster have a namebar when you scroll over it (1=yes, 0=no) (aka, just the name appears like for npcs etc)   
NeverSel: 1=This monster can never be highlighted, 0=this monster can be highlighted (the two previous rules apply)   
CorpseSel: 1=The corpse can be highlighted (as with Find Potion skill etc), 0=the corpse cannot be highlighted   
IsAtt: Is this Monster Attackable (1=yes, 0=nDamage Resist: self explanatory (100 is immune)   
Magic Resist: self explanatory (100 is immune)   
Fire Resist: self explanatory (100 is immune)   
Lightning: Resist: self explanatory (100 is immune)   
Cold Resist: self explanatory (100 is immune)   
Poison Resist: self explanatory (100 is immune)o)   
IsNPC: Is this Monster a NPC (1=yes, 0=no)   
IsCritter: Is this Monster a Critter (1=yes, 0=no) (eg: Camels, Chickens, Scorpions etc)   
InTown: Can this monster enter town (1=yes, 0=no)   
Bleed: Does this Monster Bleed (0=no blood, 1=small blood drops, 2=large blood drops, 3++ random missile from missiles.txt, the greater the more missiles spawn)   
Shadow: does this Monster have a shadow (0=no, 1=yes)   
Light: Light Radius, how large is the light radius (highest I tested so far was 25, but probably goes well beyond that)   
NoUniqueShift: Does this monster change colors when it spawns as a Boss (0=yes, 1=no)   
CompositeDeath: Does this monsters death animation use multiple components (1=yes, 0=no) (unknown if its only for reference as I didn’t test it yet)   
Skill1 - Skill 1 (don’t change without editing appropriate \*.dlls)   
Skill1Seq - Animation Sequence Number (don’t set to 0, it will crash) ( to disable a sequence and edit the animation column in skills.txt from seq to s1-s5 or a1-a2)   
Skill1Lvl - Skill LVL (can be modified, level of the skill)   
Skill2 - Skill 2 (don’t change without editing appropriate \*.dlls)   
Skill2Seq - Animation Sequence Number (don’t set to 0, it will crash) ( to disable a sequence and edit the animation column in skills.txt from seq to s1-s5 or a1-a2)   
Skill2Lvl - Skill LVL (can be modified, level of the skill)   
Skill3 - Skill 3 (don’t change without editing appropriate \*.dlls)   
Skill3Seq - Animation Sequence Number (don’t set to 0, it will crash) ( to disable a sequence and edit the animation column in skills.txt from seq to s1-s5 or a1-a2)   
Skill3Lvl - Skill LVL (can be modified, level of the skill)   
Skill4 - Skill 4 (don’t change without editing appropriate \*.dlls)   
Skill4Seq - Animation Sequence Number (don’t set to 0, it will crash) ( to disable a sequence and edit the animation column in skills.txt from seq to s1-s5 or a1-a2)   
Skill4Lvl - Skill LVL (can be modified, level of the skill)   
Skill5 - Skill 5 (don’t change without editing appropriate \*.dlls)   
Skill5Seq - Animation Sequence Number (don’t set to 0, it will crash) ( to disable a sequence and edit the animation column in skills.txt from seq to s1-s5 or a1-a2)   
Skill5Lvl - Skill LVL (can be modified, level of the skill)   
LightR - Red in RGB (in 3dgfx mode this controls the tint of the light radius)   
LightG - Green in RGB (in 3dgfx mode this controls the tint of the light radius)   
LightB - Blue in RGB (in 3dgfx mode this controls the tint of the light radius)   
DamageResist: Normal Damage Resist (100 is immune)   
MagicResist: Normal Magic Resist (100 is immune)   
FireResist: Normal Fire Resist (100 is immune)   
LightningResist: Normal Lightning Resist (100 is immune)   
ColdResist: Normal Cold Resist (100 is immune)   
PoisonResist: Normal Poison Resist (100 is immune)   
DamageResist(N): Nightmare Damage Resist (100 is immune)   
MagicResist(N): Nightmare Magic Resist (100 is immune)   
FireResist(N): Nightmare Fire Resist (100 is immune)   
LightningResist Nightmare Lightning Resist (100 is immune)   
ColdResist(N): Nightmare Cold Resist (100 is immune)   
PoisonResist(N): Nightmare Poison Resist (100 is immune)   
DamageResist(H): Hell Damage Resist (100 is immune)   
MagicResist(H): Hell Magic Resist (100 is immune)   
FireResist(H): Hell Fire Resist (100 is immune)   
LightningResist Hell Lightning Resist (100 is immune)   
ColdResist(H): Hell Cold Resist (100 is immune)   
PoisonResist(H): Hell Poison Resist (100 is immune)   
DamageRegen: Amount of HP the monster can regenerate per minute   
eLUndead - Stands for undead attacking with physicaö attacks (1=Undead, 0=no)   
eHUndead - Stands for undead attacking with magic attacks (1=Undead, 0=no)   
eDemon - Stands for Demons (1=is demon, 0=no)   
eMagicUsing - Uses Magic Attacks (1=yes, 0=no)   
eLarge - Is a large enemy (Act Bosses etc) (1=yes, 0=no)   
eSmall - Is a small enemy (Fallen, Imps) (1=yes, 0=no)   
eFlying - Can move over water, walls etc (1=yes, 0=no)   
eOpenDoors - Can open doors (1=yes, 0=no)   
eSpawnCol - Spawning Column (0=M1-25 Levels.txt, 2=S1-S25 Levels.txt and 1=DS1 Files (Maps))   
eBoss - Is this a Boss (1=yes, 0=no) (DO NOT MODIFY, will crash your game, internal code must first be edited)   
PixHeight - Height in Pixels (has no effect, reference only)   
Interact - Can you talk (aka NPC menu etc) with this creature (1=yes, 0=no)   
MinHp: Minimum Health, normal   
MaxHp: Maximum Health, normal   
AC: Armor Class, normal   
EXP: Experience, Normal   
Block: Chance to Block (only has effect on monsters that have MODE B (block animations))   
A1MinD: Attack One Min Damage, normal   
A1MaxD: Attack One Max Damage, normal   
A1ToHit: Chance to Hit, attack1, normal   
A2MinD: Attack Two Min Damage, normal   
A2MaxD: Attack Two Max Damage, normal   
A2ToHit: Chance to Hit, attack2, normal   
S1MinD: Skill1 Min Damage, normal   
S1MaxD: Skill1 Max Damage, normal   
S1ToHit: Chance to Hit, skill1, normal   
MinHp(N): Minimum Health, nightmare   
MaxHp(N): Maximum Health, nightmare   
AC(N): Armor Class, nightmare   
EXP(N): Experience, Nightmare   
A1MinD(N): Attack One Min Damage, nightmare   
A1MaxD(N): Attack One Max Damage, nightmare   
A1ToHit(N): Chance to Hit, attack1, nightmare   
A2MinD(N): Attack Two Min Damage, nightmare   
A2MaxD(N): Attack Two Max Damage, nightmare   
A2ToHit(N): Chance to Hit, attack2, nightmare   
S1MinD(N): Skill1 Min Damage, nightmare   
S1MaxD(N): Skill1 Max Damage, nightmare   
S1ToHit(N): Chance to Hit, skill1, nightmare   
MinHp(H): Minimum Health, hell   
MaxHp(H): Maximum Health, hell   
AC(H): Armor Class, hell   
EXP(H): Experience, Hell   
A1MinD(H): Attack One Min Damage, hell   
A1MaxD(H): Attack One Max Damage, hell   
A1ToHit(H): Chance to Hit, attack1, hell   
A2MinD(H): Attack Two Min Damage, hell   
A2MaxD(H): Attack Two Max Damage, hell   
A2ToHit(H): Chance to Hit, attack2, hell   
S1MinD(H): Skill1 Min Damage, hell   
S1MaxD(H): Skill1 Max Damage, hell   
S1ToHit(H): Chance to Hit, skill1, hell   
TreasureClass1: Normal Monster TC for normal   
TreasureClass2: Champion Monster TC for normal   
TreasureClass3: Unique Monster TC for normal   
TreasureClass4: SuperUnique Monster TC for normal (unused)   
TreasureClass(N)1: Nightmare Monster TC for nightmare   
TreasureClass(N)2: Champion Monster TC for nightmare   
TreasureClass(N)3: Unique Monster TC for nightmare   
TreasureClass(N)4: SuperUnique Monster TC for nightmare (unused)   
TreasureClass(H)1: Hell Monster TC for hell   
TreasureClass(H)2: Champion Monster TC for hell   
TreasureClass(H)3: Unique Monster TC for hell   
TreasureClass(H)4: SuperUnique Monster TC for hell (unused)   
SpawnPctBonus: Disable (pre 1.07 this increased the chance for good item drops)   
Soft: Unknown   
Hearh: Disabled (pre v1.07 when MonItemPercent.txt still was active this was used to spawn organs)   
Bodypart: Disabled (pre v1.07 when MonItemPercent.txt still was active this was used to spawn organs)   
Killable: 1=killable, 0=immortal   
Switch: 1=yes, 0=no (this controls if the monsters AI can shift to Align, thru skills like Conversion, Revive etc)   
Restore: 1=yes, 0=no (unknown, probably related to healing spells)   
NeverCount: 1=yes, 0=no (unknown)   
HitClass: Refer to HitClass.txt for more data (best left alone.)   
SPLEndDeath: Refers to monsters which die special deaths (Fetish Shamans which turn into another monster for eg.)   
SPLGetModeChart: Unknown   
SPLEndGeneric: Unknown   
SPLClientEnd: Unknown   
DeadCollision: Can you walk over this corpse 0=yes, 1=no (aka duriel)   
UnflatDeath: unknown (might have to do with corpses being flat on ground in perspective mode?)   
BloodLocal: Should be set to the same as the bleed column, thought I am unsure about its function.   
DeathDamage: 1=yes, 0=no (does this monster do damage after it dies, based on hitpoints) (aka undead flayers etc)   
PetIgnore: 1=yes, 0=no (is this enemy ignored by summons)   
NoGfxHittest: unknown   
HitTestTop: unknown   
HitTestLeft: unknown   
HitTestWidth: unknown   
HitTestHeight: unknown   
GenericSpawn: unknown (related to act5 monsters in general)   
AutoMapCel: unknown (not related to automap)   
Sparsepopulate: unknown   
Zoo: can this monster be revived by other monsters (1=yes, 0=no) (???)   
ObjectCollision: unknown (might have to do with ghosts, but they don’t have anything set in here)   
Inert: unknown

---

**Annex** - Elmode & ElType  
(by [Ric Faith](mailto:ricfaith@planetdiablo.com) & [Eisead](http://phrozenkeep.it-point.com/forum/profile.php?mode=viewprofile&u=202))

ElMode: 0 - Enchant?  
ElType: 1 - Fire Enchanting (the 4-armed Act 2 chaps that enchant before striking)

ElMode: 4 - On hit (Attack 1)  
ElType:  
1 - Fire on hit  
2 - Ltng on hit  
3 - Magic on hit  
4 - Cold on hit  
5 - Pois on hit  
6 - Life drain on hit (eg. Vampires)  
7 - Mana drain on hit (eg. Spectres)  
8 - Stamina drain on hit (eg. Itchies)  
9 - Stun on hit (eg. ThornedHulks)  
10 - Random elem on hit (the BEST IMO, used by Oblivion Knights i think)  
11 - Burning damage

ElMode: 5 - On Attack (Attack 2)  
ElType:  
2 - Shocking hit (the bats with the Shocking Hit)  
9 - Stunning hit

ElMode: 14 - Sequence attack  
ElType: 4 - Cold on seq (the Claw Vipers i think)
