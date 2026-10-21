---
title: Gambling For Random Runes
summary: >-
  In this tutorial you will learn how to create an item that will transform into
  a random rune. It’s an Illusion! Why I say Illusion you ask? This is easy to
  explain! Because we will actually create 33…
keepId: 189
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 9254
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=189'
---
In this tutorial you will learn how to create an item that will transform into a random rune.  
It’s an Illusion! Why I say Illusion you ask?  
This is easy to explain! Because we will actually create 33 different items that all look alike.  
How ever each one of them will transform into a different rune.

What you will need:  
A Spreadsheet of your choice  
A String Editor of your choice

Misc.txt  
Itemtypes.txt  
Gamble.txt  
String.tbl

First open up itemtypes.txt in your spreadsheet, after it’s open, scroll down to the Herb row and copy it.  
Paste the herb row at the end of the file, don’t worry, the maximum limit of rows for this file is 256 excluding the column headers.  
After you did this change the name column to something like Rune Stone, or whatever Name you want to use.  
Change the code to RUNG, standing for RUNe Gamble. Of course you could use your own code, but to make this tutorial easier to follow you should use this one.  
After you finished this save itemtypes.txt

Now its time to edit Misc.txt  
After misc.txt is open scroll down to the unused organ rows.  
Row number 34 is the unused soul organs row. Copy this row and paste it at the end of Misc.txt  
Again you shouldn’t worry, as the limit of rows for this file is very large, it can contain 4096 rows.  
Now copy the new line 32 more times, so that at the end of this step you will have 33 new rows at the end of misc.txt  
Change the name of the rows to something like Rune Stone 1” to “Rune Stone 33. This isn’t important at all, but it will help you keep the file more organized.  
Now scroll over to the level column and change it in such a way that it increases per row, I choose to use 2 as the base value so that at Rune Stone 33 ill end up with 66.  
This will make it so that Rune Stone 1 will be gamble able at level 2, wile Rune Stone 33 will only appear at level 66.  
Set Spawnable to 1 for all your new Columns set the cost column to something reasonable.  
However don’t increase it per line, as people would be able to see what rune stone it is based on the price and hence cheat.  
Give it a value such as 5000, which is a good price in my opinion. How we get to the tricky part, the code column.  
You will need to type 33 unique codes for your item, we will exploit the fact that codes are case sensitive and name our new codes R01 to R33.  
Go over to the flippyfile column and change it to flpbox for all the new items.  
For inventory graphics we will re use the unused souls graphic, which is invsol, so change the entry under invfile to invsol.  
Now we finally get to the main part. Set Transmogrify to 1 if it isn’t already.  
The following column, namely TmogType defines the item to morph into when the item is right clicked, here we will need to use the original rune codes.  
Start with r01, which is the el rune, scale this up until you reach r33, which is Zod.  
After this is done, change the type column to RUNG for all your new items.  
Last but not least, make sure that the useable column is set to 1 for all your new rows, this controls if the item can be right clicked.  
Now you can save misc.txt

Finally, we are almost done. Now open Gamble.txt and at the end of the file add all our new codes which are R01 to R33 in the code column.  
To keep it clean also include the Rune Stone 1 to Rune Stone 33 names in the name column.  
Save Gamble.txt and exit your spreadsheet.

Open String.tbl in your string editor and add your new R00 to R33 codes.  
Make all of them have the same display name we will use Rune Stone for this example.  
Save your string.tbl file and exit.

Now all you have got to do is load up Diablo 2 and play. And of course enjoy your random runes!
