---
title: AutoMagic.txt
summary: >-
  Composed by Quatl (This information was already availible here, I didn't
  discover any of this. I only typed and formated it.)
keepId: 436
author: Nefarius
credit: 'by Quatl, restyled by Ogodei'
posted: '2006-11-01'
modified: '2020-05-28'
views: 19697
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=436'
---
Automagic.txt - v1.10 (and presumably 1.11x)

Composed by Quatl  
_**(This information was already availible here, I didn't discover any of this. I only typed and formated it.)**_

_**This file controls auto-affix mods for item drops. Auto mods add magical properties to items without changeing their magic type. This file is very versitile, and gives you fairly fine control over when, and on what, various properties will appear. You can create groups of auto mods, and control mods by level. You can also set probibilities of various mods in a group appearing.**_

This AutoMagic.txt is linked to:

\- [Properties.txt](/kb/file-guides/properties-txt-file-guide)  
\- [Itemtypes.txt](/kb/file-guides/itemtypes-txt)

This file is used by:  
\- [Weapons.txt](/kb/file-guides/weapons-txt-file-guide)  
\- [Armor.txt](/kb/file-guides/armor-txt)

Now, let's see what each column do:

**name**: String Comment  
Blizzard lists the equivelent prefix/affix here. You can use what ever you wish here though. Handy for keeping track of groups.

**version**: it needs to be set to **0** if the prefix\\affix you want to create or  
edit is going to be a classic-only item ( with "classic" we mean "non-expansion" mode, which you can toggle on and off when  
creating a character) or set to **100** if it's going to be available in Expansion. This field is important, as **Items with " **version**" set to**  
**100** **will NOT be generated in Classic Diablo II**.

**spawnable**: It is a boolean type field, and states if this autoprefix can actually spawn in the game. You can disable this row by setting it to **0** , or enable it by setting it to **1**

**rare**: It decides whether this autoprefix spawns on rare quality items or not. You can prevent that from happening by setting it to **0** , or you can allow it by setting it to **1**

**level**: this field accepts numeric values and specifies the minimum level from which this autoprefix can spawn. The column in question can be combined with the following **maxlevel**: to effectively control groups of automods, because you can use this field to combine multiple rows so that the autoprefixes are assigned based on the level of the treasure drop \[see below\].

**maxlevel**: this field accepts numeric values and specifies the maximum level beyond which the automod stop spawning.

**levelreq**: It is the level requirement for this autoprefix. This value is added to the Level Requirement of the item generated with this mod.

**class**: it is the class code, taken from the table:  

```
Amazon		ama
Sorceress		sor
Necromancer	nec
Paladin		pal
Barbarian		bar
Druid		dru
Assassin		ass
```

If the automod you want to create is tied to a specific class, then you should write the class code here. This should be used by the drop calculations of specific class items and can be used to make modifiers like +Skill (Class only) or +skill tab.  
It also enables the " **classlevelreq**" field

**classlevelreq**:  
If class is set, this should allow a seperate level requirement for this class. This is a polite thing to do, as other classes gain no advantage from class specific modifiers. I am uncertain that this actualy works.

**frequency**: For autoprefix groups, it states the chance to spawn this specific group member vs others. Higher numbers means the automod will be more common. [The 1.09 version file guide has some formuae relateing to this.](/kb/file-guides-1-09/automagic-txt-file-guide)

**group**: This field accepts numeric values and groups all the lines with the same values, which are treated as a group. Only one autoprefix per group can be chosen, and groups are influenced by **levelreq**, **classlevelreq** and **frequency** [The 1.09 version file guide has a very nice tutorial about how to set up groups.](The%20https%3A//d2mods.info/forum/kb/viewarticle?a=222)  
NOTE: The group number must also be entered in the 'auto prefix' column of each entry in Weapons.txt or Armor.txt in order for the property to appear.

**mod1code - mod2code - mod3code**: They're the Property codes from [Properties.txt](/kb/file-guides/properties-txt-file-guide). These determine the actual properties which make up this autoprefix. Each autoprefix can include up to three modifiers.

**modXparam, modXmin, modXmax**: For each modXcode, these set the quantities for each property. See [Properties.txt](/kb/file-guides/properties-txt-file-guide) for details on how to set values for various modifiers. Note: modXparam fields do suport calcs ( see [Farmulae Guide](/kb/tutorials-skill-mechanics/formulae-guide-by-xeno-and-kingpin).)

**transform**: It is a boolean value whichallows the colorization of the items.

**transformcolor**: If transform is set to **1** then the item will be colored with the chosen color code, taken from Colors.txt

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

  
**itype 1 to itype7**: "Include Type" fields. You need to place item codes in any of these columns to allow that item to receive mods from this row. See the note below.

**etype 1 to itype3**: 'Exclude type' . This field prevents certain mods from spawning on specific item codes.

**divide**: Numeric value that acts as divisor for the item price.

**multiply**: Numeric value that acts as multiplier for the item price.

**add**: Numeric value that acts as a flat sum added to the item price.

\-------------------------------

_Another one. It's nice to have easy to read refrence materials around. I'll do more as I have time. If anyone has corrections, sugestions, or additional information that should be here please let me know._

**\-Quatl**
