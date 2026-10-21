---
title: Summoning Multiple Golems (by RagnarokES)
summary: This tutorial shows how to summon more than one golem at once.
keepId: 22
author: Phrozen Heart
posted: '2004-08-19'
views: 11489
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=22'
---
First, open up pettype.txt, and copy the golem row and paste it as 3 new rows at the bottom of the file.

On the golem row that you copied from (the one under valkyrie), change the pet type column name to claygolem, and leave the idx like it is. Go over to mclass1 and put 289 in there, and in the micon1 put earthgolumicon. Then delete the contents of the other mclass and micon cells in this row.

Now go down to the new ones (the one you put under hydra), change the pet type name to bloodgolem, and idx to 20. In the baseicon column change that to bloodgolumicon. In mclass1 put 290, in micon1 put bloodgolumicon, and delete the contents of the other mclass and micon cells in this row.

In the next row, change the pet type name to irongolem, and the idx to 21. Go over to the baseicon and change that to metalgolumicon, put 291 in the mclass1, and metalgolumicon in micon1. Then delete the contents of the other mclass and micon cells in this row.

Finally, in the last row, change pet type name to firegolem, and the idx to 22. Go over to baseicon and change that to firegolumicon, change mclass1 to 292, and change micon1 to firegolumicon. Then delete the contents of the other mclass and micon cells in this row.

Save pettypes.txt and load up skills.txt.

In skills, go to the clay golem row (row 77) then go over to the pet type column (column BJ) and put claygolem in there.

Now go down to the blood golem row (row 87) and change the pet type column to bloodgolem.

Go down to the iron golem row (row 92) and change the pet type column to irongolem.

Finally go down to the fire golem row (row 96) and change the pet type column to firegolem.

Save skills.txt and exit excel, load up d2 with -direct -txt and have fun fighting with multiple types of golems.

Just a note, you can use any name for the pet type column in pettypes.txt, just make sure the pet type column in skills.txt matches the one in pettypes.txt (i.e. if you put earthgolem in the pet type column in pettypes.txt, make the pet type column in skills.txt earthgolem as well).

I've also tried this with hireables, but with no luck, because there's no place to specify what pet type the hireables use. I think it would require dll editing to change which pet type columns they use, but I could be wrong.
