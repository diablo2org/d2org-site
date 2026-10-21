---
title: Properties.txt File Guide
summary: >-
  This file depends on ItemStatCost.txt. A stat must be defined there in order
  to use its ID in the stat1-7 fields.
keepId: 345
author: Necrolis
credit: 'by Joel Falcou (revised by Myhrginoc), Restyled by HarvestWombs'
posted: '2006-08-31'
modified: '2024-06-07'
views: 28032
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=345'
---
This file depends on [ItemStatCost.txt](/kb/file-guides/itemstatcost-txt).  
A stat must be defined there in order to use its ID in the **stat1-7** fields.

The bulk of the file consists of seven function blocks. Each block has a function index (**FuncX**) and three parameters (**SetX**, **ValX**, **StatX**). Parameters are only useful if the underlying function is written to interpret them.

A '\*' in the field name means it is a comment field not loaded into the game.

**code:** Property identifier to use in other txt files anywhere a property is applied (e.g. MagicPrefix, MagicSuffix, Automagic, MonProp, Gems, Runes, Sets, SetItems, UniqueItems, Cubemain).

**\*done:** 1 if the property is active (boolean).

**set1** to **set7:** Parameter to the property function, if the function can use it (see Color property)

**val1** to **val7:** Parameter to the property function, if the function can use it (see class skills properties).

**func1** to **func7:** Function used to assign a value to a property (see list below)

**stat1** to **stat7:** Stat applied by the property (see ItemStatCost.txt), if the function uses it.

**\*desc:** Description of the property

**\*param:** Description of the param value

**\*min:** Description of the min value

**\*max:** Description of the max value

**\*notes:** Additional comments

**\*eol:** Terminator field, not used in game, primary purpose is to keep Microsoft Excel from misbehaving.

**APPENDIX: Functions of Properties.txt**  
Here are some functions used by the properties.txt to link param/min/max value to the actual bonus of the properties.

```
1 - Applies a value to a stat, can use SetX parameter.
2 - defensive function only, similar to 1 ???
3 - Apply the same min-max range as used in the previous function block (see res-all).
4 - not used ???
5 - Dmg-min related ???
6 - Dmg-max related ???
7 - Dmg% related ???
8 - ??? use for speed properties (ias, fcr, etc ...)
9 - Apply the same param and value in min-max range, as used in the previous function block.
10 - skilltab skill group ???
11 - event-based skills ???
12 - random selection of parameters for parameter-based stat ???
13 - durability-related ???
14 - inventory positions on item ??? (related to socket)
15 - use min field only
16 - use max field only
17 - use param field only
18 - Related to /time properties.
19 - Related to charged item.
20 - Simple boolean stuff. Use by indestruct.
21 - Add to group of skills, group determined by stat ID, uses ValX parameter.
22 - Individual skill, using param for skill ID, random between min-max.
23 - ethereal
24 - property applied to character or target monster ???
25-35 can be used for custom code.  Check plugin documentation for syntax.
36 - swaps the stat value (rand[min, max]) with the properties "valx" column value (only available in versions after 1.10)
```
