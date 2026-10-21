---
title: Armor.txt
summary: >-
  A name: in this column you will find the name of the armor which represents it
  in uniqueitems.txt, setitems.txt and gamble.txt. This field is used for
  internal reference only
keepId: 385
author: Nefarius
credit: by Nefarius
posted: '2006-06-21'
modified: '2018-01-06'
views: 7628
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=385'
---
A name: in this column you will find the name of the armor which represents it in uniqueitems.txt, setitems.txt and gamble.txt.  
This field is used for internal reference only

B Version: unknown, was added in v1.04 when the change to save file  
format was applied might have to do with the compactsave column below.  
This controls what version of the game this item is available in, prior to the expansion the column was not needed, in fact it seams Blizz was preparing for LoD when they added this!

C compactsave: seams to control if the item is saved 'as is' or  
will morph in the next game you join (i.e. before v1.03 of Diablo ii  
the items u made in the Horadric cube morphed after you left the game u  
made it in.  
0 = Save seed, durability, quantity and iLvl, 1 = Don't save anything but the item code.

D rarity: unknown, seams to have no effect on the items rarity.  
Unused prior to the expansion.

E spawnable: 1 means this item can be bought from a NPC, 0 means it cant.

F completed: has no effect, reference only.

G uniqueonly: setting for quest items which appear only as  
unique(Khalim's flail etc) 0 means it is a basic item which can have  
any quality, 1 means it is only possible as a unique.

H minac: the minimum defense this item has.

I maxax: the maximum defense this item has.

J absorbs: how much damage does this item absorb if you are hit  
Unused

K speed: how much does this armor slow you down wile running/walking?  
Positive speed: slower, Negative speed: faster

L reqstr: the amount of strength you need to use the item.  
Can't go beyond 255.

M block: how much base percentage to block this item has (for  
shields only, never tried to set a value for something else test it if  
you want to experiment).

N durability: the amount of durability, note you can set it to  
higher then 255, its just not recommended since you will need to repair  
the item every time you start a new game.

O nodurability: this is what I used to make indestructible base  
items, 1 means the item cannot be destroyed, 0 means it has durability  
and therefore can be destroyed.

P level: the level you need to gamble this item.  
And the level at which monsters can pick it from TreasureClass.txt

Q cost: the amount of gold this item costs as normal.  
The base amount to be correct.

R code: this is the code that represents the item inside many other  
files such as: .tbls .dlls and .txts. Note capital letters  
are not the same as small letters. The code must match exactly to what  
you type in other files. Never use a code twice unless yoy know what you  
do.  
About duplicate codes, prior to the expansion one could create morphing items this way, they transformed into something else when entering a new game.

S alternategfx: the animation the characters use wile wearing the item.

T OpenBetaGfx: the animation the characters use wile wearing the item, wile the game was in the beta(has no effect).  
Unused

U ubercode: the code of the exceptional version of the item, 0 means it is exceptional.

V spelloffset: unknown.

W component: unknown.  
This controlled what component of the animation this item will alter AND what itemtype it is. Remember, ItemTypes.txt was a hardcoded table prior to the expansion.

**X bodyLoc1:** the body location this item can be used at, (i.e. right/left hand etc)

**Y bodyLoc2:** the body location this item can be used at, (i.e. right/left hand etc)

**Z invwidth:** the width of inventory boxes this item has.

**AA invhieght:** the height of inventory boxes this item has.

**AB hasinv:** can this item have sockets? 1 means yes, 0 means no.

AC gemsockets: the amount of sockets this item can have for 2x4 items and 2x3 items the maximum is 6 and minimum is 1.  
Nowadays the maximum is 7, back then it was indeed 6. You could only have sockets in normal items.

**AD flippyfile:** the flip animation of this item (i.e. the animation displayed when it is dropped).

**AE invfile:** the inventory graphic for this item.

**AF uniqueinvfile:** the graphic this item uses if it is unique.

**AG rArm:** controls the graphic for the right arm.

**AH lArm:** controls the graphic for the left arm.

**AI Torso:** controls the graphic for the torso.

**AJ Legs:** controls the graphic for the legs.

**AK rSPad:** unknown, might have to do with the right shoulder pad.

**AL rLPad:** unknown, might have to do with the left shoulder pad.

**AM useable:** can this item be right clicked? 1 means yes, 0 means no.

**AN Throwable:** 1 means it is throwable, 0 means it is not.

AO stackable: 1 means it is stackable, 0 means it is not. (note  
only items that are 100% identical can stack that's why you should NOT  
set this column unless you make throwing potions. Note: if you make a  
throwing weapon it must have this column set unless you want infinite  
quantity, the item will have quantity if this is set but will not stack  
since its not identical.

AP minstack: the minimum stacked amount of the item you can find/buy it.

AQ maxstack: the maximum stacked amount of the item you can find/buy it.  
And the maximum stack it can have in general.

AR type: sets the item type (i.e. shield, helm, armor).

AS sound: this is the sound the game uses when the item is dropped or put in your inventory DUH.

AT unique: unknown.  
This column existed alongside the uniqueonly column, what it does is unknown, in later versions uniqueonly was removed and it's functionality was given to the unique column.

AU transparent: unknown, never tested it, might turn a item transparent.  
Unused

AV transtbl: unknown, from the name seams to be related to a .tbl file of some sort.  
Unused

AW quivered: is this item quivered? 1 means yes, 0 means no, I  
don't know what this does so unless you want to experiment around leave  
it at 0.  
Does this item require ammo to fire missiles. 0=no, 1=yes

AX lightradius: does this item have a lightradius if equipped? Set the amount of the radius here, seams to have no effect.  
Unused

**AY belt:** can this item be in your belt? 1 means yes and 0 means no.

**AZ quest:** does this item have to do something with a quest?

**BA missiletype:** what missile does this item use when thrown, use the ID numbers from missiles.txt.

**BB durwarning:** at what value of durability, the warning of low durability appears.

**BC qntwarning:** at what value of quantity, does the low quantity warning appear.

**AD mindam:** minimum smith damage of a shield.

**AE maxdam:** maximum smite damage of a shield.

BF gemoffset: unknown, probably useless or unused since no item has this set.  
Unused

BG bitfield1: unknown.  
1 = item is made from wood or leather, 3 = item is made from plates, (2 = item is made from chain IIRC), this is used by Iron Golem to determine what an item is made off.

BH-DY 'vendor'Min, 'vendor'Max 'vendor'MagicMin, 'vendor'MagicMax,  
'vendor'MagicLvl: these columns set how much and which vendor can sell  
what spawnable item. The MagicLvl columns should control the magic  
level for this vendor even this seams to be controlled by the area  
level value from levels.txt.  
This probably worked like it does now, look at my explanation about MagicLevel in the GMM forum.

DZ Source Art: unknown probably only for reference.  
Unused

EA Game Art: unknown probably only for reference.  
Unused

EB-EF Amazon, Paladin, Barbarian, Necromancer, Sorceress: probably  
unused, without a working code left, probably should have controlled  
class specific items, when the game was yet in development.  
Unused, these were likely meant to control class specific items, but the code for them was never part of the game, but you can test if you wish to experiment. There are even unused itemtypes for charms and orbs classic D2 pre 1.07, but they are likewise not used at all.

EG Transform: controls the degree the color of  
the item changes on the play screen, (this might be the reason for that  
unexplainable effect in XyRAX, with the Skull carapace, which gets  
bright colors, while a regular bone helm will not get such bright  
colors.

EH InvTrans: controls the same as above, just for the inventory graphics.

EI SkipName: unknown.  
Does the game display that items base name (based on the items code) or is this skipped and only the special name of the item is used (such as rare name, unique name, set name etc).

EJ-EK NightmareUpgrade, HellUpgrade: what item will be sold in  
shops instead of this item on higher difficulties, xxx means the item  
will stay the same as on normal, if you want it to be replaced, for  
example by its exceptional type you will need to enter the exceptional  
code (or any code of any item you want sold instead).

EL mindam: note this was used before v1.04 for shield minimum smith damage, the column used now is AD.  
Unused, they forgot to delete this column, it still is there in 1.'

EM maxdam: note this was used before v1.04 for shield maximum smith damage, the column used now is AE.  
Unused, they forgot to delete this column, it still is there in 1.'
