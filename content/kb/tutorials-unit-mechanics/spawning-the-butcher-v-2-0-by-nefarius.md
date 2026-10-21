---
title: Spawning the Butcher (v 2.0) (by Nefarius)
summary: >-
  This tutorial will show you how to spawn the Butcher in Diablo II Expansion
  version 1.10, this tutorial, unlike all of the preceding Butcher tutorials
  will not replace any monster (due to the…
keepId: 309
author: Nefarius
credit: by Nefarius
posted: '2007-05-04'
views: 11817
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=309'
---
This tutorial will show you how to spawn the Butcher in Diablo II Expansion version 1.10, this tutorial, unlike all of the preceding Butcher tutorials will not replace any monster (due to the wonderful new abilities granted by this patch), rather we will add a entirely new monster to the game, this will also concern how to spawn the monster in the game file as new superunique Boss which we will spawn in Andariels chamber (Catacombs Lvl 4). Note that for the later step I will only give an overall description as there is an excellent tutorial by Paul Siramy on this specific subject (which you should read at all cost) and there is no need to repeat this here. This tutorial will also not cover how to convert sounds and how to convert graphics, there are other sources for these.

  

**Game files you will need:**

-   MonPreset.txt
-   MonSounds.txt
-   MonStats.txt
-   MonStats2.txt
-   Sounds.txt
-   Superuniques.txt
-   TreasureClassEx.txt
-   UniqueItems.txt
-   Weapons.txt
-   Andy3.ds1
-   Patchstring.tbl
-   The Butchers sounds from Diablo 1 (not really needed but if you want him to have the same sounds and taunt as he had in Diablo 1 you need these files.)
-   The Butchers Cleaver inventory image from Diablo 1. (not really needed but if you want him to have the same item drop as in Diablo 1 you will need this file.)

  

**Tools you will need:**

-   Any decent spreadsheet capable of working with tab delimited text files. (Star Office, Open Office, MS Excel etc)
-   DS1edit (or WinDS1edit)
-   A Sound editor, such as Audacity (available via SourceForge.net).
-   A DC6 conversions tool, such as DC6 Creator.
-   A TBL Editor of your choice.
-   CV5 or a similar MPQ extractor tool to extract the appropriate Diablo I graphics and sounds (for the Cleaver and the Butchers sounds).

  

**Things you should know:**

-   Basic mod making knowledge and some patience.
-   Knowing how to add superunique monsters to DS1 files.
-   Knowing how to convert Diablo I sound files to WAV files compatible with Diablo II.
-   Knowing how to convert Diablo I inventory graphic files to DC6 files.

  

**1st Step: Creating the Butcher (MonStats.txt and MonStats2.txt)**

Load up MonStats.txt in your spreadsheet and copy the row of the Smith (row 404), note I use this row because it will require minimal changing, I will only cover the steps needed if you work with this row, other rows will require other changes as well.

Paste it in the first empty row (row 707 in an unmodded file), change the **hcldx** of this new row to the next available number (i.e. the number of the previous monster's **hcldx** minus one), so in an unmodded file this would be 704. Change the ID column to _thebutcher_, change BaseID also to _thebutcher_, you don't need to change NameStr because the names of superuniques are controlled by SuperUniques.txt.

Finally, change MonStatsEx also to _thebutcher_, this column controls which entry to look up in MonStats2.txt. Now

Now change the code column to BU, this tells the game to look up this monsters graphics and COF files in the BU directory (the directory containing the unused Butchers graphics).

If you want the Butcher to have the same unfairly high speed as in Diablo 1 you can change his speed (Velocity column) to lets say ~12, Set his level to whatever you want, a good level for the end of Act 1 is around 15 or so.

You don't have to change the MonSound and MonUSound, the sounds for superuniques are, if they are special, applied in SuperUniques.txt

Now, if you want the Butcher to be unable to open doors for making a better copy of the Diablo 1 Butcher, set the opendoors column to false (0).

We are almost done with MonStats.txt, which stats you give him is all up to you, remember that the stats in MonStats.txt are controlled by MonLvl.txt, the values in MonStats.txt represent the percentage of the MonLvl.txt stats. For example, the Smiths row has 400 percent minimum health and is level 10 on normal difficulty by default. So, if you look up in MonLvl.txt under the L-HP column (row 12) you will see an entry of 35, this is the base health for level 10 monsters (that means, a monster with 100 in the health columns in MonStats.txt would get 35 health, aka 100 percent, (35\*100)/100), so doing simply percentage calculation you will see that the Smith has 140 health on normal difficulty (aka (35\*400)/100). This is the same for all stats covered by MonLvl.txt.

Now, you can ignore the contents of his treasureclass columns, as the treasureclass for superuniques is picked in superuniques.txt.

Now open up MonStats2.txt, this file contains most of the graphical settings. It is extremely important, this file controls the things MonType.txt used to control in older versions of Diablo II (I.E. the number of directions and the like).

Do as you did before, and copy the Smiths row (row 404), Paste it into the first empty row, in an unmodded file this is row 607, now rename the row _thebutcher_, make sure that its exactly the same name you used in the MonStatsEx column in MonStats.txt!

We don't need to do anything else in this file if you used the Smiths row.

  

**2nd Step: Adding a New Boss (Andy3.ds1, SuperUniques.txt and MonPreset.txt)**

Open up superuniques.txt and copy the Smiths row (yes again) and paste it into the first empty row in the file (in an unmodded game this is row 69). Change the name column to _TheButcher_. (NOTE: This column contains the string-code the game will use to look up the name of your monster in the TBL files, this is case sensitive, if you don't take care and for example enter _Thebutcher_ in a TBL file later on the game will not find your string and call your monster 'An Evil Force')

Change the Superunique column to _TheButcher_ as well, make sure that this is different from the entry in MonStats.txt (under the ID column) if you use the same name (i.e. _thebutcher_) the game will probably crash or at least mess up as it will not know which of the two to spawn.

Change the class column to _thebutcher_, this tells the game which base monster to use. Also make sure to set hcldx to the next available number, in an unmodded game this would be 66.

Change the MonSound column to _thebutcher_ as well, this tells the game which entry from MonSounds.txt to use for this monster.

Change whatever special modifiers he will get, set Utrans (on all difficulties to 0, this will prevent the Butcher from spawning with a different color).

Next change AutoPos to false, this will force the game to spawn the Butcher exactly where you want, and not randomly place him somewhere in the DS1 file.

And finally, change the treasureclass columns to TheButcher. (only do this if you want to make him drop his cleaver like he did in Diablo 1).

For adding the Butcher to Andy3.ds1 (and also the editing of MonPreset.txt) please refer to [this tutorial.](https://d2mods.info/forum/kb.php?mode=article&k=287)

  

**3rd Step: Adding the Sounds (Sounds.txt and MonSounds.txt)**

First of all, you can skip this step if you lack the Diablo I sounds or simply don't want to bother with this.

First of all, this will not cover in detail how to convert the sounds, just make sure that you save the covert the sounds to be **22,050 HZ 16 BIT Mono WAV** files (the Diablo I sounds are 22,050 HZ 8 and 16 BIT Mono Wav files), otherwise the game will not be able to play them.

The sounds to look for are located in DIABDAT.MPQ (on your Diablo I CD) under SFX\\MONSTERS\\, the files are, butcher.wav (the Butchers 'Ah Fresh Meat!' taunt) and under MONSTERS\\FATC (all the WAV files in there). You should have a total of nine files now, albeit you don't need fatcs1.wav and fatcs2.wav.

After you finish converting them to the aforementioned format load up Sounds.txt in your spreadsheet. In here copy the following lines to the end of the file and adjust the Ids properly (the last ID in an unmodded file is 4698, so your Ids should start at 4699), smith\_attack\_1, smith\_attack\_2, smith\_hit\_1, smith\_hit\_2, smith\_death (copy this line twice) also copy monster\_smith\_taunt\_1.

Move all of these files into a new folder, in the MPQ or your external mod directory, make sure the structure looks like this: **Data\\Local\\SFX\\Act1\\Monster\\**, there you place butcher.wav. The other wav files you place in **Data\\Global\\SFX\\Monster\\Butcher\\**.  
Hint: You don't have to use any subdirectories, its enough to dump all of them in Data\\Global\\SFX, but that would just cause a mess if you add many new monster sounds.

Name the entries _butcher\_attack\_1_, _butcher\_attack\_2_, _butcher\_hit\_1_, _butcher\_hit\_2_, _butcher\_death\_1_, _butcher\_death\_2_ and _monster\_butcher\_taunt_.

Now adjust the paths to match those of the sound files, aka for the taunt you use **act1\\monster\\butcher.wav** and for the other files, lets take the first attack sound as an example, **monster\\butcher\\fatca1.wav**.

Now set the Group Size column to 2 for the following entries _butcher\_attack\_1_, _butcher\_hit\_1_ and _butcher\_death\_1_, all others should have 0 in here. This is used to tell the game how many different sounds exist for the same action.

That's it with Sounds.txt.

Now load up MonSounds.txt in your spreadsheet and again, copy the Smith's row to the end of the file and name it the _thebutcher_.

Change the name of your new row to _thebutcher_, this name must be identical to the name you used in the MonSound column in SuperUniques.txt!

Change the Attack1 column to _butcher\_attack\_1_, make the Weapon1 column blank, do the same for the Attack2 and Weapon2 columns, change the HitSound column to _butcher\_hit\_1_ and change the DeathSound column to _butcher\_death\_1_, blank out the neutral columns (Neutral and NeuTime). Finally, change the Taunt column to _monster\_butcher\_taunt_.

That's it with this file as well.

  

**4th Step: Give him back that Cleaver, will ya. (Weapons.txt, TreasureClassEX.txt and UniqueItems.txt)**

First of all, we want to make a new 'quest' item that will only drop as unique, to do this we need to add a new base item. This will also prevent the game from dropping the item via the weap## auto classes.

Copy the line of the Great Axe to the end of the file.

Change the code column to BUC (don't worry, this will not interfere with the buc code of the Buckler, as these codes are case sensitive), enter the same thing in the NameStr column. Set rarity and spawnable to false (0). Alter the damage to your liking, requirements and durability to your liking as well. Make sure that the Level is 12 or less, in 1.10 the game no longer uses the Monsters level to determine drops but rather the area level from Levels.txt, and the area level for Catacombs 4 is 12.

Change the cost to whatever you like as well.

Now change the NormCode to BUC and make the UberCode and UltraCode columns blank.

Next, you need to change InvHeight to 3, the Great Axe uses a 2x4 cells graphic, but the cleaver from Diablo I uses a 2x3 graphic.

Next change the Invfile column to _InvButchersCleaver_, this controls the graphic the new weapon will have in-game, we will add this file to the game later on, blank out the InvFileSet and InvFileUnique columns. Next change FlpFile column to _FlpButchersCleaver_, this controls the dropping animation of your item, as with the first part in this section, we will add the file later on.

Set the Unique column to 1, this tells the game to always spawn this item as a unique, finally make sure that none of the Vendors can sell the item, empty out any vendor quantity column filled. Finally, we are done.

Now open up UniqueItems.txt, add a new item to the end of the file.

Change the index column to The Butchers Cleaver, Set Version to 100, enabled to true (1) and rarity to 1 as well, leave level as 0, and give it any level requirement you want. Make sure to enter BUC in the code column. If you want to prevent people from having more then one of this item ser Carry1 to true (1).

Give it any transform colors and stats you want, make sure that the EOL column (end of line, is not empty).

For our final step, open up TreasureClassEx.txt and add a new row to the end of the file. Change the Treasure Class column to _TheButcher_, make sure that this is identical to the entries we made in SuperUniques.txt.

Set Picks to –1, this tells the game to always pick one, and only one, item. Change nodrop to 0, and enter _The Butcher's Cleaver_ in the Item1 column and set Prob1 to 1.

Now go to the Term column and enter 0, your done with this file.

Finally, use CV5 to save Cleaver.CEL (In DiabData.MPQ under Items\\) as a GIF file (there are other tutorials explaining how to convert GIF files to DC6, I will not repeat these things here). The Inventory Graphics for the Cleaver are stored in frame 118 of ObjCurs.CEL (found in Data\\Inv in DiabData.MPQ on your Diablo I CD).

When you are done converting these to DC6, name them _InvButchersCleaver_ and _FlpButchersCleaver_ and move them into Data\\Global\\Items. Make sure the drop animation has 16 frames, else the item will become invisible when it finishes droping (as the game freezes it on that specific frame, you can still highlight it even if it turns invisible thought).

  

**5th Step: Let there be names (Patchstring.tbl)**

Open up Patchstring.tbl in your TBL editor and add the following keys.

_TheButcher_, make it translate into **The Butcher**. _The Butcher's Cleaver_, make it translate into **The Butcher's Cleaver**. _BUC_, make it translate into **Cleaver**.

That's it, you just added a very good clone of the Diablo 1 Butcher to Diablo II, enjoy.
