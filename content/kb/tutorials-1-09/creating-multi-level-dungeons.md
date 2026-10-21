---
title: Creating Multi-Level Dungeons
summary: >-
  In our mod The Ancients: The Fury Within, we managed to create new multi-level
  dungeons by swapping level entrances and exits through altering the Levels.txt
keepId: 202
author: Phrozen Heart
credit: by SiLenTx
posted: '2003-12-02'
modified: '2018-01-06'
views: 6923
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=202'
---
In our mod The Ancients: The Fury Within, we managed to create new  
multi-level dungeons by swapping  
level entrances and exits through altering the Levels.txt

\*Just open-up your Levels.txt  
and look for the Vis0-Vis7 columns  
(Y-AF columns in excel). As you can see, theres a lot numbers there  
that  
correspond to the Level Ids (Id column or B column in excel) on  
where  
the entrances and exits of a certain levels were linked to.

For example in the Forgotten Tower Levels (Look for LevelName column or EZ  
column in excel for reference if you're not comfortable looking through  
Name  
column), we have:

Forgotten Tower

Vis0 = 6 (Level Id for Black Marsh)

Vis1 = 21 (Level Id for Tower Cellar Level 1)

Tower Cellar 1

Vis0 = 20 (Level Id for Forgotten Tower)

Vis1 = 22 (Level Id for Tower Cellar Level 2)

Tower Cellar 2

Vis0 = 21 (Level Id for Tower Cellar 1)

Vis1 = 23 (Level Id for Tower Cellar Level 3)

Tower Cellar 3

Vis0 = 22 (Level Id for Tower Cellar 2)

Vis1 = 24 (Level Id for Tower Cellar Level 4)

Tower Cellar 4

Vis0 = 23 (Level Id for Tower Cellar 3)

Vis1 = 25 (Level Id for Tower Cellar Level 5)

Tower Cellar 5

Vis0 = 24 (Level Id for Tower Cellar 4)

Obviously, you'll notice the pattern that the Vis columns implies. If  
you'll  
enter the Vis0 from Forgotten Tower, you'll be ported to Black Marsh.  
But if  
you'll enter Vis1, you'll be ported to Tower Cellar Level 1 and so on  
up to  
Tower Cellar Level 5. Tower Cellar Level 5 has no entry for Vis1 since  
its the  
last level and it has only one entrance/exit. Don't ever try to put  
entries in  
the Vis columns that has originally 0 on them to avoid crashes. So,  
Obviously,  
the always last levels are those who has only one entries in Vis  
columns like  
Den of Evil, Cave Level 2, Hole Level 2, Pit Level 2, Crypt, Mausoleum  
etc. Now  
how can we create multi-level dungeons like in D1? Its so easy to do.  
In our  
mod, the multi-level dungeons are located in Underground Passage all  
the way  
down to Underground Passage Level 2 (haven't renamed it to something  
else) but  
it consists of 15 levels. In this tutorial, we'll make a multi-level  
dungeon in  
Cold Plains. Now kindly look for Cave level 1 row (Act 1 - Cave 2) and  
Cave  
level 2 row (Act 1 - Cave 2 Treasure). These are the Cave levels that  
you will  
find in Cold Plains.

Originally you have these  
following values in Vis columns:

Cold Plains

Vis3 = Vis4 = Vis5 = Vis6 = 9 (Cave Level 1)

Cave Level 1

Vis0 = 3 (Cold Plains)

Vis4 = 13 (Cave Level 2)

Cave Level 2

Vis1 = 9 (Cave Level 1)

Cave Level 2 has only one  
entry in Vis columns since it is the last Cave level  
in Cold Plains. So, what we have to do now is to add levels to that  
Cave aight?  
We have so many options in order to increase the levels. One is to  
insert levels  
between Cold Plains and Cave Level 1 and the other one is by inserting  
levels  
between Cave Level 1 and Cave Level 2. You can actually swap the whole  
Cave  
Levels with the whole Tower Cellar Levels. But we're aiming to create  
multi-level dungeons here so its better to add some Tower Cellar Levels  
in the  
Cave Levels and you can do all you want once you've already know what  
to do. In  
our case, we'll have to insert Tower Cellar Levels between Cold Plains  
and Cave  
Level 1. So, we will cut down the Tower Cellar Levels (Tower Cellar  
Level 1-4)  
and we'll insert it between Cold Plains and Cave Level 1 so the result  
will be:

Cold Plains

Vis3 = Vis4 = Vis5 = Vis6 = 9 (Cave Level 1)

Tower Cellar 1

Vis0 = 20 (Level Id for Forgotten Tower)

Vis1 = 22 (Level Id for Tower Cellar Level 2)

Tower Cellar 2

Vis0 = 21 (Level Id for Tower Cellar 1)

Vis1 = 23 (Level Id for Tower Cellar Level 3)

Tower Cellar 3

Vis0 = 22 (Level Id for Tower Cellar 2)

Vis1 = 24 (Level Id for Tower Cellar Level 4)

Tower Cellar 4

Vis0 = 23 (Level Id for Tower Cellar 3)

Vis1 = 25 (Level Id for Tower Cellar Level 5)

Cave Level 1

Vis0 = 3 (Cold Plains)

Vis4 = 13 (Cave Level 2)

Cave Level 2

Vis1 = 9 (Cave Level 1)

We have now the proper order  
of the levels that we wished for but we have to  
alter also the Vis columns of the levels that has been affected by the  
swapping.  
In our case the affected levels in terms of warping are Cold Plains,  
Tower  
Cellar Level 1, Tower Cellar Level 4 and Cave Level 1. So what we'll  
gonna do is  
change the Vis columns of these levels to indicate the proper level  
warps that  
we're wishing for...

Cold Plains

Vis3 = Vis4 = Vis5 = Vis6 = 21 (Tower Cellar 1)

Tower Cellar 1

Vis0 = 3 (Level Id for Cold Plains)

Vis1 = 22 (Level Id for Tower Cellar Level 2)

Tower Cellar 2

Vis0 = 21 (Level Id for Tower Cellar 1)

Vis1 = 23 (Level Id for Tower Cellar Level 3)

Tower Cellar 3

Vis0 = 22 (Level Id for Tower Cellar 2)

Vis1 = 24 (Level Id for Tower Cellar Level 4)

Tower Cellar 4

Vis0 = 23 (Level Id for Tower Cellar 3)

Vis1 = 9 (Level Id for Cave Level 1)

Cave Level 1

Vis0 = 24 (Tower Cellar 4)

Vis4 = 13 (Cave Level 2)

Cave Level 2

Vis1 = 9 (Cave Level 1)

\*Note that Cold Plains have four the  
same values for Vis3-Vis6. You have to  
change all the four columns also with the same values if you'll link  
them to  
different level warps\*

Those Vis values from the  
right that are pointed by the arrows are the right  
values of Level Ids that we're wishing for in order to get this to work  
without  
crashes. You should replace original values with them. So easy aight?  
But we're  
not yet done. Some mod makers has not been successful making this one  
because  
they always forgot this last part. Remember that we had cut down the  
Tower  
Cellar Levels? Since we removed the Tower Cellar Level 1-4, Tower  
Cellar Level 5  
should now be linked directly to Forgotten Tower to avoid crashes or  
errors  
like:

Warning  
Location : C:\\Projects\\Diablo2\\Source\\D2Common\\DRLG\\RoomTile.cpp, line  
#686  
Expression : ptWarp

So this is what  
you'll gonna do:

Forgotten Tower

Vis0 = 6 (Black Marsh)

Vis1 = 25 (Tower Cellar Level 5)

Tower Cellar Level 5

Vis0 = 20 (Forgotten Tower)

You can always swap levels as  
much as possible without crashes as long as you'll  
never forget to properly arrange also the chopped levels like The  
Forgotten  
Tower in our example. Always attach the level which has only one entry  
in Vis  
column to the last level of you multi-level dungeons. And it is most  
advisable  
to write down the levels that you are swapping with like what we've  
done above  
than swapping the levels directly in your excel. You can easily trace  
the errors  
that you've done wrong by doing this. And for the last one, always  
create a  
backup of your mod before making new modifications...

How about if I want to rename  
the map names?

No problem. Just change the name in one of your tbl files located in  
data\\local\\lng\\eng\\\*.tbl... string.tbl for CD2 maps and  
expansionstring.tbl for  
expansion maps. And to remove those Entering Cave Level 1 (for example)  
message, they are located in data\\local\\ui\\eng\\act\*\\\*.dc6. Replace it  
with  
corresponding dc6 file with a blank one (R,G,B = 0,0,0)..
