---
title: Creating Single or Multi Page Clue Scrolls
summary: How to make scrolls similar to the Tree of Infus scroll
keepId: 276
author: I_only_pressed_Esc
posted: '2004-08-19'
modified: '2018-01-06'
views: 11389
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=276'
---
This is my first tutorial...... so please be gentle if it is not perfect!!!!  
This tutorial is not for the beginner.

Tools needed:  
Paintshop Pro  
D2Excel  
Dc6maker  
Diablo 2 table editor

Files needed:  
Itemtypes.txt  
Misc.txt  
Cubemain.txt  
Patchstring.tbl  
Paul Siramys Pal for PsP

Plugins needed:  
Plugy the survival kit

> **Warning:** You need to have the Plugy the survival kit plugin in your mod for this to work as the deciphered scroll is 8x6 in size in the stash. Once the scroll has been removed from the cube, you will not be able to store '

it unless you have a supersize stash to place it into. This will work better with Plugy the survival kit as it has many large pages for storing items.

It is presumed that you have knowledge in using these tools and using the -direct -text switch.

1\. First open Paintshop Pro and make a new image with the size of 166 width and 222 height and palette of 256 colours. You can either create a new scroll image or resize an image that you have to the sizes and format as specified above. Once you have your image, add text to the image and resize and move it till you feel happy with it.'  
Next load Paul Siramys Act0 pal. Change the background colour in the palette to 404040.  
Save the image.

2\. Now open up DC6maker and press add frame and search for the image. Untick transform palette in the settings menu.

Now save the image as invclu1.dc6 and move it to the items folder.

3\. Itemtypes.txt

Open up itemtypes.txt and add a new row to the bottom.  
Enter the following in the collumns:  
Itemtype: Clue  
Code: Clue  
Equiv1: misc  
Repair: 0  
Body: 0  
Throwable: 0  
Reload: 0  
ReEquip: 0  
Autostack: 0  
Normal: 0  
Charm: 0  
Gem: 0  
Beltable: 0  
Maxsock: 0  
Maxsock25: 0  
Maxsock40: 0  
Treasureclass: 0  
Rarity: 3  
Costformula: 0  
Varinvgfx: 0  
Storepage: misc  
Eol: 0

Save itemtypes.txt

4\. Misc.txt

Open misc.txt and copy Bark scroll line to the bottom twice.

Enter the following in the first line you copied:  
Name: Clue Scroll  
\*Name: Clue Scroll  
Compactsave: 1  
Version: 100  
Level: 0  
Levelreq: 0

Rarity: 1  
Spawnable: 1  
Code: clu  
Alternategfx: grg  
Namestr: clu  
Invwidth: 2  
Invheight: 2  
flippyfile: flipscr  
invfile: invhscr  
type: clue  
Charsimin: 1 (for testing purposes only)  
Charsimax: 1 (for testing purposes only)  
Permstoreitem: 1 (for testing purposes only)

Second line

Do as above but the name collumns will be the name for the

clue that you want.  
Spawnable: 0  
Code: clu1  
Namestr: clu1  
Invwidth: 6  
Invheight: 8  
flippyfile: flipscr  
invfile: invclu1  
Do not put anything in the Charsi collumns or permstore.

Save misc.txt

5\. Patchstring.tbl

Open patchstring.tbl and add the following:

String:= clu Key:= Clue Scroll  
String:= clu1 Key:= ????? = (the name of your scroll)  
String:= clue Key:= Clue Scroll

Save patchstring.tbl

6\. Cubemain.txt

Open cubemain.txt and add a new line to the bottom and

enter the following:

Description: anything you want  
Enabled: 1  
Version: 100  
numinputs: 1  
input1: clu  
output: clu1  
eol: 0

Save cubemain.txt

Instead of using the cube, you can also make it right clickable to transform into the clue scroll by filling the appropriate collumns in misc.txt '

Use the following if not using the cube then put this into misc.txt:

Transmogrify: 1  
TMogType: clu1  
TMogMin: 1  
TMogMax: 1

7\. Start D2 and go to Charsi and buy a scroll, put it into the cube or stash and press the transmute button or right click on it depending on the method chosen to make the scroll.'

The size of the image in the cube requires the Plugy survival kit plugin as mentioned at the beginning of this guide for storing the scroll. Because of the size of the scroll it may be a bit tricky to close the cube.

8\. This guide is for one scroll only. It is left up to the modder to add more scrolls as an exercise. It is also left to the modder to add to treasureclassex.txt for specific drop purposes. Using the method given, you can also make multi page right clickable scrolls.'

If you find this useful and use it in your mod then please give thanks or credits to I\_Only\_Pressed\_Esc.
