---
title: Hireling.txt File Guide
summary: >-
  A. Hireling - Descriptive B. SubType - Descriptive C. Id - ID number to
  segregate the hirelings and threshold lvls D. Class - reference to
  monstats.txt for monster E. Act - Where you're getting it F.…
keepId: 228
author: Phrozen Heart
credit: by Ric Faith
posted: '2003-12-02'
views: 11427
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=228'
---
A. Hireling - Descriptive  
B. SubType - Descriptive  
C. Id - ID number to segregate the hirelings and threshold lvls  
D. Class - reference to monstats.txt for monster  
E. Act - Where you're getting it  
F. Difficulty - 1=Normal, 2=NM, 3=Hell  
G. Level - mlvl of the hireling (what level is required to 'upgrade' skills/stats)  
H. Seller - reference to monstats.txt for NPC  
I,J. NameFirst, NameLast - Range from which the game looks to get random names for the hirelings  
K. Gold - Cost of hireling, compounded by mlvl  
L. Exp/Lvl:

Factor used in the calculation of Exp required between mlvls.  
Smaller numbers = Less exp required to lvl up = Faster lvling  
Personal recommendation = 30-75 for decent lvling

M. HP - Life at Base Lvl  
N. Hp/Lvl - Amount of additional Life given at Lvl up  
O. Defense - DR (Defence Rating) at Base Lvl  
P. Def/Lvl - Amount of additional DR given at Lvl up  
Q. Str - Strength at Base Lvl  
R. Str/Lvl - Amount (in 8ths) of additional Strength given at Lvl up  
S. Dex - Dexterity at Base lvl  
T. Dex/Lvl - Amount (in 8ths) of additional Dexterity given at Lvl up  
U. AR - Attack Rating at Base Lvl  
V. AR/Lvl - Amount of additional AR given at Lvl up  
W. Share - Used to co-relate between threshold lvls between Normal, NM, Hell Hirelings  
X,Y. Dmg-Min, Dmg-Max - Range of Damage dealt at Base lvl.  
Z. Dmg/Lvl - Amount (in 8ths) of additional Damage given at Lvl up  
AA. Resist - All Resistance at Base Lvl  
AB. Resist/Lvl - Amount (in 8ths) of additional All Resist given at lvl up  
AC,AD. WType1, WType2 - Can't be changed, is the itemtype of the items that can be carried in weapon slots  
AE. HireDesc - A reference for .tbl files  
AF. Default Chance - The Chance that Hireling will use weapon and normal attack instead skill  
AG-BP. Skill, Mode, Chance, ChancePerLevel, Level, LvlPerLvl 1-6:

Skill - Reference to Skill column (col A) in skills.txt

Mode - The Mode to use for the skill:  
Generally-  
1 -> Auras  
4 -> Attack  
5 -> Attack (use for Barbs, works the same way as Mode=4)  
7 -> Cast  
14-> Seq (use for Jab)

You can use Mode=4 for almost everything, and change the monanim column in skills.txt to attack to make the skill work:) Do note tho, that if a monster uses the same skill, it will use the attack anim instead of its usual anim for this skill.

Chance - The Chance that hireling will use Skill at Base Lvl:

It is calculated by probability: Using the example for Normal Fire Rogue, 1st Threshold,  
Default Chance = 75, Inner Sight = 10, Fire Arrow = 25  
So by probability (Chance/TotChance \*100%):  
Default (Attack) = 75/110 \*100% = 68.18%  
Inner Sight = 10/110 \*100% = 9.09%  
Fire Arrow = 25/110 \*100% = 22.73%  
To move along to the 2nd Threshold:  
Default Chance = 75, Inner Sight = 10, Fire Arrow = 69  
So: Default (Attack) = 48.70%, Inner Sight = 6.49%, Fire Arrow = 44.81%

So you can see, when you go from one threshold to the next, the values may change depending on your Chance set. Ideally you should push your intended favourite higher so it will occur more often.

ChancePerLevel - Amount of additional Chance given at lvl up, used to improve the chances of certain skills as during lvling

Level - The sLvl of the Skill at Base lvl

LvlPerLvl - Factor in improving slvl at lvl up (0=no increment)

BQ-BT. Head, Torso, Weapon, Shield - References to the anims for monster parts

---

**Annex A** - Tips for Chance

Generally a very high chance should be put for Auras (Defiance, Concentration), Warcries (Shout, Howl), Shielding (Bone Armor, Cyclone Armor, Sorc's Ice Armors), certain magicks (TS, Armageddon, Hurricane - tho Armageddon and Hurricane can get messy if they are spammed). This is so that the hireling will cast it immediately upon sighting an enemy to protect himself, or provide the necessary bonuses.

Usually (and also in the original hireling.txt) a value of 1000 is used. However if you give a very high chance, it'll mean that they will continuous keep casting the skill. There is a way around that:

With reference to States.txt, there is a list of STATES, like STATE\_FROZENARMOR or STATE\_SHOUT, STATE\_CONCENTRATION, STATE\_ARMAGEDDON. These values can be put in skills.txt under the 3rd last column - caster state. It is recommended to put all those that you think you may use, and some of those that you may or may not use in. It has no other side effects, but has good uses for hirelings.

Now what happens is that after the hireling has cast his Hurricane, the game will keep track and put STATE\_HURRICANE as long as the skill is active. When the hireling is deciding the Chance/Probability to use a skill, Hurricane is no longer considered, and so the skill will not be chosen again, until the Hurricane is finished, and the STATE\_HURRICANE is removed. After that the game can consider activating Hurricane again.
