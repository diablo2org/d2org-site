---
title: Class Exclusive / Staffmod / Automagic Items
summary: >-
  First open up itemtypes.txt. For these items we will base their type off of
  the Belts. Copy that line. It's under 'Not Used.' (along with gems, confirming
  that that title is stupid)
keepId: 193
author: Phrozen Heart
credit: by 54x
posted: '2003-12-02'
modified: '2018-01-06'
views: 7186
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=193'
---
Barbarian Belts:

First open up itemtypes.txt. For these items we will  
base their type off of the Belts. Copy that line. It's  
under 'Not Used.' (along with gems, confirming that  
that title is stupid)

First type in Barb Belt in the leftmost column. And  
right of that, type in bblt. This is the type you will  
have to put in in armor.txt.

Right next to where it says armo, (you should still be  
on the same screen) to the right, type in 'barb.' I  
haven't tested this individually but it should help  
make sure the item is exclusive.

Skip all the way to column AB. Set this column  
(rarity) to 1. And next to it, on the right, type  
'bar.' This makes the belt give barbarian skills.

After that you need to type bar in column AE as well.  
This is another step to making the item exclusive.

We now have the itemtype done. If you don't want it to  
inherit any mods, you can save itemtypes.txt and make  
your item in weapons.txt. No problem.

But, if you'd like to see your belts giving  
mana-per-kill, or life-after-demonkill, read on

OK, open up automagic.txt and copy the first five  
sorceress life mods onto the end of the file. Rename  
the first column to BB1-BB5 (just because typing  
Triumphant isn't my style )

Then change the group number to 306. This is the  
single most important step. You must have a unique  
group ID for these affixes, and I think it isn't  
allowed to clash with magicprefix.txt or  
magicsuffix.txt. (hence why they are above 300)

Then to the right of the group column, type in the  
modifier you want. In the case of my example, this is  
'mana-kill'. (for +mana after each kill) I gave the  
values 1-2, 2-3, 3-4, 4-5, and 5-6 respectively for  
each affix. Note that higher level items will pick the  
later affixes, and thus you need to balance them all.  
We've got the levels more or less right because we  
copied them from the sorcies' orb.

After that I also included some 'att', which is +to  
attack rating. Then I copied these five affixes, and  
made new ones called 'BBA-BBE', which were almost  
identical, except they had 'demon-heal' instead of  
'mana-kill', so they would heal you after each demon  
kill. Now you save this file, and add your belts in  
armor.txt with the type bblt, and '306' under the  
autoprefix column. Note that these mods WILL NOT  
prevent a prefix from generating, it is just like  
+150% damage to undead on wands, staves, and maces.

Enjoy your newfound power over items.
