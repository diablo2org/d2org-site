---
title: Skills.txt File Guide
summary: F. Enhanceable - All skills have this to 1 barring tomes/scrolls/basic attacks
keepId: 246
author: Phrozen Heart
credit: by Ric Faith
posted: '2003-12-02'
views: 11889
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=246'
---
A. Skill - Skill name

B. Id - SkillID

C. charclass - char specific skill/spell

D. ClassReq - only specific ppl/monsters can use skill

E. Monster - only monsters can use skill

F. Enhanceable - All skills have this to 1 barring tomes/scrolls/basic attacks

G. AttackRank - ? could be preference

H-M. Itemclass1-6 - weapons/items associated with skill

N. anim - char use the anim for the usage of skill/spell

O. monanim - mon use the anim for the usage of skill/spell

P. seqnum - ?? thought it may be delay but not

Q. isaura - is an aura

R. Durability - ?? impale is included but doesn't seem to indicate dur decrease lvls

S. Shiver - ? thought to be possible mvmt (fend/inferno/strafe) but zeal/arctic blast not incl.

T. UseAttack - Usage of weapon for attack (strangely WW is 0)

U. LineOfSight - Must be able to see location to cast (4=yes 0=no)

V. Targetable - Hit to effect

W. SearchEnemyXY - Must target enemy to have effect

X. SearchMonsterNear - Need to select an enemy to have effect (raisedead/C.Explosion/Fist.Heavens)

Y. SelectDead - Skills that target Dead ppl, eg. Raisedead,Findpotion/item

Z. SearchOpenXY - FireWall/Blizzard/Meteor/Fissure/Volcano (area spells?)

AA. TargetPet - Unsummon/HolyBolt Target summons/conjures

AB. TargetAlly - HolyBolt Target Allies.

AC. ItemEffect - ?

AD. range - char will move to a certain range to use skill (attack uses h2h, certain spells/skills use range, long-ranged skills use none)

AE. AttackNoMana - ?? apparently not quite as it says

AF. reqlevel - lvl required to learn/master the skill/spell

AG-AJ. reqstr/dex/int/vit - alternative requirements (str/dex/int/vit) to master the skill

AK-AM. reqskill1-3 - Skills which must be learnt before this skill can be mastered

AN-AP. State1-3 - ? (something like STATE\_FROZENARMOR kinda thing?)

AQ. Delay - Casting delay (time in between where skill cannot be used again)

AR. SkillPage - Which page is skill displayed on (lowest page is numbered 1, middle 2, top 3)

AS. SkillRow - Which row is skill displayed on (starting from top, rows 1-6)

AT. SkillColumn - Which column is skill displayed on (starting from left, cols 1-3)

AU. IconCel - (X-1) frames for the icon in data\\global\\ui\\spells\\XXskillicon.dc6 (XX is char-dependant). eg. Sorc Fire Bolt is 0, so the computer will look under SOskillicon.dc6 frames 1 and 2 for the icons.

AV. leftskl - 0 means skill can be set on leftmousebutton, 1 means it cannot.

AW. manashift - determines the increment for mana cost. 8 - whole integer, 7 - 0.5, 6 - 0.25, 5 - 0.125.. hence if a spell states 20 manacost with a manashift of 8, it costs 20 mana ingame. If the manashift were 6, then it would cost 5 mana to use the skill. (However Inferno seems to buck the rule)

AX. mana - mana cost (affected by manashift)

AY. lvlmana - additional mana cost per level for the skill (affected by manashift)

AZ. Interrupt - Is skill interruptable?

BA. InTown - Can skill be used in town?

BB. Periodic - Auras/Masteries/Passives (less Warmth?) are 1, could be to signal continuous usage

BC. Finishing - finishing move for Assassin

BD. Passive - Is skill passive?

BE-BP. Param1-6/Param1-6 Description - Varies from skill to skill, read description for description

BQ-BR. effect/leveleffect - Notes by Blizzard (read Nova for a laugh )

BS. InGame - all char skills are 1, monster skills vary

BT. Done - Is skill completed (usable)? (but Unsummon/LH Throw/Swing have 0??)

BU. Open - ??

BV. Beta - ?? Used in Beta-testing?

BW-BX. What's Left - code/art - Blizzard's remark column

BY. ToHit - Bonus to AR

BZ. LevToHit - increase to bonus to AR/lvl

CA. HitShift - determines the increment of dmg (similar to manashift)

CB. SrcDam - See below for amendment by Scott Weaver

CC-CD. MinDam/MaxDam - Min/Max phys dmg dealt

CE-CG. LevDam1-3 - Increment in damage/slvl

to slvl 10-15, lvl3 to >15 - aasa>\[/i\]

CH. EType - ltng,cold,fire,pois,mag (self-explanatory)

CI-CJ. EMin/EMax - Min/Max Elem Dmg (some values vary, eg. Charged Bolt is

half stated value in skills.txt)

CK-CM. ELev1-3 - Increment in Elem Dmg/slvl \*Don't know how to calculate\*

CN. ELen - Length of element (for cold and poison)

CO-CQ. ELevLen1-3 - Increment in Elem Len/slvl

lvl2 to slvl 10-15, lvl3 to >15 - aasa>

CR. caster state - State caster is in (eg. STATE\_FROZENARMOR) - \*Does anyone

know where to find out the states?\*

CS. cost mult - If skill is in item, multiply costprice by value (?)

CT. cost add - If skill is in item, add value to costprice(?)

**Other notes:**

Claw Mastery params are interchanged - aasa

---

SrcDam by Scott Weaver

Unhappy with the fact that my Amazon's Multi Shot only did 3/4 damage I charged myself with the task of trying to reverse this to emulate earlier versions of CD2. Comparing other Amazon bow skills (like freezing arrow, etc.) to Multi Shot I noticed this one inconsistency. SrcDam, for all bow skills that enchant you arrows in one way or another, had a value of 8 while Multi Shot had a 6. On a hunch, I changed this value to 8 and compiled my mod, and Voila! Multi Shot now does 100% damage as opposed to 75%.

I guess SrcDam would pretty much be explained as 'Modification to the Source of the Damage' i.e. my bows base damage with attribute/enchant modifiers applied.

Adjustment to weapon's damage based on SrcDam

SrcDam = 8 the multiplier would 1.00 (100%) (Confirmed)  
SrcDam = 6 the multiplier would .75 (75%) (Confirmed)  
SrcDam = 4 the multiplier would .50 (50%) (Theoretical)  
SrcDam = 2 the multiplier would .25 (25%) (Theoretical)

So, theoretically, SrcDam = 10 would 125% of the normal damage done by your weapon.
