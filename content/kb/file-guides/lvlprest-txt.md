---
title: LvlPrest.txt
summary: Lvlprest.txt is the text file that handles preset dungeons and levels
keepId: 367
author: Nefarius
credit: 'by Xenast, expanded and restyled by Ogodei'
posted: '2005-11-18'
modified: '2018-10-24'
views: 13817
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=367'
---
_**Lvlprest.txt is the text file that handles preset dungeons and levels**_

Credits:

~**SVR** for Pop and PopPad explanation  
~Go\]\[um for the Logicals discovery

**Name:** This is a reference only and indicates name of the level

**Def:** Related to the automap, and must be a consecutive value

**Levelid:** The ID of the level from [Levels.txt](/kb/file-guides/levels-txt)  
NOTE: leave it to 0 if the ds1 is not a preset

**Populate:** If set to 0 monsters will not be able to spawn on the map.  
NOTE: Causes Unhandled Exception if you add other monster objects when column is set to 0.

**Logicals:** Set it to 1 to allow wall transparency. Otherwise, set it to 0.  
NOTE: For walls to become actually transparent, you need to follow some extra rules while building your dungeons.

**Outdoors:** Set to 1 for outdoor maps and 0 for indoors.

**Animate:** Controls wether or not animated tiles will animate in the level. 1 makes the animated tile to play their animation. 0 disables animations.  
NOTE: Animated tiles, in levels with Animate = 0 , will display a random yet static frame.

**KillEdge:** Removes the tiles bordering the east and south edge of the ds1 in game. 1 means it will removed.

**FillBlanks:** Setting to 1 makes all empty spaces unwalkable.

**SizeX - Size Y:** Tells the X \\ Y size of the map,  
NOTE: Leave at 0 for preset areas since preset area size is defined in levels.txt

**Automap:** setting it to 1 will reveal the full automap.  
NOTE: Only works for preset maps

Scan: Setting it to 1 allows warps to be selected.

**Pops - PopPad**:  
Pops are the special tiles with the Style (main-index) of 8 - 29. These remove the target style set from the map, revealing tiles in another layer.  
The Sequence number determines which Style set will be removed. These may be walls, floors or roof tiles.  
To operate, two 'Pop tiles' are placed to form a square around the area of tiles to remove.  
The PopPad column in lvlprest.txt determines the line of the 'trigger pad'. It determines the number of sub-tile units south & west the trigger line is offset.  
You can only have one set of each style of pop. If you have 2 sets neither will operate properly, even if they have different target styles. So to have multiple pops in a level, you must use a different Style (main index) on each pair of pop tiles.  
NOTE: When setting pops and poppad its best to reference an existing ds1 that contains the dt1's requiring these columns to help determine what value to use

**Files**: The amount of versions the map has, based on entries in File 1 to File 6 columns

**File 1 to File 6**: The location of the ds1 versions, leave at 0 for files that don't exist

**Dt1mask**: Number telling the game which tiles to use from lvltypes.txt : The calculation is 2^(your DT1 amount) -1.

**Beta**: 1 for beta, 0 not beta . Reference Only.

**Expansion**: 1 for expansion, 0 for non-expansion. Reference Only.
