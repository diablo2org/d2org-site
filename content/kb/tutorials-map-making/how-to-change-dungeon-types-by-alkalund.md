---
title: How to Change Dungeon Types (by Alkalund)
summary: This tutorial explains how to change the appearance of dungeon levels.
keepId: 164
author: Phrozen Heart
posted: '2007-05-04'
views: 10367
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=164'
---
In this tutorial I'm going to explain a modmaking trick that can add great customization to your mod; I'm talking about **changing** dungeon types. Basically what we're going to do is change what a dungeon level _looks like_. For example, once you've grasped the concepts discussed here you will be able to turn the Den of Evil into an Ice Cave (just like the ones in Act 5), or maybe replacing the Maggot Lair with even more Palace Cellar Levels. The options are many, but for the scope of this tutorial I'm going to show how to make the Den of Evil look like an Act 5 Ice Cavern.

Two files are required for this tutorial, namely levels.txt and lvlmaze.txt. We will start explaining some of the key columns in levels.txt for this kind of modification:

**Pal**: this column control which palette the game is going to use for a level. It is very important that you set the correct palette here, otherwise your graphics can turn out weird. Here's what the numbers in this column mean:

**0** - This level uses the Act 1 palette

**1** - This level uses the Act 2 palette

**2** - This level uses the Act 3 palette

**3** - This level uses the Act 4 palette

**4** - This level uses the Act 5 palette

**LevelType**: this colum determines which set of graphic tiles the level will use. To know what the numbers in this column mean, refer to lvltypes.txt. For example, LevelType=33 means the level use the graphic tiles from the Act 5 Ice Caves.

**Vis0-Vis7**: control how levels connect with each other. Refer to the Creating Multi-Level Dungeons tutorial by SiLenTx to understand how to work with these columns;

**Warp0-Warp7**: control which **warps** a level use. A warp is the object that connect levels; the cavern entrances in act 1, or the staircases all over the game are examples of warps. To know what the numbers in these columns mean, refer to lvlwarp.txt. For example, Warp 64 is the stairs connecting Travincal to the Durance of Hate level 1.

I'll now detail the process of making the Den of Evil look just like an Act 5 Ice Cave: Open levels.txt, and find the Den of Evil row; it is the row called **Act 1 - Cave 1**. We want to use Act 5 graphic tiles for this level, so we put 4 in the **Pal** column, in order to avoid palette problems. Next we need to change its **LevelType**; as stated before, the Act 5 Ice Caves are LevelType 33, so put 33 as the LevelType of the Den of Evil.  
After that, we need to modify the warp used to connect the Den of Evil to the surface. To do this, you will modify values in the **Warp0** column. Check the Warp0 value for the Den of Evil. It's 4. To see what kind of warp this is, open LvlWarp.txt. Warp Id 4 = Act 1 Cave Up, as expected. The one we want is **Id 73, Act 5 Ice Caves Up**. So, simply change the Warp0 of the Den of Evil from 4 to 73. This is all we will modify in levels.txt (for now). Save it and exit.

Now open lvlmaze.txt. The important columns in this file are SizeX, SizeY, and Rooms. Originally for the Den of Evil (Act 1 - Cave 1), we have

Rooms = 1

SizeX = 24

SizeY = 24

We want to change the Den of Evil into an Ice Cave; have a look at the column called **Act 5 - Ice Caves 1**, at the end of the lvlmaze.txt file. These are the values you will find:

Rooms = 10

SizeX = 16

SizeY = 16

To complete the modifications, change the **Rooms**, **SizeX**, and **SizeY** columns of the Den of Evil to 10, 16, 16 respectively (exactly as the ice cave). Save and exit.

You are now ready to enter the game and test the changes to the Den of Evil. If all was modified correctly, the Den will look exactly as an Act 5 Ice Cave!!

There is a small problem though, and you will soon notice it: the original Den of Evil has only one warp (the one leading to the Blood Moor). However, _the Act 5 Ice Caves have 3 warps_. That means when you change the Den into an Ice Cave, you will get 2 extra warps!! You have to make sure the extra warps are connected somewhere. In our example they aren't connected anywhere yet, and so Diablo 2 will give you this warning uppon approaching one of these warps:

_Warning_

_

Location : C:ProjectsDiablo2SourceD2CommonDRLGRoomTile.cpp, line #686

_

_Expression : ptWarp_

Ok, so we need to go back to levels.txt and do some more changes (again I refer you to the Multi-Level Dungeons tutorial by SiLenTx, knowledge on the Vis columns is required for the following changes). We must link these two extra warps somewhere; this is totally up to you and your needs, but I'll detail here how to:

1) use one warp to connect The Den of Evil with the Underground Passage Level 1

2) use one warp to connect The Den of Evil with the Underground Passage Level 2

The following diagrams show what we will accomplish with this change:

**Original level disposition**

Stony Field

|

v

Underground Passage 1 -> Dark Wood

|

v

Underground Passage 2

**Level disposition after the changes**

Stony Field

|

v

Underground Passage 1 -> Dark Wood

|

v

Den of Evil <- Blood Moor

|

v

Underground Passage 2

Start by opening levels.txt and looking at the row called **Act 5 - Ice Cave 1**. This level uses the Vis0, Vis1, Vis2 columns. Since we've changed the Den of Evil into a level of the same type as this one, **we must use** the Vis0, Vis1, Vis2 columns for the Den of Evil as well, otherwise it won't work. The changes in the Vis columns will be:

Act 1 - Cave 1 (Den of Evil, Id = 8 ): Vis0 = 2, Vis1 = 14, Vis2 = 10

Act 1 - Cave 3 (Underg. Passage 1, Id = 10): Vis4 = 8

Act 1 - Cave 3 Treasure (Underg. Passage 2, Id=14): Vis1 = 8

You also need to enable the Warp1 and Warp2 in the Den of Evil, simply put Warp1 = 74 and Warp2 = 75 in the Act 1 - Cave 1 row, exactly as what is found in the Act 5 Ice Cave row. Save and exit, the warps problems are now solved and you can test it going to the Den of Evil again. This time, there will be no _ptWarp_ warning, and the extra warps will be connected to the Underground Passages, levels 1 and 2.

This completes the modifications, you have now a working Ice Cave in Act1!

I'd like to add some comments though:

1 - The value in the **Rooms** column indicates the size of the dungeon; the bigger the value, the bigger the dungeon is. You can change this to whatever you want, but keep in mind too small values may not work in all cases. For example, if you left Rooms = 1 for the Den of Evil and changed it into an Ice Cave, you would get this assertion uppon entering the game and approaching the Den:

_FILE: C:ProjectsDiablo2SourceD2HellSRCArchive.cpp LINE: 59 --------_

_

File Read Error

Location : C:ProjectsDiablo2SourceD2HellSRCArchive.cpp, line #59

_

_Expression : 0_

In this particular modification, using Rooms >= 2 works fine.

2 - What we did was basically only change the graphic tiles the level uses. Objects that would spawn in an Act 5 Ice Cave (like Evil Urns for example) will not appear in our Icy Den of Evil, unless we also modify the ObjGrp0-ObjGrp7 and ObjPrb0-ObgPrb7 columns in levels.txt; they control what objects can spawn on a level.

3 - Corpsefire will not appear in this Icy Den of Evil. When you change a level type of a dungeon, you also apparently change what **ds1** files a level uses. The ds1 files with Corpsefire will not be chosen when the game generates an Ice Cave. You can set Corpsefire to appear in other area of the game (preferably a static area, like the Burial Grounds for example), using a DS1 Editor which can be downloaded at our [File Center](https://d2mods.info/forum/dload.php).
