---
title: Hireling.txt File
summary: >-
  This file handles everything related to hirelings. In here you set what
  hirelings that is avaible to hire, what items they are able to use, their
  stats and what skills they are using.
keepId: 285
author: kingpin
credit: 'by Draco & Ric Faith, expanded and restyled by Ogodei'
posted: '2007-01-12'
modified: '2018-10-24'
views: 25013
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=285'
---
**_This file handles everything related to hirelings. In here you set what hirelings that is avaible to hire, what items they are able to use, their stats and what skills they are using._**

_Hireling.txt works in par with_  
[ItemTypes.txt](/kb/file-guides/itemtypes-txt)  
[Skills.txt](/kb/file-guides/skills-txt)

**Hireling**: Description of hireling type, this column has no function, it only serves as a comment field to make it easier.

**SubType**: Description of hireling sub-type, this column has no function, it only serves as a comment field to make it easier.

**Version**: 0 is for Classic, 100 is for Expansion.

**Id**: ID number to segregate the hirelings and threshold lvls.

**Class**: reference to the column 'hcIdx' in [MonStats.txt](/kb/file-guides/monstats-txt). This indicates the base monster of the mercenary.

**Act**: Act where merc can be hired.

**Difficulty**: it ranges from 1 to 3, respectively for  
**Normal**/**Nightmare**/**Hell**.

**Level**: monster level of the hireling. It also states the required level for upgrading skills and stats.

**Seller**: reference to the column 'hcIdx' in [MonStats.txt](/kb/file-guides/monstats-txt) for the NPC who sells this mercenary.

**NameFirst - NameLast**: Range from which the game looks to get random names for the hirelings. These indexes are taken from the .TBL files, which you can edit via [specific softwares](https://d2mods.info/forum/downloadsystemcat?id=18) and are found in **_Data/local/(your language)_**.

**Gold**: The cost of the hireling, compounded by mlvl

**Exp/Lvl**: This indicates a factor used in the calcuationof the experience required to advance to the next mLvl.  
The threshold for the next level (L+1) from the current level (L) is (exp/lvl)\*L\*L\*(L+1).

**HP - HP/Lvl - Defence - Def/Lvl - Str - Str/Lvl - Dex - Dex/Lvl - AR - AR/lvl - Dmg-Min - Dmg-Max - Dmg-Lvl - Resist - Resist/Lvl**: It tells how much of these stats the mercenary has at his\\her base lvl and how much of them are gained as your mercenary advances through mLvls.  
NOTE: Keep in mind that Dmg-Lvl and Resist/Lvl must be set in 8ths.

**Share**: Used to co-relate between threshold lvls between Normal, NM, Hell Hirelings.

**WType1 - WType2**: Can't be changed, is the itemtype of the items that can be carried in weapon slots.

**HireDesc**: A reference for .tbl files.

**DefaultChance**: It is the chance for which your mercenary will use his\\her weapon (a.k.a regular attack) rather than a skill.

**Skill X**: Reference to the '**Skill**' column in [Skills.txt](/kb/file-guides/skills-txt)

**Mode X**: These modes must contain preset values and defines how your mercenary will use the skills.

```
1 -> Auras
4 -> Attack
5 -> Attack (use for Barbs, works the same way as Mode=4)
7 -> Cast
14-> Seq (use for Jab)
```

**Chance X - ChancePerLevel X**: It is the chance for your mercenary to use the skill at base mLvl and as he\\she progresses through mLvls.  
NOTE: The chance is calculated by probability.  
Example:  
Normal Fire Rogue:  
Default Chance = 75, Inner Sight = 10, Fire Arrow = 25.  
By probability, the game does: Chance/TotChance \*100%  
result:  
Default (Attack) = 75/110 \*100% = 68.18%  
Inner Sight = 10/110 \*100% = 9.09%  
Fire Arrow = 25/110 \*100% = 22.73%

**Level X - LvlPerLvl X**: They handle the sLvl of the Skill at Base lvl and the sLvl increase at level up.

**Head, Torso, Weapon, Shield**: References to the anims for monster parts, which since at least LoD are hardcoded to LIT.
