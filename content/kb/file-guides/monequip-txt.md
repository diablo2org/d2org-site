---
title: MonEquip.txt
summary: >-
  Note: Before you can do anything in here, you must set the inventory column in
  MonStats.txt to true (1). this tells the game to look for equipment data
  inside MonEquip.txt
keepId: 365
author: Nefarius
credit: 'by Nefarius, restyled by HarvestWombs'
posted: '2005-10-26'
modified: '2018-10-24'
views: 13336
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=365'
---
**_MonEquip.txt File Guide_**  
By Nefarius

> **Note:** Before you can do anything in here, you must set the **inventory** column in MonStats.txt to true (1).

this tells the game to look for equipment data inside MonEquip.txt

NOTE: Never set that column to true if you don't have the appropriate entries in MonEquip.txt, you will get an unhandled exception.  
Furthermore, you should leave the last line intact, if you add new lines add them infront of the last line.

**monster:** This column contains the ID pointer to MonStats.txt, make sure this is accurate (otherwise you will crash for the same reasons as above).

**oninit:** Boolean, 0 = monster is created by skill, 1 = monster is created by level.

**item1-3:** The 3-4 letter code of the item from weapons, armor or misc.txt

**loc1-3:** The slot to equip the item in. (see BodyLocs.txt for more details)

**mod1-3:** Item quality of the equipped item. (see table below)

**eol:** End of Line.

**_Item Quality:_**

```
1	low quality
2	normal
3	superior
4	magic
5	set
6	rare
7	unique
8	crafted
9	tempered
```
