---
title: TreasureClassEx.txt File Guide
summary: >-
  group = treasureclasses of the same type are in the same group (example all
  the Act Equip X are all in the group 1)
keepId: 356
author: Nefarius
credit: by HellSpawn
posted: '2005-10-18'
views: 14134
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=356'
---
TreasureClassEx.txt

Treasure Class = Name of the treasure class

group = treasureclasses of the same type are in the same group (example all the Act# Equip X are all in the group 1)

level = level of the treasure class. When a monster drops an item it uses its own treasure class form monstats.txt. Now if the monster's level is high enough it might drop an item from the next treasure class in the same group instead (ie. the monster's TC is normally 'Act5 Equip C' but for some reason it's level is increased. Now it can drop an item from the 'Act1 Equip (N) A' if the monster's level is as high as or higher than the new TC's level, in this case 38)

Picks = how many items will drop, positive value drops random items from item fields while a negative value makes the drops more specific starting from 'item1' dropping the defined number of drops for it, then the defined number for 'item2', then 'item3' etc. until the 'picks' value is reached

Unique = chance of the item to be unique, counted in fractions of 1024

Set = chance of the item to be set, counted in fractions of 1024

Rare = chance of the item to be rare, counted in fractions of 1024

Magic = chance of the item to be magic, counted in fractions of 1024

NoDrop = the chance of that nothing will drop, chance = prob/TotalProb  
(TotalProb = all Prob# fields + NoDrop)

Item1-10 = code for the item or itemtype or name for another treasure class that should be dropped

Prob1-10 = the probability of the item to drop, chance = prob/TotalProb  
(TotalProb = all Prob# fields + NoDrop)

SumItems, TotalProb, DropChance = these columns are not used by the game, used for additional info on the corresponding values

Term = end of line
