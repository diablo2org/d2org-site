---
title: Misc.txt
summary: '(Includes comments/tips from others, such as Jarulf, Xavon Wrentaile, and 54x)'
keepId: 416
author: Nefarius
credit: by RicFaith
posted: '2006-08-19'
views: 7092
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=416'
---
**(Includes comments/tips from others, such as Jarulf, Xavon Wrentaile, and 54x)**

**Name/Namco** - name of item. (tho' if I'm not mistaken it only matters what you put in your final string.tbl entry, this could merely be sometime to  
remind yourself)  
**compactsave** - Useless column <Jarulf: This was (should be no need now) telling if the game could use a more compact save method for the item by omitting the magic seed (which took quite some space). This was erroneously set for gems  
for example (when it was introduced) and caused all gems to unrandomize.>  
**version** - 0 for available for all games, 100 available in expansion only <Jarulf: Use so that the game knows an item should not generate if the game is a normal game (as oposed to expansion)>  
**level** - required lvl before item will drop (based on mlvl) <54x: Determines which treasureclass it will drop under. (eg. level 28, 29, and 30 armours will drop from armo30) It also determines what level you must be to buy this item at an NPC's.>  
**levelreq** - Min clvl to use item  
**Rarity** - Bigger num, more rare (tho' drop rates are controlled in TCex AFAIK)  
**Spawnable** - Can it be sold in shops or dropped by monsters - Xavon Wrentaile  
**speed** - Useless column - confirmed by Xavon Wrentaile  
**nodurability** - to set item indestructability  
**cost** - How much the item costs to buy <sell price is ½ \* value - bkdoane> <JBouley: I believe, actually, sell value when you dump an item at a vendor is one-fourth the cost for you to buy it>  
**gamblecost** - cost to gamble item (at proper vendors)  
**code** - IMPT! this has to be different from all the other codes used by the game. And this is the code that needs to be entering into string.tbl. <Jarulf: Don't delete the old codes to prevent possible assertion errors with deleted items>  
**alternategfx** - Useless column - confirmed by Xavon Wrentaile  
**component** - what part of the body to equip to - Xavon Wrentaile  
**invwidth** - item width  
**invheight** - item height  
**hasinv** - has a predetermined spot in the inv(body) section.  
**gemsockets** - is item socketable?  
**flippyfile** - The name of the animation file the item uses in-game when it's dropped (if it's a item that looks similar to another item you could just  
copy this cell from there, unless you intend to remaster the gfx for the drop, if so the file to look for is data\\global\\items\\flpxxxxxxx.dc6.  
xxxxxxx is stated specifically for the item) Note:For flippyfile, you need to use the DC6Maker available in PK. this allows to extract individual  
frames which can be edited. Change the palette back to the 256-col used in D2 (palettes are also available in Tools of the Trade) and recompile with DC6Maker again) whatever name you save your new flpxxx as, put it in this cell  
**invfile** - The DC6 file that this item uses in your inventory (this is the one most commonly edited, I use the above method exactly)  
**uniqueinvfile** - The DC6 file that the unique version of this item uses in your inventory.  
**special** - it's blank  
**Transmogrify** - Whether or not the item can be right clicked and be changed into another item (Fusman's morphing gem uses this)  
**TMogType** - The 3 character code which respresents the item that this item becomes when right clicked (see Transmogrify)  
**TMogMin/TMogMax** - The min/max quantity appearing of the item in Transmogrify  
**useable** - Can item be be used by right-clicking it eg. potions, scrolls etc  
**throwable** - Can item be thrown?  
**type** - The group this item belongs to eg. Books, potions etc  
**type2** - 2nd group item can belong to. (eg.Gems have 2 group, gemtype and gemquality)  
**sound** - The number of the sound the item makes when dropped or moved in the inventory.  
**unique** - only 1 allow per person at a time (eg, bark scroll/meph soulstone) <Xavon Wrentaile: It's to state whether item only appears as a unique>  
**transparent** - Unknown (only torch has 1, else 0)  
**transtbl** - Used for gems to apply their 'color' to a socketed item. Not sure of the values, but 5 seems to make the item change to the appropriate color  
**lightradius** - The light radius of the item (the higher the brighter)  
**belt** - Whether or not the item can be placed in a belt slot  
**autobelt** - Whether or not the item appears in your belt when picked up  
**stackable** - Whether or not the item can be stacked (doesn't seem to work unless item was already meant to stack, am looking into it, some ppl are  
trying to stack healing potions) <JBouley: Potion stacking doesn't work; the game treats the entire stack as a single potion>  
**minstack/maxstack** - Min/max number in stack found for stackable items  
**spawnstack** - max amt spawnable (ref to arrows/bolt/keys to get a good picture)  
**quest** - Which quest this item is related to (if a quest item)  
**missiletype** - What missile type this item uses when this item is thrown. (jav/potions)  
**spellicon** - Which spellicon should be used, when you use the item (eg. the throwing-icon for jav's )  
**durwarning** - Which icon appears for low durability warnings  
**qntwarning** - How low the durability of the item can get before it starts warning you  
**gemoffset** - Unknown (always 0 anyways)  
**BetterGem** - (Gems only) What gem code is the next step up when it's upgraded by a shrine or cube (non=none,else follow 'code')  
**bitfield1** - Unknown  
**{vendorname}Min/Max** - Min/Max number of the item that {vendorname} will have for sale if the item is spawnable  
**{vendorname}MagicMin/MagicMax** - Min/Max number of magical versions of the item that {vendorname} will have for sale if the item is spawnable  
**shopMagicLvl** - Not 100%, somehow relates to the level of the prefixes that the magical items sold by {vendorname} can have  
**Source/Game Art** - Unknown  
**Transform** - Not certain, related to either the unique in-game gfx or a flag as to whether the item color shifts for magical versions of itself (0s all  
the way)  
**InvTrans** - Not certain, related to either the unique inventory gfx or a flag as to whether the item color shifts for magical versions of itself (still  
all 0s)  
**SkipName** - Unknown  
**NightmareUpgrade** - When this item appears in Nightmare difficulty, the item x rows down will actually appear instead (x being the value entered) <JBouley: I don't know if this works well or not, but you can simply put the three-character itemcode for the item your want it to upgrade to>  
**HellUpgrade** - When this item appears in Hell difficulty, the item x rows down will actually appear instead (x being the value entered) <JBouley: I don't know if this works well or not, but you can simply put the three-character itemcode for the item your want it to upgrade to>  
**mindam/maxdam** - If useable as a weapon, min/max damage caused  
**PermStoreItem** - When set to 1, the item will never run out in the shop; you can keep buying it as much as you want  
**Nameable** - possibly to state whether it can be personalised?
