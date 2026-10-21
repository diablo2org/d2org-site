---
title: Weapons.txt File Guide
summary: >-
  A. name - item name for reference B. type - associated itemtype C. code -
  3-character code for the item D. alternateGfx - what animation to play when
  weapon is equipped E. version - 0 for cD2, 100…
keepId: 250
author: Phrozen Heart
credit: by Ric Faith
posted: '2003-12-02'
views: 11361
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=250'
---
A. name - item name for reference  
B. type - associated itemtype  
C. code - 3-character code for the item  
D. alternateGfx - what animation to play when weapon is equipped  
E. version - 0 for cD2, 100 for LoD  
F. compactsave - ?? (always blank)  
G. rarity - The item's rarity, bigger number = rarer  
H. spawnable - Whether or not the item can be bought from the various item vendors and dropped at random unless specified  
I. mindam - Minimum one-handed damage the weapon can cause  
J. maxdam - Maximum one-handed damage the weapon can cause  
K. 1or2handed - Boolean (1=yes,0=no) for whether weapon can be carried in 1 or 2 hands by Barbarian  
L. 2handed - Boolean if weapon is a 2handed weapon  
M. 2handmindam - Minimum two-handed damage the weapon cause  
N. 2handmaxdam - Maximum two-handed damage the weapon cause  
O. minmisdam - Minimum ranged damage the weapon can cause  
P. maxmisdam - Maximum ranged damage the weapon can cause  
Q. {blank> - ?? however 13=bow/xbow, 14=1hand melee, 15=hybrid melee/thrown, 17=2hand melee  
R. {blank} - ??  
S. {blank} - ?? relates to 1 handed melee dmg  
T. {blank} - ?? relates to 2 handed melee dmg  
U. {blank} - ?? relates to range/thrown dmg  
V. rangeadder - additional range of weapon for melee attacks  
W. speed - determines base speed of item. -ve values indicate faster speeds, +ve value indicate slower speed  
X. StrBonus - %age of Str taken into account for Bonus damage  
Y. DexBonus - %age of Dex taken into account for Bonus damage  
Z. reqstr - Str requirement to equip weapon  
AA. reqdex - Dex requirement to equip weapon  
AB. durability - Durability of weapon  
AC. nodurability - Boolean, sets Indestructibility  
AD. level - item level  
AE. levelreq - character level required to equip item  
AF. cost - base cost of the item  
AG. gamble cost - does not have any effect on gamble cost  
AH. magic lvl - used to determine which affixes are available on item (See Annex A)  
AI. auto prefix - reference to group number in automagic.txt  
AJ. OpenBetaGfx - item gfx used in the Beta Testing  
AK. normcode - Normal version of item  
AL. ubercode - Exception version of item  
AM. ultracode - Elite version of item  
AN. wclass - 1 handed weapon class, determines what style of attack to use (eg. 1hs, 1ht, hth)  
AO. 2handedwclass - 2 handed weapon class, determines what style of attack to use  
AP. component - ??, 6 for bows, 5 for everything else  
AQ. hit class - what type of effects are displayed/heard when enemy is struck with weapon  
AR/AS. invwidth/invheight - dimensions in unit space (eg. 2x3, 1x4)  
AT. stackable - Boolean is it a stackable item  
AU. minstack - how many minimum in a stack  
AV. maxstack - how many maximum in a stack  
AW. spawnstack - when randomly spawned, how many in a stack  
AX. flippyfile - animation played when item is dropped  
AY. invfile - gfx displayed in inventory  
AZ. uniqueinvfile - gfx displayed in inventory for unique version (if any)  
BA. setinvfile - gfx displayed in inventory for set version (if any)  
BB. hasinv - Boolean does it have a predetermined place for auto-equipping?  
BC. gemsockets - how many max sockets can spawn  
BD. gemapplytype - which set of gemeffects will have effect (0=weapon, 1=armor/helm, 2=shield)  
BE. special - remark column  
BF. useable - Boolean allows right-click to use, unimportant  
BG. sound - sound code played when item is dropped/placed in inventory  
BH. unique - Boolean is item only spawned as a unique  
BI. transparent - ??  
BJ. transtbl - ?? always 5  
BK. quivered - Boolean, requires a quiver to use  
BL. lightradius - innate addition to lightradius  
BM. belt - Boolean, can it be worn in the belt  
BN. quest - Boolean, is it a quest item  
BO. missiletype - missileID from missiles.txt  
BP. durwarning - for weapons is always 7, varies for different equipables.  
BQ. qntwarning - Boolean, for thrown weapons  
BR. gemoffset - offset value for the socket, always 0  
BS. bitfield1 - material? all metal items have a 3. Wands/Orbs/Staves have 5, while clubs and crystal swords have 1  
BT-EZ.  
{seller}Min - Min Number non-magical of item will spawn in {seller's} inventory  
{seller}Max - Max Number non-magical of item will spawn in {seller's} inventory  
{seller}MagicMin - Min Number magical of item will spawn in {seller's} inventory  
{seller>MagicMax - Max Number magical of item will spawn in {seller's} inventory  
{seller}MagicLvl - Max Level of affix that can spawn on the magical items  
FA. Source Art - ?? not used  
FB. Game Art - ?? not used  
FC. Transform - color palette used for color changes via gems etc.  
FD. InvTrans - Transparency of item? not used  
FE. SkipName - Boolean, to not display the base class of item on the unique form.  
FF. NightmareUpgrade - item code of the item sold instead of original item in NM  
FG. HellUpgrade - item code of the item sold instead of original item in Hell  
FH. Nameable - will the naming quest work on item  
FI. PermStoreItem - Boolean will item always be sold by sellers? Item cannot be depleted

---

**Annex A** - Calculation of affixes available for item - by Ruvanal

Terms  
alvl = affix level. For an item this is the level that is used to compare to the level and max level as found in the prefix and suffix tables. When referring to a prefix/suffix it is the value listed in the level column.  
ilvl = internal level (also referred to sometimes as the item level; better yet item creation level). This value is set at the time of an items creation. For monster drops the ilvl=mlvl. (BTW ilvl matches up with the terminology of the 1.07/1.08 cubemain.txt---'itemlevel pct a')  
mlvl = monster level.  
clvl = character level.  
qlvl = quality level. This value is found in the level column of armor.txt, weapons.txt and misc.txt. This is the value that is used to create the weapXX and armoXX treasure classes.  
magic\_lvl = magic level bonus on some items. Currently the only ones that have this are wands (normal and exceptional, but not the elite ones), staves, orbs (all with a value of 1) and circlets (circlet=3, Coronet=8, Tiara=13, Diadem=1.

When an item is generated that has affixes the alvl is calculated\* from ilvl and qlvl as follows

If (ilvl>99) then {ilvl=99}  
if (qlvl>ilvl) then {ilvl=qlvl} ;\*\* see note below  
if (magic\_lvl>0) then {alvl=ilvl+magic\_lvl}  
else  
{  
if (ilvl<(99-qlvl/2))  
then {alvl=ilvl-qlvl/2}  
else {alvl=2\*ilvl-99}  
}  
If (alvl>99) then {alvl=99}

\*all calculations use integers so there are no fractions at any step.  
\*\* this new ilvl value is only used for the duration of this calculation. The ilvl value that is stored in the items data file will remain unchanged.
