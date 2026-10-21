---
title: 'Simple Monster Making: Creating Golems as Enemies'
summary: >-
  For the purposes of this tutorial, I will assume that you have not used the
  gorgon rows (or at least not all of them) in monstats.txt to create any new
  monsters. Why do I assume this? First, it's the…
keepId: 213
author: Phrozen Heart
credit: by JBouley
posted: '2003-12-02'
views: 7490
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=213'
---
For the purposes of this tutorial, I will assume that you have not used the gorgon rows (or at least not all of them) in monstats.txt to create any new monsters. Why do I assume this? First, it's the easiest way to introduce you to the concept of making 'monster golems,' and our example will use the fire golem...and since monsters cloned to the gorgon rows will make hissing noises, this works well with a fiery creature (also with the blood golem). The information you learn here will also help in creating other types of monsters, like making Andariel clones or monsters that look like Griwold, etc., etc.

So, what do you need to mod to make the enemy fire golem we are about to create? MonType.txt and monstats.txt primarily (and eventually string.tbl \[or expansionstring.tbl) and Levels.txt). If you are not familiar with basic modding tools and procedures, go back and read the basic tutorials first.

What do you need to do?

1) In MonType.txt, copy all of the columns for the fire golem **except** for the first column (so, from the Token to the end of the Dir entries).

2) Paste it into one of the Gorgon rows

3) Go to monstats.txt, and copy all of the 'Mode' columns for the fire golem, and paste them over what is in the Gorgon row for those values. Note that MonType and monstats rows correspond exactly...it will be the **same row number** you used in MonType.

4) In the first column of the monstats.txt file, you will change the entry there (whether Gorgon or StoneStalker or whatever) to something appropriate for your new monster. It could be FireElemental, EvilGolem, Floyd, Monster1 or whatever else. I recommend making it one word with no spaces, as this is Blizzard's current style. I'm not sure if spaces will mess anything up. Remember the name you have chosen. It becomes important in step #6.

5) Make any adjustments you wish in monstats, such as changing the monster's speed (velocity), adding an elemental fire attack to the hand-to-hand attacks, giving fire resistance, adjusting hit points, etc.

6) In one of the .tbl files (I recommend string.tbl, but expansionstring.tbl will also work if you are modding the D2: Lord of Destruction expansion), you will need to add a new entry for your enemy golem (use a Table Editor program. Baron Darkstorm's table editor is a good one, and for the purposes of this tutorial, I will assume you are using that one).

You will hit the 'Add Key' button. What you enter will be **exactly** what appears in the first column of the monstats.txt row where you placed your monster golem. And I do mean **exactly**...any variation (capitalizing things that weren't capitalized, adding spaces, etc.) will mess you up. In other words, enter the name you chose in step 5.

Let's say you made the entry in that first column EvilGolem. When you hit Add Key, you then enter 'EvilGolem.' Then it will pop your cursor into the right-hand column, where you will enter whatever you want to appear **in the game** as the monster's name, for example, 'Fire Elemental' or 'Twisted Golem' or 'Demon Beast' or 'Fred the Monster'...whatever.

**NOTE**: Normally, when you simply want to change the name of an **existing** monster, you would go in and change the description attached to the key. For example, if you wanted to chang the Fallen Shaman's name, you'd go into string.tbl, find the listing for FallenShaman, and then change the **RIGHT-HAND** column from 'Fallen Shaman' to 'Goofy Red Guy' or whatever you want. In this case, though, using a Gorgon row...you DON'T want to do that. Because the monster rows for the gorgon-type beasts were not originally intended by Blizzard (same with the 'Chaos Horde' rows and 'Fire Beast' rows), you need to create your own unique identifier to use in the .txt and .tbl files. If you don't do this, you will likely end up with a monster called 'An Evil Force' or 'not x-lated call Ken.' You don't want that, do you? ;-)

6) In Levels.txt, put the monster where you want it to show up, using its Populate ID number as shown in monstats.txt (this will work in Acts I through IV. To put monsters from the 'classic' part of the monstats file \[the non-expansion portion in the top two-thirds or so of the file\] in Act V is a bit more complex. You need to subtract 436 from the Populate ID number and put that negative value in the row for Act V you want the monster to appear in...but sometimes even then it won't work because many Act V areas are hardcoded in terms of monster appearance.)

**NOTE:** that the process described above for 'cloning' a monster is known as a token change...it works in many, many cases and is often the preferred way to change monster appearance. However, if the monster you are cloning has more Total Pieces (see that column in monstats) than the monster in the row you are cloning to, you may have missing body parts. Golems are one-part monsters, though, and are safe to clone to almost any melee monster row.

**Other tips:**

Blood golems work well when cloned to a foul crow/blood hawk/etc. row by doing a token change, if for no other reason than the unholy screeching sound. Others may disagree with me on this one if they like.

Clay golems work well cloned to a Gargantuan Beast/Brute/etc. row also because sound effects seem appropriate.

Iron golems cause problems in some rows, but I have made them spawn successfully when cloning them to the gorgon rows or to any of the unused Chaos Horde rows (though the Chaos Horde rows are silent...no sound fx).

Also, quick tip with regard to Levels.txt: The Mtot column must match however many entries you have in the 'M' columns. So, if you have five Populate ID numbers in the row for the Blood Moor, Mtot must be 5. Also, the game only picks three or four choices for any area of the game. If you have a lot of Populate ID numbers in a row, your monster may not show up. To ensure it does, make no more than three or four entries in the M columns. You can get around this somewhat by putting the Populate ID number in one of the S columns, which are usually used for nests.
