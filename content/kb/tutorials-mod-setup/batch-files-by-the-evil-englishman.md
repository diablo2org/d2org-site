---
title: Batch Files (by The Evil Englishman)
summary: Tutorial explaining the usage of batch files in D2 modding.
keepId: 157
author: Phrozen Heart
posted: '2004-08-19'
modified: '2018-01-06'
views: 13497
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=157'
---
Back in the good old days of DOS, we had batch files that let us simplify certain tasks such as renaming a large quantity of files.

A BATch file is just TEXT, so open it in notepad or in DOS with edit.com.

There is no history lesson here, batch files are a kind of programming, for more information check out:

[Batch File Help](http://www.computerhope.com/batch.htm)

[The Ancient Art of DOS Batch Files](http://gatsby.tafe.tas.edu.au/batch/)

### Commands

```
@echo off ; turns off echoing to the screen so that you dont see the command
being issued, only the result.
echo Hello ; when used in conjunction with @echo off it puts the text onto
```

the screen like this:

Hello

if @echo off is not present then you will see:

c:\\echo Hello

Hello

```
cls ; clear screen
pause ; pauses the batch program and waits for user to hit a key
rename filename1 filename2 ; renames filename1 to filename2
copy filename1 filename2 ; makes a copy of filename1 called filename2
del filename1 ; deletes the file
```

You can also execute programs from a batch file, just put the name of the program in its own line like so:

mpq2k ; will run the program mqp2k.exe

### How to make a patch so that you can release it for public use

### Make a file called patch.bat and put the following 'code' inside of it

```
@echo off
cls
echo This mod was made by name@email.address
echo With this mod Diablo 2 will drop all unique weapons when a monster
is killed most of the time
pause
copy patch_d2.mpq patch_d2.old
mpq2k a patch_d2.mpq itemratio.txt data\global\excel\itemratio.txt
echo Patching complete!
```

an explination of the code above:

```
@echo off ; turns off echoing
cls ; clears screen
echo This mod was made by name@email.address ; shows who made this
echo With this mod Diablo 2 will drop all unique weapons when a monster is
killed most of the time ; tells what it does
pause ; waits for user to press a key, in this time they can close the
program so that it doesnt do any patching
copy patch_d2.mpq patch_d2.old ; backs up the original patch
mpq2k a patch_d2.mpq itemratio.txt data\global\excel\itemratio.txt ; runs
the program mpq2k and imports the new file into the mpq archive
echo Patching complete! ; tells user patch is done doing its work.
```

### Make a file called uninstall.bat

```
@echo off
echo this will restore your original patch file and delete any 'hacks'
you have enabled.
del patch_d2.mpq
copy patch_d2.old patch_d2.mpq
del patch_d2.old
```

Now when you want to release a mod all you have to do is release 2 batch files, an installer, and an uninstaller. Also the files that you want to add to the users MPQ file. For my all uniques patch i would have to release the following files:

patch.bat

uninstal\_all\_unique.bat

itemratio.txt

The USER MUST HAVE MPQ2K and STAREDIT in the same directory as diablo 2, so if they do not have it, they can just download the Diablo 2 Mod Creation

Kit. Also the user must unzip the patch to their diablo 2 directory and run it from there.
