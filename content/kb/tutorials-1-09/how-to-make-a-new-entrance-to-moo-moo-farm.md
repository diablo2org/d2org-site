---
title: How to Make a New Entrance to Moo Moo Farm
summary: >-
  Special thanks: Joel (for teaching me how to use Paul’s win editor and how to
  change LvlPrest.txt Dt1Mask, in fact you wouldn’t read this tutorial without
  him) Nefarius (for solving the last part to…
keepId: 205
author: Phrozen Heart
credit: by Kingpin
posted: '2003-12-02'
views: 8082
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=205'
---
Special thanks:   
Joel (for teaching me how to use Paul’s win editor and how to change LvlPrest.txt Dt1Mask, in fact you wouldn’t read this tutorial without him)   
Nefarius (for solving the last part to make this working, he discovered that I missed to set the entrance active)   
Paul (for his great win editor and for the corrections he has made about some parts in the tutorial concerning the use of his tool.) 

You will need this tools and files to accomplish this tutorial. 

Tools:   
(If you don’t have these files you find them on the keep). 

MPQExtractor   
Paul’s win ds1 editor   
Excel (D2excel/MS excel/staroffice to name a few spreadsheets) 

Files to work with:   
Levels.txt   
LvlTypes.txt   
LvlPrest.txt   
bivouac.ds1   
denent.ds1 

Extract your files:   
When you reading this tutorial I suppose that you already know how to extract your files from an mpq. 

You found these files in patch\_D2.mpq/d2exp.mpq or d2data.mpq (if you are only for classic modding). 

Extract these files: 

From patch\_D2.mpq   
data\\global\\excel\\Levels.txt   
data\\global\\excel\\LvlTypes.txt   
data\\global\\excel\\LvlPrest.txt 

From d2data\_mpq   
data\\global\\tiles\\ACT1\\OUTDOORS\\bivouac.ds1   
data\\global\\tiles\\ACT1\\CAVES\\denent.ds1

---

You need to copy bivouac.ds1 and denent.ds1 to your installed win ds1 editor directory. If you have worked with this tool earlier this aren’t any problem for you. For the others I’m going to explain what you need to do. 

The first we are going to do is to create a new .ini file in win ds1 editor directory. We call this file Moo.ini. 

In the file we are going to set up the ini file so the editor loads our both ds1 files. There are two values and a ds1 file that needs to be filled in. 

ID, Def, ds1 that are in this order we are going to put the values in the file. 

ID = you get the id from LvlTypes.txt. Since we are going to use denent.ds1 on the first row we need to check what id it has. Denent.ds1 is an Act 1 - Wilderness type and we look in LvlTypes.txt and found out that it has id 2. 

Def = you get def from LvlPrest.txt. We are going to look after act 1 - DOE Entrance since this is the name the entrance we are using from denent.ds1. We will found that it has def 52. 

Ds1 = this is the ds1 file we are going to load. Since we have been talking about denent.ds1 that’s the file we are going to load on the first row.   
The file is going to look like this. 

2 52 denent.ds1   
2 50 bivouac.ds1 

Take a look in LvlTypes.txt and LvlPrest.txt why we are using id=2 and def=50 for the bivouac.ds1 row. 

Save this file and exit. 

It’s now time to load Paul’s Win ds1 editor.   
You can load the editor in two ways either from the command prompt or from a .bat file. 

First way:   
Open a command prompt (MS-Dos prompt). Write this to load win\_ds1edit.exe. 

Win\_ds1edit.exe Moo.ini 

Second way:   
If you are not familiar with the command prompt instead create a new .bat file. Open up a text editor and write the following 

@echo off   
win\_ds1edit Moo.ini   
pause 

Save the file as Launch.bat and after saving it press the newly created bat file and it will run the editor. 

After you have run the editor you will se on the first screen our denent.ds1. What we are going to do in here is to copy the entrance. With left button you’re selecting an area of tiles and to select several tiles at once you can do this in two ways. Press left button and drag the mouse over the tiles you want to select or hold down shift and press the left button and select tile by tile. 

There are some commands you need to be familiar with. 

Ctrl+s = saves the file.   
Number = switch to next ds1.   
Ctrl+x = delete the current selection of Tiles, the current selection of Objects.   
Tab = makes object screen visible, or run thru all editing modes.   
Ctrl+u = undo last action and for tiles you can undo more than once.   
Ctrl+c = copy a tile/object.   
Scroll wheel = zoom in/out.   
+/- = zoom in/out. 

First we will make sure that we have room for the entrance. So we press 2 to switch to bivouac.ds1. In here we are going to move around some objects. First we will have to move The Cowking to another location, to do that we press Tab and after that we press the left button over the diamond feet of the Cowking object, we have now the diamond feet and label marked as green. Now we press alt or Alt Gr while clicking on the object’s feet: you’ll move the object (you’ll see a shadow of the object at the original position). Move him to the left corner cell (24,62). You can found out the cell numbers by looking at left/bottom of the screen. 

The next we need to do is to move one of the walls. You need to press tab twice times to get into normal mode again. The next we will do is to move one of the wall parts. Before marking the walls we press shift + f5, by doing so the wall layer 1 is only visible. Now we will mark the walls on the right side with cell position (7,5), (8,5), (9,5), now you can click on the 1st cell, maintain the button pressed, go to the 3rd cell, an area of 3 cells is selected, then release the button. Now we will copy this marked walls and do so by pressing ctrl+c. We are now going to move the wall to cell position (8,1) and press left mouse button to place the wall at this position. 

After we have moved the wall delete the original wall by marking it and press ctrl+x, to go back to view all layers again press backspace. You will now have room for the entrance (remember also that you can make this looking more good than the tutorial). Now switch back to denent.ds1 by pressing 1. This time we are going to copy the entrance by marking the following cells (1,5), (1,4),(1,3),( 2,5), (2,4),(2,3),(2,2),(3,5), (3,4),(3,3),(3,2),(4,5),(4,4),(4,3),(4,2) remember to hold shift when marking the blocks and copy it by pressing ctrl+c. Now we have our cave marked and its time to go back to bivouac.ds1 by pressing 2. We will place this cave at cell location (7,6). The last we have left is to save the bivouac.ds1 do that by pressing ctrl+s. We have now modified our bivouac.ds1. 

The last thing to remember is what vis the cave is using. By looking in cell (8,7) we see vis 5 remember this for later use. After this we exit the program. 

Modify the Cave in Cold Plains so it has a entrance to Moo Moo Farm   
Now we have come to the part of the tutorial that is going to modify levels.txt to have Cave Level1 has one of its entrance to Moo Moo Farm. 

Open levels.txt in your favorite spreadsheet. 

Go to Act1 - Cave2 row (id 9) and go to the vis columns. In column AC change the value to 39 (Moo Moo Farm’s id). 

Next thing to do is to go down to Act 1 - Moo Moo Farm row (id 39) and go to vis columns. In column AD add the value 9 (this is Cave2 level1’s id). We will also add a warp value. So go to column AL and add 0. 

Now we have modified levels.txt complete so save and exit. 

Make the Moo Moo Farm to use the entrance graphics   
We have still some left before we could test our new entrance. We need to tell the game to load the graphics for the entrance. Since the game normally doesn’t have an entrance in Moo Moo Farm it doesn’t load it either. What we need to do is to change the Dt1Mask value in LvlPrest.txt. The tutorial is not going to explain why we are setting the new Dt1Mask value (in fact I’m not good enough with this for myself, once again a big than for Joel for helping with this). 

Load LvlPrest.txt and go to the row Act 1 - Bivouac (id 50) look for the Dt1Mask column (W). Change the value to 42991873. 

Make the new Entrance in Moo Moo Farm active.   
We need to make Moo Moo Farm entrance active. We are once more time going to LvlPrest.txt go to Act1 - Bivouac (id 50) look for the column Scan (M) we need to set the value to 1 to make the entrance active (once more time big thanks to Nefarius for helping me with that). 

Save the file and exit. 

Now we have only one thing left before testing this out. 

Copy the modified files into your mod directory. 

Copy to this location (from the directory that holds your modified files) 

data\\global\\excel\\Levels.txt   
data\\global\\excel\\LvlTypes.txt (you don’t need to copy this file since we haven’t modified this)   
data\\global\\excel\\LvlPrest.txt 

data\\global\\tiles\\ACT1\\OUTDOORS\\bivouac.ds1 (remember to copy this file from your win ds1 editor directory)   
data\\global\\tiles\\ACT1\\CAVES\\denent.ds1 (you don’t need to copy this file since we haven’t modified this) 

One Last Thing   
If you have followed this tutorial correct you will now have a working entrance to Moo Moo Farm. You will also have the treasure level from Cave2 free to do what you want with.   
So, here is a little extra exercise of doing new Entrances. Create another entrance in the Moo Moo Farm link the new entrance to your free Cave Level2 (treasure level) and place the CowKing in the cave with some of his Moo Moo friends.
