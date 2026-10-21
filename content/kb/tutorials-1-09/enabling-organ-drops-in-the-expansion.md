---
title: Enabling Organ Drops in the Expansion
summary: >-
  (HINT: We don’t need any TBL file because blizzard fixed the string codes for
  these items in EXPANSIONSTRING.TBL in 1.07)
keepId: 190
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 6829
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=190'
---
**Files you will need:**  
MISC.TXT  
TREASURECLASSEX.TXT

(HINT: We don’t need any TBL file because blizzard fixed the string codes for these items in EXPANSIONSTRING.TBL in 1.07)

**Tools you will need:**  
STAROFFICE, MS-EXCEL or any other good spreadsheet.

**What you should know:**  
The basics, such as working with MPQ files and DIRECT TXT mode.

**The Goal:**  
Enabling Organ drops from monsters which transform into items when right clicked.  
We will make it so that most monsters will have a decent chance of dropping random organs.  
(NOTE: Older tutorials on this subject will not work anywhere past version 1.06, because blizzard removed the functionality of MONITEMPERCENT.TXT, because they greatly changed the item generation process, but overlooked this unused feature in their update process, and (unintentionally) broke its functionality.)

**Some Further Notes:**  
We will only enable Hearts, Brains, Jaw Bones, Eyes, Horns, Tails, Flags, Fangs, Quills and Spleens, why you ask? The drop animation of the soul is so ugly you will decide so by yourself , it has a black outline the size of your character, sure you can fix this, but this is not a DC6 animation tutorial , as for the Scalp, it doesn’t have any graphics, blizzard strangly created a new image using the same filename as the scalp and that is why the real scalp gfx is nowhere to be found in D2DATA.MPQ.

---

First load up MISC.TXT in your spreadsheet and go down to the heart row, (be aware its name column just says unused, ignore that, you can change it if you want but it doesn’t matter at all). The NAMCO column will say the real name of the organs, now go over to the spawnable column and set Hearts, Brains, Jaw Bones, Eyes, Horns, Tails, Flags, Fangs, Quills and Spleens to 1 in here, this will make the item spawnable. Now move over to the INVHEIGHT column and change the entry under the flag row from 2 to 1, the inventory graphics for the flag is only 1x1 inv squares but is set to 1x2 in here by mistake. Now go over to the TRANSMOGRIFY column and change Hearts, Brains, Jaw Bones, Eyes, Horns, Tails, Flags, Fangs, Quills and Spleens to 1 in here for those that aren’t already. Now in TMOGTYPE change the code to “hp5” (super healing potion) for Hearts, to “mp5” (super mana potion) for Brains, to “gpw” (perfect diamond), to “rvs” for Eyes (rejuvenation potion), to “isc” for Horns (identify scroll), to “tsc” for Tails (townportal scroll), to “wms” for Flags (thawing potion), to “rvl” for Fangs (full rejuvenation potion), to “vps” for Quills (stamina potion) and finally to “yps” for Spleens (antidote potion), of course you can use any item code you want, but this is only for practice. Set TMOGMIN and TMOGMAX to 0, because we didnt use items that have quantity values. After this is done you can save and close MISC.TXT, we are done here!

Now open up TREASURECLASSEX.TXT and add a new row, just below the gold row (NEVER! Move the gold row! It will mess up your game, you have been warned, that’s why you need to add it BELOW the gold row.), name this new row “Organs” (without quotes!) set picks to 1, set ITEM1-10 to “hrt”, “brz”, “jaw”, “eyz”, “hrn”, “tal”, “flg”, “fng”, “qll” and “spe”, set PROB1-10 to 1, so that every organ has a equal chance to drop (1/10), next set BETTER and TERM to 0. Now go down to the MISC 0,1,2 rows, here change ITEM6 to “Organs” (without quotes) to call our new Organs treasureclass, set PROB6 to something like 3 to 8, be aware the higher the value the more organs will drop! (to calculate the chance simply add all PROBS to each other, lets say you have 5 items all have PROB set to 25, this means you have 125 total PROBS, now 25/125 each of these items will drop, pretty simply) After doing this save the file and go play as your done, check out your new organ drops and ENJOY!
