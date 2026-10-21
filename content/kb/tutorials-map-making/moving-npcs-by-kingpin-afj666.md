---
title: Moving NPCs (by Kingpin & afj666)
summary: How to move a NPC out of town.
keepId: 28
author: Phrozen Heart
posted: '2004-08-19'
views: 9750
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=28'
---
You will need this tools and files to accomplish this tutorial.

Tools: (If you don’t have these files you find them on the keep).  
MPQExtractor  
Paul’s win ds1\_editor  
Excel (D2excel/MS excel/staroffice to name a few spreadsheets)

Files to work with:  
monstats2.txt - From patch\_d2.mpq  
caveroom2.ds1 - From d2data.mpq

Required Knowledge to accomplish this tutorial:  
You need to be familar how to work with text files and how to add new objects with WinDs1\_Editor.

Open up monstats2.txt  
Go down to the row where we have Gheed and look for alSel column. This column tells if its a friendly selection you have made or not. You need to add 1 here since we need to make Gheed allied outside town.

Now we are done in this file and we can save and close the file.

Open up Winds1\_edit  
Add Gheed to Caveroom2.ds1 (this is Cave level 2, that are a treasure level to Cave Level1 in Cold Plains). When we have add the object we save the file and close.

copy Caveroom2.ds1 to data\\global\\tiles\\ACT1\\caves copy monstats2.txt to data\\global\\excel

Now we are done with adding moving a NPC out of Town.

Final Word:  
With this we will have two Gheed, one in town and one outside town. If you really want to move out a NPC from town you need to remove the NPC from the town ds1 files.

There exist 4 different versions of a town ds1. These are townE1.ds1, townN1.ds1, townW1.ds1, townS1.ds1.

Also, even that this tutorial is for 1.10. You can make the same thing in 1.09.

You will work with monstats.txt and use IsSel2 column that has the same functionallity as the alSel column in 1.10. This are the only difference between making this work in 1.09 and 1.10.
