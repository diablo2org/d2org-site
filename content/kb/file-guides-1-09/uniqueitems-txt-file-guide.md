---
title: Uniqueitems.txt File Guide
summary: >-
  name The name of the unique. Must match exactly with what you enter as the
  string/key into the string.tbl, expansionstring.tbl OR patchstring.tbl file.
keepId: 249
author: Phrozen Heart
credit: by JBouley
posted: '2003-12-02'
views: 9955
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=249'
---
name  
The name of the unique. Must match exactly with what you enter as the string/key into the string.tbl, expansionstring.tbl OR patchstring.tbl file.

version  
0 = classic D2  
100 = expansion  
Doesn't seem to matter which number you use if you're playing LoD, but if you're modding classic D2, you should probably keep all the numbers in this column at 0.

completed  
0 = No  
1 = Yes  
Advised that you put it to 1 for any unfinished uniques in the file that you finish, and for any new uniques you add.

beta  
0 = No  
1 = Yes  
Presumably means the item was in the beta test version of the original D2 game. Column seems not to matter much...just for reference. Use a 1 or a 0 as you prefer.

rarity  
Seems to have something to do with the relative chances of the game spawning a unique if there is more than one unique using the same base item type. I personally don't understand how this is calculated, but another modder has explained it in Addendum 1 at the end of this file guide (see below).

Level  
The level of the unique. Affects whether a monster can drop it. A 10th level monster, for example, cannot drop a 50th level unique item.

LevelReq  
The level the player must be to equip and use the item.

code  
The three-character item code of the base item for this unique. These item codes are found in armor.txt, misc.txt and weapons.txt.

type  
The name of the item...corresponds to the item code described above. If code is lsd, the type should be Long Sword. And so on. This column actually seems to be for reference purposes only. Blizzard programmers misspelled several item names in this columns, such as Hydry Edge and Pollaxe, yet it doesn't seem to have an adverse effect. Probably best to spell it right, though, to be on the safe side.

cost mult  
See Addendum 2 at the end of this file guide

cost add  
See Addendum 2 at the end of this file guide.

transform  
0 = No  
1 = Yes  
Does the unique version of item change to a different color than the color of the normal version of the item (in the character's hand or on his/her body)?

invtransform  
0 = No  
1 = Yes  
Does the color of the inventory graphic for this item change for the unique version of the item, compared to the normal item? (In other words, is the inventory graphic tinted a special color). This has nothing to do with choosing a special graphic for the unique version of the base item. To do THAT (set a special graphic for the unique that doesn't look at all like the normal item), you need to deal with the uniqueinvfile columns in the armor.txt and weapons.txt files. Note: If you do have a special graphic set for the unique version, you have two choices. Either color the new graphic you create so that it is similar to the color you choose for 'transform' (if you want the in-game item to have a special color on your character), or make it a fairly neutral weapon or armor color and use this 'invtransform' column to tint it so that it will be in line with 'transform.'

transformcolor  
Sets the color used for the transform and/or invtransform entries above. Generally, it makes no sense at all to have invtransform set to 1 and transform set to 0...because why would the inventory graphic be colored and the item on your character NOT be? However, for the reasons noted in the invtransform entry above, it DOES make sense to have invtransform be 0 and transform be 1 in many cases. The list of colors is found in colors.txt, and that will guide you as to the number you put in this column. The ID numbers for colors start at 0 for white (at the top of colors.txt) and go to 20 for bright white (at the end of the colors.txt file). NOTE: Bright white is not a good color for inventory graphics. It is too bright in most cases. Use white or light gray instead...or use bright white and make sure the invtransform column is zero so that the change will only affect the item in the character's hand and not the graphic in the inventory.

ItemMod1Code  
The code for the first magical modifier on the item. A list of these magic codes can be found in Phrozen Keep's Resource area. They can also be found in the file Properties.txt.

ItemMod1Param  
The parameter number used by some of the magic modifier codes (not all of them use this column). For example, if you used charged as a mod, the param column is used to specify the ID number (from skills.txt) of the skill to be placed on the item. Refer to the Phrozen Keep resource guide on magic codes for more details.

ItemMod1Min  
The minimum value of the magic modifier, such as minimum AC bonus granted, minimum damage, etc. Some mods are simpler integer values (such as damage) and others are percentages (such as resists, faster run/walk, etc.). Refer to the Phrozen Keep resource guide on magic codes for more details.

ItemMod1Max  
The maximum value. See ItemMod1Min above for additional details. NOTE: Don't ever let the maximum be smaller than the minimum. And remember that if negative values are used, pay attention to which is the smaller value...don't just look at which is the larger numeral. For example, if you had a stat that could be range anywhere between -1 and -10, then -10 would be the MIN and -1 would be the MAX. That is because -10 is the smaller value. But many people (myself included when I first started working with this file) would make the mistake of putting -10 as the max and -1 as the min (just looking at the numeral and forgetting about the negative sign), which crashes the game.

ItemMod2Code  
Predictably, this is used for the second magic modifer you put on the item. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod2Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod2Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod2Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod3Code  
This third mod on the item starts here, if you have more than two. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod3Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod3Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod3Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod4Code  
Fourth mod, if you want more than three on the item. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod4Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod4Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod4Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod5Code  
The fifth power on the item, if you give it more than five mods. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod5Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod5Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod5Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod6Code  
This begins the sixth mod of the item, if you want six or more. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod6Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod6Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod6Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod7Code  
The item's seventh power, if you want that many mods on it. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod7Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod7Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod7Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod8Code  
Mod number eight, if you give the item more than seven powers. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod8Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod8Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod8Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod9Code  
No surprise here: This is the ninth mods, if you want to go with that many. Same rules apply as noted in the entry for ItemMod1Code.

ItemMod9Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod9Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod9Max  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod10Code  
Lo and behold, the tenth mod for the item, if you want to go for the full amount of mods allowed by the uniqueitems.txt file. Same rules apply as noted in the entry for ItemMod1Code. NOTE: While it is NOT possible to give more than 10 mods to a unique item through the use of this file, you can add powers to a unique that you possess on your character, if you create a recipe in cubemain.txt. See any available tutorials, file guides or Phrozen Keep forum posting on that file for more information. But, in short, if your output in cubemain make use of useitem (NOT usetype) and powers are listed in the Mod columns for cubemain.txt, the item can be given powers above and beyond the ten in this file, without losing the other powers and without losing its status and name as a unique item.

ItemMod10Param  
Same rules apply as were noted in the entry for ItemMod1Param.

ItemMod10Min  
Same rules apply as were noted in the entry for ItemMod1Min.

ItemMod10Max  
Same rules apply as were noted in the entry for ItemMod1Min.

End  
The terminator column. Always have a 0 in this column unless you like crashes.

---

**ADDENDUM 1** by Ruvanal  
'Explaining the rarity column in uniqueitems.txt'

Here is an explanation of the rarity numbers in the uniqueitems.txt and setitems.txt files. It may apply in some other similar cases that I cannot think of right now too. This is one that many do not seem to know enough about and it can have a larger impact on the modded games than the standard game itself (more duplicate base items).

---

When the game spawns a unique or set item that can have more than one possible outcome, the game will use this procedure:

Total up the rarity of all items that have a required ilvl equal or less than the ilvl of the being generated. It will then randomly select one of the items from the list based on their rarity values.

This makes the chance for any particular item to be rarity/total\_rarity. If there are no items that can be spawned at that ilvl then the game will downgrade the item by the following:  
Set -> magical with x2 durability  
Unique -> rare with x3 durability

If the game selects a unique that has already spawned, then it will be downgraded also. There is no filtering of the already spawned items. This most often comes into play with rings and amulets as these 2 base items have the most alternate possibilities.

Here is a list of the 1.09 rings and amulets (set and unique). The Item Level is the minimum ilvl need to spawn that item. The rarity is the relative rarity of the item. The total rarity is the total of the rarities up to that particular ilvl. To find the total rarity look for the highest Item Level that does not go above the ilvl you checking against and use that to calculate the chances in the formula rarity/total\_rarity.

|     |     |     |     |
| --- | --- | --- | --- |
| **Set Rings** | **<br><br>Item Level<br><br>** | **<br><br>Rarity<br><br>** | **<br><br>Total Rarity<br><br>** |
| Cathan's Seal | 15  | 7   | 7   |
| Angelic Halo | 17  | 3   | 10  |

|     |     |     |     |
| --- | --- | --- | --- |
| **Set Amulets** | **<br><br>Item Level<br><br>** | **<br><br>Rarity<br><br>** | **<br><br>Total Rarity<br><br>** |
| Civerb's Icon | 13  | 7   | 7   |
| Cathan's Sigil | 15  | 7   | 14  |
| Angelic Wings | 17  | 7   | 21  |
| Vidala's Snare | 19  | 7   | 28  |
| Arcanna's Sign | 20  | 1   | 29  |
| Iratha's Collar | 21  | 7   | 36  |
| Tal Rasha's Adj. | 26  | 1   | 37  |
| Tancred's Weird | 27  | 7   | 44  |
| Telling of Beads | 39  | 1   | 45  |

|     |     |     |     |
| --- | --- | --- | --- |
| **Unique Rings** | **<br><br>Item Level<br><br>** | **<br><br>Rarity<br><br>** | **<br><br>Total Rarity<br><br>** |
| Nagelring | 10  | 15  | 15  |
| Manald Heal | 20  | 15  | 30  |
| Stone of Jordan | 39  | 1   | 31  |
| Dwarf Star | 53  | 10  | 51  |
| Ravenfrost | 53  | 10  | 51  |
| Bul Katho's W.B. | 66  | 1   | 52  |

|     |     |     |     |
| --- | --- | --- | --- |
| **Unique Amulets** | **<br><br>Item Level<br><br>** | **<br><br>Rarity<br><br>** | **<br><br>Total Rarity<br><br>** |
| Nokozan Relic | 14  | 20  | 20  |
| Eye of Etlich | 20  | 5   | 25  |
| Mahim-Oak Curio | 34  | 10  | 35  |
| Saracen's Chance | 55  | 5   | 40  |
| Crescent Moon | 58  | 5   | 50  |
| The Cat's Eye | 58  | 5   | 50  |
| Atma's Scarab | 60  | 5   | 55  |
| Highlord's Wrath | 73  | 5   | 65  |
| The Rising Sun | 73  | 5   | 65  |
| Mara's Kaleid. | 80  | 5   | 70  |

---

**ADDENDUM 2** by Isolde  
'Explaining the two cost columns'

The column 'cost mult' will add cost \* N/1024 to the item price (buy/sell/repair) at some point during the cost calculation.

The column 'cost add' will add directly to the item price at the same point.

A bunch of other things are factored after these, so the above might not be much help in really pinning down the prices, but it's a start. The cost mult and cost add values have NO effect on the gamble price.
