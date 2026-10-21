---
title: Changing the Loading Screen
summary: >-
  This is something some one once asked me to add to XyRAX but back then there
  was no tool available to create animated DC6 files. But today there are such
  tools so I decided to do add it to my new?…
keepId: 182
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 6980
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=182'
---
Difficulty: 1 (Newbie)

Works on: 1.00-1.09 D2 Classic and D2 Expansion

This is something some one once asked me to add to  
XyRAX but back then there was no tool available to create animated DC6  
files.   
But today there are such tools so I decided to do add it to my new? version of XyRAX.   
After I made this small loading screen I basically knew some people  
would want to do the same so I started writing yet another  
tutorial.

What you will need:   
MPQ2K

DC6MAKER

First you will need to extract the following file:

DATA\\GLOBAL\\PALETTE\\LOADING\\PAL.DAT

Next rename this file from PAL.DAT to PAL.PAL.   
After you did this open an image editor. (Like PSP for example.)   
In the program create a new image it must be 256x256px in size. (Other  
sizes might also work but I tested it only with the original loading  
screen size (do not exceed 256x256 thought, thats the limit for dc6  
animations!).)   
Now draw an empty loading meter. (Or whatever you want to display on your loading screen.)

After this we will need to apply the loading screen palette we extracted before to the image.   
To do this: Use the load palette function of your image editor and load PAL.PAL.   
The colors of your image now might look pretty messed up right now, fix what you can then save the image as frame0.gif.   
Don't close the image editor yet, instead start filling the loading bar  
with color, do this until you created 10 frames. (Including  
frame0.gif.)   
Now that this is out of our way all that you need to do is load  
DC6MAKER and create a new animation, add the images you just created as  
new frames.   
After you added all of them save the image as LOADINGSCREEN.DC6 and put it in the DATA\\GLOBAL\\UI\\LOADING directory.   
(Or import it into PATCH\_D2.MPQ if you don't use -direct)

Now load up Diablo II and start a game, if you did everything correctly the new loading screen should appear.
