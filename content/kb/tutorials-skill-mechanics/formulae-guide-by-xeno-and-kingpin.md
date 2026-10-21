---
title: Formulae Guide (by Xeno and Kingpin)
summary: >-
  This tutorial (or guide rather) will teach you how to properly use the
  powerful formulae calculations now possible in D2.
keepId: 371
author: Nefarius
posted: '2005-11-18'
views: 22472
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=371'
---
A short intro. Some days ago I realized that in Blizzard text files one can use not only immediate numeric values (e.g. 150 or 3.14), but also formulae, which will be interpreted in the execution time, so being much more flexible (you can see examples below). This discovery was a great shock for me, because I couldn’t even imagine all the possibilities, versatile gameplay changes, when can be implemented due to using such formulae (skill synergy from clvl, “reduce casting delay” or “increase curse effectiveness” affixes, anyone ;) ) I became very interested in this theme, maybe because professional (programmer) motives. And so I decided to research this aspect of game mechanics and to write a guide on it in order to clear out all the things and to consolidate all the info about formulae syntax in one topic.  
This is my first guide at the Phrozen Keep. I’m a bit anxious about it :lol: But I know that our senior colleagues will correct and append this post if necessary. \[I've marked my questions with color\] Sorry for my poor English in advance. So it begins…

\[1.10\] Formulae guide

1\. What is the benefit of using formulae in txt files?  
The main idea of my answer to this question is that using formulae (i.e. through soft coding), one can implement things that for sure seem to require code editing. Some examples of such ideas:

a) various softcoded skill system changes, e.g. Char’s skill system (d2:elements mod), i.e. each skill requires \[slvl\] skill points to advance to \[slvl\] level, and the first skill point always costs required character level (e.g. 12 for Zeal or 30 for Frozen Orb), so you need hard investments into the skill to maximize it. I can also mention Will’s ideas (take a look through “One skill point per two levels, per skill...” post in General Mod Making);

b) even more deep skill interdependencies: 1)adding and ability of Skill Masteries to reduce casting delay, increase missile speed, widen aura range, e.t.c. only for particular skills, 2)making your minions using and gaining benefits from your passive abilities and active skills, 3)adding and modifying skill synergies not only for damage but also for versatile (each possible in the game) skill-specific parameters;

c): making multiple skill synergies ((C) xeno, 2004) (it’s somehow similar to skill sets with partial and full set bonuses);

et cetera, et cetera... (listing of such ideas is worth hundreds of separate posts in the appropriate forums).

2\. What files are used for this and what files allow using formulae?  
You’ll need to look through ItemStatCost.txt (ISC), Skills.txt (SK), Missiles.txt (MS) for identifiers (string entries) plus MissCalc.txt (MSC) and SkillCalc.txt (SKC) for using predefined internal functions. I guess almost each file, where immediate numeric values are applicable, allows using formulae. But to know this for sure, I’m now going to test some of them, including the most important: SK and MS.

3\. Formulae description.  
Now I’ll try to give a recursive definition (sounds scary, yeah?) and detailed description (examples are included, too) of Diablo II-formulae. Such formulae consist of some simple parts. So let’s study them firstly.

Simple formula is:  
1) an immediate integer or real value.

2) a reference to a predefined (i.e. hard coded) formula from SKC or MSC (such references can ONLY be used in SK and MS, respectively). \[can we define our own formulae in these files?\] Detailed description of available formulae is available in Appendix A.

3) a reference to a property of skill, stat or missile. \[I bet we can also reference monster props or particular item props, but I haven’t found it out yet\] Such reference can be written in one of the three possible ways:

stat(‘’.),  
skill(‘’.),  
\[missile? miss? (both do not work)\](‘’.),

where , and stand for ISC, MS and SK string entries (they MUST be written in single quotas, e.g. stat(‘level’.accr) or skill(‘Holy Shock’).edmn) and is a reserved word which indicates the particular property of stat, skill or missile, we want to reference. You can see the list and detailed descriptions in the Appendix B.

Complicated formulae (more general case) are formed from simple ones with the usage of arithmetic operators (which include :'-', :'+', :'-', :'\*', :'/' and :'^'. Other c-style operators don’t seem to be working :( ), standard functions (see Appendix C) and, of course, parentheses. Examples:  
Skill(‘FireStorm’.clc1)\*(Skill(‘FireStorm’.edmn)+ Skill(‘FireStorm’.edmx))/2 stands for average effective damage of firestorm skill (number of snakes \* average dmg);  
\[Default value\]/((100+Skill(‘Fire Mastery’)\*5)/100)) If placed into “delay” column and appropriate skill row the skill’s casing delay will be reduced by Fire\_Mastery\_slvl\*5 percent;  
Stat(‘nextexp’.accr)-Stat(‘experience’.accr) stands for the your experience rest to level-up.

But all formulae syntax wouldn’t be SO flexible, if we can’t use conditional formulae. Let’s proceed by studying them.

4\. Conditional formulae. Conditions are special types of formulae, but with one important difference: their values are interpreted in a special way: 0 means “false”, and 1 (and any non-zero value) stands for “true”. Both conditions and formulae can be very complicated and both of them consist of several simple parts. Let us study them firstly. Simple condition is:  
1)an immediate numeric value (zero stands for “false”, and any non-zero value stands for “true”);  
2)a relation of two expressions, formed using ‘>=’, ‘<=’,’>’,’<’,’==’ (means “equal”) and ‘!=’ (means “not equal”). Again, other c-style operators don’t seem to be working :( ;

Complicated conditions consist of simple ones with the usage of logical conjunctions: OR & AND (‘+’ and ‘\*’, respectively. C-style syntax: ‘&&’ and ‘||’ doesn’t work :( ). Simple maths shows us that complicated conditions cover all possible variants of conditions in txt-files. Examples:  
(stat(‘level’.accr)>=54)\*(stat(‘strength’.accr)>=25)\*(stat(‘dexterity’.accr)>=136)) if this condition is true, then the character can equip Phase Blades (he has at least 54 clvl, 25 str and 136 dex simultaneously);  
(skill(‘Cold Mastery’.blvl)!=0)+(skill(‘Fire Mastery’.blvl)!=0)+(skill(‘Lightning Mastery’.blvl)!=0) this condition is true, if at least one of sorceress masteries has at least one skillpoint invested.

Conditional formulae have the following format:  
condition?cfla1:cfla2.  
Then this formula has a value of cfla1 if the condition has a value of “true” (has non-zero value), else it has a value of cfla2. Keep in mind that both condition and formulae can be conditional formulae, too. Examples:  
(stat('item\_cannotbefrozen'.accr)!=0)?(dm34+50):dm34 if placed into column “aurastatcalc1”, row “Resist Cold” of SK, aura “Resist Cold” will grant player additional 50% Cold Resist, if he can’t be frozen;  
(lvl<3)?3:((lvl<5)?4:((lvl<7)?5:((lvl<9)?6:((lvl<11)?7:((lvl<13)?8:((lvl<15)?9:((lvl<17)?10:((lvl<19)?11:12)))))))) if placed into column “skpoints” and appropriate skill row of SK, this formula will make the skill require 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12… skill points to advance to 0..20th skill level (view details in “One skill point per two levels, per skill...” post in GMM);

Appendix A. MS and SC formulae.  
These formulae allow referencing to certain columns in Missiles.txt and Skills.txt, respectively, so that you can, for example, use some skill-specific parameters to adjust skill damage or increase passive skill effectiveness, using active skills’ stats. They are mostly self-explanatory, so I’ll describe only not so obvious and some details. Also I don’t want to duplicate Skills.txt and Missiles.txt guides, so there won’t be a detailed explanation of these files.

SkillCalc.txt formulae (MissCalc.txt ones are analogical):  
par# References skill function parameter (“param#” columns of SK);  
ln## LiNear (not logarithmic) formula. Returns value of (par#1)+\[slvl\]\*(par#2), i.e. ln12=par1+lvl\*par2. Gives a constant level bonus to a stat (e.g. firestorm’s number of snakes: 3+lvl\*0);  
dm## DiMinishing returns. Has a value: (110\*\[slvl\] \* (par#2-par#1))/(100 \* (\[slvl\]+6)) + par#1, i.e. dm34=(110\*lvl\*(par4-par3))/(100\*(lvl+6))+par3. Used, when you need greatly decrease level bonus to a stat, if the skill have been heavily invested (e.g. resist cold resist bonus: (110\*lvl\*(150-35))/(100\*(lvl+6))+25);

lvl, blvl Effective (modified by items) and Base skill level (e.g. all synergy bonuses (except ones from Prayer) use “blvl” – number of physically invested skill points);  
ulvl Unit LeVeL. Stands for player or monster level. Syntactically equals to stat(‘level’.accr);  
clc#, ast#, pst# References to SK’s columns “cltcalc#”, “aurastatcalc#” and “passivestatcalc#”, respectively;  
skpt Required SKillPoinTs property (“skpoint” column in SK). Allows adjusting how many skillpoints do you need to invest in a skill in order to advance in it (see examples for conditional formulae);

Appendix B. Qualifiers for “stat”, “skill” and “missile?”.  
With “stat” keyword one can use the following qualifiers: (thanks to adamantine):  
base BASE (unmodified) value for the stat. Consult ItemStatCost.txt for more details;  
accr Effective (modified by items) value;  
mod Modification value. Equals to stat.accr-stat.base;  
Qualifiers for skills and missiles are contained in SK and MK, respectively. Consult Appendix A for more details.

Appendix C. Standard functions.  
(quoting adamantine)  
rand(#,#) selects random number from two choices (don’t seem to be working);  
min(#,#) always uses the lowest number;  
max(#,#) always uses the highest number;

Appendix D. Formulae calculations.

Integer values. Each step of formula calculations operates only with integer values. If a temporary result has a non-zero fractional part, it is truncated. So, it’s erroneous to use “1/3\*lvl” formula (it’ll always return zero). Instead of this use “lvl/3”.

Integer overflows. Game stores every temporary result in a signed dword (-2147483648…2147483647). And if the number doesn’t lie in these bounds, we get a rollover (e.g. “2147483647/1000000000” equals 2, but “2147483648/1000000000” equals -2). After calculating the final result game engine tries to store it in the appropriate variable. But the problem is that its size may be less than dword, so we’re likely to get a rollover then. Consult ISC for determining exact stat size or simply make some experiments.

Errors in formulae. 1) If game finds erroneous function, e.g. “man” instead of “min”, it doesn’t change the parameters and returns the last parameter; 2) If game can’t recognize an operator (e.g. if we’ll try to use c-operator ‘++’), it considers the whole formula to be erroneous and sets its value to zero; 3) Division by zero will return zero (e.g. “50/0” equals zero and “50/0+10” equals ten(!)); 4) Referencing self in a formula (e.g. “10+ast1” in “aurastatcalc1” column) will surely crash the game.

Appendix E. Known bugs.  
1)Diablo II formulae cannot be more than 255 symbols length (the rest of the formula is truncated). But you can make a clever trick, using predefined formulae from MSC or SKC or defining your own in unused param# fields.  
2)Sometimes you can get a rollover due to an arithmetic overflow (see Appendix D).  
3)Some cells in text files may not recognize formulae properly (e.g. “Vel” column in MS).  
4)Sometimes stats, modified by formula aren’t refreshed correctly, until your reset the skill or save&exit.

Appendix F. Calc Fields (by Kingpin).  
Here is what fields that is calc fields in 1.10.

missiles SrvCalc1  
missiles CltCalc1  
missiles $HitCalc1  
missiles CHitCalc1  
missiles DmgCalc1  
missiles DmgSymPerCalc  
missiles EDmgSymPerCalc  
skills prgcalc1  
skills prgcalc2  
skills prgcalc3  
skills auralencalc  
skills aurarangecalc  
skills aurastatcalc1  
skills aurastatcalc2  
skills aurastatcalc3  
skills aurastatcalc4  
skills aurastatcalc5  
skills aurastatcalc6  
skills passivecalc1  
skills passivecalc2  
skills passivecalc3  
skills passivecalc4  
skills passivecalc5  
skills petmax  
skills sumsk1calc  
skills sumsk2calc  
skills sumsk3calc  
skills sumsk4calc  
skills sumsk5calc  
skills cltcalc1  
skills cltcalc2  
skills cltcalc3  
skills perdelay  
skills skpoints  
skills calc1  
skills calc2  
skills calc3  
skills calc4  
skills ToHitCalc  
skills DmgSymPerCalc  
skills EDmgSymPerCalc  
skills ELenSymPerCalc  
skilldesc ddam calc1  
skilldesc ddam calc2  
skilldesc p1dmmin  
skilldesc p1dmmax  
skilldesc p2dmmin  
skilldesc p2dmmax  
skilldesc p3dmmin  
skilldesc p3dmmax  
skilldesc desccalca1  
skilldesc desccalcb1  
skilldesc desccalca2  
skilldesc desccalcb2  
skilldesc desccalca3  
skilldesc desccalcb3  
skilldesc desccalca4  
skilldesc desccalcb4  
skilldesc desccalca5  
skilldesc desccalcb5  
skilldesc desccalca6  
skilldesc desccalcb6  
skilldesc dsc2calca1  
skilldesc dsc2calcb1  
skilldesc dsc2calca2  
skilldesc dsc2calcb2  
skilldesc dsc2calca3  
skilldesc dsc2calcb3  
skilldesc dsc2calca4  
skilldesc dsc2calcb4  
skilldesc dsc3calca1  
skilldesc dsc3calcb1  
skilldesc dsc3calca2  
skilldesc dsc3calcb2  
skilldesc dsc3calca3  
skilldesc dsc3calcb3  
skilldesc dsc3calca4  
skilldesc dsc3calcb4  
skilldesc dsc3calca5  
skilldesc dsc3calcb5  
skilldesc dsc3calca6  
skilldesc dsc3calcb6  
skilldesc dsc3calca7  
skilldesc dsc3calcb7  
weapons len  
weapons calc1  
weapons calc2  
weapons calc3  
weapons spelldesccalc  
armor len  
armor calc1  
armor calc2  
armor calc3  
armor spelldesccalc  
misc len  
misc calc1  
misc calc2  
misc calc3  
misc spelldesccalc  
magicsuffix mod1param  
magicsuffix mod2param  
magicsuffix mod3param  
magicprefix mod1param  
magicprefix mod2param  
magicprefix mod3param  
automagic mod1param  
automagic mod2param  
automagic mod3param  
uniqueitems par1  
uniqueitems par2  
uniqueitems par3  
uniqueitems par4  
uniqueitems par5  
uniqueitems par6  
uniqueitems par7  
uniqueitems par8  
uniqueitems par9  
uniqueitems par10  
uniqueitems par11  
uniqueitems par12  
sets pparam2a  
sets pparam2b  
sets pparam3a  
sets pparam3b  
sets pparam4a  
sets pparam4b  
sets pparam5a  
sets pparam5b  
sets fparam1  
sets fparam2  
sets fparam3  
sets fparam4  
sets fparam5  
sets fparam6  
sets fparam7  
sets fparam8  
setitems par1  
setitems par2  
setitems par3  
setitems par4  
setitems par5  
setitems par6  
setitems par7  
setitems par8  
setitems par9  
setitems apar1a  
setitems apar1b  
setitems apar2a  
setitems apar2b  
setitems apar3a  
setitems apar3b  
setitems apar4a  
setitems apar4b  
setitems apar5a  
setitems apar5b  
gems weaponmod1param  
gems weaponmod2param  
gems weaponmod3param  
gems helmmod1param  
gems helmmod2param  
gems helmmod3param  
gems shieldmod1param  
gems shieldmod2param  
gems shieldmod3param  
runes t1param1  
runes t1param2  
runes t1param3  
runes t1param4  
runes t1param5  
runes t1param6  
runes t1param7
