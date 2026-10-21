---
title: Spawnable Socketed Throwing Weapons (by reddot)
summary: This tutorial explains how to spawn socketed throwing weapons.
keepId: 32
author: Phrozen Heart
posted: '2004-08-19'
views: 9422
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=32'
---
Well, when I exploring this problem i found that this question  
is raised very often on Phrozen Keep. So, I think it'll be good  
idea to create this tutorial.

\=== Begin ===  
In this tutorial i'll describe how to make socketed throwable weapons,  
how to make them spawnable and discuss some problems raised with this  
change. Let's look on example of 'Balanced Axe'. However there three type  
of throwing weapons: Throwing weapons(knifes and axes), Javelins, Amazon  
Javelins.

Files to be edited:  
\- itemtypes.txt  
\- weapons.txt  
\- automagic.txt

At first, let's look in file ItemTypes.txt. I'll don't describe what this  
file does. I think you already know it.

Well. Find line 'Throwing Axe'. Then scroll to columns MaxSock1, MaxSock25  
and MaxSock40. Now set values in this column. I set 3, 4, 6. This will  
describe how many sockets can have item of this type with level(1-24,25-39,40+).

Save file and close.

At second, open file weapons.txt and find line 'Balanced Axe'. Size of this  
weapon is 2x3. So it can hold up to 6 sockets. We need to edit columns 'Hasinv',  
'GemSockets','GemApplyType'.

First column show can item hold gems and take it's properites. Set it to '1'.  
Next shows how many sockets can weapon hold. Set '6' for example. Remember  
that maxsockets cannot be more than 'invheight'x'invwidth'.  
Well and third column describe how gems will work in this item:  
by default  
0 for weapons  
1 for armors  
2 for shields.  
In my mod i use  
0 for weapons  
1 for helms, belts, gloves, boots  
and 2 for shields and torses.

So set it for '0' like all other weapons.

If we trying to launch game now, we can get sockets in Balanced Axe only  
using cube recipe.

There is easy way to make socketed Balanced Axe appear at vendors and spawn from monsters.

Open automagic.txt

Create 7 new lines in the end of file. Fill 'Name' with 'sock0'-'sock6'. Columns spawnable and  
rare set to '1'. Level and LvlReq also set to '1' so any Balanced Axe can have sockets.

Next need to edit column is Frequency. So i set sock0 to '12' and all other to '1'. It means  
that 2/3 of Balanced Axes will spawn without sockets and 1/3 will spawn with sockets.  
Any number of sockets have equal chance to appear.

In column group write any unique number for all 7 lines(for example '310'). And now set properites.  
Leave them blank for sock0. For next 6 lines  
write sock x x x, where x is number of sockets. F.e.:  
Name ... mod1code mod1param mod1min mod1max  
sock3 ... sock 3 3 3

Next scroll to columns itype. Set itype1 to 'weap' and itype2 to 'armo'.  
And now go to last three columns 'divide', 'multiply', 'add'. Set all to '0'.

Also you must set autoprefix column for 'Balanced Axe' in weapons.txt to number of group(310).

That's all. Now you can save you work and launch game.

Problems:  
Fisrt: Socketed throwing weapon don't show 'quantity: xxx' field. You can only know  
quantity wearing weapons and select 'Throw' skill.  
Second: Gemmed throwing weapons have large cost and repair cost.

So one of ways how to decide both this problems is increase stack size, descrease cost  
and make throwing weapons infinitive.  
Again open automagic.txt and for all lines  
add propery  
modxcode modxparam modxmin modxmax  
rep-quant 100 100  
This'll replenish one item in one second.

Second way  
In my mod I multiple stack sizes by 3 and divide cost by 3 for all throwing weapons.  
Also there are increased ammount of gold dropped in my mod. So there is no problem  
for repairing throing weapon.
