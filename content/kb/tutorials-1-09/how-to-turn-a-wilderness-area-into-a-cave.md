---
title: How to Turn A Wilderness Area into a Cave
summary: You will need this tools and files to accomplish this tutorial.
keepId: 206
author: Phrozen Heart
credit: by Kingpin
posted: '2003-12-02'
views: 6442
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=206'
---
You will need this tools and files to accomplish this tutorial. 

Tools:   
(If you don’t have these files you find them on the keep). 

MPQExtractor   
Excel (D2excel/MS excel/star office to name a few spreadsheets) 

Files to work with:   
Levels.txt   
LvlMaze.txt 

Extract your files:   
When you reading this tutorial I suppose that you already know how to extract your files from an mpq. 

You found these files in patch\_D2.mpq/d2exp.mpq or d2data.mpq (if you are only for classic modding). 

Extract these files: 

From patch\_D2.mpq   
data\\global\\excel\\Levels.txt 

From D2exp.mpq   
data\\global\\excel\\LvlMaze.txt

---

The goal is to change Tamoe Highland into a cave. 

In levels.txt go down to Act 1 - Wilderness 6 (has id 7). 

We will change the following to the values below: 

SizeX: 200   
SizeY: 200   
OffsetX: 1000   
OffsetY: 1000   
Rain: 0   
IsInside: 1   
DrlgType: 1   
LevelType: 3   
SubType: -1   
SubTheme: -1   
Vis0: 2   
Vis4: 8   
Vis3: 0   
Vis5: 0   
Vis6: 0   
Warp0: 4   
Warp4: 5   
Warp3: -1   
Warp5: -1   
Warp6: -1 

What have we done here? We have change SizeX/Y to have same size as a normal random Cave. We also need to change the OffsetX/Y, if we don’t change the offset the game will crash since we can’t have a cave with offset -1/-1. 

The change of rain to 0 is quite obviously no one want it to rain in a cave. Since we have change it to a cave we also need to change IsInside to 1 to tell this is a cave. 

The next to do is to make this a random generated cave; this is done by changing DrlgType to 1. We are going to use the same look as Den of Evil/Cold Plain Cave have and this have LevelType of 3. Subtype and SubTheme is used by over ground areas so we haven’t any need of this any longer, so by setting -1 we tell that we are not going to use this two. 

Now we need to link the new cave level to something’s. We will use Den of Evil entrance in this example to link Tamoe Highland too. In Vis0 we tell what entrance we are coming to if we goes up from this cave. Since we are using Den of Evil we know that we are going up to Blood Moor and this wilderness has id 2. So in Vis0 we set 2 as a value. Since we are using the same cave as the one in Cold Plain we know that we have a second entrance (Den of Evil is using the same type but has is hardcode to not have a second entrance). We need to link this second cave to something’s useful. We have already Act 1 - Cave 1 (Den of Evil) id 8 that we can link it too. So we change Vis4 to have value 8. We are also changing Vis3, 5 and 6 to have value 0 since we are not any longer using it. We have the last too change the Warp; that is used to show the correct look of an entrance. In warp0 we use value 4 and in Warp4 we use value5. We are no longer use Warp3, 5 and 6 so we set the value to -1. 

We are not done yet. We still need to change the link in Blood Moor to use our new Tamoe Highland Cave. 

In levels.txt go down to Act 1 - Wilderness 1 (has id 2). 

Change Vis3-6 to have value 7 (this is the id of Tamoe Highland) 

We have one last thing to do with the linking. Act1 - Cave 1 (Den of Evil) is needed to be change so it is linked to Tamoe Highland. 

In levels.txt go down to Act 1 - Cave 1 (has id 8). 

Change Vis0 to have value 7 (this is the id of Tamoe Highland) 

We have still one important thing to do. Since Tamoe Highland normally isn’t a cave we need to add a new row in LvlMaze.txt. This new row is needed to too have Tamoe Highland a new Cave id linked to it. 

Open LvlMaze.txt and copy the row from Act1 - Cave 1 to row (82). Make sure that this is an empty row just before the last used row. We are only need to change the Level id to Tamoe Highlands id. 

In LvlMaze.txt go down to row 82. 

Change Level to have value 7 (this is the id of Tamoe Highland) 

When we have done all the changes and saved levels.txt and LvlMaze.txt we copy the files to our mod directory. I suppose you already know how this works. Since this is not covered in this tutorial. 

What happens when you reach the entrance to the old Tamoe Highland from Black Marsh?   
This tutorial is not covering how to make it look nice, it’s only mean to show how to change wilderness into a cave. When you reach Tamoe Highland from Black Marsh you will face a Black wall, since we no longer have Tamoe Highland there. You can also see that the Tamoe Highland cave is not perfect; it has some of its former look in the black areas. This is not hard to change so it looks nice. 

Here is an exercise1.   
Try to make Dark Wood, Black Marsh and Tamoe Highland into a cave that is linked from Underground Level1. 

Here is a second exercise.   
You have after the first exercise turned Dark Wood, Black Marsh and Tamoe Highland as a cave. Now turn also Monastery, Courtyard 1 into a cave that is linked to Tamoe Highland Cave. The last to do is too make Barracks into a Cold Plain look cave that is linked to Courtyard 1.
