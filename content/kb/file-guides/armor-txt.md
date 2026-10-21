---
title: Armor.txt
summary: This guide contains all the information you need concerning Armor.txt
keepId: 2
author: Phrozen Heart
credit: 'by Nefarius, Kingpin, Ric Faith & Paul Siramy, expanded and restyled by Ogodei'
posted: '2007-04-18'
modified: '2022-05-25'
views: 35280
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=2'
---
This guide contains all the information you need concerning Armor.txt

Before you start reading what each column does , please take note of the following:

_**[Misc.txt](/kb/file-guides/misc-txt) and [Weapons.txt](/kb/file-guides/weapons-txt-file-guide) have many identical columns. That's because in fact these 3 text files are, in truth, three parts of a single big file : when the game reads these 3 tables, it merges them all, one after another, into one and unique table. These 3 text files contain all the base items of the game : **normal** / **exceptional** / **elite** versions of the in-game items. Incidently, that means you can add columns to any one of these 3 files. For instance if you add the columns Transmogrify,TMogType, TMogMin and TMogMax to Armor.txt and use them for an Helm, then this Helm will be able to be Transmute into another item, something that doesn't look possible at first glance since the 4 columns are not originally in Armor.txt.**_  
**_NOTE: to add columns in a .txt, don't use D2Excel, as this program can't do the job. Instead, use MS Excel or another spreadsheet that can import and export tab-delimited .txt files._**

\- Related text files: Armor.txt

\- Is used together with:  
[AutoMagic.txt](/kb/file-guides/automagic-txt)  
[ItemTypes.txt](/kb/file-guides/itemtypes-txt)  
[Missiles.txt](/kb/file-guides/missiles-txt)  
[Sound.txt](/kb/file-guides-1-09/sounds-txt-file-guide)  
[ItemStatCost.txt](/kb/file-guides/itemstatcost-txt)  
Belt.txt  
Composit.txt

\- Has some of its columns read from:  
[CharStats.txt](/kb/file-guides/charstats-txt)  
[CubeMain.txt](/kb/file-guides/cubemain-txt)  
[SetItems.txt](/kb/file-guides/setitems-txt-file-guide)  
[UniqueItems.txt](/kb/file-guides/uniqueitems-txt)  
CompCode.txt

Now, let's move to the columns themselves!

**name** : Reference only.

**version**: it needs to be set to **0** if the item you want to create or  
edit is going to be an item available in both classic and expansion ( with "classic" we mean "non-expansion" mode, which you can toggle on and off when  
creating a character) or set to **100** if the item is going to be only available in expansion. This field is important, as **Items with " **version**" set to**  
**100** **will NOT be generated in Classic games**.

**compactsave**: This field is a boolean and is related to the save files. An item that is saved in a  
compact way takes less space in the save file, but in counter-part it has no stats, meaning, basically, it will not have quantity,  
automagic, affixes, damage, armor, durability etc. In vanilla, this is mostly used by items which don't need any stats to be  
stored, like Healing \\ Mana potions and Gems.

**rarity**: Rarity, if set to **0** , excludes the item(s) to be dropped  
from the armor racks. If set to something **bigger than 0** , then it sets the rarity for this item to  
drop from any armor rack. The higher, the rarer.  
NOTE: You need at least 1 armor with rarity 0 or 1, otherwise the game will crash when you use an armor rack,  
simply because it won't find any armor available.

**spawnable**: if set to **0** , this field tells the game that the item  
cannot be found for sale when you interact with NPC's. Setting it to **1** has the opposite effect.

**minAC - maxAC**: The minimum and maximum Armor Class (AC) this item can have. Take note that  
[ItemStatCost.txt](/kb/file-guides/itemstatcost-txt) sets the limit to how high Defense can be.

**Absorbs**: Unused. It is a leftover field.

**speed**: If set to a positive value, then it slows down your character when worn. Negative  
values, instead, will render the character faster.

**reqstr**: Strength required to wear this armor. it ranges from **0** to  
**65535** .  
NOTE: If you set it higher than the maximum or lower than the minimum, you will have a rollover.

**levelreq**: Level Requirement. The minimum level the players must be to use that item.

**block**: Chance to block. Block chances are capped at 75%

**durability - nodurability - durwarning**: Durability sets the base durability, and ranges from  
**0** to **255**(if set higher or lower than these two caps, you'll have a  
rollover). NoDurability means the item has not any durability. DurWarning displays the warning icon on the right part of your  
screen when the Durability of the item hits the amount set here.

**indestructible**: If set to **0** , then the item will be indestructible.  
If set to **1** , then the item will be subject to durability and can get broken. Indestructible items  
DO NOT read any of the durability related fields.

**cost**: Base cost of the item.

**gamble** : Overrides the default Gamble Cost, but it only works for Rings and Amulets in  
[Misc.txt](/kb/file-guides/misc-txt)

**code**: This is a 3 or 4 alphanumeric code which identifies the item for certain purposes.

**namestr**: It is the name string of the item.  
NOTE: If this string is NOT present in a TBL, it will be considered directly as the name of the item, but if this  
code IS present in a TBL then it'll be that TBL record that will be used as the name of the item instead. Also, keep in mind that  
if you want a string name with at least 1 space, then you'll have to create a record in a TBL.

**normcode - ubercode - ultracode** : There are the "code" strings referring to the normal,  
exceptional and èlite version of the item. These codes are used to know the version of an item in certain situation, like when  
generating the outputs set in [CubeMain.txt](/kb/file-guides/cubemain-txt)  
_\-- Example --  
Lion Helm has a code of ba7, and it's classified as Exceptional, because it has:  
**normcode** = ba2  
**ubercode** = ba7  
**ultracode** = bac  
So, the Lion helm is an exceptional item, and cube recipes which require normal or ultra items won't work_

**level** : Base item level, also known as "Quality Level" or "qLvl".  
NOTE: this is NOT the iLvl of the item. ILvl indicates which affixes can appear on the item. QLvl is, instead, used when the game creates the treasure class and preventing chests and monsters from dropping items of every posible level.  
_\-- Example --  
A Level 20 monster will never drop a Level 30 armor used by the "armo30" preset row in [TreasureClassEx](/kb/file-guides/treasureclassex-txt-file-guide-totally-new)_

**magic lvl** : it is the Additional magic level a.k.a mLvl (do not confuse mLvl with other similar names like mLvl intended as Monster Level or cLvl, intended as Character Level).  
_\-- Example --  
If mLvl is set to 5 and a level 10 player gambles an item, you get cLvl + mLvl affixes, so Level 15 affixes_

**auto prefix** : it is a prefix automatically spawned on the item, taken from the column "group" of [Automagic.txt](/kb/file-guides/automagic-txt).

**alternategfx** : it's the code of the DCC used by the Player animation while equipping the item.

**OpenBetaGfx**: Unused. Reference to which alternategfx was used in the Beta version.

**spelloffset**: Unknown. Only present in Armor.txt

**component**: Layer of the Player Animation used by the item, taken from Composit.txt  
The Composit table is indexed as follows:

```
1.Head	HD
2.Torso	TR
3.Legs	LG
4.RightArm	RA
5.LeftArm	LA
6.RightHand	RH
7.LeftHand	LH
8.Shield	SH
9.Special1	S1   (shoulder #1)
10.Special2	S2 (shoulder #2)
11-Special3	S3
12-Special4	S4
13.Special5	S5
14.Special6	S6
15.Special7	S7
16.Special8	S8
```

**rArm - lArm - Torso - Legs - rSPad - lSPad**: These columns indicates how the character graphics and animations will be altered by wearing the item. It ranges from -1 (remove even the light\\naked version) to 2 (heavy version).  
These indexes are taken from the table indexes located in ArmType.txt which is hardcoded.

```
0.Lite	        lit
1.Medium	med
2.Heavy	hvy  
```

  
[If you'd ever wish to extend this table, follow this simple ASM code edit:](https://d2mods.info/forum/viewtopic.php?f=8&t=65261&hilit=ArmType)

**flippyfile - invfile - uniqueinvfile - setinvfile**: These four columns contains DC6 filenames to use for various cases:  
\- **flippyfile** is the animation used when the item drops on the ground,  
\- **invfile** is the item image when it's in your inventory  
\- **uniqueinvfile** is used by the unique version of the item in your inventory  
\- **setinvfile** is used by the set version of the item in your inventory  
All of these files are located in **_Data\\Global\\Items\\_**

**invwidth- invheight**: width and heght of the item, in terms of inventory cells.  
**hasinv- gemsockets - gemapplytype** : These three columns are used as socketing parameters.  
\- **hasinv** states if the item has an "inventory", meaning it's able to store gems or runes within. ( **1** : yes ; **0** : no).  
\- **gemsockets** determines the potential maximum amount of sockets, capped to width \* height. In addition, there are three fields in [ItemTypes.txt](/kb/file-guides/itemtypes-txt) that limit the number of sockets, based on the level of the monster that drops the item. These columns are MaxSock1, MaxSock25 and MaxSock40.  
\- **gemapplytype** determines which kind of effect the gem will apply to the item it's inserted within:

```
   0 = weapon
   1 = armor / helm
   2 = shield
```

If you use other values, your item won't be able to have sockets.

**useable**: It specifies whether the item can be used via right-click. ( **1** : yes ; **0** : no). This is a column often used in [Misc.txt](/kb/file-guides/misc-txt) for potions and scrolls  
NOTE : The game knows what to with the item by its code. Unless you're doing dll editing, don't expect an item to do something  
just because you have set this column to 1.

**Throwable**: Not used here.

**missiletype**: Missile gfx to load when the item is thrown, taken from [Missiles.txt](/kb/file-guides/missiles-txt)

**stackable - minstack - maxstack - qntwarning**: These four columns handle the possibilty, for the item, to be stacked.  
**stackable** decides if the item can be stacked or not. ( **1** : yes ; **0** : no).  
**minstack** : Minimum quantity of the stack when the item is spawned.  
**maxstack** : Maximum quantity of the stack when the item is spawned.  
**qntwarning** : Quantity from which the warning message appears.  
NOTE: These columns are not used in Armor.txt, but only in [Misc.txt](/kb/file-guides/misc-txt) (Keys, Books) and [Weapons.txt](/kb/file-guides/weapons-txt-file-guide) (Javelins, Arrows ...)

**type -type2** : Base types of the item. Types are used in various instances like when messing with Cube Recipe and Socketing. They're taken from the field named "code" in [ItemTypes.txt](/kb/file-guides/itemtypes-txt).

**dropsound - dropsfxframe - usesound** : these three columns are related to the item sound. The code is taken from the field "Sound" in [Sounds.txt](/kb/file-guides-1-09/sounds-txt-file-guide).  
\- **dropsound** is used when the item drops on the ground.  
\- **dropsfxframe** is the point (measured in frames) after which the sound from 'dropsound' plays.  
\- **usesound** is the sound played when the item is used or moved through the inventory.

**quest - questdiffcheck** : these two columns are related to quests:  
\- **quest** handles some hardcoded ID's for quest items. Quest items are counted as Uniques and cannot be sold to NPC's.  
\- **questdiffcheck** indicates that the item has a difficulty check. When set to 1, this item will only work in the difficulty in which it's been found.  
NOTE: This column is originaly only present in [Misc.txt](/kb/file-guides/misc-txt) and [Weapons.txt](/kb/file-guides/weapons-txt-file-guide).

**unique** : If this column is set to **1** , then the item can only spawn as unique.

**transparent - transtbl** : Unknown. Apparently has no effect in game.

**quivered** : It tells if the item needs ammunitions to work or not. ( **1** : yes ; **0** : no).

**lightradius**: Not used.

**Belt**: This column has two different meanings. In Armor.txt it works as an index telling which type of belt the item is:  

```
0: no belt (1 potion row only)
1: Sash (2 potion rows)
2: not used
3: Girdles (4 potion rows)
4: light belts (2 potion rows)
5: heavy belts (3 potion rows)
6: uber belts (4 potion rows)
```

while in [Misc.txt](/kb/file-guides/misc-txt) the column has another meaning, which states whether the item can or cannot be put inside the belt cells. ( **1** : yes ; **0** : no).  
NOTE: Since [Misc.txt](/kb/file-guides/misc-txt) and Armor.txt are part of the same file, it seems that the game looks for the type of the item first, and \*then\* decide how to understand the value in this column.

**mindam - maxdam**: Minimum and Maximum damage that this item provide. If used on a shield or on a pair of boots, the damage in question will be either Smite or Kick damage.

**StrBonus- DexBonus**: The amount of Strength and \\ or Dexterity required to double the damage output while wearing this item. In Armor.txt it is important to note that only boots are using this column.  
However, here is an example that will clarify any doubt in regard.  
_\-- Example --  
We have a Maiden spear, which has a StrBonus of 80, a DexBonus of 50, 2-hand mindam of 18 and a 2-hand maxdam of 24.  
Now, if the player has 100 Strength and 120 Dexterity, the item's damage output will be 83-111 instead of 18-24.  
By Strength, it will be affected this way:  
\- Min = 18 \* 100 / 80 = 22.5  
\- Max = 24 \* 100 / 80 = 30  
By Dexterity, it will be affected this way:  
\- Min = 18 \* 120 / 50 = 43.2  
\- Max = 24 \* 120 / 50 = 57.6  
Total  
\- Min damages = 18 + 22 + 43 = 83  
\- Max damages = 24 + 30 + 57 = 111  
_

**gemoffset**: Placeholder field used to link a socketable item with the corresponding record in [Gems.txt](/kb/file-guides/gems-txt), where one exists. Data is filled in during the game loading. It is unknown if non-zero values allow multiple record selectivity.

**bitfield1**: Bitfield used primarily for various things, most remarkably the item material.

```
1 = Leather item
3 = Metal item, which allows the creation of iron golem
```

**vendorMin - vendorMax - vendorMagicMin - vendorMagicMax - vendorMagicLvl**: These columns control what the different Vendors can sells.  
"Vendors" are

```
Charsi
Gheed
Akara
Fara
Lysander  
Drognan
Hratli
Alkor
Ormus
Elzix
Asheara
Cain
Halbu
Jamella
Larzuk
Malah
Drehya (Anya)
```

  
**vendorMin - vendorMax** act as minimum \\ maximum amount of items of this type the vendor can sell. Do not increase these values too much or you will risk to crash the game if it spawns too many items.

**vendorMagicMin - vendorMagicMax** have the same purposes as the ones above, but for the magical items

**vendorMagicLvl** controls the mLvl of the affixes an item can get.

**PermStoreItem** : This field is originally absent in Armor.txt, but you ought to add it as it's used to make Permanent items, so that vendors will always sell them. ( **1** : yes ; **0** : no).

**Source Art - Game Art**: Not used.

**Transform - InvTrans** : These fields let you mess around with colors.  
\- **Transform** states the colormap to use for the player's gfx  
\- **InvTrans** states the colormap to use for the inventory's gfx  
You need to use the Code from Colors.txt

```
Transform Color	Code
White	whit
Light Grey	lgry
Dark Grey	dgry
Black	blac
Light Blue	lblu
Dark Blue	dblu
Crystal Blue	cblu
Light Red	lred
Dark Red	dred
Crystal Red	cred
Light Green	lgrn
Dark Green	dgrn
Crystal Green	cgrn
Light Yellow	lyel
Dark Yellow	dyel
Light Gold	lgld
Dark Gold	dgld
Light Purple	lpur
Dark Purple	dpur
Orange	oran
Bright White	bwht
```

**SkipName** : For items like the viper amulet, It makes the game skips the Base name in the item description.

**NightmareUpgrade - HellUpgrade** : These columns handle the code of the item the Vendor will sell instead of this item in Nightmare / Hell. Set these to 'xxx' for not having any change

**nameable** : Used by the reward of Anya's quest and tells if the item can be personalized or not. ( **1** : yes ; **0** : no).
