---
title: QualityItems.txt
summary: 'Qualityitems.txt Composed by Quatl with help from Nefarius, and Myhrginoc'
keepId: 437
author: Nefarius
credit: 'by Quatl, restyled by HarvestWombs'
posted: '2006-11-01'
modified: '2018-10-25'
views: 13189
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=437'
---
**_Qualityitems.txt_**  
Composed by Quatl with help from Nefarius, and Myhrginoc

## Overview

Controls properties for superior quality items.  
Each row holds settings for both armor and weapons.  
I assume the probability of each row is the same.  
New rows may be added, and are functional. I have no clue as to limits.

## Related .TXT files

This file is useing  
[Properties.txt](/kb/file-guides/properties-txt-file-guide)  
[ItemTypes.txt](/kb/file-guides/itemtypes-txt) (only indirectly see below)

COLUMN DESCRIPTIONS :

**nummods:** 1 or 2  
How many mods appear on items the game makes superior useing this row

**mod1code:** String Code from properties.txt  
%ac, or red-mag, for example. 1st property for items of this quality, seems to allow any property

**mod1param**, \[color=#FFBF00**\]mod1min**\[/color\], **mod1max:** Same as any other property setting field. See properties.txt for details.

**mod2code:** String Code from properties.txt  
2nd property for armors of this quality (when nummods = 2)

**mod2param**, **mod2min**, **mod2max:** Same as any other property setting field. See properties.txt for details.

**ToHitMin** -> **Dur%Max:** Numeric Value  
Out dated. You can safely use these for your own comments or whatever.  
Not loaded by the game

(Thanks Myhrginoc)

**effect1**, **effect2:** String\_Key  
String Key from a tbl file. I'm not sure if this has to be a valid key.  
Loaded, but not displayed by the game.

(Thanks Myhrginoc)

**armor** -> **belt:** Boolean Value  
Filter items allowing this row's mods  
1 = allow, 0 = dissalow

> **Note:** These types are the original hardcoded item types

(Thanks Nefarius.) Helm for instance is not an option. I assume that  
itemtypes.txt types that inherit from one of these types will cascade properly.

**_Item type Cascades:_**

(From Nefarius; not fully confirmed)

```
armor -> tors, helm
weapon -> mele (except thro, rod, orb)
shield -> shld
throw -> thro
scepter -> scep
wand -> wand
staff -> staf
bow -> miss (xbow/bow)
boots -> boot
gloves -> glov
belt -> belt
(type comb ? could be either throw or weapon or both, not checked)
```

**level:** Level requirement push

**multiply:** Item's cost multiplied by this value.

**add:** Item's cost increased by this value.

I realize this is a simple file , but I think it has potential for some interesting things, and I couldn't find much on it. Hopefuly someone will find it handy. Note this file is not included in the standard txt extract package, so you'll have to milk it from d2exp by hand.

\-Quatl
