---
title: Character Graphics Conversion Tutorial 1.0
summary: >-
  This tutorial is a overall description of the steps needed in order to change
  character graphics, it is not meant to be a step by step guide, not is it
  trying to be one. I will try my best to explain…
keepId: 174
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 8074
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=174'
---
This tutorial is a overall description of the steps needed in order to change  
character graphics, it is not meant to be a step by step guide, not is it trying  
to be one.  
I will try my best to explain the basic steps and techniques of character  
graphic conversions within this tutorial, in general it is similar to monster  
graphic conversions with a few small differences.  
Following this tutorial you will convert the paladin into a Diablo storm  
lord.

What you will need:  
A spreadsheet program of your choice, preferably one that can do  
mass-replacing.  
ANIMDATA\_EDIT, because we will need to edit animdata.d2 quite a lot.  
A hex editor of your choice.  
Some patience.

Required knowledge:  
Converting monster animations.  
Basic hex editing.

Short note:  
Characters use 16 directions, however we dont need 16 directions for the  
paladin, as he uses no skills that require 16 directions in their sequences, and  
even if he would use 16 direction sequence skills, this would be changeable by  
editing d2common.dlls sequence tables, in case you convert the barbarian you  
would need to do so, as whirlwind uses 16 directions in its attack sequence.  
Making our life easier:  
Because we dont want to create animations for each weapon and armor the  
character can wear we will do something very simple, we will simply make all  
items in the game use the same equipment graphics.  
To do this open up armor.txt and scroll over to column U, which should be  
called “alternategfx”, this column controls the three letter code used by  
the item when the character equips it, set all of the entries in this column to  
“lit”, light stands for “light” or “no equipment” for this specific  
case.  
After this scroll over to column AK which is “rArm” this controls the  
special armor setup for the right arm when the character equips it, anything  
that has a entry in this column should be set to 0, which again means “no  
equipment”, do so for all of the following columns, AL, AM, AN, AO, AP and AQ  
each of them controls a specific body part, just for reference herein “lArm”  
controls the left arm graphics, “Torso” controls the torso graphics, “Legs”  
logically controls the graphics used for character legs, “rSPad” controls  
the right shoulder pad and “lSPad” controls the left shoulder pad.  
Now scroll over to the “transform” column, this controls color shifts for  
magic items when they are equipped, even thought we have set everything to “lit”,  
it wont prevent the game from changing your characters color, hence set  
everything to 0 in here.  
Now open up weapons.txt, in here the steps are quite similar, first go to the  
“alternategfx” column and set everything to “lit” in here the same way  
you did in armor.txt.

After you are done with this set everything in the “transform” column to  
0 in weapons.txt as well, it again has the same effects as what we did in  
armor.txt.  
Now we are done with these preparation steps and can finally start with the  
real work, which is significantly easier now, as we only need to create “lit/hth”  
animations.  
The animations themselves:  
First off, I will not explain how to create new DCC files, for this please  
read the extended animation editing tutorial by Joel, Alkalund and myself, as  
the process is identical.  
However there is one small thing that I should state for this specific step,  
the paladin, like every other class used many modes you would not see if you  
only edit monster animations.  
For a short listing, here are the modes used by the paladin:  
A1 Attack 1  
A2 Attack 2  
BL Block

DD Corpse  
DT Death  
GH Gethit  
KK Kick  
NU Neutral  
RN Run  
S1 Skill 1  
SC Cast  
TH Throw

TN Town neutral  
TW Town walk  
WL Walk  
Each of these uses a specific amount of hit classes, but we dont want to  
create all of those animations for all of those hit classes, so we simply need  
to create dummy COF files, these dummy cof files will have endings such as  
PAA11HS.COF, but will actually just tell the game to use HTH animations ratter  
then 1HS, this process will be documented in the next section of this tutorial.  
Here is a short list of what hitclass modes and attack trigger bytes (in case  
that specific mode is a attack animation of course, 1=melee attack, 2=spawn  
missile object, this controls the event that happens when the “damage frame”  
is loaded for the specific animation, its better to call it “trigger frame”  
thought, as it can be used to trigger other events as well) the specific modes  
require, however please remember this the hitclasses per animation are different  
for most characters, this list applies only to the paladin:  
A1 1hs(1), 1ht(1), 2hs(1), 2ht(1), bow(2), hth(1), stf(1) and xbw(2)  
A2 1hs(1), 1ht(1), 2hs(1), 2ht(1), hth(1), stf(1)  
BL 1hs, 1ht, 2hs, 2ht, hth  
DD hth

DT hth  
GH 1hs, 1ht, 2hs, 2ht, bow, hth, stf and xbw  
KK 1hs(1), 1ht(1), 2hs(1), 2ht(1), bow(1), hth(1), stf(1) and xbw(1)  
NU 1hs, 1ht, 2hs, 2ht, bow, hth, stf and xbw  
RN 1hs, 1ht, 2hs, 2ht, bow, hth, stf and xbw  
S1 1hs(1), 1ht(1), hth(1)  
SC 1hs(2), 1ht(2), 2hs(2), 2ht(2), bow(2), hth(2), stf(2) and xbw(2)  
TH 1hs(2), 1ht(2), hth(2)  
TN 1hs, 1ht, 2hs, 2ht, bow, hth, stf and xbw

TW 1hs, 1ht, 2hs, 2ht, bow, hth, stf and xbw  
WL 1hs, 1ht, 2hs, 2ht, bow, hth, stf and xbw  
Dummy cof files:  
Now, after you know which cof files to create we will have some minor work in  
front of us.  
Fire up your hex editor and create a new blank file, the reason we aren’t  
editing the existing cof files is simple, we dont need a quintillion overlay  
files do we?  
Instead of creating invisible animations for all of the player components all  
we will do is simply eliminate the layers from the cof files by re-writing all  
of them.  
However, we dont need to re-write all of the 91 cof files manually, all we  
have to do is create 15 “hth” cof files and simply copy these as often as  
needed.  
First create “hth” cof files for each of these modes, hence you will have  
PAA1HTH.COF, PAA2HTH.COF, PABLHTH.COF, PADDHTH.COF, PADTHTH.COF, PAGHHTH.COF,  
PAKKHTH.COF, PANUHTH.COF, PARNHTH.COF, PAS1HTH.COF, PASCHTH.COF, PATHHTH.COF,  
PATNHTH.COF, PATWHTH.COF and PAWLHTH.COF.  
Now after you created all of these cof files (please see the Extended  
Animation Editing Tutorial for this one too.) Now copy each of these as often as  
you need to get all of the modes with their hitclasses as pointed out in the  
previous section.

So as an example you should have PAA1HTH.COF, PAA11HS.COF, PAA12HS.COF,  
PAA11HT.COF, PAA12HT.COF, PAA1BOW.COF, PAA1XBW.COF and PAA1STF.COF.  
Now you should have a total of 91 cof files, all that you need to do now is  
adjust the trigger frames for two of these cof files, hence PAA1BOW.COF and  
PAA1XBW.COF, since PAA1HTH.COF used the 01 trigger byte, for these specific  
animations you must set the trigger byte to 02, as they are releasing missiles  
ratter then doing melee damage.  
After this step is completed all you need to do is edit animdata.d2, this  
process is documented below.  
Animdata.d2:  
Finally we have reached the final state, extract the contents of animdata.d2  
using animdata\_edit so that we can edit the file in our spreadsheet program,  
this process mainly requires patience, find all of the PA##### entries and  
adjust their frame count and “trigger frame” location, please note that the  
game may crash or cause flashing animations if you dont adjust the “trigger  
frame” to match the cof files exactly.  
Another note is that animdata\_edit translated the file into decimal, which  
means you dont need to type hexadecimal numbers in the frame column.  
While this process may take a while because you need to edit 91 entries, its  
by far not as complicated as one may expect.  
Its done:  
Finally, its done, open up the game and create a new paladin or use a old  
one, please note that until you load the characters, they may appear messed up  
as floating torsos, dont worry about this, its just because the game still has  
other armor modes saved for them, once they are in the game it will become  
normal.
