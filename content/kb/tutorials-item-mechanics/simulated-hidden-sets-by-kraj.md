---
title: Simulated Hidden Sets (by Kraj)
summary: >-
  This tutorial will show you how to create item modifiers that simulate a
  “hidden set”.
keepId: 251
author: Phrozen Heart
posted: '2004-08-19'
views: 9537
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=251'
---
Patch version: 1.10 final

Files needed:  
Itemstatcost.txt  
Properties.txt  
Uniqueitems.txt  
Patchstring.tbl (optional)

This tutorial will show you how to create item modifiers that simulate a “hidden set”. This method only simulates a set because the game will not recognize the item as a set item and the partial-set, green, and full-set bonuses do not truly exist on the item as those bonuses do for real set items.

What this will do is create a modifier that visibly receives a bonus when an item in the “set” is equipped but that gives no indication of what the other “set items” may be.

First, open Itemstatcost.txt. Create an otherwise-nonfunctional entry; we’ll call it “hidden\_set\_counter”. Give it an ID that is next in the list sequentially. Columns C through AM are irrelevant, give them entries similar to something else in the file or whatever you desire. Columns AN through AZ should be blank. Make sure the final column has a zero.

Next start another entry, giving it the next sequential ID number. This hidden set bonus will increase strength, so name it “strength\_per\_hiddensetcounter”. Columns C through Y are irrelevant; again give them similar values to another entry in the file. Set the ‘op’ column to 2 and the “op param” column to 3. This creates a base of 8, just like the stat/level modifiers. Set the ‘op base’ column to “hidden\_set\_counter” and the ‘op stat1’ column to “strength”. Columns AD through AM should be blank. Set column AN to any value you wish, other than zero I’d say. Set ‘descfunc’ and ‘descval’ to 1. Set the next two columns to “ModStr1a” (the string for + to strength modifier). The rest of the columns should be blank, except for a zero at the end.

Now open properties.txt and start an entry called “hidden-set”. Set ‘done’ to 1, although this may only be a comment field. Set ‘func1’ to 1 and ‘stat1’ to “hidden\_set\_counter”. Start another entry called “str/hidden-set”, set ‘func1’ to 17 and ‘stat1’ to “strength\_per\_hiddensetcounter”. Leave all other columns blank and make sure there are zeros in the last column.

Open uniqueitems.txt and create two new entries to test with. Give one item the “hidden-set” property with whatever min/max values you want. Give the other item the “str/hidden-set” property. Now you will have one item that gives a bonus to strength when the other item is equipped. It will show “0 to strength” until the other item is equipped, so to hide it, give the first item its own strength bonus. And there you have it. Hidden sets!

OPTIONAL:

An option in this system is to identify the set bonus through color. In this case, instead of using the existing string for strength in itemstatcost.txt, create a new string and give it the green set color. The drawback to this is the actual bonus number is still blue. Perhaps someone else knows how to change that.
