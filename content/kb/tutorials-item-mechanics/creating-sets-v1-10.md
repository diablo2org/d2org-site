---
title: Creating Sets v1.10
summary: How to create sets in v1.10
keepId: 274
author: Hellfire
posted: '2008-01-19'
modified: '2018-01-06'
views: 17283
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=274'
---
Files needed: (I will be assuming that you know how to extract files from MPQ’s.)

Setitems.txt  
Sets.txt  
Patchstring.tbl (or whichever table you will be using)

Tools Needed:

Excel or similar spreadsheet program  
Baron Darkstorms Table Editor or similar program

For this tutorial (my first one :D ) we will be making a set called Horazon's Madness.  
The set will have 3 items, staff, armour and a mask

First off, open up setitems.txt in a spreadsheet program. Scroll right down to the last entry and under that add the following:

Horazon’s Robes:  
Column A (name): Horazon’s Robes  
Column B (set): Horazon’s Madness  
Column C (item): aar  
Column D (\*item): Ancient Armour  
Column E (rarity): 7  
Column F (lvl): 3  
Column G (lvl req): 10  
Column H (chrtransform): dblu  
Column I (invtransform: dblu  
Columns J-N (invfile-usesound): Leave these blank  
Column O (cost mult): 5  
Column P (cost add): 5000  
Column Q (add func): Leave blank  
Column R (prop1): half-freeze  
Column S (par1): Leave blank  
Column T (min1): 1  
Column U (max1): 1  
Column V (prop2): ease  
Column W (par2): Leave blank  
Column X (min2): -50  
Column Y (max 2): -50  
Column Z-BA (prop3-max9): Leave these blank  
Column BB (aprop1a): str  
Column BC (apar1a): Leave blank  
Column BD (amin1a): 5  
Column BE (amax1a): 5  
Column BF (aprop1b): cast2  
Column BG (apar1b): Leave blank  
Column BH (amin1b): 10  
Column BI (amax1b): 10  
Column BJ-BY (aprop2a-amax3b): Leave these blank  
Column BZ (aprop4a): vit  
Column CA (apar4a): Leave blank  
Column CB (amin4a): 5  
Column CC (amax4a): 5  
Column CD-CO (aprop4b-amax5b): Leave blank  
Column CP (\*eol): 0

Horazon’s Power:  
Column A (name): Horazon’s Power  
Column B (set): Horazon’s Madness  
Column C (item): lst  
Column D (\*item): Long Staff  
Column E (rarity): 7  
Column F (lvl): 3  
Column G (lvl req): 6  
Column H (chrtransform): dblu  
Column I (invtransform: dblu  
Columns J-N (invfile-usesound): Leave these blank  
Column O (cost mult): 5  
Column P (cost add): 5000  
Column Q (add func): Leave blank  
Column R (prop1): allskills  
Column S (par1): Leave blank  
Column T (min1): 1  
Column U (max1): 2  
Column V (prop2): regen-mana  
Column W (par2): Leave blank  
Column X (min2): 10  
Column Y (max 2): 10  
Column Z-BA (prop3-max9): Leave these blank  
Column BB (aprop1a): str  
Column BC (apar1a): Leave blank  
Column BD (amin1a): 5  
Column BE (amax1a): 5  
Column BF (aprop1b): cast2  
Column BG (apar1b): Leave blank  
Column BH (amin1b): 10  
Column BI (amax1b): 10  
Column BJ-BY (aprop2a-amax3b): Leave these blank  
Column BZ (aprop4a): enr  
Column CA (apar4a): Leave blank  
Column CB (amin4a): 5  
Column CC (amax4a): 5  
Column CD-CO (aprop4b-amax5b): Leave blank  
Column CP (\*eol): 0

Horazon’s Face:  
Column A (name): Horazon’s Face  
Column B (set): Horazon’s Madness  
Column C (item): msk  
Column D (\*item): Mask  
Column E (rarity): 7  
Column F (lvl): 3  
Column G (lvl req): 4  
Column H (chrtransform): dblu  
Column I (invtransform: dblu  
Columns J-N (invfile-usesound): Leave these blank  
Column O (cost mult): 5  
Column P (cost add): 5000  
Column Q (add func): Leave blank  
Column R (prop1): balance1  
Column S (par1): Leave blank  
Column T (min1): 10  
Column U (max1): 10  
Column V (prop2): regen  
Column W (par2): Leave blank  
Column X (min2): 10  
Column Y (max 2): 10  
Column Z-BA (prop3-max9): Leave these blank  
Column BB (aprop1a): str  
Column BC (apar1a): Leave blank  
Column BD (amin1a): 5  
Column BE (amax1a): 5  
Column BF (aprop1b): cast2  
Column BG (apar1b): Leave blank  
Column BH (amin1b): 10  
Column BI (amax1b): 10  
Column BJ-BY (aprop2a-amax3b): Leave these blank  
Column BZ (aprop4a): enr  
Column CA (apar4a): Leave blank  
Column CB (amin4a): 5  
Column CC (amax4a): 5  
Column CD-CO (aprop4b-amax5b): Leave blank  
Column CP (\*eol): 0

Save your changes to setitems.txt (make sure its tab delimited if you’re using excel). We are now finished with this file.

Open up sets.txt and scroll down to the bottom entry, below this add the following:

Column A (index): Horazon’s Madness  
Column B (name): Horazon’s Madness  
Column C (version): 100 (or 0 if you wish for it to be found in classic d2)  
Column D (level): 2  
Column E (PCode2a): hp  
Column F (PParam2a): Leave blank  
Column G (PMin2a): 50  
Column H (PMax2a): 50  
Column I (PCode2b): mana  
Column J (PParam2b): Leave blank  
Column K (PMin2b): 50  
Column L (PMax2b): 50  
Column M-AJ (PCode3a- PMax5b): Leave blank  
Column AK (FCode1): allskills  
Column AL (FParam1): Leave blank  
Column AM (FMin1): 1  
Column AN (FMax1): 1  
Column AO (FCode2): oskill  
Column AP (FParam2): Raise Skeleton  
Column AQ (FMin2): 2  
Column AR (FMax2):3  
Column AS (FCode3): oskill  
Column AT (FParam3): Skeleton Mastery  
Column AU (FMin3): 2  
Column AV (FMax3): 3  
Column AW (FCode4): cast2  
Column AX (FParam4): Leave blank  
Column AY (FMin4): 10  
Column AZ (FMax4): 10  
Column BA (FCode5): hp  
Column BB (FParam5): Leave blank  
Column BC (FMin5): 50  
Column BD (FMax5): 50  
Column BA (FCode6): mana  
Column BB (FParam6): Leave blank  
Column BC (FMin6): 50  
Column BD (FMax6): 50  
Column BA (FCode7): res-all  
Column BB (FParam7): Leave blank  
Column BC (FMin7): 20  
Column BD (FMax7): 20  
Column BM-BP (FCode8 – Fmax8): Leave blank  
Column BQ (\*eol): 0

Save your changes to sets.txt (make sure its tab delimited if you’re using excel).

Almost finished now, all that’s left is to add the strings, so open up your table editor and load up patchstring.tbl. (or whichever table you will be using)

You will need to add 4 new keys:  
(The order you put them in does not matter)  
(Key name /// String)  
Horazon’s Robes /// Horazon’s Robes  
Horazon’s Face /// Horazon’s Face  
Horazon’s Staff /// Horazon’s Staff  
Horazon’s Madness /// Horazon’s Madness

Some Helpful Hints and some things that took me a while to figure out :P

The Magic Codes Master List has a list of all the properties an item can be given. (very helpful)

The items in a set are displayed in the reverse order they are in the text files.  
E.g. In Horazon’s Madness set, the items will be displayed like this in the game:  
Horazon’s Madness  
Horazon’s Robes 3rd in txt file  
Horazon’s Power 2nd in txt file  
Horazon’s Face 1st in txt file

If the items appear in game like this:  
Horazon’s Madness  
An Evil Force  
An Evil Force  
An Evil Force

1) Your string file is in the wrong place, ensure that it is in data\\local\\LNG\\ENG (for English)  
2) You did not add the correct key to patchstring.tbl, try copy + pasting the item name in.  
3) You didn’t change the strings at all :P

> **Note:** If you copy/paste the name from excel make sure it there isnt and extra space on the end of the key, this will result in Evil Forces :P

