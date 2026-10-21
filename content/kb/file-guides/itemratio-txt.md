---
title: ItemRatio.txt
summary: >-
  ItemRatio.txt is used to determine the quality of dropped items. The game
  decides the quality of item (unique/.../lowquality) by first testing if it
  isunique, if not it tests if it is rare, if not…
keepId: 320
author: Phrozen Heart
credit: 'by Ulmo, restyled by Ogodei'
posted: '2005-04-06'
modified: '2018-10-24'
views: 31179
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=320'
---
**_ItemRatio.txt is used to determine the quality of dropped items. The game decides the quality of item (unique/.../lowquality) by first testing if it isunique, if not it tests if it is rare, if not ..., and if all fail the item of "low quality". ItemRatio.txt controls the probabilities of success of successive tests.  
The order is :  
Unique > Set > Rare > Magic > Hi quality > Normal > Low quality.  
As far as I know, this file is not using/used by other .txt files. But the game has to know is the current item is uber/elite, and if it is class-specific, which involve [Armor.txt](/kb/file-guides/armor-txt)/[Misc.txt](/kb/file-guides/misc-txt) /[Weapons.txt](/kb/file-guides/weapons-txt-file-guide) and [ItemTypes.txt](/kb/file-guides/itemtypes-txt). The game also checks item’s qLvl (“level”  
column in Armor.txt/Misc.txt/Weapons.txt) and monsters’ levels (this use [MonStats.txt](/kb/file-guides/monstats-txt) and [Levels.txt](/kb/file-guides/levels-txt) but  
exact behaviour is out of the scope of this file guide)._**.

COLUMN DESCRIPTIONS :

**Function** : Human reference only. The game reads the next 3 entries to choose the proper line.

**Version** : 0 is for Classic, 1 is for Expansion

**Uber** : 0 for normal items, 1 for exceptional / elite items.

**Class Specific**: 1 if the item has a type (or equiv) which is "Class Specific". Or non-empty column "class" in ItemTypes.txt. I don't know what is exactly checked. 0 if the opposite.  
NOTE: D2 class specific items don't appear in vanilla. The line used if you make such items is LoD/class specific (I have tested).

**Unique** : Base chance for the item of being unique. The higher, the rarer.

**UniqueDivisor** : This field influences monster level / item quality level. High value counter the bonus of high level monster giving better items (see Mishy23's note below).

**Unique - UniqueDivisor - UniqueMin - Rare - RareDivisor - RareMin - Set - SetDivisor - SetMin - HiQuality - HiQualityDivisor - Normal - NormalDivisor**: These fields influence monster level / item quality level. High value counter the bonus of high level monster giving better items (see Mishy23's note below).

Let's see how the game use this: when a drop occurs, the game follows the TC until getting a base object. For example a "skull cap". Then it test if the item become unique/set/rare/.../Low quality. For this it uses the proper line of ItemRatio.txt, the MF bonus of the character who made the drop (character + minion if a minion killed the monster), and the maximum values of unique/set/magic/rare crossed while following TreasureClassEx.txt (the maximum value, not the first seen, not the last non null, not the sum, ... Heavily tested by Paul). The game decides the quality of item (unique/.../lowquality) by first testing if it is unique, if not it tests if it is rare, if not ..., and if all fail the item of "low quality".  
The order is:  
Unique > Set > Rare > Magic > Hi quality > Normal > Low quality

**The unique test :**  
The base probability of being unique is probability = 1 / Unique, Unique taken from ItemRatio. Then this base chance is decreased by (MonsterLvl - QualityLvl) / UniqueDivisor , where QualityLvl is the level read in armor/misc/weapons. Now this value is multiplied by 128 (some extra precision).  
And comes the effect of EMF (MF with diminishing return) : chance = chance \* 100 / (100 + EMF). Chance is compared with UniqueMin from  
ItemRatio.txt (so note that XXXmin is in essence 128 time bigger than XXX). And finally the TC bonus is applied : chance = chance - (chance \* unique\_factor) / 1024 , where unique\_factor is the maximum value of "unique" seems in TreasureClassEx.txt. Now the games picks a random number between 0 and chance-1. If this random number is less or equal than 127, the objet is unique. Same procedure is used (but with different diminushing return) for set/rare/magic tests. And also for Hi quality/normal, but without MF, without XXXmin, and without XXX\_factor.

A notes on XXXDivisor :  
Well **Mishy23**explained it very  
well so I'll just be lazy and quote him :

Just to expand on RareDiv. When it comes to determining what rarity(magic/rare/unique) item is, the difference in itemlevel (qlvl) and monsterlevel (mlvl) make a large difference in overall determination. Thats why its easier to get magic items and higher on lower level items, then it is on higher level  
objects. This is why you usually see white items first when new itemtypes become available, and magic versions dont drop withmuch regularity until after your fighting higher level monsters. As Ulmo said (MonsterLvl - Qlvl) / UniqueDivisor is the formula, so the if a very high level monster drops a very low level base item, well this raisies chance item can be magic, rare,etc... while if a medium level monster drops a medium level base item, well that difference is very small and the chance to get magic, rare, etc...is not modified very much at all. RareDiv, makes this level difference between monster and item its dropping matter less the higher the div is. Div does not in itself divide the overall chance for dropping magic, rare, unique, just the modification of this chance by the monsterlvl-itemlvl curve.  
Also, you can think of XXXmin as a way to counter too high values of MF.  
Effective MF formulae :  
For magic, it is just EMF = MF  
For Rare/Set/Unique, Diminushing return is  
only used if MF > 10. In this case, EMF = MF\*X/(MF+X)  
, i.e. going slower and slower from 0 to X. With X = 250 for uniques, X = 500 for Sets, and X = 600 for Rares.

Example :  
A ring (qlvl = 1) dropped by Andarielle in hell (Mlvl = 78)  
with +300% MF (I use here the QuestDrop).

So base chance is 400,  
then becomes 400 - (78 - 1)/1 = 323  
extra-precision : chance = 323\*128 = 41344  
MF : chance = 41344 \* 100 / (100 + 136) = 17518  
UniqueMin is lower than chance and is ignored.  
for Andarielle questdrop in hell  
(TC = "Andarielq (H)"), Unique\_factor = 995  
So chance = 17518 - (17518 \* 995) / 1024 = 496  
This means 128/496 = 25.81% chances of being unique.

Acknowledgements :  
First Myrdinn who teached  
me almost everything I know, but also Paul Simary  
for long discussions and many testing, and Joel for his both knowledge and disponibility.
