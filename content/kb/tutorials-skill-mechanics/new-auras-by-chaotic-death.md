---
title: New Auras (by Chaotic Death)
summary: >-
  For this tutorial we will be making an aura for the paladin that regenerates
  life and adds a % faster regeneration to mana.
keepId: 23
author: Phrozen Heart
posted: '2004-08-19'
views: 13695
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=23'
---
The first thing we do is open up states.txt. Under the states column, find 'meditation'. It should be ID number 48. Copy this entire line, and paste it at the bottom of states.txt. You should now have two lines of meditation. Rename the bottom one (the one you just pasted) to 'regen', and give it any unused ID number in states.txt. I suggest using 182, or the next line after the last one.

Now we want this to take immediate affect, so leave the 1 under the immed column alone. We are now done with states.txt, but if you want to have a different overlay for this aura, put the name of the file in the column 'overlay1' and the column 'overlay2'. Save states.txt, as we are done with it now.

Next open skills.txt. Find Meditation, its skill ID should be 120. Again, copy this line, and paste it again at the bottom. Change the skill's name to want you want it to be. But for us here, it will be 'Regeneration'. Change the ID # so it doesnt cross-over with any of the other skills. Now under the skilldesc column, put 'regen' there.

Still in skills.txt, skip over to the aurastate and auratargetstate column. Under both of them, put 'regen'. Now skip over to the aurastat1 column. It should say 'manarecoverybonus' there. Next to it, in the aurastatcalc1 column, it should say 'ln34'. This is fine, since it is telling the game to recover our mana faster, which is part of what we want. Now go to the aurastat2 column. Under there, we will put the code for regenerating life, which happens to be 'hpregen'. Under aurastatcalc2, put 'dm34'.

Now, still being in skills.txt, go to the right and find the reqlevel column. Under there you should put 1, since we want to test this A.S.A.P. You can go back and change this later. Make sure you remove any required skills under the reqskill1 - reqskill3 columns. We are now done with skills.txt, so save it and exit.

We are now in the last text file, skilldesc.txt. Copy the line meditation, and paste it again at the end of skilldesc.txt. You want to modify this so it doesnt replace any skills, so we must be careful here. Change the name of the skilldesc to 'regen'. Under the SkillPage column, put a 3 there. Under the SkillRow column, put a 2. And finally, under the SkillColumn column, put a 1. This is telling the game where to put the skill. Save skilldesc.txt, and we should now be done.

To get this to work, run the game in -direct -txt mode. Have fun and enjoy!

NOTE: The description and name of the skill is in the tbl files. The magical properties it has is located in skills.txt I believe.

P.S. Joel showed me how to do this, and I put the information into a tutorial.
