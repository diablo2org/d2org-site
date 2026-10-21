---
title: Enchanted Arrows and Bolts
summary: 'Files you will need: STRING.TBL AUTOMAGIC.TXT MISC.TXT TREASURECLASSEX.TXT'
keepId: 200
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 8354
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=200'
---
**Files you will need:**  
STRING.TBL  
AUTOMAGIC.TXT  
MISC.TXT  
TREASURECLASSEX.TXT

**Tools you will need:**  
STAROFFICE, MS-EXCEL or any other good spreadsheet.  
DARKSTORMS TBL EDITOR or any other TBL editor.

**What you should known:**  
The basics, such as working with MPQ files and DIRECT TXT mode.

**The Goal:**  
Creating new arrows and bolts that will randomly spawn with elemental damage and have lower quantity without effecting the normal arrows and bolts.

---

**Step 1 - Add the elemental damage modifiers:**

Open up AUTOMAGIC.TXT in your spreadsheet and go down to the end of the file. We will start with fire damage, we will create 4 affixes per elemental damage, so we will end up with 16 for all elements.

To start, add 16 empty rows at the bottom of the file. The name is not important in this file as these string codes are not used anywhere so simply name it something like FIRE1-4, COLD1-4, LTNG1-4 and POIS1-4 or anything you want, it doesn’t matter in this case.

Set VERSION to 100, so that the game will know this is an expansion only effect. Set SPAWNABLE to 1, this controls if the affix can spawn on items, thought in this file it doesn’t seam to have any effect. Set RARE to 1, just for formality, because we wont have any non-normal arrows or bolts.

Now we need to define level grades, the first FIRE affix should be lvl1, so put 1 in the LEVEL column, lets say it increases by 20 each time, so for FIRE2 you would use lvl21, then for FIRE3 you would use lvl41 and finally for FIRE4 you will use 61, this is pretty even so use these level grades for all the affix groups you created.

Now another important part arrives: We don’t want Hell-difficulty Baal to drop crappy arrows with 1-4 fire damage, this will just make our new arrows useless later on in the game. So, for the lower two affixes of each group you should set a max level. I would use lvl41 as a max level for FIRE1 and lvl61 as a max level for FIRE2, so simply do so and enter 41 and 61 in the MAXLEVEL column for the two first affixes of each of your new groups. Now we also don’t want low level characters using +100 fire damage arrows so we will need a level requirement. I think a requirement of 10 less then the drop level is fine, so leave LEVELREQ blank for FIRE1, make it be 11 for FIRE2, 31 for FIRE3 and 51 for FIRE4 do so for the other groups as well.

Now we move over to frequency, we can play around with the overall frequency of appearance of a specific group here, poison damage and cold damage will probably be used most of the time, so we could make them a bit rarer then fire and lightning damage (so that people will actually use fire and lightning) to do so set frequency to 8 for fire and lightning groups, next simply set frequency to 4 or 2 for the poison and cold groups, to do so edit the FREQUENCY column.

Now we need to define a new unique group for our affixes, so that we can assign them to our new arrows and bolts (which we will create later) to do so enter an unused group number such as 350 in the group column, do so for all of your new modifiers, aka all types of damage should have 350 as their value in the GROUP column, this is the heart and core of this effect.

Now the fun part starts, in the MOD1CODE column type 'dmg-fire' (without the quotes) for all the fire damage affixes, set MOD1MIN to something like 1 and MOD1MAX to something like 4, and upgrade them per row, aka FIRE1 is 1-4, FIRE2 is 5-20, FIRE3 is 15-50 and so on, your highest level arrows should be around 30-120 damage to make them tasty for higher level players. Now move over to the cold rows, for these we use “dmg-cold”, set MOD1PARAM to the number of frames the freezing should last, remember 25 frames = 1 second, so a value of 100 or 150 is pretty nice, but you should start lower for low level arrows, somewhere around 50 is ok. Dont forget to set MIN/MAX values for the damage! Next do the same with lightning damage by using “dmg-ltng” its the same as fire damage so you dont need to enter a value into MOD1PARAM and last but not least, you use “dmg-pois” for poison, it follows the same rules as “dmg-cold”, note if you want to imitate blizzards style of using poison use the same value for minimum and maximum for the poison modifiers, but you don’t need to. We are almost done with this file, all we need to do now is edit a few more fields, go to ITYPE1 and enter “bowq” without the quotes of course, in ITYPE2 enter “xboq”, this tells the game to allow this modifier to be assigned to bolts and arrows. Finally set DIVIDE, MULTIPLY and ADD columns to 0, you dont need to bother with those now, we are done with this file. Save AUTOMAGIC.TXT and exit your spreadsheet.

---

**Step 2 - Create the new arrows and bolts:**

This step is allot shorter then the previous one, we will not need to do allot here at all, to start, open up MISC.TXT in your spreadsheet. Go down to the ARROW row and copy it to the end of the file, do the same with the BOLT row, what you have just done is known as item cloning.

This way you can create tons of clones of items without effecting the original ones. This will not work with special items such as potions, as this will require some more advanced practices but its possible nonetheless, but for now, you should rather keep yourself focused on TXT editing until you master this discipline. In the two new rows, change NAME and NAMCO to something like 'Special Arrow' and 'Special Bolt', this is only used internally and has absolutely no effect on the game and is only there for yourself to make notes about an item.

Now go over to COST, we want our arrows and bolts to be a bit more expensive so you need to change this to something like 500 or 1000, or whatever value you want, now change the CODE column to say EAQ in the new arrow row and EBQ in the new bolt row, this is very important, write these codes down on a piece of paper.

Now we will come to a bit of advanced practice, add a new COLUMN to the file after the code column and type 'auto prefix' in the header, it must be exactly as shown here, with the space (just without the quotes), generally its not a smart idea of adding columns blindly, but you can move columns around from weapons, armor and misc.txt as the game counts all of these as one large file, hence all columns from any of them will work in any of them even if it didn't have this column specified before. In the new column type 350 (its the ID of our new affix group if you remember) for our new rows. Now go to MINSTACK, MAXSTACK and SPAWNSTACK and cut the values in here in half, just for the sake of making these arrows run out faster. I prefer to set all three of the columns to the same value, to prevent people from finding half-empty quivers. Finally, move over to the NPC columns (aka CHARSIMIN/CHARSIMAX etc) and clear any entry in them labeled as 1, to prevent npcs from selling your new arrows and bolts. After this is done save MISC.TXT and exit your spreadsheet.

---

**Step 3 - Making them findable:**

Finally, the last TXT editing part has arrived. Open up TREASURECLASSEX.TXT and go down to the AMMO row, here you will see two codes of the normal arrows and bolts, what we will do is expand this row a bit, set ITEM3 to EAQ and ITEM4 to EBQ, now set PROB1 to 2 and PROB2 to 2, set PROB3 and PROB4 to 1, this will make the chance of getting our arrows or bolts about 1/6 for each, which is pretty good. This was really fast wasn't it? Simply save the file and exit your spreadsheet now.

---

**Step 4 - Adding the strings:**

This is by far the easiest part, open your TBL editor and load STRING.TBL. Click the 'add string' button of your specific editor and type EAQ, in the text-area part of the screen in case of DARKSTORMS TBL EDITOR you will type 'Arrows', repeat the steps, just this time do so for EBQ, by adding the code EBQ and typing 'Bolts' in the text area. Save STRING.TBL.

Now all you need to do is open up the game and play and of course, ENJOY!
