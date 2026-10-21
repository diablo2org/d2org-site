---
title: (TUTORIAL LOD 110) How to make a Magic Find display counter
summary: >-
  This tutorial will show the new modder how to create a basic stat display that
  the player can carry in their inventory which can be also be added to by
  various spawned items which will increase the property each time.
keepId: 304
author: I_only_pressed_Esc
posted: '2004-09-09'
modified: '2018-01-06'
views: 39230
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=304'
---
This tutorial will use items available in the game already and will not alter graphics. It is up to the modder to alter the graphics if needed or to add new item types for using to add to the item.  
This tutorial will show how to make an item with charm abilities which can be added to and displays the total of Magic Find bonus available on your armour, weapons etc.

The tutorial is for LOD 1.10 but just change Version = 100 to 0 for Diablo2.

Based upon a posting by SVR (many thanks to Svr for explaining Op/Op param/OP base and pointing out problems)

Knowledge required:  
Text/tbl editing + use of the -direct -txt switch

Files needed:  
Cubemain.txt  
Itemstatcost.txt  
Itemtypes.txt  
Misc.txt  
Properties.txt  
UniqueItems.txt  
Patchstring.tbl

Tools needed:  
Spreadsheet editor (available in the file section of the Keep)  
Table editor (available in the file section of the Keep)

1\. The Item (part 1).  
First, you need to make the item that will carry the properties.

Open Uniqueitems.txt

Enter the following in the collumns mentioned:  
Index = Magic Herb  
Version = 100  
Enabled = 1  
Rarity = 999  
Lvl = 0  
Lvl req = 0  
Code = hrb  
Type = charm  
Carry = 1  
Cost mult = 1  
Cost add = 1  
Flippyfile = flphrb  
Invfile = invhrb  
Dropsound = item\_gem  
Dropsfxframe = 12  
Usesound = item\_gem  
Prop1 = magbondisp  
Par1 = 100  
Eol = 0

Save Uniqueitems.txt as we have now made an item for carrying in the inventory which has the new property/stat on it which we will create further down in this tutorial.

2\. The item (part 2)  
Open Itemtypes.txt and look for the row with Herb in it.

Enter the following into the collumns:  
Equiv1 = misc  
Equiv2 = char  
Normal = 0  
Charm = 1  
Rarity = 1

Save Itemtypes.txt as we have now made the herb have the ability of a charm.

3\. The item (part 3)  
Open Misc.txt and look for the row with Herb in it.

Enter the following into the collumns:  
Version = 100  
Level = 0  
Levelreq = 0  
Rarity = 1  
Spawnable = 1  
Usable = 0  
Unique = 1  
Belt = 0

Now remove the values in the following collumns:  
pSpell  
State  
cState1  
cState2  
len  
Stat1  
Calc1  
Stat2  
Calc2

Save Misc.txt as we have now removed the right click and storing in the belt abilities.

4\. The Stats (part 1)  
We will now make a stat which will display the total of Magic Find bonus on all your items.  
Open up Itemstatcost.txt  
Add a new row at the bottom.  
Enter the following into the collumns:

Stat = disp\_magbonus  
ID = XXX (XXX is the next available number)  
Divide = 1024  
Save Bits = 1  
Op = 2  
Op param = 0  
Op base = item\_magicbonus  
Op stat1 = dummy2  
Descpriority = 180  
Descfunc = 2  
Descval = 1  
Descstrpos = MagbonStr  
Descstrneg = MagbonStr  
Eol = 0

Now add a new row and enter the following in the collumns:  
Stat = dummy2  
ID = XXX (XXX = next available number)  
Eol = 0

Save Itemstatcost.txt as we have made the entry which will be used by the new entry we will be making in Properties.txt

5\. The stat (part 2)

Open up Properties.txt  
Add a new row at the bottom.  
Enter the following into the collumns:

Code magbondisplay  
Done 1  
Func1 17  
Stat1 disp\_magbonus  
Eol = 0

Save Properties.txt as we have now made the property which will be used by Cubemain.txt

6\. Creating the Item

Open Cubemain.txt

Add a new row at the bottom  
Enter the following in the collumns:

Description = Magic Herb  
Enabled = 1  
Version = 100  
Numinputs = 2  
Input1 = hpot  
Input2 = isc  
Output = Magic Herb  
Eol = 0

Save Cubemain.txt as we have now made a recipe to make the Magic Herb using a health potion + identify scroll.

7\. Adding text viewable on the item

Open up Patchstring.tbl with your selected table editor.

Add the following entries to the table:

STRING TEXT

Magic Herb - Magic Herb (or any name you want)  
hrb - Herb of Magic Find (or any name you want)  
MagbonStr - Magic Find Total Bonus

8\. Adding skills etc to the item

Open up Cubemain.txt  
Add a new row at the bottom  
This will show the basics of having incremental additions to the item.

Enter the following into the collumns:  
Description = Adds damage points  
Enabled = 1  
Version = 100  
Numinputs = 2  
Input1 = Magic Herb  
Input2 = hpot  
Output = useitem  
Mod 1 = dmg%  
Mod 1 min = 1  
Mod 1 max = 1  
Eol = 0

Save Cubemain.txt as you have now made a recipe that when you place the Magic Herb into the cube along with a health potion, it will increase your damage by 1 %.

If you make more than one new stat, you can make a universal entry in properties.txt and can enter up to 7 stats, thus using one entry in Cubemain.txt. This gives the possibility of 35 stats for one recipe. If using a skill to fire your stat, you will need an entry in the recipe for this which will reduce the number.

I have made an item based on this which is used for adding skills to as I have removed the skill points in my mod, so that you have to basically kill and search everything for a chance to get new skills. I can say that with the whole 31 skills on an item (test purposes) it doesn't look good in my opinion.
