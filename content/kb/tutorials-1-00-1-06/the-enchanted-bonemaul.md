---
title: The Enchanted Bonemaul
summary: >-
  To use this tutorial, you need a basic grasp of mod making so see tutorial 1
  if this isn't the case.
keepId: 402
author: Nefarius
credit: by Phrozen Heart
posted: '2006-08-04'
views: 5636
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=402'
---
To use this tutorial, you need a basic grasp of mod making so see tutorial 1 if this isn't the case.

1\. Changing the appearance  
Go down the list of weapons in weapons.txt until you find the maul line and then go across to columns BE and BF. These are the names of the DC6 files that represent the regular and unique maul inventory graphics. To give the maul the bone maul look, simply copy the BF column value (invmauu) to column BE (invmau) and then blank the BF value.

2\. Changing the name  
In the weapons.txt file once again, go to column AD which is the 3 letter code that represents the weapon throughout the game code. All you need to do is use Baron Darkstorm's Table Editor v1.02 (or similar), load up the string.tbl file from the patch and search for the string key in question which is 'mau' and change the value from 'Maul' to 'Bone Maul'.

3\. Granting necro powers  
This is actually a lot simpler than most people think. All the columns in weapons.txt that state things like 'Necromancer' and 'magically charged' aren't actually required and are mainly used as notes. To give the new Bone Maul necromancer skills, simply go to column BI which is marked 'Type' which should read 31 which is the weapon type for all of the hammer-like weapons (maul, great maul, war hammer). All you need to do is change the value to a 25 which is the wand type. You shouldn't have any problems with the Bone Maul but weird things start happening when you add this weapon type to things like scythes. Not only is the enchanted ability tied to the item type but so is the weapon class. Here are the three enchanted item types :

24 - Scepter Type - Mace class, 150% damage to undead, paladin skills  
25 - Wand Type - Mace class, 150% damage to undead, necro skills  
26 - Staff Type - Staff class, sorceress skills  

4\. Finishing Touches  
Personally, I'd go into the uniqueitems.txt file as well and make the following changes but it isn't essential. Go to column G which should be titled invtransform and then go down until you find the Bonesnap (or Bonesob as it calls it) line and set this value to 1. This means that the game will apply a color shift to the unique version's inventory graphic rather than it just looking like the regular version. The column next to that (column H) is the number value for the color of the color shift.
