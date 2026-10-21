---
title: Making Super Uniques Drop Specific Items
summary: >-
  Things you will need: MPQview Excel (or equivalent) MPQ2k CLEAN patchd2.mpq
  Treasureclassex.txt Superuniques.txt Monstats.txt (Depending on what item you
  want him to drop, select one or more of the…
keepId: 188
author: Phrozen Heart
credit: by NTroast
posted: '2003-12-02'
views: 10930
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=188'
---
**Things you will need:**  
MPQview  
Excel (or equivalent)  
MPQ2k  
CLEAN patch\_d2.mpq  
Treasureclassex.txt  
Superuniques.txt  
Monstats.txt  
(Depending on what item you want him to drop, select one or more of the following files...)  
Armor.txt -basic armor, magic armor, rare armor  
Weapons.txt -basic weapons, magic weapons, rare weapons  
Setitems.txt -set items  
Uniqueitems.txt -unique items

  
1\. Open MPQview, and make sure you open the data file first (Downloadable in Tools of the Trade at Phrozen Keep) then select open archive. Search in your diablo 2 directory and select the CLEAN patch\_d2.mpq, and open it (usually located in C:\\program files\\diablo II\\). There is an awesome little tool called filter; select the .txt from the dropdown list. Then save all the .txt files specified above to your own d2mod folder.

2\. Open Excel and open the treasureclassex.txt in your d2mod folder first (make sure the Files of Type dropdown menu is on Text Files, or else you wont be able to see them). In the treasureclassex.txt go to the very bottom row (row 775). Create a new row at the bottom and name the Treasure Class column (column A) the super-unique monster's name (i.e. Corpsefire).

3\. Then in the Picks column (column B) type the number of items you want him to drop in negative form (i.e. I want him to drop 4 items so I enter -4).

4\. The next rows go in this order: Unique, Set, Rare, Magic (Columns C-F); type 1024 in the column of quality you want the monster to drop. If you want the monster to drop normal items don't type anything.

5\. In the NoDrop column (column G) type 0. Save the file.

6\. Open the item file in excel (i.e. armor.txt, setitems.txt) look up the Item(s) you want him to drop in the name column (column A) (Hint: 'Find' is useful). For set items look for the entire set name in name column (column A) and scroll to the right to get the item names. Make sure when writing the items down that you copy them down EXACTLY (Note: some items are misspelled). Also write down the items level found in Level column (column F)

7\. Open treasureclassex.txt and go to the bottom entry you made and scroll over to the Item1 column (column H) and type the first items name, and in the next column, Prob1 (column I) type 1. Repeat down the line until all items are entered typing 1 after each one. Make sure you type 0 in the last column named Term (column AG). Save the file.

8\. Open superuniques.txt and look for the monsters name in the Name column (column A) (Hint: Find is useful). In the TC column (column K) enter the monsters name (The name we made in step 2). Save the file.

9\. Open monstats.txt and look for the super-unique monster's class in the Class column (column A) (i.e. Corpsefire is a Zombie so look for Zombie). Scroll over to the Level column (column V) make sure the level is at least equal to the highest level of one of your items. If not change it so it is.

10\. Now we need to make the install files. Open notepad and type:

O Patch\_d2.mpq  
a treasureclassex.txt data\\global\\excel\\treasureclassex.txt  
a treasureclassex.bin data\\global\\excel\\treasureclassex.bin  
a superuniques.txt data\\global\\excel\\superuniques.txt  
a superuniques.bin data\\global\\excel\\superuniques.bin  
a monstats.txt data\\global\\excel\\monstats.txt  
a monstats.bin data\\global\\excel\\monstats.bin  
C patch\_d2.mpq

Then save it as install.txt

11\. Open a new notepad and type:

mpq2k s install.txt

Then save it as install.bat.

12\. Now add the install files we made into your d2mod folder also containing your new treasureclassex.txt, new superuniques.txt, CLEAN patch\_d2.mpq, and MPQ2k program.

13\. Run the install.bat file.

14\. Copy the patch\_d2.mpq file from you d2mod folder to you diablo 2 directory (i.e. C:\\program files\\diablo II\\). Make sure you make a backup of your CLEAN patch\_d2.mpq.

15\. You need to create this directory on your hard disk for the .bin files 'C:\\Program Files\\Diablo II\\data\\global\\excel\\'

16\. Click on the start button in the bottom left hand corner of your screen and select Run. Browse your hard disk to find the file game.exe in your diablo 2 directory. Click open and then add '-direct -txt' to the end of the filename outside the quotations (i.e. 'C:\\Program Files\\Diablo II\\Game.exe' -direct -txt)

17\. Press OK to run the game; open a character; save the character; close the game.

18\. Open the directory 'C:\\Program Files\\Diablo II\\data\\global\\excel\\'. Copy the treasureclassex.bin, superuniques.bin, and monstats.bin into you d2mod folder.

19\. Run the install.bat file.

20\. Copy the patch\_d2.mpq file from you d2mod folder to you diablo 2 directory (i.e. C:\\program files\\diablo II\\).

21\. Run the game normally. Kill the super-unique monster and test if he drops the items (he should).  

**Credit & Thanks to**: Apocalypse Demon & Zhoulomcrist.
