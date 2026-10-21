---
title: New Magical Modifiers (by Drackin)
summary: >-
  This tutorial explains how to create new magical modifers for use on enchanted
  items.
keepId: 25
author: Phrozen Heart
posted: '2004-08-19'
views: 11652
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=25'
---
This is very easy to do, but many people may not know how to create new magical modifiers like +Strength (based on + all skills) or +50% to dexterity, or even a combination of the two.

For this tutorial, you must know the basics of text modding, and how add strings to table files.

First, you will learn to make a new modifier that will add to strength based off of your vitality. Open up ItemStatCost.txt and add a new row at the bottom.

In the stat column(A) enter a new modifier such as 'strength\_per\_vitality'. In the next column enter the next higher number for the ID. Then, in the Signed column, enter a '1', this is so the stat can be negative. Then goto the Send Bits and input a number here that is a few bigger than what your Save Bits column(V) is so, in this case put an 8 (but never enter anything above 32) NOTE: This is only important for multiplayer games, for single player, you can enter any number as long as it is not lower than Save Bits.

Next, in the Add, Multiply and Divide columns, these are used to calculate item prices, so you can input whatever you wish here, but to be safe, keep divide as 1024.

Now, the Save Bits and Save Add columns control how high and low the value of the stat can be. The save bits column controls how high it can be, the formula is 2^savebits-(saveadd+1) so if you enter a 6 here, and a 10 in saveadd, the max the stat can be is 53, and the lowest it can be is -10.  
So put a 6 in the Save Bits column, and a 10 in the Save Add column.

Now for the real effect of this modifier. In the Op column, put a '2' (the numbers and effects of the numbers Op can take are listed at the bottom), now for Op Param this is used for setting how accurate you want it to increase, shown by the formula 2^opparam. To make it as accurate as Fourths, put a 2 here. Now, in Op base put Vitality, this is what the stat is based off of. Now in Op stat 1 put strength, this is the stat that will increase.

just a note about opbase and opstat, never ever have those as the same modifier, or the game will crash with no error.

now, for the in-game display of the new stat. Scroll over to descpriority, put any number in here, this determines how high on the modifier list this will appear when you look at a magic item.  
descfunc is the function used to display the stat (listing of all the functions at the bottom of this tutorial) put a '6' in here for now.  
In descval put a '1', this just determines the placement of some symbols.

now in descstrpos and descstrneg put ModStr1a this will display the word 'strength' from the String table, and in descstr2 you need to put the string entry that displays '(increases with vitality)', for an example, put increaseswithvit.  
then to finish off with itemstatcosts.txt, put a '0' in \*eol.  
now add the string entry for increaseswithvit. in the string table of your choice eg/ patchstring.tbl

time to edit Properties.txt, create a new row at the bottom, and put the property name, eg/ 'str/vit'  
input a '1' in done, and '17' in func1 then in stat1 put the new entry you made in ItemStatCosts.txt, which was 'strength\_per\_vitality' for this example.  
then, scroll over to the very end of the file and put a '0' in \*eol.

the \*desc, \*param, \*min, \*max and \*notes columns are completely optional, and are just used to help figure out what this property does, and how it's used.  
With the '2' we put in op param in ItemStatCosts.txt, you can put a description for \*param, which would be '(4ths)'

Now your new stat is 100% ready to be used in the game, you just have to assign it to be spawn through magicsufix/prefix.txt, or use the cube to test it out.

If you want to create other stats, such as +% (stat) or +% stat (based on stat), take a look at the other properties in itemstatcosts.txt to find out what everything does, and use the information below as well.

(excerpt from the 1.10 fileguide thread, posted by Char originally)  
op  
This is the number of the operator used to calculate the effects of the item stat.  
Known numbers and effects:  
1 : op stats are increased by \[statvalue\] percent  
2 : op stats are increased by \[statvalue\] \* \[op base\] / 2^\[op param\]  
3 : not used, effect unknown  
4 : seems to have the same effect as 2  
5 : op stats are increased by \[statvalue\] \* \[op base\] / 2^\[op param\] percent  
6 : op stats are increased by time  
7 : op stats are increased by time and percent  
8 : used to calculate the mana based on energy  
9 : used to calculate the hitpoints and stamina based on vitality

(excerpt from the 1.10 fileguide thread, posted by Char originally)  
descfunc  
Function used to display the stat. Didn't yet have the time to see why this exactly works

some values and what they display:  
1 : +\[value\] \[string\]  
2 : \[value\]% \[string\]  
3 : \[value\] \[string\]  
4 : +\[value\]% \[string\]  
5 : \[value/1.28\]% \[string\] // used for howl  
6 : +\[value\] \[string\] (based on character level)  
7 : \[value\]% \[string\] (based on character level)  
8 : +\[value\]% \[string\] (based on character level)  
9 : \[value\] \[string\] (based on character level)  
10 : \[value/1.28\]% \[string\] (based on character level)  
11 : Repairs 1 durability in \[100/value\] seconds  
12 : +\[value\] \[string\] // used for stupidity, freeze  
13 : +\[value\] to \[class\] skill levels  
14 : +\[value\] to \[skilltab\] skills (\[class\] only)  
16 : Level %d %s Aura When Equipped
