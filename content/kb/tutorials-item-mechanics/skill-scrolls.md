---
title: Skill Scrolls
summary: right-click scrolls that cast a skill
keepId: 462
author: kidpaddle94
posted: '2010-12-05'
modified: '2024-10-12'
views: 8989
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=462'
---
Ok, here I will explain you how to make a scroll that releases a skill, when right-clicked.  
Note that the scroll, could be any item you like: a book, an orb, a potion? I will also explain you how to change it to your liking.

This tutorial also requires 0 code editing (CE)

_This tutorial is meant to work on Diablo II lord of destruction, version 1.10 or higher._

**Tools needed and files needed:**

any text files editor (I use AFJ sheet editor)  
any tbl files editor (I use AFJ tbl edit)  
Misc.txt  
Skills.txt  
Missiles.txt

Before you make this tutorial, you should read the fileguides for the text files needed.  
these fileguides are available in the knowledge base.

First, with your text files editor, open Misc.txt  
Now go to **antidote** line. Copy **antidote** line and paste it at the bottom.  
Now make the following changes:

**name:** Skill Scroll  
**\*name:** Skill Scroll  
**version:** 100  
**level:** _what you want here_  
**levelreq:** _what you want here_  
**code:** @ss  
**alternategfx:** @ss  
**strname:** @ss (this is a string key.)  
**flippyfile:** flprsc (read more later)  
**invfile:** invrsc (read more later)  
**type:** _you can keep the same or make your own_  
**dropsound:** item\_scroll  
**usesound:** item\_scroll  
**belt:** 0  
**pSpell:** 10  
**spelldesc:** 1  
**spelldescstr:** _this is the description of your item. this is a string key_  
**akaramin:** blank  
**akaramax:** blank  
**lysandermin:** blank  
**lysandermax:** blank  
**lysandermagicmin:** blank  
**lysandermagicmax:** blank  
**alkormin:** blank  
**alkormax:** blank  
**cainmin:** blank  
**cainmax:** blank  
**malahmin:** blank  
**malahmax:** blank  
**jamellamin:** blank  
**jamellemax:** blank  
**PermStoreItem:** blank  
**MultiBuy:** blank

Now your scroll is done. save **Misc.txt** and open **skills.txt**  
Now the skill that your scroll release, is the **Fireball** skill (sorceress fireball).  
The **pSpell** 10 is coded to cast this skill.  
So, you just have to change this skill to your liking. (like missile, damage, synergy, etc etc...)

**flippyfile & invfile (Misc.txt)**

**flippyfile** is the animation of the item, when you drop it.  
**invfile** is the inventory graphic.

so you can change this to, a book, and orb, or your own inventory graphic.  
Don't forget to change the sounds to fit with your new graphic.

**examples of what you can do:**

with this scroll, I made, a red portal to an uberquest.  
I spawned a monster.  
I made some skills, like a nova and etc...

there's probably more possibilities.

**Now, there is only one bad thing:**

You can have only one of this type of scrolls, because the **pSpell** is **hardcoded** to the **Fireball** line and can't be modified without code editing.  
But this is still pretty good, if you want an all softcoded mod.

Now that your scroll is all done, you can spawn it by a cube recipe, or you can enable it again, at the vendors.

\--------------------

**Update:**

Ok, so here is a little update to my skill scrolls tutorial. In the main tutorial, I just explained how to make the scroll, and what skill you have to modify. But I think I didn't explained the coolest features of it, so here is a little update.

Now I will explain you how to: Spawn any monster from the scroll and spawn a red portal to a defined level.  
Note that I will not explain how to make the scroll again. If you don't already have one done, you can find how to make it in previous tutorials of this guide.

**\- Spawn any monster from the scroll:**

First open **missiles.txt**, and copy **firebolt** line. (and paste it at the bottom).  
make these changes:  
**Missile:** monster\_spawning  
**Id:** next in your missiles.txt  
**pSrvHitFunc:** 6  
**s HitPar1:** 243 (this is a monstats.txt Id, Diablo here.)  
**\*server hit param1 desc:** Monster Spawned Id  
**s HitPar2:** 1  
**\*server hit param2 desc:** Spawn Mode = NU  
**Range:** 5  
**CelFile:** null  
**AnimLen:** 1  
**AlwaysExplode:** 1  
**Skill:** _blank_

now open **skills.txt** and go to **Fireball** line. Make these changes:  
**srvmissile:** monster\_spawning  
**cltmissile:** monster\_spawning  
**reqskill1:** _blank_

Now it's done, your scroll should spawn Diablo when right-clicked.  
You can change Diablo by any of your monsters, just modify the **sHitPar1** to your monster Id, this Id is the **monstats.txt** Id.

**\- Spawn a red Portal by the scroll:**

Here I will explain how to spawn a red portal to the cow level by our scroll.  
The portal can lead to any level, but here I will explain how to make it a portal to cow level.  
I will also explain how to choose the level. The level chosen should always be a Act 1 level, I got some crashes and problems when trying to spawn portals to levels from other acts. The scroll also must be casted in the same Act as your destination level.

First open **missiles.txt** and go to **cairnstones** line.  
copy **cairnstones** line and paste it at the bottom.  
make the following changes:  
**Missile:** new\_portal  
**Id:** next in your missiles.txt  
**Param4:** 39 _(level Id, 39 = cow level)_  
**range:** 25  
**SubMissile1:** _blank_  
**CltSubMissile1:** _blank_  
**CltSubMissile2:** _blank_

now open **skills.txt** and go to **Fireball** line.  
Make these changes:  
**srvmissile:** new\_portal  
**cltmissile:** new\_portal  
**reqskill1:** _blank_

Now you're done. Your scroll should spawn a red portal, leading to the secret Cow level.  
But there is still a problem, when you will hover your mouse on the portal, it will display **'no level name'**. There is only one way I know to fix this problem without code editing, you need to edit the default string key for softcoded portals. it's in **string.tbl**.  
It's at the full bottom of **string.tbl**, the key is called **strLevelLoadFailed**  
just edit the string to: **to The Secret Cow Level**

to change the destination level, you just change the **Param4** column of your missile, to the Level Id you want. (levels.txt Id).

thank you

**whist**
