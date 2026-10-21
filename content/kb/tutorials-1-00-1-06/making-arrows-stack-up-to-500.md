---
title: Making Arrows Stack up to 500
summary: >-
  1. Use MPQ View to extract the misc.txt from your PatchD2.mpq file (click here
  for more help on this)
keepId: 414
author: Nefarius
credit: by Phrozen Heart
posted: '2006-08-19'
views: 5999
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=414'
---
1\. Use MPQ View to extract the misc.txt from your Patch\_D2.mpq file (click here for more help on this)

2\. Open up misc.txt in either Microsoft Excel (or equivalent spreadsheet program) or one of the text editors from our tools of the trade section.

3\. Find row 20 which says 'Arrows' in the first column and then work your way along to the column entitled 'maxstack' (column AO). This is the maximum number of arrows allowed in a single quiver and at the time I'm writing this, the official figure is 350. Change this to 500 and make sure you resave misc.txt as a tab-delimited .txt file.

4\. Re-insert the misc.txt file into the Patch\_D2.mpq using mpq2k (click here for more help on this)
