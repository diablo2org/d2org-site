---
title: Set Items Tutorial
summary: >-
  --- 1. setitems.txt (location: dataglobalexcelsetitems.txt) 2. string.tbl
  (location: datalocallngengstring.tbl)
keepId: 427
author: Nefarius
credit: by Perfect Cell
posted: '2006-09-07'
views: 6543
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=427'
---
The files you will need to alter are:  

|     |
| --- |
| 1\. setitems.txt (location: data\\global\\excel\\setitems.txt) |
| 2\. string.tbl (\*location: data\\local\\lng\\eng\\string.tbl) |

\* there are also other locations for strings for other languages:

-   data\\LOCAL\\LNG\\CHI\\string.tbl (Chinese)
-   data\\LOCAL\\LNG\\DEU\\string.tbl (German)
-   data\\LOCAL\\LNG\\ESP\\string.tbl (Spanish)
-   data\\LOCAL\\LNG\\FRA\\string.tbl (French)
-   data\\LOCAL\\LNG\\ITA\\string.tbl (Italian)
-   data\\LOCAL\\LNG\\JPN\\string.tbl (Japanese)
-   data\\LOCAL\\LNG\\KOR\\string.tbl (Korean)
-   data\\LOCAL\\LNG\\POL\\string.tbl (Polish?)

Now, to the setitems.txt . . . If you have read the file guide found [here](http://web.archive.org/web/20020203220018/http://www.planetdiablo.com/phrozenkeep/guide-setitemstxt.htm), you will have a basic idea of what the file is all about. If you don't, you'll quickly catch on during the tutorial.

For this example, we will make a small set called _Diablo's End_, that contains some items from Diablo I. First, you should read Rana's [Enquettar tutorial](http://web.archive.org/web/20020203220018/http://www.planetdiablo.com/theforge/), it will make adding to the string.tbl for Blizzard 1.0x Diablo II patches _so_ much easier compared to using a tbleditor. Then, after installing Perl add ;:\\\\BIN so you can run perl from any directory. Unzip the into your mod working directory, so it can also be run :)

First of all, we should plan what we want in the set, and what the items will be called. Since I want this example short, here's what's gonna be in our set:

-   Set Name: Diablo's End
-   Set Prefix: Diablo's
-   Set Item1: Armor of Gloom
-   Set Item2: Optic Amulet

Now, let's get to the step-by-step process of adding the new set. First, we must prepare for adding the codes to the string.tbl using Enquettar:

1.  Make a file called stringchanges.txt file with the text below found in _italics_:  
    _a 'Diablo's End' 'Diablo's End'_ this is the set name (code) and set name (in game)  
    _a 'Diablo's' 'Diablo's'_ this is the set prefix (code) and set prefix name (in game)  
    _a 'Dgloom' 'Armor of Gloom'_ this is the first set suffix (code) and item name (in game)  
    _a 'Doptic' 'Optic Amulet'_ this is the second set suffix (code) and item name (in game)  
    **\*\* we will add the changes to the string.tbl in the last step**
2.  Go into the setitems.txt and remove one full line (except row 1 ^\_^)  
    _In this example, I removed row 2 (Arctic Gear_)
3.  Now, in column A (under 'Name') enter _Diablo's End_ (the name of the set from the 1st/Enquettar step)  
    -   _this makes the game look for 'Diablo's End' in the string.tbl for the set name_
4.  Next, enter _Diablo's_ in column B (under 'Prefix')  
    -   _this makes the game look for the 'Diablo's' prefix when making a set item_
5.  Third, enter _0_ in column C (under 'Version')  
    _this column was added in 1.04_
6.  Column D, the next column (under 'Level') is entirely up to you, _it determines the level requirements of the items in the set_
    -   set Column D to _27_
7.  Column E ('NumItems') determines how many items the game looks for in this particular set. Since we only have 2 items
    -   set Column E to _2_
8.  Column F ('NumProperties') is probably the second most important column in this file, it will tell the game how many magic properties apply to the **whole set**. This includes magic properties for each item!  
    For a simple equation, simply add this up:  
    (Number of Set Items \* 2) + (Set Bonuses)  
    I have a 2 piece set, and I want 2 bonuses for getting the whole set, so I get:  
    (2 \* 2) + (2) = 6
    -   set Column F to _14_
9.  Column G ('Transform') determines whether the set items will morph into a color different than their item color. _0_ means no, and _1_ means yes.
    -   set Column G to _1_
10.  Column H ('Transformcolor') is the second half of the 'Transform' column. If you set column g to _1_, then set this column to the color you'd want the set items to change to. For example, Arcanna's Set morphs to blue items. The full color list is given at the bottom of the tutorial
     -   set Column H to _16_
11.  Columns I-K are all tied together to determine what set item 1's item type and name will be. Column I ('ItemType1') will determine what type of item the first set item will be. In my example, I want Full Plate as the item type, from armor.txt, you will find that it is also called Full Plate there
     -   set Column I to _Full Plate_
12.  Column J ('Item1') also determines the item type. This is the second half to column i, and requires the item **code**. The code for Full Plate is _ful_

-   set Column J to _ful_

14.  Column K ('Item1Suffix') is code of the set item in string.tbl used by the game to find the set item's name. Since we gave the code _DGloom_ in our stringchanges.txt, we must enter that here, too. Don't worry, the item won't be called 'Dgloom' in game, it will be called 'Armor of Gloom'

-   set Column K to _Dgloom_

16.  Repeat steps 11-13 for the Optic Amulet
     -   set Column L to _Amulet_
     -   set Column M to _amu_
     -   set Column N to _Doptic_
17.  Columns O-Z will be blank because we only have 4 set items
     -   leave Column O to Column Z blank
18.  Columns AA-AD ('PropertyMod1Code', 'PropertyMod1Offset', 'PropertyMod1Min' and 'PropertyMod1Max') are all used as the first of **two** magic properties for the first set item (Armor of Gloom). If you remember the Armor of Gloom from Diablo, one of the main modifiers was no strength requirements. The code for this magic modifier is rq00 (-requirements). Since we want no requirements, we will set this to 0. So, in column AA enter _rq00_, in column AB enter _\-1_ (it's always -1), in column AC and AD enter _100_. This makes the item have -100% strength requirements, so zero strength is needed to wear the item.
     -   set Column AA to _rq00_
     -   set Column AB to _\-1_
     -   set Column AC to _100_
     -   set Column AD to _100_
19.  Columns AE-AH ('PropertyMod2Code', 'PropertyMod2Offset', 'PropertyMod2Min' and 'PropertyMod2Max') are all used as the second of **two** magic properties for the first set item (Armor of Gloom). The other main bonus on the item from D1 was the, high defense rating. We'll add 60 defense in this example. The code for this magic modifier is ar00 (+x defense). Since we want +60 defense, we will set this to 60. So, in column AE enter _ar00_, in column AF enter _\-1_ (it's always -1), in column AG and AH enter _60_. This makes the item also have +60 defense.
     -   set Column AE to _ar00_
     -   set Column AF to _\-1_
     -   set Column AG to _60_
     -   set Column AH to _60_
20.  Columns AI-AP ('PropertyMod3Code', etc) are used to give the 2 bonuses on the 2nd set item (Optic Amulet), I used the big light resist and damage reduction, so the values to enter are: AI = rl00 (light resist), AJ = -1 (as always), AK = 40, AL = 40 (40-40% light resist) and AM = ar01 (damage reduced by), AN = -1 (as always), AO = 1, AP = 1 (-1 damage from enemies).
     -   set Column AI to _rl00_
     -   set Column AJ to _\-1_
     -   set Column AK to _40_
     -   set Column AL to _40_
     -   set Column AM to _ar01_
     -   set Column AN to _\-1_
     -   set Column AO to _1_
     -   set Column AP to _1_
21.  Columns AQ-AX ('PropertyMod5Code', etc) will give the 2 set bonuses to the set. Let's add +15 to dexterity, and cannot be frozen. \* Note: because sp10 (cannot be frozen) is a boolean variable, we only need to set it to 1.
     -   set Column AQ to _dx00_
     -   set Column AR to _\-1_
     -   set Column AS to _15_
     -   set Column AT to _15_
     -   set Column AU to _sp10_
     -   set Column AV to _\-1_
     -   set Column AW to _1_
     -   set Column AX to _1_
22.  Remember step 1? Well, now we're going to add the stuff to the string.tbl using Enquettar. First, extract the string.tbl from patch\_d2.mpq located at data\\local\\lng\\eng\\string.tbl and put it in your directory (wherever you do your mpq2k stuff). Make sure you have these files in your directory:

     1.  string.tbl
     2.  enquettar.pl
     3.  stringchanges.txt
     4.  patch\_d2.mpq

     Now, go to Command Prompt and run perl with this command line:  
     **perl enquettar.pl string.tbl stringchanges.txt > newstring.tbl  
     **Now, you should have a new file called 'newstring.tbl' in your directory. Let's insert this back into the .mpq:  
     **mpq2k a patch\_d2.mpq newstring.tbl data\\local\\lng\\eng\\string.tbl**
23.  Quick recap
     -   For making a set, you must add the set name (and code), the set prefix (and code) and each set item name (and code) in order to have each item work properly in-game
     -   Each set item has 2 magic modifiers.
     -   Your Set Item Bonus comes after all item bonuses
     -   Your Number of Modifiers is gotten by multiplying 2x your number of set items, plus the number of modifiers you want for the bonus
     -   The set must replace an old set
     -   You must add the codes and names for all items to the string.tbl for the game to recognize the set

Ondo's Color Chart

|     |     |     |
| --- | --- | --- |
| No. | Color | Examples |
| 0   | White | Perfect Diamond, Sigon's, Bloodthief |
| 1   | Gray | Diamond Gems, Angelical, Bladebone, Culwen's Point, Gull, The Tannr Gorerod, Grayform, Magefist |
| 2   | Black (Light) | Skull Gems, Iratha's, Rakescar, The Diggler, Howltusk, Goblin Toe |
| 3   | Black (Dark) | Perfect Skull, Sage, Shrewd, Vivid, Cerulean, Vermilion, Forked, of Carnage, of Slaughter, of Performance, The Humongous, Crushflange, Rixots Keen, Dimoaks Hew, Undead Crown, Snakecord |
| 4   | Blue | Sapphire, Vidala's, Arcanna's, Uwe's Lament, The Battlebranch, The Face of Horror, Goldwrap |
| 5   | Blue | Sapphire Gems, Devious, Fortified, of Life, Milabrega's, Maelstromwrath, The Generals Tan Do Li Ga, Irices Shard, Woestave, Gorefoot |
| 6   | Blue | Perfect Sapphire, Vulpine, Drake's, Dragon's, Wyrm's, of the Vampire, Ironstone, Ripsaw, Pluckeye, Heavenly Garb, The Hand of Broc |
| 7   | Red | Ruby, Cleglaw's, Death's, Lance of Yagai, Witherstring, Chance Guards |
| 8   | Red | Ruby Gems, of Burning, of Defiance, Hsarus', Berserker's, The Salamander, Rimeraven, Blinkbats Form, Frostburn |
| 9   | Red | Perfect Ruby, of Regrowth, of the Tiger, of the Mammoth, of the Locust, Stormeye, The Centurion, Hotspur |
| 10  | Green | Emerald, Bane Ash, Twitchthroe, Treads of Cthon |
| 11  | Green | Emerald Gems, of Pestilence, Cathan's, Soulflay, Wizendraw, Darkglow, Tearhaunch |
| 12  | Green | Perfect Emerald, +2 to \[Class\] Skills, Steeldriver, Steelgoad, Serpent Lord, Hawkmail, Lenyms Cord |
| 13  | Yellow | Perfect Topaz, Glowing, Amber, Civerb's, Infernal, Blastbark, Sparkling Mail, Nightsmoke |
| 14  | Yellow | Topaz Gems, of Quickness, of Thunder, of Stability, The Iron Jang Bong, Venomsward, Bladebuckle |
| 15  | Gold | Gold, Platinum, Meteoric, of Wealth, of Fortune, Isenhart's, Arctic, Rusthandle, Iceblink |
| 16  | Gold | Saintly, Holy, Massive, Savage, Merciless, Knight's, Lord's, King's, of Perfection, of Sorcery, of Wizardry, of the Giant, of the Titan, Tancred's, Boneflesh |
| 17  | Purple (Light) | Perfect Amethyst, Prismatic, Fechmar's Axe, The Grim Reaper, Rockfleece |
| 18  | Purple (Dark) | Amethyst Gems, Goreshovel, The Dragon Chang, Rattlecage |
| 19  | Orange | of Spikes, Tarnhelm, Bloodfist |
