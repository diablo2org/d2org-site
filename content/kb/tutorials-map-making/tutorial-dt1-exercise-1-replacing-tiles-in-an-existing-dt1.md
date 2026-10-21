---
title: Tutorial Dt1 Exercise 1 - Replacing tiles in an existing dt1
summary: >-
  In this exercise we will be replacing the town fence with our own new fence.
  There are several different ways of doing this - I believe most mappers have
  their own ways; this is one of my ways.
keepId: 310
author: Volf
posted: '2007-05-04'
modified: '2018-01-06'
views: 9129
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=310'
---
HTML clipboard Tutorial Dt1 Exercise 1 - Replacing tiles in an existing dt1 Author: volf Credits For additions in yellow go to Paul Siramy  
For proofreading go to Kraj Tools needed Files To extract Mpq extractor - alternative dataglobaltilesact1townFence.dt1 Pauls Dt1 tools - alternative link paint shop pro D2 Palette(Paint Shop Pro) - alternative link notepad Before we begin I suggest you read pauls dt1 documentation Let's get started. In this exercise we will be replacing the town fence with our own new fence. There are several different ways of doing this - I believe most mappers have their own ways; this is one of my ways. First, open your favorite mpq extractor and extract dataglobaltilesact1townFence.dt1. Once you have done that we move on to the dt1 tools. We will now make a bat to convert the dt1 to a pcx and ini file. To do so, open notepad and type @echo off  
dt1extr Fence.dt1 -pal d2palact1.dat Then save as ExtractFence.bat any file. Note: save the bat to the dir where you have the dt1 tools. Also move the Fence.dt1 to this same directory. Now double click the new bat file and your dt1 will be converted to a pcx (Fence-wu.pcx) and an ini file (Fence.ini). Now We open Fence-wu.pcx in Paint Shop Pro and perform the following steps: \* Edit the palette (Shift+P in PSP 6) still same in psp7, 8 and 9  
\* Change the gray background color (index #0) into cyan. The background changes to cyan. This makes sure ALL pixels of the background are now cyan, exactly like the background color we'll load in the new palette.  
\* Load the d2-act0 palette, nearest color matching (do not use dithering or keep index).  
(Note: to load the palette go to color menu-load palette and press edit paths. Now select the path to where you have the d2 palettes.)  
(Note to load the palette go to color menu-load palette and press edit paths now select the path to where you have the d2 palettes, after that) After your pcx is open and you have change the palette to be act0:

\* Go to File / Preferences / General Program Preferences / Rulers and Units  
\* Section 'grid'  
\* Units = pixels  
\* Horizontal spacing = 160  
\* Vertical spacing = 80 (but this one is not very important)  
\* Line color : something that is not cyan  
\* View / Grid : now you can see that all tiles are surrounded by 2 vertical lines.  
\* Optional : if you want to make the horizontal lines appear correctly on the bottom, choose add pixels on top (since my dt1 tools expect the wall tiles all to be aligned at the bottom). Adds the necessary amounts of pixels in order that the height of the pcx image is a multiple of 80. For instance, if the Fence was 343 pixels (in fact by chance it's already set to 320, so it's ok, but let's take a more general example), we'll proceed that way:  
343 / 80 = 4.2875  
integer part of 4.2875 = 4  
4 + 1 = 5  
5 \* 80 = 400  
400 - 343 = 57  
So add 57 pixels to the top of the image (Image / Add Borders ...), and now the image will be a multiple of 80 pixels height and the horizontal grid will be correctly aligned. The tiles will still be at the bottom.  
In later psp versions you will find grid options under View - Change Grid, Guide & Snap properties. Like Paul said, a tile is 160 pixels wide and 80 pixels high. You now notice that the tiles only cover half of the grid. This is because of their direction, so we will change the vertical grids to 80x80. Now it is as wide as our tiles are in this tutorial.  
In the example pictures in this tutorial you will not se a grid because I did not use one. Now we copy 1 tile from the image and modify it in to something a bit different. For this I chose the tile to the left. I will not go in to detail of how to modify the tile - the only rule we have while modifying this tile is that it must be a very specific size. There are two key points on the image: the two pink dots in the pic to the right - these must be the bottom left corner and right corner. The blue lines are the outline of the image. You're already using the grid Paul explained earlier witch does the same thing in a better way so forget about my blue lines  
Add the pink dot to your image in the exact same places, not the blue, just the two pink dots.

Now lets start modifying the image. Step 1.

I used the freehand selection tool, set as point to point selection and selected the part under the two pink dots. Then I used the color fill tool set with tolerance 200 to fill the selected area. The result is to the right.

Image below shows that the two dots are still there. Step 2.

I selected the upper part of the image and copy it.

(to copy these ctrl+c when selected, to paste ctrl+v) Step 3.

Now before we move on to the selected part you just pasted we go back to the tile and press ctrl+e. This will paste the image in to the original image. Once its pasted use the Move tool to move the pasted image, place it as you wish. I will make this into a low fence.

Now it should look something like the image to the right. Step 4.

Now select the pole part of the image (do not select it all the way down, leave the pink dot outside of the selection) and copy and paste it, then mirror the pole part that you just copied. Step 5.

Basically the same as step 3 - you paste the pole into the image and use move tool to move it to the correct place (again make sure the pink dot remains). It will now look like the image to the right. There may be a few glitches, which you can manually edit a bit. When editing glitches the color selection tool is a great help because it allows you to select colors from the image. Another good way is to use the selection tool: select the exact areas you want to edit and paint inside the selections. Personally I often use the clone brush to paint inside a selected area when correcting glitches. Some touch up tricks: Now go to color menu and select increase color depth to 16 million colors.  
In this image I have used the selection tool to select an area I wish to correct. Then I use the clone brush (the square in the middle) and right click. This sets a starting point for the clone brush. Now I move the clone brush as you see in the image. The right lower corner of the brush is in the last black dot just like it was in previous image where we set the start point. Now we press down the left button and start cloning. When finished load the act0 palette again. After touching up my tile looks like image to the right, note both pink dots are at the exact same position where they were when I started.  
When touching up I removed all unwanted parts; I also removed the lowest bar of the fence to give it a bit more life and some of the black parts between were removed. You don't have to do it exactly like I did - as long as the pink dots are still there this will work. Next step, back to the dot. This time we go 14 pixels straight up from the dot and make a new dot there. After this you may remove the original dot since we'll use the new one from now on. Now make a new empty image that is about 300x300 pixels big, load act0 palette and fill the image with cyan color, then copy your tile in to the middle of the big picture. Now we have our tile, so we go back to the Fence-wu.pcx and have a look at tiles that have the same direction as our tile As you see there are 2 different versions, end tiles and tiles that will be used in the middle. Let's call them type1 and type2. Let's compare them to our new tile. On all these tiles you can see 1 or 2 identical parts where we first placed our dots when we started. The image below shows this. Type 1 tile's dot area: Type 2 tile's dot area: Now we get to the point: increase color depth for Fence-wu.pcx to 16 million colors.

Then get out the clone brush again. Use the square form and go to your new tile with the clone brush and right click exactly so that the right side pink dot is inside the corner of the clone brush.

You can use a smaller brush if you like. Now go to the first tile in Fence-wu.pcx, which is a type 1 tile and set the brush so that this tile's right dot point is in the lower right corner of the brush. Press down the left mouse button and keep it down until you have cloned the whole tile. Continue cloning around it so that all old parts of the tile are replaced with the transparent color. For tiles that are type 2 you can use the same dot as starting point or the other one, so we skip to a corner tile with starting point in other direction. For this we use the left dot of our tile: inside the lower left corner when you right click on the tile you start the cloning as image to the right shows. Last type of tiles are corner tiles. These aren't really any different - they have the same dot spot in the middle, you just need to be more careful with the clone brush in the middle so that you wont go over it. When you have done one of these tiles it looks like this: Now you just keep doing this until all tiles using same direction as your tile are replaced. When that is done, mirror your tile as we mirrored the pole earlier and do the same for all the tiles in the other direction.

The only tiles we don't touch are the last two and their shadow tiles. See image below. You're almost done now and if all has gone right your tile set will look similar to mine. Two more steps: load act0 palette again and use color selection tool to select the pink dot color as background color (right click it), then select a brown color from somewhere near the dot. Then select the color replace tool and double click left mouse button. This removes all the dots in 1 click. Final step: save the image Fence-wu.pcx Only one thing left to do: now we need to convert this back to a dt1, so back to dt1 tools. Again, open notepad and type:

@echo off dt1make Fence.ini

Save as any file, name it MakeFence.bat

Now you have the bat file, the ini and the edited pcx in the dt1 tools directory. Right click the new bat and it will make your new dt1. It will be called NEW\_Fence.dt1

Rename it to Fence.dt1 and place it in your data folder dataglobalact1town. Run the game in direct.txt, go in to town and you will see your new fence there.

Congraz! You have just made a custom dt1! Mine turned out like so:
