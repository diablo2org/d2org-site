---
title: Increase the Inventory/Stash/Cube Size
summary: 'Level: Moderate (2-4) Works for: Version 1.00(in part)-1.09 D2 & D2X'
keepId: 183
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 12020
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=183'
---
Level: Moderate (2-4)  
Works for: Version 1.00(in part)-1.09 D2 & D2X

Well, the second one of the new Basic tutorials Im gonna write for my return...  
Basicly this is something many people never do since they just download and use plugins, but thats also why there where no tutorials about this subject and many new modders that wanted to do it didnt know how...

Well (i used well two times did you see that ![icon\_razz.gif](/kb/img/dynamic2.gamespy.com/-phrozenkeep/forum/images/smiles/icon_razz.gif)) this is about to change at this very moment:

1\. What you will need:  
\- A DC6 Editor capable of saving multiframe DC6 files  
\- A good image editor that can apply palettes (psp/gimp for eg)  
\- Some patients  
\- Knowledge about -direct command  
\- Excel or another spreadsheet that can save tabbed TXT files

1\. Extract INVENTORY.TXT from d2exp.mpq (we will come back to this file later)

2\. Extract invchar6.dc6 from d2exp.mpq (DATA\\GLOBAL\\UI\\PANEL)  
3\. convert invchar6.dc6 to pcx/bmp (what ever format you want just not JPG)

After these three basic steps we can begin to work:  
Open the invchar6.pcx (you converted it right?) in your image editor  
you will see it is quite large for a dc6 it should be: 320x864px in size:

what they dont tell you: this is actually a twoframe animation of two 320x432px images, now seperate the image into two parts and save each of them as a single file (make sure each part is EXACTLY 320x432px in size else you will see glitches in the game which you probably dont want to!)

Now now, this is all up to your image editing skills, but make yourself a small chart

write down:

CELLGRIND:  
LeftArm:  
RightArm:  
Neck:  
Head:  
Torso:  
Boot:  
Gloves:  
Belt:

(this is only so later on you wont have to guess the coordinates!)

Now lets say you increase the inventory by 1 row (29px)  
and move up the Torso by 10px to make room so you write down:

CELLGRIND up=-29(you will get why later)  
Torso: up=-10 down=-10

ok now to explain it:  
if you move up 29px and your current coordinates are 300 then you dont type 329 but you type 271 since you move updates (towards 0)  
Repeat these steps for every bodycell you move.

After this you will open INVENTROY.txt in excel (dont worry about all the numbers, it is one of the easyest txt files!)

Now: dont change the following columns!  
InvLeft, InvRight, InvTop, InvBottom (these represent the graphics alignment on the screen!)

Now after i warned you what not to change we can talk about what to change (duh):

The rows for the inventory are:

Amazon  
Sorceress  
Necromancer  
Paladin  
Barbarian  
Druid  
Assassin  
Amazon2  
Sorceress2  
Necromancer2  
Paladin2  
Barbarian2  
Druid2  
Assassin2

A note: Amazon = for low resolution mode (for the Amazon) wile Amazon2 is for hight resolution mode.

The columns to adjust are:

Gridrows/Gridcols (Inventory Gridrows/Columns)  
if we added a single row then we will change Gridcols(not gridrows strangly) from 4 to 5:

After you have done that for all of the rows mentioned above  
We will move on to the next columns: GridLeft/GridRight (dont need changing, we didnt move them horizontally)  
GridTop & GridBottom thought do need to be changed:

As you remember we added 1 cells row on top so the size grew by 29px:

now we will change GridTop from 255 to 226 (since we only added 1 row on top and dident move the grid downwards we dont need to modify GridBottom) for high resolution rows change this column from 315 to 286!

Well now lets move on:  
Since we said before we only moved the torso (in reality thought you would have moved more!)

Now go over to TorsoLeft/TorsoRight, as you remember, we didnt move it left ot right so we dont need to change these but now:

TorsoTop and TorsoBottom need to be changed:  
I supposed you moved it upwards by 10px in this example so we will  
Change torso top from 77 to 67 and TorsoBottom from 159 to 149 (hey why dident bottom GROW? to answer that imagin you move something upwards, and above that thing is a red cube and below a blue cube, now the red one would stand for 0 and the blue one for 1000, if you move the object upwards the value will shrink in both sides since you move away from 1000 and come near to 0, pretty simple)

Now after you did this this example is nearly complete:  
Just for a note:

For the stash we modify Big Bank Page 1 and Big Bank Page 2 rows  
for the cube we modify Transmogrify Box 1 and 2.

But now back to the tutorial:

Now after we modified Inventory.txt we need to convert the inventory graphic to a multiframe dc6 that DOSENT animate.

How will we do this? simple, dc6 files CANNOT animate themselves if they exceed 256x256px in size (our two frames are 320x432px)

Open up your dc6 editor and add the two frames to a new animation (make sure the charstats image is the first!) after you did it save it as invchar6.dc6 and move it into the correct dir (thats why you need knowledge on -direct command) do the same with inventory.txt and start the game, if you did all the way i represented it here for only a few of the columns then you should now have a large inventory!
