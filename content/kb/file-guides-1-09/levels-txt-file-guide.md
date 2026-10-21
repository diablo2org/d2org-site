---
title: Levels.txt File Guide
summary: >-
  Pal: Palette (Color Palette loaded for the Level, you can change this but
  mostly the colors get messed up greatly)
keepId: 232
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 10992
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=232'
---
**Name:** Internal Level Name

**Id:** Level ID (used in columns like VIS0-7)

**Pal:** Palette (Color Palette loaded for the Level, you can change this but mostly the colors get messed up greatly)

**Act:** The Act the Level is located in (internal numbering 0-4)

**Layer:** what layer is the level on (surface levels are set to 0 etc)

**SizeX:** Horizontal Size of the Level

**SizeY:** Vertical Size of the Level

**OffsetX:** Horizontal Placement Offset

**OffsetY:** Vertical Placement Offset

**Depense:** Special Setting for levels which are not random and not preset (Outer Cloister, Arcane Sanctuary)

**Rain:** Does it Rain/Snow in this Level (1=yes, 0=no)

**Mud:** Unused setting (In pre beta D2 blizzard planed Rain to cause Mud which would have slowed your char's speed down, but this never made it into the final game)

**NoPer:** Setting for 3D Enhanced D2 that disables Perspective Mode for a specific level. (1=disabled, 0=enabled)

**LOSDraw:** Alows you to look thru objects and walls even if they are not in a wilderness level. (1=yes, 0=no)

**FloorFilter:** Probably has to do with Tiles and their Placement (function currently unknown) (1=yes, 0=no)

**BlankScreen:** Probably has to do with Tiles and their Placement (function currently unknown) (1=yes, 0=no)

**DrawEdges:** for levels bordered with mountains, walls (act 1 wildernesses for example) (1=yes, 0=no)

**IsInside:** Is this level a Underground or Indoor area (1=yes, 0=no)

**DrlgType:** Setting for Level Generation: 1=Random Size, amount of rooms defined by LVLMAZE.TXT, 2=pre set map (example: catacombs lvl4) and 3=Random Area with preset size (wildernesses)

**LevelType:** The type of the Level (Id from lvltypes.txt)

Sub Columns - IDs from LVLSub.txt

**SubType:** Setting Regarding Level Type (6=wilderness, 9=desert etc, -1=no subtype)

**SubTheme:** Setting Regarding Themes (function unknown)

**SubWaypoint:** Setting Regarding Waypoints (does not control waypoint placement)

**SubShrine:** Setting Regarding Shrines (does not control what shrines appear)

**Vis0:** entry/exit to level #1

**Vis1:** entry/exit to level #2

**Vis2:** entry/exit to level #3

**Vis3:** entry/exit to level #4

**Vis4:** entry/exit to level #5

**Vis5:** entry/exit to level #6

**Vis6:** entry/exit to level #7

**Vis7:** entry/exit to level #8

Refer to LVLWarp.txt

**Warp0:** Vis0 - GFX

**Warp1:** Vis1 - GFX

**Warp2:** Vis2 - GFX

**Warp3:** Vis3 - GFX

**Warp4:** Vis4 - GFX

**Warp5:** Vis5 - GFX

**Warp6:** Vis6 - GFX

**Warp7:** Vis7 - GFX

**Intensity:** Light Intensity: 0-255

**Red:** Red Lighting Strength (in 2D mode all colors are normal light)

**Green:** Green Light Strengh (in 2D mode all colors are normal light)

**Blue:** Blue Light Strength (in 2D mode all colors are normal light)

**Portal:** (Function Unknown)

**Poistion:** Setting for Perset Levels

**SaveMonster:** Does the game save the state of the Monsters for the area (1=yes, 0=no) (towns are set to 0 so that NPCs get respawned and hence get new items when you leave town)

**Quest:** Setting Related to Quests (Previous assumptions are incorrect)

**WarpDist:** (Function Unknown) (2025 is the Default Value)

**MonLvl1:** Area (Dungeon) Level on Normal (controls the item level of items that drop from chests etc)

**MonLvl2:** Area (Dungeon) Level on Nightmare (controls the item level of items that drop from chests etc)

**MonLvl3:** Area (Dungeon) Level on Hell (controls the item level of items that drop from chests etc)

**MonLvl1Ex:** Area (Dungeon) Level on Normal in D2X (controls the item level of items that drop from chests etc)

**MonLvl2Ex:** Area (Dungeon) Level on Nightmare in D2X (controls the item level of items that drop from chests etc)

**MonLvl3Ex:** Area (Dungeon) Level on Hell in D2X (controls the item level of items that drop from chests etc)

**MonDen:** Monster Density: The Density of Monsters (Can be set to values above 10000, but should be left well below 3000 to prevent SlowDown in GamePlay due to Sprite Overloading)

**MonUMin:** Minimum Unique and Champion Monsters Spawned in this Level

**MonUMax:** Maximum Unique and Champion Monsters Spawned in this Level

**MonWndr:** Does the monster 'wander?' (1=yes, 0=no) Controls whether monsters wander around while 'unactivated' by the player or stand still until activated \[Thanks to Roland for this late-breaking piece of information, which he tipped me off to in August 2003. -Jeff\]

**MonSpcWalk:** (Unknown)

**Mtot:** How many different Species of Monsters can occur in this area (example: if you use M1-25 then set Mtot to 25 etc)

M1-M25: Monster Species 1-25 (use ID from MonStats.txt)

S1-S25: Spawned Species 1-25 (use ID from MonStats for Monsters which have eSpawnCol set to 2, related to M1-25, eg: if M1 Spawns S1 will Spawn)

UTot: How many different Species of Monsters can spawn as Uniques and Champions in this Area (works like Mtot)

U1-U25: Unique Species 1-25 (same as M1-M25 just for Monsters that you want to appear as Unique/Champions)

C1-C5: Critter Species 1-5 (For monsters set to 1 in the IsCritter Column in MonStats.txt)

CA1-CA5: Related to C1-5, eg: if you spawn a critter thru C1 then set this column to 30 etc. (function unknown)

CD1-CD5:(Unknown)

**Themes:** Which Theme is used for this Area (unknown function)

**SoundEnv:** Referes to a entry in SoundEnviron.txt (for the Levels Music)

**Waypoint:** 255=No way Point, other #'s Waypoint ID (you cans witch waypoint destinations between areas this way)

**LevelName:** String Code for the Display name of the Level

**LevelWarp:** String Code for the Display name of a entrance to this Level

**EntryFile:** Which \*.DC6 Title Image is loaded when you enter this area

ObjGrp0-7: Use the ID of the ObjectGroup you want to Spawn in this Area (from ObjectGroups.txt)

ObjPrb0-7: Object Spawn Possibility: the Chance for this object to occur (if you use ObjGrp0 then set ObjPrb0 to a value below 100)

Beta: Reference Only (can be used for comments)

---

**Annex A** (by [JBouley](mailto:jeffbouley888@msn.com)) - Important Notes on Populate ID Numbers

It is important to understand that in most cases, the numbers you use in the Monster, Spawner and Unique monster columns in this file will be the Populate ID numbers listed for those monsters in monstats.txt. But this is NOT always the case.

You will notice that 'Classic' D2 monsters and some expansion monsters share the same Populate ID numbers. How does the game know which monster to pick? Here's how it works:

If you want to spawn classic monsters in areas that appear in Acts 1 through 4, use the Populate ID number as listed in monstats.txt. Simple?

Likewise, if you want to spawn an expansion monster in an Act 5 area, use the Populate ID number as listed. Simple.

In other words, the classic areas are coded to 'prefer'classic monsters, and the expansion part of the game favors expansion monsters. But you 'CAN spawn classic monsters in some areas of Act 5, and you 'CAN spawn virtually any expansion monster in almost any area in Act 1, Act 2, Act 3, or Act 4. You just need to 'fool' the game a little.

To spawn an expansion monster in Acts 1 through 4, simply subtract 2 from the monster's row number in monstats.txt and use the resulting number as the Populate ID number. So, let's assume you want to spawn the Ice Boar in the Blood Moor. Look in monstats.txt. The Ice Boar appears on line 458 of monstats.txt. Substract 2 from that and you have 456. So, in one of the M columns for the Blood Moor row in Levels.txt, put 456. ('NOTE: Nefarius, the author of most of this resource guide, tells me the method is row number minus 2, though I have long been told \[and have used\] the system of row number minus 3 to take into account the blank 'Expansion' row. Just be aware that there seems to be some confusion on this point, but I'll go with Nefarius' calculations on this since he's been doing it more recently than I have. -JBouley)

To spawn 'classic' monsters in Act 5 is a little different. Take the monster's PopulateID...for this example we'll use the Damned, which has a Populate ID of 14. Then subtract 436 from that number. So, 14 minus 436 equals -422. Type that negative number into the Act 5 area in Levels.txt that you want it to appear in. Note that this tends to work best with indoor and underground areas of Act 5. Many outdoor areas in Act 5 are heavily hardcoded and might not spawn classic monsters.

---

**Annex B** - Enlarging the Valley of the Snakes

In this tutorial we will learn how to resize valley of Snakes to be 64x64 cells without using a map editor.

First of start by opening levels.txt (the only file we will need)  
Go down to Act 2 - Desert 5 Row. First off go to the SizeX and SizeY columns change them from 32 to 64 (you can make it larger but lets stay w this for now, as some times you will need to change the other levels if you exceed specific sizes)

Now go to the SubType column change -1 to 9, next Change SubTheme from -1 to 3, leave subwaypoint and sunshrine as is.

Go over to the portal column and change it to 1,

Last we will change WarpDist from 2025 to 3800.

Thats it, if you have 'old' save files w old maps delete the \*.ma1 file for that char, these store the act2 maps you revealed. now enter the game any enjoy your larger level.

You can also populate the level with monsters now.
