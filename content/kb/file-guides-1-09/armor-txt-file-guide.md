---
title: Armor.txt File Guide
summary: >-
  name - This has no function, is a comment field. version - 0=Classic D2,
  100=Expansion (A item set to 100 here cannot be generated in classic d2).
  compactsave - Had to do with save files for smaller…
keepId: 221
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
modified: '2018-01-06'
views: 7869
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=221'
---
name - This has no function, is a comment field.  
version - 0=Classic D2, 100=Expansion (A item set to 100 here cannot be  
generated in classic d2).  
compactsave - Had to do with save files for smaller filesize, unknown if it  
still has a function.  
rarity - The higher, the rarer, It has a function, but only very high numbers  
will show any kind of effect (as most is controled by TCs)  
spawnable - 1=can be sold by NPCs, 0=can never be sold by NPCs (even if you make  
them sell it thru the vendor columns)  
minac - minium ac (cannot be negative, do not exceed 1024, internal limit for  
base ac)  
maxac - maximum ac (cannot be negative, do not exceed 1024, internal limit for  
base ac)  
absorbs - damage absorbation (probably like damage reduced by x) (unknown if it  
really works)  
speed - speed reduction (armor weight) (the higher, the slower you run) (setting  
it to -5 -10 etc might make you faster, thought untested)

reqstr - Required Strength 0-255 (if you exceed 255 it will restart at 0 aka 256  
is 1)  
block - chance to block.  
durability - base durability (255 is maximum, you can set higher values, but you  
will need to repair the item when ever you enter a new game)  
nodurability - 1=indestructible, 0=use durability  
level - base item level (aka a monster with a mlvl of 20 cannot drop a lvl30  
armor for eg, used by the 'armo#' preset TCs)  
levelreq - level reqirement (i dont think i need to explain this)  
cost - base cost (if you want this to be the actual cost edit itemtypes.txt)  
gamblecost - no effect, except for items like rings and amulets which are preset  
to be gambled in the dlls.  
code - the code used for this item alphanumeric code with 3 letters/numbers  
(capital letters are not considered identical to small letters aka AAA is not  
the same as aaa)

magic lvl - additional magic level when finding the item aka: If you gamble at  
lvl10 you can get lvl20 affixes if this is set to 10 for eg.  
autoprefix - Group # from automagic.txt (base affixes, like built in  
hp/resistances)  
alternategfx - display graphics on the character  
openbetwgfx - no use (reference to what alternategfx it was using in the d2  
beta)  
normcode - normal item code  
ubercode - exceptional item code  
ultracode - elite item code  
spelloffset - unknown  
component - the body cell used to wear this item (I dont know if this has  
priority over itemtypes.txt)

invwidth - width in inventory cells  
invheight - height in inventory cells  
hasinv - 1 can be socketed, 0 cannot be socketed (thought you need to enable it  
in itemtypes.txt aswell!)  
gemsockets - maximum number of sockets (maximum is 6, you can create more, but  
you will crash after filling mor ethen 6 sockets)  
gemapplytype - gem effecs 0=weapon, 1=armor/helm, 2=shield (do not use other  
values, you will crash)  
flippyfile - flip gfx (dropping gfx)  
invfile - inventory gfx  
uniqueinvfile - unique inventory gfx  
setinvfile - set inventory gfx

Character Armor gfx display: (0=none, 1=leather, 2=metal)  
rArm = right arm  
lArm = left arm  
Torso = well what could this be??? (lol)  
Legs = (i dont think there is some one who will not understand what this is)  
rSPad = right shoulderpad  
lSPad = left shoulderpad

useable - 0=you cannot rightclick, 1=you can rightclick on this item

throwable - can this item be thrown 1=yes, 0=no  
stackable - can this item be stacked 1=yes, 0=no  
type - base type (code from itemtypes.txt)  
sound - inventory/drop sound.  
unique - is this item always unique (quest items etc)  
transparent - unknown  
transtbl - unknown (Translate TBL Strings? aka decode)  
quivered - is this item a stack of ammo 1=yes, 0=no  
lightradius - basic light radius for this item. (dunno if it really works)

belt - numberic Id from belts.txt (defines number of potion slots)  
quest - for quest items (quest ID)  
missiletype - missile to shoot if you throw this item (id from missiles.txt)  
durwarning - the dur warning icon to display when the item is about to break  
qntwarning - quantity warning icon to display if you wasted most of the stack  
mindmg - smite damage for shields/kick damage for boots (minimum)  
maxdmg - smite damage for shields/kick damage for boots (maximum)  
gemoffset - unknown (maybe graphical gem placment offset?)  
bitfield - set to 1 for leather items, to 3 for metal ones.

Vendor Columns: (replace Vendor with the vendor name aka CharsiMin etc)  
VendorMin - minimum amount of items of this type the vendor can sell  
VendorMax - maximum amount of items of this type the vendor can sell (do not  
increase to much, you will CRASH if the game spawns to many items (aka there  
will be no room left))  
VendorMagicMin - has no function any more (blizz removed the 'magic'  
slot)  
VendorMagicMax - has no function any more (blizz removed the 'magic'  
slot)  
VendorMagicLevel - has no function any more (blizz removed the 'magic'  
slot)

sourceart - unknown (no function?)  
gameart - unknown (no function?)

transform - external palette shift intensity (1=most intense)  
invtransform - inventory palette shift intensity (8=most intense)  
skipname - for items like the viper amulet (which dosent say viper amulet two  
times) (skips the base name)  
nightmareupgrade - item code of the item the vendor will sell instead of this  
item on NM (xxx=no change)  
hellupgrade - item code of the item the vendor will sell instead of this item on  
HELL (xxx=no change)  
mindam - no function  
maxdam - no function  
nameable - 1=can be personalized, 0=cannot be personalized

Send any comments and corrections to Nefarius
