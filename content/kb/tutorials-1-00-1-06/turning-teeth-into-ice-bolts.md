---
title: Turning Teeth into Ice Bolts
summary: >-
  In this tutorial I'm gonna try to explain skill mods a bit. Backup the files
  you're gona mess with !! We're giong to change the teeth skill for the
  Necromancer into Ice bolts like I did in my Werzion…
keepId: 407
author: Nefarius
credit: by Fusman
posted: '2006-08-04'
views: 5622
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=407'
---
In this tutorial I'm gonna try to explain skill mods a bit. Backup the files you're gona mess with !! We're giong to change the teeth skill for the Necromancer into Ice bolts like I did in my Werzion X mod.  
I'll assume some things in this tutorial, like you have made mods before and know how to extract/insert the txt files into mpq files and all that.

There are 3 files you need to extract and modify for this mod. They are missiles.txt, skills.txt and string.tbl (click here for more help on this)

1\. First up, missiles.txt, open it in excel and find the row for teeth. It's row nr. 116.

2a. Change the color columns to 81/81/255 the default for teeth is 255/255/255, the columns are number J, K and L. I'm talking about your Excel spreadsheet rows and columns if you're wondering.  
2b. Column P says Celfile, change that from 'teethmissile' to 'icebolt' br> 2c. Column Q says Animlen change the number in that cell from 30 to 6, this tells the game how many frames there are in the icebolt animation.  
2d. Column O says Loopanim, change that from 0 to 1. This tells the game to loop the entire animation over and over again while that missile is in flight.  
2e. Columns S (subloop), T (substart) and U (substop) should all be 0 like it says in the icebolt row, that row is number 61 if you want to check it out.

And that's it for missiles.txt. Exit excel and save your work.  

3a. Open up skills.txt and find the row for the teeth skill, it's number 69. Go to column BZ, in that cell is the number 3, you need to change that number to 4. This is the Etype column. It tells the game what kind of elemental damage a skill does. The numbers you can put in the Etype skills are 1 for fire, 2 for lightning, 3 for magic, 4 for cold, 5 for poison. And you set it to 4 for this mod we're doing right now. After the release of the v1.08 patch, these Etypes have been simplified to fire, ltng, mag, cold and poison.  
3b. The next two columns are for min and max damage of that Etype you just set in the Etype column, let's leave it like it is for this mod.  
3c. Column CD, called Elen, is next up, it tells the game how many frames the cold is in effect, 1 second is 25 frames. So if you set the number in that cell to 50 than the monster that gets hit by a ice bolt should be frozen for about 2 seconds, so let's set it to 50.  
3d. The column next to it is the Elevlen column it tells the game if the duration you set in the Elen column (those 2 seconds) is increased with each skill point you add to the skill, lets just leave it at 0 for this mod. Now exit excel and save your work.  

4a. Now open up string.tbl with the TBLedit102 available in the tools of the trade section. Click the Search button, type in 'Teeth'. The first key you will see in the search is called StrSkill28 and it says 'teeth' just change that to 'bolts'.  
4b. Continue the search and you will find a key called Skillname67 and it says 'teeth', change that to 'Ice Bolts'.  
4c. There are 3 keys directly below this key that you'll need to change. They are Skillsd67, Skilld67 and Skillan67, change the text in those to whatever you like. Like Skillsd67 says 'fires barbed teeth', change that to something like 'fires ice bolts', and change Skillan67, it also says 'teeth', to Ice bolts. Now save and exit.  

5\. Now add these 3 modified files to your patch\_d2.mpq (click here for more help on this). For those of you wondering what the line in you script file for adding the string.tbl file should be:

---

A string.tbl data\\local\\lng\\eng\\string.tbl

---

If you dont know what scripts are you need to read this tutorial on mpq 2k.

Once you've added these 3 files to your patch\_d2.mpq you're done.
