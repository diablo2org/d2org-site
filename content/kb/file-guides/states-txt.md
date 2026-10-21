---
title: States.txt
summary: >-
  States.txt is used by: MonProp.txt Skills.txt SetItems.txt Sets.txt
  CubeMain.txt UniqueItems.txt Runes.txt
keepId: 452
author: Nefarius
credit: 'by Nefarius, restyled and expanded by Ogodei'
posted: '2008-09-21'
modified: '2018-10-24'
views: 17658
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=452'
---
Related .txt files:

_States.txt is used by:_  
[MonProp.txt](/kb/file-guides/monprop-txt)  
[Skills.txt](/kb/file-guides/skills-txt)  
[SetItems.txt](/kb/file-guides/setitems-txt-file-guide)  
[Sets.txt](/kb/file-guides/sets-txt-file-guide)  
[CubeMain.txt](/kb/file-guides/cubemain-txt)  
[UniqueItems.txt](/kb/file-guides/uniqueitems-txt)  
[Runes.txt](/kb/file-guides/runes-txt)

_and is used by:_  
[Overlay.txt](/kb/file-guides/overlay-txt)

**state** - the id pointer for this state, you would use this value in files such as skills.txt in those fields referring to states, for the state-property always use the id (line #)

**id** - for reference, this isn't compiled, the internal id corresponds always with the index in the txt file (ignoring the header and expansion lines).  
**WARNING: States.txt is capped at **255** functional rows (**254** referring to the actual text file, as the count starts from 0).**

**group** - you can group certain states together, this has the effect that they cannot stack (like the three cold armors of the sorceress). Beware as not all the code assigning states will care to check for this, if you use something exotic it will most likely produce glitches, if you stick to skills for state assignment it will work as intended.

**remhit** \- whenever or not the state is dispelled when the unit takes a hit, due to the way this is coded it only applies to monsters, it wont be dispelled for players that get hit (not extensively tested, but code analysis sez so).

**nosend** - not yet analysed in detail

**transform** - whenever this state will transform the appearence of the unit (shape shift and holyshield).

**aura** - whenever or not this is an aura, aura states will not stack onscreen (ie the game cycles over active aura states), aura states are also dispelled when a monster is effected by conversion.

**cureable** - whenever or not an heal-enabled npc can remove this state (npcs automatically remove poisoning etc, hence those aren't checked) when you talk to them. (not verified)

**curse** - curse states cannot stack, the game will remove them when attempting to set a new state, it also controls whenever the duration of this state is reduced by the effects of the Cleansing aura and whenever curse resistance reduces it. Once a new curse state is applied the old one is removed.

**active** \- whenever the state has a StateActiveFunc associated with it, StateActiveFuncs are actually the same as CltDoFuncs for skills. The active func is called every frame while the state is active.

**immed** \- not yet analysed in detail.

**restrict** - whenever or not this state restricts skill usage (druid shapeshifts).

**disguise** - whenever this state make the game load another sprite for the unit (use in conjunction with transform).

**blue** - whenever this state applies a color change that overrides all others (such as from items).

**attblue - dmgblue - armblue - rfblue - rlblue - rcblue - rpblue - attred - dmgred - armred - rfred - rlred - rcred - rpred** - these columns control whenever attack rating, damage, armor class, fire resistance, lightning resistance, cold resistance or poison resistance are displayed in either blue or red in the character stats screen.

**stambarblue** - whenever the stamina bar color is changed to blue (for stamina shrine). It does not control whenever you have infinite stamina (which you actually don't have, even with the shrine, it just gives you rediculous amounts of regen rate).

**exp** - when a unit effected by this state kills another unit, the summon owner will recieve experience (also when a unit with this state dies the summon owner also recieves experience, but not always due to some strange coding).

**plrstaydeath, monstaydeath, bossstaydeath** - whenever the state is removed when the unit dies (for players, monsters and special monsters). The last column will prevent bosses from shattering (from what I can tell).

**hide** - when the unit has died, the corpse and death anims will not be drawn.

**shatter** - whenever the unit shatters or explodes when it dies, this is heavily hardcoded, it will always use the ice shatter for all states other then STATE\_UBERMINION.

**udead** - whenever this state prevents the corpse from being selected by spells and the ai.

**life** - when a state with this is active, it cancels out the native life regen of monsters. (using only the mod part instead of accr).

**green** - whenever this state applies a color change that overrides all others (such as from items). (see blue column, which seams to do the same).

**pgsv** - whenever this state is associated with progressive spells and will be looked up when the charges are triggered.

**nooverlays** - related to assigning overlays to the unit, not extensively researched yet.

**noclear** - like the previous column, also only used on states with the previous column enabled.

**bossinv** - whenever this state will use the minion owners inventory clientside (this is what makes the decoy always show up with your own equipment, even when you change what you wear after summoning one).

**meleeonly** \- prevents druids that wield a bow or crossbow while shape shifted from firing missiles, and will rather attack in melee.

**notondead** - not researched yet

**overlay1 - overlay4** - exact usage depends on the state and how the code accesses it, overlay1 however is the one you should generally be using.

**pgoverlay** - overlay shown on target of progressive skill when chargeup triggers.

**castoverlay** - overlay displayed when the state is applied initially (later replaced by overlay1 or whatever applicable by code).

**removerlay** - like castoverlay, just this one is displayed when the state expires.

**stat** - primary stat associated with the state, mostly used for display purposes (you should generally use skills.txt for assigning stats to states).

**setfunc** - clientside callback function invoked when the state is applied initially.

**remfunc** - clientside callback function invoked when the state expires or is otherwise removed.

**missile** - the missile that this state will utilize for certain events, how this is used depends entirely on the functions associated with the state.

**skill** - the skill that will be queried for this state in some sections of code, strangely enough this contradicts the fact states store their assigner skill anyway (via STAT\_MODIFIERLIST\_SKILL)

**itemtype** - what item type is effected by this states color change.

**itemtrans** - the color being applied to this item (only going to have an effect on alternate gfx, inventory gfx isn't effected).

**colorpri** - the color priority for this states color change, the, this can range from 0 to 255, the state with the highest color priority will always be used should more then one co-exist on the unit. If two states exist with the same priority the one with the lowest id is used (IIRC).

**colorshift** \- index for the color shift palette picked from the \*.PL2 files (see Paul Siramy's state color tool for info).

**light-r - light-g - light-b** - change the color of the light radius to what is indicated here, (only has an effect in D3D and glide of course).

**onsound - offsound** \- sound played respectively when the state is initially applied and when it expires

**gfxtype** - what unit type is used for the disguise gfx (1 being monsters, 2 being players, contratey to internal game logic).

**gfxclass** - the unit class used for disguise gfx, this corresponds with the index from monstats.txt and charstats.txt  
When '**gfxtype**' is set to **1**, the "class" represents an hcIdx from [MonStats.txt](/kb/file-guides/monstats-txt). If it's set to **2** then it will indicate a character class the unit with this state will be morphed into.

```
gfxtype 2           character
0                       Amazon
1                       Sorceress
2                      Necromancer
3                      Paladin
4                       Barbarian
5                      Druid
6                      Assassin
```

**cltevent** \- clientside event callback for this state (likely very inconsistent with the server side events, beware).

**clteventfunc** - callback function invoked when the client event triggers.

**cltactivefunc** - cltdofunc called every frame the state is active

**srvactivefunc** - srvdofunc called every frame the state is active
