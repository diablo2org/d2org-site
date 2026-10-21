---
title: Missiles.txt
summary: >-
  Missile: ID Pointer, this pointer is used to assign the missile to skills and
  units (Skills.txt and Monstats.txt), never use the same name twice (it won't
  cause you to crash, but only the first…
keepId: 364
author: Nefarius
credit: >-
  by Nefarius and Brother Laz, restyled by HarvestWombs ; additional info by
  Firehawk
posted: '2009-01-04'
modified: '2020-10-05'
views: 31661
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=364'
---
**_Missiles.txt File Guide_**  
By Nefarius and Brother Laz

**_Initialization_**

**Missile:** ID Pointer, this pointer is used to assign the missile to skills and units (Skills.txt and Monstats.txt), never use the same name twice (it won't cause you to crash, but only the first instance will be used when accessed via txt-linkage, note, if the ID is different you still can launch the missile via code).

**Id:** The actual ID of the missile the pointer above refers to, if you would access your missile via code directly, you would use this! The ID must be different for each missile (ranging between 0 and 32767). You must also take care to not leave gaps between IDs, this is known to lead to unexplained errors and other weird behaviour.

**_Functions_**

> **Note:** I will not detail any of the missile functions here, I don't have enough experience in this field (and there already is a missile-function guide by Mishy23 -> [which you can read by clicking here](https://d2mods.info/forum/viewtopic.php?f=122&t=29595)).

You should also be aware that some functions will work properly only when linked to a skill, such as homing missiles! - Nefarius

**pCltDoFunc:** Client movement function. Defines the graphical behavior of the missile while it is active ('before it vanishes').

**pCltHitFunc:** Client collision function. Defines the graphical behavior of the missile at the moment of collision.

**pSrvDoFunc:** Server movement function. Defines the actual behavior of the missile while it is active ('before it vanishes').  
Note, without a matching client function, the effect will not be displayed, for example if it is to launch additional missiles, these missiles will be invisible. A 'server-side-only' missile cannot initialize any client-side code, thus any missile it will launch will also be invisible!

**pSrvHitFunc:** Server collision function. Defines how the missile behaves at the moment of collision, the same rules apply here as they did for the server movement function.

**pSrvDmgFunc:** Server damage function. Defines special routines to be done when the missile damages ('hits') a unit. This ranges from stunning units (without using stun damage!) to 'damaging' mana instead of life.

**_Calculations_**

> **Note:** These columns are only used if the proper functions are called by this missile. Also, all columns preceded by an asterisk ('\*') are comment fields!

**SrvCalc1:** This column contains the server movement calculation.

**Param1-5:** These columns contain parameters passed on to the server movement function (these parameters can also be used by the server movement calculation).

**CltCalc1:** This column is the client side equivalent to the **SrvCalc1** column.

**CltParam1-5:** These columns are the client side equivalents to the **Param1-5** columns. Normally their values should not be different to the **Param1-5** columns, some specially client-side effects such as trails will require them to be different however (the trails are a client-side only, so they do not need a server part)!

**SHítCalc1:** This column contains the server collision calculation.

**sHítPar1-3:** These columns contain the server collision parameters, as with those for the movement functions, they can be used in the **SHiíCalc1** field.

**CHitCalc1:** Client side equivalent to **SHítCalc1**.

**cHitPar1-3:** Client side equivalents to **sHítPar1-3** columns.

**DmgCalc1:** Calculation used for damage modifications.

**dParam1-2:** Parameters for the damage functions, can be used in **DmgCalc1** column.

**_Velocity settings_**

**Vel:** Base velocity (the speed this missile starts with), this controls the distance in pixels the missile travels each frame. Speeds near the break point (above 240) cause it to wrap around and move backwards.

**MaxVel:** Maximum velocity, this column is used if you use positive acceleration as the speed-limit.

**VelLev:** Velocity per unit level (missiles are units), in case the missile is fired by a monster its ulvl is the mlvl of the unit. In case it is fired by a skill function its ulvl is the slvl of the skill.

**Accel:** A positive number will make this missile accelerate until its velocity will reach the value in the MaxVel column. A negative value will make the missile slow down until it stands still (0 velocity), you can use this column to cause missiles to accelerate past the break point (FF) and thus move in a boomerang fashion (go backwards again). NOTE: Missiles slowing to 0 may not damage anything, you should use a collision function like SFIA or Freezing Arrow to release something else that does damage.

**_Range settings_**

**Range:** The number of frames this missile will exists after being created, see as a 'self destruction' timer. One may ask why the missiles must vanish, but imagine missiles flying infinitely into the void, not a good way to manage RAM.

**LevRange:** Additional range per unit level. This works exactly like **VelLev**, but unlike that column, this column here has an effect.

**_Light settings_**

**Light:** Diameter of the missiles light radius in subtiles.

**Flicker:** Random alternating to light radius diameter (in subtiles), use by fire-effects to cause them to flicker (hence the column name) in the existing radius diameter (IE. it doesn't make the radius any larger).

**Red, Green, Blue:** These columns control the RGB color values of the light radius, obviously 255,255,255 = White and so on, to get any other color then white you need to run in Direct3D (note: windowed mode = always directdraw).

**_Animation settings_**

**InitSteps:** Frames before the missile becomes visible (more technically, frames before the missile is created on the client).

**Activate:** This column is used for those missiles created from a central point (holybolts unleashed by the fist of heaven, lightning enchanted boss charged bolts, their scarab equivalent etc), it is also used for missiles that will only damage you after you touch them for a longer time (the 'fingers' of the death maulers for example). Thus, this column is the server side equivalent to **InitSteps**, this is the delay in frames before the missile can actually do anything besides existing graphically.

**LoopAnim:** Boolean, 1=Repeat this animation for the time of existence (range), 0=Play this animation once and then vanish (warning: the missile will only vanish from the client if the animation is shorter then the range).

**CelFile:** The name of the DCC file to used for this missile, the files are stored in data\\global\\missiles\\, can contain subdirectories.

**animrate:** As far as I can say it has no function at all, I have set it to 0 and the animations still played at regular speed (16 frames per second as specified in the **AnimSpeed** column).

**AnimLen:** The length (in frames) of this animation (for a single direction). If you have a missile with 64 frames and 8 directions, you would enter 8 in this column for obvious reasons.

**AnimSpeed:** Number of frames played by second, this is not modified by animrate. I don't know why Blizzard has two columns that practically do almost the same, but I assume this is simply a result of the absence of missile \*.COF (and thus also \*.D2) files as the animrate column seams to be ignored (it was in my tests, it is probably there only to avoid crashes in the DCC routines).

**RandStart:** Causes the animation to start playing at the specified frame. From the name you would think it controls a random starting frame but it does not, it just causes the animation to start at the specified frame.

**SubLoop:** Boolean, 1=This missile will repeat a specific sequence as long as enough range is left, 0=This missile will play it's animation normally (as defined in the **LoopAnim** column).

**SubStart:** Starting frame of the SubLoop.

**SubStop:** Ending frame of the SubLoop (when it reaches this frame it will either go back to **SubStart** frame or it will play on until the missile disappears if not enough range is left)

**_Collision settings A_**

**CollideType:** Controls which type of collision to check for, 3=Normal collision, 6=Z-collision (a missile 'dropping from above'), 1=Used mostly for missiles that lay on the floor, waiting for the character to walk over them (like spidergoo and spikes).  
NOTE: This is not required for trap missiles, 8=Fire collision (fire walls etc), related to softhit or per-frame-damage setups. Obviously, 0=No collision detection mode. There are at least 3 unused ones (2,5,7). For a better explanation of what these types of collision detection mean:

```
Type      Wall-tiles      Units       Floor-tiles
0		false          false       false
1		false          true        false
3		true           true        false
6		true           false       false
8		true           true        true
```

**CollideKill:** Boolean, Will this missile get destroyed upon collision. 1=Always destroy this missile upon collision (overrides almost all other settings, Frozen Orb collision function is known to ignore this column), 0=Don't destroy this missile upon collision.

**CollideFriend:** Boolean, Can this missile collide with allies (such as holybolt), 1=Allow friendly collision, 0=Disallow friendly collision.

**LastCollide:** Unknown to both me and Brother Laz, but this boolean seams to be related to some special behavior on missiles that don't vanish upon collision, such as fire effects and some other effects that are client-side only. In short, it is usually enabled only for missiles with a 'physical collision effect'. - In any event, this column can be left 0, it won't effect anything noticeable.

**Collision:** Unknown to both me and Brother Laz, but this boolean is related to the previous one, many missiles that have no 'physical collision' but still perform a collision event will have this set to 1 (fire effects). - In any event, this column can be left 0, it won't effect anything noticeable.

**ClientCol:** Unknown to both me and Brother Laz, I assume this name stands for ClientCollision, but what exactly it handles remains a mystery. - In any event, this column can be left 0, it won't effect anything noticeable.

**ClientSend:** Boolean, controls whether missiles existing outside of a client's room are sent to clients when entering a room with them.

**NextHit:** Use collision timer after first collision (1=yes, 0=no), the timer is used to avoid excessive damage (and to annoy players).

**NextDelay:** Number of frames to deactivate all server-side collision settings for this missile post collision and to make the attacked unit ignore all subsequent missile attacks. For example, a missile with a NextDelay of 25 will be unable to 'damage' any target for 1 second after each successful server-side collision. Apparently the monster being hit will also become 'immune to missiles' for the duration of this timer.

**_Size / Coordinate settings_**

**xoffset, yoffset, zoffset:** Shift the placement of this missile by # pixels on the x, y or z axis, point 0 is either the top left corner of the DCC or the pivot (I haven't tested enough to be sure).

**Size:** Diameter in subtiles. Probably works identical to the size settings in MonStats2.txt from -1 to 3. Basically 1=Fills only 1 subtile, 2=Fills 4 subtiles, 3=Fills 9 subtiles.

**_Unknown settings_**

**SrcTown:** boolean, most likely controls whenever a missile vanishes when the person goes to a town via a TP ('PK trapping preventation), it is enabled only for missiles that can be used to trap a way point for example (fire walls and such effects).

**CltSrcTown:** Used together with the above, probably controls some graphical aspects of the vanishing (the number may control a frame, but this is just a wild guess.

**CanDestroy:** unknown (boolean).

**_Collision settings B_**

**ToHit:** Does this missile use Attack Rating ('chance to hit') or does it 'always' (it's 95% actually) hit ('guided arrow behavior'). You can easily make all missiles require Attack Rating by changing this boolean column to true (1). Whenever it uses the additional AR given by skills.txt is unknown, Brother Laz noticed that even the regular vanilla elemental arrows may be bugged and ignore their AR bonus (spankyou very much Blizzard).

**AlwaysExplode:** Will this missile always call it's Collision Functions when it is destroyed. 1=Yes, 0=No. (For example, Frozen Orb will always explode into a nova, even if it just runs out of range). Some collision functions, such as the Lightning Fury collision, will ignore this column and always explode server-side...

**_Miscellaneous Settings and Flags_**

**Explosion:** Boolean, 1=Is an explosion (meaning that it does not exist on the server, this will override all other settings!), 0=Is not an explosion.

**Town:** Boolean, 1=Does not vanish when spawned inside a town, 0=Vanishes when spawned inside a town (such as the trails left by the Druid's vines).

**NoUniqueMod:** Boolean, 1=Does not get bonuses from boss modifiers (such as fire damage if the boss spawns as Fire Enchanted), 0=Receives all bonuses applicable.

**NoMultiShot:** Boolean, 1=Is not effected by the multishot modifier of bosses, 0=Is effected by the multishot modifier of bosses as usual. Note: Blizzard forgot to enable this on some boss-death events, such as Shenk...

**Holy:** Flag, controls which units this missile can hit, 0=All units, 1=Only undead, 2=Only demons, 3=All units. – I didn't test this extensively, done from memory.

**CanSlow:** Boolean, 1=Is effected by skill\_handofathena stat (slow missiles), 0=Is not effected by skill\_handofathena stat.

**ReturnFire:** Boolean, 1=Can trigger 'collision events' on the target, 0=Cannot trigger collision events on the target. \*Collision events are all those things that happen 'upon getting hit' for example. Blizzard erroneously enabled this on the Arctic Blast used by the Frozen Horrors and Nihlathak.  
NOTE: May or may not effect other 'on hit' events, such as casting a skill or 'thorns'.

**GetHit:** Boolean, 1=Can knock the target into GH mode ('hit recovery') upon collision, 0=Never knock target into GH mode upon collision.

**SoftHit:** Boolean, unknown, used only for Shockfield on Ground and Firestorn, Apparently this setting handles the frequency of the unit being 'visually' hurt by the missile (probably the unit's lifebar being updated, which was bugged originally).

**KnockBack:** Percentage chance (0-100) to knock target back, the default is 0 obviously, if you enter 100 in here the target will always be knocked back after every single successful collision.

**Trans:** Controls how the missile is drawn. 0=Draw graphic normally, 1=Alpha-blending ('the darker the areas are the more transparent they become'), 2=Special blending mode, usually causes the missile to display black-and-white (Unholy bolt).

**Qty:** Does this missile use up quantity (1=use quantity, 0=don't use quantity).  
NOTE: This requires a special starting function in skills.txt to work. Also, if you enable this for strafe for example, it will use the number of missiles it actually fires rather then a constant 1

**Pierce:** Is this missile effected by pierce (1=effected by pierce, 0=not effected by pierce). This refers to the 'pierce' modifier and to the Amazon skill Pierce.

**SpecialSetup:** Boolean, unknown, enabled only for potions. I am unsure what this controls, the 'arc' is not handled by this, there is a special check in code for potion itype. Maybe this has to do with displaying correct missile damage in weapons.txt?

**_Skill settings_**

**MissileSkill:** Boolean, used to transfer elemental damage from items to the splash radius of the missile and to dismiss all other damage modifiers (ever wondered why Freezing Arrow has SrcDmg set to 128 in skills.txt, yet the splash radius does no physical damage?).

**Skill:** If you enter the ID Pointer ('the name') of a skill here this missile will retrieve all of it's damage/hit data from this skill. The columns being read from skills.txt instead of missiles.txt are the following: ResultFlags, HitFlags, HitShift, HitClass, SrcDamage (SrcDam in skills.txt!), MinDam, MinLevDam1-5, MaxDam, MaxLevDam1-5, DmgSymPerCalc, EType, EMin, EMinLev1-5, EMax, EMaxLev1-5, EDmgSymPerCalc, ELen, ELenLev1-3, ELenSymPerCalc.

**_Event flags_**

**ResultFlags:** unknown (to both of us). 4=Used for normal missiles, 5=Used for explosions (all things with HitFlags of 2!), 8=Used for missiles that never damage anything. Most likely behaves similar to CollideType but what it really does...

**HitFlags:** unknown, 2=Used for explosions, 5=Used for freezing arrow. This could play a more important role then originally expected. Likely related to 'splash damage elemental carry over' mentioned further above (**MissileSkill**).

**_Damage settings_**

**HitShift:** this is a 'damage divisor', damage, as well as hitpoints, mana and stamina is handled in 256ths. 8=256/256, 7=128/256, 6=64/256, 5=32/256, 4=16/256, 3=8/256, 2=4/256, 1=2/256, 0=1/256. This roughly equals: 100%, 50%, 25%, 12.5%, 6.25%, 3.125%, 1.5625%, 0.78125% and 0.390625% of the actual damage.

**ApplyMastery:** Used only for MeteorFire and VampireMeteorFire. Most likely used to boost the damage of these unlinked missiles via mastery bonuses..

**SrcDamage:** 'Source Damage', this controls whenever the game should append the source units attack properties to the missile or not. This column is using 128ths (128=100%). This does not only reflect damage, but all other modifiers related to attack, including lifesteal and manasteal. Set this to -1 (poison clouds) to get rid of SrcDmg from skills.txt.

**Half2HSrc:** Boolean, 1=Half the damage when a two handed weapon is used, 0=Keep full damage when a two handed weapon is used.

**SrcMissDmg:** Used only for the poison clouds created by the expansion Viper's poison javelin I assume this tells it how much damage it should carry over from the base missile.

**MinDamage, MaxDamage:** Basic minimum and maximum physical damage of this missile.

**MinLevDam1-5, MaxLevDam1-5:** Additional physical damage to deal out per missile level (the unit level of the missile, either equal to the attacker's level or to the skill level). The range is: ulvl 2-8, ulvl 9-16, ulvl 17-22, ulvl 23-28 and ulvl 29+

**DmgSymPerCalc:** Physical damage synergy, works just like the synergy column in skills.txt, only that it has much fewer functions, AFAIK it only supports getting skill level, not way to obtain stat values etc.

**EType:** Elemental damage type. fire, ltng (Lightning), mag (Magic), cold, pois (Poison), life (Life-steal), mana (Mana-steal), stam (Stamina-steal), stun (note, 'stun damage' is ignored, stun uses only duration), rand (either lightning, fire, cold or poison – picked at every successful hit), burn (Burning damage, bugged, gives no EXP from kills, otherwise works like poison, you need to have low HitShift to make it work properly!), frze (Freeze, by itself this is handled like cold damage, you need to use special server damage functions to actually cause the unit to become frozen solid).

**EMin, EMax:** Just like **MinDamage** and **MaxDamage**, just for elemental damage (duh).

**MinELev1-5, MaxELev1-5:** I doubt I have to explain this. This is like **MinLevDam1-5** and **MaxLevDam1-5**, just for elemental damage.

**EDmgSymPerCalc:** Same as **DmgSymPerCalc**, just for elemental damage.

**ELen:** Duration (used for stun, poison and burning damage), the duration is handled in frames, 25=1 second.

**ELevLen1-3:** Extra duration per missile unit level. (check intervals)

**_Miscellaneous Settings_**

**HitClass:** Hit classes are a rather 'enigmatic' part of D2, but they are technically just client side effects for collisions. For example the Hit class #6 is responsible for the 'pierce noise' when a throwing weapon hits something. #10 is probably the same just for 'smaller piercing missiles' like Arrows. #2 is used for throwing axes, #64 causes the 'electric sound' (used for lightning based missiles to make that special sound), #32 is used for fire walls and the like, #176 for liquid attacks (slime-missiles for example), #80 is used for Poison Nova, #48 for some cold effects. The hitclasses used in other txt files (MonStats2.txt, Skills.txt and possibly others that I forgot) can also be used here.

**NumDirections:** Number of directions of the DCC file loaded via the **CelFile** column. Make sure this matches the DCC to avoid crashes and the like. NOTE: Brother Laz says that this column is of no importance, I personally remember getting crashes in pre 1.09 days, so ignore this column or fill it, it seams more important that the 'Length' column is correct, probably like animrate, which is only there to avoid internal conflicts due to the absence of COF files.

**LocalBlood:** Related to skills that cause blood to be spilled around. 0=Can't bleed, 1=Can it bleed, 2=Can it bleed and is it effected by open wounds.

**DamageRate:** How does this missile handle magic\_damage\_reduced stat. An empty column means the effect is applied completely every single frame. Blizzard added this to avoid people from almost nullifying fire wall damage with just 5+ Magic Damage reducing items. (Get detailed formula)

**_Client side settings A: Sounds_**

**TravelSound:** ID Pointer from Sounds.txt to the WAV file the game plays when the missile is created. This is also used for sound effects that should loop for the time of the missiles existence. NOTE: Using looping sounds here can cause crashes (don't use long looping sound effects such as Music).

**HitSound:** ID Pointer from Sounds.txt to the WAV file the game plays when the missile collides with a target.

**ProgSound:** ID Pointer from Sounds.txt to the WAV file the game plays at special events, defined by the client side functions related to collisions.

**_Client side settings B: Graphics_**

**ProgOverlay:** ID Pointer from Overlays.txt for the DCC file to use as an overlay for special events defined by the client side functions related to collisions.

**ExplosionMissile:** The ID pointer from Missiles.txt for the explosion to create upon collision, this is only created if the missile successfully collides with a unit or an obstacle (what it can collide with is controlled by **CollideType**) or when **AlwaysExplode** is enabled..

**_Appended Missiles_**

> **Note:** These columns are only accessed if the movement or collision functions use them! Also, all these columns use ID Pointers ('names')

**SubMissile1-3:** Server part of the missiles spawned by the movement function.

**HitSubMissile1-3:** Server part of the missiles spawned by the collision function.

**CltSubMissile1-3:** Client part of **SubMissile1-3**.

**CltHitSubMissile1-3:** Client part of **HitSubMissile1-3**.

**EOL:** End of Line, must be set to 0 if you use M$ Excel, to prevent it from blowing up the table.
