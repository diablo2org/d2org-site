---
title: Advanced Information about DT1
summary: >-
  This article explains a lot of information about DT1, that have not been
  discovered before.
keepId: 468
author: jetaman
posted: '2018-04-01'
modified: '2018-04-13'
views: 7867
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=468'
---
Hello everyone. Today I am presenting you the results of my recent research on the .dt1. There is [Paul’s article](/kb/file-formats/the-dt1-format), which describes .dt1 format from a programmer’s viewpoint. However, some of the important info is missing or is incorrect. This article, on the other hand does not describe the code, but is designed as a guide to a person who wants to create new tilesets, maps and environments.  

1.  **Orientations and Directions**

There are 3 indexes that identify and categorize a tile: Main Index, Sub Index and Orientation. These indexes decide where the tiles will appear in the DS1 editor window, when you right click.  
First number is Main Index, second number is Orientation and the third number is Sub index.

[![](https://s20.postimg.cc/smdtsc9tl/3_indexes.png)](https://postimg.cc/image/smdtsc9tl/)

Orientation:  
There are 19 Orientation indexes.

![](/kb/img/d2mods.info/forum/ext/dmzx/imageupload/files/f23eeaead619c1bed29890c2c49923ff.png)

Orientation 0 – Floors  
Orientation 1 – Left Wall  
Orientation 2 – Right Wall  
Orientation 3 – Right part of north corner wall  
Orientation 4 – Left part of north corner wall  
Orientation 5 – Left end wall  
Orientation 6 – Right end wall  
Orientation 7 – South corner wall  
Orientation 8 – Left wall with door  
Orientation 9 – Right wall with door  
Orientation 10, 11 – Special Tiles  
Orientation 12 – Pillars, columns and standalone objects.  
Orientation 13 - Shadows  
Orientation 14 – Trees  
Orientation 15 – Roofs  
Orientation 16 - Lower walls equivalent to Orientation 1  
Orientation 17 – Lower walls equivalent to Orientation 2  
Orientation 18 – Lower walls equivalent to Orientation 3&4  
Orientation 19 – Lower walls equivalent to Orientation 7

There is one more very important index: **Direction**. Paul found 5 Direction indexes and he states that they do nothing. However, I found 9 indexes and I found out its purpose.  
**Direction** does not categorize the tile and it doesn’t show up in DS1 editor. It decides how the light will affect the tile. This is very important when you want your new tile to look good. **Direction** works together with **Orientation**. You must always use the appropriate Direction index with its respective Orientation index. Here’s the list of all Direction and their respective Orientation indexes.

|     |     |
| --- | --- |
| Direction 1 | Orientation 1, 5, 8 |
| Direction 2 | Orientation 2, 6, 9 |
| Direction 3 | Orientation 0, 3, 4, 12, 14 |
| Direction 4 | Orientation 7 |
| Direction 5 | Orientation 15 |
| Direction 6 | Orientation 16 |
| Direction 7 | Orientation 17 |
| Direction 8 | Orientation 18 |
| Direction 9 | Orientation 19 |

**2.Orientation Set-ups**

Here is a demonstration how some of D2's buildings are set up. I was doing this primarily for myself, but later decided to share it with everyone. This would be help you understand how to set-up elements if you decide to make new architecture. After analyzing and studying these examples I learned a lot and want to share it with you. I didn't make all D2's buildings, because these demonstrate basic and interesting set-ups.  

|     |     |     |
| --- | --- | --- |
| Act 1 – Cottage + Roof  <br>\*\*\* This this a basic setup of walls. It uses all essential orientations. | [![](https://s20.postimg.cc/5k9t6kfh5/cottage.gif)](https://postimg.cc/image/5k9t6kfh5/) | [![](https://s20.postimg.cc/5k9t6o2nd/cottage2.gif)](https://postimg.cc/image/5k9t6o2nd/) |
| Act 1 – Gheed’s Cart | [![](https://s20.postimg.cc/5k9t6jcw9/cart.gif)](https://postimg.cc/image/5k9t6jcw9/) | [![](https://s20.postimg.cc/udjd78tcp/cart2.gif)](https://postimg.cc/image/udjd78tcp/) |
| Act 1 – Charsi’s Forge  <br>\*\*\* The first tile from the right is placed higher above the floor than usual wall tiles. | [![](https://s20.postimg.cc/7ou67m6t5/charsi.gif)](https://postimg.cc/image/7ou67m6t5/) | [![](https://s20.postimg.cc/opd2gcwq1/charsi2.gif)](https://postimg.cc/image/opd2gcwq1/) |
| Act 1 – Akara’s Tent  <br>\* Akara’s tent uses two tiles of Orientation 12.  <br>This is a little weird.  <br>Why not use regular setup of 1? | ![](https://s20.postimg.cc/g73mbxq6h/akara.gif) | [![](https://s20.postimg.cc/hywl6uoyx/akara2.gif)](https://postimg.cc/image/hywl6uoyx/) |
| Act 1 – Long Tent + Roof | [![](https://s20.postimg.cc/kg8ce7w1l/tent.gif)](https://postimg.cc/image/kg8ce7w1l/) | [![](https://s20.postimg.cc/rjg7tx97t/tent2.gif)](https://postimg.cc/image/rjg7tx97t/) |
| Act 1 – Mausoleum  <br>\*\*\*Part of stairs is made as floor tiles so that the player could walk up to the door. | ![](https://s20.postimg.cc/7ou67m6t5/charsi.gif) | ![](https://s20.postimg.cc/nzua41e6x/mausoelum2.gif) |
| Act 1 –Crypt  <br>\*\*\*\* Part of stairs is made as floor tiles so that the player could walk up to the door. | ![](https://s20.postimg.cc/4ur0u7ud5/crypt.gif) | ![](https://s20.postimg.cc/4hzmo2me1/crypt2.gif) |
| Act 1 – Countess Tower Entrance  <br>\*\*\* This building contains two layers of walls.  <br>When you go inside the tower, second layer (upper) is removed.  <br>One part of the walls of Orientation 2 (the lowest) should have been 7,  <br>but for some reason they decided to make it 2. | [![](https://s20.postimg.cc/4lyi1kg89/tower.gif)](https://postimg.cc/image/4lyi1kg89/) | [![](https://s20.postimg.cc/gbi405zcp/tower2.gif)](https://postimg.cc/image/gbi405zcp/) |
| Act 3 – Asheara’s House  <br>\*\*\* The left tile with orientation 6 is twice longer than usual,  <br>so it occupies two tiles instead of one.  <br>\*\*\* Inside the house there is a tile with a dragon image in it and for  <br>some reason it’s Orientation 6, instead of 1.  <br>\*\*\* This building uses special tiles to remove the top layer of walls,  <br>revealing the inside of the house. | [![](https://s20.postimg.cc/6102q9u61/asheara.gif)](https://postimg.cc/image/6102q9u61/) | ![](https://s20.postimg.cc/pevusx7m1/asheara2.gif) |
| Act 3 – Pyramid  <br>\*\*\* I was really surprised when I realized how simple this building is made.  <br>The back of the pyramid is made unwalkable so that the player doesn’t see it.  <br>Also, there are some transparent pixels, and if the player walked behind the pyramid,  <br>you would be able to see him through it | ![](https://s20.postimg.cc/v325jmh1l/pyramid.gif) | ![](https://s20.postimg.cc/j16rpnnah/pyramid2.gif) |
| Act 2 Tavern  <br>\*\*\* The front of this building consists of two layers of walls + roofs.  <br>To remove upper layer and roofs it uses  <br>#49 Special tile (area W2 W3). This building is interesting because  <br>two layers of walls are placed on top of each other,  <br>creating the effect of double height walls. | [![](https://s20.postimg.cc/6qiv2n2fd/tavern.gif)](https://postimg.cc/image/6qiv2n2fd/) | ![](https://s20.postimg.cc/gjv0ic5y1/tavern2.gif) |

**3.Special Tiles, Roofs and PopPads**

[![](https://s20.postimg.cc/t0f5ryh2l/rrqe6r.jpg)](https://postimages.org/)

Have you ever wondered why do the Death Knight Statues in River of Flame turn their heads when you walk next to them? Is it hardcoded behaviour? Animated objects? Dark magic? - No. It's the same mechanism that makes the Act 1 Cottage's roof disappear. This is done with the help of special tiles - they remove one layer of wall and reveal the other. In case of Death Knight statues - there are 2 statues on top of each other. When you walk up to a statue, one disappears and the other appears. Yes, it's that simple :)  
Special Tiles are the tiles that are present in the "Special" section in Ds1 Editor. They do various things. Here is the list of what they do.

#00-46, #82, #83 Vis (tiles that allow you to go from one area to another)  
#47-74 Area (tiles that remove walls and roofs)  
#75 Town Entry  
#76 Map Entry  
#77 Town Entry 2  
#78 Corpse Location  
#79 Teleport Location  
#80 Unknown

We will talk about Special Tiles #47-74 in more detail. But first we need to understand what roofs are.

**_What are roofs?_**  
Roofs are actually floor tiles with Direction index 5 and Orientation index 15. Roofs must be placed higher up the Y axis, above the ground. For this reason there is “roof\_y = ” line in tileset’s .ini file. Usually it’s “roof\_y = 80” but there are other values as well, for example 160, 240, 320, 400 etc (always 80 pixels up).

**_How to make roofs disappear?_**  
A pair of Special Tiles defines the area that will be removed. Two identical Special tiles must be placed to form a square or a rectangular shape over the area that you want to remove. As you can see in the examples below, if you place the special tiles like this the red border shows the area that will be removed. From now on let’s call these shapes – “Pads”.

![](https://s20.postimg.cc/wsvd56ci5/Screenshot_1.png)![](https://s20.postimg.cc/eq2adyod9/Screenshot_2.png)

In Lvlprest.txt there are two columns that have connection to this.  
**Pops** – The number of Pads (shapes) you use in a .ds1. For example Act 1 Cottage uses 2 pads and Act 1 Countess Tower uses 1 pad.  
**PopPads** –the size of the trigger pad in relation to the area defined by the special tile. It's an offset in sub-tiles.

PopPads does not change the area which will be removed. It determines where the game will trigger the pad. If you use value = 0 – the pad will be triggered exactly how the shape is drawn (the red borders). If you for example use positive value = 3, the trigger pad will increase in 3 subtiles (blue borders). If you use negative value = -3, the trigger pad will decrease in 3 subtiles (green borders).  
Please notice that the trigger pad will only increase in two directions – South and East. So this image means that when you walk over the blue or green line, the red border square will disappear.

![](https://s20.postimg.cc/ru7uqno4t/screenshot_4.png)

If you want to make custom removable roofs, keep in mind one very important thing: each Special Tile will only work with a specific Main Index. For example if you look at Act1 Cottage roof, the roof tiles have Main Index 46 and Special tiles #59 and #62 are used. It means that these two Special tiles will not work with other Main indexes. And if Special tile removes Roofs and Walls together (like in # 47 in Act 4 Town), those Roofs and Walls must have the same Main Index. So, if you look at Act 4 Town Roofs and Walls that are removed have Main Index 2 and the Walls that are not removed have Main Index 4. More about Special Tiles below.

![](https://s20.postimg.cc/55inr3egt/act_4_town.png)

Almost everything we knew about Special Tiles until this time was wrong to some extent. Our knowledge was based on two assumptions taken from [the only thread on the forum](https://d2mods.info/forum/viewtopic.php?f=81&t=20360):  
1\. Special Tiles only work in a specific act (special tiles from act 4 don’t work in act 1).  
2\. Special tiles remove a specific layer of walls and/or roofs.  
Both of these assumptions turned out to be false. Acts and layers don’t matter. Any special tile can be used in any act and remove any layer. The only thing that matters is the Main Index. Special Tiles check only the Main Index of the tiles the are placed in the area.  
One of the everlasting problems for modders was to place two houses next to each other and have their roofs removed separately. Is this possible? – Yes. Not only two, you can have up to four separately removable areas at the same time.  
In the DS1 Editor, Special Tiles #47-74 are categorized by their Main Index – 8, 9, 10, 12, 13, 16 and 20.  
All these tiles are divided into four groups:  
1\. Group 1 – Special Tiles with Main Index 8, 9 an 10  
2\. Group 2 – Special Tiles with Main Index 12, 13  
3\. Group 3 – Special Tiles with Main Index 16  
4\. Group 4 - Special Tiles with Main Index 20

![](https://s20.postimg.cc/9endt9x5p/Screenshot_3.png)

So, how do we know what Main Index does a single Special Tile remove? Now, what really interesting is that the Special Tile’s Sub-Index equals the Main Index of the tiles that it removes. For example, Special Tile #47’s Sub-Index is 2. It means that Special Tile #47 will remove all the tiles that have Main Index 2. Special Tile #48 will remove tiles with Main Index 7. Special Tile #49 will remove tiles with Main Index 8 etc. Now, look at Special Tiles #54, #60 and #63 – they have the same Sub-Index. It means that they will remove the same tiles with Main Index 23. Why do we need three Special Tiles with the same function? The answer is: to be able to draw shapes that are not possible with just one Special Tile. With these three tiles you can draw very complicated shapes for your custom roofs :) These three Special tiles belong to one Group, so it means they will remove everything together.

![](https://s20.postimg.cc/pcw3jejnx/screenshot-00009.jpg)

But now look at Special Tiles #66 and #74. They also have Sub-Index of 23! But they belong to different groups (#54, #60 and #63 from Group 1, #66 from Group 2, #74 from Group 4). It means that they will remove the tiles separately.  
But remember: don’t use Special Tiles with the same Main Index together (for example #47 and #48). You will encounter bugs.  
So, basically, if you use tiles from 4 different groups, you can have 4 removable areas at the same time. You just need to set the appropriate Main Index for your tiles and use their respective Special Tiles.

In the table below you can find all information about Special Tiles #47-74.

| Group | Main Index | № of Special Tiles | Removes Main Index |
| --- | --- | --- | --- |
| Group 1 | 8   | #47 | 2   |
|     |     | #48 | 7   |
|     |     | #49 | 8   |
|     |     | #50 | 12  |
|     |     | #51 | 14  |
|     |     | #52 | 16  |
|     |     | #53 | 22  |
|     |     | #54 | 23  |
|     |     | #55 | 31  |
|     |     | #56 | 40  |
|     |     | #57 | 41  |
|     |     | #58 | 42  |
|     |     | #59 | 46  |
|     | 9   | #60 | 23  |
|     |     | #61 | 40  |
|     |     | #62 | 46  |
|     | 10  | #63 | 23  |
| Group 2 | 12  | #64 | 13  |
|     |     | #65 | 14  |
|     |     | #66 | 23  |
|     |     | #67 | 24  |
|     |     | #68 | 41  |
|     | 13  | #69 | 13  |
| Group 3 | 16  | #70 | 25  |
|     |     | #71 | 40  |
|     |     | #72 | 41  |
|     |     | #73 | 42  |
| Group 4 | 20  | #74 | 23  |

4\. Wall Transparency

Next I will talk bout out one thing that was shrouded in mystery despite 10+ years of D2 modding. I’m talking about the wall transparency, or in other words wall fading. This happens when the character is behind a high wall and the wall goes a little bit transparent so that you can see you char behind it. For a majority of D2 modders this may seem irrelevant and unnecessary feature, but for those who work intensively with maps and especially for those who want to create brand new tile sets (like myself) this is crucial. Also, it’s very easy to miss a treasure chest or monster, and if you’re going hardcore it may be very dangerous.  
So, now the mystery itself – was pretty obvious. I’m surprised that no one discovered this before; I asked many people and no one could help me.

So, I will explain how this works. I will use “Inner Cloister” map as an example. First, to be able to understand how the transparency works you have to know what “Orientation” is in DT1 settings. You can read about Orientation in Section 1 of this article.

**The “secret” of transparency**  
The whole secret was in the fact that transparency happens when the walls are connected in one “chain”. It means that all the wall tiles must be joined together.

![](/kb/img/d2mods.info/forum/ext/dmzx/imageupload/files/72e6a68f61cffbdce323ea190e2edb8a.png)

If you delete one element the transparency will be broken. So, from now on I will call this chain of walls – a box.

![](/kb/img/d2mods.info/forum/ext/dmzx/imageupload/files/b302703ffbceb8903353eee663ee1973.png)![](/kb/img/d2mods.info/forum/ext/dmzx/imageupload/files/463ac929541380b0febf93b6c40391b7.png)

Here are some more discoveries:  
• You can resize your box to whatever you want.  
• You can have many boxes - a regular map is a box itself.  
• Wall of Orientation 7 are not necessary for the box.  
• Order of sub-indexes is not important in the box  
• You can use different main indexes.  
• “Logicals” column in Lvlprest.txt turn on and off the transparency.

Ogodei also discovered that you also need to have the "Tile Sound" setting in your .ini file set to 0. If you have it to something other than 0, your walls won't fade.

Also, one of the major thorn in the side for us map makers is the northen corner of the walls: it needs to be split in two frames (frame can be set at 0, the left side must have orientation 4, the right side must have orientation 3).

If you haven't set and cut the corners as Blizzard wanted, you can always create a "Fake Wall" consisting in orientation 3 + orientation 4 walls and place it as the first layer wall, then hide it with the ds1 editor.  
You can use the same trick to make walls fading even if the "box" is not enclosed, by placing fake and fully walkable (hidden) walls :)

So, I hope this will be interesting to some people after all these years. Good luck!
