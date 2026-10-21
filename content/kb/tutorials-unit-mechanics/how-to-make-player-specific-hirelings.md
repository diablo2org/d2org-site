---
title: How To Make Player Specific Hirelings
summary: Changing Animations Without Editing Graphics
keepId: 314
author: I_only_pressed_Esc
posted: '2005-01-27'
views: 13842
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=314'
---
Based on LiNkIn PaRk's tutorial  
\*Updated to include icons + sounds\*

This is a pretty easy task to do and can be applied to any monster within reason (I'll explain).  
I'm assuming that you will also have D2Mod and the Hireling.dll installed.

Files needed:  
States.txt  
Monprop.txt  
Monstats.txt  
Pettype.txt  
Sounds.txt

Tools needed:  
D2excel or AFJSheet

Ok, for to transform your hireling to look like an Amazon, follow the instructions:

1\. Create a new line in states.txt and enter the following into the collumns specified.

State = Amazonset  
ID = (next number in sequence)  
Transform = 1  
Disguise = 1  
plrstaydeath = 1 (these 3 death settings work the death animations)  
monstaydeath = 1  
bossstaydeath = 1  
hide = 1  
udead = 1 (can't remember why I needed this collumn filled so have left this in for this tutorial)  
bossinv = 1 (this makes the weapons + armour display)  
gfxtype = 2 (this number controls the monster type 1 = monster 2 = player)  
gfxclass = 0 (this number controls the monster id) see below  
eol = 0

gfxclass numbers:  
0 amazon  
1 sorceress  
2 necromancer  
3 paladin  
4 barbarian  
5 druid  
6 assassin

To get your hireling to look like a Necro just change the gfxclass entry to 2.

2a. Applying the state.

Open Monprop.txt and create a new line and enter the following:

ID = Amalook  
prop1 = state  
par1 = (the number you gave the state above)  
min1 = 1  
max1 = 1  
eol = 0

2b. Open up Monstats.txt and look for hcidx 271 which is the rogue hireling line. Now just type in the monprop collumn Amalook which is the name for the new monster property you created above. Start the game and your hireling will now look like an Amazon and will display armour + weapons correctly. For to apply this for each Acts hireling, goto these lines and add the monprop, 338, 359 and 560, 561.  
There are 2 for Act5 but I'm not sure which one is the correct one.

3a. Applying the state to monsters.

To apply the state to monsters is different.  
You must use 1 for the gfxtype and then pick the monster ID from monstats.txt. See below.

3b. Applying the state to monsters.

Well, there is limitations on this. First, you cant' apply the player look to monsters unless they are alligned monsters ie: hirelings.

Second, the monster that gets the state applied to it must either have the same or less animation parts than the monster being used for the new look, otherwise you get missing animation sequences.

I have test monsters using the Mephisto disguise but he didn't display his aura for some reason but he does use his dc6 death animation.

4\. Changing the sounds and icons.

The icons is easy, just open up pettype.txt and in the hireable line just change the micon entries to Amazonicon for Amazon, Assasinicon for Assassin etc.

The sounds, open sounds.txt and copy and paste the lines starting at index 4612 to the appropriate rows slighty further down depending on if your hireling is male or female.
