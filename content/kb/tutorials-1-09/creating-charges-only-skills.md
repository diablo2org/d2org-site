---
title: Creating Charges-Only Skills
summary: >-
  Intro: In this tutorial you will learn how to create special skills that are
  only available from charged items, without wasting character skills.
keepId: 209
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 7098
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=209'
---
Intro:  
In this tutorial you will learn how to create special skills that are only  
available from charged items, without wasting character skills.

Required Knowledge:  
Knowledge about monster AIs/AI Swapping and Skills.txt  
Base Skill Swapping / Hex Editing

What you will need:  
uniqueitems.txt  
skills.txt

monstats.txt  
d2game.dll  
d2client.dll

General Description of what we will do:  
Step 1 - Remove the Fire Hit skill from monsters.  
Step 2 - Making the Fire Hit skill useable by characters.  
Step 3 - Swapping the Fire Hit skill with another skill (of your choice in  
this case)  
Step 4 - Creating a Unique Item and attaching the new skill to it.

Step 1 - Remove the Fire Hit skill from monsters:  
For this step we only need monstats.txt  
To start scroll down to the Sand Raider rows (NUM 31-35, ID 29-33)  
Change BASEID from 7 to 28, this will make the Sand Raider monsters use the  
Thorned Hulk AI.  
Now scroll over to the AIPARAM# columns, these columns control various AI  
parameters determined by the BASEID.  
AIPARAM1 controls the chance to attack (in chase of the Thorned Hulk)  
AIPARAM2 seams to control the chance to use the frenzy attack.  
AIPARAM3 well, I personally don’t have any clue about this one, I usually set  
it to 25.

AIPARAM4 seams to control the chance to use attack 2. (MODE A2)  
Set these parameters to something that suites you best.  
Next change ELMODE to 5, in order for them to get the same “Beating Bonus”  
as the Thorned Hulks get. (This controls the MODE in which it is applied)  
Set ELTYPE to 9, which is STUN.  
ELPCT controls the percentage to apply this effect, set it to something around  
75 or 100, as you want.  
ELMIN / ELMAX control the amount of damage to do, since we are using stun,  
change these to 0.  
Finally ELDUR controls the effect length, in this case, we are using STUN and  
hence it controls the stun duration in frames (25 = 1 Second).  
Now after this is done scroll over to the SKILL1, SKILL1SEQ and SKILL1LVL  
columns, these control the skill applied thru the AI, it is VERY important to  
never give a monster skills that aren’t defined in its AI code, it will crash  
the game. (or may simply do nothing at all)  
Change SKILL1 from 156 to 215, this is the ID of the Hulk Frenzy. (156 = Fire  
Hit)

Set SKILL1SEQ to 0. After this you can save the file, you have just successfully  
swapped a AI and removed FIRE HIT from monsters. You may need to do some stat  
adjustments, but that’s not what this tutorial is about.

Step 2 - Making the Fire Hit skill useable by characters:  
Open up skills.txt and go down to row 158 (ID 156)  
Change CLASSREQ and MONSTER to 0, this will make it useable be characters in  
general. (without crashing)  
Next change ANIM to “cast”, this will make the game use the Casting  
animation if a character uses this skill.  
After this change ITEMEFFECT to 1, this will allow the game to spawn this skill  
on items without crashing. Save it and lets go on.

Step 3 - Swapping the Skill:  
Now the harder part (not really) has arrived.

Load up d2game.dll in a hex editor (XVI32 or HEX WORKSHOP for example)  
Go to offset EEAD8, here you will see the following hex string:

204ECE6F F04ECE6F

The first DWORD deals with the starting function of the skill, the second one  
deals with the ending function.

We will replace this skill with the “IMPREGNATE” skill of the act 5 putrid  
defilers.

First change the first DWORD to 00000000 so that it looks like this:

00000000 F04ECE6F

Basically, the IMPREGNATE skill doesn’t have a starting function.

Now however we will change DWORD two to the ending function of the IMPREGNATE  
skill:

00000000 A00BCE6F

After this is done save D2GAME.DLL (NOTE! Make backups at all cost if you are  
not familiar with hex editing, you should make backups anyway, but specially in  
that case)

Now open up D2CLIENT.DLL, go to offset CE898 you will see the following hex  
string:

00000000 FFFFFFFF 00000000 FFFF0000 200DAC6F

The first DWORD controls the sound played durning the casting animation.  
The second DWORD controls the graphical overlay used for this skill.  
The third DWORD controls the starting function of the skill. (Graphical)  
The fourth DWORD controls the missile attached to this skill. (Graphically,  
don’t use for non-expansion monsters!)  
The fifth DWORD controls the ending function of the skill. (Graphical)

Because impregnate doesn’t have a ending or starting function (in graphical  
terms!) you will need to change it to look as the string below:

00000000 FFFFFFFF 00000000 FFFF0000 00000000

But this is kind of dull and boring isn’t it, so we will spice it up a bit.

Change the sound DWORD to 90090000 this is the casting sound for bone armor.  
Now our hex string should look like this:

90090000 FFFFFFFF 00000000 FFFF0000 00000000

Now change the overlay DWORD to C2000000, this will make it use the Druids  
Lesser fire skill casting overlay (C3000000 would be Greater fire skill).

It should now look like this:

90090000 C2000000 00000000 FFFF0000 00000000

Save D2CLIENT.DLL

Now open up monstats.txt, and set the ALIGH column of the pain worm type  
monsters to 1, in order to make the monsters that spawn due to impregnate attack  
your enemies (instead of attacking you) For a temporary solution for the  
original putrid defilers set their spawnable column to 1, you can follow the  
above steps to swap the original IMPREGNATE skill with something like Bloodlust,  
this will make the putrid defilers cast Bloodlust on monsters.

Step 4 - Attaching the Skill to an Item:  
Finally the last part has arrive, In it we will attach the new skill as charges  
to an item:  
First open up uniqueitems.txt and add a new unique item, I wont explain this  
process because this is an advanced tutorial. Add the “charged” modifier to  
it and set the PARAM column to 156, this will make it use the FIRE HIT skill (aka  
IMPREGNATE). Next set the number of charges to something like 100 and leave the  
skill level at 1. Generate the unique item and load the game. ENJOY!!!

\*Note as mentioned above, you should make the original putrid defilers cast  
something else, because they will just create allies for you now

\*The charges will show as Charges of ATTACK, this cannot be fixed at the moment,  
but it will indeed use your skill.
