---
title: Creating New Cube Recipes
summary: >-
  Cube recipes, since version 1.08, are editable and are actually quite easy to
  edit. This is a very powerful and very interesting text file to edit.
keepId: 177
author: Phrozen Heart
credit: by 54x
posted: '2003-12-02'
views: 13470
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=177'
---
Cube recipes, since version 1.08, are editable and are actually quite easy to edit. This is a very powerful and very interesting text file to edit.

However, there are some drawbacks. Some recipes may not work exactly as you intended no matter how well you code them- and recipes featuring new item classes will often not work.

I'm going to start off for the first part of this guide by walking you through the basic columns of cubemain.txt.

At the beginning of every row, in the first column (**description**), we have a brief description of the cube recipe. This is useful for you to have when you are making recipes that are part of a bigger system of recipes. (For example rune or gem upgrades)

The second column (**enabled**), when it says 1, tells the game to use this recipe. To quickly turn off a recipe, but have it ready for use later, put a 0 in this column.

The **min diff** (minimum difficulty) column is just that- having nothing in it means the recipe is always usable. Now, I'm not 100% sure about this, but it's either a 0 or a 1 that makes the recipe require you to play in Nightmare. Again, either a 1 or a 2 for the recipe to require you to be in Hell (difficulty).

The **Version** column tells Diablo II without Lord of Destruction whether to ignore a recipe because it is part of the expansion, or not. If this column is set to 1 or 100, then Classic Diablo II will NOT be able to read this recipe.

For all intents and purposes, the next four columns (**start day**, **stop day**, **weekday**, **class**) can be ignored. The first three are for Blizzard use, and I don't know how to work the **Class** column, or even if it does work.

The next column, **numitems**, is a very powerful one indeed- it tells the game how many items will need to be in the cube for the recipe to activate. If you put the exact same number as the number of required items you added, then the recipe will require that exact combination.  

**gzv,qty=3**

However, you can also set this deliberately higher or lower than the amount of required items you added. So, if you required a health, mana, stamina, and thawing potion for your recipe, but if you set this column to 2 or 3, you'd only need to use 2 or 3 of your required items. (I believe this is how it works)

If you set this column to 5, however, you'd need all four of the potions I just mentioned, and any other item of your choice in the game. This can be an excellent way to make people experiment- i.e. you could give them hints on a recipe, adding in a couple of extra items, and having this column deliberately high enough to make that combination a valid recipe.

Next you have the **input columns**, to add up to 7 different types of items required for your recipe. Notice I said _TYPES_ of items. That's right. We'll cover this after I get through all of the columns. These seven columns- **input1** to **input7**, accept three-letter item codes that are used in other text files.

Some examples of those codes are: **hp1**, a minor healing potion. **skp**, a skull cap. **xar**, an ornate plate, or **bbb**, Lam Esen's Tome.

The next column is the one that's the entire point of the file. The output column. Note that no matter whether you use the **,qty=x** parameter or not, you can only ever get the cube to give you one item back.

The next three columns, **lvl**, **plvl**, and **ilvl** are used when making magic, rare, or crafted items. **Ilvl (ilvl)** is most likely a preset level for the item. **Plvl** means that the game will use the player's level, until the player reaches the level you type in here. (I can't recall what **lvl** is :/ )

The next 25 columns come in 5 groups of 5, and are ALL to do with item mods. They are used in crafted items. The first column is the item mod's code, the next is the chance it will appear on an item. (100 = will always appear, 50= appears half of the time, 0= never appears) The next is the item mod's parameter column, then it's min column, then it's max.

The last column, called '**term**,' should always contain a zero. Maybe it's there to mark the end of the file. Maybe it lost it's meaning after the released the patch. No idea. Just give it a zero :)

With what you've learned so far, you should be easily able to make a greater potion of each type (**hp4** & **mp4**) upgrade into a rejuvenation potion.(**rvs**)

Okay, so now you know what each column does. Great. But you're missing three really key skills to help you along your way. One is the ability to use item mods (you'll need this for crafted items, and making new magical affixes to use with 'make this item have this magic affix' recipes)

(Right now it might be useful to link to something dealing with magic mods :) )

**_Using parameters in cube recipes_**

The second skill you will need is the ability to use parameters in your cube recipes. Parameters are little codes that have a comma before them, (like: **,qty=x**) and they give the game extra instructions on what type of item you will get from, or put into, the cube.

Let's have a brief look at one of the most simple, and most necessary parameters for this file:

**,qty=x**

Looks silly, doesn't it? What it tells the game is: 'Make sure that that have put **x** of the item before the comma into the cube.'

So, if I wanted to make a recipe that required seven skull caps and gave you a great helm, I wouldn't have to write skp in every input column. (and set numitems to 7, but you'll need to do that no matter what) I could instead write:

**skp,qty=7**

And this would tell the game to make sure there are seven skull caps in the cube. Unfortunately, this very useful parameter is the only one (that I know of) that _cannot_ work in the **output** column. Any usage of it will just be ignored- the cube only outputs one item per recipe.

There are three other parameters you will immediately understand the use for, I hope:

**,mag  
,rar  
,set** (for this and **,uni** you can, instead, use the name of an individual unique item)  
**,uni**

Which will either make the output item magical/rare/set/unique, or require an input item to be of that type.

**,sock=x**

Note that x will always be a whole number, just like for the **,qty=x** parameter. Sockets cannot exceed 7, and if the item you use the recipe on does not support the appropriate amount of sockets, it will add sockets based on your level.

Note that the amount of sockets you can add by using the cube is loosely based on your level/experience. There also appear to be a few bugs with this parameter.

**,eth  
,noe**

The first one, **,eth** - should force the item to be ethereal. The second one, (which is often more important for use in the output column) will force the item that leaves the cube to not be ethereal. Can be very useful.

**,upg**

Means the exceptional or elite version of an item will also work.

**,pref=x  
,suf=x** (one f or two?)

These will force the **_output_** item to use a magical (or rare, if possible) prefix/suffix from the magic prefixes/suffixes file. The **x** here is related closely to line number, but I am not sure how much it is off the actually line number. I believe it will not count blank lines.

**any**

Oh yeah. This one is good. You can use it very trickily by combining parameters- so you can have **any,mag,qty=3** (any three magical items) Like **,qty=x** - it can only be used in the **input** columns.

**useitem**

Only work in the **_output_** column. This makes the item in input 1 continue over as the cube's **output**. There's no point in using this one unless you use other parameters with it. So, for example,  you could theoretically stop an item from being ethereal by making **input1** look like this:

**any,eth**

and **output** look like this:

**useitem,noe**

With this knowledge, you only have one thing remaining...

**_Horadric Cube Grammar_**

You've got enough knowledge to do almost anything in the cube. As long as it requires _only one line_.  
Groups of more than one recipe can often fail in the cube, because you don't place them properly, in relation to each other.

This is something I am loosely going to call **'cube grammar.'**

It's very simple. If you have two similar recipes in the cube file, you should have the **more specific one** placed **_above_** the **less specific one**.

So, if you had one recipe which required:  
**skp,qty=6 | hp2,qty=4**

And another that required:  
**skp,qty=6 | hp2,qty=5**

The one with **,qty=5** would be more specific and should be placed above the other one. Why is this? Well, the Horadric cube checks the recipes in order from top to bottom, and if it sees the **,qty=4** recipe first, even if you have five light hp potions in the cube, it'll carry out the **,qty=4** recipe, because it applies to what you have in the cube.

Let's give you another example, just to be sure we've got it right! :)  
**aar,mag** **| tsc,qty=7**

**

aar | tsc,qty=7

**

The top recipe has an extra parameter, so it should stay in it's place above the lower recipe.

Beginning to see how it works? Good. If one recipe has more total items than another, and their items are very similar, the recipe with more items should be above the one with less.

If both recipes have equal amounts of items, then it is the one that has more parameters that should be placed above.

If they have equal items and no parameters, or the same amount of parameters, it doesn't matter which one is placed above.

Those three simple rules should work very well to avoid problems with **'cube grammar.'**
