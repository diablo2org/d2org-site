---
title: The "Demon Portal" Spawner Technique 1.0
summary: >-
  Required Files: Animdata.d2 Levels.txt Monstats.txt Montype.txt Missiles.txt
  D2Game.dll Patchstring.tbl
keepId: 216
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 6830
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=216'
---
Required Files:   
Animdata.d2   
Levels.txt   
Monstats.txt   
Montype.txt   
Missiles.txt   
D2Game.dll   
Patchstring.tbl 

Tools:   
ANIMDATA\_EDIT   
CV5   
XVI32 (or any other hex editor)   
A spreadsheet of your choice   
A tbl editor of your choice 

Note:   
This tutorial is not meant to be for beginners, I will only deal with the overall stuff, I will not talk about how to spawn a monster, how to add new strings and so on, this will solely deal with the technique involved in 'Demon Portal' creation. 

In order to follow this tutorial you will need to know how to do the following things:   
Adding new monster animations   
Adding new tokens   
Editing the missile tables in d2game/d2client.dll   
General basic stuff like spawning monsters, string and the like.   
Creating cof files

---

Required Files:   
Animdata.d2   
Levels.txt   
Monstats.txt   
Montype.txt   
Missiles.txt   
D2Game.dll   
Patchstring.tbl 

Tools:   
ANIMDATA\_EDIT   
CV5   
XVI32 (or any other hex editor)   
A spreadsheet of your choice   
A tbl editor of your choice 

Note:   
This tutorial is not meant to be for beginners, I will only deal with the overall stuff, I will not talk about how to spawn a monster, how to add new strings and so on, this will solely deal with the technique involved in 'Demon Portal' creation. 

In order to follow this tutorial you will need to know how to do the following things:   
Adding new monster animations   
Adding new tokens   
Editing the missile tables in d2game/d2client.dll   
General basic stuff like spawning monsters, string and the like.   
Creating cof files

---

Step 1 - adding the animations   
First create a new animation, I cloned radament for this, make sure it has the following modes: A1, A2, DD, DT, GH, NU, WL, after the animation itself is ready you need to add the new data to animdata.d2, add new entries for '0Q' as a token, make sure that A2 is using trigger ID '2' which tells the game to release a missile at that frame, A2 will be out casting animation, create the cof files for the dccs and make sure to do the same thing for A2 in here as you did in animdata.d2, that is set the trigger ID to 2! Next create a new folder '0Q' in 'data\\global\\monsters' move the cof files and the animations in there in the correct order.   
After doing this the first step is completed.

---

Step 2 - building the monster   
Open up monstats.txt and go down to row 108, change the string code from unused to a string of your choice and add it to patchstring.tbl, set SPAWNED to 1 and add the ID 106 to levels.txt under the S1-S25 columns, NOT m1-25! so we will be able to test this later on, make sure BASEID is set to 3, now move over to AIPARAM1 and set it to 90 or so, this is the percentage of health the enemy has left when it goes into summoning mode, 90 means 'after I lost 10% of my life I will start summoning enemies', Adjust the mode columns to be identical to the modes our new animation has, and jump over to MISSA2, here type 409, this is the ID for 'IMP SPAWN MONSTER' used under classic d2 monsters. (for expansion rows you will use 24!). make sure that all the skill columns are blank, and finally set eSpawnCol to 2, we need to do this to prevent our summoner from summoning other summoners and causing a chain reaction that will crash your machine!   
This step is now also done.

---

Step 3 - working on the missile   
At the moment 'IMP SPAWN MONSTER' is ugly, that’s why we will extract a unused casting animation from d2data.mpq, its located in 'data\\global\\overlays\\extra\\greatermummycast.dcc' extract it, remember it has 16 frames and rename it to something like 'summonlight.dcc', move it into data\\global\\missiles. Now open up missiles.txt and go down to row 412, here you see 'IMP SPAWN MONSTER', leave it all as is and go over to the CELFILE column, swap the graphics with summonlight and set the animlength to 16. save missiles.txt, finally we need to add some sounds to this skill, hence open up d2client.dll and go to offset F563C (both 1.09B and 1.09D!) change the movement sound dword (number 3) to DD010000 this is the ID of the baal summoning casting sound, save it and this step is done. 

After you did the above you should have a general idea on how this works.
