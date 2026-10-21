---
title: Runes.txt
summary: This guide contains all the information you need concerning Runes.txt
keepId: 388
author: Nefarius
credit: 'by Nefarius, restyled by Nizari'
posted: '2006-06-07'
modified: '2018-10-24'
views: 20724
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=388'
---
This guide contains all the information you need concerning Runes.txt

\- Related text files: Runes.txt

\- Is used together with/is related to/reads from:  
[Armor.txt](/kb/file-guides/armor-txt)  
[Gems.txt](/kb/file-guides/gems-txt)  
[ItemStatCost.txt](/kb/file-guides/itemstatcost-txt) (not directly, but this is highly related to Properties.txt)  
[ItemTypes.txt](/kb/file-guides/itemtypes-txt)  
[Misc.txt](/kb/file-guides/misc-txt)  
[Properties.txt](/kb/file-guides/properties-txt-file-guide)  
[Skills.txt](/kb/file-guides/skills-txt)  
[States.txt](/kb/file-guides/states-txt)  
[Weapons.txt](/kb/file-guides/weapons-txt-file-guide)

**Name:** this column controls the string key that will be looked up inside the TBLs to display the name of this item in-game.

**Rune Name:** the name of the runeword, it serves reference purpose only as the string key is determined by the previous column. You can use it as note field.

**Complete:** Boolean, 1 = can be made in-gamemarks, 0 = cannot be made in-game. Marks this runeword as completed and useable in game if set to 1.

**Server:** Boolean, 1 = runeword available only on the realms (ladder), 0 = runeword available both in single player/open games, TCP/IP and on the realms.

**IType1 to IType6:** these are ID pointers from ItemTypes.txt and control in what item type this runeword can be made.

**EType1 to EType3:** these are ID pointers from ItemTypes.txt and control in what item type this runeword cannot be made, even when this item type is a subtype of an item type specified within IType1 to IType6.

**\*runes:** the names of the runes used in the runeword, as they would appear in the item display. Comment field only, you can use it to memorize runes requires for your runewords easily.

**Rune1 to Rune6:** these are ID pointers from Misc.txt. The fields control what runes are required to make the rune word and in what order they are to be socketed.

**T1Code1 to T1Code7:** an ID pointer of a property from Properties.txt, these columns control each of the 7 modifiers that a runeword can have at most.

**T1Param1 to T1Param7:** the parameter passed on to the associated property, this is used to pass skill IDs, state IDs, monster IDs, montype IDs and the like on to the properties that require them. These fields support calculations.

**T1Min1 to T1Min6:** minimum value to assign to the associated property. Certain properties have special interpretations based on stat encoding, IE chance-to-cast and charged skills. See the File Guide for Properties.txt and ItemStatCost.txt for further details.

**T1Max1 to T1Max6:** maximum value to assign to the associated property. Check the description below for additional info.

**eol:** End of Line, used to avoid the trailing bit error M$ Excel usually causes when adjusting the end of the rows. This column must contain 0 unless you want to crash when the game loads.
