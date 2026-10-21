---
title: Using Monsters as Missiles and Advanced Missile Editing
summary: >-
  What you will need: Missiles.txt Weapons.txt Monstats.txt Itemtypes.txt
  Cubemain.txt Sounds.txt (we will not edit it but we will need it!) String.tbl
  D2client.dll
keepId: 208
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 5820
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=208'
---
What you will need:  
Missiles.txt  
Weapons.txt  
Monstats.txt  
Itemtypes.txt  
Cubemain.txt  
Sounds.txt (we will not edit it but we will need it!)  
String.tbl  
D2client.dll

Tools you will need:  
A string editor of your choice.  
XVI32 (or any other hex editor for this matter)  
Cv5  
A Spreadsheet able to save and read tab delimited \*.txt files.  
Some hex calculator of your choice.

First you should know how to work with Cv5, working with hex editors like XVI32 and generally how to extract files from the MPQ archives and how to use -direct -txt.  
If you do not know one of these you should first learn about these two things before reading on.

In this tutorial you will learn how to use monsters as missiles just like I did in my XyRAX mod with the “cow launcher” weapon.  
You will also learn how to attach missiles to weapons and how to edit the missile tables in and d2client.dll

To start with you should download the missile tables excel sheet by Lanthanide from (http://homepages.ihug.co.nz/~hoggarth/MissileTables97.xls) this file contains the missile tables extracted from d2game.dll and d2client.dll and will save you a lot of time.

Part 1: getting the monster animations.  
Fire up Cv5 and load d2data.mpq.  
Once you are inside d2data.mpq, browse into the DATA\\GLOBAL\\MONSTERS\\CW\\ folder and select CWTRLITWLHTH.DCC this is the cows walk animation.  
Click the lower SAVE button, select “Blizzard compressed image/animation” as your file format and name the file COWMISSILE and save it. Now you will see a panel, which asks how many directions you want your animation to have, select “8 Directions X 10 Frames” (write this down somewhere as it will help you later on).  
Click OK and save the file. Move the file into the DATA\\GLOBAL\\MISSILE\\ folder of your mod making directory.  
Now that this part is done we need to replace an existing missile with your missile, to do this we must create an unused missile, how do we do that you ask? By removing a specific missile from an enemy, Open up monstats.txt in your spreadsheet and scroll down to the QuillRat row (row #65, populate ID 63) and go over to the MissA2, this column contains the ID of the missile the QuillRat shoots, change 7 to 8 to free up missile #7 in missiles.txt for our cow missile, Save the file and put it into the correct location.

Now after we have an unused missile we can start working on missiles.txt.  
Open up Missiles.txt and go down to the Spike1 row, this is Missile #7 (ID) and the row number should be 9, for now leave everything alone and go over to CelFile column, this column contains the file name of the Missile DCC animations, change it from SpikeFiendMissle to COWMISSILE, next go over to the AnimLen column and enter 10, this is the number of frames per direction of this missile, as you remember out missile has 8 directions and 10 frames for each of them. Go over to the ToHit column and change the entry from 1 to 0, this will make this missile always hit and not be defined thru your attack rating. Now change always explode to 1 so that this missile will always show its explosion graphic even if it doesn’t hit anything. Now we reach a small choice of yours, the trans column, this columns controls the amount of Alpha blending in the missile, this means the darker a pixel is the more transparent it will be in the game. If you want the cow to look like a real walking cow simply leave this as 0. Now go over to the MinDamage and MaxDamage columns and set the first to 100 and the second to 1000 (it doesn’t matter, use any damage value you want, but this will be fine for a test), set the LevDam1 to 3 columns all to 0, Type “cold” (without the quotes) into the Etype column and set Emin to 100 and Emax to 1000, this will make the missile deal 100-1000 random cold damage and 100-1000 physical damage. Set Elen to 1000 as well, to give the missile a 40 second freeze duration. Change the hitclass column to 0, to make this missile act as a elemental missile ratter then a physical missile, and last but not least change NumDirections to 8 this controls the number of directions the Missile DCC file has. (This is handled in missiles.txt since missiles do not have \*.COF or \*.D2 files that do this job).  
Save Missiles.txt.

Now we need to open itemtypes.txt to create the “Cow Launcher” base type  
Add a new line to the end of the file and enter Cow Launcher as the name, next enter “cowl” without the quotes into the type column (unless you used that code already!). Change Equiv1 to “tpot” without the quotes. Its important that we create a new type to avoid the game from drawing the throw angle used for potions! Change both repair and body to 1 and set BowLoc1 to rarm and BodyLoc2 to larm. Change the Throwable, Reload ReEquip and AutoStack columns to 1 set the Normal column to 1 so that this item will only spawn as normal (this is very important) go over to the rarity column and set it to 0 so that the game will exclude this type from the preset weapXX treasureclasses, go over to the storepage column and enter weap.  
Save the file.

Now we are getting close to ending the txt editing, how ever we will now open weapons.txt  
Add a new row to the end of the file and enter Cow Launcher as the name again, change the type column to say cowl, change the code column to say COW, Change alternategfx to axe and set rarity and spawnable to 1.  
Set mindam to 0 and maxdam to 1. go Over to the Nodurability column and change the entry to 1  
Go over to the normcode column and change the entry to say COW, set wclass and 2handedwclass to 1hs, set component to 5 and set hit class to 1ht as well.  
Set invwidth to 1 and invhieght to 1 as well, set stackable to 1 and change minstack and maxstack to 100, now enter 100 in spawnstack as well. Enter flpjaw in the flippyfile column and invjaw in the invfile column. Now go over to sound and enter 29, set transtbl to 5, Now to the really important part, change missiletype column to 7 this will make the game spawn our new missile when this weapon is thrown. Set durwarning to 7 and qntwarning to 3, set bitfield to 0. Set nightmareupgrade and hellupgrade both to xxx and change nameable to 0, and last but not least set permstoreitem to 1. (you can adjust all settings except for wclass, 2handedwclass, hit class and weapontype to whatever you want thought!)  
Save weapons.txt

Now we are getting even closer to the hex editing part, but first open up string.tbl and enter COW as a new code, make it translate to Cow Launcher and save string.tbl.

We have finally come to the point we will edit d2game.dll and d2client.dll at, now this is easier then many people think so don’t worry first off.  
We now need to open both missiles.txt and sounds.txt.  
After these two files are open go down to row #344 in Missiles.txt (RegurgitatorCorpseExplode) and write down the ID number somewhere its 342 for the matter of fact. Close missiles.txt and exit.  
Now switch over to sounds.txt and go down to row #1348 the id of this sound is 1346, next go to row #1353 and write down the ID which is 1351. now after we have the Ids of both the explosion and the sounds we can close these files.

Now fire up XVI32 or the hex editor your using. Open up d2client.dll and use your hex editors Go To Offset or Address option (In XVI32 its address > go to) enter F36D4 and click the Ok button.

You will be brought the beginning of the following array of 5 dwords.

30E2B36F 00000000 00000000 00000000 FFFF0000

The first one controls the movement graphics and is currently set to the default  
The second controls special impact graphics, we will not need it for this example.  
The next two dwords are important for us. The first one controls flight sound and the second one controls the impact sound. Fire up your hex calculator and convert 1346 to hex which is 542, now we must enter this in reverse byte order which will be 42 05, change the hex string to look as the following

30E2B36F 00000000 42050000 00000000 FFFF0000

Now repeat this step with 1351 which will be 547 and hence 47 05, now change the entry to look as the following.

30E2B36F 00000000 42050000 47050000 FFFF0000

After this is done we are left with the last dword which controls explosion graphics, now we need to convert the explosion ID of 242 to hex which will be F2, change the entry to look as this:

30E2B36F 00000000 42050000 47050000 F2000000

Save D2Client.dll.

Since we didn’t modify the way the missile acts in general we don’t need to edit d2game.dll.

Now we need to test our new missile, for this open Cubemain.txt and add a new row to the end of the file, name it cowtest and set enabled to 1 and version to 0, set numinputs to 1, set input 1 to say key, go to the output column and enter COW and finally set term to 0.

Now just launch d2 and put a key In the cube and hit transmute it will turn into a jawbone named Cow Launcher, now equip it and go out of town, throw it and enjoy your Cow Launcher. MOOOOOOOOOOOOO.

---

While this is NOT a tutorial and isn't meant to be, I post it here because it may be of interest to many people who want to have hellfire runes in their mods.

Generally to start, this will require minor code editing as well (for the actual mine effect) but nothing that will actually be complicated.

While the goal seams to sound very hard to reach, it isn't, I got the idea wile I was at work today.

First you will need to create an unused missile, for this follow the standard quillrat procedure (etc).

Now you need to create a weapon and link it to this missile, for this create some kind of new throwing weapon (do NOT fill minmissdmg and maxmissdmg, else your mine will be useless). For the missile use the ID of the 'unused' missile, in this case it was a quillrat spike.

now you need to do the second most important thing. Give the missile some static graphic (like the deathsentrymissile.dcc (unused)) this will be the animation that shows wile the missile lays on the ground. Now the most important step. Set Vel and MaxVel to 0. Range will be like 'time until explosion', remove pierce and make sure alwaysexplode is set to 1.  
Give it some damage, for this case we use cold damage.

Now open d2client.dll and give it the graphical collision function of freezing arrow. Repeat this with d2game.dll just with the actual effects this time, give it freezing arrow collision effects.

Now thats basically it. If a monster steps on your landmine it will explode and freeze everything in a specific radius :-)

\*for those who want to see how the missile data for the dlls should look:

d2client  

|     |
| --- |
| **Code:** |
| 30 E2 B3 6F 30 5A B3 6F 00 00 00 00 7E 09 00 00 1E 00 00 00 |

d2game  

|     |
| --- |
| **Code:** |
| 50 8D C5 6F 80 36 C5 6F 00 00 00 00 |
