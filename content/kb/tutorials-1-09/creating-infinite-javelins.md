---
title: Creating Infinite Javelins
summary: >-
  Step 1 Open up automagic.txt in your spreadsheet and add a new row to the
  file, change the entry under the name column to INFINITEAMMO (it doesn’t
  matter what you name it thought), set the version…
keepId: 201
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 7161
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=201'
---
What you will need:  
Automagic.txt  
Weapons.txt

Step 1  
Open up automagic.txt in your spreadsheet and add a new row to the file, change  
the entry under the name column to INFINITE\_AMMO (it doesn’t matter what you  
name it thought), set the version column to 100, which tells the game its an  
expansion only modifier, now set spawnable, rare, level and frequency columns to  
1 (all of them of course) set group to 600, this will give our new INFINITE\_AMMO  
modifier the group ID 600, which isn’t used anywhere.  
Set mod1code to 'throw' (without the quotes!) next set mod1min and mod1max  
to 1, because 'throw' is a boolean modifier.  
Now set itype1 to 'weap', again without the quotes of course.  
To finish this file set divide, multiply and add to 0 and your done with  
automagic.txt.

Step 2  
Now open up weapons.txt, go down to the javelin row and scroll over to the  
stackable column, set it to 0, do the same for mistack, maxstack and spawnstack.  
Now scroll back to the 'auto affix' column and enter 600, this will tell the  
game to use the affix group with the ID 600 for this item.  
Now scroll over to qntwarning and set it to 0 as well, this will prevent you  
from always having a no ammo symbol in the top right corner of the screen.  
That’s actually all that there is to it, open a game and buy some javelins.
