---
title: Warcraft III Units in D2 (by SBM)
summary: >-
  This tutorial explains how to import WC3 animations into D2 without the use of
  a 3D program.
keepId: 307
author: Phrozen Heart
posted: '2004-10-29'
views: 13078
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=307'
---
I discovered a method to get the animations from a Warcraft III Unit  
WITHOUT using any 3D Program. This method is quite work-intensive but  
for me it is easier to get the animations on this way than one another. I posted on this method (my elf plugin) quite long ago and somebody asked me if i couldn't make a tutorial how i achieved it. So here it is.

Essentials:  
First of all you need a running version of the WorldEditor of Warcraft  
III!!!

Then you need some other programs:  
Gamani Gif Movie Gear [www.moviegear.com](http://www.moviegear.com)  
Hypercam V.2.10.02 [www.hyperionics.com](http://www.hyperionics.com)  
Palette Express 1.6 [www.risoftsystems.com](http://www.risoftsystems.com)  
D2 Palette for PSP (there are three palettes in the starterkit)

We want to get the necessary animations to put a Warcraft III Unit into  
D2. My method contains various parts. We have to do one after the  
other.

The theory of my method:

1.)We use the WorldEditor of Warcraft III to view the unit we would  
like to get the animations from.  
2.) Choose the animation of the mode you want to get!  
3.) We record one direction of the chosen animation using Hypercam.  
4.)  
a) We adjust the recorded direction and make first applying settings to  
the D2 palette using GAMANI.  
b.) We export the animation into individual images using GAMANI.  
5.) We apply the d2 palette to each exported image using Palette  
Express.  
6.)  
a) We import all these images into an animation using GAMANI.  
b) We will make some finally corrections to the animation using Gamani  
and we have finished our Work for one direction of the chosen  
mode animation.  
7.) Repeat the steps 3-6) for each direction of the chosen mode  
animation (remember a d2 monster has eight directions per mode  
animation!).  
8.) Put the eight different directions together to one animation in the  
right way using Gamani and save this animation.  
9.) Go to step 2) and choose the next animation we need.  
10.) The GetHit and the Corpse Mode Animation  
11.) Finished with mode animations

Now let's go into detail:

1.) Open your Warcraft III WorldEditor. Be sure that you set high  
details and quality ('File/Preferences/Grafic'). Use the  
Toolpalette/Unitpalette to choose a unit. This method has problems to  
record units with special light effects like an aura under their feets.  
Please take a unit without such effect. This unit will appear in the  
grey window on the left side of the program. Over the window you can  
change the animation of the unit and below the distance and the  
direction! Change the height and the width of this window to change  
this attributes of the unit. You can also increase or decrease the  
distance to zoom out or to zoom in. The unit's size should not be  
bigger than it should become in Diablo2.

2.) Now choose the animation you want to get. We need at last the following modes:  
ONE Attack Mode Animation  
ONE Death Mode Animation  
ONE Stand Mode Animation  
ONE Walk Mode Animation

Animations like Attack2, Spell are optional.

3.) We want to record one direction of the chosen mode animation. The  
first direction i would suggest would be the front direction (270  
Degrees). Experienced Modders could also follow the Animation guide for  
monster taking first the unit facing the down-left corner of the window  
(225 Degrees). Open Hypercam. Set 'Avi-File/Video Compressor = Full  
Frames (Uncompressed' and 'Frame Compression Quality = 100' for the  
best quality. Deselect 'Other Options/Record Cursor' to avoid problems.  
We have to set the region we want to record. Select 'Screen Area/select  
Region' and adjust the region (a rectangle) of the grey window you want  
to record. The region's height and width should be as little as  
possible without removing parts of the unit during the record. But you  
have to take into account that the unregisterd version of Hypercam adds  
a 16-pixel high banner on the top of your animation. So you have to  
make the rectangle a bit higher as it would be necessary. Look at the  
unit's animation and then select the region using Hypercam. Before you  
record the first direction you could change 'Avi-File/Frame rate per  
second' to a higher value to get a fluent animation. But be careful  
adjusting this value could create a non-fluent animation because your  
system is not good enough. After you have recorded the first direction  
neither change the unit's size nor the frame rate! Be sure to have  
adjusted the unit'size in a proper way. If the unit is bigger the  
chance increases that you get problems recording the direction. Now  
record the direction and check if all parts of the unit are inside the  
blinking rectangle during the record. You should stop the record after  
the unit repeated it's animation twice.

4.)a) Open the recorded .avi File with Gamani Movie Gear. Check if all  
parts of the unit are there during the whole animation. If for example  
the 'Unregisterd Hypercam 2' Banner has cut away the head of your unit  
you have to adjust the region to record new (step 3) and then you have  
to go on to step 4a). If the animation is good crop the banner and  
delete unnecessary frames in the animation until you have one fluent  
animation (and no twice repeating animation only once). Therefor play  
the animation, delete frames, play it again until it is fluent  
especially the iteration of the animation! If you work on the second  
till eight direction you have to be sure to have the same number of  
frames your first saved direction had. So if your first direction had a  
fluent animation with iteration with 24 frames all the other directions  
for the same animation mode must have 24 frames! Select 'ANIMATION/EDIT GLOBAL PALETTE' and set the Background color to '170,170,170'. If the top left color of the palette is '0,0,0' or '1,1,1' or similar set it to '5,5,1'!Save the animation with the name of the mode and the direction!

b) Select 'FILE/Export AS/INDIVIDUAL GIF IMAGES' and export your  
animation into a subdirectory splitted up into one image per frame.

5) Open Palette Express. Select 'Palette/Load Palette' to load your D2  
Palette (i think i used the one for PSP 7). Then mark the first five  
exported images ('Input') and select the directory for the output  
('Output'). Be sure to set 'Dither method = Nearest Color' to avoid  
changes in the palette of the images. Now apply the palette to the  
first five images and after that apply the palette to the next five and  
repeat this procedure until all exported images are applied to the D2  
Palette (you only have to follow this split up into five images per run  
when you use the non-bought shareware version like me).

6)a) Open Gamani Movie Gear. Select 'File/Insert Frames' and mark all  
exported images applied to the d2 palette in the step before.

b) Finally Corrections of the animation:  
b1)Select 'FRAME/global properties' and set the background transparent  
and select 'Background Color before drawing next picture'  
b2)Select 'Animation/Unoptimize'.  
b3)Set 'FRAME/GLOBAL PROPERTIES' and set the background to  
'170,170,170'  
b4)Select 'Animation/Optimize' and deselect 'Shrink Frames to smallest  
needed rectangle'  
b5)Save this animation '\*Mode\*\_\*direction\*\_with\_palette' where you have to replace \*Mode\* and \*direction\* with the Mode and the direction you recorded.

7) Now you have to do steps 3)-6) for each direction of the chosen  
animation mode.

8) If you have the eight directions open Gamani. Select 'File/Insert  
Frames' and choose the directions in the following order: unit facing  
down- left corner, unit facing down-right corner, unit facing  
upper-right corner, unit facing upper- left corner, unit's front, unit  
facing right side, unit's back, unit facing left side. You have to  
deselect a frame after you Inserted an animation otherwise the program  
inserts the frames before the selected one and not after the inserted  
direction! After you have done this you could check the frame number  
(which should be a possible multiplier of eight like 32,40,48 and so  
on). Save the complete mode animation file and be sure you find it  
;-)!This is one of the mode animation we will get into d2.

9) Choose the next mode animation we need. If there is an animation  
that looks like a knock-back effect (GetHit Mode) you could do the  
steps 3)-6) for that mode animation too and after that jump to step 11)

10) If there is no knock-back like animation you could also use the  
first 6-8 frames of the death mode animation (saved in part 9) of each  
direction and put them together to save it as the new gethit mode  
animation. For the corpse mode animation you have to open the death  
mode animation (saved in part 9) and delete all frames except the last  
of each direction and save it as the new corpse mode animation. Be sure  
that you haven't deleted now your death mode animation!

11) Read the Animation Tutorial and get the mode animations into d2 to  
get your Warcraft III Unit into D2!

This method is like i said really work-intensive but until i found a 3D  
Program that really shows the models of WC3 and not meshes in a 2D area i will use it. You can also use this method for NWN Models with the  
Aurora Neverwinter Nights Model Viewer instead of the WorldEditor. But  
the models have no death/corpse and gethit animation which is no  
problem for summoned creatures but for other monsters.  
This is the first version of the tutorial, i will add further  
explanations if it is necessary. Please ask if there are any problems understanding this tutorial.![icon\_mrgreen.gif](/kb/img/d2mods.info/forum/images/smiles/icon_mrgreen.gif)
