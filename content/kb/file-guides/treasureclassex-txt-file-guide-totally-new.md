---
title: TreasureClassEx.txt File Guide (totally new)
summary: >-
  Treasure Class: This column defines the ID pointer (“the name”) of the
  treasureclass. This pointer is used by other files (and fields inside this
  file) to link to a specific line. An ID pointer must…
keepId: 368
author: Nefarius
credit: 'by Nefarius, restyled by HarvestWombs'
posted: '2007-03-09'
modified: '2020-04-27'
views: 56544
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=368'
---
**_TreasureClassEx.txt File Guide_**  
By Nefarius

**Treasure Class:** This column defines the ID pointer (“the name”) of the treasureclass.  
This pointer is used by other files (and fields inside this file) to link to a specific line.  
An ID pointer must be unique, if you have two identical ID pointers the game will always use the first occurrence and ignore all others.  
Fields of this type are (almost always) case-sensitive. Files that use this ID pointer: MonStats.txt, SuperUniques.txt and TreasureClassEx.txt

**Group** and **Level:** These two columns go hand in hand.  
The first is used to group several treasureclasses together to form a “super-treasureclass”, the second one then gives each of these lines a level.  
The game will then use this to automatically attempt to balance the item drops according to the level you have put inside the second column.  
_For example:_ if you give a level 10 monster a treasureclass, it will pick the treasureclass with the nearest level.  
So if you have one with 10 and another with 20, it will pick the first over the second, even if you linked the monster to the second treasureclass.

**Picks:** This column has two different functions, depending on the type of values you enter (either positive 0-6 or negative, -1 to -6).  
In the first case this is used as the number of loops to run the “pick drop” routine, in the second case it is used to determine exactly which items, and how many of each, to drop (see appendix).  
You cannot make the game drop more then 6 items with either method without code editing (there are other txt based methods to drop more then 6 items though).

**Unique**, **Set**, **Rare**, **Magic:** This is used to manipulate and fine-tune the drop ratio of items of the respective quality. Listing the whole “quality” calculation here is not necessary as this has been covered in many places, just know that the way this column works is:

if treasureclass-manipulator NoDrop – Probability for “nothing”, I.E. just like all other items droppable by a treasureclass, this simply defines the probability of “nothing” to drop.

**Item1-10:** The different items and treasureclasses linked to this line (“what it can drop”).  
This can either contain item codes, item pointers (=the “names” of unique items and set items), auto-treasureclasses (see ItemTypes.txt or appendix) and other treasureclasses.  
There are several special modifiers for this field that are supposedly enabled in 1.10, I have not used any of those myself so I don’t know if they work.  
For gold drops, you can use the mul flag to increase the number of coins in a gold pile (this is why bosses and champions always drop more gold then regular monsters).

**Prob1-10:** This is the individual probability for each of the drops defined in the Item1-10 columns. (see appendix)

**SumItems**, **TotalProb** and **DropChance:** These columns have no purpose other then being used as comment fields (that’s what blizzard has used them for if you wonder what those values in some of them mean).

**Term:** This column is required to terminate the line if you’re using M$ Excel or another spreadsheet that likes messing up the table borders.

**_Appendix_**

Never replace or move the gold row around, the game needs this row to define gold drops (such as when you drop gold from your inventory AFAIK).

The chest rows are also accessed by code, albeit I am uncertain via what method, because it is definetly NOT via an ID, because one can move them around w/o any bad effects.

The auto-treasureclasses are used to group all items of a specific item type in a range of automatically generated TCs, such as armo3-99 and weap3-99. These TCs are softcoded in 1.10 and are now controlled by the TreasureClass column in ItemTypes.txt (thanks to Paul Siramy for pointing me in the right direction).

The chance to drop is generated based on the values in the **prob1-10** columns (this includes NoDrop). Lets say you have **NoDrop** set to 100, and the probability for items 1-3 set to 25,50 and 100 respectively.

Sum = 100+100+50+25 = 275  
Chance of no drops: 36.5% (100/275)  
Chance of item 1: 9% (25/275)  
Chance of item 2: 18% (50/275)  
Chance of item 3: 36.5% (100/275)

If the picks column contains negative values then the **Prob1-10** columns are used as quantity indicators instead.

_For example:_  
Picks = -6  
Item1 = 2  
Item2 = 1  
Item3 = 3

This will make the game drop 2,1 and 3 of these items respectively.

**AutoTC's**

> **Nefarius wrote:**
>
> The game builds up auto tcs automatically (as the name implies), from all items that have armo somewhere in their itemtype chain.
>
> That means all entries in armor.txt are covered by the armo3-99 auto TC.
>
> qLvl = level in armor.txt
>
> So cap, sash, leather glove, quilted armor et alia are armo3  
> Sacred Armor and alia would be armo99 etc.
>
> armo3-99 contains each item with rarity greater then 0 from this file, in steps of 3. (3,6,9 ... 93,96,99)
>
> armo3 contains items with qLvls 1-3  
> armo6 contains items with qLvls 4-6
>
> And so on and so forth.
