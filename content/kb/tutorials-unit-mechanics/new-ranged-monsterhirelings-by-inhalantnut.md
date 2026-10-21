---
title: New Ranged/MonsterHirelings (by inhalantnut)
summary: >-
  This tutorial allows for a ranged or melee hireling including adding
  hirelings. The main thing that separates this tutorial from others on the same
  subject is that this explains how to make a new hireling without them having
  to be melee only.
keepId: 30
author: Phrozen Heart
posted: '2004-08-19'
views: 9950
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=30'
---
**Credits:**  
Kingpin who told me how to make the AI work properly (the reason for this tutorial)  
Everyone else at the Keep. Without them this tutorial or modding as we know it would not be possible.  
Isolde: He wrote this awesome patch.  
If I forgot you please let me know and I will add you in (I'm sure I've forgot people, it's late).

**Files needed:**  
Hireling.txt  
Skills.txt  
States.txt  
Monstats.txt (Reference Only with optional changes)

First off we want to copy the Rogue hireling lines from hireling.txt to the end of the file. Choose only those lines where the version column = 100 (Expansion only) (the 0 lines may work for classic but I don?t know). Copy only the Rogue?s that say Fire in the subtype column. (The reason for this is because this is all that we need, copying more will also work)

Once you have these copied to the end of the file we need to change the Id. The ones with Id 0 should be changed to 29, Id 2 to 30, etc. This is to avoid duplicate Id?s, do NOT skip numbers, if you do I don?t think the game will be able to handle it.

That's it for this file for the moment.

Now open up skills.txt we need to make a new skill here. There may be other changes you want to make to this skill later, but for now this is the absolute minimum necessary to get this to work.

At the end of the file we need to add a new line.  
Fill in the following columns:  
Skill (A) = RogueVampire. (any name will do, just make sure you remember it and it?s not already used)  
Id (B) = next Id number.  
Srvdofunc (F) = 116 (same as the druid shapeshifts)  
Scroll over a ways?  
Passivestate (AU) = roguevampire (again any name will work, but I chose this one, it is the name of the state we are going to make in states.txt)  
Scroll over some more?  
Enhanceable (DF) = 1 (Determines if the skill can be enhanced, almost all are set to 1)  
Attackrank (DG) = 0 (What this does is still unknown to my knowledge, 0 works though)  
Range (DI) = none (h2h, and rng are the other choices, we want our skill to be used from anywhere (it?s a passive afterall) so we choose none)  
Anim (DU) & seqtrans (DV)= SC (SpellCast? Since it?s a passive I don?t think it matters, but this is what works)  
Monanim (DW) = xx (Blizzard seems to use xx when there is nothing that needs to be in this field, so just put xx in there)  
Scroll over some more?  
Reqlevel (EW) = 1 (unless you want your vampire to start as a Rogue then gain some levels and turn into a vampire)  
Scroll yet again? (this is a long file)  
Minmana (FQ), manashift (FR), mana (FS), lvlmana (FT) = 0,8,0,0 (Blizzard puts this for a skills that don?t require mana)  
Interrupt (FU) = 1 (Can skill be interrupted? Don?t think this matters for passives, but 1 works)  
InTown (FV) = 1 (Can this skill be used in town, if not your Vampire will be a Rogue while in town)  
Passive (GA) = 1 (Is this skill a passive?)  
Time to hit that scroll button yet again.  
InGame (HC) = 1 (Is this skill in the game? 0 will disable the skill)  
Got some more scrolling to do.  
Cost mult (IU) & Cost add (IV) = 0 (We don?t want a price on this skill)

Save this file, but don?t close it. Now onto states.txt

Go to the bottom of the file and we will add on a new line.  
Fill in the following columns:  
State (A) = roguevampire (or whatever you used for the passivestate in skills.txt)  
Id (B) = the next available id number  
Group (C) = I have a 3 in this column although I don?t think it matters. (This is to prevent 2 states with the same number from being applied at the same time. For example you can?t be a Wolf and a Bear at the same time)  
Transform (F) = 1 (Is this state going to transform you?)  
Disguise (M) = 1 (Will you be in disguise?)  
The only skill that doesn?t have a one in both of the above columns that has either filled in is Holy Shield, which transforms the shield but does not otherwise graphically change the Paladin.  
Setfunc (BA) = 14 (I have no idea, but since I copied the Bear state and it had this we do too. It probably has something do with what function that game uses to process this state)  
Gfxtype (BN) = 1 (Not quite sure what this does exactly but transforms have a 1 and summons have a 2 all other states have this column blank)  
Gfxclass (BO) = 131 (I?ll explain this in a second.)  
EOL = 0 (Just put a 0 here or the game will crash, it prevents problems that MS Excel causes)

Now we need to open monstats.txt and choose a monster (I?m choosing the vampire1) Copy it?s hcIdx (B) number into the Gfxclass (BO) of your state this determines what monster your state will turn you into.

Optionally you could clone a monster and put it and the end of the file and modify it to make it?s stats more appropriate but I leave that as an exercise to the reader. I?m sure by the time this gets posted there will be a tutorial about cloning monsters.

Now we can save and exit from states.txt. And go back to hireling.txt.

When we left this file we had just cloned a Rogue.  
Our next step should be to delete the text from the HireDesc (AF) field. We do this so we can tell the difference between our Vampires and the regular Rogues when hiring them.

Next we need to set the DefaultChance value to 0 for all of our Vampires. This is the chance that the vampire will do it?s default attack, and since it is actually a Rogue this is the chance that it will fire an arrow. Vampires don?t fire arrows so we don?t want ours to.

Skill1 (AH) = Here we need to put the name of the skill we just made. (RogueVampire).  
Mode1 (AI) = 4 (This is the mode that the Rogue uses)  
Chance1 (AJ), ChancePerLvl1 () = 0, 0 (This is the chance the hireling will use this skill, passives aren?t used so they don?t need a chance to cast it) (For more on this read below).  
Level1 (AK) = 1 (This is the level that the hireling?s skill starts out at, our skill doesn?t change based on what level it is so we?ll leave this at 1)  
LvlPerLvl1 (AM) = 0 (This is how many level?s the skill gains when the hireling gains a level. We put this at 0 for the same reason as above, this skill doesn?t change based on what level the user is).

Now our Rogue is a vampire, but it has no way to attack so it?s kind of helpless. So we need to give it some vampire like skills. This is the reason we left skills.txt open.

Find the skills that start with Vampire and copy them into the Skill2 ? Skill 5 columns. (VampireFireball, VampireFirewall, VampireMeteor)  
For the mode columns for all of these we use a 4.  
For the Chance column enter a number to determine how often the vampire will use this skill. I started each of mine at 25. You will want to adjust this to your preference however. For more on this read below.  
ChancePerLvl this is how much the chance column goes up per level the vampire gains. I used a 5.  
For the level column choose the level you think the vampire?s skill should start out at 1 seemed appropriate for me.  
And for the LvlPerLvl enter how many levels the vampire?s skill should go up when they gain a level. This is not a whole number it is divided by some other number. I?m guessing it is in 8th?s. 0, 5, and 10 seem to be the only values Blizzard used.

When you are done with that save all files and exit (be sure to exit). Now test it. When testing it remember that when hiring them the only way to tell the difference is that the Vampires do NOT have a description, such as (Fire Arrow) or similar.
