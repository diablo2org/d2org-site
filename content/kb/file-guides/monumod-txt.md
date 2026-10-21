---
title: MonUMod.txt
summary: >-
  OVERVIEW: MonUMod.txt controls the general and special abilites of Champions,
  Random Unique monsters, SuperUnique monsters as well as their minions (though
  only in some circumstances).
keepId: 161
author: Phrozen Heart
credit: 'by 54x & Red Havoc, restyled by Ogodei'
posted: '2007-01-12'
modified: '2018-10-24'
views: 18927
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=161'
---
_OVERVIEW: MonUMod.txt controls the general and special abilites of Champions, Random Unique monsters, SuperUnique monsters as well as their minions (though only in some circumstances)._

_**Warning:** this file is tricky, as it contains a table of parameters inside. The last two columns of datas are in fact to be considered as a complete standalone file and have no relations at all with the rest of the text file.  
In case you wonder, this is an uguly and illogical way to proceed, so DON'T DO THAT AT HOME when you're making your own databases. Make two separate tables instead!_

**Related text files**

MonUmod.txt is used together with [MonType.txt](/kb/file-guides/montype-txt) and it is used by [SuperUniques.txt](/kb/file-guides/superuniques-txt).

**Columns description**

**uniquemod**: This column only serves as reference and it is not used by any other file. It holds short keywords that describe the modifier of each line, so that you know what you're going to mess with.  
NOTE: For a precise description see the [SuperUniques.txt](/kb/file-guides/superuniques-txt) file guide, specifically the columns from '**Mod1**' to '**Mod3**'.

**Id**: This column is used for the internal Id of the modifier. These Id numbers are to be typed in the columns from '**Mod1**' to '**Mod3**' of [SuperUniques.txt](/kb/file-guides/superuniques-txt) and serve to give bosses their special abilities.

**enabled**: It is a boolean which states if the modifier is useable in game. **1** enables it, **0** disables it.

**version**: This field tells if the modifier can be applied to bosses depending on a specific game type. **0** for Classic only, **100** for Expansion.

**xfer**: It is a boolean which tells the game if it has to display "Minion" under the life bar of the boss' minion life bars. **1** enables it, **0** disables it.

**champion**: States whether the modifier is only useable by **Champion** class bosses. **1** for Champion-only, **0** for all kind of bosses.

**fPick**: Not exactly known. Probably it has to do with grouping the modifiers à la [States.txt](/kb/file-guides/states-txt), for which the same boss cannot have i.e both Lightning Enchanted and Multipl Shots.

**exclude1 - exclude2**: These two fields can be used to exlude specific monster types from spawning with certain modifiers. They retrieve the '**Type**' column from [MonType.txt](/kb/file-guides/montype-txt).  
A notable example in vanilla are the Sand Leapers, which will never spawn with the Lightning Enchanted modifier.

**cpick- cpick(N) - cpick(H)**: These columns restrict the range of modifiers that can spawn on Champions respectively in Normal, Nightmare and Hell. If empty, the modifier will not appear on Champions.  
NOTE: you may add (boss-only) modifiers to champions if you also set their Champion column to 1 and enter a value in their cpick columns. Also, take note that By entering higher numbers you can increase the frequency in which the modifier is used.  
Example: if you set cpick for the fanatic modifier to 7 fanatic champions will occur like seven times more often in normal difficulty than possessed champions.

**upick - upick(N) - upick(H)**: Same as above, but for Random Unique Bosses.

**fInit**: Not read by the game. You can use it as a comment field.

**NOTE: The following two are actually composing a parameter table. The column \* constant desc is a description of the parameter, while the column '**constants**' is the value of that parameter.**

**constants**: This column includes the value that will set general properties of champions, bosses and their minions. The values are described in '\*constant desc'. Some parameters have different values per difficulty, while others are global for the 3 difficulties. Here's the content of that table, in a more handy form :  

```
constants	*constant desc
20	champion chance
100	minion +hp%
75	minion +hp% (N)
50	minion +hp% (H)
200	champion +hp%
150	champion +hp% (N)
100	champion +hp% (H)
300	unique +hp%
200	unique +hp% (N)
100	unique +hp% (H)
75	champion +tohit%
100	champion +dmg%
50	minion +tohit%
100	unique +tohit%
75	minion +dmg% (strong)
150	unique +dmg% (strong)
0	minion +elem min dmg%
33	minion +elem min dmg% (N)
33	minion +elem min dmg% (H)
0	minion +elem max dmg%
50	minion +elem max dmg% (N)
50	minion +elem max dmg% (H)
33	champion +elem min dmg%
33	champion +elem min dmg% (N)
33	champion +elem min dmg% (H)
50	champion +elem max dmg%
50	champion +elem max dmg% (N)
50	champion +elem max dmg% (H)
66	unique +elem min dmg%
66	unique +elem min dmg% (N)
66	unique +elem min dmg% (H)
100	unique +elem max dmg%
100	unique +elem max dmg% (N)
100	unique +elem max dmg% (H)
```

**\*eol**: End Of Line.  
WARNING: Do not remove this column ! Its purpose is to ensure the last column of the tabulated text files are always filled. Be sure that all rows of this column are filled with a value.
