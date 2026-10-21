---
title: Linking Outdoor Areas Together (by Kingpin)
summary: This tutorial explains how to link new outdoor areas to each other.
keepId: 16
author: Phrozen Heart
posted: '2007-05-04'
views: 11279
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=16'
---
I have found out a way to link new outdoor areas to each other as you can see in this two screenshots below.

This two areas are both preset outdoor areas (one ds1 file each). I have no monsters in this screenshot, but monsters can walk to the other area and shot you from one preset area to the other.

[Outdoor Area 1](http://dynamic6.gamespy.com/~phrozenkeep/tutimages/outdoorarea1.jpg)

[Outdoor Area 2](http://dynamic6.gamespy.com/~phrozenkeep/tutimages/outdoorarea2.jpg)

**How is this done?**  
First you need to know how to add a new outdoor area. You can read more about that [here](https://d2mods.info/forum/viewtopic.php?t=14484).

I have in this test added two outdoor areas that are 7 x 10 in size in levels.txt (8 \* 11 in win\_ds1edit). The first outdoor area need to have two different vis (i used vis5 & 6). The first vis can be linked to a cave or what you want to use it (to get to this outdoor area). The second vis is added as a hidden vis, why add a hidden vis? We will use this vis to link it to the other outdoor area. By adding a vis to another area it will load the other area, this is **very important** to make the linked outdoor areas.

The second ds1 file will contains one hidden vis also (i used vis 6). You will need to link the first outdoor area with the second one, using their respective hidden Vis.

I discovered today that OffsetX/OffsetY (in levels.txt) is used to place the ds1 file(s) in the world map. This is what Paul has wrote about in [this post earlier](https://d2mods.info/forum/viewtopic.php?t=9098&highlight=worldspace). That explains what worldspace are.

Some notes about offsetX/offsetY. If you use -1/-1 as value the game will use its hardcoded reference to calculate its position in the worldspace. You can use 0/0 and up to place your maps into the worldspace. This offsetX/offsetY is important to remember to change. I did earlier today the mistake to copy/paste some levels and both my levels used the same offsetX/Y and it didn't worked to well. But, the good part was that i discovered how offsetX/offsetY worked. What happen is that the tiles and objects of my 2nd cave was put into my first cave, wich makes it a mess for both caves, as you can imagine.

I have added the following offsetX/Y for my ds1 files.

First ds1 file: offsetX = 1000, offsetY = 1010  
Second ds1 file: offsetX = 1000, offsetY = 1000

What we do here is to add the ds1 files side by side. By this we can make a huge world that are built up by several ds1 files.

To have an idea of how big you can make this world, remember that Tristram is 44\*47 tiles in the ds1 editor, and that you can make ds1 of 250\*250 without problems, so you can make 1 ds1 30 times bigger than Tristram, within just 1 ds1.

I discovered one more important thing. The hidden vis is even more important than i first thougth. I had accidently added the vis side by side. I tried to move them into another location and the link into the other area didn't work anylonger. So, you need to add the hidden vis in the both ds1 file side by side. This vis actually connects each area to each other, since they are placed side by side. You make a walkable path for you and your monsters.

First ds1 Second ds1  
\--------------- --------------

VIS<->VIS

\--------------- --------------

+-----+  
| |  
| |  
| |  
| B |  
| |  
| |  
| |  
| |  
+-| |-+  
+-| |-+  
| |  
| |  
| |  
| A |  
| |  
| |  
| |  
| |  
+-----+

The 1st ds1 file (A) cover the tiles area (1000, 1010) - (1006, 1019) (inclusive)  
The 2ndt ds1 file (B) cover the tiles area (1000, 1000) - (1006, 1009) (inclusive)

For further discussion on the subject [check out this thread](https://d2mods.info/forum/viewtopic.php?t=14833) in the Phrozen Forums.
