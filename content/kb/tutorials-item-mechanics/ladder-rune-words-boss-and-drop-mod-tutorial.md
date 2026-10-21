---
title: 'Ladder Rune-Words, Boss and Drop Mod Tutorial'
summary: >-
  This tutorial is meant for absolute beginners, it'll teach you how to enable
  the realm runewords in single player, how to make a drop mod and how to make a
  boss mod.
keepId: 417
author: Nefarius
posted: '2007-05-04'
views: 21898
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=417'
---
Realm Rune-Word, Drop and Boss Mod Tutorial

Introduction

This tutorial is meant for absolute beginners, many newbies seam to have their goal set at one of these three things, yet it seams that many of them experience great trouble doing so, no more. This tutorial will work on 1.10, 1.110 and 1.11b and probably all future versions.

### -

Step One - Setting up the Mod-folder.

This section will teach you how to make a new mod folder to use for your mod, if you already know this you can just as well skip this step.

First of all, make a new folder in your Diablo II directory, inside this directory you create another folder. So that the path looks like this: C:\\Program Files\\Diablo II\\TestMod\\

Now, add additional folders until it looks like this: C:\\Program Files\\Diablo II\\TestMod\\Data\\Global\\Excel\\

In the end, it the folder structure must look like this in explorer:  

C:\\ \_

      Program Files \_

                      Diablo II \_

                                  TestMod \_

                                            Data \_

                                                   Global \_

                                                            Excel

### -

Step Two - Setting up the Mod-Shortcut.

This section will teach you how to set up a mod shortcut, to run your mod without changing the original game, if you already know how to do this you can skip to step three.

First, copy your Diablo II shortcut on the desktop and rename it to TestMod, then right click and select properties. Two fields are of interest to us, change them to what I've changed them here:

start in: C:\\Program Files\\Diablo II\\TestMod\\  
target: 'C:\\Program Files\\Diablo II\\Game.exe' -direct -txt

The first executes Diablo II inside your mod folder, and the second one tells the game to read data from within your new folder (and the second switch, txt, tells it to compile bin files of your edited txt files).

Thats it, the game is set to use your new directory as the primary data source.

### -

Step Three - Getting the files from the MPQ.

This section will teach you how to extract the needed files from the MPQ, if you know this already, you guessed it, skip to step four.

First of all, get [MPQView](https://d2mods.info/forum/dload.php?action=file&file_id=113) from our file center. This is the fastest and easiest to use MPQ Extractor out there. Next, [grab the most recent data file](https://d2mods.info/forum/dload.php?action=file&file_id=1329) (remember, Blizzard doesn't remove files from the MPQs, so a data file for 1.11b is useable with all versions of the game, be it 1.00 or whatever).

Extract MPQView and the data file, then run the program (MPQVIEW), first click FILE > OPEN DATAFILE and select the data file (not the MPQ, the txt file you downloaded before). Then, click on the large OPEN ARCHIVE button, and select PATCH\_D2.MPQ.

### -

Step Four - Enabling Ladder Runewords.

This section will teach you how to enable the ladder runewords.

You should have Patch\_D2.mpq open in MPQView, if not look at step four. scroll downward in the file list, until you find data\\global\\excel\\runes.txt. Extract this file to your own EXCEL folder (C:\\Program Files\\Diablo II\\TestMod\\Data\\Global\\Excel\\). Now open the extracted Runes.txt with a spreadsheet program, such as Microsoft Excel or Open Office Calc, if you don't have either of these spreadsheets, you can use [AFJ666's Sheet Editor](https://d2mods.info/forum/dload.php?action=file&file_id=1054) or [D2Excel](https://d2mods.info/forum/dload.php?action=file&file_id=145).

After having the text files open infront of you, look at all those runewords that are currently Ladder-Only, you will notice, all of them have the SERVER column set to true (1), so to enable them in single player, you set this to false (0). Thats it! After setting all of them to 0, the game will allow you to make these runewords in SP as well.

Save the text file as Tab-Delimited Text in Excel (press OK on both messages it will display!), then run the game from your new shortcut. You will see the game creates new bin files inside your mod folders excel directory.

### -

Step Five - Making a Drop Mod

This section will teach you how to make a simple drop mod.

First extract the following two files (the process of extracting is explained in step four) into your mods EXCEL folder. The files to extract are UniqueItems.txt and TreasureClassEx.txt.

Open UniqueItems.txt in your spreadsheet program (see step four for details) and set the NOLIMIT column and the LVL column for all of the unique items to 1. What this does, first we set the NOLIMIT boolean to true for all items, this will allow the game to drop them more then once. Next, we set the qLvl (the quality level, which is the minimum level a monster must be to drop this item) to 1, so that all monsters that can drop the base item will be able to drop its unique form. We're done with this file, save it and continue.

Next, open TreasureClassEx.txt, in here, set the UNIQUE, SET, RARE and MAGIC columns to 1024, for all treasureclasses, this will make the game always drop unique items (unless the base item has no unique form). Next, select the contents of the NODROP column, set all of the entries in this column to 0, this will make the game always drop an item when this class is picked. Save this file and exit the spreadsheet.

Now its time for the test, run the game from your new shortcut and go kill some monsters ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)

### -

Step Six - Making a Boss Mod

This section will teach you how to make a simple boss mod.

First extract the following two files (the process of extracting is explained in step four) into your mods EXCEL folder. The files to extract are MonStats.txt and Levels.txt.

Open MonStats.txt in your spreadsheet program (see step four for details) and scroll down to row 158, this is Andariels record (as you should be able to see for yourselves), scroll to the right, until you hit the RARITY column, set it to 1 (if it is set to 0, this means the monster will never be selected by the monster selection routine), continue scrolling to the right, until you find the ISSPAWN column, set it to true (1), this will tell the game that this monster can be spawned. We're done with Andariel, repeat these steps with rows: 213 (Duriel), 244 (Mephisto), 245 (Diablo) and 256 (Izual) \[or with any other boss you want, like Radament etc\]. After you're done, save the file and continue.

Next, open Levels.txt, for now we will only alter the Blood Moor, you will be able to alter other areas on your own later. Scroll right, to the three MONDEN columns, (first is for normal, second for nightmare, third for hell, but this should be clear), set all three of them to 3000, this controls how dense monster groups will be next to each other, in general, the higher the value, the more monsters. Then scroll to the MON1-10 columns, set the first to diablo, the second to andariel, the third of mephisto, the fourt to izual and the last one to duriel. Repeat this step with UMON1-10 and NMON1-10 Then, change NUMMON to 5, so that it can select all five bosses at once. Thats it, we're done with this too. Save the file and exit.

Now test your skills again, launch the game from your new shortcut and kill some prime evils this time ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)

### -

Thats all for this tutorial, this should be enough to get you started.
