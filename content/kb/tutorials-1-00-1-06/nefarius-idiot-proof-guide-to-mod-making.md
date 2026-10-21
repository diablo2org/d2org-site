---
title: Nefarius Idiot Proof Guide to Mod Making
summary: Nefarius's Idiot proof guide on how to make a mod for Diablo II
keepId: 408
author: Nefarius
credit: by Nefarius (written 2000/2001)
posted: '2006-08-04'
views: 8454
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=408'
---
**Nefarius's Idiot proof guide on how to make a mod for Diablo II**

Contents:

-   What is a mod?
-   Basic stuff you'll need
-   How to make a simple items mod
-   How to make a simple boss mod
-   How to make a simple skill mod
-   Overall gameplay changes
-   Ideas for your own mods

  
**1\. what is a mod?**

A mod is a modification of a game such as Diablo II which gives you new features the original game hasn't given you (like: new items, new monsters and any other changes in regard of game play).

  

**2\. Basic stuff you'll need**

_To make mods you will need certain programs such as:_

-   mpq2k
-   Microsoft excel (or any other spreadsheet program).
-   Paint shop pro (or any other image editing program that allows you to apply palettes to an image).
-   tbl editor
-   hex editor (note: you will need a hex editor only if you plan to hex edit dlls).
-   dc6con
-   psidc6
-   mpqview
-   uniq\_ed91g (note: this is not needed, but it's a cool tool for editing uniqueitems.txt)

Most of this stuff is freeware so you can get it for free, some of the programs in the list are not freeware so you will need to either get a trial or buy the full program.

Here is a link to a page having all the freeware on it [www.phrozenkeep.com](www.d2mods.com)

  

**3\. How to make a simple items mod**

Here you will learn how to ad a new item to the game and make all items dropped rare, and also how to modify unique and set items.

First I'll teach you how to modify set and unique items:  
Open up uniq\_ed91g choose the unique item from the pull-down menu above and then simply start changing its modifiers with the options to your right(now this was not so hard) then press the spawn button (below the unique items stats), then a message will appear and say apply to patchstring.tbl choose yes and you have modified the unique item (now you will need a chareditor to add the unique item to your char and test your new mod).  
To modify sets you will use the same program as above Just below the about button is a invisible button (it will get marked if you scroll over it) the set editor screen will appear (it works similar to the unique editing screen so there is no big need to explain it here).

Make all items dropped by normal monsters become rare:

Open up mpqview and choose load data file form the file pull down, choose d2datall.txt (it comes with the viewer)  
Now choose load archive choose patch\_d2.mpq choose a file called itemratio.txt from the list, press save and open it with excel now a message will appear on the screen saying would you like to {blah blah blah}... press ok now you will see some strange numbers on your screen here is what you have to change.

Change the raredividor and rare columns to 1, now you will have to put the file back into your mpq so it will work in the game. First after you made these changes press save button in excel it will make two messages appear on your screen, ignore them and press ok on both. Now make sure the modified itemratio.txt is inside the same folder as mpq2k, now go down into your start menu and choose run now a small message like thing will appear type command into it and a black command prompt window will appear on your screen, in this window find the folder you keep all the following files in (all files have to be in the same folder for it to work) mpq2k, itemratio.txt, patch\_d2.mpq if you found the folder type mpq2k the program will respond and show you a list of options, now type:

Mpq2k a patch\_d2.mpq itemratio.txt data\\global\\excel\\itemratio.txt  
  
If you did everything correctly you may take the modified patch\_d2.mpq file back into your Diablo II directory, notice when you play the game some of the rare items you have equipped may 'morph' (aka have different modifiers, color etc), and you will find almost only rare (yellow items).

  

Making a new item

Well now after you did some of the most basic modding there is, you probably want to advance to an higher level and do something slightly more challenging, making new items is such a level, first you will need three files that are all found inside your patch\_d2.mpq file (if some of them are not open d2data.mpq with the mpqview) the files are: weapons.txt, treasureclass.txt and string.tbl.

First open up weapons.txt (in excel) and choose the first row (hand axe) right click the row and choose copy and paste as a new row (paste the new row wherever you like, unless you are modding a very old patch, like 1.02 or 1.03) Now lets start changing the new items stats first go to mindam maxdam columns and change it to whatever (note mindam cannot go beyond 100). Next we will have to change the items code go to code column.

Change the code to something else and write that down on a piece of paper so you don't forget it, **NOTE: never ever add a code twice except if you know what your doing!!!**, because it is a cloned hand axe you will be able to buy it at charsi once you are inside the game (note: there some columns that determine which vendor will be able to sell the item called (charsi min, charsi max...).

Next open up treasureclass.txt (you actually don't have to do this but if you don't the item will not drop from monsters you kill) in treasureclass.txt simply add your new code to all the act1 rows you see in here save both files and exit excel.

Next open up the tbl editor (if you don't know what that is read section 2) once open select string.tbl here you will now see an enourmous list of codes at the left part of the screen and what they display inside the game to the right. (note if you don't add a new code to string.tbl the game may mess up and display 'Not xlated call Ken' instead of the name of the string!)

Choose the add code button (+) and type in the code you gave your new weapon (note: string codes are case sensitive, furthermore item codes must be 3 letters long or 3-4 in LoD) after you added the code you will have to add what will be displayed in-game. For this simply add whatever you wish to the right part of the screen. If you did everything until here correctly, all you need to do now is adding the files to your mpq here are the paths to add the files:

Mpq2k a patch\_d2.mpq weapons.txt data\\global\\excel\\weapons.txt

Mpq2k a patch\_d2.mpq treasureclass.txt data\\global\\excel\\treasureclass.txt

Mpq2k a patch\_d2.mpq string.tbl data\\local\\LNG\\eng\\string.tbl

  

**4\. How to make a simple boss mod**

here we will learn how to make a boss mod, so you will be able to fight bosses everywhere!  
For this you will need the following files: Levels.txt and monstats.txt.  
Open up monstats.txt with excel and go down to row 258 (Izual) change spawnable column to 1 and save monstats.txt (note: for those of you that don't know what the difference between a row and a column is, column is a vertical line, and row is a horizontal line).  
Now load levels.txt into excel here you will need to edit a bit more, go to the mtot column and change that to 1 (choose the first row (bloodmoor), called wilderness 1, now go to the columns m1-m25 and change all of them to 0 next go to column m1 and ad 256 into (which is 258 minus 2, aka Izual's ID number) now go to column monumin and monumax and change them both to 1, next go to column utot and change that column to one 1 too, set columns u1-u25 to 0, and then change u1 into 256. Finally save your work and exit excel.  
Now you will need to put the files back into your mpq, like in all cases, run mpq2k an type:

Mpq2k a patch\_d2.mpq monstats.txt data\\global\\excel\\monstats.txt

Mpq2k a patch\_D2.mpq levels.txt data\\global\\excel\\levels.txt

Launch Diablo II and go into the bloodmoor you will be surprised!

> **Note:** for full brief on monstats.txt go to [www.phrozenkeep.com](www.d2mods.com).

For full brief on levels.txt go to my site, Nefarius' D2 Mod Page.

  

**5\. How to make a simple skill mod**

No no no I am not teaching you how to change the skill graphics, if you wanna learn that go to [www.phrozenkeep.com](www.d2mods.com).

Here you will learn how to make all skills available at any level and without the need to add points to weak prerequisite skills to unlock the skills them. You will need only a single file: skills.txt

Open up skills.txt in excel, and go to the reqlevel column set it to 1 for all skills, next go to the columns reqskill1 to reqskill3 and set them all the 0, now save and exit excel, aadd the file to your mpq, under this path:

Mpq2k a patch\_D2.mpq skills.txt data\\global\\excel\\skills.txt

**6\. Overall gameplay changes**

This is not a tutorial like the above, it simply will explain what a overall gameplay change is and how you best make them. Until now all we've done in this tutorial are rediculous changes, that might be fun for a time but not much else, An overall gameplay changing mod OTOH is for example what I did in my XyRAX Mod or what Fecesfaerie did in his Kagero mod, there is really no limit to what you can do.  
Unless you come with rediculous ideas such as adding a new character class or a new act.

  

**7\. Ideas for your own mods**

Easily enough this is all up to you... once you will advance to dll editing nothing is impossible... but for the case you can't imagine: you can make all new skill trees and skills by modifying the existing ones, change the titlescreen, add your own graphics to the game and much more!
