---
title: Spawning the Butcher
summary: >-
  (note I didn’t test it on v1.08+ yet it should work thought use this on v1.06
  if you don’t want to run at risk of failure)
keepId: 392
author: Nefarius
credit: by Nefarius
posted: '2006-06-21'
views: 5402
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=392'
---
(note I didn’t test it on v1.08+ yet it should work thought use this on v1.06 if you don’t want to run at risk of failure)

In this tutorial I will explain to you how to make the butcher like I did in XyRAX.

We will need 4 files  
Monstats.txt  
Montype.txt  
SuperUniques.txt  
String.tbl

open monstats.txt and go down to the firebeast row (the firebeast is a unused monster with missing frames, we will only use its row) remember where the row is and go down to the smiths row or to heps’ row, but its better to do the smith since that’s what I did and I don’t know what it will do with heps’ row even they are the same gfx, copy the smiths row and paste it above the firebeast row.

Now adjust the stats to whatever you like remember the row number its better you right the number of the firebeasts’ row down.

Open montype.txt and go down to the smiths row (note this goes like in monstats.txt, so the rows have the same number as in monstats.txt and the same order) Copy the entire row in here as well, paste it above the firebeasts’ row in here exactly like you did in monstats.txt, now change the TOKEN column entry for this row to BU note also this is case sensitive so make sure you type BU and not Bu or bU or anything else then BU.

Close montype.txt and monstats.txt and save it

Open superuniques.txt and go to pitspawn fouldogs’ row (that’s the jail levels boss) change his type column into the column number of the firebeasts’ row But –2 so if it would be lets say 160 you would enter 158. set his abilities to whatever you like set the MinGrp/MaxGrp columns both to 0 you don’t want a whole army of butchers do you! Save your work

Open string.tbl with a tbl editor, and enter the code you gave the butcher in monstats.txt (in the name column) be careful its case sensitive! Now enter the name you want it to display at in the game.

Next in string.tbl search for pitspawn fouldog and change that into the butcher. If you did every thing right you will now have the butcher in jails, if you run v1.06 set his NoMap column to 1 in monstats.txt so you will spot him faster!
