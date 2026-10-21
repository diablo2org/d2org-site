---
title: Making characters start with the Horadric Cube
summary: 'Tools you will need: STAROFFICE, MS-EXCEL or any other good spreadsheet.'
keepId: 176
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 7753
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=176'
---
**Files you will need:**  
CHARSTATS.TXT

**Tools you will need:**  
STAROFFICE, MS-EXCEL or any other good spreadsheet.

---

This is really a short tutorial, its probably the easiest thing to do within this game.  
First open up charstats.txt in your spreadsheet and scroll over to column AT, this column is labeled item5.  
As you can see, 5 cells are filled with “isc” and two slots contain 0.  
Change the entry for the two slots containing 0 to “box”. (Without the quotes!)  
This tells the game that these two character classes now start with the item “box”, and if you check in misc.txt you will see “box” is the three letter code for the Horadric Cube.  
Next set item5count to 1 for these two lines, so that all lines now contain 1 in column AV.  
Now we need to give the other 5 character classes a cube as well, hence go over to column AW, which is item6 and change the entries for line 1, 4, 5, 6, 8 and 9 to “box”.  
And finally, change the entries under column AY which is item6count to 1 for the same lines.  
That is all that there is to it, now all you need to do is compile bin files for your modified charstats.txt file and play the game as normally, of course you need to create a new character to get the cube.
