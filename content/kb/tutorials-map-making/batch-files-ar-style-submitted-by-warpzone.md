---
title: Batch Files AR-style (submitted by WarpZone)
summary: No need to mess with overwriting Patch_D2.mpq in Windows!
keepId: 331
author: WarpZone
posted: '2005-09-13'
modified: '2018-01-06'
views: 6467
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=331'
---
> **Note:** I

run Diablo II LOD 1.10 on Windows 2000. I'm not sure if this  
techniquewill work on other operating systems or other versions of  
Diablo 2, but I suppose it might.

I recently played the mods Ancestral Recall and Nezeramontias, and I noticed that was that AR was much simpler to install and run than Nez.

After reading the Evil Englishman's excellent article, which does a great job of explaing what Batch files actually are, I decided to take a look at AR's  
batch file to figure out why it was able to just run off the cuff with  
just one BAT, while its counterpart needed 2 BATs and an extra step by  
the user.

The secret is, Ancestral Recall uses a different technique. It does  
not put any files into the Diablo2 folder. Instead, it has its own  
subfolde rin the Diablo directory. So if your directory structure is:

C:\\Diablo II

All the mod's files, including patch\_d2.mpq, reside in

C:\\Diablo II\\AR

The batch file does NOT rename any files in the Diablo2 directory or the AR directory when executed. Instead, the inside of the batch file looks like this:

@echo off

Path ..  
game

That's IT! Just those three lines! I don't know anything about what  
the individual commands mean, but I can tell you how it works by  
watching what it does. The Path.. line tells Windows 'Use the directory  
that this sub-directory is in.' In other words, C:\\Diablo II. It then  
runs C:\\Diablo II\\game.exe, but it does so while refering to C:\\Diablo  
II\\AR\\patch\_d2.mpq for game data instead of C:\\Diablo II\\patch\_d2.mpq.

Using just the rudimentary knowlege in the Evil Englishman's tutorial, I was able to move the Nezeramontias files into their own sub-directory of Diablo II, copy AR's  
batch file, and rename the mpq file to patch\_d2.mpq. Then I run my new  
BAT file, and viola! The mod loads up and runs perfectly. Only now, I  
don't have to worry about running winnezinstall.bat and  
winnezuninstall.bat. I just navigate to the subdirectory of the mod I  
want to play, and run the single bat file and the game starts right up.

I have no idea if things work the same way on a Mac, but as long as  
both systems use BAT files the same way, I suppose it should.

I personally like this method a lot better than EE's technique, and  
I would like to see more mod authors start using it. It makes the mod  
easier to run and prevents me from accidently running the wrong batch  
file and getting the wrong version of patch\_d2.mpq backed up as the  
default. It also keeps the Diablo II main directory nice and clean, and  
seperates game content on a mod-by-mod basis, for easier editing of  
more than one mod at once.

I hope you found this article helpful!  
Thank you for reading it. If anyone has any comments, or if you know a  
downside to this technique I'm not aware of, or if you know it doesn't  
work for mac users or older versions of Diablo 2, please let me know so  
I can update this article.

Happy modding!

EDIT: running this type of mod in -direct -text mode to compile your txt files into bin files seems to be a problem. I didn't realize this yet when I wrote the article. It looks like you might need to edit your mod using the diablo II main directory, and then just distribute it in its own folder like this.

I'll bum around the forums and see if I can figure out an easier way. Thanks for your patience!
