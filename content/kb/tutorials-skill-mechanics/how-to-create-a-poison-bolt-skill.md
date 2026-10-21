---
title: How to create a Poison Bolt skill
summary: Skills.txt Missiles.txt SkillDesc.txt Cubemain.txt PatchString.tbl
keepId: 454
author: Nefarius
credit: by Demon9ne
posted: '2008-10-25'
views: 9659
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=454'
---
\[1.10+\] Tutorial: How to create a Poison Bolt skill

This is a beginner-moderate difficulty tutorial:

This tutorial requires the following files:

Skills.txt  
Missiles.txt  
SkillDesc.txt  
Cubemain.txt  
PatchString.tbl

Tutorial requires the following software:

String Table Editor, I use Darkstorm's Table Editor.  
Spreadsheet Editor, I use D2Excel and Afj Sheet Editor.

Tutorial also requires:

D2 Character saved/starting with the horadric cube.

Notes:

Note here that as I am writing this tutorial I am making a Poison Bolt skill for the first time, so nothing I say is canon. Double-check your values against the Phrozen Keep's File Guides (In the Knowledge Base) as you follow along. This is always good policy when creating a new skill.

Open your text file(s). If you use D2Screech or Afj Sheet Editor you can open them all at once. If you use D2Excel you can open files as you edit them.

In Skills.txt add a new row at the very bottom of the file. This is where we are going to begin our new skill. To do this, we're going to start by copying a similar skill, so select Fire Bolt (Row 36) and copy/paste it in the new line you just created. Change the first value to 'Venom Bolt' and the second (Id) to the next sequential row number. Remove the third value ('sor') in the charclass column and add 'nec' if you're creating the skill for a Necromancer. Leave charclass blank if you're creating the skill for an item. Lastly, jump to the value for reqlevel and set it to -6. This is going to help us test our new skill. Save your file.

Open Cubemain.txt and create a new row. Set the values in the row to the following:

description: Test Venom Bolt  
enabled: 1  
version: 100  
numinputs: 2  
input1: weap,any  
input2: tsc  
output: usetype,nor  
mod1: oskill  
mod 1 param: (The Id of the line you just created in Skills.txt)  
mod 1 min: 1  
mod 1 max: 1  
\*eol: 0

Save it. It's time to make sure everything is working properly before we turn this fire bolt into a poison bolt. Create a new character (or use an old one) and cube any weapon with a scroll of town portal to add your new skill to the item. Because we set the reqlevel in Skills.txt to -6 you should be able to test it at level 1. Go fry some quill rats in the Blood Moor and then exit to the main menu and Alt-Tab to your spreadsheet editor. We're going to start changing this skill in controlled steps.

Open Skills.txt. The first thing we're going to do is make this skill look and sound more like a poison bolt. Change the following values in our Venom Bolt row:

stsound: necromancer\_poison\_cast (the sound when cast by a player)  
castoverlay: (none) (the overlay graphic when the skill is cast)  
ItemCastSound: necromancer\_poison\_cast (the sound when cast from item)  
HitClass: 176 (the sound made when target is damaged by the skill)

Save your file and test your skill changes.

Open Skills.txt and change these values in the Venom Bolt row:

srvmissile: venombolt (Server-side missile in Missiles.txt)  
cltmissile: venombolt (Client-side missile in Missiles.txt)

Save that and open Missiles.txt. Create a new line at the bottom and copy/paste necromage1 (Row 208) into it. Change the first and second values (Missile and Id) to 'venombolt' and the next sequential row number. Also change the following values:

Red: 64 (Light radius color)  
Green: 255 (Light radius color)  
Blue: 64 (Light radius color)  
Skill: Venom Bolt (Damage values will be pulled from Skills.txt)

Save it. Go ahead and test it again. You should now see a missile that both looks and sounds poisonous. The problem is that our missile is still dealing fire damage after having cloned fire bolt. Let's change that in Skills.txt by changing the following values in the Venom Bolt row:

skilldesc: Venom Bolt  
EType: pois  
EMin: 17  
EMinLev1: 12  
EMinLev2: 17  
EMinLev3: 20  
EMinLev4: 22  
EMinLev5: 24  
EMax: 17  
EMaxLev1: 12  
EMaxLev2: 17  
EMaxLev3: 20  
EMaxLev4: 22  
EMaxLev5: 24  
ELen: 75  
ELevLen1: (none)  
ELevLen2: (none)  
ELevLen3: (none)

Save those. Open Missiles.txt now and delete the following values, which won't be needed:

Param8, \*Param8 Description, ResultFlags, HitFlags, HitClass, HitShift, SrcDamage, MinDamage, MinLevDam1, MinLevDam2, MinLevDam3, MinLevDam4, MinLevDam5, MaxDamage, MaxLevDam1, axLevDam2, MaxLevDam3, MaxLevDam4, MaxLevDam5, DmgSymPerCalc, EType, EMin, EMinLev1, EMinLev2, EMinLev3, EMinLev4, EMinLev5, EMax, EMaxLev1, EMaxLev2, EMaxLev3, EMaxLev4, EMaxLev5, EDmgSymPerCalc, ELen, ELevLen1, ELevLen2, ELevLen3, ELenSymPerCalc

Once saved, our skill should now be referencing damage solely from Skills.txt, which is important because we will be setting up SkillDesc.txt to pull the damage information from that file. If you test your skill at this point you will notice that though it works, there is no skill icon or hover information. It probably says 'An Evil Force' because it's looking for a non-existant entry in Skilldesc.txt. This is something we'll be correcting now. Open SkillDesc.txt and create a new row at the very bottom. Change it's name in the first column (skilldesc) to 'Venom Bolt'.

Change the following values for an item-only Poison Bolt:

SkillPage: 0  
SkillRow: 0  
SkillColumn: 0  
ListRow: 0  
ListPool: 0  
IconCel: 2  
eol: 0

Or like so, for a Necromancer Poison Bolt:

SkillPage: 2  
SkillRow: 1  
SkillColumn: 1  
ListRow: 2  
ListPool: 0  
IconCel: 34  
eol: 0

Change the following lines to add a skill title and description from the string table:

str name: VBolt1  
str short: VBolt2  
str long: VBolt3  
str alt: VBolt4

And change the next few lines as would be appropriate to a poison damage skill:

Str mana: StrSkill3  
descdam: 5  
descline1: 1  
descline2: 14

Save your file and open up your table editor. Open up your string table (probably patchstring.tbl) and add 4 new entries name 'VBolt1', 'VBolt2', 'VBolt3', and 'VBolt4'. Set them as follows:

VBolt1: Venom Bolt  
VBolt2: fires a poisonous bolt  
VBolt3: fires a poisonous bolt  
VBolt4: Venom Bolt

If you'd like your skill to have a more verbose and flavorful description, add to VBolt3. Save your string file when you are almost done. Lastly, you're going to want to open Skills.txt and remove the -6 from the reqlevel column (replace it with a 6 if your skill is for a Necromancer or leave it blank for items) and open Cubemain.txt and delete the row we created earlier (or set enabled to 0 if you plan to enable it again for future testing).

The skill is technically complete, but it is still a bit generic. Try playing with and changing other values in Skills.txt and Missiles.txt to come up with other variations of the same skill. Here are some ideas:

Skills.txt:  
cost mult (Cost multiplier if skill is added to an item)  
minmana/manashift/mana/lvlmana (Mana cost)  
ELevLen1-3 (Poison length added per level)

Missiles.txt:  
Light (Light radius size)  
Flicker (Light radius flicker)  
Vel, MaxVel (Missile flight speed)  
Range (Distance the missile travels)  
ToHit (Make skill require attack rating to hit)  
HitSound (Missiles sound on collision)

There are many other options. You could also make the missile turn into a cloud of poison when it collides with an enemy. Good luck and have fun tailoring your skill to your particular mod.

This is the first tutorial I have written in my time at the keep, so if you liked it leave me some praise! =) Observations and critique are also welcome as per usual.
