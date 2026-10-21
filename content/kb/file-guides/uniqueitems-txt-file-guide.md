---
title: UniqueItems.txt File Guide
summary: >-
  version: If the item is Classic D2 or LoD (0 for CD2, 1 for enhanced CD2, 100
  for LoD)
keepId: 343
author: Nefarius
credit: 'by Rattlecage, restyled by HarvestWombs'
posted: '2005-10-18'
modified: '2018-10-25'
views: 10370
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=343'
---
**_Uniqueitems.txt_**

**index:** The name of the item (also used as string key)

**version:** If the item is Classic D2 or LoD (0 for CD2, 1 for enhanced CD2, 100 for LoD)

**Enabled:** If the item can drop or not (0 for undropable, 1 for dropable)

**Ladder:** If the item can not be found in nonladder games on the Realms

**Rarity:** How common the item is

**Nolimit:** The name of the band that my friend's brother is in. Oh wait, I don't what this does, none of the items seem to use it.

**Lvl:** The level a monster must be to drop this item

**lvl req:** The level the character has to be to use the item

**code:** The code of the base item found in Weapons.txt, armor.txt and misc.txt

**type:** The name of the base item (for reference only)

**\*uber:** If the item is an uber item or not (not used by the game at all)

**carry1:** If you can only carry one of this item or not (1 yes, 0 no)

**cost mult:** A factor for figuring out the cost of the item

**Cost add:** Another factor for figuring out the cost of the item

**chrtransform:** The color the character becomes when this item is equipped

**invtransform:** The color the item is in the character's inventory

**flippy file:** The flippy file used for the item

**invfile:** The inventory graphic used for the item

**dropsound:** The sound that the item makes when it is dropped on the ground

**dropsfxframe:** How many frames the sound plays for

**usesound:** ?the sound the item makes when moved around in the character's inventory?

**prop1:** first magical modifier on the item  
**par1:** Parameter used for the modifier (such as cold length for cold damage)  
**min1:** Minimum value that the item can spawn with  
**max1:** Maximum value that the item can spawn with the other prop columns function the same as the first ones

**eol:** End of Line: Marks the end of the file
