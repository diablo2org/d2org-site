---
title: How to lightning enchant ANY monster
summary: Lightning enchant a monster without it being superunique
keepId: 466
author: Jase
posted: '2011-04-23'
views: 6913
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=466'
---
Hey, have you ever wanted a monster that emits lightning bolts like the act 2 scarabs when you hit them? Well usually you can only do this with superunique monsters, but with this method, you can lightning enchant ANY monster (this includes minions, too).

How? You will need these files:  
Skills.txt  
Missiles.txt  
Monstats.txt  
MonProp.txt  
Levels.txt (optional) <-- Only if you want to add a completely new monster

I'll assume that you already know how to .txt edit, and have some basic skill editing knowledge. If not, go check out some other tutorials if you're unsure of something.

Step 1: Open Missiles.txt  
Inside missiles.txt, copy the 'frozenorb' missile, paste it at the bottom. Also, copy the 'chargedbolt' missile and paste it under the copied frozenorb missile. Now, append the next 2 available id's to them, and rename them. For the sake of the tutorial, I named the frozenorb to 'LightningEnchant' and the charged bolt to 'LightningEnchantBolt'. Now, scroll right a little bit, and delete the values in the Vel and MaxVel columns. Range is how long it will emit bolts, I set mine to 5 with a LevRange of 1 (though these values are completely up to you, it needs a minimum of 1). Change the InitSteps, Activate, and LoopAnim to 0, set the celfile to 'null' (without the quotes). Set AnimLen to 2. Now keep scrolling right until you see frozen orb's old submissiles. Change these entries to your cloned charged bolt missile (LightningEnchantBolt).

Now for your charged bolt clone, the only thing that you need to change is the skill it refrences for damage, so change it to 'Lightning Enchant' under the skill column (without the quotes). Save missiles.txt and keep it handy.

Step 2: Skills.txt  
In skills.txt, copy the line for fire bolt. Add it to the bottom of the file, give it the next available id. Rename it to 'Lightning Enchant'. Delete the skilldesc entry (unless you want to use this on characters' gear or as a usable skill, but this is outside of the scope of this tutorial). In the srvmissile column, put your 'LightningEnchant' missile here. Keep scrolling right, delete the entries in the stsound and the castoverlay columns. Also do this for the ItemCastSound and ItemCastOverlay columns. Keep scrolling right until you come across the Etype and E damage columns. Change the EType to ltng and set some damage. I assume you already know how these fields work, if not check out the fileguide. My entries were all 5's across the board. Optional: I made the damage increase by the user's level, in the EDmgSynPerCalc field, I put (stat('level'.accr)) (though it's optional, it helps get the appropriate damage). Save skills.txt and keep it handy.

Step 3: MonProp  
Easy step. Make a new entry, and set the id to 'Lightning Enchant' (or whatever you want to, just remember the name). In the prop1 field, put: gethit-skill . In par1 put the id of your new lightning enchant skill (from skills.txt) . Set min1 to 100 (100% chance) and max1 to 1 (level 1). You can change these fields if you like, these are here just for learning purposes. Go to the end of this line and put a 0 in the EOL column. Save monprop.

Step 4: MonStats.txt  
Simply take the id from MonProp.txt and put it in the respective monster's MonProp field that you want to give the lightning enchant. If you're making a new monster you might have to put it on the map with levels.txt, but you don't have to for an existing monster. Save monstats.txt and now you're done!

Go into the game and hit your monster a few times. It should emit lightning bolts a lot like the scarabs in act 2.

ALSO: You can do this with just about any missile you can imagine, such as icebolts, firebolts, bone spears, hammers, you name it...

Anyways, enjoy!
