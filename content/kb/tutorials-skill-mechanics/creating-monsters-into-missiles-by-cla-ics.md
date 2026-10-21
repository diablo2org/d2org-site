---
title: Creating Monsters into Missiles (by cla$$ics)
summary: This tutorial will teach you how to make a missile look like a monster.
keepId: 456
author: cla$$ics
posted: '2009-09-03'
modified: '2018-01-06'
views: 6734
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=456'
---
Monsters into Missiles (1.10+) by cla$$ics  
email: <!-- e -->eezstreet@live.com<!-- e -->

Files you will need:  
Missiles.txt

Files you will be using:  
dataglobalmonstersFKTRFKTRLITWL1HS.dcc  
dataglobalmonstersFKTRFKTRLITDT1HS.dcc  
dataglobalmonstersFKTRFKTRLITDD1HS.dcc

Open up Missiles.txt. Create 3 new lines.

On the first line, use these parameters:

Missile: monsterm1  
ID: Next in sequence  
pCltDoFunc: 1  
pCltHitFunc: 44  
pSrvDoFunc: 1  
pSrvHitFunc: 36  
Vel: 10  
MaxVel: 10  
Range: 500  
Red: 255  
Green: 255  
Blue: 255  
InitSteps: 0  
Activate: 0  
LoopAnim: 1  
CelFile: BoneFetishRun  
animRate: 1024  
AnimLen: 6  
AnimSpeed: 16  
CollideType: 3  
CollideKill: 1  
ClientCol: 1  
Size: 1  
AlwaysExplode: 1  
Explosion: 1  
CanSlow: 1  
KnockBack: 1  
ResultFlags: 8  
HitShift: 8  
NumDirections: 8  
HitSubMissile1: monsterm2  
CltHitSubMissile2: monsterm2  
EOL: 0

On the second line, use these parameters:

Missile: monsterm2  
ID: Next in sequence  
pCltDoFunc: 1  
pCltHitFunc: 44  
pSrvDoFunc: 1  
pSrvHitFunc: 36  
Vel: 0  
MaxVel: 0  
Range: 15  
Red: 255  
Green: 255  
Blue: 255  
InitSteps: 0  
Activate: 0  
LoopAnim: 0  
CelFile: BoneFetishDie  
animRate: 1024  
AnimLen: 6  
AnimSpeed: 16  
CollideType: 6  
CollideKill: 1  
CollideFriend: 1  
LastCollide: 1  
ClientCol: 1  
ClientSend: 1  
Size: 1  
AlwaysExplode: 1  
Explosion: 1  
CanSlow: 1  
KnockBack: 1  
ResultFlags: 8  
HitShift: 8  
NumDirections: 8  
HitSubMissile1: monsterm3  
CltHitSubMissile2: monsterm3  
EOL: 0

On the third line, use this:

Missile: monsterm2  
ID: Next in sequence  
pCltDoFunc: 1  
pSrvDoFunc: 1  
Vel: 0  
MaxVel: 0  
Range: 15  
Red: 255  
Green: 255  
Blue: 255  
InitSteps: 0  
Activate: 0  
LoopAnim: 1  
CelFile: BoneFetishDead  
animRate: 1024  
AnimLen: 1  
AnimSpeed: 0  
Size: 1  
AlwaysExplode: 1  
Explosion: 1  
CanSlow: 1  
KnockBack: 1  
NumDirections: 8  
EOL: 0

(Note: On lines I haven't listed, leaave blank.

Now, take these files and rename them as such:

FKTRLITWL1HS.dcc -> BoneFetishRun.dcc  
FKTRLITDT1HS.dcc -> BoneFetishDie.dcc  
FKTRLITDD1HS.dcc -> BoneFetishDead.dcc

Place your renamed file in your /Missiles/ folder (data/global/missiles/)

All done!

Now all you have to do is reference 'monsterm1', whether in Skills.txt (by name) or Weapons.txt (for throwing weapons -> by ID)

In addition, if you look in Monstats.txt you can find the tokens for various monsters (Code column) and choose a different monster you would like to use instead (IE Druid ravens, Corrupt Rogues, whatever strikes your fancy)

P.S.  
dataglobalmonsters(CODE) to find the .dccs, Druid Raven is HK
