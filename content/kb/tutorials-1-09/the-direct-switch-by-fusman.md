---
title: The Direct Switch (by Fusman)
summary: >-
  Tutortial explaining how to use the direct switch to create/test mods without
  repacking the MPQ.
keepId: 158
author: Phrozen Heart
posted: '2004-10-08'
views: 8196
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=158'
---
Most D2 mod makers are used to using mpq editing to make and distribute mods. This is what most mod makers know how to do and is usually the first thing you learn as a newbie, I even made a tutorial way back to help newbies do just this. But there is another way to make and distribute mods, one that I find to be better than inserting files into mpq files, and that is the -direct method. Basically this works by creating the directory structure found inside mpq files in your diablo 2 directory. Lets say your diablo 2 directory is C:\\Diablo II, then you put your modified files into directories like C:\\Diablo II\\data\\global\\excel\\armor.txt.  
To run diablo so that it uses those files you change the shortcut on your desktop to look like this

![](/kb/img/dynamic6.gamespy.com/-phrozenkeep/tutimages/directtut.gif)

You right click on the shortcut and select properties to get this window. Then you add -direct -txt to the Target line like you see in the screenshot. Lets say that you added a modified armor.txt to the C:\\Diablo II\\data\\global\\excel directory and all you did was make bone helm have 50-100 in defense, then whenever you run the game from that exact shortcut it would use that armor.txt and not the one in patch\_d2.mpq or d2exp.mpq or even d2data.mpq.  
Using this info we can go a step further. Keep your original shortcut just as it was (that is, without -direct -txt) and make a new shortcut to the diablo II.exe file. Call the shortcut whatever your mod is called, like Werzion X in my case. Then this new shortcut looks pretty much like this

![](/kb/img/dynamic6.gamespy.com/-phrozenkeep/tutimages/directtut2.gif)

And now you have this on your desktop

![](/kb/img/dynamic6.gamespy.com/-phrozenkeep/tutimages/directtut3.gif)

Two shortcuts, one of them would run LoD without any modifications, but the Werzion X shortcut would run the game with the modified armor.txt.

OK, now we know we can have 2 different shortcuts, one to run original LoD and the other one to run a modified LoD. But what about if you have many mods installed ? You cant just keep putting stuff into the same \\data\\global\\excel directory could you ? No, because the game would use all the txt files in there and you would have a mess of mods showing up. But There is a nice solution to this that allows you to have as many mods installed as you want and each one with it's very own shortcut.  
The trick is the 'start in' line in the shortcut property window. Unmodified it just reads C:\\Diablo II, but what if I would install the modified txt files from Werzion X to C:\\Diablo II\\**mods\\werzionx**\\data\\global\\excel and then run the game with that Werzion X shortcut from above ? Well that wouldnt work because the game would just go straight into the C:\\Diablo II\\data\\global\\excel folder and use whatever txt files it could find there. But like I said the trick is to change the 'Start in' line in the shortcut property window to read:

![](/kb/img/dynamic6.gamespy.com/-phrozenkeep/tutimages/directtut4.gif)

I've added **\\mods\\werzionx** to the 'Start in' line. Now you need to put that modified armor.txt into the  
C:\\Diablo II\\**mods\\werzionx**\\data\\global\\excel directory. This way you can make as many directories as you want in the C:\\Diablo II\\mods directory like mods\\8play and mods\\Mymod and all you need to remember is to change the 'start in' line to read whatever you chose for your mods, and add -direct -txt to the 'target' line.

Now we know that we can have as many mods installed as we want but how do mod makers that want to use the -direct method distribute their mods so that mod users can install them without making all these directories and such and such. Well that's not real hard, just download installer programs like [Install-Us](http://www.install-us.com) ( that's what I use ). That program can pack all your modified files with the directory structure into one neat exe file that the user just runs to install the mod. The program also makes those clever shortcuts that have the correct 'start in' parameter for your mod to work and the mod user still has his original shortcut to run the game unmodified. A good thing about that is when Blizzard releases patches, people just run the game with their original shortcut and download the patch from battle.net and your mod is not interfering with that at all like mpq mods do. And also your mod is not affected by the new patch, as long as Blizzard didnt make any radical changes to txt files in the patch like they did in 1.08.
