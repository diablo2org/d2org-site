---
title: Using New Graphics for the Town Portal (by SBM)
summary: >-
  This tutorial covers the necessary steps to modify the graphics used by the
  Town Portal. The techique can be applied to other object graphics changes.
keepId: 169
author: Alkalund
posted: '2004-08-19'
views: 8793
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=169'
---
You want to replace this annoying, boring graphics of the town portal then you are on the right track just follow the steps and you could use any other graphics for the town portal.

Required knowledge:  
\-----------------------------------------------------------------  
This tutorial assumes that you have read the animation conversion tutorial, that you could extract files out of different .mpq files and .cof editing is also required.

Required Tools:  
\------------------------------------------------------------------  
MPQVIEW (with new datalist for 1.10s) Spreadsheet Tool (D2Excel, MS Excel etc.) CV 5 or CV 5.2 with .dcc AddOn HexEditing Tool (like HexWorkshop) Blank .gif file (you can find it in the animation conversion tutorial) your ANIMDATA.d2 (if you have an edited one use it otherwise extract one out of the d2exp.mpq \[data/global/animdata.d2\]) OPTIONAL: XVI32 (HexEditing Tool) it is easier for one of the last steps to additonal use XVI32 to one another HexEditor!

You can get all tools in the keep.

NOW THE THINGS YOU HAVE TO DO:  
\--------------------------------------------------------------------  
Getting Started) You need two .gif animations. One should be the portal opening itself and the other is the portal just standing there. For this animations there is ONLY ONE DIRECTION required no eight directions like the animations for the monsters. The framecount for the opening animation should also be not above 70 because on the one hand it takes then to long to open the portal and on the other hand i got problems with CV5 with a 90 frames animation. There is no restriction for the neutral animation of the portal i think. (I used a 30 frames neutral animation and a 40 frames opening animation!). Please write your framecounts of your two animations in one file you remember because we will need these values very often so you should keep them in mind.

1.)The files of the town portal can be found in 'data/global/objects/TP' just extract all directorys with all files so that we can take a closer look on them.

The files in the directory 'HD' contains the necessary animations for the town portal. We will replace them with our graphics.

The files in the directory 'TR' contains overlays for the town portal animation creating the black color inside the portal. We will replace them with blank .dcc files. But there is one file in this directory called 'TPTRLITS2HTH.DCC' we will NOT replace.

2.) Now create three directorys called 'HD' , 'TR', and 'COF'. Put the .cof files you extracted in the 'COF' directory and the file 'TR/TPTRLITS2HTH.DCC' i mentioned before in your 'TR' directory.

THE 'TR' DIRECTORY: (THE BLANK .DCC FILES)  
\-------------------------------------------------------------------------------  
3.)a) Take the blank.gif file and adjust the framecounts of this file to your opening animation. (If your opening animation has for example 30 frames you have to copy and paste or delete frames of the blank .gif file until you have 30 frames too). Save this .gif file now as 'tptrlitophth.gif' and as 'tptrlits1hth.gif'. Now do the same for your standing animation of the portal and save this .gif file as 'tptrlitonhth.gif'.  
b.) Convert these THREE files using CV to .dcc files KEEPING THE BASIC NAME (of course not the extension ;) ). BE SURE TO SELECT 1 DIRECTION X NUMBER OF FRAMES! So the three files are named 'tptrlits1hth.dcc', 'tptrlitophth.dcc' and 'tptrlitonhth.dcc'.  
c.) Now copy the files in your 'TR' directory.

THE 'HD' DIRECTORY: (THE REAL ANIMATION FILES)  
\---------------------------------------------------------------------------------  
4.)a) Rename your opening animation you want to see in the game now to 'tphdlitophth.gif'. Copy it and rename the copy to 'tphdlits1hth.gif'. Rename your standing animation you want to see in the game now to 'tphdlitonhth.gif'.  
b.) Convert these THREE files using CV to .dcc files KEEPING THE BASIC NAME!BE SURE TO SELECT 1 DIRECTION X Number of Frames AND DEFAULT INTERNAL PALETTE! (yes you need one pair of offsets adjust them like you have learned it in the animation conversion tutorial). Your three files should be named 'tphdlits1hth.dcc', 'tphdlitonhth.dcc', 'tphdlitophth.dcc' now.  
c.) Copy these files into your 'HD' directory.

THE 'COF' DIRECTORY:(Adjusting the framecounts):  
\---------------------------------------------------------------------------------  
BE SURE TO USE THE WHOLE TIME 1 DIRECTION TO GET THE NUMBEROF BYTES FOR THE 'BLUE SECTION'. So if you have a 30 frame animation the number of bytes for the blue section is 30 if you have ONE layer. FOR A TWO Layer .COF FILE YOU HAVE TO repeat the layer n times if n is the number of your framecounts (30 frame animation => n = 30).

5.)a) Open first the 'TPNUHTH.COF' with a HexEditor. This file is the easiest one among all of them. It contains only one Layer. So edit this file using the framecounts of your neutral animation. (If you have a 30 frame neutral animation the file should look after editing like that:

\[code:1:d95255ac2a\] 01 1E 01 14 01 00 13 00 00 00 00 00 F8 EE 12 00 FF FF FF FF 84 EF 12 00 00 01 00 00 01 01 01 00 00 68 74 68 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 \[/code:1:d95255ac2a\]

Just follow the steps of the animation conversion tutorial and you can do nothing wrong!  
b.) Open now the 'TPONHTH.COF' with a HexEditor. This file has two layers repeating at the end of the file ('01 00'). Edit the 'red' and the 'orange' section of this file (animation conversion tutorial) like you did it before. Now delete the layer information (the section after the orange section filled with '01 00') and insert one byte '00'. Now you have to insert this layer information '01 00' n times where n is the number of the frames of your neutral animation! I would use XVI 32 selecting the last byte of the file and using 'EDIT/INSERT STRING' and '01 00' as Hex String and 'Insert n times' as 'Decimal' and type in the field below the number of frames of your neutral animation (n). At the end save the file with XVI 32 and open it with another HexEditor deleting the last '00' (as you remember we added it before so we have to delete it now). The file should like this file (with n=30/number of frames = 30):

\[code:1:d95255ac2a\] 02 1E 01 14 01 F0 FD 7F 7C FF FF FF 37 00 00 00 87 FF FF FF 26 00 00 00 00 01 00 00 01 01 01 00 05 68 74 68 00 00 01 01 01 03 68 74 68 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 01 00 \[/code:1:d95255ac2a\] c.) DO the same like told in b) for 'TPOPHTH.COF' (it is also a TWO Layer file) USING THIS TIME THE NUMBER OF FRAMES OF YOUR OPENING PORTAL ANIMATION. Then copy the edited file and replace 'TPS1HTH.COF' with the copy.  
d.) DO NOT CHANGE 'TPS2HTH.COF'!

THE ANIMDATA.D2:  
\--------------------------------------------------------------------

I'm sure you know how to edit the animdata.d2. Just search for the name of the .cof Files without the extension .cof and change the byte '0F' with your framecount of the animation belonging to that .cof File. Here one short list about that:

TPNUHTH.COF = Neutral (Standing) ANIMATION TPONHTH.COF = Neutral (Standing) ANIMATION TPOPHTH.COF = Opening Animation TPS1HTH.COF = Opening Animation

DO NOT CHANGE THE FRAMENUMBER FOR TPS2HTH.COF!!

THE OBJECTS.TXT: (Last framenumber changes)  
\--------------------------------------------------------------------  
6.)a) Extract first Objects.txt out of the PATCHD2.mpq using MPQVIEW b.) Now open it with one spreadsheet tool like D2Excel. Search (CTRL + F) for the string 'TP'. In this column (number 60) you have to change the values for 'Frmcount1', 'Frmcount2', 'Frmcount3'.

frmcount1 = number of frames of the opening animation frmcount2 = number of frames of the neutral animation frmcount3 = number of frames of the opening animation

EXCEPTION: If your number of frames of one or both animations can be divided through 8 (like 40) you have to increase this number by 1. (I had one 40 frames opening animation which caused an error in D2 so i used 39 as frmcount1 and frmcount3 and there was no error anymore ;) )

LAST STEP : COPY THE FILES:  
\----------------------------------------------------------------  
7.a) Copy the objects.txt in the 'data/global/excel/' folder. If there are some .bin files delete them before you start the game with -direct -txt.  
b.) Copy your 'HD', 'TR', and 'COF' Folder into the directory 'data/global/objects/TP/'. If there is no such directory create it of course!  
c.) Copy the edited animdata.d2 into 'data/global'.

\- If you run the game with an edited patchd2.mpq you have to put the files into these directorys in your patchd2.mpq!

\[i:d95255ac2a\]\*Alkalund's notice: you can use Joel Falcou's COFEdit tool to edit cof files fast and efficiently\*\[/i:d95255ac2a\]\[/color:d95255ac2a\]
