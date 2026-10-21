---
title: How To Edit DT1 File Palettes (by BlackHeart)
summary: This tutorial explains how to manipulate DT1 map tiles for use in any act.
keepId: 264
author: Phrozen Heart
posted: '2004-08-19'
views: 8877
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=264'
---
Tools needed:

A copy of Paint Shop Pro

[DT1 Tools](http://phrozenkeep.it-point.com/filecenter/pafiledb.php?action=file&id=130): Created by: Paul Siramy  
This a package of simple programs for the management of the DT1 files.

Files needed:

[D2\_pal\_for\_psp](http://paul.siramy.free.fr/_divers/d2_pal_for_psp.zip) : Created by: Paul Siramy  
Diablo II Palettes for Paint Shop Pro.

data\\global\\tiles\\ACT1\\TOWN\\objects.dt1

In this exercise we will be changing the pallet of Act1 Objects to palette 0 for use in any act.

Step 1

Place a copy of the objects.dt1 into the dt1tools directory  
First we need to edit a bat file to unpack the dt1 file.  
Open the '2-DT1extr Tristram.bat' and make the following changes to the command line (dt1extr objects.dt1 -pal d2pal\\act1.dat) save and close.

Now run the bat and it will produce 3 files

objects-fs.pcx  
objects-wu.pcx  
objects.ini

\-fs stand for 'Floor Static'  
\-wu stand for 'Walls Up'  
ini is a sort of a dump of the other data that the dt1 have, but that we  
Can’t draw on a bitmap. Like tile's sound, floor flags, orientation...

Step2

Open the objects-fs.pcx file using PSP

Then from the tool bar select color/edit palette opening the plate edit window. Select the palette index 0 entry the top left double click it opening the color submenu. index 0 is currently set to #616161 (97/97/97) change this to #00FFFF (0/255/255)

Step3  
Then from the tool bar select color/load palette locate the directory you used to hold D2\_pal\_for\_psp. Select d2-act0 save and exit. Choosing the 'Nearest color matching' option is the best method.

Step4  
Repeat process on the objects-wu.pcx

Step5  
Now we need to edit the 3-DT1make Tristram.bat  
Change the command line to (dt1make objects.ini) save and exit  
Run the 3-DT1make Tristram.bat repacking the file objects.dt1.  
This produces a file named 'NEW\_objects.dt1'.

Step6  
Place 'NEW\_objects.dt1' into the data\\global\\tiles\\act1\\town and rename file to objects.dt1.

This file now can be used in any act.

Special thanks to Paul Siramy for providing the tools and information needed to write this tutorial.
