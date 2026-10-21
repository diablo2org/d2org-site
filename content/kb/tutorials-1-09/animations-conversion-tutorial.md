---
title: Animations Conversion Tutorial
summary: >-
  Thx go to TeknoKyo for clearing me up with some of the stuff and giving me
  some more accurate infos, and to Apocalypse Demon for spelling corrections.
keepId: 171
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 8327
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=171'
---
Acknowledgements:

Thx go to TeknoKyo for clearing me up with some of the stuff  
and giving me some more accurate infos, and to Apocalypse Demon  
for spelling corrections.

Animations Conversions

1.A Getting the Animations  
Lets say that you want to replace the foul crows with the hellfire  
torch ants, you will need to get the animations of the torch  
ants youwill have to download Cv5. It crashes pretty often but  
still, it is the only tool to use. Open hellfire.mpq with cv5  
(in you hellfire folder or on your hellfire cd) and go to the  
monsters folder in it. You will see many sub folders. Go down  
to the antworm folder and open it. Take to note that diablo 1  
and hellfire dont use the same mode code like d2 and d2x, the  
mode code used in d1 and hellfire is the following:

A - Attack  
D - Death  
H - Get hit  
N - Neutral (standing)  
S - Skill  
W - Walk

As you probably saw there is no corpse, since d1 and hellfire  
use the last frame (for the direction) in the D mode as the corpse.The  
animations of the torch ant have the following frames:

```
A - 96
D - 160
H - 48
N - 112
W - 96
```

Save all of these animations as  
ANIMATED .GIF. To save you ALOT of work later, make sure to ALWAYS  
load the diablo palette while saving diablo 1 and hellfire animations.  
Now you will have to get a decent gif animator, trash like ms  
gif animator won't do the job here so get something that is about  
as good as jasc animation shop pro which comes with paintshop  
pro. Now you will notice that the animations are not ordered  
like the D2 animations. The d1 animations are ordered in the  
following way: down, down left, left, left up, up, right up,  
right, right down while in d2 the animations are ordered as left  
down, left up, right up, right down, down, left, up, right. Cut  
and paste the  
frames until they are ordered like in the d2 animations. Remember  
that every directions contains /8 frames of the total frame count  
so an animation with 128 frames has 16 frames per direction.  
Now change the background color to #AAAAAA so that your animations  
won't have a black background. Now repeat this for all the animations.  
Now you will have to make a corpse animation, which is easy.  
Open the D(death) animation with the gif animator, remove all  
the frames  
except the LAST frames for each direction and save it as C. Now  
to the harder part. Open up d2data.mpq and browse with cv5 to data\\global\\monsters\\bk\\tr\\. You will see ALOT of animations.  
These are all the foul crow animations so make a list like the  
one below because you will find it VERY helpful later on.

A1 88  
DD 8  
DT 184  
GH 40  
NU 88  
WL 64

Now, as you notice the frames don't match. What you will have  
to do is see which part has more frames then the foul crow and  
you will end up with this:

nu bk=88 ta=112 and A1 bk=88 ta=96, if we will just go into  
the next step the game WILL crash so you will have to first find  
a cof file that has more frames than 112. To make your search  
easy goto the vulture demon folder (VD) and copy the VDNUHTH.cof  
file, rename it BKNUHTH.cof and put it in the BK folder. Do the  
same with VDA1HTH.cof and rename it to BKA1HTH.cof and put in  
BK folder. (if you dont know why I say put it in without reminding  
mpq2k or stuff like this, read the -direct -txt guide you can  
find on the phrozenkeep). This problem is fixed for now but now  
we get to the harder part. You will have to save the animations  
from hellfire as .dccs AND make the offsets match. To do this  
select the  
bktrlitnuhth.dcc file with cv5 and save it as .dcc. The window  
that will appear now will show you alot of slots for offsets.  
Copy the numbers in the first one and then save the image but  
as .gif, open the gif with a graphic tool and write down it's  
width and height. the offsets are the location of the animation  
on the play screen. If they don't match, the animation will appear  
to float or will not be  
targetable and will therefore look screwed up! The best way I  
found to get offsets is to do original offsets +new width-old  
width which will be like this: If the original offset 20x 20y  
and size is 100x100px, the  
new animation is 150x150px, the offsets will be 70x 70y. It is  
enough to get one offset for ALL the animations (thx to foxbat  
for clearing this up that you need only 2 matching offset instead  
of 16 ) this is only correct for d1 and hellfire monsters though! Now that you have  
the offset, save the edited .gifs as .dcc with cv5, set directions  
to 8, enter the offsets in the 16 slots and then click the save  
button on  
the .dcc panel. After this is done we can start the hex editing  
part. Just before this I will add some useful data about x/y  
systems and d2 modes.

The directions in x/y for offsets:

UP= -Y  
DOWN= +Y

LEFT= -X  
RIGHT= +X

As you probably noticed the MODES for d2 are quite different  
and there are much more graphics per monster. Here is a complete  
table to explain body parts, modes and sub modes:

HD - head  
TR - torso (or entire monster)

LG - legs  
RA - right arm  
LA - left arm  
RH - right hand  
LH - left hand  
SH - shoulders

S1 - overlay 1  
S2 - overlay 2  
S3 - overlay 3  
S4 - overlay 4  
S5 - overlay 5  
S6 - overlay 6

S7 - overlay 7  
S8 - overlay 8

Each might have sub modes:

DT - death

NU - neutral  
WL - walk  
GH - gethit  
A1 - attack 1  
A2 - attack 2  
BL - block

SC - cast  
S1 - skill 1  
S2 - skill 2  
S3 - skill 3  
S4 - skill 4  
DD - corpse

KB - knock back  
SQ - skill sequence  
RN - run

In case that your animation is made off more then 1 body part  
and has overlays, you can make 1x1 px animations with #AAAAAA  
color in the appropriate length to just make those disappear.

Now to the harder part, this editing might sound scary for  
many of the people that read this but it is easy. First I'll  
explain the difference between hex and dec numbers: decimal has  
10 numbers from the word

DECI 0,1,2,3,4,5,6,7,8,9

Hexadecimal has 16 numbers from the words HEXA and DECI which  
means 6 and 10. 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F the smallest  
number is 00 while the biggest is FF (255). Now remember when  
I told you to write down the frame counts:

```
A - 96
D - 160
H - 48
N - 112
W - 96
C - 8
```

A1 88  
DD 8  
DT 184

GH 40  
NU 88  
WL 64

Now we will have to divide all these by 8 which will be:

```
A - 12
D - 20
H - 6
N - 14
W - 12
C - 1
```

A1 11

DD 1  
DT 23  
GH 5  
NU 11  
WL 8

Those that match in this case DD and C will be removed from  
this list since there is no need to hex edit something that matches.  
(DUH!)

Now we will need to convert all of these to hex:

```
A - 0C
D - 14
H - 06
N - 0E
W - 0C
```

A1 0B  
DT 17  
GH 05  
NU 0B  
WL 08

As well as listing .cofs which will HELP alot while searching  
in the files later on with your hex editor

A1/A = BKA1HTH  
DT/D = BKDTHTH  
GH/H = BKGHHTH  
NU/N = BKNUHTH

WL/W = BKWLHTH

Now extract animdata.d2 from your d2exp.mpq and load it into  
your hex editor. I use Hex Workshop. In the editor search for  
the text strings of the .cof names from above. (eg: search for  
BKA1HTH now you will see somthing like this):

424B 4131 4854 4800 \*0B00\* 0000 0401 0000  
0000 0000 0000 0100 0000 0000 0000 0000

The frame count is stored in the byte marked with \*\* as you  
see from the converting before A1 has 0B frames and what you  
want to replace has 0C frames so edit that byte from 0B00 ro  
0C00 repeat this for every animation then save animdata.d2 and  
put it in data\\global. Now it's time to rename your new .dcc  
files so they can be used to replace the old ones. Rename the  
A.dcc to bktrlita1hth.dcc the D.dcc to bktrlitdthth.dcc and so  
on for the rest (H,N,W,C) and put these into data\\global\\monsters\\bk\\tr\\  
and put the .cofs into data\\global\\monsters\\bk\\cof. Now you can  
hex edit a palshift.dat file if you want to change the monsters color to what ever you like  
or use what they have now. Since this tutorial deals with graphics  
and not sounds I'll add a short but not full sound par. To use  
the hellbat sounds go to the monsters/newsfx folder and get the  
hellbat sounds, open them in a sfx program and change their type  
to 24000HZ 16Bit STEREO and put them in the appropriate folder.

Addendum:

Since first writing this tutorial, I found a very easy way  
to find offsets:

WIDTH - (WIDTH-(WIDTH/2)

so if width is 100 the x offset will be -50

For example: 100-(100-50) = -50
