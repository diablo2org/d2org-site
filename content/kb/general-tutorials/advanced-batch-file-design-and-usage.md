---
title: Advanced Batch File Design and Usage
summary: 'Limited, but easy to use'
keepId: 450
author: Huzegun
posted: '2008-07-31'
modified: '2018-01-06'
views: 8573
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=450'
---
**Advanced Batch File Deisgn and Usage V. 1.00**  
_By Huzegun, Intended for usage at The Phrozen Keep ( [http://www.d2mods.com/index.php](http://www.d2mods.com/index.php) )_

Now then, I am fully aware there is already a batch file tutorial on this wonderful site, but it deals with the very basic and simple commands, which may not always suit your needs. It also only deals with non variable settings, such as given that the file is in the same directory as the batch file. I know a great deal more, and I may as well share my information so you don't have to gather it up.

## Index

_I - Dos Limitations ..._  
**1 - Setup**  
_1a - Objective_  
_1b - Set command & Usage_  
_1c - CD command & Usage_  
_1d - Null Modifier_  
**2 - First steps**  
_2a - Defining Varaibles_  
_2b - Making a mod installer_  
_2c - Making a mod uninstaller_  
**3 - Intermedaite section**  
_3a - Defining a Label  
3b - Goto Command - Indepth(er)  
3c - Error Checking - For Game.exe  
3d - Error Checking - For Patch\_D2.mpq  
3e - Error Checking - Installing/Uninstalling  
3f - Installing a mod that already has a install script  
3g - Multi Client version done easier_  
**4 - Advanced Tips and Tricks**  
_4a - Making a menu  
4b - Wild Cards  
4c - Mass Rename / Replace  
4d - Renaming Based on a varaible_  
**5 - Trouble Shooting**  
_4a - Uh-oh!_  
**6 - In conclusion  
7 - Contact  
8 - Previous Versions  
9 - Legal**

## I- dos limitations and advantages

Who are we kidding? DOS has nearly no advantages other than its easy to pick up and learn, and is very small. It can be edited and seen by others, so in a way, its the safest way to go, for it reduces the chance of viruses if you know what to look for. It only works on windows, is very limited and picky, and has no GUI, but is very efficient in what it does. Its a good language- if you can call it that- to start with, if you wish to become intimate with a computer before the time period of 1998, or have a problem with learning another language, such as Visual Basic or C++.

## 1- Setup

First off, you should know some basic commands.  
I'll assume you know Echo, Echo off, the @ modifier, Pause, copy, move, ren/rename, del/delete, and CLS. If you are not familiar with any of these commands, I suggest you see the other DOS/Batch file tutorial.  
**  
1.A OBJECTIVE-**  
What do we want to do? Most commonly, we will want to install and un install a mod. This can be done effectively and quickly, with error checking even, and I will show you how. This is a important part in designing any project, it lets you make certain adjustments as you move along and lay out a overall plan. First, however, we'll need to define some variables.  
**  
1.B SET COMMAND**  
The set command, allows us to input a custom variable and call on it later. I'll mention some ones that all computers have set, by default.  
_  
%SYSTEMDRIVE% & %HOMEDRIVE%_ This will automatically go to the drive that windows is currently running off of, either as a slave to or as a normal OS. It is normally C:. There may be differences between the two, but I've never seen them different.  
_  
%PROGRAMFILES%_ This is the directory of the program files folder on the drive that the OS is running off of. This can simplify things, if you don't already have a similar variable set.  
_  
%OS%_ This is a very self explanatory variable. It will give the current OS. If there is a known compatibility issue with one of your mods on a OS, or the commands on the shell script thereof, this can be used to not use the file at all.

## Using the set command

First, we will always have to define where our d2 is. Now, if you want to make a protected batch file, for whatever reason, and plan to publish it, then for flexibility's sake, make two files called Main.bat and settings.bat. Open settings.bat if your doing that, or just open your main file otherwise.

To define our folder, we will have to use the set command.  

## Set d2fold='%programfiles%diablo II'

_Note: '' Makes the spaces friendly to dos, because it hates spaces. Its absolutely anal about them._

From this variable, we can guess the rest. We know that by default, the game will be called 'Game.exe', and the .dlls will -Probably- be the normal files, so we don't have to define anything else.

## The /p switch

Put it after set and before the variable, and it will allow the user to set this variable.

1.C **CD COMMAND**  
This command is used to change directories, which makes it easier to rename files, move folders, copy folders, and such. It allows you to keep the batch file in one place, while it does actions in other places.

## Usage

**CD (Folder Name)  
CD (Full name)**

**Example**  
**CD Myfiles  
CD C:testmyfiles**

The first example, you will only move to myfiles if it exists, and is on the same folder the batch file is in. However, for the second, the batch file could be anywhere, but so long myfiles exists in the test folder on the C drive, it will go to it.

1.D **\>NULL MODIFIER**  
This is a useful modifier that makes the output of the command not seen, but may allow the command itself to be seen. This does not work on some commands (For some reasons).  

## Syntax

COMMAND>NULL  

## Result

NOTHING (Hopefully)

Go into your main.bat now (Or stay in it), and lets actually start the script.  
**  
2- FIRST STEPS**  
Now, its time to make a script with some girth to it.  
If your objective is to install a mod, then lets assume you've already made your mod.mpq, and you have a default .mpq in your d2 Root folder, just for the sake of the tutorial and my fingers. If your using the protected mention I said above, we'll have to call on that batch file to set the variables.

NOTE: If you are only going to use one batch file, you can ignore the next few lines.

## 2.a defining a variable

@CALL SETTINGS.BAT  
@echo off

This is what you should have if you are using the one-batchfile method:  
@echo off  
Set D2FOLD='%Programfiles%Diablo II' \[Or whatever you put\]

And like wise with the two batch file method:  
IN SETTINGS.BAT:  
Set D2FOLD='%Programfiles%Diablo II' \[Or whatever you put\]  
IN MAIN.BAT:  
@echo Off  
Call Settings.bat  
Now we will \*Assume\* That you have your customized MPQ in some sort of folder. Lets install the mod. We are going to rename the current file to a backup name, and then replace the blank space with our mod.

## 2.b making a mod installer

CD %D2FOLD%  
:: QUICK NOTE: CD changes the directory. If its a full directory, it can be used at any time to go to that folder, and if its only a folder name, it will go to that folder, if present.

Ren Patch\_d2.mpq Patch\_d2.backup  
:: Now that we have a backup, lets go get our mod

MOVE YOURFOLDERNAMEMod.mpq %D2FOLD%  
:: IF you have it in the same Folder, look below

REN mod.mpq Patch\_d2.mpq

Now its done installing. You may want to provide occasionally ECHO commands to remind yourself or another user whats going on. Using the Folder Variable method, we do not need this batch file in the Diablo II root folder! We can even have it in the temp folder or the desktop, and it will still work!

## 2.c making a uninstaller

Lets say your done with your mod, and now want to go back. Very simple. We just reverse what we've done.

Ren Patch\_d2.mpq Mod.mpq  
Ren Patch\_d2.backup Patch\_d2.mpq

Is all you need, and its uninstalled. To move it back into the folder, just add: 'Move mod.mpq FOLDERNAMEMod.mpq'

See!

Conlcusion of Chapter 2: This is the very basic. Move on if you want to learn more advanced stylings.

## 3- Error checking, intermediate methods

These methods are more advanced, and harder to get away with error free, but work well and can look alot better.

## 3.a defining a label

These are useful for just about anything.  
USAGE:  
:LABELNAME  
The shorter the better, oneword combos are best. Nothing else to it!

## 3.b goto command

After you've defined a label, you can goto it at any time with the command Goto.  
**Usage:**  
Goto LABELNAME  
**Result:**  
Will go to the label name, anything under it will be ignored.

## 3.c error checking for game.exe

Lets say sometimes you forget that you rename your game.exe(s), and need a reminder in your switcher when you do. Lets assume you've defined the D2 root folder, see above.

IF NOT EXIST (%D2FOLD%Game.exe) (Goto Missingexe)  
_... Script here ..._

:Missingexe  
Echo Your Game.exe isn't present-- Perhaps you've forgotten you've changed it?  
Echo Go take a look.  
Pause>Null  
exit

There, you should be able to decode what it does.

**3.D ERROR CHECKING FOR Patch\_d2.mpq**  
This is far more likely, lets say your in the middle of the modding process, and never quite manage to remember just when you've switched it. You can save yourself some time by making a batch file that does it for you, instead of navigating all of those folders. Again, we'll assume you've set echo to off, and you've defined your D2 Folder

IF NOT EXIST (%D2FOLD%Patch\_d2.mpq) (Goto Missingpatchfile)  
_... Script here ..._

:Missingpatchfile  
echo Your Patch\_d2.mpq is missing. You forget to switch from a mod? Perhaps, you just deleted it. Or its corrupt.  
Echo Either way, go take a look.  
Pause>Null  
exit

Again, very simple, and very usefull at times.  
**  
3.E ERROR CHECKING WHILE INSTALLING AND UNINSTALLING A MOD**  
This is alot more complex... Kinda. Depends on how many files you are moving and replacing, but I'll only show you one file checking, since this is already kinda long, and your attention span has already gone to go kill more zombies. From now on, I'll assume you've defined your d2 folder.

_... Your install script..._

IF NOT EXIST (%D2FOLD%Patch\_d2.mpq) (goto BackupFail)

:Backupfail  
Echo The backup Process has failed. Ensure that you have a normal Patch\_d2.mpq in your root folder.  
Pause>Null  
exit

This is useful to make sure that your mod doesn't overwrite your original Patch\_d2.mpq, and is best placed right after the rename, move, or copy command. The same principle can be used for the mod installation, giving the proper names are replaced, and you adjust the fail alertion.

## 3.f installing a mod that already has a install script

Lets say you've downloaded a mod, like TFW Awakening, which already has a mod switcher script, that isn't a .bat file at all. This is the absolute easiest to implement into your swticher, for all you have to do is run that!

I'll use that mentioned mod as a example.  
CD %D2FOLD%Awakening \[or whatever you have it installed in\]  
110-LaunchTFW.vbs  
(OR 111-LaunchTFW.vbs if you use that one for multi version clients.)  
And thats it! Of course, you may want to add echos, pauses, and exits or gotos, where fitting.

## 3.g multi client version switched easily

This is probably the biggest usage I have for this, to switch the version of D2 to fit the mod. Note, if you cople this with a mod launch/install, then you've got a good launcher, that can save you a good bit of time that you could use killing demons. We are going to use a simple principle, renaming.

CD %D2FOLD%  
Ren Game.exe Game.EXEBACKUP  
If not exist (Game.exebackup) (goto errorininstall)  
Ren \[Your Game.exe version\] Game.exe  
IF not exist (game.exe) (Goto errorininstall2)

> **Note:** In your erroininstall2 section, you might to want to rename the backup back to its original file name. I know DLLs are sometimes updated too, and if you have appropriate versions of those, you can do the same exact thing. Doing everything will take a while, and to make it error proof even more time, And making it so it can detect and fix errors, the most time. But error detecting mostly comes from if and if not exist commands, which I suggest you damn use.

**  
4- ADVANCED COMMANDS AND TRICKS**  
This is the level I'm at. I've already developed a rather fine switcher for my needs, which I have not yet made public for it only supports the two mods I actually play.

## 4.a making a menu

Now, if you are already familiar with DOS, and I damn well better hope so if your in here, then you should know that the old, easy way to make a menu no longer works with anything above XP! Fun, right!?  
But fear not, There is a easy way to make one still.

Echo.  
echo 1. Launch Vanilla D2  
echo 2. Launch Median  
Echo 3. Launch TFW: Awakening  
echo 4. Launch Eastern Sun  
Echo 5. Exit  
(And so forth)  
set action=  
(its always smart to make the variable open.)  
Set /p Action=\[1-5\]  
(This will prompt the user to select between 1-5)  
if '%action%'=='1' Goto Normallaunch  
if '%action%'=='2' Goto Medlaunch  
if '%action%'=='3' Goto Awakelaunch  
if '%action%'=='4' Goto easternsun  
if '%action%'=='5' (Echo Thanks for using!) & (Pause>Null) & (End)

That wasn't so hard, right? And again, you can edit it to your needs. Although, you've probably noticed what I did for if action =5.. you see that I did three commands on one line, instead of going to a section for ending. So long as the action is encased in Parenthesis (), and you have & after each one where there is one after it, you can have as many commands as you want on one line. I do not recommend this for debugging.

## Wild cards, mass renaming, and renaming based on a variable

Well, this is a useful trick. Lets say you've defined a variable for your folder (I'll assume modfold) And you've assumed a set of files for your mod, and you have a need to move all of the files in that folder to the d2 folder.

## 4.b wild cards

Wild cards, or \*, mean that ANYTHING can go there. For instance, \*.mpq will associate whatever the command is to all files in the current path that end with MPQ. You can see where I might be going with this...

## 4.c mass file replace/rename

useful if used with version switch- especially if you have a entire set of DLLs that need to be replaced, and can severely cut down command clutter.  
_  
CD %D2FOLD%  
Ren \*.dll \*.Backup_

You should experiment with move commands to get a very effective result. Lets say you have each of the different file versions in a folder respectively named...

CD %D2FOLD%  
Ren \*.dll \*.Backup  
CD 110  
Copy \*.dll %D2FOLD%\*.dll  
cd..

Also, if you use a popular Plugin Called PlugY, or any other plugin that happens to use a .dll or .mpq file, you can simply use a scricter filter...

CD %D2FOLD%  
Ren D2\*.dll D2\*.Backup

And Tah-Dah! Now only files that begin with D2 and end with DLL will be replaced! Isn't that so much better than naming each of them manually!  
This can be used with any file type with any name, so you can see how useful wild cards can be in the world of D2 Modding! Or even, how to back up any conceivable folder or file!  
**  
4.D RENAMING BASED ON A VARAIBLE**  
Sometimes there is a need to do this. Lets say your using a 2-3 batch file method (One to set variables, which can be edited, one for the core menus, and one for actions), and you have a file name set for your mod's mpq or otherwise filename. And you want to name that to be loaded into D2. No problem.

CD %D2FOLD%  
Ren Patch\_d2variablesbatch file.mpq Patch\_d2.backup  
Ren %MODFILENAME% Patch\_d2.mpq  
:: IMPORTANT!! YOU MUST Have the variable defined such as 'Mod.mpq' or 'mymod.mpq' so that it is a EXACT file name, not a relative, or only the file name! If tou use only the file name, you must add .mpq to the end of %MODFILENAME%! You also may want to add a if statement to check to see if this file even exists in the first place!

And your done. Simple, right? Same principles for folders, by the way. In my switcher, I make it so it switches to a different save folder for each mod, so I don't have to deal with wrong mod characters cluttering up my save folder screen. Lets see how that would work..

Ren Save Bsave  
ren %Modsavefolder% Save

::And after your game is done..

Ren Save %Modsavefolder%  
Ren Bsave Save

SIMPLE! As you can see, most of this stuff is really simple when you actually think about it logically.

**5- Trouble Shooting!**  
Uh-Oh! You've made your switcher, but a error happens, or suddenly it just quits! Well, lets do a common check.  
_5.A. 'The Window just suddenly quits.'_  
**HOW TO TROUBLE SHOOT:** Go to the start menu, hit run, then type in 'Cmd'. Navigate through the CD command to get to your file, and run it taht way, and you should get a error, which you can use to trouble shoot. It may help to turn echo on.

There is no B, because most of the time, that is it. If you get a error like 'Was not expected at this time', that means you've used a command wrong. Also, if it seems to quit during a echo command, ensure you do not have any characters it uses for calculating, unless you have a Karrat (I'm not sure what its called, but that's what a friend told me.) Before it. A '^'. I know that the '|' will crash it in a echo command, so use a ^| instead.

**6- In conclusion**  
Batch can be powerful for certain things, such as mass renaming, although it is severely crippled by its limitation of GUI and menu options. However, I prefer it for its simplicity, and so may you. For the sake of everything going right, I recommend after almost every file movement step you have a IF statement to ensure that this went OK, And to alert you if other wise. IF Not Exist coupled with Pause can be very useful for debugging. And thank you for reading this Tutorial!

**7- Contact**  
I can be reached a variety of ways.

_Huzegun@hotmail.com  
Huzegun@gmail.com  
Huzegun@yahoo.com  
Samsusfision@aol.com_

I read those emails in order of top to bottom. For Yahoo, just add the hotmail address, and for MSN, just add the hotmail address. Feel free to ask me productive and logical questions, with the title of 'MS DOS Help' Or something of that nature, or to add me to your MSN or Yahoo Instant messenger lists. Suggestions are also welcome.

**8- Tut Versions**  
_1.0 Released to the Phrozen Keep, initial everything._

**9- Legal**  
_None, really, just please do not copy any of this and say you did it. Thats what a douce bag does._
