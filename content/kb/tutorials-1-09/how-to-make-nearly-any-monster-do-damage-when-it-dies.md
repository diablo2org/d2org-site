---
title: How to Make (nearly) any Monster do Damage when it dies
summary: >-
  Ok first of, this can be done only with monsters who have only a TR component
  (of course it will work on others as well, but it might cause display
  glitches, such as floating torsos and so on). To…
keepId: 214
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 5654
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=214'
---
Ok first of, this can be done only with monsters who have only a TR component (of course it will work on others as well, but it might cause display glitches, such as floating torsos and so on). To avoid this dont use this method on monsters that have a randomly generated appearence (aka skeletons, rogues and such), also I would personally avoid doing this on bosses, as this might cause crashes (not might, as I didnt test it on a act boss yet) and the last warning, do not use it on a ranged attacker, as this involves AI switching, your ranged attacker will become a melee attacker and I dont think you want that correct?

With this small note out of the way we can start:

What you will need: String.tbl, Monstats.txt, Montype.txt & Overlay.txt (note dont use overlays.txt if you want the death explosion on the bone fetishes to stay identical, as for now the internal tables controling monster overlays gfx/sounds etc are unknown)

PART I - THE MONSTER ITSELF

For this example we will clone a bloodmaggot and give it an exploding effect that deals damage to the player.

First off open MonType.txt and scroll down to row 182, copy the entire row (the name column has no effect, and is for reference only, I say this here since it is a common believe that this actually has a function, its easy to say, it has none, its just a row that is used for internal reference)  
Ok then, after you copied the entire row scroll up to row 110, paste the row you copied on this row (aka so that your overwrite it). Save the file.

Next open monstats.txt and go down to row #182 (populateID 180), copy the row and scroll up towards row#110 (populate ID 108) again do the same thing you did in montype.txt and paste the row here.

Now we need to do some editing:  
Change the Class column to say something like 'ExplodingMaggot'  
Next change baseId to 72 (bone fetish AI), set spawned to 1 if it isnt already.

Now go over to the Clear anything entered in the AI param columns.  
Now go to AIParam2, the higher this value is for the bonefetishAI the aggresive it becomes. do not set it to something like 100, this will simply be unfair, as it will always attack. Next go to AIParam3 this is the chance the enemy will retreat (as you prolly know the cannibals from act3 run away from time to time, this entry controls that) if you want a really annoying enemy set this to 50 or so

Next scroll over to the DeathDamage column and set it to 1. (note, this column is probably for reference only, nontheless i didnt do enough testing on this, so for a matter of safety set it to 1), If you want to make it even more annoying you can set DeadCollison to 1, this will make it so you cant walk over the corpses  
Now Save monstats.txt and exit

Open levels.txt, and for this test we will spawn the new maggot in the bloodmoor, go to the Act 1 - Wilderness 1 row and scroll over to mtot column, set it to 1, now change m1 from what ever is in it right now to 108. Save levels.txt and exit your spreadsheet.

Now open String.tbl in a TBL editor and add the code you entered in the Class column in monstats (remember?), for this example I used ExplodingMaggot so ill guess you did to, enter the new code 'ExplodingMaggot' (exactly like that, just w/o the quotes), make it translate into like 'Exploding Maggot'.  
Save string.tbl and put all the files in the correct locations in the patch or your -direct -txt directory.

Now all you need to do is test :-)(and of course enjoy your new exploding enemies)

PART II - THE OVERLAY

Open Overlay.txt and go down to row #190. Change the FileName column from what it is now to 'Expansion\\Suicide\_Death\_Overlay' (no quotes)  
Next change the Frames column from 11 to 20.

Next go to the AnimRate column and change it from 16 to 6  
After this change the Trans column from 5 to 3,  
An last but not least change BloodLocal from 0 to 1 (controls blood that randomly drops due to the blast.)
