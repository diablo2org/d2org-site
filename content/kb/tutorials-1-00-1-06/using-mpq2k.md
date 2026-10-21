---
title: Using MPQ2K
summary: >-
  Once you've made your desired changes, you need to re-insert your modded files
  back into your patchd2.mpq. For that you need MPQ 2K v1.x which is available
  from our tools of the trade section. There…
keepId: 406
author: Nefarius
credit: by Fusman and Phrozen Heart
posted: '2006-08-04'
views: 6815
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=406'
---
Once you've made your desired changes, you need to re-insert your modded files back into your patch\_d2.mpq. For that you need MPQ 2K v1.x which is available from our tools of the trade section. There is a v2.0 and beyond available but these are designed for use with Starcraft and will not work for Diablo 2. MPQ 2K is a DOS program so it's not as straightforward as MPQview. You will need to make some scripts for it to work which are just simple text files that tell the program what to do. The best way to use scripts is to make some .bat files to help out. For those of you who are unfamiliar with batch files click here for some assistance. To insert the file (for this example let's say the misc.txt file) into the patch\_d2.mpq you will need to make a script like this one:

---

O patch\_d2.mpq  
A misc.txt data\\global\\excel\\misc.txt  
C patch\_d2.mpq

---

Just open up notepad and make a file called mymod.txt. All your scripts need to start with the 'O' key which tells mpq2k to open an mpq file for editing. The 'A' key tells mpq2k to ADD misc.txt to the data\\global\\excel' directory. Make sure the files go back into the same path they were extracted from or they won't work. You can see what directory each file belongs to using mpqview. The 'C' key tells mpq2k to close the mpq. Save your script and call it mymod.txt.

Now for the bat file. Open notepad and write this:

mpq2k s mymod.txt

Save this file as mymod.bat. To save files as bat files you need to select 'all files' in the 'save as type' box. This bat file runs the mpq2k program with the 's' switch on to run that script called 'mymod.txt'. When you've made both the script file and the bat file just double click on your bat file and your misc.txt will be inserted into patch\_d2.mpq. Note that you have to have your original or the mpq file you want to modify in the directory also. Just copy your original patch\_d2.mpq to your mod making directory. Do NOT insert modified txt files into d2data.mpq, only use patch\_d2.mpq for modding. Make sure all the files you are working with are in the same directory. It's better to make a whole new directory for these modding files. Once you've inserted your misc.txt into patch\_d2.mpq you're done. Congratulations you've just made a mod.

IMPORTANT NOTE!

Since the release of the v1.08 patch, you will need to read this information unless your are creating a mod for a previous version
