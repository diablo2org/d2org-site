---
title: Summoning Werebears and Werewolves
summary: >-
  Tested and working with Diablo 2 LoD 1.08 I will assume in this tutorial that
  you know how to extract and insert txt files from mpq files or know how to use
  -direct.
keepId: 212
author: Phrozen Heart
credit: by Fusman
posted: '2003-12-02'
views: 7086
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=212'
---
Tested and working with Diablo 2 LoD 1.08  
I will assume in this tutorial that you know how to extract and insert txt files from mpq files or know how to use -direct.

If you are bored with the original wolves and bears how about summoning werebears and werewolves ?  
It's easy, open up monstats.txt and find the lines for the Druid summonable bears and wolves, lines 424 and 431. Now find the lines for the werebear and werewolf, lines 433 and 434. Copy these lines to a new excel sheet along with the header line in monstats.txt. This new sheet looks something like this then

![](http://dynamic6.gamespy.com/~phrozenkeep/tutimages/druidsummontut1.gif)

Ok, now that you have done this, it is very easy to make changes to Druid Fenris and Druid Bear lines to make them look like the Wolf and Bear lines. Start by changing column I called 'code' to 40 for the Druid Fenris and change the 'code' column to TG for the Druid bear. Now you have changed the 'code' column for those two to be the same as the wolf and bear lines. That is, the Druid Fenris has the same value as the Wolf line and the Druid Bear has the same value as the Bear line. You need to do some more of this exact thing for this to work, make the Druid Fenris line similar to Wolf line and the Druid Bear line similar to Bear line. Specifically columns BE (make them 0), BJ (change to 1 for Fenris), BK and BL (make them 1 for both Fenris and Bear), BO and BP (make them both 1 for both Fenris and Bear), BQ and BS (make 0 for both Fenris and Bear), BT (make 1 for Bear). Column FA needs to be 96 for Fenris, just like the Wolf line has. That's it for those two lines (Druid Fenris and Druid Bear), now copy those lines back into monstats.txt into their original locations one by one. Druid Fenris to line 424 and Druid Bear back to line 431. Remember the Wolf and Bear lines (#4 and #5 in new sheet) are just for reference, you dont need to change those lines at all, so you dont need to copy them back or anything. Now save your modified monstats.txt file and just close that new book you made for the copied lines (book1 in screenshot), or save it for later if you want.

Next open up montype.txt and find the lines for Druid Fenris and Druid Bear, lines 424 and 431 again. Copy columns B through R in line 433 and paste those cells in the same columns in line 424 now do the same thing again except copy from line 434 and paste into line 431.

![](http://dynamic6.gamespy.com/~phrozenkeep/tutimages/druidsummontut2.gif)

In the screenshot I have selected columns B through R in line 433 copied and pasted them in line 424.  
Save and close montype.txt and add both of the files you modified into your patch\_d2.mpq file or use the -direct method whichever you prefer. You can make this look better by changing the string file to read 'summon werewolf' instead of 'dire wolf'. Use Tbled 1.02 to edit string files.  
That's it, happy summoning.
