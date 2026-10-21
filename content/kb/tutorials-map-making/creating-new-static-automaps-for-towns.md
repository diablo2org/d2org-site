---
title: Creating new static automaps for towns
summary: >-
  Open both north and west versions (Lutw.ds1 and LutN.ds1) of lut golein maps
  in winds1edit do NOT touch mouse or arrow keys. Hide the floor layers, paths
  and shadows as we dont want them in our new…
keepId: 373
author: Nefarius
credit: by Volf
posted: '2007-04-22'
views: 11416
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=373'
---
Lut Gholein automap (Act2Map.dc6 - fullscreen version)

Tools Needed:

[Paint Shop Pro](http://www.corel.com/servlet/Satellite?pagename=Corel3/Products/Display&pid=1047023911984) (a trial version is available)

[win\_ds1edit](https://d2mods.info/filecenter/dload.php?action=file&file_id=127)

[DC6 Creator](https://d2mods.info/filecenter/dload.php?action=file&file_id=1131)

[BigMask\_Lut.zip](https://d2mods.info/phrozenkeep/forum/content/tutimages/AUTOMAP/BigMask_Lut.zip)

Open both north and west versions (Lutw.ds1 and LutN.ds1) of lut golein maps in win\_ds1edit do NOT touch mouse or arrow keys. Hide the floor layers, paths and shadows as we dont want them in our new automap, zoom (+ on keypad) to 1:8.

Press P to take a screenshot.

Additional hints you might want to remove and hide some objects and leave others such as waypoint, some walls and trees might also be in the way. Remove anything you don't want in your automap. Check the winds1editors documentation for key functions and such. This is important, if you have to move the map with arrow keys then save and reopen after the editing before you take the screenshot.

Open the screenshot from both maps in paint shop pro and resize them to 80%. (the screenshot is located in your win\_ds1edit folder)

Download [this mask](https://d2mods.info/phrozenkeep/forum/content/tutimages/AUTOMAP/BigMask_Lut.zip) and open it in paint shop pro. Now choose the color selection tool and rightclick on the red rectangle in the mask, this sets the red as background color (do this step for both screenshots).

Now Copy the mask, then go back to the screenshot and press ctrl + shift + e, this will paste the mask in to the screenshot with the red as transparent color. Use the Move tool to move the mask, check all corners to make sure the mask is in line (do this step for both screenshots).

When thats done, use the crop tool to crop the middle part (our new minimap). You should now have a minimap of size 622 pixels width and 400 pixels in hight. At this point you can edit the image a bit, I recomend you darken it and perhaps manually add wp and stach + what ever details you want to add, then load units palette (do this step for both screenshots).

Final steps, in paint shot, go to menu - view - Change grid guide and snap properties, set horisontal grids to 160 pixels and vertical grids to 100 pixels press ok. Then press ctrl + alt + G and a grid will appear.

Lets do the cropping separately, open the screenshot for the west (lutw) version of the town. Choose the crop tool again then select first grid box from the left, crop it and save as 0001.bmp, then press ctrl + Z to undo the cropping and select second grid box, crop again and save as 0002.bmp then 0003.bmp, 0004.bmp, note we skip one number and next is called 0006.bmp then, 0007.bmp, 0008.bmp, 0009.bmp, (skipping one number), next 0011.bmp, 0012.bmp, 0013.bmp, 0014.bmp, (skipping one number) 0016.bmp, 0017.bmp, 0018.bmp and 0019.bmp. Now you should have 16 frames.

Then open the second screenshot for north version of the town, we will do the same thing but with different file names. First frame 0021.bmp, 0022.bmp, 0023.bmp, 0024.bmp, (skipping one number) 0026.bmp, 0027.bmp, 0028.bmp, 0029.bmp, (skipping one number) 0031.bmp, 0032.bmp, 0033.bmp, 0034.bmp, (skipping one number) 0036.bmp, 0037.bmp, 0038.bmp and 0039.bmp. Now you have 32 frames

Finally start up [DC6 Creator](https://d2mods.info/filecenter/dload.php?action=file&file_id=1131) and open Act2Map.dc6 now replace the frames by importing your frames in to the dc6 file, eaxmple your 0001.bmp will replace frame 0001 and so on. When done save and place the file in dataglobaluiAutomap.

Act2MapS.dc6 The small version of the automap

Open the new 32 frames in paint shop pro again, resize them by 50% and save. Then replace the frames in Act2MapS.dc6 just like we did in the last step with the full screen version

\-----------------------------------------------------------------------------------

Pandemonium Fortress automap (Act4Map.dc6 - fullscreen version)

Tools Needed:

[Paint Shop Pro](http://www.corel.com/servlet/Satellite?pagename=Corel3/Products/Display&pid=1047023911984) (a trial version is available)

[win\_ds1edit](https://d2mods.info/filecenter/dload.php?action=file&file_id=127)

[DC6 Creator](https://d2mods.info/filecenter/dload.php?action=file&file_id=1131)

[BigMask\_Pand.zip](https://d2mods.info/phrozenkeep/forum/content/tutimages/AUTOMAP/BigMask_Pand.zip)

Open your map in win\_ds1edit do NOT touch mouse or arrow keys. Hide the floor layers, paths and shadows as we dont want them in our new automap, zoom (+ on keypad) to 1:8.

Press P to take a screenshot.

Additional hints you might want to remove and hide some objects and leave others such as waypoint, some walls and trees might also be in the way. Remove anything you don't want in your automap. Check the winds1editors documentation for key functions and such. This is important, if you have to move the map with arrow keys then save and reopen after the editing before you take the screenshot.

Open the screenshot in paint shop pro and resize it to 80%. (the screenshot is located in your win\_ds1edit folder)

[Download this mask](https://d2mods.info/phrozenkeep/forum/content/tutimages/AUTOMAP/BigMask_Pand.zip) and open it in paint shop pro. Now choose the color selection tool and rightclick on the red rectangle in the mask, this sets the red as background color.

Now Copy the mask, then go back to the screenshot and press ctrl + shift + e, this will paste the mask in to the screenshot with the red as transparent color. Use the Move tool to move the mask, check all corners to make sure the mask is in line.

When thats done, use the crop tool to crop the middle part (our new minimap). You should now have a minimap of size 272 pixels width and 180 pixels in hight. At this point you can edit the image a bit, I recomend you darken it and perhaps manually add wp and stach + what ever details you want to add, then load units palette.

Final steps, in paint shot, go to menu - view - Change grid guide and snap properties, set horisontal grids to 136 pixels and vertical grids to 90 pixels press ok. Then press ctrl + alt + G and a grid will appear.

Choose the crop tool again then select first grid box from the left, crop it and save as frame0.bmp, then press ctrl + Z to undo the cropping and select second grid box, crop again and save as frame1.bmp: Keep doing this until you have all 4 frames.

Finally start up [DC6 Creator](https://d2mods.info/filecenter/dload.php?action=file&file_id=1131) add the 4 frames in order frame0,1,2,3,4 and save as Act4Map.dc6, then place the file in dataglobaluiAutomap.

Act4MapS The small version of the automap

Open the new 4 frames in paint shop pro again, resize them by 50% and save. Then import the 4 frames again to dc6 creator, save as EAct4MapS and place in dataglobaluiAutomap

\-----------------------------------------------------------------------------------

Harogarth automap (ExTnMapS.dc6 - fullscreen version)

Tools Needed:

[Paint Shop Pro](http://www.corel.com/servlet/Satellite?pagename=Corel3/Products/Display&pid=1047023911984) (a trial version is available)

[win\_ds1edit](https://d2mods.info/filecenter/dload.php?action=file&file_id=127)

[DC6 Creator](https://d2mods.info/filecenter/dload.php?action=file&file_id=1131)

[BigMask.zip](https://d2mods.info/phrozenkeep/forum/content/tutimages/AUTOMAP/BigMask.zip)

Open your map in win\_ds1edit do NOT touch mouse or arrow keys. Hide the floor layers, paths and shadows as we dont want them in our new automap, zoom (+ on keypad) to 1:8.

Press P to take a screenshot.

Additional hints you might want to remove and hide some objects and leave others such as waypoint, some walls and trees might also be in the way. Remove anything you don't want in your automap. Check the winds1editors documentation for key functions and such. This is important, if you have to move the map with arrow keys then save and reopen after the editing before you take the screenshot.

Open the screenshot in paint shop pro and resize it to 80%. (the screenshot is located in your win\_ds1edit folder)

[Download this mask](https://d2mods.info/phrozenkeep/forum/content/tutimages/AUTOMAP/BigMask.zip) and open it in paint shop pro. Now choose the color selection tool and rightclick on the red rectangle in the mask, this sets the red as background color.

Now Copy the mask, then go back to the screenshot and press ctrl + shift + e, this will paste the mask in to the screenshot with the red as transparent color. Use the Move tool to move the mask, check all corners to make sure the mask is in line.

When thats done, use the crop tool to crop the middle part (our new minimap). You should now have a minimap of size 540 pixels width and 340 pixels in hight. At this point you can edit the image a bit, I recomend you darken it and perhaps manually add wp and stach + what ever details you want to add, then load units palette.

Final steps, in paint shot, go to menu - view - Change grid guide and snap properties, set horisontal grids to 180 pixels and vertical grids to 170 pixels press ok. Then press ctrl + alt + G and a grid will appear.

Choose the crop tool again then select first grid box from the left, crop it and save as frame0.bmp, then press ctrl + Z to undo the cropping and select second grid box, crop again and save as frame1.bmp: Keep doing this until you have all 6 frames.

Finally start up [DC6 Creator](https://d2mods.info/filecenter/dload.php?action=file&file_id=1131) add the 6 frames in order frame0,1,2,3,4,5 and save as ExTnMapS.dc6, then place the file in dataglobaluiAutomap.

ExTnMapS.dc6 The small version of the automap

Open the new 6 frames in paint shop pro again, resize them by 50% and save. Then import the 6 frames again to dc6 creator, save as ExTnMapS.dc6 and place in dataglobaluiAutomap
