---
title: Adding new monsters with new tokens (by I_Burner)
summary: >-
  This tutorial explains how to add new (not replace) monsters to the game using
  new animation tokens.
keepId: 168
author: Alkalund
posted: '2004-08-19'
modified: '2024-11-04'
views: 20877
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=168'
---
**Adding new monsters with new tokens**  
**\- by I\_Burner**

(tutorial version 1.01, November 23, 2003)  
When I first started modding, my main interest was in adding new monsters to the game, but I wasn't content with simply replacing D2's existing monsters with new graphics. The release of the 1.10 patch allowed us to expand monstats.txt, so I finally got my wish! After a bit of searching, I was able to figure out all of the techniques needed to do this, but I couldn't help but think how nice it would have been to have had a simple walkthrough on the subject. So this one's for all you newbies out there, to get you out there and killing new creatures as quickly as possible. :)

First off, this tutorial DOES NOT explain animation conversions, and assumes you already have DCC ready to go. If you have no idea what I'm talking about here, you should read the Animation Conversion Tutorial available in the Resources section of the file center.

On to business:

For this tutorial, we will need the following tools:  
\- Beginner's Toolkit (Darkstorm's Table Editor, MPQView)  
\- animdata\_edit  
\- D2Excel or other spreadsheet program

Files we will be using:  
\- monstats.txt  
\- monstats2.txt  
\- Levels.txt  
\- MonTypes.txt (optional)  
\- animdata.d2  
\- whatever .tbl file you prefer to use  
\- appropriate DCC and COF files for your new monster

**TXT editing**  
To get started, open up monstats.txt in your spreadsheet program. You can start from scratch if you wish, but you are less likely to run into problems if you copy the stats of a monster that is similar to what you wish to create. Add a new row at the bottom of the file, and copy the stats you wish to use (if you're not starting from scratch). It is very important to only add and remove lines from the **END** of this file only. Inserting lines or removing them from anywhere else, **even from within lines you've added yourself** will result in some very strange and undesireable effects.

In the first column, 'Id', enter the name you wish to use to reference your new monster in other files. We'll use 'newmonster1' in this example. The next coluimn,'hcIdx', is the 'Hard Code Index' used by the game. Set this to the next unused value in the list. Your monsters may not work properly if you use numbers that are out of sequence or are already in use. Next is 'BaseId'. This is the 'Id' value of the lowest form in a series of monsters, in this case 'newmonster1' since we haven't added any other monsters in this class yet. 'NextInClass' is our next coulmn. This would hold the 'Id' value of the next monster in the series. Since our 'newmonster1' has no others in it's class yet, just leave it blank for now. 'Translvl' deals with which palette in the palshift.dat is applied to the monster. If you don't have a custom palshift, just leave it set to 0. 'NameStr' is the next important entry we need to be concerned with. Enter whatever you wish here. This is the String Key that you will need to create an entry for in your .tbl file. 'MonStatsEx' is the row in monstats2.txt that your animation will use. You may set it to the 'Id' value of an existing monster similar to the one you are creating if you don't wish to edit monstats2.txt. However, if you plan on altering things like light radius or blood effects, you will need to make an entry in that file. In that case, set this value to the 'Id' value of your new montser ('newmonster1'). Skip over to 'MonType'. Here, you will need an entry from MonType.txt. You may either create a new type for your monster, or pick from one of the existing types in Montype. If you choose to use a new type, make sure you define it in Montype.txt before you load the game! Next is 'AI', which is possibly the most important entry you will need to make. Enter the AI type of the monster that most closely fits the type of behavior you want your new monster to exhibit. Keep in mind that some AIs use animation modes that may not be present in the custom animation files you are adding (like BL or RN). It may be necessary to go back and adjust your monster to avoid using these missing animations, or even to pick a new AI. More on this later. Move over to 'Code'. This is the monster token you will be using for your animations. Since this tutorial is for creating a new monster with a new token, pick something that hasn't already been used. The Keep has a list of every used token that you may check against if you wish. It is also possible to avoid token conflicts completely by using non-alphanumeric characters in your tokens. We'll use this method for our 'newmonster1', and choose '!A' as our token. Next, set 'enabled' to 1. Skip all the way over to 'isSpawn', and set that to 1 as well. The only other critical setting is the very last column, 'eol'. Enter a 0 here, unless you are purposely trying to crash the game. Editting the rest of the stats is entirely up to you. I think this section of the tutorial is detailed enough without walking through EVERY column in the file! Save monstats.txt and place it in your mod's 'excel' directory (or pack it into your Patch\_D2.mpq, if you prefer).

Now, open monstats2.txt, if you wish. Add a new row at the bottom, and add the 'Id' value of your monster in the first column ('newmonster1' in this example). Remember, this is the entry you made in the 'MonStatsEx' column of monstats.txt. You can do this the hard way and add every value manually if you wish, but it's much faster to copy the entire row for a monster that is similar to the one you are creating and simply rename the first column. This step is completely optional, and you only need to do it if you want to adjust things like the light radius and bleed effects. When you are ready, save the file and add it to your mod.

If you created a new 'montype' entry for your monster back in monstats.txt, you will need to define it now. Open up MonType.txt and add a new row. In the first column enter EXACTLY what you entered for your monster in the 'montype' column of monstats.txt. Set the other columns to whatever you wish, but be sure to put a 0 in 'eol'. Save the file and add it to your mod. If you used an existing montype for your monster you may skip this step.

One more thing to do in the txt files before our monster will work. We need to tell the game where to spawn it. Open up Levels.txt, scroll over to the 'mon' columns of the level you wish to have this monster appear in, and enter its 'Id' value from monstats.txt ('newmonster1') to one of these columns (it doesn't matter if you add it to an empty column or replace an existing monster). Save and add it to your mod when you're finished.

We're done with the txt entries we need to make the monster work.

**Defining the animations**

In you mod directory, create a folder called 'monsters' in the 'global' directory. Enter this and create another folder with your monster's token as its name (remember we were using '!A' for this tutorial). Create two more folders in this directory, named 'TR' and 'COF' respectively. Place all your DCC files in the TR folder, and all of your COF files in the COF folder (your palshift.dat goes in here, too, if you're using one). Make sure that the files are named correctly and begin with your new token. Read the Animation Conversion Tutorial if you don't know how to do this.

In the event that you are adding animations that were edited to replace an existing token, and therefore do not have COF files, you will need to extract them. Using MPQView, find and extract all the COF files for the token that your animation is intended to replace, and save them in the COF folder in your new token ('!A') directory. Rename them so that the first two letters are replaced with the new token code.

All that's left now is to add entries to animdata.d2 to get your animations working. Start animdata\_edit and open up your animdata.d2 file. Use your spreadsheet program to open the txt file it generates. If you are using custom COFs, add entries at the bottom of the file using the new monster token. If you are advanced enough to have created your own COF files, you most likely already know how to do this. If you are using COF files converted over from an existing token, you can simply search out the corresponding entries, paste them at the bottom of the file, and change the token code to our new token in each entry. Save and repack the file, then add it to your mod (put this directly in the 'global' folder). You should be just about ready to go now!

**TBL editting**

One last thing to do before firing up the game.... Use the table editor and open up whatever TBL file you are using for your mod. Add a new key entry, and type in EXACTLY what you entered into the 'NameStr' column in monstats.txt. Then, type in what ever name you want to be displayed when you encounter your new monster. Save the file when your done, add it to your mod, and you are ready to go!

**Troubleshooting**

Monster doesn't appear at all, or a different monster keeps showing up: This could be several things, usually txt related. Make sure that the 'hcIdx' entry for your monster is an unused value, and that all values for any custom monsters above it in the monstats.txt file are unique and sequential. This sometimes causes incorrect monsters to appear, or for no monster to appear at all. Also double check all of your txt entries. Occasionally, a wrong entry may prevent the game from using your creature. Make certain you haven't inserted or deleted rows from anywhere but the end of monstats.txt! Doing so may cause the game to display whatever monster had previously been in the row you are trying to spawn from, even if that monster was deleted! Don't ask me how the game does this, but it happens. Just make sure you avoid this at all costs! Finally, check how many other monsters are set to spawn in that area in Levels.txt. Most levels are set to spawn only 3 types of monsters, and will pick randomly when there are more monsters available in Levels.txt. You may either adjust the number of monsters set to spawn, or simply remove the competeing monsters from the field while you are testing.

Sounds and light-radi are pesent, but there are no graphics whatsoever:  
This is probably an issue with COFs, DCCs, or the animdata. Check to make sure everything is edited properly and that all files, folders, and entries utilize the same (and correct) token.

Animations flicker or dissappear altogether after working briefly:  
This means one of two things: Either some of your COFs, DCCs, or txt and animdata entries are wrong, or you are using an AI that has animation modes that your custom animations do not have. Double check your files and how the are named. If this doesn't work, alter the entries in monstats.txt to remove any references to sequences or animation modes that may be missing in your animations. If this fails as well, you should try changing the AI. It seems that some AIs simply will not work with every animation. Simpler AIs, such as the Pinheads and Yetis, use fewer animation modes, and may allow you bypass these problems. In some cases, you might try cloning existing animation modes to make up for the missing ones (for example, copying A1 to make a missing SC). Of course, you will need to copy COFs and alter animdata entries to make this work.
