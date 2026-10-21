---
title: New Summonables (by Thulsadoom)
summary: How to create new summonable monsters as skills.
keepId: 26
author: Phrozen Heart
posted: '2004-08-19'
views: 18720
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=26'
---
First are the .txt files we will be using.

Pettype.txt  
States.txt  
Monprop.txt  
Monstats.txt  
Monstats2.txt  
Skills.txt  
Skilldesc.txt

The first thing I did was open up Pettype.txt to create your new pet.

Now create a new line and name your pet.

Lets use earthelemental for now.

Remember the name or write it down as skills.txt column 'pettype' needs the name not the idx.

Next change the idx to the next sequential number in the list, and as long you dont want to put any restriction on what can be summoned along with this creature, leave the group column empty.

Otherwise put the same group number in this field as the group number of the monster you would like to restrict from being summoned with this one.

Base max: not sure what it does but all my summons have this column set to 0.

Set warp to 1, I beleive this allows the creature to 'follow' you when you get too far away.

Range: again, not sure, but it might allow you pets to attack from a distance, but as far as I can tell it does not work.

Next, set partysend, unsummon, and automap columns to 1.

In the name column put the name of the string to be used in patchstring. this particular one determines the name you see at the top of the screen over the pet icon.

drawhp set to 1 puts the life bar on the afforementioned icon.

icontype: as per vendanna 1 is just an icon, while 2 will display the icon and the number of pets. so if you only spit out one of these, use1. for multiples use 2.

the golem has a 3 and the druids vines and spirit auras have 3's as well.

baseicon is the name of the icon that will be placed at the top of the screen when you have summoned the creature.

I believe the mclass1, 2 and 3 and the micon1, 2 and 3 columns are all used to set multiple types of monsters as the same pettype. Use the id from monstats (I think) for mclass and icon names for micon. These appear at top of screen when they are summoned.

Make sure there is a 0 in eol field and save pettype.txt.

Next, open up states.txt. In this file I will show how to change the color of a creature so that they are easily recognized.

Copy any of the lines to the bottom in a new row, I dont think it really matters, but you could find a state with little text in its fields, because the only thing I used was the colorprI and colorshift columns. But first, name the state and set the id to the next sequential number in the list. You'll need this number in the next .txt file.

In colorpri, put a high number. I used 70. This dictates which states have priority over others. If you had a state with a colorprI over 70 it would appear and not this one. if it was below 70 then this would remain. this I thinks is only if both states are enacted at the same time.

Next set light-r, light-g and light-b to 255.

Colorshift: Paul Siramy has links at this thread to some excellent displays of the shades that colorshift will give you. CLICK HERE! just use the number of the pic in his link that gives the color you want, and put it in the colorshift column

Once you have the color you want set, make sure there is a 0 in eol and save states.txt. Just for the record Acromatic Aria informed me of this color changing procedure.

Next, open monprop.txt.

Create a new row at the bottom and name it. Use earthelemental just to make things easy. Youll need the name. Next, you will notice the prop, chance, par, and min and max columns. To have a state in your monprop:

Prop: state

Chance: leave blank

Par: enter the state # from states.txt.

min:1

max:1

Make sure you do this for normal, nightmare and hell difficulties.

monprop is also used to give your summons abilities. as per kingpin...

prop chance par min max

crush 100 0 100 100

this will give your summons 100% chance of crushing blow. thanks kingpin!

Make sure there is a 0 in eol and save monprop.txt.

Open monstats.txt.

Create a new row at the bottom.

Find the monster you would like to use.

Lets use thornhulk1 and copy to the new row.

Change the id to earthelemental and set the hcldx to the next sequential number in the list.

I left the baseid as it was and deleted the nextinclass.

all my summons have translvl of 0 so I put this to that too.

according to vendanna this field determines what skins are used for specific types.

still not exactly sure how to modify this field so will have to test.

NameStr is the name that will appear at the top with a life bar if you 'hover' over the summoned creature.

put 'myminion' in that field.

Put earthelemental in MonStatsEx.

this is the name of your monstats2 line that you will make in a bit.

In the monprop field, enter the name of the monprop entry(earthelemental) you created with the color state.

I left the montype field alone.

For AI, I use the NecroPet which seems to work well enough for physical combat, but I have yet to find an AI that allows my summons to use ranged attacks.

At best my 'archers' would run up to their targets and fire their bows.

Pretty sure code is the token and enabled column should already have a 1 in it.

Set the mingrp and maxgrp to 1's.

You can increase the velocity and run values as you see fit, but Vendanna has posted that if you are not using an aI with a run animation, the run/walk should be kept the same or I think the creature 'disappears' for a bit.

its happened to me before I just had no idea what was causing it.

Thanks Vendanna!

all my summons rarity is set to 0.

Delete the level values.

leave the sounds, unless you want to change them, and move past all those numbers.

I didnt touch em, but it should be mentioned they handle aI functions I think.

Put a 1 in align, intown, opendoors, nevercount.

Next are a lot of statistical fields that you can set to whatever you want, resistances and hp, drain and cold effects. ac, and crit, which is your chance of critical hit. A little further down you can add elemental types if you so choose. I also deleted all the treasureclasses.

Make sure there is a 0 in eol and save monstats.txt.

Open monstats2.txt

Simply take the thornhulk1 line and copy it to the bottom in a new row, and change the name to earthelemental.

I didnt do anything else to this file. Kingpin posted that if you create a new line for a monster in monstats.txt then the creation of a line in monstats2.txt is neccessary.

Save monstats2.txt.

Open skills.txt.

Create a new line at the bottom.

Find a summoning skill to copy into it.

I used the druid's bear.

Change the name to earthelemental and set id to next sequential number.

should already be a dru in class if u used the bear.

Put earthelemental in skilldesc, that is the name of the skilldesc row this skill will use.

I left tha srvdofunc column at 119 and left everything else empty until the passivestat1 column.

There are a variety of effects and calculations you could use in these passivestat and passive calc fields. I will use a simple one. Im going to give the earthelemental enhanced damage 25% + 5% per level.

In passivestat1 put damagepercent.

put ln12 in passivecalc1.

that is a simple expression meaning parameter1 + (lvl \* parameter2).

that is all I will add now but you could add a few more if you wanted to.

Set summon and pettype to earthelemental.

Petmax can be done a few ways.

I think just a straight number will work, as will other calc's, but I use 'min(lvl,par3)'.

This will give you a max of what you set in par3 and will give you 1 extra for every level you put into it.

For example, I set that to 'min(lvl,par3)' and put a 5 in par 3.

I can summon 1 at skill lvl 1, 2 at lvl 2, up to 5 at lvl 5, where it will cap.(not the skill level).

You can somehow enter skills for your summons in the next few tabs but I havent got any of that to work yet.

Now find the column stsound.

its about a third of the way down.

set that to druid\_summon.

put enhanceable at 1 and attackrank at 0, like the other summons that I see.

For reqlvl put 1 for testing purposes, and delete reqskills.

set mana column to 5, again for testing purposes.

A little ways down is a field called calc1 with a desc column followed by calc2 and another desc.

I cant really figure these out but im theorizing that for a summons creature the first calc is for a life modifier of some kind.

Calc2 put ulvl.

this is for pets.

if you want to use a calculation somewhere based on the level of your pet skill, use the factor ulvl, not lvl.

I left calc3 and 4 empty.

Feel free to expand on these calc fields if anyone knows what they are for.

I thought also that perhaps they were for calculating the passives you get from synnergies, but not sure about that either.

In param1 put 25 and param 2 put 5. (25 +5/lvl)

Param 3 put 5. remember that is the total number of summons you can cast.

this gives you 5 at fifth level.

I didnt give them any more bonuses so that should be it for params.

You can set the tohit and tohit/lvl to whatever you want, as well as the damages.

I put the min at 30 and the max at 50, with lvl's 1, 2, 3, 4, and 5 for minlv1-5 and maxlvl1-5.

Add any elemental damages you want.

The .txt file Elem Type has all of them ithink and what code to use.

Just remember, any and all abilities or bonuses or elemental effects you add in this file will only be displayed by properly editing skilldesc.

By looking at some of the other formats used for other skills you can somewhat catch on to what StrSkill #'s to use but a lot of times I just used my own personal string entry to display the effect.

Make sure there is a 0 in eol and save skills.txt

Open skilldesc.txt and create a new line at the bottom.

I didnt copy anything into it for this last part.

name it earthelemental and set it to the page you want.

Im putting it on the summoning page, which is 1.

Skillrow 1 and skill column 1.

this puts it at the top left corner of the page.

Set listrow to 1, listpool to 0 and iconcell is the icon the skill will use.

I used 58.

For str name and short and long and alt I used the string names earth, earth1, earth2, earth3 respectively and left StrSkill3 in.

It displays 'mana cost:'.

Go over to descline1.

Put a 2 there.

this tells the game to use 'desctexta' + calculation 'desctextb'.

In Desctxta put StrSkill4 'Enhanced Damage:'

In Desctxtb put SrSkill23 'percent'

In Desccalca put ln12 to match the formula used in skills.txt.

This will display the enhanced damage percentage.

Now go to the Descline6. these description fields go in reverse, so this is like going to the top.

Descline6: 5

Desctexta: earthys (a string you will create)

Desccalca: 'min(lvl,par3)' -matches formula used in skills.txt.

Descline5: 13 (tells game to display the life of the creature I think)

No text or calcs are needed for the life modifier unless the creature had a +maxlife%.

in that case you would put the formula for the calculation in the desccalca1 field and it should display the modified life total.

of course there are other strings used to display the actual life bonus.

just find another skill that gives a bonus to life, and look at its desctexta and b.

Descline4: 9 (this displays the creature's damage)

Desccalca: ln12

Im not sure but I think that will add the percentage to the damage display of the summons.

The Desc2lines are for non level specific abilities, of which the earthelemental has none and the desc3lines are for synnergies which he has none.

But those two desc sections are the same as the first.

If you look enough at the other entries in skilldesc you could find existing strings to display what u need, or you can just create your own strings.

lastly, make sure eol has a 0 in it and save skilldesc.txt.

As an afterthought, these are the strings you would have to make for the above example.

myminion: An ally of the druid

earth: Earth Elemental

earth1: Being from the elemental planes

earth2: Summons an elemental being to aid you in combat.

earth3: Earth Elemental

earthys: Elementals:

That should do it. Place your modified .txt files into the /excel file.

Start up the game, gain a few levels and put some points in to check em out.

thanks to the keep, the keep's forums and kingpin and vendanna for their help.

hope this teaches somebody something.
