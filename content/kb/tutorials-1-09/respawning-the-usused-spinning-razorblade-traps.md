---
title: Respawning the Usused Spinning Razorblade Traps
summary: >-
  First of there is a unused Trap (similar to the Fire Towers etc) in Act 3, but
  instead of shooting missiles it turns into a disk of razors that spin and do
  damage. It looks just like a Pillar from…
keepId: 215
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 6077
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=215'
---
First of there is a unused Trap (similar to the Fire Towers etc) in Act 3, but instead of shooting missiles it turns into a disk of razors that spin and do damage. It looks just like a Pillar from Mephistos Durance when inactive, the point of this is that the player goes and tries to open the stash and gets sliced by the blades, for reasons unknown blizzard left this PERFECTLY working thing out. any way:

All you will need is monstats.txt, levels.txt and string.tbl

Open up MonStats.txt and go down to row 356 the Code for it is 'a trap', change that to the string you want to use in strings.tbl, i called it FakeStash, set spawned to 1 and go over to the levels column change the 99 on normal to 30 or something etc.

Scroll all the way to IsSel set it to 1 , now move over to the eSpawnCol column and set it to 2, thats basicly it, do stat adjustments and exit monstats.txt (after saving DUH). To make it more confusing, simpy leave the 'code' column blank this will make it have no string and will only let the player highlight it, if you give it a code then it will show a life bar (if you want a black lifebar like a object you can set its entry in killable to 0, but that will make it immortal)

Now open up Levels.txt and go to durance of hate 1,2,3 rows, write down how many cells of M1-25 you have filled with monsters, and go on to the S1-S25 cells, now fill the S1-S25 cells in equal count to M1-25 aka:

if you have M1 to M5 filled then enter 354 in S1,S2,S3,S4,S5 etc.  
Now save the file.

Open string.tbl and add your new string code, enter the name Stash (as the Pillar object is called stash and we want it to look confusing dont we?)

Save it and go into a game and enter durance of hate!  
An there you have it!
