---
title: Creating New Passive Skills (by GuyAskingQuestion)
summary: >-
  For this tutorial, I will create a new Paladin passive skill that grants him
  crushing blow. I will give this skill the simple name
keepId: 292
author: Phrozen Heart
posted: '2007-05-04'
modified: '2018-01-06'
views: 18810
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=292'
---
Thanks to Char for corrections and additional information.

Added Some colors to spice things up

Fixed afew typo's + gaps

Again more colours!

The following files are required:

Skills.txt

Skilldesc.txt

States.txt

Patchstring.tbl, Expansionstring.tbl or String.tbl

Tools required

Tabbed text editor (Excel, D2Excel, Afj)

String table editor (Peer TBL, Enquettar, Afj, Joel's)

First lets create the new skill

For this tutorial, I will create a new Paladin passive skill that  
grants him crushing blow. I will give this skill the simple name  
'Crush'.

Open skills.txt with your chosen  
Tabbed Text editor, go down to Iron Skin (column 147), and copy the  
entire line. Now paste this line at the bottom of skills.txt, if you  
don't put new skills at the bottom of the file you could cause  
problems.

Change skill,skilldesc and passivestate to Crush or your chosen passive name. Remeber what you put in these cels, your skill entry will be what you use for some item properties, such as oskill. skilldesc will be your entry in skilldesc.txt and passivestate will be your entry in states.txt.

Change the Id to the next highest unused number, and charclass to the name of the character that will use the skill.

Charclass codes

```
ama -> Amazon
ass -> Assassin
bar -> Barbarian
dru -> Druid
nec -> Necromancer
pal -> Paladin
sor -> Sorceress
```

Now move along to passivestat1, this contains the benefit your passive shall grant. These abilities come from Properties.txt's stat1  
column, so they are different from what you would use when creating  
unique items for example. The stat columns are simply refering to itemstatcost.txt,  
and some properties such as res-all will require you to use more than  
one passive stat. For an all resistance skill you would need to use  
each single resist's entry (except for Magic), each passive stat then  
would use the same calculation. Like so:

```
passivestat1 -> poisonresist
passivecalc1 -> dm12
passivestat2 -> fireresist
passivecalc2 -> dm12
passivestat3 -> coldresist
passivecalc3 -> dm12
passivestat4 -> lightresist
passivecalc4 -> dm12
```

Here I will add item\_crushingblow , you can add what your passive grants.

Next to that is passivecalc1,  
this is how the bonus is calculated. There are two simple calculations  
you can add here; ln12 or dm12, there are more complex ones also which  
can be found in skillcalc.txt, and  
you can do your own formulas here as well, like modified dm-formulas  
(for better diminishing returns effects). you can include all the  
pre-done formulas in your own formulas, and add things like:

ln12 + dm34

ln12 means whatever you have in par1, then adds par2 to it every level. Think of Fire Mastery, that adds a set amount at level 1 then adds a set amount every level.

dm12 means that par1 is the initial amount and par2  
is the max, the game uses a complex formula to work out the bonus  
given. Think of how 1.09 Cold Mastery worked, or how Natural Resist  
does.

Here I added ln12, because I wanted that style of skill. I find dm  
style skills are more 'one point wonders', which players put minimum  
investment into.

Next move along to reqlevel, this determines the level requirment of the skill, for testing purposes I put 1. Next to that is maxlvl  
which is the maximum level that skill can go to, I put 30 because thats  
how high my characters skills go. You can insert any number you please.

Now zoom along to Param1 thats the par1 I was talking about earlier, here I put 10. In Param1 Description, you don't have to put anything it is just a refrence cel. Next to that is Param2, in which I put 2, which is how much I want my skill to go up in power per level.

So in effect my skill's bonus is like this:

lv 1 10% Crushing Blow

lv 2 12% Crushing Blow

lv 3 14% Crushing Blow

**and so on.**  
If you put dm12 in passivecalc1, make sure your Param2 is higher than Param1,otherwise your skill will get weaker per level.

dm12 style skills will go like this

lv 1 ~10 (using my 10 in param1)

lv 2 18

lv 3 22

**lv 4 23**  
Giving coninously lower bonuses, until you get close to your Param2 value, where you get almost no effect per level added.

Right now were done with skills.txt, save and close it.

Next we'lll do the state

**Open States.txt**  
This is quite simple, just add a new row to the bottom and under state put your skills name, or whatever you put in passivestate. For me this was Crush.

Put a 0 under Eol and your done.

Save and close this file.

**Now onto skilldesc.txt**  
This one usually takes me a while, it's simple but theres alot to remember.

Copy the Ironskin entry and paste it at the bottom of the file.

Rename it to whatever your skill was called, or what you put in skilldesc, I put Crush here.

Skillpage is what page that skill  
will go on, look at other skills for the character you are using. I am  
putting Crush on the Paladins combat skills page, so I put 1 here.  
Which is the same as Zeal, which is on that skill page.

Skillrow is how far 'down' the tree  
the skill is, I am making my Crush skill a level 1 skill, so therefor I  
want it to be in the position of a level 1 skill. I put 1 here.

Skill Page Value, Skill Lv Requirment

1,1

2,6

3,12

4,18

5,24

6,30

Next is Skillcolumn, this  
puts the skill either on the right (1), center (2) or left (3) on the  
tree. I put 2 because there is no other Paladin skill in this place.

ListRow is not important for passives as you cannot select them.

IconCel is the number of the  
graphic you want to use fo that skill, for now it is best to use one  
from another skill of that character. You can add your own using a DC6  
editor, but that would be adding too much to this tutorial.

Str name, Str short, str long and str alt are the skills written descriptions. Copy the last skills (Royal Strike  
if unmodded) entries and add 1 to the numbers. Remember these as you'll  
need them to add to your string table.

Move along to decline1, this  
is where the game tells you the effect that skill grants. Iron skin has  
quite a complex method of describing itself, so we'll change that so it  
is easier to add your own description.

Put 2 in descline5, this is how the game reads the next part.

desctextb1 Can be used to add a %  
after the skill, or not. If you want a %, like I do for crushing blow  
add StrSkill23 here. If not add a placeholder entry, which you must add  
to the stringtables, for example add nosign! here; the exclamation mark  
is their just incase Blizzard have nosign in the string tables, and you  
might get some description you don't want.

Remember your placeholder, if you used one.

Desctexta1, tells the game what to display, for example Zeal has StrSkill30 in one of it's entries, these makes the game display 'Attack rating' or 'Bonus to attack rating'

You can look for a skill description with the same bonus your  
looking for, but I usually make my entry here up. Since I want Crushing  
Blow, I will add crush here. Remember what you put here as you'll need  
to add it to the string table.

Desccalca1, should be what you put in Passivecalc1, in skills.txt. Usually either ln12 or dm12.

Once your done save and close this file.

**String Edits**  
Now its time to add the skill entries. Open up your table file and add the following.

Str name -> Your skills name (Crush)

Str short -> A short description of what it does (Adds crushing blow)

str long -> A longer description of what it does (Blah blah blah, yakety smackety)

str alt -> Your skills name (Crush)

nosign! (or your placeholder) -> Put absolutely nothing here

your desctecta1 entry (crush) -> What is does, with a space afterwards, (Crush )

There you go, now you should be able to add as many passive skills  
as you wish. But remember every character must have the same number of  
skills, otherwise only the character with the most will be usable.

For further discussion and corrections please use the [designated thread](https://d2mods.info/forum/viewtopic.php?t=23818).
