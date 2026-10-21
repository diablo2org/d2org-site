---
title: Item Graphic Conversion Tutorial (by Wafflemaster)
summary: >-
  This tutorial explains how to convert a PCX image into an item inventory
  graphic.
keepId: 15
author: Phrozen Heart
posted: '2004-08-19'
views: 11259
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=15'
---
Step 1: Extract the original .dc6 image for the image you want to change. (Please note that you don't have to do this step: only if what you want to do entails editing an existing image)

Step 2: Use dc6con (available from the Phrozen Keep File Center) or another similar program to convert it to a .pcx file.

Step 3: Edit the .pcx to your liking.

Step 4: Go to a 'Load Palette' option in your image editor. You need to apply a D2 palette for the image so that its colors don't get messed up in game. The one used for items is 'act0'. Make sure the background color is the color you want to be transparent, which is the first palette entry.

Step 5: Use your .dc6 -> .pcx program again, but this time to convert to .pcx into a .dc6. Make sure to set a transparency color. With dc6con, you can just add the command line '-transcol 0' to your batch file.

Step 6: Put your new dc6 in your data/global/items directory.

Step 7: Open misc.txt, and go to the 'invfile' column. Change it to fit the exact filename of the new image. Also, you can just rename the .dc6 to be what it was originally named, so you don't need to do the text edit.

**Troubleshooting:**

Q: My background color isn't transparent. What's wrong, Doctor?  
A: Make sure that when you were editing the .pcx, you colored the image's background as the first palette entry. Also, make sure you used the '-transcol 0' command. Just a note, if you don't do '-transcol 0', it will appear functional if you are using Direct3D. If you are using DirectDraw, it will display the background color instead of making it transparent.

Q: My image shows up completely incorrectly in game. Instead of my image, I get about 5 pixels of a random shade of red where the item should be. Where did I go whoopsies?  
A: You forgot to apply a palette in your image editor. Something that helps palettes ruin the image less is converting the image to 256 colors before applying the D2 palette.

Q: The image is too bright. I tried to edit the brightness on the .pcx and resave it, but it has no effect.  
A: You need to edit the brightness before applying the palette, or it doesn't work. (I'm not sure why, and I'm not sure that all programs do this; however, I have encountered the problem before)
