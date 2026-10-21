---
title: Overlay.txt
summary: >-
  This txt controls the overlay graphics. These graphics are usually associated
  with casting animations, auras, curses/buffs and states. Used by: States.txt
  Skills.txt Missiles.txt internally by the…
keepId: 465
author: Desocupado
credit: 'By Desocupado, restyled by Ogodei'
posted: '2011-01-27'
modified: '2018-10-24'
views: 9090
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=465'
---
**Overlay.txt file guide**

This txt controls the overlay graphics. These graphics are usually associated with casting animations, auras, curses/buffs and states.  
Used by:  
**  
[States.txt](/kb/file-guides/states-txt)  
[Skills.txt](/kb/file-guides/skills-txt)  
[Missiles.txt](/kb/file-guides/missiles-txt)  
internally by the code**

**Overlay**: This column defines the name the game will associate with your overlay in the related files.

**Filename**: The .dcc graphic file associated with the overlay. It is found within **_Data/Global/Overlays_**

**Version**: It states for which game version the overlay is. **0** for classic only, **100** for Expansion.

**Frames**: The game doesn't read this field, but rather the actual number of frames from the .dcc file.

**Character**: Unused. You can write on this field with no consequences at all.

**PreDraw**: It tells whether the overlay is shown behind characters or monsters. **0** if you want the overlay to be drawn in front of the units, **1**, if you want the unit graphics to take precedence.

**1ofN**: Default value is **1** . This field is for random overlay states that may set the overlay to index+rand(1ofN). I have no idea how to use it.

**Dir - Open- Beta**: Default value ranges from **0** to **1** , but produces no noticeable effects. You can even wrtie on this field with no consequences at all.

**Position Settings**  
NOTE: All values are in pixels.

**Xoffset - Yoffset**: As for the X axis, positive values will place the overlay to the left and negative values will place it to the right.  
For what concerns the Y axis, positive values places the graphic below, and negative values will place it above the target base.

**Height1- Height4**: These values modify the placement on Y-axis according to the unit height value set in [MonStats2.txt](/kb/file-guides/monstats2-txt).  
NOTE: If the value set in [MonStats2.txt](/kb/file-guides/monstats2-txt) is **0**, then it uses Height2. (Thanks to Nefarius for clarifying what heights are used for).

> This is actually a index in an array. That refers to the four height columns in Overlays.txt  
> Height1, Height2, Height3, Height4  
> Players always use Height2  
> A special case, if you set OverlayHeight to 0 ( the value returned by D2Common.10090 is decremented by 1 ), the special case -1 will  
> use a height 75 (i.e. the default ).

NOTE: Tests have shown that Height4 is only used by Prime Evils.

**Position Settings**

**AnimRate**: It controls how fast the animation play. Tests have shown that this field controls how many frames of animation are played per 25 frames of time. i.e. number of frames per second.

**LoopWaitTime**: This column seems to be unused. Nefarius pointed out that it is used by the game for some overlays that loop only periodically.  
NOTE: only itemgleam, multigleam, npcalert, gleamtest3 and gleamtest4 have values assigned via this field.

**Transparency and Light Settings**  
**Trans**:  
It changes the overlay blending mode accordingly to the value is set.

```
0 - Faded
1 - Half Solid with small black borders
2 - Entirely Solid with small black borders
3 - Entirely Solid without black borders (black = transparent)
4 - Darkened and Transparent (like a shadow)
5 - Entirely Solid with big black borders
6 - It looks like '2'...
7 - Whitened  and Entirely Solid with small black boarders (high gamma)
8 - Like '3' but it flickers
9 - It looks like '2'...
```

**InitRadius**: It seems to control the light radius increase per frame.  
WARNING: Never set it to **0 or below** or it will crash the game.

**Radius**: Controls the maximum light radius which must be **bigger or equal to **InitRadius****.  
NOTE: The Light radius only expands.

**Red - Green - Blue**: They control the color of the light radius.

**Unknown Settings**

**Radius**: The defaut value is 1. It produces no noticeable effects. You can even write on this field with no consequence if you want. The game reads the # of directions from the DCC file.

> **Note:** Only 'vulturedemonfeathers' overlay have a value of 4.

**LocalBlood**: It is not used in vanilla, and becomes useable only if you edit data/color.txt and set the localblood global boolean to true. It will then replace blood colors with the entries from GreenBlood.dat (which is actually gray).

> **Note:** In vanilla it's only used by two overlays 'durieldead\_rear' and 'tentacleheadbloodripple'.

**Recommended Readings**  
**MagicMatze** posted a nice [guide](https://d2mods.info/forum/viewtopic.php?t=23208) on using overlays to display a custom messages back on 2004.  
Also check the File Guides for:  
[States.txt](/kb/file-guides/states-txt)  
[Skills.txt](/kb/file-guides/skills-txt)  
[Missiles.txt](/kb/file-guides/missiles-txt)

**Tips, Ideas and Suggestion**

_1 - You can add an overlay to almost any skill by using the 'castoverlay' column on skills.txt. You could even add the monster animation as an overlay and produce an illusion effect while it casts some spell.  
2 - You can add overlays to the targets of some skills. This is done by adding the overlay to 'srvoverlay'. For example: vengeance could cause that neat overlay on 'extravengeance' easily, if you want.  
3 - Some missiles hit functions allows overlays. The classic 10/X (charged bolt function) being the most prominent example.  
4 - How the overlay is played depends on how it has been called. Usually only overlays used by states.txt are repeated._
