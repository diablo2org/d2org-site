---
title: Switching the Bone Spear for the Lightning Javelin
summary: >-
  This simple tutorial is pretty much a variant on the one Fusman did regarding
  how to switch the necromancer's teeth skill for freezing ice bolts just with a
  few extra bits and pieces thrown in for…
keepId: 207
author: Phrozen Heart
credit: 'by }-DGNR8-{'
posted: '2003-12-02'
views: 6488
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=207'
---
This simple tutorial is pretty much a variant on the one Fusman did regarding how to switch the necromancer's teeth skill for freezing ice bolts just with a few extra bits and pieces thrown in for good measure. The whole point of this exercise is to give the necromancer a skill comparable in appearance to the amazon lightning javelins in place of his bone spear. I'll assume you've read through and understand the Idiot's Guide to Mod Making before reading this as you'll need to know the basics before you can make much use of this. This tutorial works fine with v1.09b and v1.09d of the LoD expansion pack but I can't guarantee anything when the new v1.10 patch is released.

**Required Files:**  
data/global/excel/missiles.txt  
data/local/LNG/ENG/patchstring.tbl (or substitute 'ENG' language code if not playing D2 in English)  
data/global/excel/skills.txt

Firstly, open up the missiles.txt file which contains the table of all 'missile' type objects in the game and a large selection of variables which can be tweaked for each. Scroll down to row 194 which is the entry for the missile that makes up the body of the bone spear. go across to columns C and D which control the spear's speed and up it from 24 to 30 to match the lightning javelins used by the amazon. You probably won't noticed a huge difference in speed but the extra boost adds to the effect. We won't bother changing the lightning effects as both missiles have a pure white glow. In column P (CelFile), you'll see the filename of the animation that missile uses which is currently 'BoneSpear'. Changing this to 'LightningJavelin' and change column Q (Animlen) to 5 as there is one less frame in the javeline animation. We won't bother changing anything else in this file as the new lightning javelin works great when it still behaves like the original bone spear. Once you've done this, when the necro throws a lightning javelin you'll still have the blue/white tail of the bone spear following your missile so to remove it just scroll down to row 250 ('BoneSpearTrail') and column P (CelFile) change the value to just read as 'null'. Save the file and close it.

Next up is the skills.txt which controls all soft-coded skill variables outside of the missiles.txt file. Scroll down the Bone Spear row (row 86) and move across to column N (anim) which is the necromancer animation the game uses when the skill is activated (eg. cast, attack, kick, throw etc). Change the value from 'cast' to 'throw' so the necro will appear to pluck the lightning javelins out of the air and hurl them rather than having them just appear in mid air in front of his head. The only other thing that needs doing in this file is to give the lightning javelin actual lightning damage rather than just magical which the bone spear usually has. To do this, scroll across to column CH (EType) which controls the elemental damage type and change it from 'mag' to 'ltng'. An optional little trick you can add in for effect is to change the value in column H (itemclass1) on the bonespear row from 'xxx' to '1ht' which makes the skill require the necro to be carrying a one-handed thrusting weapon (AKA a javelin) before it will work. Save the file and close it.

That's all of the txt editing done and your new lightning javelin will work fine but on the skill tree and skill select, it'll still say bone spear. To change this, open up your patchstring.tbl file with your chosen string editor which in my case at the time of writing this is Darkstorm's Table Editor v1.02. You will need to add the following string keys and values:

|     |     |
| --- | --- |
| **STRING KEY** | **STRING VALUE** |
| Skillname84 | Lightning Javelin |
| Skillsd84 | casts forth a javelin of lightning |
| Skillsd84 | casts forth a devastating javelin of lightning |
| Skillan84 | Lightning Javelin |

After adding these four new entries to the string table, save the file and re-inserted all three files into their original locations in your patch\_d2.mpq file or test them using the direct method detailed in the Idiot's Guide.

Happy modding Keepers!
