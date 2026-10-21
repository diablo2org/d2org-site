---
title: LvlSub.txt
summary: >-
  Type: This value is used in Levels.txt, in the column 'SubType'. You'll notice
  that in LvlSub.txt some rows use the same value, we can say they forms groups.
  If you count each row of a group starting…
keepId: 362
author: Nefarius
credit: 'by I_only_pressed_ESC (corrections by Paul Siramy), restyled by Ogodei'
posted: '2005-11-18'
modified: '2018-10-24'
views: 12105
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=362'
---
LvlSub.txt

**Name**: Description, reference only.

**Type**: This value is used in [Levels.txt](/kb/file-guides/levels-txt), in the column '**SubType**'. You'll notice that in LvlSub.txt some rows use the same value, we can say they forms groups. If you count each row of a group starting from 0, then you'll obtain what is written in Levels.txt, columns '**SubTheme**', '**SubWaypoint**' and '**SubShrine**'. (added by **Paul Siramy**)  
for more details see: this post.

**File**: What .ds1 is being used.

**Expansion**: 0 for classic, 1 for Expansion.

**CheckAll**: Unknown as all have 0.

**BordType**: this field can contain values ranging from -1 to 2  
NOTE: wall types have 0, 1 or 2, while Non-wall types have -1.

**Gridsize**: Set it to 1 or 2 I'm assuming this means a block of tiles ie: 4x4. (see below).

**Dt1Mask**: For some rows, this is their place in LvlTypes.txt. The Dt1 mask also includes the mask for the Floor.Dt1 of that level. (see Trials0 below)

**Prob X**: The probability of the Dt1 being spawned.

**Trials X**: This appears to be a chance of either a floor tile being spawned or the actual Dt1..

**Max X**: This appears to be how much will spawn in the Grid.

**Beta**: Reference only.

**_This addendum was written by Paul Siramy in regard to the 'trials' columns._**

I just did some tests. Here's how the game put Substitution Tiles, using LvlSub.txt :  
In a level it place some 'groups' of tiles. It means that usually when the game decide to place 1 substitution tile at a place, it place other ones just near around.  
The rarity of these groups is controled by the ProbX column. The higher the value, the more groups will be placed in the level. Note that there can be less group than the value you set in ProbX. Apparently these groups are placed first, but they may be erased by other ds1 tiles, like a fallen camp. So don't set the ProbX to a too low value, as it sometimes happen in that case that no substitution tiles will appear.  
For each group, it tries to place TrialsX substitution tiles, but the number of such tiles is capped at MaxX. So it's useless to set TrialsX

\- New Input, from a PM by I\_only\_pressed\_Esc  
I've been doing a bit of experimenting with Act1 wilderness border-inner walls generation.  
I've found that Type 1 controls the actual border-inner wall generation to make it look 'not square' and straight forward ie 'wall hugging to find the next exit'.  
The ds1 cannot be edited as it is hardcoded to choose from god knows what. This is based on adding the ds1 to LvlPrest.txt and changing the dt1 mask.  
The ds1 has a number of various tile grids 4x4 4x5 5x5 etc tiles that are picked to generate the border or inner walls. As the tile grids get bigger the variance increases.  
The grids have a 1 tile border of a floor tile which obviously gets merged at generation of the level.
