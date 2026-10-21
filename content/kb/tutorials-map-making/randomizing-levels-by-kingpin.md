---
title: Randomizing Levels (by Kingpin)
summary: This tutorial explains how to randomize existing preset levels.
keepId: 29
author: Phrozen Heart
posted: '2004-08-19'
modified: '2021-12-16'
views: 10776
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=29'
---
I search and could not find anything about this topic. This isn't totally unknown that you can do, but i don't think this is a common knowledge either. I found out today that you can make Preset levels that are some type of randomized.

Before i start we look what levels do. This is linked to a lot of other tables.

(thanks to Paul for this good explanation what each file does)  
levels = area, composed of 1 or several ds1  
lvltype = just list of dt1  
lvlprest = ds1 to use in various situation  
lvlwarp = handle gfx parameters of warp tiles  
lvlsub = for Substituion tiles

In levels the following columns are of interest:

When you make a preset area you will set it's size of the ds1 file it uses in here. A preset is only one ds1 file.

SizeX: sizex for the ds1 file  
SizeY: sizey for the ds1 file

This two columns are also of interest. DlrgType is needed to be set as 2 to tell the game to use LvlPrest.txt. This tells what are commonly known are preset and aren't randomized.

LevelType is linked to LlvlTypes.txt and this is important when working with preset levels. I was working on a new preset Den of Evil when i got into trouble. I was using one of the Ice Cave levels from actV. I loaded the file in LvlPrest.txt and replaced the unsued treasure level in there. I could have used my increased levels preset technique to add more rows into there. But i havn't got time to do the code yet in 1.10.

I got a cave that was cutted with black walls. This is a problem i have had for a long time. What is important here is to use the right LevelType ID.  
For me it was ID 33 since i used a Ice Cave; the lvlType you'll use is the one that have the list of DT1 that your DS1 is using. I turned this ice cave into a preset area for act1 Den of Evil.

DrlgType: what type you are going to use (preset = 2)  
LevelType: what id from lvltypes are you going to use (in my case id = 33)

Also, worth to mention is that a ds1 file stores it's act number (you can read more about that in tools section in one of the sticky threads that Paul has posted. IF you are interested in this area you should read). You can change this act number for the ds1.

it's stored in this way: 00000000 00000000 00000000 04000000

Why changeing the act number? simple it lets you to use typ1 objects from act1 instead of act5. The bad is that you have to edit all the objects in the ds1 if you hexedit its act value, because then their index will all be screwed. Also, remember that you can't use type 2 objects of higher act, at least in un-modded D2. You could do the opposite also and change an act1 map to another act to be able to use typ2 objects in act1 from a higher act.

Now we come to an interesting part. In lvlprest.txt we have the following columns.

Files: tells how many columns it going to use of File1 to File6  
File1-File6: This is used to tell the path to a ds1 file. Even lvlmaze are using this.

Dt1Mask: tells what File columns from lvlTypes.txt it'll load.

The nice in here is that File1-File6 can be used make up to 6 different variants of a preset level.

The game randomize what of this entries it should use. So if you have added 4 different variants of a preset level. It it randomize what of this levels it's going to use. But, it's still a preset level with only one ds1. How useful is this?

I can tell you this is more useful than you can think. I give a small example what you can do with it down here.

Den of Evil version 1:

Uses: 1 spawn one random Unique + 1 golden chest.

Den of Evil version 2:

Uses: 1 Champion Zombie (Normal Zombie that are Level5), 2 Elite Zombie (Normal Zombie that are Level3) and 5 common Zombie's (That are Level1).

Den of Evil version 3:

Uses: Spawn a superunique monster (Corpsefire as example)

Den of Evil version4:

Uses: Nothing special.

This will give us 4 different caves that looks the same but have different setup of objects/monsters. We could even do the level to look different for this 4.

You can do the same with everyfile (that aren't hardcoded in lvlprest.txt). So you can actually have several version of Bishibosh camp. That spawns different superuniques (with 1.10 we can add as many superuniques as we want so this open up for a very interesting variations).  
Why changeing the act number? simple it lets you to use typ1 objects from act1 instead of act5. The bad is that you can't use any typ2 object anylonger. Since a typ2 object can be used from older acts only (You could do the opposite also and change a act1 map to another act to be able to use typ2 objects in act1 from other acts).

Now we come to an interesting part. In lvlprest.txt we have the following columns.

Files: tells how many columns it going to use of File1 to File6  
File1-File6: This is used to tell the path to a ds1 file. Even lvlmaze are using this.

Dt1Mask: tells what File columns it should load.

The nice in here is that File1-File6 can be used make up to 6 different variants of a preset level (you can actually add the columns that lvltypes.txt uses and have up to 32 different variant of a preset level).

The game randomize what of this entries it should use. So if you have added 4 different variants of a preset level. It it randomize what of this levels it's going to use. But, it's still a preset level with only one ds1. How useful is this?

I can tell you this is more useful than you can think. I give a small example what you can do with it down here.

Den of Evil version 1:

Uses: 1 spawn one random Unique + 1 golden chest.

Den of Evil version 2:

Uses: 1 Champion Zombie (Normal Zombie that are Level5), 2 Elite Zombie (Normal Zombie that are Level3) and 5 common Zombie's (That are Level1).

Den of Evil version 3:

Uses: Spawn a superunique monster (Corpsefire as example)

Den of Evil version4:

Uses: Nothing special.

This will give us 4 different caves that looks the same but have different setup of objects/monsters. We could even do the level to look different for this 4.

You can do the same with everyfile (that aren't hardcoded in lvlprest.txt). So you can actually have several version of Bishibosh camp. That spawns different superuniques (with 1.10 we can add as many superuniques as we want so this open up for a very interesting variations).
