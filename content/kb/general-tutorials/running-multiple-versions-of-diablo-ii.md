---
title: Running Multiple Versions of Diablo II
summary: Set yourself up to play any mod and still access Battle.net
keepId: 333
author: "\r\nMyhrginoc"
posted: '2007-04-18'
views: 35081
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=333'
---
The question has come up _numerous_ times: how do I run a mod for an older version of Diablo II when I am patched up to the latest version? That question has almost as many answers as there are Diablo II mods to play. This article will start out with solutions for Windows users, as that is the platform I know. Article feedback on anything I don't cover is greatly appreciated and would appear in future updates.

The first requirement is to have the resources for setting up all the versions you are interested in running. Most mods are for v1.10 final, but some popular mods still use v1.09b or v1.09d, and mods are appearing for v1.11. The latest version is v1.11b. You should have the CD-ROM's for Diablo II and Lord of Destruction; depending on when your CD's were released they would have v1.00 and v1.07 respectively or later. Then you need the clean patch files for each version, you can get them at [Blizzard's Diablo II patch site](http://www.blizzard.com/support/?id=adt0387p), our own [File Center](https://d2mods.info/forum/dload.php?action=category&cat_id=27), or other locations around the Internet that you trust. You will need to get a set of files for each version you want to run, but with careful file management you only need to to this once.

One method is to reinstall the game completely for each version, each into its own game directory selected at install time. The default directory suggested is C:\\Program Files\\Diablo II, so one way might be to incorporate the version into the game directory name, like 'D2v109d'. It is the least complicated method, but most wasteful of disk space. (It may be the only possibility for Mac users.) For Windows users, the game creates a number of entries in the Windows Registry, and each install will overwrite the previous install's settings. So the Registry will end up with your latest version installed and you will be ready for Battle.net. In the mod world, the most important setting for each version is the default save directory. (See the appendix for more Registry information.)

Most of the files in Diablo II and Lord of Destruction are static, and you don't need to change them. The files that do change between patches are those with new timestamps: patch\_D2.mpq, the DLLs, and game.exe. All of the other new files in your Diablo II directory are logs and other miscellaneous stuff. (The file diablo ii.exe is not the game executable and can be ignored.)

Now for the setup part. If you want to backtrack to previous versions, you need some clean files for each version. The painful way is to reinstall D2 and LoD, then patch your way up to the current version. Another way is to download Blizzard's unreferenced game.exe from the patch site, which will replace your current game.exe and allow using earlier patchers (back to v1.10 beta) on your current setup. A third way is to use a modding tool called an mpq extractor (I recommend [WinMPQ](https://d2mods.info/forum/dload.php?action=file&file_id=115)) and get a copy of game.exe right out of d2char.mpq --- v1.00 from the original Diablo II 'Play' CD-ROM, v1.07 from the original Lord of Destruction CD-ROM. File extraction is beyond the scope of this tutorial, but you can get details from The [Beginner's Guide to Mod Making](https://d2mods.info/forum/dload.php?action=file&file_id=1086), exercises #1 and #3. At each patch level, make a reference set of the files I mentioned previously and save them in their own directory. Also at each level, copy the game.exe file in the Diablo II directory and rename the copy something like 'game109d.exe', 'game110.exe', and so on---after all, you can't have them all have the same name in the same place.

Now you are ready to configure all these versions for the mods you are interested in. Each mod should have installation instructions, but in general there are two ways to set them up. The preferred method is to create a subdirectory for each mod under your game directory. This assures the mod files do not mix in and corrupt your Battle.net-ready installation. Some mods suggest or even require you install in your game directory instead, so be sure you have those reference sets safely stashed before installing any. Those mods require file swapping to switch between running the mod and running any other form of the game. You can create a subdirectory for even these mods, then move the DLLs and patch\_D2.mpq there. Also move any data subdirectory the mod install created, as some mods work on external files (also known as -direct -txt mode, see [The Direct Switch](https://d2mods.info/forum/kb.php?mode=article&k=219) tutorial).

Mods in their own directories may have some DLL files and patch\_D2.mpq already. If you are running an earlier version, you need all the DLLs and patch\_D2.mpq from your reference set as not already present. You can also copy that version's game.exe there. A complete set of clean patch files takes up less than 15MB, so many copies of these files won't chew up much drive space. Be careful not to \[i:030a3f30bc\]overwrite\[/i:030a3f30bc\] any files from the mod with files from your reference set!

How do we run the mods after they are set up? How do we keep character files from one mod away from all other mods or the unmodded game? You need mod management now. Newer mods come with a feature called plugY, which includes the ability to use and choose custom mod save directories (edit plugY.ini's save path for your own selection). The Keep also has a number of [mod management tools](https://d2mods.info/forum/dload.php?action=category&cat_id=16) on hand. The bare minimum is the mod shortcut shown in [The Direct Switch](https://d2mods.info/forum/kb.php?mode=article&k=219) tutorial. The Mod Running Script available in our management tools area and a Windows shortcut each need a little customizing if you have multiple gameXXX.exe files. Edit the Target field in a shortcut to have the proper gameXXX.exe name, or edit the path information if you put a game.exe in each mod folder. If you use the Mod Running Script, open the file in Notepad and edit the line D2CmdLine = chr(34) & D2Path & 'game.exe' & chr(34) & '-direct'\[/color:030a3f30bc\] and enter the desired file reference. Please note:\[/color:030a3f30bc\] the Mod Running Script will launch the version referenced in the Windows Registry, so if you have two or more complete installations the script will only work on the one installation with Registry keys.

Now you should be able to run each mod, and still access Battle.net with a clean and current version of the game.

---

\[align=center:030a3f30bc\]Acknowledgements\[/color:030a3f30bc\]\[/align:030a3f30bc\]\[/size:030a3f30bc\]

-   Fusman - the Direct Switch tutorial
-   Bonescythe & FoxBat - the original VB script I adapted for the Mod Running Script
-   MickyBIs - multiple version method I constantly refer to
-   Members of the Phrozen Keep - for continuing feedback, methods I have learned over the years, and some great mods!
-   Blizzard Entertainment - for the game that keeps on playing

---

\[align=center:030a3f30bc\]Appendix - Registry Settings\[/color:030a3f30bc\]\[/align:030a3f30bc\]\[/size:030a3f30bc\]

Blizzard uses the Windows Registry for a number of settings related to game configuration, Battle.net, and where your save files end up. We will focus on two settings here, the Install Path and the Save Path. Different versions of Windows, and different computer setups, may store this information in either or both of two places, HKEY\_CURRENT\_USER or HKEY\_LOCAL\_MACHINE. There are several keys which may or may not be on your machine:

HKEY\_CURRENT\_USER\\Software\\Blizzard Entertainment\\Diablo II\]'InstallPath'='C:\\Program Files\\Diablo II'

\[HKEY\_CURRENT\_USER\\Software\\Blizzard Entertainment\\Diablo II\]'Save Path'='C:\\Program Files\\Diablo II\\Save\\'

\[HKEY\_CURRENT\_USER\\Software\\Blizzard Entertainment\\Diablo II\\Save Path\]='C:\\Program Files\\Diablo II\\Save'

\[HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Blizzard Entertainment\\Diablo II\]'InstallPath'='C:\\Program Files\\Diablo II'

\[HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Blizzard Entertainment\\Diablo II\]'Save Path'='C:\\Program Files\\Diablo II\\Save\\'

\[HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Blizzard Entertainment\\Diablo II\\Save Path\]='C:\\Program Files\\Diablo II\\Save'
