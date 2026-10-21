---
title: Making characters start with an unique item
summary: >-
  Level: Beginner Files needed: PatchString.tbl, Weapons.txt, UniqueItems.txt,
  CharStats.txt
keepId: 377
author: Nefarius
credit: by Nefarius
posted: '2006-01-28'
views: 15166
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=377'
---
Making a character start with a unique item  
by Nefarius

Level: Beginner  
Files needed: PatchString.tbl, Weapons.txt, UniqueItems.txt, CharStats.txt

What is this?  
This tutorial will guide you thru the steps needed to make the Amazon start with a unique javelin. Because this guide is aimed at beginners, I will provide details about all the columns changed in the process. Note, that unlike 1.00-1.09, you can no longer give items spawned during char creation stats, unless these stats are skill boni to certain skills provided in charstats.txt (![icon\_cry.gif](/kb/img/d2mods.info/forum/images/smiles/icon_cry.gif)).

**Step 1**  
Open up weapons.txt in your spreadsheet editor, and scroll down to the Javelin row (or use Find, Ctrl+F in most apps), once you find the row, copy it, and paste it below the last line in the file (\*).

First of, change spawnable to 0 (=this column tells the game whenever this item can drop from auto tcs, it also controls whenever NPCs can sell this item, 1=true, 0=false). Setting this to 0, will save you work, since you won't need to worry about the item being sold anywhere or dropped by monsters.

Change the code (=id code of the item, that links non-saved settings to this line and is used in many txt files) column to ujav, change the normcode (=code of the normal version) column to ujav as well, then, blank out (i.e. delete the contents) of the ubercode (=code of the exceptional version) and ultracode (=code of the elite version) columns. Leaving them blank tells the game that there is no exceptional or elite version.

Next, change the contents of the unique column to 1 (=this column is a boolean, 1=this item always spawns as unique, 0=this is a normal item).

Finally, set skipname to 1 (=this column will make the game display only the name of the unique item, and won't shot the name of the base item below it).

\* This is not necessary in armor,misc and weapons.txt - but you should do it anyway to get used to it, most other files will crash or cause glitches (such as item morphing, should you add them between existing lines, this is so because the game uses line number to reference many things, including client side settings of magic modifiers and tons of hardcoded setup).

**Step 2**  
Next, load up uniqueitems.txt in your spreadsheet editor, go to the bottom of the file, and follow these instructions.

Change the index column to a new name, something like unique\_javelin will do (=this controls the string that will be used for your new item, it is also used to link the unique item in question to this line, if you would want to excess it from other files)

Set version to 100 (=controls what version the item is available in, 0 = prior to 1.07, 1 = post 1.07 available for both NoX and LoD, 100 = post 1.07, available for LoD only), set enabled to 1 (=this controls whenever the unique item exists in-game), set rarity to 1 (=this defines how rare your item will be should more then one unique item exist for this base item, so if you had 2 different unique ujav items, you could define how common/rare each is in this column, the higher the value, the higher the chance it will be selected). Set nolimit to 1 (=this controls whenever more then one of this item can be spawned within the same game, must be 1, to avoid conflicts with multiplayer - if more then one player creates a character of this class ![icon\_exclaim.gif](/kb/img/d2mods.info/forum/images/smiles/icon_exclaim.gif)), set the code column to ujav (this will tell the game this unique record is linked to that base item).

Finally, scroll to the last column \*eol and enter something in here (it doesn't have to be 0). Always do this, to avoid unexpected game crashes.

**Step 3**  
First fire up your spreadsheet and open CharStats.txt, select the Amazon row, and go to the Item1 column.  
In here, replace jav with ujav (=this tells the game to give the new Amazon a copy of your new item instead of a normal javelin).

Finally, since we have no way to give our new javelin stats in 1.10+, go to the startskill column, and enter Jab, this will make the javelin spawn with +1 to Jab.

**Step 4**  
Finally, open PatchString.tbl in a TBL editor (I recommend AFJs TBL Edit). If you use that, hit the big \[+\] button, enter unique\_javelin in here, and click OK.

In the right part of the screen, enter the name you'd like the javelin to have in-game.

Now, save all your changes, and run the game in the preferred mode (see other guides), make a new Amazon, and behold your changes.
