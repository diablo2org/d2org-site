---
title: Automagic.txt File Guide
summary: >-
  A. Name - Name for reference only B. version - 0 for cD2, 100 for LoD C.
  spawnable - Boolean can this automagic spawn on items D. rare - Boolean can
  this automagic spawn on rares E. level - required…
keepId: 222
author: Phrozen Heart
credit: by Ric Faith
posted: '2003-12-02'
modified: '2018-01-06'
views: 8847
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=222'
---
A. Name - Name for reference only  
B. version - 0 for cD2, 100 for LoD  
C. spawnable - Boolean can this automagic spawn on items  
D. rare - Boolean can this automagic spawn on rares  
E. level - required lvl of monster for automagic to spawn (see Annex A)  
F. maxlevel - maximum lvl that this automagic will spawn for, after which it will no longer spawn (see Annex A)  
G. levelreq - required character lvl to use item, may be used to increase base requirement  
H. class - class-specific automagic (ama,sor,nec,pal,bar,dru,ass)  
I. classlevelreq - for that specific class, what is the level req  
J. frequency - probability for that automagic to spawn (see Annex A)  
K. group - to combine similar multiple automagics, also to calculate probability (see Annex A)  
L-W. (refer to the Magical Master Code List from the Keep)  
modXcode - code of mod

modXparam - parameter for code (if any)  
modXmin - minimum value for code (if any)  
modXmax - maximum value for code (if any)  
X. transform - Boolean does the automagic perform a color shift on the item  
Y. transformcolor - code for the color that it will be shifted to  
Z-AF. itypeX - itemtypes that the automagic will spawn for (see Annex B)  
AG-AI. etypeX - itemtypes that the automagic will never spawn for (see Annex B)  
AJ. divide - factor in the reduction of price when selling to NPCs  
AK. multiply - factor in the increase of price, similar to that in skills.txt (see Annex C)  
AL. add - factor in increase of price, similar to skills.txt (see Annex C)

Annex A - frequency & group

The value in the group column is alse often known  
as the auto prefix, automagic number or the automagic code. This is  
used for reference from armor.txt and weapons.txt, primarily by items  
which always spawn with magical affixes (and without being magical) and  
initially by the amazon bows/spears/javelins, sorceress orbs, paladin  
shields and necro heads.

So in the event you wish to set an automagic for a  
new item, or give an automagic to an old item, you just have to add a  
automagic number to the relevant file (armor/weapons) and then proceed  
to play around in automagic.txt.

For my 1st example, I will make daggers (and their exceptional and elite forms) spawn with poison damage.

Starting in weapons.txt, find the lines of all the  
daggers and add 306 to the automagic. Now 306 is not a special number,  
but if you take a look in your automagic.txt, you'll see that it ends  
as 305, so a nice number to continue from is 306, tho you could start  
at 500 if you so please. Do not that the value cannot be more than 4  
digits.

Coming back to automagic.txt, starting writing up a  
new line. I recommend writing a new line so you can get a feel for the  
columns and what they will do.

Name - Poisoned Dagger  
Version - 100 (LoD game)  
spawnable - 1  
rare - 1 if you set this to 0, it will not auto spawn on rare daggers, I'll explain more later when tweaking  
level - 1  
maxlevel - can be left blank so it will always spawn, but I'll explain more when tweaking  
lvlreq - 1 or left blank so it'll always be useable  
class/classlevelreq - blank so everyone can use it  
frequency - 1 for now, I'll explain more later when tweaking  
group - 306, the same value as you put in the dagger lines in weapons.txt  
mod1code - dmg-pois (check out the Magical Master Code List)  
mod1param - 256 (10 sec duration)  
mod1min/max - 5/10 (deals 5-10 pois damage over 10 seconds)  
transform/color - only if you want, but you could make all of them green by putting 1,cgrn here  
itype - knif (same itemtype as the daggers so it can spawn)  
etype - none (you didn't put the group number anywhere else right?)  
divide/multiply/add - 0 (no cost modifiers)

Ok! now your daggers will always spawn with 5-10  
poison damage. The question now would be - why settle for 5-10 poison  
damage on a powerful dagger? Why not let the values increase and see  
better poison damage spawn on the higher lvl monster drops?

Now here is where the playing with level/maxlevel come in.

Let's say we want:  
Poison Dagger1 | Level 1-20, 5-10 poison damage  
Poison Dagger2 | Level 21-40, 10-20 poison damage  
Poison Dagger3 | Level 41-60, 20-30 poison damage  
Poison Dagger4 | Level 61 and up, 30-45 poison damage & 25% deadly strike

so we'd need 4 different lines, but all using the  
same automagic number. We can copy our new line and paste it 3 times so  
we have 4 identical lines. Then we can edit the level/maxlevel to suit  
our requirements, 1,20 then 21,40 followed by 41-60 and lastly 61, . We don't need to specify the upper limit for the last one coz the game will go figure that out themselves.

We'll need to edit the mods, change them to match  
our new values: 5-10, 10-20, 20-30, 30-45. For the last one, we want to  
add another mod, so mod2code = deadly, mod2min = 25, mod2max = 25.  
There is no param for the mod deadly.

Voila! now we have an 'upgrading' automagic. But we still haven't tried playing with the frequency yet.

Now let's say we want to let the automagics overlap,  
Poison Dagger1 | Level 1-25, 5-10 poison damage  
Poison Dagger2 | Level 15-45, 10-20 poison damage  
Poison Dagger3 | Level 40-65, 20-30 poison damage  
Poison Dagger4 | Level 60 and up, 30-45 poison damage & 25% deadly strike

you'll see that now previously they never coincided  
and now they do. Now what? It's exactly the same, but for the levels  
15-25, 40-45 and 60-65, there are TWO possible automagics. So one of  
them will randomly spawn. This will be determined by the frequency.

Let's say your frequencies are set at 5,3,2,1 in  
that order. So between levels 15-25, there is a chance that you can get  
5-10 poison damage or 10-20 poison damage.

Poison Dagger1, freq=5 & Poison Dagger2, freq=3  
So the chance to get Poison Dagger1 automagic is = 5 / (5+3) = 5/8 = 62.5%  
while the chance to get Poison Dagger2 automagic is = 3 / (5+3) = 3/8 = 37.5%

likewise, between levels 40-45,  
Poison Dagger2 = 3 / (3+2) = 3/5 = 60%  
Poison Dagger3 = 2 / (3+2) = 2/5 = 40%

If you overlapped more than 2 automagics, the  
calculation is the same, you'd just have more possibilities and hence  
more possible outcomes.

Annex B - itype & etype

I have added att% (%age Attack Rating) to all my  
exceptional and elite weapons via automagic simply by giving all of  
them the same auto prefix and setting it in the automagic.txt.

Under itype, I put weap (itemtype for all weapons)  
so that all of them can use the same automagic line instead of having  
one line for swor, another for axe, another for spea, another for pole  
(tho if this is your intention then by all means go ahead).

You can have multiple entries (up to 7) for itype  
so you could have 1 automagic for swor/axe/spea and another for  
pole/mace/etc. However, let's say I wanted to make swords have a  
different automagic.

att% 0 100 150 - for all other weapons  
att% 0 150 200 - for swords only

now I could either start listing all the possible itypes (and make it rather messy) or I could do this:  
att% 0 100 150, itype = weap (all weapons), etype = swor (but swords)  
att% 0 150 200, itype = swor (and nothing else)

This way, you can cut down the number of lines you require just by using a simple exclusion via itype/etype.

> **Note:** this is the same method used in the affix files.

Annex C - item cost

For the cost modifiers, there is one thing that you  
need to note. If you were to put an automagic for a skill on the item  
(ie. skill X Y Z where X is skillID, Y is min value, Z is max value),  
the cost modifier of the skill (in skills.txt) will not be on the item.  
This will make your 'skilled' items cost a lot less than their original  
intended amount. To easily remedy this, just use the same values for  
multiply & add as it is in skills.txt
