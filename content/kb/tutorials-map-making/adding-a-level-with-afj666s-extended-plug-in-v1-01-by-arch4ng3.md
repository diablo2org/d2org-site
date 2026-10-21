---
title: Adding A Level With AFJ666s Extended Plug-in v1.01 (by ArCh4Ng3)
summary: >-
  Describes how to add new levels (You need to have AFJs extended level plug-in
  installed to be able to add completely new levels)
keepId: 282
author: kingpin
posted: '2004-08-19'
modified: '2018-01-06'
views: 16221
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=282'
---
Please note that this is an intermediate level tutorial, you will need to know a bit of modding to actually do this efficiently

What you will need:  
WinMpq (or any other mpq extractor)  
TXTDC6 by Joel grab it there: [txtdc6-install](http://d2mods.com/filecenter/dload.php?action=file&file_id=1362)  
AFJ TBL file editor  
Spreadsheet (D2Excel, MS Excel, Afj Sheet editor or any other spreadsheet of your choice)  
Your Brain

Files needed:  
Levels.txt  
lvlMaze.txt  
data/local/ui/your d2 language/expansion/level.txt  
patchstring.tbl

Ok let\\'s start!

1\. I suggest starting with the entry file. So let\\'s go!  
For this step you will need TXTDC6, so go to its directory and edit test.txt like this

A5L28 Entering My new Level

Why such?

A5L28: This tells what the name will be for the new dc6 file that will be created by the tool.

Entering my new Level: This is the text that will be displayed when entering your new level. This string is created as an image in the dc6 file \\'A5L28.dc6\\'.

All new entryfiles need to be placed in the \\'data/local/ui/your d2 language/expansion/\\' directory for all ID over 132!

2\. Ok, now let’s start the hardcore part!

For this tutorial will clone the cave 2(aka the Cave Level 1) level  
So open levels.txt  
Go to line 11 (ID = 9), copy the whole line and copy it to the end of the file

Now you will need to do these changes to your new line:

ID: 133(first ID after after vanilla LoD...IDs MUST be consecutive, if not the game will crash)  
Layer: 100(next after number 99 of the original LoD). Layer is an unique ID for your automap. If you use same LayerID as another level you will see automap is drawn over each other.  
OffsetX: 500 (offset sets the position off the ds1 in the worldspace)  
OffsetY: 1500 (THX Kingpin for pointing me to those offsets)  
Vis0: 3(So it will be linked with Wilderness 2(cold plains))  
Level Name: My New Level(stringkey that points to one of the string tables -> name displayed on upright corner when the mini map is shown)  
Level Warp: To the New Level(stringkey that points to one of the string tables -> name of the level when u highlight te entrace in the cold plains)  
Entry File: A5L28 (unique entry file, made at step 1)

Now go to the original Cave Level 1 (line 11 or ID = 9) ang change this:  
Change all Vis to 0 and all warps to -1(just to make sure theres no collision between our new level and the actual Cave2)

Now go to wilderness 2 (lvl 4) and change those:  
Change Vis3 to Vis6 from 9 to 133 (So that colod plains will link to our new level)

Now you are finished with Levels.txt save and close it

Vis/Warp what are that?  
Vis are used to link each level together, so the game knows to what level you are going to when you click on a level.

Warp is the visual graphics that will be showed when you move your mousepointer over an entrance.

3\. Open lvlMaze.txt  
Copy Cave 2 line (line 2) to the end of the file  
All you will need to change on that new file is the \\'level\\' column to 133  
This will actually make our new level available as a maze

Now save and close lvlMaze.txt

4\. Now open patchstring.tbl and add 2 entries (all without quotes)  
String Key 1: \\'My New Level\\'  
Text in key 1: \\'My new Level\\'  
String Key 2: \\'To The New Level\\'  
Text in key 2: \\'To The new Level\\'

Those are references to the LevelName and LevelWarp from levels.txt, this way u won\\'t get \\'-not xlated call ken\\' stuff

Save the file and close it

\*\*\*\*DRIIIIIIIIING\*\*\*\*  
The bell have just rang.  
Today\\'s course is finished  
If you have done everything right you should have the cold plains linked to your brand new Level!  
Hope it helped you ;)

ArCh4Ng3
