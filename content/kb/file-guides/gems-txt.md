---
title: Gems.txt
summary: >-
  name: This is a reference field, so that you know what gem or rune this line
  refers to.
keepId: 391
author: Nefarius
credit: 'by Nefarius, restyled by HarvestWombs'
posted: '2006-06-09'
modified: '2018-10-20'
views: 13278
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=391'
---
**name:** This is a reference field, so that you know what gem or rune this line refers to.

**letter:** This field controls what string the game will use for the rune-letter displayed when the rune has been socketed into an item.

**transform:** This field controls what color the item the gem or rune has been socketed into is going to shift to, a list of colors can be found in Colors.txt (count starting from 0).

**code:** What item will these modifiers be appended to, this is what actually appends the stats to a gem, prior to 1.07 this was hardcoded and thus it was impossible to add new gems without editing the dlls.

**nummods:** This is another reference field, to make it easier to see how many different modifiers the gem or rune will have.

**weaponMod1:** to **weaponMod3:** An ID pointer to a property in Properties.txt, these columns control each of the three modifiers a gem will give to items using GemApplyType 0 (by default this is used by weapons).

**weaponMod1Param:** to **weaponMod3Param:** The parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them.  
WARNING: You should not use properties that require parameters in this text file, since the parameters will stack when more then one gem of this type is socketed into the item, producing many undesired effects.

**weaponMod1Min:** to **weaponMod3Min:** Minimum value to assign to the associated property.

**weaponMod1Max:** to **weaponMod3Max:** Maximum value to assign to the associated property.  
WARNING: Gem stats are not saved, thus having minimum and maximum assign different values will cause the gem stats to re-randomize every frame, until the gem is socketed into an item.

**helmMod1:** to **helmMod3:** An ID pointer to a property in Properties.txt, these columns control each of the three modifiers a gem will give to items using GemApplyType 1 (by default this is used by body armors and helmets).

**helmMod1Param:** to **helmMod3Param:** The parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them.  
WARNING: You should not use properties that require parameters in this text file, since the parameters will stack when more then one gem of this type is socketed into the item, producing many undesired effects.

**helmMod1Min:** to **helmMod3Min:** Minimum value to assign to the associated property.

**helmMod1Max:** to **helmMod3Max:** Maximum value to assign to the associated property.  
WARNING: Gem stats are not saved, thus having minimum and maximum assign different values will cause the gem stats to re-randomize every frame, until the gem is socketed into an item.

**shieldMod1:** to **shieldMod3:** An ID pointer to a property in Properties.txt, these columns control each of the three modifiers a gem will give to items using GemApplyType 2 (by default this is used by shields).

**shieldMod1Param:** to **shieldMod3Param:** The parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them.  
WARNING: You should not use properties that require parameters in this text file, since the parameters will stack when more then one gem of this type is socketed into the item, producing many undesired effects.

**shieldMod1Min:** to **shieldMod3Min:** Minimum value to assign to the associated property.

**shieldMod1Max:** to **shieldMod3Max:** Maximum value to assign to the associated property.  
WARNING: Gem stats are not saved, thus having minimum and maximum assign different values will cause the gem stats to re-randomize every frame, until the gem is socketed into an item.
