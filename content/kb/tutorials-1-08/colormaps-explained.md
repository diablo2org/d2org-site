---
title: Colormaps Explained
summary: >-
  I'll talk about these files, so a knowledge of them is recomanded, despite not
  mandatory :
keepId: 423
author: Nefarius
credit: by Paul Siramy
posted: '2006-09-07'
modified: '2018-01-06'
views: 6760
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=423'
---
I'll  
talk about these files, so a knowledge of them is recomanded, despite  
not mandatory :

armor.txt  
weapons.txt  
misc.txt  
uniqueitems.txt  
setitems.txt  
colors.txt  
gems.txt  
d2data.mpq\\data\\global\\items\\palette\\\*.dat  
(like grey2.dat)

This doc explain the way the game use (or don't use) some colors on some  
items. It covers of course unique and set items, but also the socketing  
of gems, and tell why amulets and rings are all looking the same, despite  
there \* is \* some color info in some of them.

Lets's  
take an example and say you have a 'Sword of Ali Baba' in your  
stash, how the game will know the right file to use, and the right colors  
to put on it ?  
Take  
uniqueitems.txt. Search 'Ali Baba'.  
It is at the row 160.

transform  
\= 1  
invtransform = 1  
transformcolor = 9  
code = 9fc

Detailed  
description :

transform  
and invtransform are almost the  
same thing. They are booleans. transform  
is for the item in the animated version of the item, while invtransform  
is for only the inventory (not animated) version. By animated I mean  
equip yourself with the sword : your character will change a part of  
his look (the right arm), and while fighting / standing / running /  
... it is animated. If the item need to have its colors changed, they  
are set to 1, if not they are set to 0 or left blank. Beware : in order  
for the inventory version to be changed, the animated version \* must \*  
be set to 1. In other words, you can only have 3 types of unique items  
:

animated version  
have colors replacement, while inventory version have not  
both animated  
and inventory versions have colors replacement  
neither one of  
this versions will have colors replacement

It  
is impossible to have modified colors only in the inventory version,  
and not in the animated one. If you want to modify the colors of the  
inventory version, the animated will have (nearly) the same ones (as  
for the \* nearly \* I'll speak of it later).  
transformcolor  
is the 'Tint' that the item will have. If you open the colors.txt  
file, you'll have a description of them. There are 21 possible tints.  
Here they are :

0  
\= white  
  1 = light grey  
  2 = dark grey  
  3 = black  
  4 = light blue  
  5 = dark blue  
  6 = crystal blue  
  7 = light red  
  8 = dark red  
  9 = crystal red  
10 = light green  
11 = dark green  
12 = crystal green  
13 = light yellow  
14 = dark yellow  
15 = light gold  
16 = dark gold  
17 = light purple  
18 = dark purple  
19 = orange  
20 = bright white

If  
you're interested, you shall know that you can change these tints. Again,  
I'll explain later. In our case the Ali Baba sword will be more 'crystal red'  
than it is for now.

Now, open weapons.txt. Search the 9fc  
item (the row having 9fc in the code  
column, not in either normcode, ubercode  
nor ultracode). This is the row 123  
('Tulwar').

invfile  
\= invflc  
uniqueinvfile = (blank)  
Transform = 1  
InvTransform = 2  
uniqueinvfile  
is blank, so the game will take the value in invfile  
instead ( invflc ). This is the  
d2data.mpq\\data\\global\\items\\invflc.dc6 file. See the setinvfile  
just near ? Same thing when the game have a set item to draw : it first  
read the uniqueinvfile / setinvfile  
column, this will tell which dc6 to take, but if it's blank, the game  
will take the regular dc6 instead (invfile).  
flippyfile is the animated dc6 used  
when the item is dropped.  
At  
this point, a special note for Rings and Amulets. Open itemtypes.txt.  
Ring have :

VarInvGfx  
\= 5  
InvGfx1 thru InvGfx5  
\= invrin1 thru invrin5  
(dc6 files again)  
This  
his how the game choose random gfx for ring / amu / charm / jewel.

Transform  
and InvTransform this times are  
NOT booleans as you can see. They are indexs. They tell which colormap  
is to be used for each version of the item. A colormap (quickly) is  
a table that indicate which colors are to be changed into another. These  
colormaps can be found in d2data.mpq\\data\\global\\items\\palette. They  
will be used each time the game need to apply a new tint to the item  
: by socketing a gem in it, or to display either a unique or a set item.  
'Which colors of the item are to be changed ?' is what the  
Transform  
and InvTransform  
colums tell : choosing a different .dat file will make another colors  
to change, and therefore will make a slightly different item.  
Some  
tech notes (you can skip) :

The colormaps 'map' the colors, to obtain a replacement  
for some of them. These colormaps are 5376 bytes. 256 bytes (a whole  
palette's indexes) declined into 21 'tints'. Open the colors.txt  
file, you see a description of the tints used by the game, from white  
(index 0) to Bright White (index  
20). Just think of a colormap as 'I get a pixel having the index  
5 in the current palette. Now, I read the colormap to get the final  
color. Tint is 1, so I'll use bytes from 256 to 511 in the .dat file.  
Now, the pixel is index 5, so I take the 5th byte and I read : 15.  
So, in the final bitmap, I put a pixel of index 15 (not 5) at these  
place'. Should be enough to understand.

About palettes : you know what it is I suppose. In our case, the game  
use some 256 colors palettes, found in d2data.mpq\\data\\global\\palette.  
Each directory in there contains 1 palette, in 2 format : the .dat  
and the .pl2 ones. The .dat is easy : 768 bytes, Red Green and Blue  
componants for each of the 256 index, ranging from 0 to 255. Be carefull  
: these bytes are in the BGR order (not the usual RGB). The .pl2 format,  
I know nothing about it.  
Of  
course, if you're planing to make another colormaps, keep in mind  
that the game use 5 palettes : 1 for each act, so you should only  
map colors to the ones that never change, whichever the palette is  
used (except if you want to make item that have part (or whole) of  
their colors to change between the acts).

Here  
is the correspondance between the index of the  
Transform  
and InvTransform columns, and the  
.dat colormaps :

0  
\= special meaning : no colormap used, item will never change  
1 = grey.dat  
2 = grey2.dat  
3 = don't work, will do the same  
effect as 0  
4 = don't work, will do the same  
effect as 0  
5 = greybrown.dat  
6 = invgrey.dat  
7 = invgrey2.dat  
8 = invgreybrown.dat  
9  
\= will crash the game. Don't use value out of 0  
and 8.  
3  
and 4 must have been for the 'brown.dat'  
and 'gold.dat' files, but even if you try to use them, the  
game will consider them as 0.

You  
can use all available colormaps, for each version. That's it : you can  
put 0, 1,  
2, 5,  
6, 7  
or 8 in either / both Transform  
and InvTransform columns. But be  
aware that Blizzard used only some of them, as accordingly :

armor.txt  
: 0, 1,  
2, 5  
in Transform,  
and 0, 2,  
5, 8  
in InvTransform  
weapons.txt  
: 0, 1,  
2, 5  
in Transform,  
and 0, 1,  
5, 8  
in InvTransform  
misc.txt : 0  
(and this IS the reason why rings and amulets don't have another colors;  
the .txt file tell to use the colormap 0,  
which indicate 'no modifications'. Puting some value in  
there will allow unique / set rings and amu (but not runes as I have  
tested) to have another colors in their unique / set versions.

Back to the 'Tulwar' (you forgot it, right ?). So, our item  
have a 2 in InvTrans  
of weapons.txt. So, we will use the grey2.dat  
colormap (remember the number = .dat table ?). These means that only the  
grey colors will change, so the metal of this blade will be modified into  
another tint, while the pommel (which is not grey) will stay the same.  
Which tint ? The transformcolor in  
the uniqueitems.txt will tell us : there  
is a 9 for the 'Sword of Ali  
Baba', therefore the 'Tulwar' will look more Crystal  
Red than the original 'Tulwar'. Of course, for the  
advanced-user, by changing the colormaps (.dat files) you can obtain cool  
effects. But this is not the subject of this topic. Same method for the  
Transform  
column (animated item) : the game will use the grey.dat (not grey2.dat)  
colormap, and will use the same tint (crystal red).

Summary  
armor.txt,  
weapons.txt, misc.txt  
:

Transform  
\= colormap to use for the animated version of the item  
InvTrans = colormap to use for the  
inventory version (ie : 5 means  
greybrown.dat).  
Somewhat  
important note : colormaps are needed for unique, set, and socketed  
items. 0 will order the item to  
stay the same as in its original version, whichever tint another .txt  
file (like uniqueitems.txt) ask to  
use. Rings, amulets and such have 0  
in these columns, therefore this items always stay the same, but if  
we put another value in it (say 8  
for a global color modification) unique rings and amu will have tints  
enabled. Check 'Dwarf Star', 'Raven Frost' or 'Atma's  
Scarab' : they do have tint informations. With the use of the 8,  
the tints will appears.

gems.txt  
:

transform  
\= tint (not colormap) to apply on the item, when the gem is socketed  
into it. Unfortunatly, while in misc.txt  
the choice of a 8 instead of a 0  
works well with rings and amulets, it don't works with runes. Runes  
can't \*have\* nor \*make\* any tint effect.

uniqueitems.txt  
:

transform  
\= Boolean. 'Will the colormap as defined into armor/weapon/misc.txt  
will be use ?'. Only for the animated version of the item.  
invtransform  
\= same as above, but for the inventory version. Note that the inventory  
version need to have the animated version to be set, to be useable itself.  
transformcolor  
\= tint of the colormaps to be used (if can be applied) ranging from  
0 to 20.  
For having an idea, read the colors.txt  
file.

setitems.txt  
:

transform  
\= same  
as in uniqueitems.txt.  
transformcolor = same as  
in uniqueitems.txt.  
Used for each items of the whole set.  
You  
have noticed that there isn't any invtransform  
column in there. My guess is that the transform  
column is used for both the animated and the inventory versions of each  
items of the set.

Conclusion  
There  
may be some questions left, but I hope I have made it clearer. Oh, btw  
check a program I send to this site too : dc6color. It will help you to  
quickly see in a glance all the colors an item can have, and it's an help  
if you want to easily change some colors (or make and test you're own colormaps).  
Very usefull I think.
