---
title: Matching specific Rainbow Facet in cube recipe
summary: >-
  Suppose you want to apply recipe only for poison levelup or lightning death
  Rainbow Facet
keepId: 482
author: rain-13
posted: '2026-07-26'
views: 197
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=482'
---
If you want to cube recipe that uses unique or set items as a input, you can usually just write item name or code such as "Eschuta's temper" or "Natalya's Totem" in input 1 field in [CubeMain.txt](/kb/file-guides/cubemain-txt) and call it a day. But with Rainbow Facets things get more interesting. When you open [UniqueItems.txt](/kb/file-guides/uniqueitems-txt) you will notice that all Rainbow Facets have same index and same code. So you might wonder how to select let's say lightning levelup or cold death Rainbow Facet?

There are 2 ways to achieve this.

Option 1:  
Rename Rainbow Facets in UniqueItems.txt so that each of them would have different name. For example "Rainbow Facet Lightning Death", "Rainbow Facet Cold Death" and so on. That would allow you to use "Rainbow Facet Cold Death" for input 1 field. With that approach however you will also need to add translations for "Rainbow Facet Lightning Death", "Rainbow Facet Cold Death" and so on into patchstring.tbl or else game doesn't know what text to display.

Option 2:  
If you don't want to edit index column values in [UniqueItems.txt](/kb/file-guides/uniqueitems-txt) or edit patchstring.tbl there is also a alternative solution. [CubeMain.txt](/kb/file-guides/cubemain-txt) allows you to select item by stats using op, param and value columns. One important thing to keep in mind is that those fields will specify when to skip recipe. This means that when you want to use that recipe for your item, you need to make it evaluate to false. For example, to select fire Rainbow Facet you need to use op=15, param=329, value=1 and input 1="jew,uni". This basically says "Skip recipe if item stat 329 has value less than 1". Since for fire Rainbow Facet this value is always greater than 1 this recipe will be skipped for everything except fire facet.

Now you may wonder what is 329 and how to find out that number for other stats?  
When you look at Rainbow Facet in UniqueItems.txt you will notice that there is field prop3 that has value extra-fire. When you look up extra-fire row from code column in [Properties.txt](/kb/file-guides/properties-txt-file-guide) file you will see that stat1 column has value passive\_fire\_mastery. Next open [ItemStatCost.txt](/kb/file-guides/itemstatcost-txt) and find row whose Stat column has value passive\_fire\_mastery. Now the ID field of that row is the id that you need to use in [CubeMain.txt](/kb/file-guides/cubemain-txt) param field.

At this point you may notice that this option will only let you choose whether Rainbow Facet is lightning, cold, fire or poison but not whether it is levelup or death. Solution for that is to find stat that is unique. You will notice death-skill or levelup-skill are unique for Rainbow Facets. The problem however is that those stats are not visible for param field in [CubeMain.txt](/kb/file-guides/cubemain-txt) so you need something else. After trying some different codes from [Properties.txt](/kb/file-guides/properties-txt-file-guide) I found that there is a property called time that is [unused](https://d2mods.info/forum/viewtopic.php?t=54915). Since this property does nothing we can assign that it to our Rainbow Facets to make them all have unique number. So add property time to Rainbow Facets in UniqueItems.txt and use ID of item\_timeduration (82) from ItemStatCost.txt in param field in CubeMain.txt.

Your UniqueItems.txt should look like this:  
![](https://i.imgur.com/BnYPlEi.png)

And your CubeMain.txt should look like this (in this specific example each Rainbow Facet + scroll of identify will turn into different rune):  
![](https://i.imgur.com/ZMEiuKJ.png)

Notice that adding new property to UniqueItems.txt will not modify the items that you have already found previously. To catch them you can add generic catch-all row at the end like I have or use option 1.
