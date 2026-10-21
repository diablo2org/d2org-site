---
title: a stationary avatar
summary: 'idea by brother laz, explained by whist'
keepId: 460
author: kidpaddle94
posted: '2010-08-28'
modified: '2018-01-06'
views: 5408
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=460'
---
**A stationary avatar:**

ok, first, this idea is not from me. this skill has been made by brother laz in the median mod. I am just explaining how to do it.  
i will explain you how to make a stationary avatar that casts some frost novas.

Difficulty level: medium

**tools needed:**

AFJ sheet editor  
AFJ tbl edit  
winMPQ  
d2data.mpq  
skills.txt  
missiles.txt  
skilldesc.txt (only if you want to add a description to your skill.

_to follow this tutorial, you have to know how to use the needed tools._  
_I also recommend to read the file guides of skills.txt, missiles.txt and skilldesc.txt_

first, we will have to extract an animation in d2data.mpq because we will use the summoner animation as avatar.  
so open d2data.mpq, using winMPQ and extract the following files:  
**data\\global\\monsters\\SU\\TR\\SUTRLITSCHTH.dcc**

now the extracted file in your missiles folder _(data\\global\\missiles\\)_  
rename it to **statavatar.dcc**

now we can start to make our avatar skill. first open missiles.txt and scroll down to **frozenorb** line.  
copy **frozenorb** line and paste it at the bottom, make these changes:

> **Missile:** statavatar  
> **Id:** _next in your missiles.txt_  
> **pCltHitFunc:** _blank_  
> **pSrvHitFunc:** _blank_  
> **Param1:** 12  
> **Param2:** 1  
> **CltParam1:** 12  
> **CltParam2:** 1  
> **sHitPar1:** _blank_  
> **\*server hit param1 desc:** _blank_  
> **cHitPar1:** _blank_  
> **\*client hit param1 desc:** _blank_  
> **Vel:** _blank_  
> **MaxVel:** _blank_  
> **Range:** 200  
> **CelFile:** statavatar  
> **AnimLen:** 11  
> **pierce:** 1  
> **NumDirections:** 16  
> **TravelSound:** monster\_summoner\_taunt\_1  
> **ExplosionMissile:** freezingarrowexp1  
> **SubMissile1:** avatardelay  
> **HitSubMissile1:** _blank_  
> **CltSubMissile1:** avatardelay  
> **CltHitSubMissile1:** _blank_

now scroll down to **glacialspike** line. copy **glacialspike** line and paste it at the bottom.  
make the following changes:

> **Missile:** avatardelay  
> **Id:** _next in your missiles.txt_  
> **pCltHitFunc:** 30  
> **pSrvHitFunc:** 29  
> **sHitPar1:** 1  
> **\*server hit param1 desc:** delay param  
> **sHitPar2:** _blank_  
> **\*server hit param2 desc:** _blank_  
> **cHitPar1:** 1  
> **client hit param1 desc:** delay param  
> **Vel:** _blank_  
> **MaxVel:** _blank_  
> **Range:** 5  
> **LoopAnim:** 2  
> **CelFile:** null  
> **AnimLen:** 1  
> **AlwaysExplode:** 1  
> **Skill:** _blank_  
> **ResultFlags:** 4  
> **HitFlags:** _blank_  
> **EType:** _blank_  
> **HitClass:** 64  
> **TravelSound:** monster\_cast\_cold  
> **HitSound:** _blank_  
> **HitSubMissile1:** avatarnova  
> **CltHitSubMissile1:** avatarnova  
> **CltHitSubMissile2:** _blank_

now we have a last missile to do. scroll down to **frostnova** line.  
copy **frostnova** line at the bottom and make the following changes:

> **Missile:** avatarnova  
> **Id:** _next in your missiles.txt_  
> **Skill:** Stationary Avatar

now open **skills.txt** and go to **Meteor** line. copy **Meteor** line and paste it at the bottom.  
make these changes:

> **skill:** Stationary Avatar  
> **Id:** _next in your skills.txt_  
> **charclass:** _choose_  
> **skilldesc:** _make your own_  
> **srvmissilea:** statavatar  
> **srvmissileb:** statavatar  
> **srvmissilec:** statavatar  
> **stsound:** sorceress\_cast\_cold  
> **dosound:** _blank_  
> **castoverlay:** ice\_cast\_1  
> **cltmissilea:** statavatar  
> **ItemCastSound:** sorceress\_cast\_cold  
> **ItemCastOverlay:** ice\_cast\_1  
> **reqskill1:** blank  
> **reqskill2:** blank  
> **Delay:** 200  
> **Param1:** 0  
> **Param3:** 0  
> **Param4:** 0  
> **EType:** cold  
> **EDmgSymPerCalc:** _choose your synergy_

and done! now you can test your new avatar skill.

thank you

**whist**
