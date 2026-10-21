---
title: Spawning A Random Item From A Recipe (by Acromantic Aria)
summary: >-
  This tutorial will tell you how to create a series of two-item recipes that
  spawn different results with the same inputs.
keepId: 262
author: Phrozen Heart
posted: '2007-05-04'
modified: '2020-07-23'
views: 25098
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=262'
---
Special thanks to: Joel for his post on op codes in cubemain.txt

This tutorial will tell you how to create a series of two-item recipes  
that spawn different results with the same inputs. Specifically, I’m  
going to describe how to use the same two items in a recipe to spawn  
one of four possible items:

\-a minor healing potion

\-a magic amulet

\-a rare amulet

\-an El rune.

This is the method I used to create the Mystery Chests from the  
Nezeramontias mod. We will need to create at least one new item for  
this tutorial.

Files you’ll need to edit:

Itemtypes.txt

Misc.txt

ItemStatCost.txt

Properties.txt

MagicSuffix.txt (or MagicPrefix.txt)

Cubemain.txt

Other things you’ll need to know:  
How to add strings to the game (for new items), and how to import  
images (in case you want your new mystery spawner to have its own  
inventory pic).

First open ItemTypes.txt. We need to create a new entry for our  
“Mystery Chest”. Go to the bottom of the file and add a name in the  
ItemType field (like Mystery Chest). In the code column, enter a unique  
four letter code not used anywhere else (I used msct).  
Leave Equiv1 and Equiv2 BodyLoc1, BodyLoc2, Shoots, and Quiver blank.  
For all the numbered columns, set Magic to 1, Rare to 1 and Rarity to  
3\. Set all other numbered fields to 0. We’re done with this file, but  
remember your ItemType for later.

Open misc.txt.  
We need to create a new entry here. Copy the amulet row in misc.txt  
(row 14), and paste it at the bottom of the file. Make the following  
changes:

\-Change the entry under the code column to something unique. In my mod, I used m001.

\-Go to the type1 column and change the name from amul to the Item Type you made earlier (I made msct, so I’ll enter that here).

Additional changes you may want:  
\-If you want these to be sold in shops, you’ll need to reference  
them for some shop keeper. Let’s do an example. Go to the GheedMin and  
GheedMax columns and enter a number for each column (the first entry  
should be

\-Right now the game will call our new item “amulet.” You might want to  
change the namestr column to some unique entry (you’ll need to add a  
string to the game that uses your new code).  
\-The game will also currently use the inventory file of an amulet. This  
is controlled by the invfile column. If you know something about  
importing new images, you can change your new amulet to something  
different.  
\-If you change the inventory graphic, you might also want to  
change the entries under dropsound, and usesound so your item doen’t  
sound like an amulet when you moke it around in your inventory.  
\-If you want to sell this item, then later you should edit the  
cost entry. How much you change it should depend on what possible  
outputs the recipes we’ll make later can produce.

With our new item created, open ItemStatCost.txt. Go to the end of the file and add a new entry. Make these additions:

Enter item\_mystery\_chest  
under the Stat column. In the ID column, enter the number that comes  
after the one from the row above. Enter 0 in the add and multiply  
columns. Enter 1024 in the Divide column. Now enter a number under the  
Send Bits and Save Bits columns. What you enter in these fields will  
determine how many bits are used to represent this new stat. A 1 would  
mean the stat could spawn with one value (a 1). A 2 would allow three  
different values (1, 2, 3). 3 bits would allow the stat to spawn with  
the values 1 through 7. What you choose here is important, because  
we’re going to need a unique value for each recipe we create. If our  
recipes can only have 4 possible outputs then 3 bits would be  
sufficient, but we wouldn’t have much room to add recipes later. So  
choose something a bit larger (I used 10 which allows the values 1-1023  
but you may want to use something even higher if you really want to  
create a large number of these recipes). Whatever you choose, enter  
that number in both Send Bits and Save bits. Enter 0 in Save Add. You  
can put values in 1.09 Save Bits and 1.09 Save Add if you like, but it  
shouldn’t matter. Leave all other fields blamk.

> **Note:** Normally, we want our entry for Send Bits to be a little

higher than the one in Save Bits. However, in this case, our new stat  
only spawns on a single item, so it’s ok to make both entries the same.

Open Properties.txt. Go to the end of the file and add a new name under the code field. I used mystery-chest. Enter the following entries for the rest of this row:

\-Enter 1 in the \*done entry.

\-Enter 1 in the func1 entry.

\-Enter item\_mystery\_chest in stat1.

\-Enter 0 for the \*eol entry.

Open MagicSuffix.txt. Go to the end of the file. We’re going to add  
4 new entries. Before you do this, you’ll need to add a new string to  
string.tbl for the new Magic Prefix we’re creating. When you create a  
new reference string, make sure that the string that display’s in the  
game will be empty. For example, if you add your new prefix using  
Enquettar, your new entry could be:

a 'of Mystery Chests' ' '

After creating your new prefix, enter the Name in the Name field (of Mystery Chests if you followed my example). Enter the following entries:

\-Set version to 100.

\-Set spawnable, level, and and levelreq to 1.

\-Set frequency to 10.

\-Set group to some number not used anywhere else in the file (or in Magic Prefix).

\-Enter mystery-chest in the mod1code field.

\-Set mod1min and mod1max to 1.

\-Enter the name you created in Item Types.txt earlier in the itype1 field (msct if following my example) .

\-Set divide, multiply and add to 0.

Now copy this row and paste it to the next three rows in your file. Make the following changes to each row.  
\-Set frequency to 3 in the second row, 1 in the third and 3 in the  
forth (I’ll talk about this more after we make the recipes).  
\-Set the mod1min and mod1max entries to 2 in the second row, 3 in the third, and 4 in the forth.

Finally, open cubemain.txt. Go to the end of the file. Enter a new name  
under description (like Mystery chest Unlock). Make the following  
entries:

\-Enter 1 in the enabled field.

\-Enter 100 for version.

\-Enter 2 for numinputs.  
\-Enter the code you created in misc.txt for your mystery chest in  
input 1 (m001 if following my example). Alternatively, you could put  
the Item Type code here (msct).  
\-Enter the code for the second item in the recipe in input 2.  
Since we haven’t talked about making a second item much, let’s just use  
an identify scroll for now. So enter its code (isc).

\-Enter hp1 (code for a minor healing potion) in output 1.

\-Enter 0 in \*eol.

Now go back to the op field.

\-enter 18 in the op entry.

\-for the param field, enter the ID number of the item\_mystery\_chest stat you created in ItemStatCost.txt.

\-Enter 1 in value.

Here is a post by Joel describing what these entries we just made in cubemain.txt mean:

[viewtopic.php?t=16632](https://d2mods.info/forum/viewtopic.php?t=16632)

In our case, this recipe will only work if the value of item\_mystery\_chest  
in the first input (our new mystery chest item) is 1. We never entered  
anything under the description fields in ItemStatCost.txt, so that stat  
is invisible on the chest.

Now copy our recipe and paste it to the next three rows. Make the following changes:

\-Under the value field, enter 2 for the second recipe, 3 for the third, and 4 for the forth.

\-In the output field, enter amu,mag for the second recipe, amu,rar for the third, and r01 for the forth.

\-For the second and third recipes, enter 100 for the ilvl field.

Now our mystery chest will spawn a minor healing potion if its item\_mystery\_chest stat is 1, a magic amulet if it’s 2, a rare amulet if it’s 3, and an El rune if it’s 4.

We can control how likely a certain item will spawn using the  
frequency field in MagicSuffix.txt. Notice we set these to 10 for the  
first entry (our healing potion), 3 for the second and forth (a magic  
amulet and an El rune), and 1 for the third (our Rare amulet). The  
higher the value you put in frequency, the more likely that stat will  
spawn on the mystery chest, and the more likely the item that results  
from that stat will spawn from the recipe.

Known issues: Using the described method, you should be able to get  
any of the Act 1 merchants to sell your new mystery item. However,  
Diablo 2 is not very friendly about spawning new items in shops later  
in the game, so you likely won’t see your new item spawn in shops in  
later Acts or difficulties. If you know how to edit treasure drops in  
TreasureClassEx.txt, you may want to have these items drop from  
monsters.
