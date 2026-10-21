---
title: Charms as Set Items (by Joel)
summary: How to mimick a set containing a charm.
keepId: 252
author: Phrozen Heart
posted: '2004-08-19'
modified: '2018-01-06'
views: 12531
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=252'
---
Well, I know people have tried and tried to use charm as a part of a set.

Obviously every attempt failed cause charm is never 'equipped' and set code specifically seek for equipped items.

Now, with the brand itemstatcost/properties terrors out there, we MAY mimick a set containing a charm.

Create a new stat in itemstatcost.txt, call it item\_set\_charm\_is\_present.

Now ,let's say your set give you :

+enr

+mana

+hp

when completed.

Open up properties.txt and copy enr/lvl, mana/lvl and hp/lvl row at the bottom. Chaneg their code to be :

enr/set, mana/set, hp/set.

Cahnge tbl entry for description to remove the ugly (based on char level) indicator.

In this rows, you'll find a column called opstat which contains level.

Change this to item\_set\_charm\_is\_present.

Now create a new properties based on item\_set\_charm\_is\_present, called set-complete.

Create your set as usual. Up to 6 items yeah !

Create a unique charm and give it the properties set-complete 0 1 1  
among the other bonus. Edit the tbl entry of this unique to be  
displayed green. Set it to carry1 1, nolimit 1

In your complete set bonus, instead of using enr,mana,hp, use  
enr/set, mana/set, hp/set with a correct param to get the value you  
need.

Now save all this jiggy, drop your set or cube it and equip every part.

When you'll wear the set except, complete set bonus will not appear,  
or will appear as +0 ENERGY, +0 HP etc ... When you 'll wear the  
charm, the set-complete properties will raise the item\_set stat and  
thus give you your final set bonus.

And voila A pseudo-charm set made in a few minutes :p
