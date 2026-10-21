---
title: Sounds.txt
summary: >-
  Sounds.txt is a pretty imposing file with 25 columns and more than 4500 rows.
  It is one of the most important files in the game, being referenced by almost
  every other file & the game code. It…
keepId: 475
author: HarvestWombs
credit: by Drac0
posted: '2019-12-14'
views: 5210
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=475'
---
**Sounds.txt File Guide \[D2 v1.1x\]**  
By Drac0  
v1.0, 12 Oct 2011

Sounds.txt is a pretty imposing file with 25 columns and more than 4500 rows. It is one of the most important files in the game, being referenced by almost every other file & the game code. It contains the settings for all sounds within D2.

It is easy to add to/change almost any sound in the game with this file but _**NEVER INSERT BETWEEN OR DELETE ANY OF THE ORIGINAL ROWS**_. Doing so will cause major problems with hardcoded references to various sounds. Always add rows to the end of the file for additional sounds, even if it means copying original rows as well to get things to work the way you want.

If you do make changes to this file you need to ensure the txt file is included in the mpq (as well the bin) as this is used as a raw file.

**Sound:** A string reference to the sound. Used by most text files to determine the correct row for the sound to be played. Performs the same function as the Index column. All entries in this column must be unique.

**Index:** ID number of the sound. Same function as 'Sound', used to identify a row. Some text files (SoundEnviron.txt for example) & the code use this instead of the 'Sound' column. If you add rows, the index numbers need to be consecutive.

**FileName:** The path to & name of the wav file to play. All paths are relative to data/global/sfx folder.

**Volume:** Simply the volume of the sound - 0 = muted to 255 = full volume.

**Group Size:** The number of wav files contained in a group. A group is a collection of sounds connected to the same event. 0 = single sound or is part of an already specified group. See Appendix A for full details on how groups work.

**Loop:** Boolean (0/1). Is the sound played once or in a continuous loop. 0 = play once, 1 = loop.

**Fade In/Out:** Duration for fading the sound in/out. 0 = no fade.

**Defer Inst/Stop Inst:** Boolean (0/1). Controls what happens when the sound overlaps with a previous instance of the sound. Does it keep the previous going or stop it & start again.

**Duration:** Length of time to play the sound.

**Compound:** Controls the overlap of sounds from the same group. Will not start a new sound if the previous one started within the compound duration period.

**Reverb:** Boolean (0/1). Determines if reverb effect is added to the sound.

**Falloff:** How quickly the sound attenuates with distance (inverse). Accepted values are 1 to 4.

**Cache:** Boolean (0/1). Used to cache frequently used sounds. 0 = not cached, 1 = cached

**Async Only:** Boolean (0/1). Basically sets the importance of sounds. 0 = always play sound, 1 = skip sound if it can't be loaded in time.

**Priority:** Controls the order sounds are dropped if too many are playing at once. A higher number here will keep playing while lower numbers are stopped.

**Stream:** Boolean (0/1). Is the sound streamed or loaded fully before playing. Set to true for things like background music. 0 = don't stream, 1 = stream.

**Stereo:** Boolean (0/1). Is the sound mono or stereo. Set to true for music & false for everything else. 0 = mono, 1 = stereo.

**Tracking:** Boolean (0/1). Is the sound stationary or does it move with the unit it is attached to. 0 = stationary, 1 = moves.

**Solo:** Boolean (0/1). If set to true (1) all other sounds stop while this is one is played.

**Music Vol:** Boolean (0/1). Sets wether the sound is affected by the music volume setting in options, ie: is it music or a sound effect. 0 = no, 1 = yes.

**Block 1/2/3:** Offsets in the sound files for looping of music.

**Appendix A - The Group Column Explained.**

The easiest way to explain this is by example.

In MonSounds.txt there is a single entry for Andariel's Attack1 (andariel\_attack\_1). If you look for this row in Sounds.txt (Index 439), you will see the next 3 rows are andariel\_attack\_2, andariel\_attack\_3 & andariel\_attack\_4. These 4 rows form a group, so the andariel\_attack\_1 row has a 4 in the group column. This tells the code to randomly select a sound effect from one of these 4 rows (the original row plus the following 3). Only the first row of a group has an entry in this column, all others are 0. There are groups of up to 8 in this file, I don't know if you can have more.

All this means you only need a single entry in the referring file/code to have random sounds played.

_**NOTE: If you want to ADD sounds to a group, do not try to insert a row (or delete one for that matter). This will screw up hardcoded references to the index. If you want additional sounds, you should copy the originals to the end of the file, rename them, give them new Index numbers & then add your new sounds after them, changing the reference in other files to match the new entries in the Sound/Index column.**_

**Thanks to:** Myhrginoc & Isolde for the information collected for the v1.09 file guide.  
Necrolis for clarification of the txt/bin for this file.

**_Comments & corrections welcome!_**

Edit 17 Oct 2011: Added info on packing txt file into mpq.
