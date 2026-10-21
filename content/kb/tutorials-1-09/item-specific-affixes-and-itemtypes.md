---
title: Item Specific Affixes and Itemtypes
summary: Creating a Special Affix that can only spawn on a Single Item
keepId: 199
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 7256
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=199'
---
**Creating a Special Affix that can only spawn on a Single Item**

What you will need:  
Automagic.txt  
Armor.txt

First off you should read the Newbie's Guide to Mod Making to understand how to extract files from the MPQs.  
Also you should have read the -direct -txt guide to understand how to use -direct -txt as this method is by far faster to work with.

Ok then, You will start by extracting AUTOMAGIC.TXT from D2EXP.MPQ.  
After you did this open AUTOMAGIC.TXT in a spreadsheet program like excel.

Add a new row to the file (at the end of the file would be the best to prevent level requirement and colorshift glitches)

Enter a name in the first column, for this example we will call it RUNSPEED\_001, enter 100 in the version column to make this affix available only in expansion games.

next enter 1 in spawnable in order to allow the game to use this affix (0 would disable it and will not allow you to use it in the game)

```
set rare to 1 in order to allow this affix to spawn on rare items.
set level to lets say 15 (the level at which this affix can begin to appear)
set levelreq to 5 (this is the level your character will have to reach in order to equip a item that spawns with this affix (as long as the items level req is lower then this)
```

(HINT: if you want to limit a affix to not spawn after a specific level use the MaxLevel column)

Set Frequency to 1 (since this will be the only affix in this group there is no reason to set a frequency level)

Set the Group column to 308 and write that value down somewhere so you dont forget it, we will need it later.

In Mod1Code enter 'move1' (without the quotes) this is the modifier code for Fast Run/Walk (\*if you want to use another modifier then look atthe Magical Modifier master list on the keep)

change Mod1Min to 25  
change Mod1Max to 50

(This will give the item a range of 25-50% increased run/walk speed)

Scroll over to itype1 and enter 'weap'  
Scroll over to itype2 and enter 'armo'

Change Multiply to 0 (this will multiply the base price of the item by the given #)  
Change Add to 0 (this will add this number to the base price of the item)

Save the File.

Now open up Armor.txt in your spreadsheet.  
We will now make the game spawn lvl15+ leather boots with our new affix.

Go down to the leather boots row and scroll over to the 'auto prefix' column now remember I told you to write down the group # before?  
Enter 308 into the auto prefix cell.

Save the file.

your first item specific affix has been added right now

Put the files in the correct locations (Note, you should read those guides I have suggested you read before.)

---

**Create a New ItemType and make some affixes only spawn on it (but not always)**

\*To come soon, as I have to do something right now

Ok then, this second part will explain how to create a new itemtype and make a affix only spawn on this new itemtype. (randomly spawn, and not always applied)

What you will require:  
Magicprefix.txt  
Itemtypes.txt  
Armor.txt  
String.tbl

First a small warning, If you delete a itemtype, and your character wears an item of that type you will corrupt you character file (you will get an invalid inventory data error message) so avoid doing this!

Now we will open itemtypes.txt in your spreadsheet

Go down to row #5 'Armor' and copy it to the end of the file.  
Name the name entry on the new row something like 'SPECIAL\_ARMOR' w/o the quotes, Change the entry in the code column to SPCA (we will use this code as an example!)

write down SPCA somewhere it will be very important later on, remember this deals with codes, uppercase letters are different from lowercase letters in terms of code so if you type SPCA then you cannot use SpCA in another file as that would be another code.

There isnt alot to do about this now, as we did not do a major itemtypes modification. so you can go on and save the file.

Now open armor.txt

Go down to the Ancient Armor row and copy it to the end of the file again  
Since we will deal with how to make our new affix appear and not with armor stats we do not have to change alot, Change the name to a name you want for the new armor, NOTE this is not the name that will be used in the game, its just for you own reference, for the matter of fact you can also leave it blank.

Now we will move over to the code column, change its entry from aar to N2X and write down this code (remember the same rules apply to this code as they did to itemtypes code)

change NormCode UberCode and UltraCode all to n2x or leave them blank. (this controls what items the game will chose from when gambeling and it rolls out the exceptional/elite form of this item, also works with the upg code for cubemain.txt, there is not other way the game can get this info from since the rows and their #s are not static and can be changed around as you wish) this is also the way the npcs sometimes spawn items in their exceptional and uber form just not always (unlike using the upgrade columns)

now go to the invgfx column and enter invaaru, to make the new armor always look like silks of the victor, now after all this is done go over to the type column and change it to 'SPCA' (no quotes!) save the file.

now open magicprefix.txt, we will follow the same method we used in automagic.txt as the files are nearly identical.

Add a new row to the end of the file and change the name column to NEW\_AFFIX\_000 remember this and write it down.

Set Version to 100  
Set spawnable and rare to 1  
Set level to 15 again for this example  
Set levelreq to 5 again for this example  
Set frequency to 10, to give this affix a priority above others

Now for group we will check what the last group in the file is, our group must always be larger then an existing group else it will be included in that group!

so if the last group is 120 then your group is 121

Go to mod1code and change the entry to life, change mod1min and mod1max both to 125,

Now go to mod2code and change the entry to mana, change mod2min and mod2max both to 125.

change transfrom to 1, this means the item will get a special color tint when spawning with this affix.

scroll over to the transformcolor column and enter cgrn (crystal green).

Now change itype1 to SPCA and leave all the others blank

set multiply and add both to 0 and save the file.

Now make sure to download darkstorms tbl editor from the keep.  
This is by far the most user friendly tbl editor until now, it dosent require you to install additional software etc, it will run on nearly every machine.

Open string.tbl in the tbleditor and and click the + button  
In this new field that appears type N2X then press enter, in the right side of the screen there is now a large blank field type Enhanced Ancient Armor (or what ever you want!).

Now click the + button again and type NEW\_AFFIX\_000, again press enter and type something like 'of life and mana' in the right part of the screen. save the file and move all of the files to the correct location.

Enter the game and look for your new armor (should be sold in act5 at larzuk)

And of course enjoy your first item mod

---

## Addendum

Thanks to Hammerman for this formula  
\*This is the formula the game uses for the level at which a item can spawn with a specific affix.

If (ilvl>99) then {ilvl=99}  
if (qlvl>ilvl) then {ilvl=qlvl}  
if (magic\_lvl>0) then {alvl=ilvl+magic\_lvl}  
else  
{  
if (ilvl<(99-qlvl/2))  
then {alvl=ilvl-qlvl/2}  
else {alvl=2\*ilvl-99}  
}  
If (alvl>99) then {alvl=99}
