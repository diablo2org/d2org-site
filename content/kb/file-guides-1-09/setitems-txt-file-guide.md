---
title: Setitems.txt File Guide
summary: >-
  Note: any reference to string.tbl can apply to patchstring.tbl or
  expansionstring.tbl if you are mofidying those files instead
keepId: 245
author: Phrozen Heart
credit: by Perfect Cell
posted: '2003-12-02'
views: 7512
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=245'
---
\*Note: any reference to string.tbl can apply to patchstring.tbl or expansionstring.tbl if you are mofidying those files instead

Name (column A) - The name of the full set. This value must be found in the string.tbl on the left side.

version (column B) - Determines if the set is in normal Diablo II (0), or expansion only (100)

level (column C) - The level the character must be before he/she can gain the full set bonus

NumItems (column D) - The numer of items found in the set. From a minimum of 2 to a maximum 6 transform (column E) - A flag that determines whether or not items in the set change color (palette swap). 1 means they do change color (consult color table), and 0 means they do not.

transformcolor (column F) - If transform is set to 1, this column determines the color the items will change to. Valid numbers are 0 to 20. See [this table](color-guide.php) for reference.

Item1 (column G) - 3 letter item code of the first item in the set (from weapons.txt or armor.txt)

Item1 Suffix (column H) - The name of the set item found in the string.tbl; the game uses the right side string for the name of the item found in game. Set them both to the same string to avoid confusion ;)

Item1 Rarity (column I) - The relative rarity of the item compared to other items of the same item type (eg. if you have 8 sets each containing a set, use this column to set how rare each ring is); set to 1 in all cases except jewelery.

Item1 Add (column J) - Used when making items that gain green bonuses when other pieces of the set are collected. Must be set to 0, 2, 3, 4, 5 or 6.

|     |     |
| --- | --- |
| Value | Means |
| 0   | Does not get green bonuses, but instead has a maximum of 7 bonuses that always spawn with the item |
| 1   | Item gains 1 green bonus based on which item is currently being worn. It will gain bonus CodeA with item 2 being used, CodeB with item 3 being used. Only tested on 3 item set. |
| 2   | Item gains green bonuses once 2 items are worn. It will gain further bonuses for 3, 4, 5 and 6 items if you have codes in CodeB, CodeC, CodeD, and CodeE columns |

Item1 Lvlreq (column K) - The level required to equip this item, set to 0 for no level requirement.

Item1 cost mult (column L) - A cost multiplier used when dealing with buying and selling the item from vendors.

Item1 cost add (column M) - A cost multiplier used when dealing with buying and selling the item from vendors.

I1Code1 (column N) - The first magic modifier that this item gets when found.

I1Param1 (column O) - A paramater column used with some magic modifiers like dmg-pois (length), freeze (min % freeze chance), etc

I1Min1 (column P) - The minimum value for magic modifier 1; when the 'freeze' modifier is used, this column acts as the maximum % chance of freezing.

I1Max1 (column Q) - The maximum value for magic modifier 1; use this to create ranges on items.

I1Code2 (column R) - The second magic modifier that this item gets when found.

I1Param2 (column S) - same as I1Param1, except for modifier 2

I1Min2 (column T) - same as I1Min1, except for modifier 2

I1Max2 (column U) - same as I1Max1, except for modifier 2

I1CodeA (column V) - If the 'Item1 Add' column is set to 2, this modifier will kick in when 2 items of the set are collected. If Item1 Add is set to 1, it gives a single green bonus when item 'A' is equipped with this item.

I1ParamA (column W) - same as I1Param1, except for modifier A

I1MinA (column X) - same as I1Min1, except for modifier A

I1MaxA (column Y) - same as I1Max1, except for modifier A

I1CodeB (column Z) - If the 'Item1 Add' column is set to 2, this modifier will kick in when 3 items of the set are collected. If Item1 Add is set to 1, it gives a single green bonus when item 'B' is equipped with this item. It gives a different green bonus than the bonus above for CodeA.

I1ParamB (column AA) - same as I1Param1, except for modifier B

I1MinB (column AB) - same as I1Min1, except for modifier B

I1MaxB (column AC) - same as I1Max1, except for modifier B

I1CodeC (column AD) - If the 'Item1 Add' column is set to 2, this modifier will kick in when 4 items of the set are collected. If Item1 Add is set to 1, it gives a single green bonus when item 'C' is equipped with this item. It gives a different green bonus than the bonus above for CodeA or CodeB <--\*Untested

I1ParamC (column AE) - same as I1Param1, except for modifier C

I1MinC (column AF) - same as I1Min1, except for modifier C

I1MaxC (column AG) - same as I1Max1, except for modifier C

I1CodeD (column AH) - If the 'Item1 Add' column is set to 2, this modifier will kick in when 5 items of the set are collected. If Item1 Add is set to 1, it gives a single green bonus when item 'D' is equipped with this item. It gives a different green bonus than the bonus above for CodeA, CodeB or CodeC <--\*Untested

I1ParamD (column AI) - same as I1Param1, except for modifier D

I1MinD (column AJ) - same as I1Min1, except for modifier D

I1MaxD (column AK) - same as I1Max1, except for modifier D

I1CodeE (column AL) - If the 'Item1 Add' column is set to 2, this modifier will kick in when 6 items of the set are collected. If it was set to 0, this is the 7th bonus on the item. If Item1 Add is set to 1, it gives a single green bonus when item 'E' is equipped with this item. It gives a different green bonus than the bonus above for CodeA, CodeB, CodeC or CodeD <--\*Untested

I1ParamE (column AM) - same as I1Param1, except for modifier E

I1MinE (column AN) - same as I1Min1, except for modifier E

I1MaxE (column AO) - same as I1Max1, except for modifier E

Item2 (column AP) to I6MaxE (column HG) are identical in nature to the column descriptions found above for Item 1.

PCode2 (column HH) - The partial set bonus given to the character when 2 items are worn (this bonus is in gold, and is different than the 'green' item bonuses)

PParam2 (column HI) - A paramater column used with some magic modifiers like dmg-pois (length), freeze (min % freeze chance), etc

PMin2 (column HJ) - The minimum value for magic modifier PCode2; when the 'freeze' modifier is used, this column acts as the maximum

% chance of freezing. PMax2 (column HK) - The maximum value for magic modifier PCode2; use this to create ranges on items.

PCode3 (column HL) to PMax5 (column HW) - identical in nature to PCode2 to PMax2 columns, but are for partial set bonuses when using 3, 4 and 5 items in the set.

FCode1 (column HX) - The first bonus given to the character when the full set is being worn. This bonus is in gold and is gained in addition to the partial set bonuses. A maximum of 6 bonuses can be given when a full set is equipped, the other bonuses are covered in columns FCode2 (column IB) to FMax6 (column IU).

FParam1 (column HY) - A paramater column used with some magic modifiers like dmg-pois (length), freeze (min % freeze chance), etc

FMin1 (column HZ) - The minimum value for magic modifier FCode1; when the 'freeze' modifier is used, this column acts as the maximum % chance of freezing.

FMax1 (column IA) - The maximum value for magic modifier FCode1; use this to create ranges on items.
