---
title: Making Sets (v1.08+)
summary: >-
  Ok, a lot has changed with this particular file from 1.06 to 1.08...way too
  much to mention here, so the tutorial is basically entirely re-written. First
  off, these are the files you'll need to edit:
keepId: 192
author: Phrozen Heart
credit: by Perfect Cell
posted: '2003-12-02'
views: 7180
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=192'
---
Ok, a lot has changed with this particular file from 1.06 to 1.08...way too much to mention here, so the tutorial is basically entirely re-written. First off, these are the files you'll need to edit:

setitems.txt from patch\_d2.mpq (location data\\global\\excel\\setitems.txt) patchstring.tbl from patch\_d2.mpq (location data\\local\\lng\\eng\\patchstring.tbl)

_\* there are also other locations for adding these strings to foreign language versions of the game, and they are as follows:_

-   data\\local\\lng\\chi\\patchstring.tbl (Chinese)
-   data\\local\\lng\\deu\\patchstring.tbl (German)
-   data\\local\\lng\\esp\\patchstring.tbl (Spanish)
-   data\\local\\lng\\fra\\patchstring.tbl (French)
-   data\\local\\lng\\ita\\patchstring.tbl (Italian)
-   data\\local\\lng\\jpn\\patchstring.tbl (Japanese)
-   data\\local\\lng\\kor\\patchstring.tbl (Korean)
-   data\\local\\lng\\pol\\patchstring.tbl (Polish)

For the sake of convenience (and space), I have created a reference guide for the setitems.txt, you can find it [here](guide-setitemstxt.php). It gives you the jist of what all the columns mean, and will make this tutorial flow a lot smooother.

_\*Note: any reference to string.tbl can apply to patchstring.tbl or expansionstring.tbl if you are mofidying those files instead_

In this example, we will create a set (once again) called Diablo's End. The set will contain:

-   4 items (full plate, amulet, tower shield, and full helm)
-   2 partial set bonuses (for having 2 and 3 items)
-   3 items with other set item bonuses (green bonuses for having other pieces in the set)
-   1 item without other set item bonuses (it will have 5 bonuses that will be there regardless of having other items in the set)
-   the usual full set bonus (when the full set is equipped)

So, with that, here are the strings that we will be adding:  
Diablo's End (Diablo's End)  
Armor of Gloom (Armor of Gloom)  
Optic Amulet (Optic Amulet)  
Stormshield (Stormshield)  
Helm of Spirits (Helm of Spirits)  
The words on the left correspond to new entries you will have to make in the string.tbl (left side), and the words in brackets are what you will have to enter in their right side. It is a fairly simple process to add strings using tbl edit, but if you use Enquettar (what I use, to save time when adding large amounts of strings), you will add the strings like this to the stringchanges.txt:  
a 'Diablo's End' 'Diablo's End'  
a 'Armor of Gloom' 'Armor of Gloom'  
etc.

For this tutorial, we will remove one of the original sets (if we add more sets, it will make it a lot harder to collect items for even a partial set bonus). I have decided to delete row 17 ('s set). Like in the previous tutorial, I will walk you through, step by step (every column) for the first item, and then just give you the values to fill out for the other items.

1.  Column A (Name) - enter _Diablo's End_
2.  Column B (Version) - enter _0_, so this set can be found in classic Diablo II.
3.  Column C (level) - enter _27_. This is the level you want the character to be before they can use the full set. You can enter any number. 0 means no level requirement.
4.  Column D (numitems) - enter _4_. This is how many items this set has.
5.  Column E (transform) - enter _0_. This is so items that spawn in this set will not change colour.
6.  Column F (transformcolor) - leave blank, or enter _0_.
7.  Column G (Item1) - enter _ful_. This is the code for the first set item (Armor of Gloom); this will make it a full plate mail.
8.  Column H (Item1 Suffix) - enter _Armor of Gloom_. This will correspond to the new strings you added prior to step 1.
9.  Column I (Item1 Rarity) - set to _7_, as most items have this column set to 7.
10.  Column J (Item1 Add) - set to _2_ -- this item will have only 2 bonuses, but will gain extra bonuses for getting other items in the set.
11.  Column K (Item1 Lvlreq) - set to _20_ (a level 20 item)
12.  Column L (Item1 cost mult) - set to _5_. This column is 5 for all items except Sigon's Guard.
13.  Column M (Item1 cast add) - set to _2500_. This column is 2500 for all items except Sigon's Guard.
14.  Column N (I1Code1) - enter _ease_. This gives the item the -requirements modifier.
15.  Column O (I1Param1) - leave blank or enter _0_. This modifier does not require use of the param column.
16.  Column P (I1Min1) - enter _\-100_. As in Diablo I, this item requires no strength to use.
17.  Column Q (I1Max1) - enter _\-100_. There is no need for a range on -requirements on this item.
18.  Column R (I1Code2) - enter _ac_. This item will add to defense by a specific number (ie. +x to defense) and not by a percentage (ie. x% enhanced defense)
19.  Column S (I1Param2) - leave blank or enter _0_. This modifier does not require use of the param column.
20.  Column T (I1Min2) - enter _60_. This will add 60 to the base defense of the item, giving a range of 210-221.
21.  Column U (I1Max2) - enter _60_. This item will not have a range of +to defense. However, if you set it to 80, when it is found, it will randomly add anywhere from 60 to 80 to the base defense (giving a range of 210-241).
22.  Column V (I1CodeA) - enter _light_. This item will give a penalty to the light radius of the character when 2 items are worn.
23.  Column W (I1ParamA) - leave blank or enter _0_.
24.  Column X (I1MinA) - enter _\-2_. This item gives -2 to the light radius when 2 items are worn.
25.  Column Y (I1MaxA) - enter _\-2_. This item gives -2 to the light radius, no greater penalty is added unless you use a range (enter a larger negative than 2).
26.  Column Z (I1CodeB) - enter _ac/lvl_. This item will grant a bonus of defense based on character level when 3 items are worn.
27.  Column AA (I1ParamB) - enter _24_. This is how much defense per character level (in eighths) that is added to the defense of the item. This gives the item +3 defense per level, for a maximum bonus of 297 at level 99. This is cumulative with the base defense and the ac bonus given in Code2.
28.  Column AB (I1MinB) - leave blank or enter _0_.
29.  Column AC (I1MaxB) - leave blank or enter _0_.
30.  Columns AD-AO can be left blank.
31.  To add the Optic Amulet (gains green item bonuses for having other items in the set):  
     item (column AP) = _amu_ -- the item type is an amulet  
     suffix (AQ) = _Optic Amulet_ -- the string added prior to step 1  
     rarity (AR) = _7_  
     add (AS) = _2_ -- gives green bonuses when 2 or more items of this set are worn  
     lvlreq (AT) = _15_ -- requires level 15 to equip  
     mult (AU) = _5_  
     add (AV) = _2500_  
     code1 (AW) = _enr_ -- gives a bonus to energy  
     param (AX) = blank or _0_  
     min (AY) = _5_  
     max (AZ) = _5_  
     code2 (BA) = _res-ltng_ -- gives a bonus to lightning resistance  
     param (BB) = blank or _0_  
     min (BC) = _20_  
     max (BD) = _20_  
     codea (BE) = _light_ -- gives a bonus to light radius when 2 items are worn  
     param (BF) = _0_  
     min (BG) = _2_  
     max (BH) = _2_  
     codeb (BI) = _red-dmg_ -- damage reduced by 2 when 3 items are worn  
     param (BJ) = blank or _0_  
     min (BK) = _2_  
     min (BL) = _2_  
     i2codec (BM) to i2maxe (BX) can be left blank
32.  To add the Stormshield (always has 5 bonuses and does not gain any green bonuses for having other items in the set)  
     item (column BY) = _tow_ -- the item type is a tower shield  
     suffix (BZ) = _Stormshield_ -- the string that we added prior to step 1  
     rarity (CA) = _7_  
     item3 add (CB) = _0_ -- this item will always have all of its bonuses, and does not gain additional bonuses for collecting other items in the set  
     lvlreq (CC) = _19_ -- requires level 19 to equip  
     mult (CD) = _5_  
     add (CE) = _2500_  
     code (CF) = _ac_ -- gives a +x defense bonus  
     param (CG) = blank or _0_  
     min (CH) = _40_  
     max (CI) = _40_  
     code (CJ) = _str_ -- gives a strength bonus  
     param (CK) = blank or _0_  
     min (CL) = _10_  
     max (CM) = _10_  
     code (CN) = _indestruct_ -- makes the item indestructible  
     param (CO) = _0_  
     min (CP) = _1_  
     max (CQ) = _1_  
     code (CR) = _red-dmg_ -- damage increased by 4 (ie. reduced by negative)  
     param (CS) = _0_  
     min (CT) = _\-4_  
     max (CU) = _\-4_  
     code (CV) = _block1_ -- increased block rate by x% (10% with the following min/max) -- block1 is not a typing error ;)  
     param (CW) = _0_  
     min (CX) = _10_  
     max (CY) = _10_  
     i3coded (CZ) to i3maxe (DG) can be left blank
33.  To add the Helm of Spirits (gains green item bonuses for having other items in the set):  
     item4 (column DH) = fhl -- the item type is a full helm  
     suffix (DI) = _Helm of Spirits_ -- the string added prior to step 1  
     rarity (DJ) = _7_  
     add (DK) = _2_ -- gives green bonuses when 2 or more items of this set are worn  
     lvlreq (DL) = _24_ -- requires level 24 to equip  
     mult (DM) = _5_  
     add (DN) = _2500_  
     code (DO) = _lifesteal_ -- x% life stolen per hit  
     param (DP) = blank or _0_  
     min (DQ) = _5_  
     max (DR) = _5_  
     code (DS) = _regen_ -- replenish life +x  
     param (DT) = blank or _0_  
     min (DU) = _5_  
     max (DV) = _5_  
     code (DW) = _enr_ -- gives an energy bonus  
     param (DX) = blank or _0_  
     min (DY) = _10_  
     max (DZ) = _10_  
     code (EA) = _ac/lvl_ -- +defense based on character level  
     param (EB) = _24_ -- gives +3 defense per level  
     min (EC) = blank or _0_  
     max (ED) = blank or _0_  
     i4codec (EE) to i6maxe (HG) can be left blank
34.  Column HH (PCode2) - enter _dex_. This gives a bonus to dexterity.
35.  Column HI (PParam2) - leave blank or enter _0_.
36.  Column HJ (PMin2) - enter _10_. A +10 bonus to dexterity.
37.  Column HK (PMax2) - enter _10_. No range, it always gives +10 to dex.
38.  Column HL (Pcode3) - enter _vit_. This gives a bonus to vitality.
39.  Column HM (PParam3) - leave blank or enter _0_.
40.  Column HN (PMin3) - enter _10_. A +10 bonus to vitality.
41.  Column HO (PMax3) - enter _10_. No range, it always gives +10 to vit.
42.  Columns HP (PCode4) to HW (PMax5) can be left blank.
43.  Column HX (FCode1) - enter _allskills_. This gives a bonus to all skill levels.
44.  Column HY (FParam1) - leave blank or enter _0_.
45.  Column HZ (FMin1) - enter _3_. This will give a +3 to all skills full set bonus.
46.  Column IA (FMax1) - enter _3_. No range, it always gives +3 to skills.
47.  Column IB (FCode2) - enter _str_. This gives a bonus to strength.
48.  Column IC (FParam2) - leave blank or enter _0_.
49.  Column ID (FMin2) - enter _10_. This gives a +10 bonus to strength.
50.  Column IE (FMax2) - enter _10_. No range, it always gives +10 to strength.
51.  Column IF (FCode3) - enter _enr_. This gives a bonus to energy.
52.  Column IG (FParam3) - leave blank or enter _0_.
53.  Column IH (FMin3) - enter _10_. This gives a +10 bonus to energy.
54.  Column II (FMax3) - enter _10_. No range, it always gives +10 to energy.
55.  Column IJ (FCode4) - enter _dmg-demon_. This gives a damage bonus (percentage) against demon creatures.
56.  Column IK (FParam4) - leave blank or enter _0_.
57.  Column IL (FMin4) - enter _100_. This gives 200% damage vs demons (ie. a 100% damage bonus against demons).
58.  Column IM (FMax4) - enter _100_. No range, it always gives a 100% bonus.
59.  Column IN (FCode5) - enter _att-demon_. This gives a bonus to attack rating vs demons.
60.  Column IO (FParam5) - leave blank or enter _0_.
61.  Column IP (FMin5) - enter _100_. This gives a +100 to attack rating vs demons bonus.
62.  Column IQ (FMax5) - enter _100_. No range, it always gives the +100 bonus.
63.  Column IR (FCode6) - enter _hp_. This gives a bonus to life.
64.  Column IS (FParam6) - leave blank or enter _0_.
65.  Column IT (FMin6) - enter _100_. This gives a +100 life bonus.
66.  Column IU (FMax6) - enter _100_. No range, it always gives +100 life.
67.  Save the file. If you decided to use enquetter, run the script to make your changes to the string.tbl, otherwise just double check to make sure you have the proper entries in your tbl editor.
68.  You must now add your modified string.tbl and setitems.txt to the .mpq, as follows:  
     mpq2k a patch\_d2.mpq setitems.txt data\\global\\excel\\setitems.txt  
     mpq2k a patch\_d2.mpq string.tbl data\\local\\lng\\eng\\string.tbl
69.  Create a folder in your Diablo II folder called data. In the data folder, create another one called global. And finally, create a folder called excel within the global folder. Then, run the game using the following command line:  
     'Path\\to\\your\\diablo ii\\game.exe' -txt
70.  Once in the game, start a game (single player or multiplayer) and use a test character (create one if need be). Once he is in the game, save and exit, then quit the game.
71.  Copy the setitems.bin from data\\global\\excel\\setitems.bin to the folder where you're working on your mod.
72.  You must now add the .bin to the .mpq as follows:  
     mpq2k a patch\_d2.mpq setitems.bin data\\global\\excel\\setitems.bin
73.  You're all done! Your new set should be fully working ^\_^ I will upload a test character to go along with this tutorial to ensure that it is working, but will do so at a later date (busy with other things atm :p).
74.  A few things that may or may not be worth noting:

-   You must add your new item set information to the string.tbl! The sets will not work properly and you may crash without them!
-   You can use the Itemx Add columns to give green bonuses for having multiple items in the set.
-   You can set the Itemx Add columns to 0 to create set items with as many as 7 bonuses (but no green bonuses)
-   Replacing sets is a good idea, so players can find your sets a little bit easier
