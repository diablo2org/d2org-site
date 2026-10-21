---
title: Extending the Limit of 3 Automods (by Kingpin)
summary: Useful workaround of the usual 3 automod limit per base item.
keepId: 258
author: Phrozen Heart
posted: '2004-08-19'
views: 10351
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=258'
---
How does this works?

Open up properities.txt

At the first blank row add the following names in code column (this will give us 3 rows that we will add our abilities to).

max\_mod1  
max\_mod2  
max\_mod3

Each group of modifier will contains up to seven modifiers. All will use function 1 and the stat name (that are referred from itemstatscost.txt)

An example if we want to add armor class stat.

max\_mod1

func1: 1  
stat1: armor class

Repeat this up to func7 if you want to use seven abilities. This will work the same with the other two properties, max\_mod2 and 3. Totally this will allow up to 21 modifiers.

Now, save this when you have added so many modifiers you want and open up automagic.txt.

At the first empty row create a new automod (if you don't know how this works, go back and read the tutorials/file guides that exist on this part).

Here we add our new modifiers, depended of how many modifiers you want to add you either fill the first row or follow with so many you needs.

mod1code: max\_mod1 (our new modifier we created in properities.txt)  
mod1param: 0  
mod1min: 20 (the minimum value all the modifiers in our new max\_mod1 will have)  
mod1max: 30 (the maximum value all the modifiers in our new max\_mod1 will have)

When we are done here, and you just save and add your new automagic to your item. Now you have the possibilities to add more than 3 automods to an item.

This technique works also for setitems.txt & uniqueitems.txt, this will allow to have in unique items 84 modifiers!! :)
