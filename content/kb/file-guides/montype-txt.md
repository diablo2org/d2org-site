---
title: MonType.txt
summary: This text file handles the classification of Monster type units.
keepId: 420
author: Nefarius
credit: 'by Nefarius, restyled by Ogodei'
posted: '2006-09-07'
modified: '2018-10-22'
views: 12097
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=420'
---
_This text file handles the classification of Monster type units._

_Where are MonTypes used?  
Not in many places unfortunately, they are used at present for Modifier Exclusion on bosses (MonUMod.txt), this will let you prevent certain monster types from spawning with specific modifiers (Sand Leapers don't get Lightning Enchanted for example). The other place is the dmg-mon and att-mon properties.  
_

**Type**: This is the ID-pointer that is used to link this MonType to a monster in [MonStats.txt](/kb/file-guides/monstats-txt).

**Equiv1 - Equiv2**: This works exactly like the '**equiv**' columns in [ItemTypes.txt](/kb/file-guides/itemtypes-txt). This works in a quite simple but very powerful way.  
Example: the UndeadFetish MonType is linked to both LowUndead and Demon MonTypes, LowUndead is linked to the Undead MonType. So in the eyes of the game, a monster with UndeadFetish assigned to it, is all of these four MonTypes.

**StrSing**: String key for the string displayed for the singular form (Skeleton), note that this is unused, since the only modifier display code that accesses MonType uses **StrPlur**.

**StrPlur**: This is the string key for the plural form of this monsters type (Skeletons), this is used by Damage vs. MonType and Attack Rating vs. MonType modifiers. Beware, the display of these modifiers is bugged because blizzard checks the record count for the wrong txt file when it fetches the string, to make them show up you have to add dummy entries to monprop.txt (this file needs to have the same or more entries then montype), it is not in anyway or form related to the last line in the file or to the CPU type.

**\*EOL**: End of Line.  
WARNING: Do not remove \*eol as this is needed to prevent M$-Excel from screwing up the file.
