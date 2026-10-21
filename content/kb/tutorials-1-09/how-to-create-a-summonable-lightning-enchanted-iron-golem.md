---
title: 'How to create a Summonable, Lightning Enchanted Iron Golem'
summary: >-
  This document will teach you how to mimic the 'Lightning Enchanted' attribute
  which most Unique Monsters in Hell possess, and many other attributes and
  apply it to your Iron Golem. The author assumes…
keepId: 195
author: Phrozen Heart
credit: by unitone1
posted: '2003-12-02'
views: 6292
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=195'
---
This document will teach you how to mimic the 'Lightning Enchanted' attribute which most Unique Monsters in Hell possess, and many other attributes and apply it to your Iron Golem. The author assumes that the reader knows at least how to apply the 'direct switch', text file editing, and adding new cube recipes.

The basic concept of this idea, is to make a cube recipe that will create a jewel with a '100% chance to cast lvl 30 lighning bolt when struck' attribute. After the jewel is created, we socket it on an armor/weapon.

Then, using the Necro's 'Summon Iron Golem' Skill, we create an Iron Golem out of that socketed armor/weapon. Everytime the Iron Golem gets struck, the mentioned attribute will kick in, and you have yourself a Lightning Enchanted Iron Golem.

Step 1: Make the cube Recipe

We must decide which ingredients to use on our recipe. For now, 1 Health Potion and 1 Mana potion will do. Type the following on their respective columns on the cubemain.txt listed below.

Column

A(description) = 1 Health Potion + 1 Mana Potion = Iron Golem Charm  
B(enabled) = 1  
D(version) = 100  
I(numinputs) = 2  
J(input1) = hpot  
K(input2) = mpot  
Q(output) = jewl,mag

U(mod 1) = gethit-skill  
W(mod 1 param) = 38  
X(mod 1 min) = 100  
Y(mod 1 max) = 30

Step 2: Apply the 'direct switch' and run the game

Step 3: Find an armor/weapon with at least one socket.

It will be quite tasking to find a decent item to put the jewel on. It's possible to make a recipe that will allow you to put sockets on an item, but that is no longer the scope of this document. Study the cubemain.txt of the d2plusplus mod available here at Phrozen keep, and you will get the idea how.(at least I did)

In the meantime, you could look for an item with sockets, or use the 'socket items' option after finishing a quest for Larzuk on act 5.

Step 4: Insert the jewel on the item.

That's it! As long as you can summon an Iron Golem, everything is okay.

Additional Notes:  
Now that you have grasped this concept, you can go wild with it. Use it, abuse it, do whatever you wish. Take a look at the skills.txt so you can replace the skill that will kick in if the Iron Golem gets struck.

Example: This will make an Iron Golem with a '100% chance to cast level 30 Poison Nova when struck'.

Column

U(mod 1) = gethit-skill  
W(mod 1 param) = 92  
X(mod 1 min) = 100  
Y(mod 1 max) = 30

This will make an Iron Golem with attributes: '50% chance to cast level 20 Meteor on attack', and '100% chance to cast level 30 Charged Bolt when struck'

U(mod 1) = att-skill  
W(mod 1 param) = 56  
X(mod 1 min) = 50  
Y(mod 1 max) = 20

Z(mod 2) = gethit-skill  
AB(mod 2 param)= 38  
AC(mod 2 min) = 100  
AD(mod 2 max) = 30

Note that not all skills will work. Most will, but not all. Remember that the Iron Golem possesses the attributes of the armor/weapon that it was made from. You can even put attributes like life leech, elemental, even magic damage.

Well, that's it. Happy Iron Golem modding!
