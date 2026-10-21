---
title: CharStats.txt
summary: >-
  class: The character class this line refers to (this is just a reference
  field, you can't actually change this).
keepId: 389
author: Nefarius
credit: 'by Nefarius, restyled by HarvestWombs'
posted: '2006-06-07'
modified: '2018-10-20'
views: 24075
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=389'
---
**class:** The character class this line refers to (this is just a reference field, you can't actually change this).

**str:** The amount of strength this character class will start with.  
**dex:** The amount of dexterity this character class will start with.  
**int:** The amount of energy and mana this character class will start with.  
**vit:** The amount of vitality and a portion of life this character class will start with.

**tot:** This field is not used by the game, and never served any purpose, it's only there as reference (it contains the sum of str, dex, int and hp).  
**stamina:** The amount of stamina this character class will start with.  
**hpadd:** The amount of life added to the amount of life granted by the vit column.

**PercentStr:** Unused (but loaded by code and repurposeable).  
**PercentDex:** Unused (but loaded by code and repurposeable).  
**PercentInt:** Unused (but loaded by code and repurposeable).  
**PercentVit:** Unused (but loaded by code and repurposeable).

**ManaRegen:** The number of seconds that need to elapse until mana is completely regenerated, thus lower values make mana regenerate faster, higher values slow the process down.

**ToHitFactor:** This value is added to the basic attack rating of this character class (not that this really makes a difference later on).  
WARNING: Unless you alter the attack rating calculation in the games code, large negative values here will give the characters negative attack rating early on.

**WalkVelocity:** The speed of this character class when walking (used to be 7 prior to LoD).  
**RunVelocity:** The speed of this character class when running (used to be 11 prior to LoD).  
**RunDrain:** Rate at which this character class burns stamina when running, the lower the value the slower the loss of stamina.

**Comment:** I really wonder what this could be!?

**NOTE:** Each point of Life/Mana/Stamina is divided by 256 for precision.  
**LifePerLevel:** Amount of life earned for each level up. This value is in fourths, thus the lowest bonus possible is 64/256 (also represented as 0.25 or 1/4).  
**StaminaPerLevel:** Amount of stamina earned for each level up. This value is in fourths, thus the lowest bonus possible is 64/256.  
**ManaPerLevel:** Amount of mana earned for each level up. This value is in fourths, thus the lowest bonus possible is 64/256.

**LifePerVitality:** Amount of life earned for each point invested in vitality. This value is in fourths, thus the lowest bonus possible is 64/256.  
**StaminaPerVitality:** Amount of stamina earned for each point invested in vitality. This value is in fourths, thus the lowest bonus possible is 64/256.

**ManaPerMagic:** Amount of mana earned for each point invested in energy. This value is in fourths, thus the lowest bonus possible is 64/256.

**StatPerLevel:** Amount of stat points earned at each level up.

**#walk:** Reference field, contains the length of the WL animation in frames.  
**#run:** Reference field, contains the length of the RN animation in frames.  
**#swing:** Reference field, contains the length of the A1 animation (when wielding a melee weapon) in frames.  
**#spell:** Reference field, contains the length of the SC animation in frames.  
**#gethit:** Reference field, contains the length of the GH animation in frames.  
**#bow:** Reference field, contains the length of the A1 animation (when wielding a bow) in frames.

**BlockFactor:** The amount of blocking that is added to the base shield blocking from Armor.txt for display and calculation purposes.

**StartSkill:** An ID pointer from [Skills.txt](/kb/file-guides/skills-txt), this controls what skill bonus will spawn on the characters starting weapon.  
**Skill 1:** to **Skill 10:** The skills that this character class starts with (these skills will always be available from cLvl 1 onward), obviously these are ID pointers from [Skills.txt](/kb/file-guides/skills-txt) too.

**StrAllSkills:** This field tells the game what string to display for the bonus to all class skills (ex: +1 to all Amazon skills).  
**StrSkillTab1:** This field tells the game what string to display for the bonus to all skills of the first skill tab (ex: +1 to all Bow and Crossbow skills).  
**StrSkillTab2:** This field tells the game what string to display for the bonus to all skills of the second skill tab (ex: +1 to all Passive and Magic skills).  
**StrSkillTab3:** This field tells the game what string to display for the bonus to all skills of the third skill tab (ex: +1 to all Javelin and Spear skills).  
**StrClassOnly:** This field tells the game what string to display for class specific items (and class specific skill boni) (ex: Amazon Only).

**baseWClass:** What weapon class will the game default to when no weapon is equipped (by default this is 'hth', which makes the game load the DCC files associated with that animation, and thus the player appears unarmed, for example you could change this to '1hs' and the player will appear as if wielding an invisible 1-handed slashing weapon.

**item1:** to **item10:** This field is an ID pointer from Weapons.txt, Armor.txt and Misc.txt, it controls what item this character will start with (aka the newbie equipment). To make a character start with the horadric cube for example you would set this to 'box' (without the quotes of course).  
**item1loc:** to **item10loc:** The location in which the associated item will be placed, this is an ID pointer from BodyLocs.txt, to make the item appear in the inventory leave this field blank, if the item can be placed in the belt it will be created there (as long as there are belt slots left).  
**item1count:** to **item10count:** The amount of items of the associated item type to create, thus if you want to make your character start with 8 rather then 4 health potions you'd set the value to 8 rather then 4.
