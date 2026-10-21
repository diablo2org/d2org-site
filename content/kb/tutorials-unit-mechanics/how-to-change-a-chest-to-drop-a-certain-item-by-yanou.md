---
title: How to Change a Chest to drop a certain Item (by Yanou)
summary: >-
  This Tutorial wants to show you a possibility how to get a chest dropping a
  certain item. It’s absolutely softcoded and there no other knowledge needed to
  follow this Tutorial.
keepId: 330
author: Yanou
credit: A Step by Step guide how to manage that problem on the softcoded way ;)
posted: '2005-06-28'
views: 11249
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=330'
---
This Tutorial wants to show you a possibility how to get a chest dropping a certain item. It’s absolutely softcoded and there no other knowledge needed to follow this Tutorial.

Files needed:  
Txt sheet Editor (like AFJ’s or D2Excel)  
AFJ’s Tbl Editor  
MPQViewer  
Misc.txt (in patch\_d2.mpq)  
CharStats.txt / TreasureClassEx.txt (in patch\_d2.mpq)  
String.tbl (this one … no other tbl) (in d2data.mpq)

Step 1: explanation  
We change the item which drops the Horadric Cube Chest in Act 2. The way is to give the real Horadric Cube a new code like “cub” and create a new item with the “box” code. So the chest will drop the new “box”-coded item … So when creating an new Char, the cube must be given to the char right from the beginning.  
You can also let drop the cube by a unique monster … so I will explain both ways …

Step 2a: Cube at the beginning (CharStats.txt)  
Open the CharStats.txt with a txt sheet Editor. Scroll right and look for a free place on the “itemX” , “itemXloc” and “itemXcount” columns. Insert the code “cub” in “itemX” (without the quotes), 1 in “itemXcount” and leave “itemXloc” blank (X is a number between 1 and 10).  
Save the file. This will give your new char at startup the Horadric Cube.

Step 2b: Monster drops the Cube (TreasureClassEx.txt)  
Open the TreasureClassEx.txt with a txt sheet Editor. Look in the first column for a unique monster of your choice (like the Summoner row 840). Go to the column “Item6” (if this is the first free one), insert “cub” (without quotes) there and place a 1 in the following column (here the “Prob6”). Save the file. Now the Summoner will drop the cube. When he sometimes drops no Cube then replace the values till the “Item1” column.

Step 3: Change Cube code and create new Item (Misc.txt)  
Open the Misc.txt with a txt sheet Editor. Go to row 43, the Horadric Cube row. Here go right to the “code” column and change the “box” code to “cub”. Then create a new Item you ever want (I hope you know how, I don’t want to go into details here … there are so many guides and Tutorials for that ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)). You only have to do one thing: you must give this new Item the Code “box” (without quotes).

Step 4: Insert and change the Stringkeys (string.tbl)  
Open the string.tbl with AFJ’s TBL Editor. First search here for the following key: RightClicktoOpen  
Don’t delete this key … but his content like: “Right Click To Open”. Otherwise you will have this string under the name of your new item … so you only have a free line …  
Now search the box key. Here you have to enter like that:  
Right Click to Open  
Horadric Cube  
The Cube will now display that in the game:  
Horadric Cube  
Right Click to Open  
Now create a new key (of course this one you can enter in an other tbl-file if you want ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)) for your new Item and save the tbl-file(s).

Step 5: Insert files...  
Now you have to insert this file into the data folder:  
the \*.txt files into the data\\global\\excel\\  
the \*.tbl file(s) into the data\\local\\lng\\eng\\

Now the Horadric Cube Chest in Act 2 will drop the new Item. One extra important point is the following: in a Multiplayer game the Chest drops this Item so many times how players are in the game. So it can be an Item, which everyone has to get. Its up to you to place the chest where ever you want ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)
