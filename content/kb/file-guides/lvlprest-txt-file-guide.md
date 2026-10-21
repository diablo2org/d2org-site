---
title: LvlPrest.txt File Guide
summary: >-
  Levelid: The ID of the level from levels.txt, 0 if the ds1 is not a preset
  level
keepId: 357
author: Nefarius
credit: by Xenast
posted: '2005-10-18'
views: 7510
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=357'
---
Lvlprest.txt

Name: Name of the level, refrence only

Def: Related to Automap, must be a consecutive value

Levelid: The ID of the level from levels.txt, 0 if the ds1 is not a preset level

Populate: 1 yes/0 no  
If set to no monsters will not be able to spawn on the ds1, used for special maze rooms such as stairs leading up/down  
\*superuniques still spawn  
\*causes Unhandled Exception if you add other monster objects when column is set to 0

Logicals: Related to walls fading, 0 fading is not possible, 1 it is possible

Outdoors: 1 yes/0 no  
Set to 1 for outdoor ds1's, 0 for indoor ds1's

Animate: 1 yes/ 0 no  
Controls wether or not animated tiles will animate in the level

KillEdge: Uknown, works set at 0 for new levels

FillBlanks: 1 yes/0 no  
Setting to yes makes all blank tilespaces unwalkable

SizeX: Tells the x size of the map,  
\*leave at 0 for preset areas since preset area size is defined in levels.txt

SizeY: Tells the y size of the map  
\*leave at 0 for preset areas since preset area size is defined in levels.txt

Automap: 1 yes/ 0 no  
Reveals full automap for level  
\*Only works for preset maps

Scan: 1 yes/0 no  
Setting to yes allows warps to be selected

Pops: Tells how many different type of boxes it will draw for a ds1. With boxes I'm talking about these known special tiles (for cottage those are #59 and #62).

PopPad: With this you can change the size of the box and either increase its size or decrease its size.  
\*Positive value: 2 (this will increase the box from where you have added the second special box).  
\*Negative value: -2 (this will decrease the box from where you have added the second special box)

Files: The amount of versions the map has, based on entries in File 1 to File 6 columns

File 1 to File 6: The location of the ds1 versions, leave at 0 for files that don't exist

Dt1mask: Number telling which tiles to use from lvltypes.txt

Beta: Refrence Only

Expansion: Refrence Only

Pops and PopPad info were taken directly from Kingpins find in this thread:  
[Roofs pop and popadd explained](http://phrozenkeep.it-point.com/forum/viewtopic.php?t=20360)  
I am sure that part needs to be rewritten in this fileguide, but that thread had me confused as hell

The Logicals discovery was found by Go\]\[um in this thread:  
[Making walls go transparent?](http://phrozenkeep.it-point.com/forum/viewtopic.php?t=16739)

I think that covers the major lvlprest functions, as the rest are never mentioned. Hopefully someone knows the missing 3/any corrections and we can add this to the finished pile ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)

Edit: Discovered the purpose of 'FillBlanks' column ![icon\_cool.gif](/kb/img/d2mods.info/forum/images/smiles/icon_cool.gif)  
Edit 2: After looking more and verifying what I thought, got the Populate column figured out ![icon\_biggrin.gif](/kb/img/d2mods.info/forum/images/smiles/icon_biggrin.gif)  
Edit 3: Added some info to Populate column, formatted a bit.. now on to figuring out KillEdge ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)  
Edit 4: typo
