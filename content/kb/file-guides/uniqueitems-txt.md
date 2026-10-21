---
title: UniqueItems.txt
summary: This guide contains all the information you need concerning UniqueItems.txt
keepId: 386
author: Nefarius
credit: 'by Nefarius, restyled by Nizari'
posted: '2007-11-07'
modified: '2020-03-29'
views: 25787
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=386'
---
This guide contains all the information you need concerning UniqueItems.txt

\- Related text files: UniqueItems.txt

\- Is used together with/is related to/reads from:  
[Armor.txt](/kb/file-guides/armor-txt)  
[ItemStatCost.txt](/kb/file-guides/itemstatcost-txt) (not directly, but this is highly related to Properties.txt)  
[ItemTypes.txt](/kb/file-guides/itemtypes-txt)  
[Misc.txt](/kb/file-guides/misc-txt)  
[Properties.txt](/kb/file-guides/properties-txt-file-guide)  
[Skills.txt](/kb/file-guides/skills-txt)  
[States.txt](/kb/file-guides/states-txt)  
[Weapons.txt](/kb/file-guides/weapons-txt-file-guide)

**Index:** the ID pointer that is referenced by the game in TreasureClassEx.txt and CubeMain.txt, this column also contains the string-key used in the TBL (string.tbl, expansionstring.tbl and patchstring.tbl).

**Version:** Switch, what game version was this unique item added in, 0 referes to real classic Diablo II (1.00-1.06), 1 refers to new classic Diablo II (1.07-1.11) and 100 refers to the Expansion Set. Items with 100 will be unable to drop in Classic Diablo II.

**Ladder:** Boolean, 1 = item available only on the realms (ladder), 0 = item available both in single player/open games, TCP/IP and on the realms.

**Rarity:** chance to pick this unique item if more then one unique item of the same base item exist, this uses the common rarity/total\_rarity formula, so if you have two unique rings, one with a rarity of 100 the other with a rarity of 1, then the first will drop 100/101 percent of the time (99%) and the other will drop 1/101 percent of the time (1%), rarity can be anything between 1 and 255 (rarity of less then 1 will be set to 1 by the code).

**NoLimit:** Boolean, 0 = can drop only once per game, 1 = can drop more then once per game. Basically when the game drops a unique item it sets a check mark in a table it holds in memory of what unique items were dropped, when, should you be lucky enough to get the same item again, it will check whenever this item has been dropped already, and if NoLimit is false, it will drop a rare item with enhanced durability instead.

**Lvl:** the quality level of this unique item, monsters, cube recipes, vendors, objects and the like most be at least this level or higher to be able to drop this item, otherwise they would drop a rare item with enhanced durability.

**Lvl Req:** the character level required to use this unique item.

**Code:** the code of the base form of this unique item, this is an ID pointer from Weapons.txt, Armor.txt or Misc.txt.

**\*type:** This column is not read by the game.  
**\*uber:** This column is not read by the game.

**Carry1:** Boolean, 0 = allow the player to hold as many of this item as he wants, 1 = allow the player to hold a single copy only. In reality this just prevents the player from picking up the item when it is dropped on the floor and it prevents the player from putting this item in the trading window.

**Cost Mult:** the base item's price is multiplied by this value when sold, repaired or bought from a vendor.

**Cost Add:** after the price has been multiplied, this amount of gold is added to the price on top.

**ChrTransform:** palette shift to apply to the the DCC component-file and the DC6 flippy-file (whenever or not the color shift will apply is determined by Weapons.txt, Armor.txt or Misc.txt). This is an ID pointer from Colors.txt.

**InvTransform:** palette shift to apply to the the DC6 inventory-file (whenever or not the color shift will apply is determined by Weapons.txt, Armor.txt or Misc.txt). This is an ID pointer from Colors.txt.

**FlippyFile:** overrides the flippyfile specified in Weapons.txt, Armor.txt or Misc.txt for the base item. This field contains the file name of the DC6 flippy animation.

**InvFile:** overrides the invfile and uniqueinvfile specified in Weapons.txt, Armor.txt or Misc.txt for the base item. This field contains the file name of the DC6 inventory graphic.

**DropSound:** overrides the dropsound (the sound played when the item hits the ground) specified in Weapons.txt, Armor.txt or Misc.txt for the base item. This field contains an ID pointer from Sounds.txt.

**DropSfxFrame:** how many frames after the flippy animation starts playing will the associated drop sound start to play. This overrides the values in Weapons.txt, Armor.txt or Misc.txt.

**UseSound:** overrides the usesound (the sound played when the item is consumed by the player) specified in Weapons.txt, Armor.txt or Misc.txt for the base item. This field contains an ID pointer from Sounds.txt.

**Prop1-12:** an ID pointer of a property from Properties.txt, these columns control each of the 12 different modifiers a unique item can grant you at most. (In a-lay-mens-terms: 'the stat that can spawn on the unique item.')

**Par1-12:** the parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them, these fields support calculations.

**Min1-12:** minimum value to assign to the associated property. (In a-lay-mans-term's: 'minimum value of the stat.')

**Max1-12:** maximum value to assign to the associated property. (In a-lay-man's-terms: 'maximum value of the stat.')

**\*eol:** End of Line, used to avoid the trailing bit error M$ Excel usually causes when adjusting the end of the rows. This column must contain 0 unless you want to crash when the game loads.
