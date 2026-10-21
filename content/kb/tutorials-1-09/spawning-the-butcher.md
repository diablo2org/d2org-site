---
title: Spawning the Butcher
summary: >-
  This will explain how to make the butcher appear in act 1 jail lv 2 (This is
  based of Nefarius's Butcher guide but this will work for 1.09) Thx to Nefarius
keepId: 211
author: Phrozen Heart
credit: by H3LLRIDER
posted: '2003-12-02'
views: 6638
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=211'
---
This will explain how to make the butcher appear in act 1 jail lv 2  
(This is based of Nefarius's Butcher guide but this will work for 1.09)  
Thx to [Nefarius](http://phrozenkeep.it-point.com/forum/profile.php?mode=viewprofile&u=575)

You will need

Montype.txt  
Monstats.txt  
SuperUniques.txt  
String.tbl

Open monstats.txt and search for firebeast (or any other row that is unused that you don’t want to use for something else). Write down the row number (if u can’t remember it). Then search for Smith to find the Smiths row, copy the Smiths row and paste it on top of the firebeast row (or whatever unused row you want, It's your choice) You can now change the namco column to what u desire but remember what you changed it too.

Then go along the row and change the stats to your desire.  
(This can be changed later)

Open montype.txt and search Smith again to find the Smiths row, Copy the row paste it on top of the firebeasts( or whatever one u chose the first time). Then change the token column entry for this row to BU (must be caps).

Save both txt files then close them.

Open superuniques.txt and go to pitspawn fouldogs row change his type column To match the column number of the firebeast row, but -1 so if u used your firebeast row then it would be 230. Then edit the skills and other stuff. (take a look at Phrozen Heart's SUPERUNQUES.TXT file guide if unsure about this)

Open string.tbl with a tbl editor, and search exactly what u put in the namco column in the monstats.txt (another case sensitive). Then enter the name you wanthim to show up as when playing the game

Next in string.tbl search for pitspawn fouldog and change that into The Butcher (Nefaris had this in his old tutorial not sure if its still need or what)
