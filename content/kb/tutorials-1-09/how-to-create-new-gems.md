---
title: How to Create New Gems
summary: >-
  So you have learnt how to tweak some of the properties of gems.txt to make the
  classic gems just that bit better, but u want to add brand new gems with new
  gfx and under a new item type. How do you…
keepId: 197
author: Phrozen Heart
credit: by Shadow Talon
posted: '2003-12-02'
views: 8401
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=197'
---
So you have learnt how to tweak some of the properties of gems.txt to make the classic gems just that bit better, but u want to add brand new gems with new gfx and under a new item type. How do you do this you ask, well read on and you might just learn something :)

First you shall need the following:  
Misc.txt  
Gems.txt  
Itemtypes.txt  
TreasureClassEx.txt  
Several new gem gfx (ask me kindly and I might send u my gem gfx)  
A good imagination in organising gem properties and creating names for the gems

First I suggest that you write down some names of gems and also give them a unique code, which must be 3 characters long.

Now open up misc.txt

Add a new line at the top of the page so you can see which columns u r working on 

First add the name of your new gem in the first 2 coloumns named, name and namco

The next line must have 1 in it for all gems, what this column does is make sure that the properties of the gems is always constant ..if you leave this blank or put a zero in this column you shall find that your gem properties will continually increase each time you log into the game (when it is socketed) this is quite amusing to see :) 

On the level column just put zero here, as for levelreq put in any level you think is fair for the quality of gem you are about to make. Do the same for rarity though this has little affect on the actual rarity of the item.

Spawnable column must be set to 1, speed 0 and nonduribility 1. For cost just put in the amount you think your gem will be worth, I leave gamble code empty, I think theres a tutorial on allowing items to be gambled. The code column must be a 3 character unique entry, to make sure it is unique I use the tidle key (key left to one) to make it definitely unique from the codes that are already being used. For alternategfx just use the same as code, for component column, just make this 16 for all your gems,   
Unless you are going to make your gem an irregular size put 1 in invwidth and invheight. Hasinv should be set to zero same with gemsocket and gem applytype. The flippyfile column is the gfx used for the item when it is dropped, so just use any flippyfile from the original gems.

Invfile is the gfx you are using for the gem, it must have inv as the first 3 characters and must have 3 more characters following it, I just use the 3 character code to distinguish the gfx. Uniqueinvfile is just for the uniqueiems, ignore this same with the special column. Transmogrify column is used to change the item to a different one, there is a tutorial that explains on how to use this function if you wish to use it. This also goes for the Tmog columns Useable and throwable columns should be set to zero for gems.

We are going to skip the type columns for now ..ill get back to it in a moment.

Sound column should be set to 9 for all gems, whole unique should be zero, same with transparent, transtbl should be set to 5. the next 9 columns should be set to zero  
This will bring you to spellicon column which should be set to -1. next 3 columns should be set to zero. 

If you are going to make each gem have a better quality like the original ones then you should put the code for the better gem in the BetterGem column, I personally do not do this, since I have not found it to crash, you simply put in the item code (three character code) in here for the upgraded gem you will get when you use the gem shrine. The rest of the columns are set for the shops, and other options, which are explained in other tutorials, set these to your pleasure. 

Open up itemtypes.txt and look for the Chipped Gems column. Now select the whole row and copy and paste it into a new row, change its name to something like GemA, GemB, GemC, etc., and give it a new code, this is the itemtype code, it must be 4 characters long, you have created a new gem itemtype :) wasn't that easy?

Well you can have 10 items to each itemtype so make as many as you need to so you can fit all your new gems into the game. You are nearly finished, take a breather for a sec :) 

Now go back to misc.txt and add in your new itemtype codes (4 character code) in the itemtype column. You have now finished with misc.txt and itemtypes.txt

Open up treassureclassex.txt

Now add a new line, and start off by typing in your newly acquired itemtype in the first column. For the picks column just put 1 in here and leave the next 4 blank. No Drop should be zero.

Go to the item1 - item 10 columns and add in the 3 character code of your gem(s) in these, and for the prob1 - prob10 colums add what probability you want those items to show u against the other items, the lower the number the more common the item is.

Now you can do either of 2 things, add your itemtype to the items list of the original gems or you can add specifically where your gems shall drop.... If your not too sure how to do the second then just find chipped gems and add your itemtype(s) here and also the prob. If you have more them 3 itemtypes them just add them to the other gem type listed below chipped gems 

Now leave the rest of the columns for the moment except for the last 2 which should be set to zero. Theres a tutorial on this file if you want more info

Now you can finally get to actually creating you gems themselves

Open up gems.txt

Type in the name of your gem in the first column, the next 2 columns can be left blank but, by all means experiment with transform to see what colour changes shall happen when you socket your gems in weapons. Make sure you add the 3 character code from misc.txt to the next column. The max number of properties you can have for each socket type (weapon, armor and helm) is 3, so I just add this number o the nummods column because it doesn't crash if you have less then 3 properties. Now the next 4 columns well define what the 1st properties shall be for weapons. Add the appropriate properties and set the mod parameters in. beware that not all the properties shall work, I have tested all the properties to see if they crash the game or not and you will find this in my next post. Though you should be safe with most of the properties, so for now add some basic properties from the magical code modifier, such as; ac, ac%, dmg-min, dmg-max.. Well once you have done the first properties I'm sure you can figure out that the rest of the columns are basically the same, this will take you the a fair while to do if u added as many new gems as I did so have fun :)

In gems.txt, the last column in needs to be filled in otherwise you shall get an error like this: 

Assertion Failure  
Location: Fog\\Scr\\excel.cpp, line #529  
Expression: 'data==sym\_eol'

So place a zero in this column if you are not using it.

Remember after you have finished using all your txt files to make sure that n e new items you have created need to go on the bottom of the page (except in TreassureClassEx.txt) and also to add any code you have created into patchstring.tbl otherwise you shall receive errors. 

Ok once you have finished this you should be ready to test out your new gems.
