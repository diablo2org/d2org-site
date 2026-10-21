---
title: Missiles.txt File Guide (incomplete)
summary: 'Yellow fields are not used by the game, they''re just for reference'
keepId: 352
author: Nefarius
credit: by Alkalund (with some new input from Nefarius)
posted: '2005-10-18'
views: 7865
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=352'
---
missiles.txt (Incomplete)

Yellow fields are not used by the game, they're just for reference

Missile - Missile Name

Id - Missile Id number

pCltDoFunc - Client Movement Function to be used by this missile

pCltHitFunc - Client Collision Function to be used by this missile

pSrvDoFunc - Server Movement Function to be used by this missile

pSrvHitFunc - Server Collision Function to be used by this missile

pSrvDmgFunc - Server Damage Function to be used by this missile

SrvCalc1 -

\*srv calc 1 desc - description for SrvCalc1 column

Param1 - Parameter 1 used by Server Movement Function

\*param1 desc - description for Param1

Param2 - Parameter 2 used by Server Movement Function

\*param2 desc - description for Para2

Param3 - Parameter 3 used by Server Movement Function

\*param3 desc - description for Param3

Param4 - Parameter 4 used by Server Movement Function

\*param4 desc - description for Param4

Param5 - Parameter 5 used by Server Movement Function

\*param5 desc - description for Param5

CltCalc1 -

\*client calc 1 desc - description for CltCalc1 column

CltParam1 - Client Parameter 1

\*client param1 desc - description for Client Parameter 1

CltParam2 - Client Parameter 2

\*client param2 desc - description for Client Parameter 2

CltParam3 - Client Parameter 3

\*client param3 desc - description for Client Parameter 3

CltParam4 - Client Parameter 4

\*client param4 desc - description for Client Parameter 4

CltParam5 - Client Parameter 5

\*client param5 desc - description for Client Parameter 5

SHitCalc1 -

\*server hit calc 1 desc - description for SHitCalc1 column

sHitPar1 - Parameter 1 used by Server Collision Function

\*server hit param1 desc - description for ShitPar1 column

sHitPar2 - Parameter 2 used by Server Collision Function

\*server hit param2 desc - description for ShitPar2

sHitPar3 - Parameter 3 used by Server Collision Function

\*server hit param3 desc - description for ShitPar3

CHitCalc1 -

\*client hit calc1 desc - description for CHitCalc1 column

cHitPar1 - Parameter 1 used by Client Collision Function

\*client hit param1 desc - description for CHitPar1

cHitPar2 - Parameter 2 used by Client Collision Function

\*client hit param2 desc - description for CHitPar2

cHitPar3 - Parameter 3 used by Client Collision Function

\*client hit param3 desc - description for CHitPar3

DmgCalc1 - If the Server Damage Function requires a formula, here's where it goes. You can add your formula to misscalc.txt and refer to it here by its code.

\*damage calc 1 - description for DmgCalc1 column

dParam1 - Parameter 1 used by Server Damage Function (if DmgCalc1 is used, this is a parameter for the formula)

\*damage param1 desc - description for dParam1

dParam2 - Parameter 2 used by Server Damage Function (if DmgCalc1 is used, this is a parameter for the formula)

\*damage param2 desc - description for dParam2

Vel - Missile velocity

MaxVel - Maximum velocity of the missile

VelLev - Velocity bonus per level

Accel - Acceleration for the missile, the rate on which the velocity changes

Range - Missile Range **Nefarius: to get the distance the missile will travel you multiply speed\*range, speed=number of pixels to travel per frame, range=number of frames to exist**

LevRange - Range bonus per level

Light - Light Radius of Missile

Flicker - Creates a Flickering Light Effect

Red - Adds red to the missile's light

Green - Adds green to the missile's light

Blue - Adds blue to the missile's light

InitSteps - Number of frames in CelFile (read column CelFile below) to execute before missile is in flight

Activate -

LoopAnim - Do you want the CelFile animation to play in a Loop? 0 = No, 1 = Yes

CelFile - main dcc file used for this missile (filename without its dcc extention)

animrate - ??? The speed in which the CelFile animation is displayed on screen. 1024 = normal speed, 512 = double speed, etc

AnimLen - The number of frames from the CelFile you want to use for this missile. If CelFile has X frames and you put Y here, it will use only the first Y frames of the animation (make sure Y is less than or equal to X)

AnimSpeed - Number of Frames played per second at normal rate, and later modified by animrate???

RandStart - **Nefarius: most likely start at a random frame**

SubLoop - Does this missile uses a CelFile animation SubLoop? Leave empty if not, or put 1 here if yes

SubStart - (only use if SubLoop is set to 1) Frame on which the animation subloop starts

SubStop - (only use if SubLoop is set to 1) Frame on which the animation subloop stops (animation then loops back to frame indicated by SubStart)

CollideType -

CollideKill - Will the missile vanish after colliding with something? 1 = Yes

CollideFriend - Can the Missile Collide on friendly units and allies (eg. Holy bolt)? 1 = Yes

LastCollide -

Collision -

ClientCol -

ClientSend -

NextHit - ??? Can this missile hit more than one target?

NextDelay - ??? Number of frames until next missile hit (25 frames = 1 second)

yoffset -

Size - ??? How wide the missile is?

SrcTown -

CltSrcTown -

CanDestroy -

ToHit - ??? Does this missile use to hit calculations based on attack rating? 1 = Yes

AlwaysExplode - Will the missile always Explode? 1 = Yes

Explosion - Is the missile an explosion? 1 = Yes

Town - Can this missile be used in town? 1 = Yes (note that if you enable a skill to be cast in town in skills.txt and the skill uses a missile, you have to enable this column as well)

NoMultiShot -

Holy - Is this missile Holy? (eg. Holy Bolt, Sanctuary Bolt) 1 = Yes

CanSlow - Can this missile be slowed? (with Slow missiles for example) 1 = Yes

ReturnFire -

GetHit - Can this missile activate 'Get Hit' skills? 1 = Yes

SoftHit -

KnockBack - If the missile can knock enemies back (NOT a boolean, more like percentage it seems)

Trans - ??? Is the missile translucent? 1 = Yes

Qty -

Pierce - Can this missile pierce? 1 = Yes

SpecialSetup -

MissileSkill -

Skill - The skill in skills.txt that uses this missile

ResultFlags -

HitFlags -

HitShift - Scale factor for damage values. 8 = no change, 7 = half damage, 6 = 1/4 damage, and so on (if it works like it did in 1.09)

ApplyMastery - ??? Only meteorfire has this one set to 1, all others are empty

SrcDamage - **Nefarius: percentage of damage, in 128ths**

Half2HSrc -

SrcMissDmg -

MinDamage - Minimum base physical damage

MinLevDam1 - Additional minimum physical damage added per level, from lvl 2 to lvl 8

MinLevDam2 - Additional minimum physical damage added per level, from lvl 9 to lvl 16

MinLevDam3 - Additional minimum physical damage added per level, from lvl 17 to lvl 22

MinLevDam4 - Additional minimum physical damage added per level, from lvl 23 to lvl 28

MinLevDam5 - Additional minimum physical damage added per level, for levels 29 and above

MaxDamage - Maximum base physical damage

MaxLevDam1 - Additional maximum physical damage added per level, from lvl 2 to lvl 8

MaxLevDam2 - Additional maximum physical damage added per level, from lvl 9 to lvl 16

MaxLevDam3 - Additional maximum physical damage added per level, from lvl 17 to lvl 22

MaxLevDam4 - Additional maximum physical damage added per level, from lvl 23 to lvl 28

MaxLevDam5 - Additional maximum physical damage added per level, for levels 29 and above

DmgSymPerCalc - Synergy related physical damage bonus (I think)

EType - Elemental type of damage

EMin - Minimum base elemental damage

MinELev1 - Additional minimum elemental damage added per level, from lvl 2 to lvl 8

MinELev2 - Additional minimum elemental damage added per level, from lvl 9 to lvl 16

MinELev3 - Additional minimum elemental damage added per level, from lvl 17 to lvl 22

MinELev4 - Additional minimum elemental damage added per level, from lvl 23 to lvl 28

MinELev5 - Additional minimum elemental damage added per level, for levels 29 and above

Emax - Maximum base elemental damage

MaxELev1 - Additional maximum elemental damage added per level, from lvl 2 to lvl 8

MaxELev2 - Additional maximum elemental damage added per level, from lvl 9 to lvl 16

MaxELev3 - Additional maximum elemental damage added per level, from lvl 17 to lvl 22

MaxELev4 - Additional maximum elemental damage added per level, from lvl 23 to lvl 28

MaxELev5 - Additional maximum elemental damage added per level, for levels 29 and above

EDmgSymPerCalc - Synergy related elemental damage bonus (I think)

ELen - Base length (duration) of elemental effect

ELevLen1 - Additional length of elemental effect per level, from lvl X to lvl Y level range still unknown

ELevLen2 - Additional length of elemental effect per level, from lvl X to lvl Y level range still unknown

ELevLen3 - Additional length of elemental effect per level, from lvl X to lvl Y level range still unknown

HitClass -

NumDirections - Number of directions of the missile (1, 4, 8, 16, or 32)

LocalBlood -

DamageRate -

TravelSound - Sound played when missile is moving

HitSound - Sound played when missile collides

ProgSound - Progressive sound for missile (whatever that means)

ProgOverlay - Progressive overlay for missile (the overlay displayed over the unit the missile collided with, I think)

ExplosionMissile - Missile fired on explosion (if any)

SubMissile1 - Additional missile called by this missile while moving (Server side)

SubMissile2 - Additional missile called used by this missile while moving (Server side)

SubMissile3 - Additional missile called used by this missile while moving (Server side)

HitSubMissile1 - Additional missile called by this missile while colliding (Server side)

HitSubMissile2 - Additional missile called by this missile while colliding (Server side)

HitSubMissile3 - Additional missile called by this missile while colliding (Server side)

HitSubMissile4 - Additional missile called by this missile while colliding (Server side)

CltSubMissile1 - Additional missile called used by this missile while moving (Client side)

CltSubMissile2 - Additional missile called used by this missile while moving (Client side)

CltSubMissile3 - Additional missile called used by this missile while moving (Client side)

CltHitSubMissile1 - Additional missile called used by this missile while colliding (Client side)

CltHitSubMissile2 - Additional missile called used by this missile while colliding (Client side)

CltHitSubMissile3 - Additional missile called used by this missile while colliding (Client side)

CltHitSubMissile4 - Additional missile called used by this missile while colliding (Client side)

EOL - End Of Line.
