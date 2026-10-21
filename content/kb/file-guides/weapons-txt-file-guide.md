---
title: Weapons.txt File Guide
summary: >-
  9/7 fileguide completed. 9/7. Added my discovery on how component column
  works. 9/7. Added explanation for alternativegfx column (thanx Paul) and it
  still works in 1.10
keepId: 346
author: Nefarius
credit: 'by Kingpin & Ric Faith, Restyled by Ogodei'
posted: '2008-10-10'
modified: '2024-10-27'
views: 24107
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=346'
---
Weapons.txt

_This guide is based on Ric Faith 1.09x guide._

_9/7 fileguide completed.  
9/7. Added my discovery on how component column works.  
9/7. Added explanation for alternativegfx column (thanx Paul) and it still works in 1.10_

Armor.txt ,_**[Misc.txt](/kb/file-guides/misc-txt) and [Weapons.txt](/kb/file-guides/weapons-txt-file-guide) have many identical columns. That's because in fact these 3 text files are, in truth, three parts of a single big file : when the game reads these 3 tables, it merges them all, one after another, into one and unique table. These 3 text files contain all the base items of the game : **normal** / **exceptional** / **elite** versions of the in-game items. Incidently, that means you can add columns to any one of these 3 files. For instance if you add the columns Transmogrify,TMogType, TMogMin and TMogMax to Armor.txt and use them for an Helm, then this Helm will be able to be Transmute into another item, something that doesn't look possible at first glance since the 4 columns are not originally in Armor.txt.**_  
**_NOTE: to add columns in a .txt, don't use D2Excel, as this program can't do the job. Instead, use MS Excel or another spreadsheet that can import and export tab-delimited .txt files._**

**name**: Reference only, its a comment field.

**type - type2**: first base type (code from [ItemTypes.txt](/kb/file-guides/itemtypes-txt))

**code**: This is a 3 or 4 alphanumeric code which identifies the item for certain purposes.

**alternategfx** : it's the code of the DCC used by the Player animation while equipping the item.  
Example:  
For instance, the Gothic Shield (code=gts) has kit in its alternategfx column. That means that if a Barbarian equip himself whith that shield, in his A1 (Attack 1) mode animation his SH (Shield) layer component will use the DCC BASHKITA11HS.DCC, and NOT the file BASHGTSA11HS.DCC nor the file BASHBUCA11HS.DCC.

**namestr**: It is the name string of the item.  
NOTE: If this string is NOT present in a TBL, it will be considered directly as the name of the item, but if this  
code IS present in a TBL then it'll be that TBL record that will be used as the name of the item instead. Also, keep in mind that  
if you want a string name with at least 1 space, then you'll have to create a record in a TBL.

**version**: A value of **0** means the item will only spawn in classic. A value of **100** makes it available in Expansion.

**compactsave**: Boolean which ranges from **0** to **1**. This is used to get a smaller filesize but will NOT save any stats to the item, this means it will not save any quantity, automagic, affixes, damage, armor, durability e.tc. This is often used by items that don't need any stats stored like Healing potions, gems.

**rarity**: Rarity, if set to **0** , excludes the item(s) to be dropped  
from the armor racks. If set to something **bigger than 0** , then it sets the rarity for this item to  
drop from any armor rack. The higher, the rarer.  
NOTE: You need at least 1 armor with rarity 0 or 1, otherwise the game will crash when you use an armor rack,  
simply because it won't find any armor available.

**spawnable**: if set to **0** , this field tells the game that the item  
cannot be found for sale when you interact with NPC's. Setting it to **1** has the opposite effect.

**mindam - maxdam**: Minimum and Maximum damage that this item provide. If used on a shield or on a pair of boots, the damage in question will be either Smite or Kick damage.

**1or2handed**: It is a boolean which can be set to color=#FF00BF\] **0** \[/color\] or color=#FF00BF\] **1** \[/color\] and decides whether weapon can be carried in 1 or 2 hands by Barbarian

**2handed**: A boolean which states if the weapon is either one handed or two handed.

**2handmindam - 2handmaxdam**: Minimum and Maximum two-handed damage the weapon causes

**rangeadder**: Adds additional range for melee weapon attacks (bare hand's range = 1)

**speed**: If set to a positive value, then it slows down your character when worn. Negative  
values, instead, will render the character faster. This speed value is of course further modified by each classes individual weapon proficiencies

**StrBonus- DexBonus**: The amount of Strength and \\ or Dexterity required to double the damage output while wearing this item. In Armor.txt it is important to note that only boots and shields are using this column.  
However, here is an example that will clarify any doubt in regard.  
_\-- Example --  
We have a Maiden spear, which has a StrBonus of 80, a DexBonus of 50, 2-hand mindam of 18 and a 2-hand maxdam of 24.  
Now, if the player has 100 Strength and 120 Dexterity, the item's damage output will be 43-57 instead of 18-24:  
\- Min = 18 \* ( 100 + 100 \* 80 / 100 + 120 \* 50 / 100 ) / 100 = 43  
\- Max = 24 \* ( 100 + 100 \* 80 / 100 + 120 \* 50 / 100 ) / 100 = 57  
Also note that this damage bonus is additive with other +dmg% bonuses, such as the 'damagepercent' stat and Damage: +#% from attack skills._

**reqstr**: Strength required to equip this weapon. it ranges from **0** to  
**65535** .  
NOTE: If you set values exceeding the caps, you will get a rollover.

**reqdex**: Dextity required to equip this weapon. it ranges from **0** to  
**65535** .  
NOTE: If you set values exceeding the caps, you will get a rollover.

**durability - nodurability - durwarning**: Durability sets the base durability, and ranges from  
**0** to **255**(if set higher or lower than these two caps, you'll have a  
rollover). NoDurability means the item has not any durability. DurWarning displays the warning icon on the right part of your  
screen when the Durability of the item hits the amount set here.

**level**: base item level.  
Example: a monster with a mlvl of 20 cannot drop a lvl30 item.

**levelreq**: the minimum level the players need to have to use that item

**cost**: Base cost of the item.

**gamble cost**: not used, reference only.

**magic lvl** : it is the Additional magic level a.k.a mLvl (do not confuse mLvl with other similar names like mLvl intended as Monster Level or cLvl, intended as Character Level).  
_\-- Example --  
If mLvl is set to 5 and a level 10 player gambles an item, you get cLvl + mLvl affixes, so Level 15 affixes_

**auto prefix** : it is a prefix automatically spawned on the item, taken from the column "group" of [Automagic.txt](/kb/file-guides/automagic-txt).

**OpenBetaGfx**: Unused. Reference to which alternategfx was used in the Beta version.

**normcode - ubercode - ultracode** : There are the "code" strings referring to the normal,  
exceptional and èlite version of the item. These codes are used to know the version of an item in certain situation, like when  
generating the outputs set in [CubeMain.txt](/kb/file-guides/cubemain-txt)  
_\-- Example --  
Lion Helm has a code of ba7, and it's classified as Exceptional, because it has:  
**normcode** = ba2  
**ubercode** = ba7  
**ultracode** = bac  
So, the Lion helm is an exceptional item, and cube recipes which require normal or ultra items won't work_

**wclass**: 1 handed weapon class, determines what style of attack to use (eg. 1hs, 1ht, hth)

**2handedwclass**: 2 handed weapon class, determines what style of attack to use

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

**hit class**: what type of effects are displayed/heard when enemy is struck with weapon

**invwidth- invheight**: width and heght of the item, in terms of inventory cells.

**stackable - minstack - maxstack - qntwarning**: These four columns handle the possibilty, for the item, to be stacked.  
**stackable** decides if the item can be stacked or not. ( **1** : yes ; **0** : no).  
**minstack** : Minimum quantity of the stack when the item is spawned.  
**maxstack** : Maximum quantity of the stack when the item is spawned.  
**qntwarning** : Quantity from which the warning message appears.  
NOTE: These columns are not used in Armor.txt, but only in [Misc.txt](/kb/file-guides/misc-txt) (Keys, Books) and [Weapons.txt](/kb/file-guides/weapons-txt-file-guide) (Javelins, Arrows ...)

**flippyfile - invfile - uniqueinvfile - setinvfile**: These four columns contains DC6 filenames to use for various cases:  
\- **flippyfile** is the animation used when the item drops on the ground,  
\- **invfile** is the item image when it's in your inventory  
\- **uniqueinvfile** is used by the unique version of the item in your inventory  
\- **setinvfile** is used by the set version of the item in your inventory  
All of these files are located in **_Data\\Global\\Items\\_**

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

**special**: Not used, Comment field.

**useable**: It specifies whether the item can be used via right-click. ( **1** : yes ; **0** : no). This is a column often used in [Misc.txt](/kb/file-guides/misc-txt) for potions and scrolls  
NOTE : The game knows what to with the item by its code. Unless you're doing dll editing, don't expect an item to do something  
just because you have set this column to 1.

**dropsound - dropsfxframe - usesound** : these three columns are related to the item sound. The code is taken from the field "Sound" in [Sounds.txt](/kb/file-guides-1-09/sounds-txt-file-guide).  
\- **dropsound** is used when the item drops on the ground.  
\- **dropsfxframe** is the point (measured in frames) after which the sound from 'dropsound' plays.  
\- **usesound** is the sound played when the item is used or moved through the inventory.

**unique** : If this column is set to **1** , then the item can only spawn as unique.

**transparent - transtbl** : Unknown. Apparently has no effect in game. TransTbl could be related to the item's blending mode.

**quivered** : It tells if the item needs ammunitions to work or not. ( **1** : yes ; **0** : no).

**lightradius**: Not used.

belt: numberic Id from belts.txt (defines number of potion slots). It states whether the item can or cannot be put inside the belt cells. ( **1** : yes ; **0** : no).  
NOTE: Since [Misc.txt](/kb/file-guides/misc-txt) and Armor.txt are part of the same file, it seems that the game looks for the type of the item first, and \*then\* decide how to understand the value in this column.

**quest - questdiffcheck** : these two columns are related to quests:  
\- **quest** handles some hardcoded ID's for quest items. Quest items are counted as Uniques and cannot be sold to NPC's.  
\- **questdiffcheck** indicates that the item has a difficulty check. When set to 1, this item will only work in the difficulty in which it's been found.

**missiletype**: Missile gfx to load when the item is thrown, taken from [Missiles.txt](/kb/file-guides/missiles-txt)

**gemoffset**: unknown

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

Annex A  
\- Calculation of affixes available for item - by **Ruvanal**  
This is from 1.09x (have no idea if anything here has been changed)

Terms

**alvl** = affix level. For an item this is the level that is used to compare to the level and max level as found in the prefix and suffix tables. When referring to a prefix/suffix it is the value listed in the level column.

**ilvl** = internal level (also referred to sometimes as the item level; better yet item creation level). This value is set at the time of an items creation. For monster drops the ilvl=mlvl. (BTW ilvl matches up with the terminology of the 1.07/1.08 cubemain.txt---'itemlevel pct a')

**mlvl** \= monster level.

**clvl** = character level.

**qlvl**\= quality level. This value is found in the level column of armor.txt, weapons.txt and misc.txt. This is the value that is used to create the weapXX and armoXX treasure classes.

**magic\_lvl**\= magic level bonus on some items. Currently the only ones that have this are wands (normal and exceptional, but not the elite ones), staves, orbs (all with a value of 1) and circlets (circlet=3, Coronet=8, Tiara=13, Diadem=1.

When an item is generated that has affixes the alvl is calculated\* from ilvl and qlvl as follows

If (ilvl>99) then {ilvl=99}  
if (qlvl>ilvl) then {ilvl=qlvl} ;\*\* see note below  
if (magic\_lvl>0) then {alvl=ilvl+magic\_lvl}

else  
{  
if (ilvl99) then {alvl=99}  
\*all calculations use integers so there are no fractions at any step.  
\*\* this new ilvl value is only used for the duration of this calculation. The ilvl value that is stored in the items data file will remain unchanged.
