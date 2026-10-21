---
title: Creating Single Use Potions
summary: >-
  In this tutorial, I'm going to explain how you can create a single use potion
  that will allow your character to receive its full properties once, but
  additional potions will not work for him.
keepId: 439
author: Nefarius
credit: >-
  by Talonrage --- this tutorial will teach you how to make a potion a character
  can drink only once and never again.
posted: '2006-11-25'
modified: '2018-01-06'
views: 12193
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=439'
---
In this tutorial, I'm going to explain how you can create a single use potion that will allow your character to receive its full properties once, but additional potions will not work for him.

You will need to edit two text files:

ItemStatCost.txt

Misc.txt

ItemStatCost.txt

Open up your ItemStatCost.txt and scroll down to ID #183. This row can be used to store permenant stats to your character, so we will use it for this tutorial.

(You can also use ID # 184, 185, 186, 187, 189, 190, 191, 192, 193. 200, 202, 203, 204, 205, 206, 207, 208, 209, 210 , 211, & 212) All these rows can be used to store a permenant stat and are all considered DUMMY stats (they are invisible and have no real game effect).

You will need to make the following changes:

There is no need to change the Stat name. Just leave it as : unused183 (or whatever stat name is displayed for the row you are using).

Send Bits : 32

Saved : 1

CSvSigned : 0

CSvBits : 32

Divide : 1024

Direct : 1

\*EOL : 0

You can make multiple Dummy Stats using the above listed ID#. EVERY dummy stat is set up the same way.

We are finished here, so save and close the file.

Misc.txt

OK, now we are going to create the potion. This potion will give the character +25 Stat Points and +1 Skill Point when drunk.

1) Open up Misc.txt and add a new row to the end of the file.

2) Now Copy/Paste 'Row 1 : Elixir' into it at the end of the file and make the following changes (leave those not listed the same):

Name : elixir 1

\*Name : elixir 1

Version : 100

Level : 1 (or whatever minimum monster / treasureclass level you wish to have them drop by.)

LevelReq : 1 (or whatever character level you wish them to be to drink them).

Spawnable : 1

Code : x01 (or whatever unique 3-digit value you wish)

NameStr : x01 (I keep the code and namestr the same for simplicity. This is the stringfile you'll need add to make the item display its name)

Pspell : 4 (This is very important)

Stat1 : statpts (Name from ItemStatCost.txt.)

Calc1 : (stat('unused183'.base)==0)?25:0 (this is how you make the potion only usable once per character. I've provided alternate calcs below).

Stat2 : newskills (Name from ItemStatCost.txt.)

Calc2 : (stat('unused183'.base)==0)?1:0 (same as Calc1)

Stat3 : unused183 (This is the Dummy Stat we just made in ItemStatCost.txt. This is how we set up the potion to be usable only once)

Calc3 : (stat('unused183'.base)==0)?1:0

This adds 1 to the Dummy Stat: unused183. Now, future potions will no longer work because this stat has been permenantly raised to a value of 1. The above Calc fields require this stat to be 0 for the potion to take effect.)

SpellDesc : 1

SpellDescStr : elixir1a (Unique String File to display what the potion does.)

Thats it. All the other collumns remain unchanged. Save and Close.

String File Changes (PatchString.tbl, or whatever table file you wish to edit).

x01 : Spectral Elixir (Or whatever name you wish the potion to display. This uses the value from the NameStr Collumn in Misc.txt).

elixir1a : This potion can only be used once.

Grants 1 Permenant Skill Point.

Grants 25 Permenant Stat Points

Basically, I made these potions and gave one to all starting characters to allow greater character customization at startup. However , they can be used for about anything, from special quest drops to normal treasure items.

You can also set up different Calc fields. For instance, you can make each potion usable up to 3 times, or require a dummy stat to be raise to a certain value befor it an even be used.

Lastly, you dont need to make the potions dependant on a dummy stat. You can set up the calc fields to use other stats such as Level, Dexterity, Experience Points, exc.

The choices are almost limitless.

Alternate Calc Fields - version 1

Stat1 : statpts (Name from ItemStatCost.txt.)

Calc1 : 5 (This gives 5 stat points every time the potion is drunk).

Stat2 : newskills (Name from ItemStatCost.txt.)

Calc2 : (stat('unused183'.base)==0)?1:0 (you will only receive the bonus skill point the first time you drink the potion.)

Stat3 : unused183 (This is the Dummy Stat we just made in ItemStatCost.txt. This is how we set up the potion to be usable only once)

Calc3 : 1 (This is how we set up the potion to be usable multiple times)
