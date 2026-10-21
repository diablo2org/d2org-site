---
title: Changing the Title Screen
summary: >-
  What you will need: DC6CON An Image Editor of your choice (as long as it can
  apply palettes!) An MPQ extractor of your choice
keepId: 181
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 7547
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=181'
---
Tested On: Diablo II Expansion 1.08 - 1.09

What you will need:  
DC6CON  
An Image Editor of your choice (as long as it can apply palettes!)  
An MPQ extractor of your choice

What you should know:  
How to extract files from a MPQ archive.  
How to run the game in -direct -txt mode.

First off extract DATA\\GLOBAL\\UI\\FRONTEND\\GAMESELECTSCREENEXP.DC6 from D2EXP.MPQ, Use DC6CON to convert this image to PCX and open it in your image editor.  
Save the Palette of the image to an external file.

Now create a new Image, it must be 800x600pc and have a color depth of 256. Draw your title screen, make sure the title of your mod is about ~200px below the top of the screen. Now apply the palette you saved to an external file to the image. Correct any color glitches and save the file as GAMESELECTSCREENEXP.PCX.

Convert the image to DC6 using DC6CON, dont forget NOT to apply a transcol. As your new image DOES NOT require any transparency.

Put the new dc6 file in the correct location and load the game, you should now have a new titlescreen.

ADDENDUM  
Other Screens:

TCPIPSCREEN = Tcp/IP Screen  
CHARACTERCREATIONSCREEN = The Screen were you choose what class to create.  
TRADEMARKSCREENEXP = trademarks creen (the screen that appears before the  
titlescreen)  
CHARCTERSELECTSCREENEXP = Character Select Screen  
CREDITSBCKGEXPANDED = Credits Background Screen
