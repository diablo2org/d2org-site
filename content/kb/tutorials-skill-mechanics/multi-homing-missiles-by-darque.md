---
title: Multi-Homing Missiles (by Darque)
summary: >-
  This simple tutorial will show you how to make a multi-shot missile that homes
  in on its targets.
keepId: 42
author: Phrozen Heart
posted: '2004-08-19'
views: 13510
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=42'
---
This simple tutorial will show you how to make a multi-shot missile that homes in on its targets. I'll assume you've read through and understand The Beginner’s Guide To Mod Making v1.4 before reading this as you'll need to the know the basics of modding before you can make much use of this. I also will assume that you know how to edit txt files with D2Excel or other txt editors. This tutorial works with v1.10s of the LoD. I have not attempted this with older versions of Diablo II.

Required Files:  
data/global/excel/Missiles.txt  
data/global/excel/Skills.txt  
data/global/excel/skilldesc.txt  
data/local/LNG/ENG/patchstring.tbl(or substitute 'ENG' language code if not playing D2 in English)

First open skills.txt. Find the row with the skill named Teeth and copy it. Add a new row to the end of the file and paste the teeth skill to it. Rename the skill (I used Magic Missile). In the Id column change the number to the next available number. Change charclass to the class that you want to use the multi-missile spell. Your choices are ama, sor, bar, nec, pal, dru, and ass. Next, in skilldesc, type the same information as in the skill column. Scroll Right until you come upon the srvmissilea column. Type the name of the missile you will use. I will use magicmissile1. Repeat this for the columns cltmissilea, cltmissileb, and cltmissilec. You are now finished with skills.txt. Save the file and close it.

Now open missiles.txt. Find the row with the missile named lightningfury and copy it. Add a new row to the end of the file and paste the lightningfury missile to it. Rename the missile to the missilename you used in srvmissilea (I used magicmissile1). Again, in the Id column, change the number to the next available number. Now scroll right to the column s HitPar1. Change this value to a higher number. I use 30. Scroll further to the column cHitPar1 and type the same number in as in s HitPar1. These columns indicate how far the missile should look for a target. Scroll right again to the column Vel and MaxVel. I change this to 12 so that I can see the missile fly towards my enemy. You can change this value to your preference. Further to the right is a column named CelFile. Change this to what you want your missile to look like. I will use SafeArrow which is the same as the amazon's magic arrow and guided arrow skills. Next move to the column CollideType and change it to 6. Next move to the column AlwaysExplode and set it to 1. Move to the Skill column and change it to your skill name, in my case it is Magic Missile. Lastly, find the columns HitSubMissile1 and cltHitSubMissile1 and change it to the name of a new missile. I will use magicmissile2. You are now finished with the first missile.

For the second missile, copy guidedarrow, rename it to your second missile name (magicmissile2 for me) and give it the next Id. Go ahead and change a couple of columns for this missile to your liking, such as vel and CelFile. When finished, save your file and close it.

Now open skilldesc.txt. Copy the row with skilldesc teeth, add a new row and paste teeth to it. Rename skilldesc to the same as the skilldesc column in skills.txt. In the columns SkillPage, SkillRow, SkillColumn and ListRow, set it to an empty location on the skill tab for the class that you chose for your missile skill. In the columns str name, str short, str long and str alt, increment the last number used for skillname and type it in. In my case it would be Skillname282, Skillsd282, Skilld282, and Skillan282, respectively. Also, find the columnd desctesta3 and change the value to strmissile. You are now finished with skilldesc.txt. Save it and close it.

Now find and open your patchstring.tbl file with your table editor. Add the key Skillname282 and set the data to the name of your skill. Add the key Skillsd282 and type a short description of your missile. Add the key Skilld282 and type a long description of your skill. Add the key Skillan282 and set it to the name of your skill. Add the key strmissile and set it to ' missiles' without the quotes. Save your table file and close the editor.

Finally...try out your new skill!
