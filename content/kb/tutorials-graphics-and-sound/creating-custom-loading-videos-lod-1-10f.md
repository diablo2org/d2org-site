---
title: Creating Custom Loading Videos LOD 1.10f
summary: Creating new and converting videos for use as starting videos/biks
keepId: 324
author: I_only_pressed_Esc
posted: '2005-04-29'
modified: '2018-01-06'
views: 8720
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=324'
---
Creating Custom Loading Videos LOD 1.10f  
By I\_only\_pressed\_Esc

Tools needed:  
Rad Game Tools  
Fraps or similar type of program (we will deal with Fraps)

This tutorial will go on the premise that you will be capturing video from your mod.

Using other videos, just start from step 3.

1\. Start Fraps and select to disable the FPS on screen option. Then choose your video  
output and set it to the desired framerate (15 does fine as the  
Blizzard biks are 12 frames) and screen size, half or full, half does  
just fine. This is where 2 seperate hard drives are good if you have a  
lower end system as you could then capture to the drive where D2 won't  
be running from and you won't get any 'stalls' (thought I should  
mention this just in case)  
2\. Start D2 and just go to where ever in the game you wish to start  
capturing video from and press the F9 key to start and press the F9 key  
again to stop. A good time is about 10 - 15 secs. Do this twice as you will be creating 2 new videos.

3\. Once you have your desired video captures, start Rad game tools.  
Select your first video capture and click the 'Bink it' button.  
Don't change any of the options (except for where you want to save it  
if needed). Do the same for the second capture.

4\. Make 1 copy each of each new converted bik file. There is an order for displaying the biks if needed and it is as follows:  
For the first bik displayed at game start, choose which you wish to  
be shown first and rename them to New\_Bliz640x480.bik and  
New\_Bliz640x240.bik  
For the second rename them to BlizNorth640x240.bik and BlizNorth640x480.bik

This (I think) will allow low and high power systems to show your new videos/biks.

5\. Move the new biks to the following folder to try them out:  
Diablo II\\data\\local\\video See section 7.

6\. You now have custom start videos.

7\. The biks when packed require that you DO NOT USE the /c switch if using Mpq2k. This will corrupt the bik files.  
You must create 1 script to add all the normal files and then another script to add the bik files.  
The only way so far(for me) has to be to make the mpq without the  
bik files but imposing a maximum file limit on the first mpq. The file  
limit will allow updating the mpq to add new files. (Handy tip for  
releasing updates to your mod)  
You must then delete all other files from the data folder and only  
leave the video folder and use the second script to add the bik files  
to the mpq without compression.
