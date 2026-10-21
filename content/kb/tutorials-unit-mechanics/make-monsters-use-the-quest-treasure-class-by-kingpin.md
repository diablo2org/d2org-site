---
title: Make Monsters Use the Quest Treasure Class (by Kingpin)
summary: >-
  In 1.10 we have a new treasure class for monsters to use. This tutorial is
  meant to show how to use this new treasure class.
keepId: 18
author: Phrozen Heart
posted: '2004-08-19'
views: 9294
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=18'
---
Open up Monstats.txt.

We will use Skeleton1 in this example.

Go to column IF (TreasureClass4). Add Skeleton1Q, remember what name we wrote here since we will use that in TreasureClassEx.txt later.

Go to column IO (TCQuestId). Add 1 to this. This tells how long the Skeleton1 will use his Skeleton1Q tc. When quest1 is complete it will use its normal treasure class.

save and close Monstats.txt.

Open up TreasureClassEx.txt.

Go to the last row and add Skeleton1Q.

Enter the following values:

picks = 1. (drop one item)  
item1 = rvs. (this will drop rejuventation potion)  
term = 0.

For test this you can add Skeleton1 to BloodMoor in Levels.txt and run out to kill some Skeletons and you will see he drops from this treasure class. Complete the quest in Den of Evil and run back to BloodMoor and see that the skeleton will use his normal treasureclass again.
