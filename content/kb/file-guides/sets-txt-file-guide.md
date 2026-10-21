---
title: Sets.txt File Guide
summary: >-
  Refer to the Set Items File Guide for fields that define the attributes of
  specific items in a set.
keepId: 349
author: Nefarius
credit: 'by Alkalund, revised by Myhrginoc, Restyled by HarvestWombs'
posted: '2007-10-20'
modified: '2020-02-16'
views: 14122
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=349'
---
Refer to the [Set Items File Guide](/kb/file-guides/setitems-txt-file-guide) for fields that define the attributes of specific items in a set.

**index:** String key linked to by the set field in SetItems.txt - used to tie all of the set's items to the same set.

**name:** String key to item's name in a .tbl file.

version: 0 = Available in Classic D2 and LoD Expansion; 100 = available in LoD Expansion only.

level: set level, perhaps intended as a minimum level for partial or full attributes to appear (reference only, not loaded into game).

## Gold attributes

**PCode2a**,**PCode2b** to **PCode5a**,**PCode5b:** An ID pointer of a property from Properties.txt, these columns control each of the five pairs of different partial set modifiers a set item can grant you at most.

**PParam2a**,**PParam2b** to **PParam5a**,**PParam5b:** The parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them, these fields support calculations.

**PMin2a**,**PMin2b** to **PMin5a**,**PMin5b:** Minimum value to assign to the associated property. Certain properties have special interpretations based on stat encoding (e.g. chance-to-cast and charged skills). See the File Guides for Properties.txt and ItemStatCost.txt for further details.

**PMax2a**,**PMax2b** to **PMax5a**,**PMax5b:** Maximum value to assign to the associated property. Certain properties have special interpretations based on stat encoding (e.g. chance-to-cast and charged skills). See the File Guides for Properties.txt and ItemStatCost.txt for further details.

**FCode1** to **FCode8:** An ID pointer of a property from Properties.txt, these columns control each of the eight different full set modifiers a set item can grant you at most.

FParam1 to FParam8: The parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them, these fields support calculations.

**FMin1** to **FMin8:** Minimum value to assign to the associated property. Certain properties have special interpretations based on stat encoding (e.g. chance-to-cast and charged skills). See the File Guides for Properties.txt and ItemStatCost.txt for further details.

**FMax1** to **FMax8:** Maximum value to assign to the associated property. Certain properties have special interpretations based on stat encoding (e.g. chance-to-cast and charged skills). See the File Guides for Properties.txt and ItemStatCost.txt for further details.

**\*eol:** terminator field, not used in game, primary purpose is to keep Microsoft Excel from misbehaving.

## Appendix

Gold attributes will appear depending on how many set items are equipped, both partial set attributes (not all set items equipped) and full set attributes (all set items equipped only).  
If a set has X number of items, at most there will be X-1 partial attributes on any item.  

```
PCode2a,PCode2b -> when any second set item is also equipped.
PCode3a,PCode3b -> when any third set item is also equipped.
PCode4a,PCode4b -> when any fourth set item is also equipped.
PCode5a,PCode5b -> when any fifth set item is also equipped.
```
