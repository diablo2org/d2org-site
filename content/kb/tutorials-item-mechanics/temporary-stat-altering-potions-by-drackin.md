---
title: Temporary Stat-Altering Potions (by Drackin)
summary: >-
  This tutorial will teach you how to make potions that alter your characters
  stats like resistance, maximum health, and damage.
keepId: 33
author: Phrozen Heart
posted: '2004-08-19'
views: 10318
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=33'
---
(you must know how to edit table files)

First, open misc.txt. Find the thawing potion(row #10) an copy it. Paste it at the bottom of the file. Re-name it to Fire resist potion (or whatever you like, but the first part of this tutorial is for a fire resistance potion.) Change the code to frp and namestr to frp. Then scroll over until you hit the 'State' column, and change that to 'potion\_fire\_res' Remove the entries for cstate1 and cstate2, in the Len column, you must specify a length in frames that the effect will last, or the potion will not work. for Stat1 change it to 'fireresist' the number beside it controls how much to add to your fire resistance. in Stat2, is another effect the potion can have, change it to 'maxfireresist'. Then in the spelldesc column, put 1, and in spelldescstr, input the string you'll use in the table file. (i put PotionFireRes) and close misc.txt

Now open states.txt, Create a new column, and in th state field, put 'potion\_fire\_res' and change the ID to the next number in the list. Scroll over to 'rfblue' and enter 1, this will make it so when the potion is used, and for the duration of it, the resist fire field in your character stat panel in-game will be blue. Now, scroll over to the Stat column, and input 'fireresist'. and finally in the eol column, input 0.  
Now you have a potion that will add however much fire resistance you want, and increase your maximum fire resistance.

But we still have to add our entries into patchstring.tbl  
So using whatever table editor you like (for this I'm using darkstorms) open patchstring.tbl and add the entry 'frp' and for the text enter 'Fire Resistance Potion'. Create another new entry called 'PotionFireRes' and enter in this order, from top to bottom and in new rows: '+X% to Maximum Fire Resistance', '+Y% to Fire Resistance' (where X is the number you entered for maximum fire resistance, and Y is the number you entered for the addition to fireresistance)

Now the item will work in the game, but it has no visual flare, or representation, but that is no good. this part is Entierly optional, but will make the effect look better.  
Back in states.txt scroll over to 'overlay1' and enter 'aura\_resistfire', now scroll over to 'Castoverlay' and enter 'cast\_fire\_2'. now finally scroll over to 'onsound' and enter 'paladin\_aura\_resistfire'.

Now when you drink the potion, you'll get a Very nice effect.

But a warning, if you drink 2 of the exact same potions, it will stop the effect (eg/ drink the fire res potion, then drink another and the it will stop the effect)

Now, since you cloned the thawing potion, these will still be sold by any vendor that will sell thawing potions, and for 25 gold only. So you will have to change that on your own.

You can create ANY type of potion you want using modifiers from itemstatcosts.txt.

ALSO, it is good to have a visual for any stat you are changing, that is in no way visible (eg/ dmg resistance, magic find, gold find, +% experience)

## Note about pskill values:

pSpell are using a function for different effects.

You can for example make a potion that uses pSpell 7. When you rightclick you will open up Horadic Cube. Even if you don't own that one yet.

pSpell 9 = Used by stamina potion/Herbs  
pSpell 8 = Used by Elixir potion that Adds Experience (All potions that needed to add stats to a player should use pSpell 8)  
pSpell 7 = Used by Horadic Cube  
pSpell 6 = Used by Thawing Potion  
pSpell 5 = Used by Rejuvenation potion/Full rejuvenate potion  
pSpell 4 = Not used  
pSpell 3 = Used by Health/Mana potions  
pSpell 2 = Used by Book of Townportal/Townportal scroll  
pSpell 1 = Used by Book of Identify/Scroll of Identify
