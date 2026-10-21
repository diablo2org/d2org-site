---
title: stat bonus based on character attributes
summary: crushing blow based on dexterity
keepId: 464
author: kidpaddle94
posted: '2010-12-08'
modified: '2018-01-06'
views: 8522
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=464'
---
ok, as most of you probably know, all characters gain some stats bonus from certain attributes.  
here are some examples:

vitality: grants more life  
energy: grants more mana  
dexterity: grants more block chance, attack rating, defense, etc...  
strength: grants more damage

This is possible to reproduce this kind of bonus, all softcoded.  
Here I will explain how to make the amazon gains crushing blow, from dexterity.

first, open **skills.txt** and go to **Avoid** line (amazon skill).  
copy **Avoid** line and paste it at the bottom.  
make these changes:  
**skill:** Innate Passive  
**Id:** _next in your skills.txt_  
**charclass:** _blank, don't assign any class here._  
**skilldesc:** _none, not needed at all._  
**passivestate:** innatepassive  
**passivestat1:** item\_crushingblow  
**passivecalc1:** **stat('dexterity'.accr)/50** (see more details at end)  
**reqlevel:** 1  
**maxlvl:** 99  
**reqskill1:** _blank_  
**Param1:** 0  
**Param2:** 0

now, open **states.txt** and copy **firemastery** line.  
paste **firemastery** line at the bottom, and rename it to **innatepassive**.  
change the Id to the next in your **states.txt**

Now open **charstats.txt**, at **amazon** line.  
go to the first blank skill column. (should be **skill 8** column.)  
enter Innate Passive in there.

now let's get back on the calc we entered in **skills.txt**  
the calc will grants 1% crushing blow per 50 points in dexterity (counting dexterity from items)  
here are some other possibilities:  
**stat('dexterity'.base)/50** (1% per 50 base points in dexterity (no bonus from items))  
**min((stat('dexterity'.accr)/50),50)** (1% crushing blow per 50 points in dexterity, with a cap of 50%)  
**stat('dexterity'.accr)/ulvl** (1% per points in dexterity, divided by the character level)

Don't forget that when you create a new character, this passive won't be directly applied.  
you have to save and exit and come back, but since we use a calc based on some stats, it's not that important. and for already created characters, it will automatically be applied.

**whist**
