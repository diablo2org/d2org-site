---
title: New Superuniques (by Paul Siramy)
summary: This tutorial explains how to add new super unique monsters to the game.
keepId: 27
author: Phrozen Heart
posted: '2004-08-19'
views: 12934
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=27'
---
Yep, it's possible to create new super uniques monsters, but it's also possible to make my ds1 editor handle them, not very difficult.

First, let's create a new Super unique

Let's copy the entire Line of Pindlskin and paste it in the first empty line of SuperUniques.txt. Now, in the Superunique column, let's rename it Paul, and change also the hcIdx column (maybe 'Hardcoded Index') to 66 (first free index). It's enough for us. You have created a new super unique. Of course, you can edit his properties and so on.

Now, let's edit MonPreset.txt

in 1.09 D we had a Type 1 object table in a Dll, but this table is not only in a .txt now, but it also use code and not ID... AND it's expandable !!!

In my ds1 editor, if you compare all act1 type 1 object with the entries in this .txt, you'll see that they're the same.

In MonPreset.txt, go to the line of Corpsefire, and insert a line between this one and warriv2. Set Act to 1 and Place to Paul

Now the game (not my editor -yet-) is able to handle a new super unique.

finally, let's use my ds1 editor

In the directory of my editor, open the file data\\obj.txt in Excel. In the line with Act 1 and ID 47, in the column Description, put what you want, it's only for my editor. here I'll set it to 'Paul' again. You don't have to set the other columns, unless you want to actually see an animation, but for the purpose of just spawning a monster / npc, it's enough. Note : as well as in MonPreset.txt, you can \*add\* lines to my obj.txt, you're not limited to 60 objects per Act.

Now, open a ds1, go into object editing mode, and put somewhere your Paul super Unique, save it, and use it in your Mod.

That's done, in the game you'll see Pindleskin with his minions, in your ds1 (since I didn't made any token / properties change, this new Super Unique is looking exactly as Pindle Skin, but it's the one from the NEW line in SuperUniques.txt). Changing his name require TBL editing and SuperUniques.txt editing.

Just a note : in my editor don't use the Type 1 object of another act anymore, it won't work in 1.10. I don't know how it works for Type 2 objects yet (maybe no change has been done for Type 2 objects ?)

Summary :

\* create super unique in the .txt

\* edit MonPreset.txt accordingly (you CAN use more than 60 lines per act, unlike the Dll table in 1.09)

\* edit my ds1 editor data\\obj.txt to be able to spwan it

\* use the editor to spawn the super unique

All my gratz to Isolde and whoever else than may have wrote that part of code. Adding Super Uniques were a long desired feature by our users. Wow, I really love it the way it is now, one million of thanks
