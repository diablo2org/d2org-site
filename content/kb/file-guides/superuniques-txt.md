---
title: SuperUniques.txt
summary: >-
  OVERVIEW : This file is used to define Superunique monsters and their
  properties. Superunique monsters are boss monsters which always appear at the
  same places and which always have the same base…
keepId: 162
author: Phrozen Heart
credit: 'by 54x & Red Havoc, Restyled and expanded by Ogodei'
posted: '2008-09-11'
modified: '2019-01-18'
views: 25764
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=162'
---
OVERVIEW : This file is used to define Superunique monsters and their properties. Superunique monsters are boss monsters which always appear at the same places and which always have the same base special abilities with the addition of one or two extra ones per difficulty (Nightmare provides one extra ability, Hell provides two). Notable examples are enemies such as Corpsefire, Pindleskin or Nihlathak.

RELATED .TXT FILES : This file is used in conjunction with the following texts:

[MonSounds.txt](/kb/file-guides/monsounds-txt)  
[MonStats.txt](/kb/file-guides/monstats-txt)  
[TreasureClassEx.txt](/kb/file-guides/treasureclassex-txt-file-guide-totally-new)  
[MonUMod.txt](/kb/file-guides/monumod-txt)

This file is used by MonPreset.txt.

**Superunique**: it is the ID of the SuperUnique Monster. Each SuperUnique Monster must be use a different ID. It also serves as the string to use in the field '**Place**' of MonPreset.txt.

**Name**: The string key for this SuperUnique which must be retrieved from a .TBL file.

**Class**: This column defines the base monster type of the SuperUnique, taken by the "**Id**" column in [MonStats.txt](/kb/file-guides/monstats-txt).

**hcIdx**: It is the "hardcoded index". Vanilla SuperUniques in the game ranges from 0 to 65. Some of them have some hardcoded stuffs attached.  
NOTE: It is also possible to create new SuperUniques with hardcoded stuff attached. To do this, you can use a hcIx from 0 to 65.  
Example A: If you create a new SuperUnique with a hcIdx of 42 (Shenk the Overseer) then whatever its Class, this SuperUnique will have 20 Enslaved as minions (exactly like the vanilla Shenk, and in spite of NOT being Shenk).  
Example B: If you want a simple new SuperUnique, you must use a hcIdx greater than 65, because greater indexes don't exist in the code and therefore your new boss won't have anything special attached.

**MonSound**: This column forces a particular SuperUniques to use a special set of sounds for attacks, taunts, death etc.  
The Countess is a clear and noticeable example of this. The MonSound set is - as the name implies - taken from [MonSounds.txt](/kb/file-guides/monsounds-txt).

**Mod1 - Mod3**: These three columns assign special abilities so SuperUnique monsters such as "Fire Enchanted" or "Stone Skin". The parameters that you need to insert here are actually the Id's corresponding to the properties in [MonUMod.txt](/kb/file-guides/monumod-txt). Here is the list of available properties.  

```
0.  None
1.  Inits the random name seed, automatically added to monster, you don't need to add this UMod.
2.  Hit Point bonus which is automatically added to the monster. You don't really need to manually add this UMod
3.  Increases the light radius and picks a random color for it (bugged in v1.10+).
4.  Increases the monster level, resulting in higher damage.
5.  Extra Strong : increases physical damage done by boss.
6.  Extra Fast : faster walk / run and attack speed (Although the increased attack speed isn't added in newer versions . . .)
7.  Cursed  : randomly cast Amplify Damage when hitting
8.  Magic Resist : +50% resistance against Elemental attacks (Fire, Cold, Lightning and Poison)
9.  Fire Enchanted : additional fire damage and +50% fire resistance.
10. When killed, release a poisonous cloud, like the Mummies in Act 2.
11. Corpse will spawn little white maggots (like Duriel).
12.  Works for Bloodraven only, and seems to have something to do with her Death sequence.
13.   Ignore your Armor Class and nearly always hit you.
14.   It should add damage to its minions
15.   When killed, all his minions die immediately as well.
16.   Adds base champion modifiers [color=#0040FF][b](champions only)[/b][/color]
17.  Lightning Enchanted : additional lightning damage, +50% lightning resistance and release Charged Bolts when hit.
18.  Cold  Enchanted : additional cold damage, +50% cold resistance, and releases a Frost Nova upon death
19.  Assigns extra damage to hireling attacks, relic from pre-lod, causes bugged damage.
20.  Releases Charged Bolts when hit, like the Scarabs in act 2.
21.  Present in the code, but it seems to have no effect.
22.  Has to do with quests, but is non-functional for Superuniques which aren´t in relation to a quest.
23.  Has a poison aura that poisons you when you're approaching him, adds poison damage to attack.
24.  Code present, but untested in v1.10+, does something else now.
25.  Mana Burn: steals mana from you and heals itself when hitting. Adds magic resistance.
26.  TeleHeal  : randomly warps around when attacked and heals itself.
27.  Spectral Hit: deals random elemental damage when hitting
28.  Stone Skin: +80% physical damage resistance, increases defense
29.  Multiple Shots : Ranged attackers shoots several missiles at once.
30.  Aura Enchanted: Assigns a random offensive aura (aside from Thorns, Sanctuary and Concentration) to the SuperUnique
31.  Explodes in a Corpse Explosion when killed.
32.  Explodeswith a fiery flash when killed (Visual effect only).
33.  Explode and chills you when killed (like suicide minions). It heavily reduces the Boss' Hit Points
34.  Self-resurrect effect for Reanimate Horde, bugged on other units.
35.  Shatter into Ice pieces when killed, no corpse remains.
36.  Adds physical resistance and reduces movement speed(used for Champions only)
37.  Alters champion stats (used for Champions only)
38.  Champion cannot be cursed (used for Champions only)
39.  Alters champion stats (used for Champions only)
40.  Releases a painworm when killed, but display is very buggy.
41.  Code present, but has no effect in-game, probably due to bugs
42.  Releases a Nova when killed, but display is bugged.
```

**MinGrp - MaxGrp**: These two fields control the Minimum and Maximum amount of minions which will be spawned along with the SuperUnique. If those values differ, the game will roll a random number within the minimum and the maximum you've set.

**EClass**: a boolean which ranges from **0** to **1** respectively for Classic and Expansion.

**AutoPos**: it states whether the SuperUnique will be placed within a radius from his original position - defined by the .ds1 map file, or not. A value of **0** means that the boss will spawn in a random position within a large radius from its actual position on the .ds1 file, while a value of **1** will make it spawn exactly where expected.

**Stacks** Whenever or not this superunique can spawn more then once in the same game (à la 'nolimit' in [UniqueItems.txt](/kb/file-guides/uniqueitems-txt)). If it can , the value should be **1**, if it can´t the value is **0**. Updated by Nefarius

**Replaceable**: Unknown.

**TC - TC(N) - TC(H)**: Treasure Classes for the 3 Difficulties. These columns list the treasureclass that is valid if this boss is killed and drops something. These fields must contain an index taken from the "TreasureClass" column in [TreasureClassEx.txt](/kb/file-guides/treasureclassex-txt-file-guide-totally-new) (Expansion) or TreasureClass (Classic).

**Utrans- Utrans(N) - Utrans(H)**: These fields dictate which RandTransform.dat color index the superunique will use respectively in Normal, Nightmare and Hell mode.

**\*eol**: End Of Line.  
WARNING: Do not remove this column ! Its purpose is to ensure the last column of the tabulated text files are always filled.
