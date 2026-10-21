---
title: Giving Items to Minions/Monsters (by Joel & Kingpin)
summary: >-
  This tutorial will show you how to modify monequip.txt to give your monsters
  and minions items they can equip and use.
keepId: 17
author: Phrozen Heart
posted: '2004-08-19'
views: 10096
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=17'
---
This tutorial will use the Shadow Master minions as base and we'll make her use the new Azurewrath sword.

FILE NEEDED :

uniqueitems.txt  
monequip.txt  
monstats.txt

1) monstats.txt  
This step is not mandatory for Shadow Master but it is VERY IMPORTANT for every other monsters. Set the Inventory column to 1.

2) uniqueitems.txt  
Go to the Azurewrath row (row # 304). Set nolimit to 1 and level to 1. nolimit will prevent the game to spawn a rare after the first spawn of Azurewrath to ensure that EVERYTIME you spawn your Master, she gets Azurewrath :-)

Go to the Lightsaber row and change its code to any other weapon code (like 7gm). So now there is only one Phase Blade able to spawn as unique. if you do'nt change it, your Master will either spawn with Lightsaber or Azurewrath.

3) monequip.txt  
Remove all entry for shadowmaster except one and use these values :

  
  

|     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- |
| monster | oninit | level | item1 | loc1 | mod1 |
| shadowmaster |     | 0   | 7cr | rarm | 7   |

Some explanation :

monster : monster ID in monstats.txt  
oninit : set it to 1 if you give items to a normal monster (like gibing Sigon's set to quuill rat :-))  
level : level the monster must have at least to get the item spawn.  
item1,2,3 : item code  
loc1,2,3 : item location (like in charstats.txt)  
mod1,2,3 : item quality

1 -> cracked ??  
2 -> low quality ?  
3 -> normal  
4 -> magic  
5 -> set  
6 -> rare  
7 -> unique  
8 -> crafted  
9 -> tempered

Now save and close all your files and run the game.

NOTES :

If you want to add a monster to monequip file, just add it BEFORE the last row !!!

If you add more than one row for a given monster with different level, sort them from the highest level one to the lowest one.

**Addendum**

I have some more to add to this nice tutorial.

**This requires two additional files:**

armor.txt  
automagic.txt

first open armor.txt

First copy Cap/hat row in armor.txt to the last row. Then make an additional copy of cap/hat row to the row below the previous one you copied to.

change the following:

your first copied row:  
code = a00  
lvlreq = 0  
reqstr = 0  
auto prefix = 306

your second copied row:  
code = a01  
lvlreq = 0  
reqstr = 0  
auto prefix = 307

now we are done in here and you can save it.

Next open up automagic.txt

at the last row that should be empty add the following:  
spawnable: 1  
group: 306  
mod1code: aura  
mod1param: fanaticism  
mod1min: 10  
mod1max: 10  
itype1: armo  
level: 0  
levelreq: 0

make a new row with the following information:  
spawnable: 1  
group: 306  
mod1code: aura  
mod1param: sanctuary  
mod1min: 10  
mod1max: 10  
itype1: armo  
level: 0  
levelreq: 0

now we are done in this file so we can save and close it.

Open up monequip.txt

add the following above joel's azurewrath column.  
shadowmaster 0 2 a00 head 3  
shadowmaster 0 1 a01 head 3

Save and exit.  
This will make it possible for shadowmaster to spawn between 3 different item groups. Each level counts as one group and it randomize between all avaible groups. The monsters Level & players skillLevel is important here, that limits what groups are avaible.

As example a player with skill Level 3 in shadowmaster can only spawn with items from Level 0 to 3.

There are also an individual randomizing in a group, each item1, item2 and item3 on same line are randomized. So, each line should only have one location. We will look at an example of later, right now we go back to where we was.

We can even make it spawn with same item if we want.

So in this example if we want to have shadowmaster spawn with two helms + azurewrath we change the recently added rows in monequip.txt to this.

shadowmaster 0 0 a00 head 3  
shadowmaster 0 0 a01 head 3

And so last we look how item1, item2 and item3 works.

This is an example from an existing row:

shadowmaster Level 6

item1: 7ar  
loc1: rarm  
mod1: 4

item2: 7xf  
loc2: rarm  
mod2: 4

item2: 7qr  
loc2: rarm  
mod2: 4

When we use more than item1 entry on a row it will use this to randomize what item it uses between avaible item1, item2 and item3 for that location. As long as you leave item2, and item3 empty it will only uses the first item1.

If we want to make it spawn an item or not we can use this we just talked about above. With the example below here it will have 50% chance to spawn an item in Level 6 group.

shadowmaster Level 6

item1: 7ar  
loc1: rarm  
mod1: 4

item2: (by leaving item2 code empty it will not spawn any item)  
loc2: rarm  
mod2: 4
