---
title: ItemStatCost.txt File Guide
summary: >-
  This is based on no other fileguide because the differences between the 1.09
  and 1.10 ItemStatCost.txt are extreme.
keepId: 353
author: Nefarius
credit: by Char
posted: '2005-10-18'
modified: '2018-10-22'
views: 13456
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=353'
---
ItemStatCost.txt Fileguide

Test

This is based on no other fileguide because the differences between the 1.09 and 1.10 ItemStatCost.txt are extreme.

Stat

the name of the stat

ID

the ID of the stat

Send Other

This is most likely used to determine if this stat is sent to other users when in multiplayer. Only those stats are sent that are important for graphics (faster attack / cast / gethit rate). For some reason, dex and strength are sent, too.

Signed

Is the stat signed or not? -> Can this stat be negative or not?

Sendbits

Number of bits used to send this value between client and server.

Send Param

Has something to do with client / server things, too.

UpdateAnimateRate

???

Probably a boolean that tells the client to update the characters animation rate.

Saved

Is the stat saved when the character is saved?

Other stats are saved in the item saves.

CSvSigned

(Character Save Signed)

Stat signed in character save?

CSvBits

(Character Save Bits)

Bits used to save when saved in character save file (maximum value that is saved equals 2^\[CSvBits\])

CSvParam

(Character Save Parameter)

Has something to do with saved parameters for some stats

fCallback

???

fMin

???

MinAccr

???

Encode

related to how the thing is encoded

Add, Multiply, Divide

used to calculate the items price

the formula is:

price = base\_price \* (1+ stat\_value \* (\[multiply\]/\[divide\])) + \[add\]

with

base\_price = base item price (from the other .txt files)

stat\_value = amount of the stat that is on the item (for +8 strength this would be 8...)

if there is more than one stat on a magic item, the suffix ONLY counts for some reason i dont understand (this is reported by Joel). no idea what happens for rare items. for unique and set items, these values do not count at all.

divide cannot be changed for some reason, better leave it at 1024.

other files may modify the price, too (magicprefix / suffix has add / multiply / divide fields, npc.txt says something about sell / buy multipliers, ...).

ValShift

Value is shifted by that. 1 would mean that its shifted by 1 which is a multiplication by 2. ValShift 2 is a multiplication by 4 and ValShift 8 equals a multiplication by 256 (2^8=256). This is done because, for example, hitpoints are internally calculated with 1/256 step precision.

1.09-Save Bits, 1.09-Save Add

The old Save Bits and Save Add values from 1.09. probably used for converting characters.

Save Bits, Save Add

These two fields are used to handle the way the value is saved on an item. This also determines the minimum and maximum values a stat can have.

Save Bits determines the number of bits the value is saved in, while Save Add is added before the value is saved unsigned.

The results:

Minimum stat value equals -\[Save Add\]

Maximum stat value equals 2^\[Save Bits\] - \[Save Add\] - 1

Example (taken from maxhp):

Save Add = 32

Save Bits = 8

Minimum stat value = -32

Maximum stat value = 2^8 - 32 - 1 = 256 - 33 = 223

SaveParamBits

Determines how many bits are used to save Parameters (???)

keepzero

Boolean, can the stat go negative? (1 = cannot be negative)

op

This is the number of the operator used to calculate the effects of the item stat.

Known numbers and effects:

1 : op stats are increased by \[statvalue\] percent

2 : op stats are increased by \[statvalue\] \* \[op base\] / 2^\[op param\]

3 : not used, effect unknown

4 : seems to have the same effect as 2

5 : op stats are increased by \[statvalue\] \* \[op base\] / 2^\[op param\] percent

6 : op stats are increased by time

7 : op stats are increased by time and percent

8 : used to calculate the mana based on energy

9 : used to calculate the hitpoints and stamina based on vitality

op param

See op

op base

See op

op stat1 - op stat3

The op stats. See op

direct

If the stat adds to another stat, too, this is set to 1. For example, when equipping an item with +30 mana, your maximum mana increases as well.

maxstat

The max stat the stat adds to (when direct is set to 1)

itemspecific

Is this stat specific to one item only (and does therefore only affect this item)?

you should be able to stop the second weapon from increasing your first weapons attack speed this way

damagerelated

Does this stat relate to damage (dont know the effect)

itemevent1

When this event happens, the itemeventfunc1 is executed

itemeventfunc1

Function that is executed on itemevent1. Functions that are used are:

6 : attacker takes damage of \[statvalue\]

7 : knockback

8 : howl effect

9 : stupidity effect

10 : attacker takes lightning damage of \[statvalue\]

14 : freeze effect

15 : openwounds effect

16 : crushing blow

17 : get mana (after kill)

18 : get life (after demon kill)

19 : slow effect

20 : skill is released

21 : skill is released (same as 20 ?!?)

28 : get life (after kill)

29 : slain monster rests in peace

30 : skill is released (same as 20 ?!?)

31 : reanimate slain monster

descpriority

priority of the description on the item. The higher this, the earlier will the stat be displayed on your item. Not sure, though

descfunc

Function used to display the stat. There are numerous ones, I didnt yet test all yet.

some values and what they display (descval used: 1, see below):

1 : +\[value\] \[string\]

2 : \[value\]% \[string\]

3 : \[value\] \[string\]

4 : +\[value\]% \[string\]

5 : \[value/1.28\]% \[string\] // used for howl

6 : +\[value\] \[string\] \[string2\]

7 : \[value\]% \[string\] \[string2\]

8 : +\[value\]% \[string\] \[string2\]

9 : \[value\] \[string\] \[string2\]

10 : \[value/1.28\]% \[string\] \[string2\]

11 : Repairs 1 durability in \[100/value\] seconds

12 : +\[value\] \[string\] // used for stupidity, freeze

13 : +\[value\] to \[class\] skill levels

14 : +\[value\] to \[skilltab\] skills (\[class\] only)

16 : Level %d %s Aura When Equipped

descval

0 : no value is displayed (like

1 : value is displayed first (like '+5 to strength')

2 : string is displayed first, then value (like 'strength +5')

descstrpos

Description string used when value is positive

descstrneg

Description string used when value is negative

descstr2

Second display string (for per level attributes for example)

dgrp

Display group. If all stats of a display group have the same stats, they will be displayed together.

dgrpfunc

Same as descfunc, but for display groups

dgrpval

Same as descval, but for display groups

dgrpstrpos

Same as descstrpos, but for display groups

dgrpstrneg

Same as descstrneg, but for display groups

dgrpstr2

Same as descstr2, but for display groups

stuff

???

\*eol

End of line

EDIT:

One thing you should NEVER EVER do:

have op base and op stat1 be the same. The game crashes with no error message at all when trying to compile the .bin file. Most likely, the same happens when op base and op stat2 / 3 are the same.

EDIT 2:

minor improvements

EDIT 3, 4:

further improvements

EDIT 5:

added info about descval, corrected info about descstr

EDIT 6:

NEVER make two stats have the same name. I posted what happens then here
