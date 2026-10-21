---
title: Spawning NPCs and Critters
summary: >-
  For this you will need 2 files Monstats.txt and Levels.txt First open up
  monstats.txt and go down to row 151(if I am not mistaking this is a Dummy and
  its called Chicken in its Namco(B).
keepId: 210
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 6151
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=210'
---
**Making chickens appear in act 4 town.**

For this you will need 2 files Monstats.txt and Levels.txt First open up monstats.txt and go down to row 151(if I am not mistaking this is a Dummy and its called Chicken in its Namco(B).

Go to MinGrp(V), MaxGrp(W) columns and make MinGrp have about 10-50 in it make MaxGrp have something between 100-500 in it.

Next open up levels.txt and go to the row of act 4 town(one of the last ones in here) go to the C1-C5(EB-EF) columns and put 149 into them. Now go to columns CA1-5 and make the rows have 30 in em(for the rows u made the chickens in (like this C1 chicken then CA1 will be 30) Now ad it to the patch\_d2.mpq and your done.

**Making npcs appear in any town you like**

This is pretty much EXACTLY the same as above just that u don't use the c1-5 columns you use the M1-25colums(BD-CB).

Go to monstats.txt and find the npc you search for(Natalya seams not to work if I finished act 3) now ad that npcs number –2 into m1 make sure mtot is set to 1 and that monden is set to ATLEAST 100.
