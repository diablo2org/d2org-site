---
title: Advanced Monster Modding
summary: >-
  So, you've got down the basics of monstats.txt, you can remove or add
  immunities, quadruple HPs, and can clone Diablo. [JBouley note: If you don't
  know anything about modding monstats.txt, I…
keepId: 172
author: Phrozen Heart
credit: by Foxbat
posted: '2003-12-02'
modified: '2018-01-06'
views: 9494
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=172'
---
So, you've got down the basics of monstats.txt, you can remove  
or add immunities, quadruple HPs, and can clone Diablo. \[JBouley  
note: If you don't know anything about modding monstats.txt,  
I recommend you go to the 'Resources' section of this  
site and view the information about the various columns in monstats.txt\]

Yet, you still want to change monsters further. You want your  
fallen to be a sickly green, you'd like wraiths to cast cold  
novas, or maybe those balrogs just swing their scimitars too  
slowly. Fortunately, you can change all of these, and this tutorial  
will show you how.

All the data files relevant to a monsters graphics are in  
d2data.mpq (D2exp.mpq for expansion monsters) at data\\global\\monsters\\xx,  
where xx is what is in the Token column in MonType.txt (you can  
also find it in monstats.txt, but modifying it there has no effect)

To change the graphics a monster uses, copy everything except  
the first column from one to another. This includes the important  
Token controling which graphics model is used, as well as the  
various XX\_Dir columns, which controls the number of directions  
that token has for animation XX. Then, in Monstats.txt, copy  
the Mode columns (BE-BT) from an old monster with the token you  
want to the new monster. Now you have a monster with new graphics,  
but the same old sounds and behavior. \[JBouley note: If  
this confuses you at all, refer to the other monster modding  
tutorial on creating enemy golems, which explains the key elements  
of the 'token change' process in great detail\]

Your new monster may be lacking some body parts, like heads,  
arms, legs, etc. That is because each line in monstats is coded  
to use certain body parts only. Sometimes this produces some  
interesting effects, and some mods do this on purpose, such as  
in the 'Sanctuary in Chaos' mod. But usually you will  
probably not want to do this. Usually you do better copying a  
token to a line with as many or more components. The columns  
AB-AQ in monstats are the various different componenets, a 1  
means this monster uses that component. Column AR is the total  
number of pieces. These lines are reference only and changing  
them has no effect, but they are a useful reference. \[JBouley  
note: FoxBat is right that all of these columns are important...but  
the Total Pieces is the most important to keep in mind...and  
as long as you clone a monster with as many (or fewer) Total  
Pieces than is listed in that row of monstats.txt, your monster  
will probably have all of its parts. Bear in mind that  
you cannot simply change the Total Pieces number...the  
value is hardcoded to each row and changing the number will not  
change that fact\]

If you take a peek in your MPQ at Data\\global\\monsters\\xx\\,  
you will find some directories. One is COF, the others are named  
after the different monster components as they are named in the  
monstats.txt columns. This is where you will find the various  
DCC files, which contains the raw graphic data. Each body part  
gets its own DCC file, as does each animation. Some monsters  
have multiple versions for different armor and weapons, the dccs  
somehow include the armor/weapon name in the title of the DCC.  
You can take a look at these with CelViewer, and perhaps copy  
them under new names for various purposes.

In the COF folder, you will find the COF files. These determine  
how the various DCC parts are put together. It also controls  
transparency of a monster (ghosts dcc makes transparency for  
example)

The Mode columns in monstats.txt control whether a monster  
will have that animation or not. You can turn off animations  
for some monsters if you like. For example, turning off the GH  
and KB columns will make a monster un-stunnable. However, if  
you put a 1 here and the token doesn't have that animation, you  
will get a crash. Usually you can tell if a mode is supported  
by looking at the standard values in monstats, but occasionally  
not. You can check the file data\\global\\AnimData.d2 in D2exp.mpq  
to find out, but you will need to be comfortable with hex editing  
(see the hex editing tutorial) If you are, then you can also  
learn how to change animation speeds, frames, and missiles.

Open animdata.d2 in your hex editor. Do a search for ASCII  
text of the name of the COF file (minus the .cof, and all caps)  
for the animation you want to change. You will find the text.  
The second byte after the text controls the number of frames  
that animation will use. If you are copying around dcc files  
to different tokens, you will also need to copy the number of  
frames in animdata.d2. Find the COF text in animdata.d2 for your  
old animation, and copy this byte to the same place after the  
COF text for your new animation.

The bytes appearing between that byte for number of frames  
and the text for the next animation are various flags. These  
include the speed that an animation is played back, and whether  
this animation can spawn missiles (many animations will not show  
the graphics/sounds for missiles) You can copy these flags from  
one animation to another to change the speeds and enable/disable  
missile firing ability.

Once you've enabled a monster animation to launch a missile,  
you might want to give that monster a missile, or maybe you just  
want to change the one they are currently using. Look at the  
MISS columns CB-CI in monstats.txt. Each corrosponds to a normal  
animation, like A1 (attack 1) S1 (special 1) etc. Whenever that  
animation is initiated, a missile will be launched at the monster's  
'target' 65535 means no missile, anything else will  
corrospond to the ID column in missiles.txt. Some missiles won't  
do damage in the hands of a monster, but most do.

Back to that COF folder...you will also see a palshift.dat  
file in most COF folders, and this is where monster colors are  
controlled. The palshift.dat contains all the different colors  
that that graphic type can appear in. You can just take a palshift.dat  
from another graphic token and drop it into your mod in a different  
token to make new colors, but sometimes this has ugly side effects.  
Maybe you do like how some of the monsters in that token now  
appear, but others look ugly. You can fix this with a little  
hex editing.

Open up the palshift.dat in your hex editor. Inside you will  
find 8 blocks of 256 bytes each. A single block contains the  
color change for a particular monster of that graphic token.  
Diablo II uses an 8-bit pallete of 256 colors, and this color  
change will convert one color from the dcc files to another based  
on the values in palshift.dat. The first byte will change color  
0 to the color matching the value at the first byte, the second  
byte will change color 1 to the color matching the value at the  
second byte, and so on.

You can manually edit the color that way, but you don't have  
to. Rather you may want to copy the colors for some of the entries  
in a different palshift.dat but not in others. Simply open up  
the palshift to copy from, copy the block you want, then paste  
it over the block in the palshift that you want to change.

But which block does the game use for a particular monster?  
Look at the BaseID column in monstats.txt. Going down monstats.txt  
from top to bottom, the first instance of a graphics token will  
use the 3rd block in palshift.dat. The second instance of a graphics  
token that also has the same baseID as the first instance will  
be the 4th block in palshift.dat. The third instance of a graphics  
token that has the same BaseID as the preceding two will be the  
5th block. And so on. If you leave the BaseID alone, then it  
is straightforward in that the first appearance of the token  
is the 3rd block, 2nd the 4th, 3rd the 5th, and so on. But if  
you change the baseID, then even though different monsters have  
the same token, if they have a different BaseID, then each gets  
their own seperate numbering for which color to recieve.

So why would we want to change the BaseID? Well maybe youre  
happy with the appearance and sound of a monster and would rather  
not risk messing with missing body parts, but you do want to  
change how the monster behaves. To copy a monster's behavior  
to another monster, copy the BaseID, Skill/SkillSeq/SkillLvl1-5,  
and AIParam1-5 columns to your target monster. SkillLvl will  
control the level of skill for a particular monster. In nightmare,  
3 is added to this value, in hell 7. You can change how much  
skill is added in the MonsterSkillBonus column in difficultylevels.txt.  
\[JBouley note: There is one other reason to worry about  
Base ID. Sometimes, you will clone a monster to a rows in monstats.txt/montype.txt  
and you will find that the monster refuses to attack and won't  
drop treasure. This happened to me when I cloned Duriel to the  
Diablo Clone row. By changing the Base ID number to match what  
the original Duriel had, the new Duriel-appearing monster would  
attack like it was supposed to.\]

The biggest problem you might have with this is the Skill  
Sequences, or the SkillSeq columns. Most monsters use a sequence  
for exectuing their skill. This sequence includes which animation  
to use, how many frames, and at what speed. It ignores the current  
graphics token you have selected and any of the values in animdata.d2.  
If the skillseq uses more frames than your monster has for the  
animation the skillseq selects, then you are likely to crash.

In many cases you can change the skillseq to another one with  
less frames to avoid a crash, just put in a different number  
in the skillseq column. Try to find a monster with a current  
skillseq that has about the number of frames you need and use  
that with your new monster. For some skills, you can also get  
around this with the MonAnim column in skills.txt. The Skill  
column in monstats tells you which skill is being used, find  
that skill's ID in skill.txt. Skills that are set up to use a  
Skillseq will have 'seq' in the MonAnim column. They  
then use the seq listed in monstats.txt when exectuing the skill.  
You can change this to another animation Mode and it will instead  
use the Mode's animation values for the token as found in AnimData.d2.  
But be aware that this will affect ALL monsters that use this  
skill, and won't work properly for every skill.

If your new monster behavior tries to use an animation Mode(column)  
that is not enabled, then they will go invisible. If the animation  
is set to stop when a 'target' is reached (a skillseq,  
or run) then they will flash invisible and then become visible  
again. Other actions that wait until the animation finishes (regular  
attack) will turn your monster invisible forever unless you attack  
him (and mode GH is enabled) Trying to add new animation Modes  
for a token is basically impossible because an entry for it must  
appear in AnimData.d2, but you can get away with just copying  
COF/DCC for animations that are used only by a skillseq, since  
the skillseq controls it and doesen't care about the animdata.d2.  
\[JBouley note: Speaking of invisibility, if you copy a  
monster/clone a monster to Rows 219-228 \[the Dark Guard, Diabolist,  
Hellmagus, etc. rows\], there is a very good chance your monster  
will work...but it will be invisible an unselectable. In other  
words, about the only way your character can hurt it is by casting  
nova-style spells or other area-of-effect/radius attacks. Hirelings  
and summoned creatures like golems and wolves can 'see'  
such monsters and attack them normally.\]
