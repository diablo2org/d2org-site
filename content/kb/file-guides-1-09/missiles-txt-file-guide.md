---
title: Missiles.txt File Guide
summary: >-
  A. Missile - Name of missile B. Id - MissileID number C-D. Vel/MaxVel -
  Starting Velocity/Max Velocity of the missile. Are the same unless you intend
  to you Accel E. Accel - Acceleration, rate of…
keepId: 237
author: Phrozen Heart
credit: by Ric Faith
posted: '2003-12-02'
views: 7772
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=237'
---
A. Missile - Name of missile  
B. Id - MissileID number  
C-D. Vel/MaxVel - Starting Velocity/Max Velocity of the missile. Are the same unless you intend to you Accel  
E. Accel - Acceleration, rate of change of velocity  
F. Range - Range of missile (for skills, change range in skills.txt)  
G. LevRange - additional range/lvl for missile  
H. Light - light radius effect of missile  
I. Flicker - gives a flickering/magical effect  
J-L. Red/Green/Blue - Colors for changing the color of the light (col H)  
M. InitSteps - no. of frames in Celfile (col P) to execute before missile is in flight  
N. Activate - ?? (Mostly 0)  
O. LoopAnim - for looping the anim celfile, 0=NO, 1=YES  
P. CelFile - name of .dcc file for which the missile anim is in. When trying out different gfx for a skill, this is the column that you experiment with.  
Q. AnimLen - the length of the anim in CelFile, may be lesser than the Celfile itself, it'll just play until the frame specified here. If you experiment with Celfile, this usually is the number of frames of the Celfile (eg. groundFireBig has an animlen of 37)  
R. AnimSpeed - How many frames to play per second  
S. RandStart - To create a effect of randomness of playing the anim. (eg. for ShockField trap for assassin)  
T. SubLoop - to indicate usage of looping animation  
U. SubStart - which frame to start looping from  
V. SubStop - which frame to restart loop  
W. CollideType - ?? Specifies type of collision (possibly anim reaction?)  
X. CollideKill - Will it be 'killed' if it collides  
Y. CollideFriend - Can it hit an ally  
Z. LastCollide - 0, can continue after colliding. 1, cannot  
AA. Collision - Does it collide at all?  
AB-AC. ClientCol/Send - ?? Something to do with D2Client, no idea.  
AD. NextHit - Can it hit more than 1 target  
AE. NextDelay - How long before it can hit another target (25 ~ 1 sec)  
AF. Size - Area effect of missile  
AG. CanDestroy - 1 hit kill? Dunno  
AH. ToHit - Any bonus/penalty to AR  
AI. AlwaysExplode - will it always explode, use with CollideKill=0 for some interesting explosions (don't deal damage, but it's an effect)  
AJ. Explosion - to denote missile being an explosion  
AK. CanSlow - Can playing of the gfx be slowed, eg. using Slow Missiles  
AL. ReturnFire - is retaliation allowed (eg, Dung Beetles's charged bolts)  
AM. GetHit - Can it activate GetHit-skills.  
AN. Knockback - % chance to knockback (somehow 1 is more common than big numbers, so I think it's probably a binary)  
AO. Trans - Translucency of missile gfx  
AP. Qty - Qty of missile used (eg. Arrow will deplete 1 arrow)  
AQ. Pierce - Can missile be piercing, continue thru enemy etc.  
AR-AU. ParamX/ParamX Comment - settings for missile see individual missile row for exact details  
AV. SpecialSetup - Requires certain items (only throwing potions have 1)  
AW. Open - ??  
AX. Beta - Used in the beta version  
AY. Skill - to link to the relevant skill in skills.txt  
AZ. HitShift - used for calculation of increment of damages (eg. 1 pt of dmg in Hitskill 8 -> 1 dmg in game, 1 pt in Hitskill 7 -> 0.5, Hitskill 6 -> 0.25)  
BA. SrcDamage - Is damage calculated elsewhere, is it dependant on item/missile  
BB-BC. MinDamage/MaxDamage - Min/Max value for phys Damage dealt  
BD-BF. LevDam1-3 - additional dmg/lvl (lvldmg1 for 1-8, lvldmg2 for 9-15, lvldmg3 for >15)  
BG. EType - Elemental type dmg (cold,ltng,fire,mag,pois,etc.)  
BH-BI. EMin/EMax - Min/Max value for elemental Damage dealt  
BJ-BL. ELev1-3 - additional elem dmg/lvl (lvldmg1 for 1-8, lvldmg2 for 9-15, lvldmg3 for >15)  
BM. ELen - length of duration for cold/pois elements  
BN-BP. ELevLen1-3 - additional duration of ELen (lvldmg1 for 1-8, lvldmg2 for 9-15, lvldmg3 for >15)  
BQ. HitClass - ??  
BR. NumDirect - ??  
BS. LocalBlood - ??  
BT. DamageRate - For skills that deal dmg over a period of time, this is a factor which the damage is dealt. Factor=DamageRate/1024
