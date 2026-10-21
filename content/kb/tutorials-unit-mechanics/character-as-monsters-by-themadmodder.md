---
title: Character as Monsters (by TheMadModder)
summary: >-
  This tutorial will show you how to make a player character into a monster
  using the character graphics.
keepId: 265
author: Phrozen Heart
posted: '2007-05-04'
modified: '2018-01-06'
views: 15314
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=265'
---
This tutorial will show you how to make a player character into a monster using the character graphics. For this tutorial we wil make the bowazon a monster.

This is my first tutorial and it is written in a very simplified way for people who have just the basic modding skills (like myself). A lot of it is explanations of stuff experienced modders already know and if my explanations are incorrect/incomplete please correct me. Everything can here can be found in various post and tutorials here at the Phrozen Keep but was never put together in one place.

Many thanks to the people who make the tools modders use and to those who take the time to post information and write tutorials for those of us who need it.

As my signature says it is all about the giants.

Part 1- What You Need  
\-Modding abilities needed:

\-text file editing  
\-extracting of files from the various MPQ files  
\-setting up and running a -direct -txt mod  
\-adding strings to table files

\-Tools Required:

\-MPQ View with the v1.10 data file  
\-A text file editor  
\-A table editor

Part 2- Get The Files

Using MPQ View extract the following files from the different MPQ files.

\-File- -MPQ File-

Levels.txt--patch\_d2.mpq  
Monstats.txt--patch\_d2.mpq  
Monstats2.txt--patch\_d2.mpq  
Montype.txt--patch\_d2.mpq  
Patchstring.tbl--patch\_d2.mpq

Remember to keep the folder structure that the MPQ files use and to place extracted files in their correct folder.

The .dcc files needed are too numerous to list here but are very easily identified and found.

Before we extract the .dcc files a note about how the .dcc file names are structured.  
example file: AMTRLITA1BOW.dcc  
What the different groups of letters mean-

AM - This is the token. Every character, monster and object has a  
identifing token.

TR - This is the body part animation.

LIT -This is the visual description of the body part.

A1 - This is the animation mode or better said the animation action.  
Refer to Monmode.txt and  
Plrmode.txt for all the modes and a description of the modes.

BOW - This is the base weapon type of this .dcc.

So now we can look at the example .dcc file and we know that it is the  
'amazons torso,lightly armored, when using her first attack with a bow'

All the amazons .dcc fles are found in the d2char.mpq. The path to these files is- data/global/CHARS/AM

In the AM folder are more folders each of these different folders represent a body part more or less.  
HD = Head  
TR = Torso  
LG = Legs  
RA = Right Arm  
LA = Left Arm  
RH = Right hand  
LH = Left Hand  
SH = Shield  
S1 thru S8 = Overlay1thru 8

We want to extract every .dcc file that ends in BOW from these folders.

Two additional .dcc files that we need that do not end with BOW but end with HTH are- AMTRLITDTHTH.dcc and AMTRLITDDHTH.dcc. These two files are the amazons dieing and death animations and as we can tell by their names they ae found in the TR folder.

Now we need to extract the .cof files. The .cof files are found also in the d2char.mpq file and the path to these files is- data/global/CHARS/AM/COF

We want to extract every .cof file that ends with BOW.

Again two additional .cof files that we need that do not end with BOW but end with HTH are- AMDTHTH.dcc and AMDDHTH.dcc. I bet you can guess what they are for.

So before we move on to the next part there are some .dcc and .cof files we need to delete (no need making the mod file size an bigger than we have too) We are deleting them because monsters do not use them. The animation modes monsters do not use are:

TN - Town Neutral  
TW - Town Walk  
KK - Kick  
The reasons we are deleting them are:  
TN and TW -These are the 'relaxed' versions of NU and WL.  
You have seen this many times and since monsters are not  
spawned in town we don't need them.  
KK - This is the animation used when a character kicks a  
barrel and have you ever seen a monster kick a barrel?

Now to the next part.

Part 3- Moving the AM Folder

Since our amazon is no longer a character and now is a monster we need to move her out of the CHAR folder. So make a new folder in the global folder of your mod and name it monsters. Now take the AM folder out of the CHAR folder and place it into the moster folder.

You have just changed the amazon into a monster.  
There is no need for making a new token nor any editing of any .cof files or the animdata.d2 file.  
How I love this new patch!!

Now on to the next part.

Part 4- File Editing

Using your favorite text file editor open Monstats.txt and copy the cr\_archer1 line to the bottom of the file. Now make the following changes to the following fields.

Id - enemyzon1  
hcidx - use the next available number  
BaseId - enemyzon1  
Nextinclass - Blank  
Translvl - 0  
Namestr - enemyzon  
Monstatex - enemyzon1  
Montype - enemychara  
Code - AM  
Rangedtype - 1  
Yes, I know Ranged type is already set to 1 but I have  
something to say about this field and it is very obvious. This  
field determines if the monster uses a ranged attack. A 1 =  
yes and Blank = no. If you make a Javazon for example the  
javazon can only throw her javelin or use it in melee but not  
both.  
Demon - Blank

**Save Monstats.txt**  
Open Monstats2.txt and copy the cr\_archer1 line to the bottom of the file and change the name field to enemyzon1.

A quick note about the BaseW field. This field tells the game which animations to use from the following folders for this monster. For a complete list of the different base weapon types to use in this field I refer you to the Animation Conversion Extended Tutorial.

Now scroll over to the HDv thru S8v fields. These fields represent the folders found in the AM folder. I assume the small 'v' stands for 'variations' because if you put every .dcc file variation into these fields our new enemyzon will have a chance, every time she spawns, to spawn with a different appearance .

So let us look in the HD folder of our enemyzon.  
What interests us is the visual description of the body part section of the file name. See Part 2 of this tutorial if you have forgotten what the different groups of letters mean.

Ok. We see our enemyzon can have several types of helms. If you want to know exactly what each one is, you can reference the armor.txt. You will find the three letter code in the code colum of armor.txt.  
\*Note- LIT is not a helm it just means 'no helm'.

Now look in the LH folder we see the different bows that our enemyzon can be equiped with just, like helms. If you want to know exactly what each one is, you can reference the weapons.txt. You will find the three letter code in the code colum of weapons.txt.

Looking in the remaining folders we find that we have only three variations-  
LIT- Light MED- Medium HVY- Heavy

Like I said before we could put all the variations in the HDv thru S8v fields but for this tutorial we want our enemyzon to look like a newbie so we enter in the following fields the following-  
HDv - lit  
TRv - lit  
LGv - lit  
RAv- lit  
LAv - lit  
RHv - Blank  
LHv - sbb  
SHv - Blank  
S1v - lit  
S2v - lit  
S3v thru S8v - Blank

The next set of fields HD thru S8 tell the game what body part folders to look in. So we enter the following-  
HD - 1  
TR - 1  
LG - 1  
RA- 1  
LA - 1  
RH - Blank  
LH - 1  
SH - Blank  
S1 - 1  
S2 - 1  
S3 thru S8 - Blank

Total Pieces - 8 (this is the total number of body pieces our enemyzon has)

Now the next set of fields mDT thru mRn. The small 'm' stands for mode. Again you can reference the Plrmode.txt and Monmode.txt for all the modes and their descriptions.

Looking in the different folders of our enemyzon we see what different modes are available, therefore-

mDT -1  
mNu -1  
mWL - 1  
mGH - 1  
mA1 - 1  
mA2 - Blank  
mBL - Blank  
mSC - 1  
mS1 - 1  
mS2 thru mS4 - Blank  
mDD - 1  
mKB - 1 (see below)  
mSQ -1  
mRN- 1

The modes that are listed above but do not appear in the .dcc's we are using are-  
A2 - Attack 2- How many ways can you shoot a bow?  
BL - Block- You need a shield to block.  
S2 thru S4 - Skill2 thru Skill4- Funny but the S1 animation is the same as the A1 animation. do we really need more duplicate files?  
KB - Knockback- Looking in the Plrmode.txt and Monmode.txt files we see that KB uses the GH animation. So Put a 1 here if you want your enemyzon to be able to be knocked back or leave it blank if you do not want her to be able to be knocked back.  
SQ - Sequence- IDK. Anybody?

Now the next set of fields dDt thru dRn tell the game how many directions the animation has. Since character animations have 16 directions put 16 in every single one of these fields.(Blizzard fills them up even if the monster dose not have the mode, so we will also)

Composite death - Blank  
Read this post for more info about the composite death field.  
[https://d2mods.info/forum/viewtopic.php?t=15905](https://d2mods.info/forum/viewtopic.php?t=15905)  
Save Monstats2.txt

Open Levels.txt  
Replace the fallen1 with enemyzon1 in the Wilderness 1.

**Save Levels.txt**  
Open Montype.txt  
Add a row to this file and in the Type field put enemychara. don't forget to put a 0 in the EOL field.

**Save Montype.txt**  
Open Patchstring.tbl  
Give your enemyzon a name using the namestr we put in the Monstats.txt which was- enemyzon.

**Save patchstring.tbl**  
Finished!!!  
Run the game in -direct -txt mode and go into the Blood Moor and there should be newbie looking zons running around trying to kill you.

Part 5- Variations

Looking in Mostats.txt at the cr\_archers we see there are 7 different versions. We can also do this with the enemyzon with each one progressivly stronger (changes in Monstats.txt) and with the appearance of being better equiped (with the HDv thru S8v fields in Monstats2.txt)

You can give your enemyzon amazon bow skills, have her spawn with a hierling or even a valkyrie using the spawn field in Monstats.txt.

With Monequip.txt you can really outfit her with special items or just give her magical properties with the Monprop.txt  
Read this tutorial about Monequip.txt  
[https://d2mods.info/forum/viewtopic.php?t=14962](https://d2mods.info/forum/viewtopic.php?t=14962)

Don't foget about the correct AI for your enemychara. Take a look at this post for some ideas.  
[https://d2mods.info/forum/viewtopic.php?t=19936](https://d2mods.info/forum/viewtopic.php?t=19936)

I did not change the sound that the enemyzon uses because at this time I don't know.
