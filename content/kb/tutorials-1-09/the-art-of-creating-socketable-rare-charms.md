---
title: The Art of Creating Socketable Rare Charms
summary: >-
  We will need two files to do create socketable rare charms: misc.txt
  itemtypes.txt
keepId: 194
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 7576
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=194'
---
**We will need two files to do create socketable rare charms:**  
misc.txt  
itemtypes.txt

First, we will make the base. Open up misc.txt and go down to the charm rows. In the hasinv column put 1 (this column controls if the game can spawn sockets (even if the basetype is allowed to spawn sockets...if this is set to 0 the item won't be able to be socketed)

Next, in the gemsockets column put 1 for small charm, 2 for large charm and 3 for grandcharm

In the gemapplytype column put 0, 1 or 2.  
0 adds weapon effects  
1 adds armor and helm effects  
2 adds shield effects

Now, if we are done with this, save your work and open itemtypes.txt

Go down to the charm rows and go to the rare column, put 1 into it for those rows. if you for some reason want the charms to also spawn as normal items set the entry in magic to 0

Next, go to the MaxSock1, MaxSock25 and MaxSock40 columns, which stand for normal, nightmare and hell max socket amounts. While we **did** enable the item to actually be able to have sockets in misc.txt, the itemtypes file currently has the max amounts of sockets for them at 0, so the game can't spawn sockets on them no matter what you put in misc.txt. So, for clear reasons, change the entriess in these columns to 1 for small, 2 for large and 3 for grand charms

Save your work and enjoy

A fast way to test this out:

Open cubemain.txt and add a 1 new line call it TEST1 (dosent actually matter :P). Set enable to 1. Go to numInput and set it to 2. In input 1 type: scha and in input 2 type: hpot. In the output column type this (like I type it...don't change this in any way caps are caps and small letters are small; don't add spaces, etc.): usetype,rar,sock=1. Now set the lvl,ilvl and plvl columns to 50 (or whatever item level you want from 0 to 255)

Now go to the last column (term) and set it to 0

Now go into your game and put 1 small charm and 1 hp potion into the cube and click transmute and you should get a rare socket small charm (If you wanna test it with large/grand charms change the scha entry in input 1 into mcha or lcha)
