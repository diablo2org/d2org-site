---
title: Increasing the Maximum Character Level
summary: >-
  In this tutorial, you will learn how to reset the maximum character (clevel)
  from 99 to about 120.
keepId: 175
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 9622
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=175'
---
In this tutorial, you will learn how to reset the maximum character (clevel) from 99 to about 120.

1\. FILES YOU WILL NEED:  
**CharStats.txt** - you actually don't need to edit this, but it would be good to adjust the stats gained per level.  
**Experience.txt** \- this is the main file we will edit.

2\. Open up Experience.txt.

Now you will see alot of numbers...these are the numbers of exp you will need from clvl 0 to clvl 99, now what we want is to be able to get to clvl120 right?

First, let's set the limit in the MaxLevel row (row 2 in excel). Change the entry from 99 to 120. As you can see, you can do this individually for every char but I don't think it would be nice if only one class can reach clvl 120 now would it?

After you set the MaxLevel to 120 instead of 99, you will have to add the new level rows. When you scroll down to the bottom of the .txt file, which is at row 102, you will see that the name of the row is 99. In the same column, continue the list. So, below 99 type 100 below that 101 and so on until you reach 120. Now we have set it up to 120, but the exp columns are still empty.

What we can do about this are a few things. The max exp in Diablo II is 4,294,967,295. This can be changed, but we are not after making things more complicated.

There are two things we can do about this. One is to delete all the exp data from lvl 1-99 and type it from scratch. Or, we can do it in a faster way. The exp gets almost ungainable after level 85 when you start needing tons of exp for a single level-up, so delete all entriess after level 85 (row 87) and retype them so that at row 122 (lvl 120) it will reach 4,294,967,295 or less.

**Note**: Make sure you don't have levels which need more exp to reach then the next level. This will make diablo crash since your exp is below the exp needed to reach the level you currently have (it will not crash if you have a level that is lower then you exp in that case it will bump you up to the matching level)

3\. Put the file in your modding subdirectory or put it in your patch\_d2.mpq and test it. How to test it, you ask? Well, if you have chars that are above level 85 and the exp they need to reach lvl 86+ is the exp they currently have then when you kill something, like I said before you will be moved to the matching level. But make sure you dont have a char that has less exp then his level, since in this case the game will always crash.

4\. if you put the limit to about 200, 300 or even 900 then you will need to edit charstats.txt for one simple reason, you dont want 5000 base hp chars to run arround your mod, you will have to balance the stat gains per level so that they dont get inbalanced when above level 99, the best way is to decrease the life per level by half, take as a note that these values are all in 'fourths,' which means that 4 hp per level will be marked as 16 in the file, 2 hp as 8 and so on. do the same for mana and stamina and you should be fine.
