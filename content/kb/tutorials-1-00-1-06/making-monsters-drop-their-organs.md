---
title: Making monsters drop their organs
summary: >-
  First off, while this is a fairly simple process, it does require several
  steps. Three files are involved in this process: MonItemPercent.txt, misc.txt,
  and monstats.txt
keepId: 413
author: Nefarius
credit: by JBouley
posted: '2006-08-19'
views: 6838
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=413'
---
First off, while this is a fairly simple process, it does require several steps. Three files are involved in this process: MonItemPercent.txt, misc.txt, and monstats.txt

MonItemPercent.txt simply controls the drop rate for organs. Columns B & C are what you'll be looking for. You can leave the drop rate 'as-is,' or make it higher. (Warning: When I dropped it lower than 15, organs never seemed to drop at all). Notice the respective titles of these columns are 'heart…' and 'body part…' You'll be seeing this theme again when you get to the monstats.txt file near the end of this process.

The body parts themselves are in the misc.txt file. First, you'll need to make them spawnable. Go to column E and put a 1 in there (this will also make it possible to have organs and other parts be sold by shopkeepers…more on that in a moment). I'm not sure if you need to put anything in column D ('rarity'), but I have usually put in 1 or 2 just to be on the safe side. I don't think it matters though unless you are trying to include organs in one or more of the treasure classes dropped by monsters. (You DON'T need to worry about the TreasureClass.txt file, by the way, because organ-dropping bypasses the treasure drop function).

Next, you'll need to make sure the organ can be right-clicked to turn into something else once you pick it up. Otherwise, what's the purpose of having the organ to begin with? Many of the body parts are already set to turn into something. You can change that to be a different item, or you can make items that don't currently transmogrify do so. To do this, make sure there is a 1 in column W (transmogrify).

In column X (Tmog type) you put the three-letter (in some cases, like exceptional weapons, a three-letter number/letter combo) code for the item you want the organ to turn into. I made the heart turn into a light healing potion in my mod, for example (by entering hp2 in the X column), and the spleen turns into an antidote potion (by putting yps in the X column). Play with your own combos and desires.

Columns Y & Z (Tmog min and Tmog max) should both be 1 unless the item is stackable (like arrows, bolts, exploding potions, etc.). If the item is stackable, column Y is the least number that will appear in the stack that result, and column Z is the most that will appear in the stack. NOTE: I have tried to make this function create multiple non-stacking items (like gems), but it has not yet worked for me.

You can also go to the individual shopkeepers and make them sell specific organs if you like. Each of them has a 'min' and 'max' column (for Charsi, it's columns AW and AX). The min is the minimum number of those items that will appear on the shopkeeper's 'misc' screen in the game (along with things like potions and arrows). Max, obviously, is the most that will appear. Don't go too crazy here: Remember, there are only so many squares on the shopkeeper's screen. I suspect the game will crash if more items generate than there is room to hold them (or maybe I'm wrong).

If you are having folks sell some of these organs, make sure the price in column J is appropriate. For example, I have hearts sell for just a little less than the potion they turn into, but I also have the min/max for the shopkeeper set at 0 and 1, respectively, so that the organ is not always there. I see organs as sort of a 'smart shopper' option for my characters when they can buy them.

A few quick warnings and tips:

1—Some organs have messed-up graphics (controlled by Column T, which is 'invfile'). For example, the soul is set to use the same graphic as the spleen. And the scalp shows up as a scepter, which is really messed-up because the game tries to stuff it into a 1X1 square area. So be aware and give the organs new graphics if you want.

2—The tail can be dropped, but I have never been able to pick it up from the ground when it does. So I simply have Gheed sell it (and I set it to transmute into a belt, but made it cost much less than a belt…so that there's a use for it)

3—Not all items are 'organs.' You can have monsters drop the flag, or a jawbone, or the Black Tower key for that matter. I have the shamans drop those flag-staffs they carry, which in my mod transmutes into ID scrolls.

That's all I can think of for misc.txt. Now, on to the final Excel/text file: monstats.txt

In monstats.txt, you will concern yourself with two columns: HA (heart) and HB (body part) In HA, for example, you could put the code hrt and that monster would occasionally drop its heart when it dies. In HB, you could put fng and have a fang drop from time to time from those monsters. You have to do this on a monster-by-monster basis, and you could generate a lot of combinations.

It seems (though I haven't fully tested this), that it doesn't matter if you put something other than a heart in the HA column. I'm sure you could assign any organ or part to that column, and another organ in the HB column, and have the possibility of either one dropping.

Also, I suspect that you could put ANY item in those two columns, as long as it has one of the three-letter codes. So you could probably set the HA or HB column so that the monster will drop, say, a lance or a rejuv potion. Again, I haven't fully tested this, but it seems to be the case, and offers another way to generate 'treasure.'

There's one last thing to do: Edit the string.tbl file. Unless you want to see the annoying 'Not xlated call ken' message on your screen all the time with these organs, you need to enter the three-letter codes for these body parts into the string.tbl file and give them some kind of name (Hero's Heart, Spleen, Ruptured Eyeball, whatever). The name does not, I repeat does NOT have to match what is in misc.txt. But make sure the three-letter code DOES match what's in misc.txt.

Unless I've forgotten something, that's it.

\-Jeff
