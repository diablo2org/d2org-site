---
title: Adding Sockets to Body Armors
summary: To make armors have sockets you basically make the game think that
keepId: 390
author: Nefarius
credit: by Fusman
posted: '2006-06-21'
modified: '2018-01-06'
views: 8816
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=390'
---
I'm assuming in this

tutorial that you know a bit about mod making and have read

the basic tutorials.<br>

To make armors have sockets you basically make the game think that

they are helms. Open up armor.txt in excel. First we go to column

U called 'component' and make all the 1 for the body

armors into 0 to match the helms. Second go to column Z called

'hasinv' make that 1 for all the armors you want to have

socketed. Third is the column right next to the last one or column

AA called 'gemsockets'. Insert the number of sockets you

want each armor to have, 3 is a good one. Next up column AP called

'type' change the default 3 into 37 to match the helms

again. Now all that's needed is the final touch, and that is

column Q called 'alternategfx' make all the armors have

'lit' in that column. This is to avoid the headless bug.<br>

Save and add the armor.txt to your patch.mpq.
