---
title: Creating Items from Corpses (by mouse)
summary: Creating a Find Item-type skill with more specific parameters.
keepId: 257
author: Phrozen Heart
posted: '2007-05-03'
modified: '2018-01-06'
views: 9871
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=257'
---
First edition: 12/09/03 by: mouse

2nd edition: 12/10/03

with much help from kingpin in this thread: [http://phrozenkeep.planetdiablo.gamespy ... hp?t=18681](https://d2mods.info/forum/viewtopic.php?t=18681)

and comments from others here: [http://phrozenkeep.planetdiablo.gamespy ... hp?t=17777](https://d2mods.info/forum/viewtopic.php?t=17777)

Files you will need:

skills.txt

skilldesc.txt (assuming you want to make this a player skill, if not ignore)

monstats.txt

monstats2.txt

treasureclassex.txt

This tuturial is for people who want a skill like find item, but want  
to define what it produces. There are still limits to what we can do  
though - at this point, items produced cannot be tied to the level/tc  
of the corpse used, only to the difficulty level you are in.

The way this will be done is by generating an invisible corpse,  
that drops from a tc you generate, and destroying the original corpse.

These notes are from my 'Distill Gem' skill for my forthcoming (someday) mod.

1: Setup 3 (or more) TC's that you want your skill to drop from in  
normal, nm, hell difficulty. For information on how TC's work, check  
out the 1.09 fileguide to treasureclassex.txt at [http://www.d2mods.com](http://www.d2mods.com)

2a: Clone the 'bonewall' entries in monstats.txt and monstats2.txt

2b: Change the Id to the name you want your invisible monster to have. Increment the hcIdx in monstats. Change the AI to Trap-Poison (this will make it be an invisible corpse, thx kingpin!)

2c: Enter the names for your created TC's in: TreasureClass1, TreasureClass1(N),TreasureClass1(H)

2d: close and save monstats, monstats2 and treasureclassex, you are done. (or leave them open if you love windows)

3a: Start a new entry in skills.txt. You can clone bonewall if you are bored, or just input the entries I tell you to.

3b: Enter name, skill, skillid, charclass, skilldesc. for srvstfunc & srvdofunc you have a few choices, but I would go with 15/31 (33/31 and -/31 also work, but I'm not sure exactly what they are doing yet)

3c: In summon enter the name you gave your invisible corpse in monstats.txt

3d: Set pettype to 'none'.

3e: IMPORTANT: Set summode to DT. This will cause the summon to be dead/corpse when summoned.

3f: set any sound parameters/overlays etc that you want, I used the sorc fire/lightning cast for my two skills.

3g: if you copied bone wall you might have a 22 in your cltstfunc field. as near as i can tell this is unnecessary. however, it also appears to be harmless.

3h: you probably want to set range to h2h unless you want the skill to be castable at long range.

3i: set anim,seqtrans,monanim to SC,SC,xx

3j: set SearchEnemyNear,SelectProc,TargetCorpse to 1,4,1

3h: all othe parameters are up to you with one note - it doesn't matter  
what you put in param1, etc because you are not actually affecting the  
drop rate or anything else - this is determined by the TC. So, what I  
did was just set the TC to a base 33% chance to drop a dem, then set  
param1 to display 33%. I started the skill at a really high base cost,  
and gave lower and lower mana (like teleport) as a bonus for putting  
more points into it.

4: that way you can set up skilldesc.txt with 7,StrSkill24,par1 in descline2,desctexta2,desccalca2 and it will display '33% chance'

I'm assuming you know how to set up the rest of skilldesc.txt

APPENDIX: USING GROUPS IN TCEX  
as per the post linked below, i think i have figured out some  
additional features of treasureclasse.txt. Here's what you can do:

A. set your summoned dead monster's level to the level of the skill (calc2, \*calc2 desc = lvl, pet lvl), and set NoRatio to empty.

B. Set up new tcs for your monster..however many you want - I set up 21 for my 'Forge Item' skill).

C. Put all tc's in the same group (ie use the same # here)

D. put incrementing levels in the level column. I used increments by 2, that way I can handle slvl up to 40 much easier.

E. Feel free to start your skill off in normal (in monstats.txt)  
with a high tc, say 'Act 5 Equip C' or something (to use premade  
tcs...). What will happen is that, (possibly since I'm using a tc with  
a built in downscale), the game will adjust the tc DOWNWARDS to the max  
of the act you are in.

F. Then for higher slvls, whatever level you feel the characters will have of the skill in NM, Hell, adjust the tc's level based on the level of the monster that you are summoning via your calc in skills.txt.  
G. Viola! I think. The game should adjust your tc upward when you  
summon a higher level monster - just make sure your nightmare &  
hell tcs are set to something within the group - probably the same  
thing you set the normal tc to i would imagine (otherwise slvl 1 in NM  
will generate a lot better stuff than slvl 1 in normal, or a lot  
worse).
