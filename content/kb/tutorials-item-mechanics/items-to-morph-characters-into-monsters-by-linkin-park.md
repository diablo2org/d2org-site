---
title: Items To Morph Characters Into Monsters (by LiNkIn_PaRk)
summary: >-
  Just thought some of you might have a use with this, it causes the same effect
  as the necro turning into the vampire when he uses the trangs-ouls set.
keepId: 20
author: Phrozen Heart
posted: '2004-08-19'
views: 12718
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=20'
---
In this example Im making it turn you into the swarm of bugs in act 2.

Open up states.txt, and goto the row that has the state 'monsterset', id 176.

Copy that row, and paste it at the bottom of the file

Change the state name to something else, (for this example use swarmmorph)

And change the ID to the number after the collumn before it.

Scroll over to the gfxclass collumn and you should see the bloodlords ID there, change it to 89, (the swarm of bugs from act 2)

After that, you can change the overlays, and have some nice effects, otherwise, your done.

Just put the new state on your unique, set, etc, and your done!

ex:

Code:

prop1 par1 min1 min2

state swarmmorph 1 1

edit:: Btw, the code above is the code you put for the modifyer in uniqueitems.txt, or sets, or wherever, ^^
