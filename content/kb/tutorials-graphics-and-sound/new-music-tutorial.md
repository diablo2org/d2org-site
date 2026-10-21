---
title: New Music Tutorial
summary: >-
  Since a few things have changed since the last music tutorial (mainly, the
  discovery of the extendibility of SoundEnviron.txt and Sounds.txt) and
  numerous new levels appear at an incredible rate…
keepId: 421
author: Nefarius
credit: by Mentor
posted: '2007-05-04'
views: 8389
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=421'
---
Hail to you, champions!

Since a few things have changed since the last music **tutorial** (mainly, the discovery of the extendibility of SoundEnviron.txt and Sounds.txt) and numerous new levels appear at an incredible rate (thus increasing the need for new music, as new levels should use the same old scarce sound collection) I thought I would gather some info and assist as many as possible in adding new music to their mods.

Level requirements: -75%

Items required:  
Spreadsheet editor any available on the PK File Center  
Sound converter [http://nch.com.au/switch/index.html](http://nch.com.au/switch/index.html)  
Olly Dbg [http://www.ollydbg.de](http://www.ollydbg.de)  
Sounds.txt  
SoundEnviron.txt  
Levels.txt

1\. Editing D2Client.dll

Don’t freak out!  
First, backup your D2Client.dll.After that, open your Olly Debugger and press F3. This will open a dialogue box, named Open 32-bit executable. Choose and open your Diablo II directory (from the Look In pick-list), choose Files of type \*.dll, and then choose and open D2Client.dll.  
You will get a Request to load DLL. Just press OK.

You are now ready to edit your dll. In the upper-left side of the window you will see the addresses. They look like this:

6FB61C25                              |. 8B75 0C                      MOV ESI,DWORD PTR SS:\[EBP+C\]  
6FB61C28                              |. 57                           PUSH EDI  
6FB61C29                              |. 8B7D 10                      MOV EDI,DWORD PTR SS:\[EBP+10\]  
6FB61C2C                              |. 85F6                         TEST ESI,ESI  
6FB61C2E                              |. 75 09                        JNZ SHORT D2Client.6FB61C39  
6FB61C30                              |. 833D FC30BC6F 00             CMP DWORD PTR  

Now, open this link: [https://d2mods.info/forum/viewtopic.php?p=200625](https://d2mods.info/forum/viewtopic.php?p=200625)!

You here have the addresses where we’ll do the editing. Kingpin tells us where to go inside D2Client: 6FB55418, 6FB52A65, 6FB54EBC and 6FB56070. Copy 6FB55418, go to Olly Dbg, place and press your mouse pointer inside the address section and press Ctrl+G. Inside the dialogue box that pops up paste the expression. Now that you got there, right click, and from the pop-up menu that comes up choose Assemble.  
The value that you will add depends on how many music pieces you want to add. The last unmodded music piece has Index 4698 and the following music pieces must follow immediately and uninterruptedly after this index (i.e. 4699 to x, x = last song index). So, keep this order!

Let’s say you want to add music from 4699 to 4730 (32 pieces- that’s plenty of music!). Open the Win calculator in Scientific mode and enter 4730 in dec and then switch to hex. You should have 127A. This will tell the game the last music piece index that will be usable is 4730. Any value greater than 4730 will not be used.

So, after choosing Assemble you will get this: CMP ECX,125A. Replace ONLY 125A with 127A and don’t press Assemble twice! After assembling, close the window. You can now replace 125A at the other three addresses in the same manner.

Sweating already? ![icon-twak.gif](/kb/img/d2mods.info/forum/images/smiles/icon-twak.gif)

You will now save your changes like this: right-click in the address field, choose Copy, then Select all. After the selection has been made (it will turn grey), right-click, choose Copy to executable, then Selection. Right click again on the windoow that will appear and, finally, choose Save file. File name will be D2Client.dll and you will accept the overwrite. Close your Olly Dbg.

The hard (code) part is finished.

2\. The sound conversion

After installing Switch on your computer run it and you will see why I reccomend. It’s user-friendly and very intuitive.  
Now, set Output format to .wav, Output folder to the one of your choice and, most important, set Encoder Settings: Name – leave None, Format – PCM and Attributes – 22.050 kHz, 16 bit, Stereo 86 kb/sec. Validate changes.

Press Add file, choose your favourite music piece and then press Convert. Your music file will be saved in your chosen directory. Go there and rename it to “test1.wav”. Now copy this file in Data\\Global\\Music\\Act5. If you don’t have it, create it.

Done here, too!

4\. SoundEnviron.txt

In a spreadsheet editor of your choice open SoundEnviron.txt. Add a new row. Copy the ESOUNDENVIRON\_CRYPT line (line 6, index 5, song 4658) and rename it to ESOUNDENVIRON\_MOD1, change index to 50 (next available) and Song to 4699 (the song Index you will use)Ready! Close.

> **Tip:** you should match the environment type of your new level with the environment type you copy lines from. In our example, we cloned a crypt environment and you should you use it for a dungeon, not a wilderness level. Imagine hearing water dripping with an echo in the desert! This should be done too make the game realistic and to induce a certain atmosphere, a certain feeling to players. I think incompatibilities between level type and environments would distract players, so try to match them. Note that I’m not mentioning anything about the songs, as they are your own choice, as SoundEnviron.txt controls not just songs, but mostly environmental fine tuning, like material, room size, reverberation and air dampness etc.

4\. Sounds.txt

Now open Sounds.txt, add a new row at the bottom, copy the music\_crypt row (row 4659, index 4658), paste it at the bottom and rename music\_crypt to music\_mod\_1 and change Index to 4699 (next available). Under FileName write your file name and containing folder: act5\\test1.wav. Save and exit.

The following entries must take next available indexes for both Sounds.txt and SoundEnviron.txt! Names don’t matter (as the game checks for indexes), but you should name them in some order, just for tidiness’ sake.

> **Tip:** as you have noticed, I chose the music row that corresponds to the environment. The song index (4658) is the link. I did this, as there are some additional settings to the sound, so it wouldn’t hurt to do this, as those settings are there for a reason (unknown, yet).

5\. Levels.txt

Open Levels.txt, go to the Harrogath row (row 111, level ID 109) and change SoundEnv to 50. Save and exit.

Enter the game, go to Harrogath and enjoy your new music piece!

6\. Recap:  
A. Decide last song index, convert it to hex and make the changes in D2Client.dll!  
B. Format .wav for music, 22.050 kHz, 16 bit, Stereo!  
C. Add music rows in Sounds.txt and SoundEnviron.txt in a stream, without interruption!  
D. Give next available indexes for environments and music!  
E. Value in Song column in SoundEnviron.txt equals value of Index column in Sounds.txt!  
F. Match your new level type with the environmental sounds!  
G. Send me an Easter card! ![icon\_wink.gif](/kb/img/d2mods.info/forum/images/smiles/icon_wink.gif)

I know we’ll probably hear “Dancing Queen” in Catacombs Level 4 or “YMCA” in Chaos Sanctuary, but it’s worth the risk! ![newicon3-devilsmokin.gif](/kb/img/d2mods.info/forum/images/smiles/newicon3-devilsmokin.gif)
