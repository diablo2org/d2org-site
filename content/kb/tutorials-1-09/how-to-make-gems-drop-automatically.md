---
title: How to Make Gems Drop Automatically
summary: >-
  This is really just a few simple changes to three files, and it will make ANY
  new gems you add automatically drop for you- no worry about treasureclassex
  anymore, for gems anyway! Note that this…
keepId: 187
author: Phrozen Heart
credit: by 54x
posted: '2003-12-02'
views: 6594
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=187'
---
This is really just a few simple changes to three files, and it will make ANY new gems you add automatically drop for you- no worry about treasureclassex anymore, for gems anyway! Note that this tutorial won't be of any use to you if you aren't going to add new gems, or if you have already added all your new gems and have them dropping the way you like. But if you want gems to always drop equally, and the game to drop your gems the same way it drops Blizzard's, read on.

The first change we need to do is incredibly simple. Open up itemtypes.txt, and scan down the rows for gems. Then look accross the columns for 'Treasureclass.' (if you're using excel, scroll with the scrollbars to do this, so that you don't lose your place on the Gem row. Just remember the letter for Treasureclass) Set this column to 1. Close itemtypes.txt.

Then, in misc.txt, go through all your existing gems, (including Blizzard's gems, too) and make all the chipped level 3, the flawed level 6, the normal gems level 9, the flawless level 12, and the perfect ones level 15. As long as the levels are set to this, and you change treasureclassex.txt, gems should drop automatically. If one type is not dropping, you didn't set the level properly. :)

Right, now only one more file to edit to set up automatic gem dropping- the giant Treasureclassex. Don't worry, there is less typing to do in here than in misc.txt!

Right, look for the rows that say chipped gems, flawed gems, etc... Delete everything from the drop and probability columns.

Now, put 'gem03' without quotes in the first drop column for chipped gems, and give it a probability of 1. Do this for all the grades.

gem03 - chipped  
gem06 - flawed  
gem09 - normal  
gem12 - flawless  
gem15 - perfect

Now these five codes will work ANYWHERE in treasureclassex.txt. You could do things like forcing Duriel to always drop four normal gems, as well as his usual drop and a TP scroll. And it will count ALL your gems so long as you don't typo it, and you have set your gems levels to 3, 6, 9, 12, and 15.

Have fun with this one :)
