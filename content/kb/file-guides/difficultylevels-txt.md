---
title: DifficultyLevels.txt
summary: >-
  This file is used for setting some global game parameters that depend on the
  difficulty levels of the game. This file has no link with any other .txt, this
  is just a simple table of parameters.
keepId: 160
author: Phrozen Heart
credit: 'by Nefarius, Joel Falcou, Jarulf & Foxbat, restyled by Ogodei'
posted: '2007-05-14'
modified: '2019-03-11'
views: 28960
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=160'
---
This file is used for setting some global game parameters that depend on the difficulty levels of the game.  
This file has no link with any other .txt, this is just a simple table of parameters.

**Name**: Difficulty name. it is hardcoded and you cannot add new ones unless you do some Code Edits

**ResistPenalty**: Resistance penalty in the current difficulty.

**DeathExpPenalty**: The percentage of experience you lose when you die on this difficulty.

**UberCodeOddsNormal**: Not Used. Pre 1.07 it was the percentage of low quality, normal, superior and exceptional items dropped omthis difficulty.

**UberCodeOddsGood**: Not used. Pre 1.07 it was the percentage of magic, rare, set and unique exceptional items dropped on this difficuly.

**UltraCodeOddsNormal**: Not used and didn't exist pre 1.07.

**MonsterSkillBonus**: Additional skill points added to monster skills specified in MonStats.txt for this difficulty. It has nothing to do with the missile damage bonus.

**MonsterFreezeDivisor - MonsterColdDivisor**: This value is a divisor, and so never set it to 0. It applies to the monster freezing length and cold length duration.

**AiCurseDivisor- LifeStealDivisor - ManaStealDivisor**: These values are divisor and they're used respectively for AI altering states

**UniqueDamageBonus- ChampionDamageBonus**: Effective percentage of damage and attack rating added to Extra Strong Unique/Minion and Champion monsters. This field is actually a coefficient, as the total bonus output is BonusFromMonUMod/100\*ThisField

**HireableBossDamagePercent**:  This is a percentage of how much damage your mercenaries do to an Act boss.

**MonsterCEDamagePercent**: Monster Corpse Explosion damage percent limit. Since the monsters HP grows proportionally to the number of players in the game, you can set a cap via this field.

**StaticFieldMin**: Maximum cap of the monster hit points percentage that can be damaged through Static Field. Setting these columns to 0 will make Static Field work the same way it did in Classic Diablo II.

**GambleRare - GambleSet - GambleUnique - GambleUber - GambleUltra**: Parameters for gambling. They states the odds to find Rares, Sets, Uniques, Exceptionals and Elite items when gambling. See Appendix A

**Appendix A**  
This small appendix contains Necrolis' useful explanation about how the quality of the gambled item is chosen:  
**_the game rolls Rand(10000), if that number is > the exceptional chance, the item is upgraded to exceptional, then it rolls it again to upgrade to elite (but it can only try to upgrade to elite if it successfully upgraded to exceptional)  
then it'll roll Rand(100000), and then goes down the chain till you find a chance you are less than  
so if you set the unique column to 100000, you will always get uniques (base and spawn permitting)_**
