---
title: Creating New Uniques (by Doombreed-x)
summary: See tutorial for details.
keepId: 311
author: onyx
posted: '2007-05-04'
modified: '2018-01-06'
views: 20066
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=311'
---
Creating a new unique items in 1.10+.

This is a fairly easy task, and only small problems arise from overlooking things. It's also a fairly common request by new people to be told how it's done because the beginners guide doesn't explicitly say how to, so here you go! I'll also explain a few etiquette things you should know when handling files, for the sake of avoiding corruption and crashes. You'll need to have read the beginners guide to know some things that are not explained here.

\*\*Setup\*\*

Tools needed:  
\- UniqueItems.txt (extracted from patch\_d2.mpq)  
\- patchstring.tbl or expansionstring.tbl (from patch\_d2.mpq or d2exp.mpq)  
\- editting programs for files and strings (ms excel is fine for files, though I recommend  
afj sheet edit, and I recommend afk string edit for strings)  
\- weapons.txt, armor.txt or misc.txt

Before you start, you should have read the newbie guide, so that you understand how to set up your directories and how to get the files. The unique file is available in patch\_d2.mpq, and any tools you don't have should be available from the keeps tools section. I recommend using expansionstring.tbl for your strings rather than patchstring.tbl incase you ever wish to patch the game to a different version.

Start by opening up UniqueItems.txt. With ms excel, there are some options when you open the file, just make sure that you keep it delimited, that tabs are the only delimiters and that all of the cells are set as text cells (so that ms excel doesn't eat cells that look sorta like equations.) Never open up a d2 txt file in notepad, wordpad or any other text document program, that will corrupt the file. Scroll down to the bottom of the file. Any unique items you want to add should always be added to the bottom of the file. This isn't a necessary thing for this file, but it allows you to know where all your new stuff is. Other files will have lines that must stay where they are, so be sure to read file guides before you play with new ones.

\*\*Walkthrough\*\*

This will be a simple column by column exercise so you can see how easy it really is. I'm going to make a new item called cattle prod. Follow along in your uniqueitems.txt, and let's begin!

(Column A) index: Put the name of your new item. It isn't particularly important that you have the name finalized for this column, this is just a pointer to the string table. Make sure that it is a unique value. That is, it isn't a duplicate of any other index entry. For this example, I'll call the item Cattle Prod.

(Column B) version: Either 0 or 100. This column will reflect what version of the game the item is available in. 0 is for d2 classic and 100 will have it available only in expansion. The item will be available in the expansion regardless of which you choose, but if you choose 100 then it won't be found in classic at all. If you have the expansion, then it's irrelevant which you choose, but use 100 for the sake of it.

(Column C) enabled: This holds a boolean. That is, either a 0 or 1 for off or on. 0 = off, 1 = on. This tells the game whether or not to use this item, so put a 1, because you obviously want to find and use this new thing in the game.

(Column D) ladder: this would make the item ladder only (though ladder only items are still available on single player,) so just leave it blank. It isn't needed in a mod.

(Column E) rarity: This one is found in a number of files and can be complicated, but for this file it basically works like this - when the game chooses to drop a unique item, say boots, if there is more than 1 unique boots then it will randomly choose which one is dropped. If the first unique boots has rarity 2, and the second rarity 3, then there are 3 to 2 odds in favour of the second pair being chosen. Granted, there are other modifiers such as level, whether a unique boots has already dropped, etc. but that's the basics. This doesn't matter much for items that don't have a unique version yet, but does matter when other unique versions do exist. We'll use 1 for this either way, but keep this in mind when making future items.

(Column F) nolimit: In general, you can only find a unique item once per game. Finding a second copy of that unique instead results in a rare being dropped. However, if we put a 1 in this column, then our item will be allowed to drop any number of times in a game. That isn't really necessary here, so I'll just leave it blank like every other item.

(Column G) lvl: This is a hidden requirement. When the game chooses to drop a unique item, it checks the lvl of the item against the monster's level (the level of the monster dropping it or, if it comes from a chest, the level of the area.) If the monster level is lower than the unique's lvl, then the game drops a rare instead. This can be used to force an item to only be droppable by higher end monsters, regardless of it's level requirement. Since I'm making a rather weak item, I'll use 7 here. You could use any number, even ones above 100, though that would make the item undroppable.

(Column H) lvl req: Now we choose the level requirement for the item. You can choose any number, but there are some restrictions. Item properties also have level requirements, and if your item has a lower level requirement than that property, it will automatically be raised to the properties value. I'm going to use 6 for this example.

(Column I) code: This is the code for our item, it will define what item it actually is. The codes for items are found in armor.txt, weapons.txt and misc.txt for different item types. I want the cattle prod to be a stick, but I'm choosing dagger for the base item. You'll see why later. The code for dagger is in weapons.txt, it's dgr.

(Column J) \*type: All columns that have a \* before the name are comments, which means the game will ignore them when it reads the files. This column is used to remind you what item the code you put in is. So for this example, Dagger, though we could type anything we want since it's just a comment.

(Column K) \*uber: Again, a comment. Just leave this one blank, it isn't useful.

(Column L) carry1: This column is a boolean that tells the game whether or not you can carry more than 1. You can see it's effect with Gheeds Fortune and Annihilus. If you put a 1 in, you can only ever have 1 on your character at a time. Even if you find a second of the unique, you won't be able to pick it up. This only really matters with things you might be able to use multiples of, like charms, so we'll leave it blank.

(Columns M and N) cost mult and cost add: These put together with some other factors come up with how much gold the item will buy and sell for. All other uniques use 5 and 5000 in these fields to slightly increase their value, and there isn't much point in using any other values unless you want a bad unique to make you lots of cash. We'll use 5 and 5000 as well.

(Columns O and P) chrtransform and invtransform: These guys change the colour of the item, chrtransform when equipped or on the ground and invtransform when you look at the item in your inventory/stash. We don't really need a colour, but if you wanted one you could just scroll up and look at the codes used for other items and copy those. We'll leave them blank.

(Columns Q and R) flippyfile and invfile: These guys change what the item actually looks like. flippy file is for the weapon outside the inventory, and invfile for inside the inventory. The codes for these can be found in weapons/armor/misc.txt files. Ours are flpwnd and invwnd. Using these columns, you could make a short sword look like a colossus blade, but it would still only take the 1x3 space. Keep in mind, the base item is what the item will actually be, these only mask the appearance, and they don't mask it until the item is identified, either. Since I want a stick, I'm going to make the dagger look like a wand when it's identified. Also worth noting is that the item will still look like a dagger when worn, so when you drop it on the ground or look at it in your inventory, you'll see a what you put here, but when you put it on, your character will still be using what it is. We're doing this so that your cattle prod looks like a wand in inventory, but is used in a stabbing motion like a dagger when attacking.

(Columns S, T and U) dropsound, dropsfxframe and usesound: You can use these to change the sounds of the item when dropped and used, which we don't really want to do so we'll leave these blank.

(Columns V, W, X and Y, followed by Z to BQ), prop1, par1, min1 and max1: These 4 columns form a kind of block, and there are 12 of these blocks total. These are how we set properties on the item. Use the magic codes master list found at [https://d2mods.info/resources/mcml-v110.php](https://d2mods.info/resources/mcml-v110.php) to see what you can do and what's required to do it. prop# is used for the property code, so you know exactly which property is used. par# is used to specify a parameter for the code, but only if required. min# and max# are also parameters for the property, and are also only used if necessary. By looking at the master list you can see what you need to specify for each property, and what each of those specified will actually do. You will always need to use the prop# cell to put a property on an item, but if the param#, min# or max# are blank on the master list, then you leave it blank in the file to use that property.

I'll start with putting some lightning damage on the cattle prod. The entry for lightning damage in the master list says I need to use the code dmg-ltng, we don't need a parameter, but we do need min and max to define how much lightning damage, which will be 1 and 10. So dmg-ltng in prop1, blank in par1, 1 in min1 and 10 in max1 will give the item 1-10 lighting damage.

The next property will be added in prop2, I want to add increased attack speed. We have swing1, swing2 and swing3. These used to mean different things, but now they don't so you can use any of the 3 equally. Regardless of which one we use, again we don't need a parameter but we do need min and max. Unlike the lightning damage, having different values in min and max will mean that the item randomly chooses a value from between that min and max when the item drops, and keeps it permanently. I only want 10% increased attack speed, so I'm going to go with swing1, (blank), 10 and 10 for the second block.

The last property I want is ignore target defense, so we hopefully always hit. We need ignore-ac, no param and a boolean for both min and max. This is one of the properties that is either there or not, that's its only range. As before, 1's are on, and 0's are off. We don't really want it off, otherwise we just wouldn't use the property at all. So we want ignore-ac, (blank), 1 and 1. We could use 0 for min and 1 for max, and this would make the item spawn sometimes with it and sometimes without, but we just want the item to have it.

Now we don't want any more properties, so we'll just leave the rest completely blank. As you can see, we can put up to 12 properties on one item, which is a lot. Each block holds 1 property, and each property you use will take up the entire block, even if some of it's cells are blank.

(Column BR) \*eol: This is a comment as stated before, however there is one VERY important difference. You MUST put something in here. You'll see that all other items just have a 0 here, as what you put doesn't really matter, so put a 0 in just to follow suit. The main reason for this is so that your file editor doesn't try to cut lines down to save space, and so that the game knows that the row is completed.

Now the entry is complete! But we aren't quite done yet. Here's what we have, just to recap:

A: Cattle Prod  
B: 100  
C: 1  
D:  
E: 1  
F:  
G: 7  
H: 6  
I: dgr  
J:  
K:  
L:  
M: 5  
N: 5000  
O:  
P:  
Q: flpwnd  
R: invwnd  
S:  
T:  
U:  
V: dmg-ltng  
W:  
X: 1  
Y: 10  
Z: swing1  
AA:  
AB: 10  
AC: 10  
AD: ignore-ac  
AE:  
AF: 1  
AG: 1  
AH-BQ:  
BR: 0

Save the file. If you're using ms excel, then you need to save it then close it so the game can use it.

\*\*The String\*\*  
Now that the item is entered, we can find it. However, if you don't add a string for it, the name will just show up as \[an evil force\]. So, pull out your string editor, and open your string table. Add a key (make sure to add it to the bottom if your editor doesn't do that naturally) and make sure you put in the exact same name as you did in index. Then for the value, you can use anything you want. As long as the key is exactly the same as the index, the game will find the value associated with the key and use it for the name of the item in-game. We'll use the name Cattle Prod here as the value, since that's what we were making. Save the table.

\*\*The Test\*\*  
You should know from the beginners guide where to put the files, and you were probably editing them from that location already. Now, you can start up the game and find the item! You should remember how to force a drop from the beginners guide, use it to test the item out. Once you test the item, you may notice that the requirement on it is level 8. But we set it to 6! As mentioned earlier, one of the properties on the item is raising it's level requirement to 8, to make sure that good properties don't get to characters that are too low a level. You can, and probably should, just raise what we entered to 8, so that what's in the file is the same as what we get in-game.

Enjoy.
