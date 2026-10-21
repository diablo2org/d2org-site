---
title: BIN Files With v1.08 and Beyond (by ThresholdRPG)
summary: >-
  Tutorial explaining the introduction of BIN files in the v1.08 patch and every
  patch since.
keepId: 159
author: Phrozen Heart
posted: '2004-08-19'
modified: '2018-01-06'
views: 18795
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=159'
---
Beginning with the 1.08 patch, and continuing  
with the expansion, the process for re-packing files into your modded  
patch\_d2.mpq file has changed a bit. The game now reads .bin files that  
have been created from their associated .txt files. All is not lost,  
however, as we can use the game itself to create .bin files from our  
modified .txt files. The process is explained below. For the purpose of  
this FAQ, it is assumed you have Diablo2 installed in this directory:

C:\\Games\\Diablo2\\

If your location is different, simply substitute its path for the one above.

1) Make sure you have extracted the NEW and very different .txt  
files from the 1.08 patch\_d2.mpq file. Many of them have new columns  
and thus your old .txt files will NOT work.

2) Create the following subdirectory:

C:\\Games\\Diablo2\\data\\global\\excel\\

3) Edit all .txt files that you wish and copy it into the above  
directory. For example, if you were editing misc.txt, you could copy it  
over to:

C:\\Games\\Diablo2\\data\\global\\excel\\misc.txt

4) Pack the new, edited .txt files into your patch\_d2.mpq file as you normally would.

5) Copy your new patch\_d2.mpq file into your Diablo 2 directory (C:\\Games\\Diablo2\\).

6) Run the game with the -txt extension. This can be done in two ways.

A) In Windows, click on Start and then Run. Type:

'C:\\Games\\Diablo2\\game.exe' -txt

B)

1\. Create a shortcut copy of your Diablo2 icon on the desktop.  
          2. In the 'target' section, change it to this: 'C:\\Games\\Diablo2\\game.exe' -txt

Whenever you need to create .bin files, you can use either of the above methods.

7) You must actually load a game with a character. That is when the game actually generates the .bin files.

8) The process in step #6 will create the .bin files associated  
with your new .txt files. You now need to pack these NEW .bin files  
into your MOD's patch\_d2.mpq file.

9) You can now distribute your patch\_d2.mpq file in the normal  
fashion. Your mod users do not need to have subdirectories with .txt  
files in them, nor do they need to run the game any differently. They  
still, obviously, have to copy your patch\_d2.mpq file into their Diablo  
2 directory.

10) .dc6 and .tbl files can be packed into your patch\_D2.mpq file the same as before.
