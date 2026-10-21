---
title: Lycanthropic Barb Hirelings (by reddot)
summary: >-
  This tutorial explains how to turn act 5 hirelings into Werebears and
  Werewolves.
keepId: 34
author: Phrozen Heart
posted: '2004-08-19'
views: 9314
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=34'
---
Well. Let's start. There two ways to make shape shifting bars.  
First: Once casted transform into were-form barbarian stay in this form until end of game (aura)  
Second: Barbarian randomly transform in were-form and back to human form in pointed time (cast)

When you need to make different actions for each way I’ll mark lines with \[aura\] and \[cast\]  
signs at the start of line. So u must determine which type more applicable for u.

At first I create two new skills in skills.txt that makes shape shifting works like auras  
Open skills.txt

Step 1:  
Copy 'Wearbear' line and 'Wearwolf' line at the end of skills.txt  
(Note: this skills name in txt files different from game name)

Step 2:  
Write new IDs. Actually 357 and 358, remove dru modifier (though it's not mean), change  
skilldesc and skills name to BarWearbear and BarWearwolf.

Step 3:  
Main! srvdofunc column probably shows how skill will work.  
\[aura\] Set this column to '65' like all paladin auras  
\[cast\] Set this column to '18' like assassin auras, armor cast

Step 4:  
columns started from aura describes aura parameters - duration, bonuses. I left them for  
future editing. I haven't knowledge for this yet.  
\[cast\] you mast determine time in frames how long hireling must be shifted after cast.  
\[cast\] put this value in 'auralencalc' column. I use 2000(80 seconds).

Step 5: In Column ReqLevel set 1. MaxLvl make blank.

Step 6:  
Remove parameters under columns minmana, manashift, mana, lvlmana because hirelings  
don’t use mana

Step 7:  
\[aura\] Set column Aura to 1.  
\[cast\] Leave column Aura blank

Step 8:  
Remove cost mult and cost add (set to 0) parameters.

Step 9:  
\[cast\] You must also remove values in 'cltoverlaya' and 'cltoverlayb' columns if your 'auralencalc' parameter is to short.  
\[cast\] This will remove animation of transform.  
\[cast\] In negative case transformed hireling will flashes in orange color again and again.

Now save file skills.txt

At Seconds I divide barbarians into 2 group  
Open hireling.txt

Step 10:

Move to Bar hirelings at the bottom and change name in Subtype column

First three '1hs-Normal-Bear'  
then next three '1hs-Normal-Wolf'  
next two '1hs-Nightmare-Bear'  
next two '1hs-Nightmare-Wolf'  
next one '1hs-Hell-Bear'  
next one '1hs-Hell-Wolf'  
in next lines i copied values in same order

Step 11:

Now move to hiredesc column. So while we cant add new hire descriptions (I cant find how to do it)  
I use predefined desc

Set this column to 'def' for bears and 'off' for wolves.

Step 12:

Skill3 column: Set this column to 'BarWearbear' for bears and 'BarWearwolf' for wolves.  
Mode3 column:  
\[aura\] set to '1' for all barbarians (This tell game to use this skill like aura)  
\[cast\] set to '5' for all barbarians (This tell game to use this skill like usual kick)  
Fill Chance3, ChancePerLvl3, Level3, LevelPerLvl3. I fill this column with paladin auras  
parameters depending with difficulty and level.  
\[cast\] In this case column 'Chance3' shouldn't be high. When it’s high your hireling just  
\[cast\] will transforming in were-form very often and won't attack.

That's all with hireling.txt. Now save it and move files to your mod \\data\\global\\excel directory.

Then Launch the game.  
What you get:

QualKhek now suppose you two types of barbarians: Defensive (Bears) and Offensive (Wolves).  
Hire one of them, give equip to your hireling and go to any location.

Barbarian start to attack enemies and transform to were-form you choose.  
Hireling can use any skill in this form.
