---
title: Adding new Armors
summary: >-
  OK, there are two ways to do this: either you can copy an item, and change the
  attributes you feel confident with, or you can start totally from scratch. I'm
  going to deal with the second one,…
keepId: 415
author: Nefarius
credit: by 54x
posted: '2006-08-19'
modified: '2018-01-06'
views: 6534
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=415'
---
OK, there are two ways to do this: either you can copy  
an item, and change the attributes you feel confident  
with, or you can start totally from scratch. I'm going  
to deal with the second one, because it will answer a  
lot more questions.

I'll also be telling you about columns by their names  
and excel letter assignments, because with excel you  
can skip to any column you know the letter of with  
that nifty little box in the topleft corner.

The first column here is purely cosmetic, however  
you'll want to put the name you have in string.tbl  
here, too, so you know what your item is.

Next to it is version. If for any reason you'd like to  
disable an item, put 1 or 100 in this column. You can  
enable x-pack items in CD2 by changing their versions  
to 0.

Compactsave is simply set to 0 for everything. I don't  
think armor use this, and I have no idea why it is  
still included in the 1.08 texts...

Rarity gives a little control over the frequency of  
the item's drop, but not much. It is mostly controlled  
in treasureclass. Only excessively high numbers will  
have an effect here (notice gems have double-digit  
numbers, and they drop less frequently)

Spawnable is always set to 1 in 1.08- however if you  
simply copied a row to make an exceptional version of  
one of you items, set it to 0 to save yourself the  
work of editing shopkeeper entries.

Minac and Maxac are what control armor DR. If set to  
the same figure your armor will ALWAYS generate that  
amount of defense, and if set differently then the  
formula to find out the range is: Maxac - Minac - 1  
for CD2, and Maxac - Minac for D2X.

Absorbs, I believe is subtracted from monster AR...  
not sure though, it does have some non-DR defensive  
value though :)

Speed controls how this armor slows the character.  
You'll notice most heavy armors have 10, and that  
mails have 5. You can make an armor speed someone up  
by putting -5 or -10 or negative anything here.

Reqstr is how many points in strength you need to  
equip the armor.

Block is only for shields, and is the block % in CD2  
without class modifiers (if they look too small, this  
is why), and is the block % in D2X without class  
modifiers and without accounting for level and dex.

Durability and nodurability explain themselves.  
Setting nodurability to 0 allows durability, and  
setting it to one will make the item indestructable.  
Setting durability to won't work without setting  
nodurability to 1.

Level is the itemlevel, used for determining what sort  
of mods it should get and whether monsters should  
realistically be able to drop this item.

level requirement, cost, and gamble cost, should all  
explain themselves.

Code is VERY important. It is the source of most of  
the bugs when you first try to make a new item. Change  
this to an UNUSED code. It may not be used in  
misc.txt, armor.txt, or weapons.txt. Exceptional and  
Elite items as a general rule either have x, u, or a  
number in front of their code. You will need to make  
an entry in patchstring.tbl with the same name as this  
code, and then put your item's name in it, if you want  
to avoid: 'not xlated call ken' errors.

Magic level is currently only set on circlets - I  
believe it makes the level of affixes on the item a  
bit more concrete.

Auto prefix is covered in detail in the exclusive item  
tutorial. This column makes the game pick an affix  
from automagic.txt, with the group number you put in  
this column, every time the item is generated. This  
could make for interesting items, such as elf/drow  
chainmail that gains/loses defense in the night  
respectively...

alternategfx is what graphics the game uses on your  
character to display an item. You CAN'T add a new code  
in here at the moment. You will have to copy this from  
an item you like the look of. Don't copy it from the  
expansion columns if your mod is for CD2. It doesn't  
contain those graphics.

Openbetagfx does nothing. It's a reference column.  
Fill it if you like :)

Normal, uber, and ultra codes need to be filled in the  
same for the normal, exceptional, and elite versions  
of items. For skull caps they are skp, xkp, and ukp  
respectively- if the x and u codes you want are taken,  
use 1-0 instead (note: blizzard have avoided using 0  
in their text files for codes, so if you want to be  
SURE a code won't conflict, use a 0 in front of it)  
Note that these codes will need to match an actual  
item. I don't know what will happen if you leave them  
blank, but if you point to a version 1/100 item the  
item won't upgrade.

Spelloffset is another 'set to 0 and ignore' column,  
as far as I know.

Component should be copied from an item of the same  
type. If you're making a helm, use the same entry as  
for one of the helms.

Invwidth and invheight are the size of an item in your  
inventory. Long staves are 1 width and 4 height, for  
example.

Hasinv is set to 1 for items with sockets, 0 for those  
without. I'd follow this rule.

Gemsockets is the number of sockets this particular  
item can have.

Gemapplytype controls whether the item uses helm,  
shield, or weapon socketing affects. (helm and armor  
use the same type, dispite getting different listings  
on gem descriptions)

Flippyfile is the graphic this item has when dropping.  
I'm not sure if we can make new ones at the moment,  
but the codes you put in this column match the files  
that look like: 'flpltp.dc6.'

Invfile is the filename of the item graphics to use.  
If you've inserted your own, use it's file name, and  
insert the .dc6 file to data\\global\\items\\.

Uniqueinvfile and Setinvfile work the same as invfile,  
except they display only when they item is set or  
unique.

The next six columns are for body armors only- press  
'del' in these columns if you are making an item that  
is not a body armor. Otherwise, 0 is the 'nude'  
graphic for this part of the character, 2 is the fully  
decked out one. You'll notice that in D2 each  
combination isn't unique. You can modify it so that  
you can tell what armor someone is wearing by their  
ingame graphics, if you want :)

The next file columns should be set to 0. They were  
probably kept from an early stage in programming when  
weapons.txt and armor.txt were the same file.

Type should match one of the ones in itemtypes.txt. If  
you don't want to use a new one, simply go to a  
similar item that you used for your 'component'  
column, and copy it's entry.

Sound is the sound the item makes when it is moved in  
your inventory.

Unique should be set to 0. It is only used for quest  
items, or items, for some odd reason, you would like  
to ONLY show up as unique.

Not sure if transperent does anything. Set it to 1 if  
you'd like to experiment. Otherwise simply zero it and  
ignore it.

transtbl is set to 5. Do this, then ignore it :)

Quivered was inherited from weapons.txt. Set to 0 and  
ignore.

Lightradius COULD be used to make this item give you a  
larger light radius, without it listing this quality.  
Set it to 0 unless you want to make some cool  
always-glowing item :)

Belt is used ONLY for belt types (or another itemtype  
mimicing belts), and refers to a row in belts.txt. Set  
this to the same as the belt you'd like to mimic the  
capacity of.

Quest and missiletype can be set to 0 and ingored.

Durwarning is when the armor indicated shows up,  
telling the player their armor is damaged.

qntwarning is set to 0 and ignored in armor.txt.

mindam and maxdam are for shields. They control smite  
damage.

Set gemoffset to 0.

Bitfield should mimic a similar item. I have no idea  
what it does, but it seems to vary.

The next million columns control how items appear at  
NPCs. NPCmin and NPCmax control how many  
normal/superior/damaged/socketed items show up,  
NPCmagmin and NPCmagmax control how many magic ones  
show up. If you are adding a lot of items, I suggest  
setting the min columns for every item to 0, thus  
NEVER allowing the shopkeepers to be so full they  
crash the game.

I just set NPCmaglevel to 1 if the item is sold, 255  
if it isn't. I'm not sure if changing it otherwise  
will do much.

Sourceart and Gameart ignored. Press 'del' in them if  
you accidentally add something.

Transform and invtrans have something to do with how  
the game processes the graphics files. Mimic a similar  
item for this.

Skipname should be set to 0. This may give you bugs if  
you set it to 1.

Nightmareupgrade and Hellupgrade will replace this  
item with another at vendors in nightmare and hell. So  
if you want to make gambling in higher difficulties  
obsolete, set these to it's exceptional and elite  
codes :)

Mindam and Maxdam here control smite damage. I'm not  
sure which one is the one that is read, so set them  
both.

Nameable is whether the naming quest reward in D2X can  
be used on this item.
