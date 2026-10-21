---
title: Magicsuffix.txt File Guide
summary: >-
  A. Name - Name for reference only B. version - 0 for cD2, 100 for LoD C.
  spawnable - Boolean can this suffix spawn on items D. rare - Boolean can this
  suffix spawn on rares E. level - required lvl of…
keepId: 235
author: Phrozen Heart
credit: by Ric Faith
posted: '2003-12-02'
views: 7660
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=235'
---
A. Name - Name for reference only  
B. version - 0 for cD2, 100 for LoD  
C. spawnable - Boolean can this suffix spawn on items  
D. rare - Boolean can this suffix spawn on rares  
E. level - required lvl of monster for suffix to spawn (see Annex A)  
F. maxlevel - maximum lvl that this suffix will spawn for, after which it will no longer spawn (see Annex A)  
G. levelreq - required character lvl to use item, may be used to increase base requirement  
H. classspecific - to be set if suffix only spawns for a certain class (ama,sor,nec,pal,bar,dru,ass)  
I. class - class-specific levelreq (see J)  
J. classlevelreq - for that specific class, what is the level req  
K. frequency - probability for that suffix to spawn (see Annex A)  
L. group - to combine similar multiple suffixes, also to calculate probability (see Annex A)  
M-X. (refer to the Magical Master Code List from the Keep)  
modXcode - code of mod  
modXparam - parameter for code (if any)  
modXmin - minimum value for code (if any)  
modXmax - maximum value for code (if any)  
Y. transform - Boolean does the suffix perform a color shift on the item  
Z. transformcolor - code for the color that it will be shifted to  
AA-AG. itypeX - itemtypes that the suffix will spawn for (see Annex B)  
AH-AJ. etypeX - itemtypes that the suffix will never spawn for (see Annex B) \*\*  
AK. divide - factor in the reduction of price when selling to NPCs  
AL. multiply - factor in the increase of price, similar to that in skills.txt  
AM. add - factor in increase of price, similar to skills.txt

---

**Annex A** - group, frequency and suffix determination

The group number is used to bring multiple suffixes (usually of the same type, though not necessarily) together. When the game is sourcing for an available suffix, it will only choose one from each group. This prevents 'overlapping' of suffixes, such as 2 '+1 light radius' would be rather wasteful.

The calculation of which suffixes are available are done in this manner - provided by Ruvanal:

Terms  
alvl = suffix level. For an item this is the level that is used to compare to the level and max level as found in the suffix and suffix tables. When referring to a suffix/suffix it is the value listed in the level column.  
ilvl = internal level (also referred to sometimes as the item level; better yet item creation level). This value is set at the time of an items creation. For monster drops the ilvl=mlvl. (BTW ilvl matches up with the terminology of the 1.07/1.08 cubemain.txt---'itemlevel pct a')  
mlvl = monster level.  
clvl = character level.  
qlvl = quality level. This value is found in the level column of armor.txt, weapons.txt and misc.txt. This is the value that is used to create the weapXX and armoXX treasure classes.  
magic\_lvl = magic level bonus on some items. Currently the only ones that have this are wands (normal and exceptional, but not the elite ones), staves, orbs (all with a value of 1) and circlets (circlet=3, Coronet=8, Tiara=13, Diadem=1.

When an item is generated that has suffixes the alvl is calculated\* from ilvl and qlvl as follows

If (ilvl>99) then {ilvl=99}  
if (qlvl>ilvl) then {ilvl=qlvl} ;\*\* see note below  
if (magic\_lvl>0) then {alvl=ilvl+magic\_lvl}  
else  
{  
if (ilvl<(99-qlvl/2))  
then {alvl=ilvl-qlvl/2}  
else {alvl=2\*ilvl-99}  
}  
If (alvl>99) then {alvl=99}

\*all calculations use integers so there are no fractions at any step.  
\*\* this new ilvl value is only used for the duration of this calculation. The ilvl value that is stored in the items data file will remain unchanged.

Now that the game has decided which suffixes are available for allocation, they will have to select their suffix from the multiple choices in the given group. These are done by the frequency column.

Frequency determines the probability that an suffix is selected, a higher frequency = a greater probability.

Assuming: Mod1freq=5, Mod2freq=3, Mod3freq=2, Mod4freq=1

and you can get only Mod1 & Mod2, then your probabilities would be:

chance to get Mod1 = 5 / (5+3) = 5/8 = 62.5%  
chance to get Mod2 = 3 / (5+3) = 3/8 = 37.5%

and if you could get all four,

chance to get Mod1 = 5 / (5+3+2+1) = 5/11 = 45.5%  
chance to get Mod2 = 3 / (5+3+2+1) = 3/11 = 27.3%  
chance to get Mod3 = 2 / (5+3+2+1) = 2/11 = 18.2%  
chance to get Mod4 = 1 / (5+3+2+1) = 1/11 = 9.1%

you can also use maxlevel to filter out the 'lower quality' suffixes at the higher level. By setting the maxlevel so that there is an overlap, you will always have that type of suffix available at all levels, while effectively keeping the suffix pool powerful.

---

**Annex B** - itype & etype

itype = Inclusion TYPE & etype = Exclusion TYPE

It determines that a given affix will spawn for all itemtypes in {itype} except those in {etype}

eg.

itype = {weap,armo} etype = {axe,helm,belt}

what this means is that the affix will spawn for ALL weapons and armor, EXCEPT for axes, helms and belts. By including and excluding itemtypes from receiving affix, you can make certain affixes only spawn for swords, or only spawn for anything but swords.

NOTE: this works the same way for any other .txt file with itype/etype, such as automagic, raresuffix/suffix
