---
title: Making A New Preset Level
summary: Updated 1/14/13 - How to make a new preset level
keepId: 315
author: Xenast
posted: '2007-05-04'
modified: '2021-12-16'
views: 19273
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=315'
---
Ok, before I start it should be noted that a similar tutorial exists by ArCh4Ng3. His tutorial explains how to add a new maze level. This tutorial will show you how to add a new preset level. While both are similar, there is some differences that can cause you some headaches if you don't know them. I also intend to go more in depth with this tutorial, because understanding what you are doing is a vital part of modding. It should also be noted this tutorial is not meant for newbie mappers, some mapping experience is a must.  
For the purpose of this tutorial we will make a new Act 1 outdoors area.

**Tools Needed:**

-   MPQ Extraction Tool: [Download](https://d2mods.info/forum/downloadsystemdownload?id=113)
-   TXTDC6: [Download](https://d2mods.info/forum/downloadsystemdownload?id=1362)
-   Excel Spreadsheet Editor: [Download](https://d2mods.info/forum/downloadsystemdownload?id=145)
-   String Table Editor: [Download](https://d2mods.info/forum/downloadsystemdownload?id=1477)
-   Win\_ds1edit: [Download](https://d2mods.info/forum/downloadsystemdownload?id=127)
-   Win\_ds1edit GUI Loader: [Download](https://d2mods.info/forum/downloadsystemdownload?id=1043)
-   DT1 Mask Calculator: [Download](https://d2mods.info/forum/downloadsystemdownload?id=1512)

**I. Installing extended levels plugin**  
In order to add a new level you need to have a plugin to extend levels.txt, or else your new level will crash. Depending on your version you will need a different version of the plugin, they are as follows:

-   [1.10](https://d2mods.info/filecenter/dload.php?action=file&file_id=1099)
-   [1.11b](https://d2mods.info/filecenter/dload.php?action=file&file_id=1434)
-   [1.13c](https://d2mods.info/forum/viewtopic.php?f=8&t=56507)

Copy the provided dll's into your Diablo II directory.

**II. Levels.txt:**

Ok, first thing to do is open levels.txt  
Now, go to the end of the file and make a new row. Now find the Tristram row, and copy it over to our new row.  
Now that you have a base row, time to make it work for our new level. Here's an explanation of the columns that must be edited in order for your new level to work. Any columns unmentioned don't need to be changed for our level to work.  
I will put the values we will use in green text.

~Name: the name of your new level Act 1 - New Level  
~Id: This is the id of your level, used for connecting warps to your level. Input the next available id, the id must be consecutive to that last one 133  
~Pal: This tells the game what pallet to use for your level. Using palletes from other acts will cause color problems. (0= Act1, 1= Act2, 2= Act3, 3= Act4, 4= Act5) 0  
~Act: This tells the game what act your map is in. (0= Act1, 1= Act2, 2= Act3, 3= Act4, 4= Act5) 0  
~Layer: Field related to automaps. Enter the next available value here. Like the level id, these values must be consecutive 100  
~SizeX: This is the y axis size of your level 50  
~SizeY: This is the x axis size of your level 50  
\*_For Size (N) and Size (H) columns use the same values as your original Size X and Size Y_  
~OffsetX: The maps X position in the worldspace 500  
~OffsetY: The maps Y position in the worldspace 1500  
~LevelType: This is the type of level, taken from lvltypes.txt 2  
~LevelName: This is the string key for the name of your level New Level  
~LevelWarp: This is the string key for the entry name of your level To The New Level  
~Position: Set to 0  
~EntryFile: This is the .dc6 text that is displayed upon entering your new level, more on this next step a5l28

Now save the file in the directory: Data/Global/Excel/

**III. EntryFile:**

Ok, for this step we will make the entry .dc6 text I mentioned in the levels.txt step.  
Use TXTDC6 to make a new entry text that reads: _entering The New Level_  
Now, make sure the file is named a5l28, and put it in this folder: Data/local/UI/Eng/expansion/

All new entry files _must_ be put in that folder!

**IV. Adding the Strings**

Open up string.tbl and add the following entries:

Key: New Level  
Text in key: New Level

Key: To The New Level  
Text in key: To The New Level

**V. Lvlprest.txt:**

Ok, begin by making a new row. Then find the Tristram row and copy it and paste it into our new row. As with levels.txt I will go over the columns that you need to work with when making a new level.  
I will put the values we will use in green text.

~Name: Use the name we used in levels.txt Act 1 - New Level  
~Def: Honestly I am not sure what this does, but like the id in levels.txt it must be consecutive 1090  
~Levelid: The level id, taken from levels.txt 133  
~File1: This is the directory where your ds1 file is located Act1/outdoors/newlevel.ds1  
~Dt1Mask: This column tells the game which dt1 files to use, calculated using lvltypes.txt 31  
~Expansion: Tell the game if the map is from the expansion or not 1

Now save the file in the directory: Data/Global/Excel/

**VI. Making the DS1**

Ok, extract the Tristram ds1 file from d2data.mpq (tri\_town4.ds1)  
Use the GUI Loader for win\_ds1edit to open the file. On the menu, go to 'View'. From here, click 'Parameters'. You should now see a resize option become available. Select the box and resize the map to be X: 51 and Y: 51. Now go to 'File', and click 'Run'. Ok, now that you have the map open clear the ds1.  
Delete all the objects and all the tiles. Once you have a blank ds1, save it and exit the editor. Now, rename the ds1 to newlevel.ds1.  
Now move the ds1 to this directory: Data/Global/Tiles/Act1/Outdoors/

Do not try to open the renamed file with the editor just yet.

**VII. Configuring the editor to handle the new DS1**  
Open up the GUI Loader. Go to 'Edit' and select 'Loaders ini'.  
From here click the 'Add' button. Here is what each column is for. As with before, the text in green is what we will use.

~File Name: The name of the DS1 file newlevel.ds1  
~Level Name: The name of the level, taken from levels.txt Act 1 - New Level  
~Game Path: The directory where the ds1 is stored Data/Global/Tiles/Act1/Outdoors/  
~Lvltype ID: The id of the lvltype the map uses 2  
~Lvlprest Def: The value in the 'Def' column of lvlprest.txt 1090

Now click 'Ok' and your done. You should now be able to open your new level with the editor and begin editing it!

**Appendix: Related Errors**  
_Note: These error's are for version 1.10, 1.11 and above may/will have different error messages_

Ok, here are some common errors you might come across:  
_Thanks to the Phrozen Keep community for documenting these_  

> Assertion Failure  
> Location : D2Common/DRLGPreset.cpp, line #2817  
> Expression: Level labeled as Preset, but no preset claims the level

Level is not properly assigned as a preset level, check drlgtype column in levles.txt and make sure you have added the level to  
lvlprest.txt  

> Warning  
> Location : D2Common/DRLGPreset.cpp, line #X  
> Expression: ptRegion->ptFile->nSizeX == ptRegion->tCoords.nSizeTileX

The actual size of the .ds1 is different from what is put in levels.txt.  

> Assertion Failure  
> Location : D2Hell/SRC/Archive.cpp, line #X  
> Expression: hFile

The Dt1Mask in lvlprest.txt is invalid. Either it has been calculated wrong or lvltypes.txt has incorrect entries.

**Appendix: Related Resources:**

-   [lvlprest.txt fileguide](/kb/file-guides/lvlprest-txt)
-   [levels.txt fileguide](/kb/file-guides/levels-txt)
-   [Worldspace documentation #1](https://d2mods.info/forum/viewtopic.php?f=81&t=9098)
-   [Worlspace doc #2 /misc info](https://d2mods.info/forum/viewtopic.php?f=4&t=60380)
-   [Advanced winds1 edit doc](http://paul.siramy.free.fr/_divers/ds1/doc/tut01/index.html)
