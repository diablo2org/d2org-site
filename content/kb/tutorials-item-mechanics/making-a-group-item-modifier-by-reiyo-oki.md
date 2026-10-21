---
title: Making a Group Item Modifier (by reiyo_oki)
summary: See tutorial for details.
keepId: 270
author: Phrozen Heart
posted: '2004-08-19'
views: 10587
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=270'
---
This is pretty basic property editing, but also needs some knowledge of itemstatcost and TBL files.

I edited this to make the string bit more precise

I'll use the property I created as an example:

Dual Leech:

Open up properties.txt and create a new row at the bottom for the Name column, put dual-leech  
for completed put 1  
leave set1 and val1 blank  
put 1 in func1  
put lifedrainmindam in prop1  
put 3 in func2  
put manadrainmindam in prop2  
put 0 in \*eol  
save the file

Now open up itemstatcost and go down to the rows for lifedrainmindam and manadrainmindam (they should be close together)  
Go all the way to the end of the row and put a 3 in dgrp  
in dgrpval, and dgrpfunc put whatever is in descval (for dgrpfunc I used 19)  
in dgrpstrpos and dgrpstrneg put dual-leech  
now save and open up patchstring.tbl create a new string with the name dual-leech (or whatever you used instead) and put the text for the property there. If you used dgrpfunc 19, you will need to put something like:

%d%% life and mana stolen per hit

Now all you need to do is create a magic prefix/suffix using this property, but I'll leave that as an excercise to the reader
