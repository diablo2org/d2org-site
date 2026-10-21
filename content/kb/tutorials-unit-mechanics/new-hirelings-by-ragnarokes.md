---
title: New Hirelings (by RagnarokES)
summary: This tutorial details how to add a new rogue variant as a hireling.
keepId: 24
author: Phrozen Heart
posted: '2004-08-19'
views: 11455
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=24'
---
Ok, I'll do a step by step on how I added new hirelings.

I'll use my Act 1 Magic Arrow Rouge as an example.

First up open Hirelings.txt, and once it's loaded go down to the expansion rouges (the ones with 100 in the Version Column). I used the Fire Arrow Rouges as a base for mine, so I selected all the columns for the Fire Arrow - Normal, copied those, and pasted them at the bottom of the file as new rows. I then selected the Fire Arrow - Nightmare columns and copied those, and finally selected Fire Arrow - Hell and copied that row.

Once all the copying was done, I first went to the SubType Column and put Magic - Normal, Magic - Nightmare, and Magic - Hell in each of the corosponding rows (first 3 are normal, 2 under that are nightmare, and the last one is hell).

I, then, went over to the ID column, and put 30 in the Magic - Normal rows, 31 in the Magic - Nightmare rows, and 32 in the Magic - Hell row (this was following blizzard's example with the original hireables. The Fire Arrow ones are 0 for normal, 2 for nightmare, and 4 for hell).

Next I made sure the Act Column was set to 1 (which it should be if you copied from the originals). I also made sure the Difficulty column was set right for each of them ( 1 for Normal, 2 for Nightmare, and 3 for Hell).

I then deleted the HireDesc since I know of no way to add new Hireling Descriptions to the game. By deleting them it will leave the description of the hireling blank so you can know which ones are the new ones in the Hire Screen.

Then finally I set her Skills: Slow Missiles as the first skill, Magic Arrow as the second. You can add more skills to this though (use Skills.txt as reference to add skills to the hireable).

With that done, I saved and exited, and loaded up D2 and checked the Hire Screen and there she was.

Just a note though: Sometimes when you add a hireling to those who have 3 different types of hirelings already (the Act 2 Desert Mercs, and the Act 3 Iron Wolves in particular), it may not show up right off the bat. You may have to go out of town and come back before the hireables will show up on the Hire Screen since the game picks which hireables to put on the Hire Screen at random.
