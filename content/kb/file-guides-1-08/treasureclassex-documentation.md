---
title: TreasureClassEx Documentation
summary: >-
  I thought I should take a look at how items are drop in the game. It has
  changed quite a lot in 1.08 over how it used to work. For all practical
  matters, it works the same in the x-pack and the…
keepId: 410
author: Nefarius
credit: by Jarulf
posted: '2006-08-26'
views: 11432
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=410'
---
I thought I should take a look at how items are drop in the game. It has changed quite a lot in 1.08 over how it used to work. For all practical matters, it works the same in the x-pack and the standard game. Of course, in the standard game, non expansion items can’t drop and so on and the game ignore them for the purpose of picking items and such, but other than such things, this post (and future posts on the subject) will apply equally to both the standard and expansion game. This post will address not only casual game play info but also information that are perhaps mostly directed at mod makers and such. Thus it can at time be quite detailed and talk about stuff not really of interest for normal game players. If so, just ignore such things.

Also note that this post may have non accurate and even wrong information. To the best of my knowledge, this is how the game currently work. There are changes being done as we speak and already do the servers have slightly modified code for item drops. I will try to cover those as I go over them. In addition the actual data files may have their numbers changed.

Before we go into details about item drops we need to look at a few other things. Even before we look at how the new Treasure Class system work, lets examine the new much more powerful Item type system. This is governed by the ItemTypes.txt file. This table has actually existed before, although it was then an internal table, not a spread sheet table. It has undergone a few modifications though and the whole game has been changed to handle the item type system flexibly and with ease. This means that it is very easy for people doing mods to add new types for example and the game will handle them very well, for example for item drop purposes.

So, lets take a look at this file and identify a few key issues as well as how it is in general built. Each base item in the game is of a specific type. All base items are found in the 3 files named weapons.txt, armor.txt and misc.txt and each has a column called 'Type' which tells of what type the item is. It used to be a number telling what entry in the ItemTypes.txt hold its type, but is now a type abbreviation. The ItemTypes.txt has a column named 'code' which tells the abbreviation for that item type. For each item type the ItemTypes.txt then list several properties of which I will explain some key ones here.

Two important entries are the Equiv1 and Equiv2. Not only does the game has several base types, it also has sub types (or really larger types) which contains several other types. The two Equiv fields can list two other types, of which it is part of. It is easier with an example, so lets make one. Lets take a normal skull cap. It has as its type 'helm'. 'helm' is entry 37 in the ItemTypes.txt table (it has 'helm' in its code section). In the Equiv1 column it shows 'armo'. Meaning the type Helm is part of the type Armo (which is entry 50 with the description 'Any Armor'. Meaning that any helm is not only of the type 'Helm' it is also part of the type 'Any Armor'.

Lets take another example, a Matriarchal Bow. It has the type 'abow' which is entry 86, Amazon Bow. This has two Equiv listed, and thus an item of this type is also of both those other types. The last one is the 'amaz' type, entry 61, Amazon Item. Which is in turn part of the 'clas' type, entry 60, Class specific items. Going back to the 'abow' type it is also part of the 'bow' type, entry 27, Bows, which is of type 'miss', entry 47, Missile weapons which is part of type 'weap', weapons, entry 45. So a Matriarchal Bow is part of ALL those types. If the game for example check if an item is of any of those types and the item is such a bow it will say 'sure, it is of those types'.

I won’t go through telling when such things are checked, but I guess for example that on an item that is of 'amaz', Amazon Item, it will show 'Amazons only' on the item and so on. At times the game need to know if an item is of a missile type, then it will check for that type and not only bows but if you check you will notice that spears, throwing axes and such also all are among other of the type 'Missile weapon'. Melee weapons are not of course, but both melee and missile weapons are of the type Weapon which is for all weapons in the game and so on. This is very flexible. As can be seen in for example the files listing affixes for items, it has columns telling on what type of items they can appear on (and not appear too). Thus it is easy to tell a prefix should appear on any weapon 'weap' type, or just Missile weapons 'miss' or perhaps only bows or even Amazon bows and so on.

Next, lets looked at 3 columns named Magic, Rare and Normal. This tell if an item of that type (and thus sub types that lists this type, too) should be at least magic (that is can’t appear as superior, normal and such) or rare (none listed but I suspect it means it can be only rare) or normal, that is can’t be magical, rare, set and such (like potions, gems keys and so on). Here is the reason why all Orbs are magical , it has listed 1. This is probably an error since this make no orbs being normal and superior, meaning you can’t imbue them (unless you craft one first since crafted items seems to be able to be imbued).

There are also columns for max sockets. This is the absolute max amount of sockets an item of that type can have (even if the specific item in say weapons.txt says it can have more). There are three entries, for items of a qlvl 1 to 24, of qlvl 25-39 and qlvl 40 and up.

All the above is not really THAT important for item generation, but it is nice to know and I thought I might go through it while I was looking at the ItemTypes.txt. The reason I look at this file at all is due to the 'Treasure Class' column. There is a new treasure class file called TreassureClassEx.txt. It is used even for the non expansion game, don’t be fooled by the name. It hold TONS of treasure classes, at least compared to before. But it does not hold all treasure classes, there are many more. If the item type as a 1 in the column, the game will generate no less than 30 treasure classes for that item type. They will be called by the name in the code column and then have numbers 3, 6, 9 and so on up to 90. The Any Armor type 'armo' has such a 1 in the column and thus the game generate treasure classes named armo3, armo6, armor9 and so on all the way up to armo90. In each such treasure class it will put all items that is of that type (that basically is any armor, helm, shield, boot, glove and belt, and perhaps some other item that would end up of that type as explained above) that also has a qlvl (quality level, shown simply in the column named 'level' in the three files for items I mentioned above) that is of that level span. Thus armo3 holds all armor of qlvl 1-3, armo6 those of level 4-6 and so on. You will note that in many cases in the TreassureClassEx.txt file, you will eventually find references to those treasure classes, despite those not existing in any file. They are generated at run time. Note there that the game no longer care if an item is normal, exceptional or elite, it will add any item as long as it is of the correct type. Note that exceptional and elite items has much higher qlvl than their similar normal (or exceptional for elite) item. So, while a skull cap end up in armo6 (having a qlvl of 5), the exceptional version, War Hat will end up in armo36 (having a qlvl of 34) and the elite version will end up in armo63 due to being of qlvl 63. As there are 5 such types, there are actually 150 treasure classes not listed in TreassureClassEx.txt, but that still exists.

As we shall see later in the TreasureClassEx.txt, each entry also has a probability. For those treasure classes generated off the item type table, the probability value is the value in the 'rarity' column (badly named thus). As can be seen, all items typically has a probability of 3 except class specific items which has a probability of 1. Again, as we shall see later, this makes non class specific items each having 3 times the probability to drop as class specific items (compared item by item, over all there are many more non class specific items meaning not even one third will be class specific.

We are now ready to move on to the TreassureClassEx.txt spread sheet file and have a look at it. It may initially look like monster, complicated and making no sense. In reality it is quite simple and uses the same type of recursive look up as the item type table did. Each Treasure Class is listed on its own line and holds a bunch of information. I will again, go through them, but this time we will look at all entries (there aren’t that many).

First is the name of the treasure class. This is used as the look up name. As can be seen in for example the monster file, monstats.txt, it is this name that is listed. In addition, as we shall see, a treasure class can refer to another treasure class, and again, it will use this name.

Next is a column named picks, this basically tells how many items should be dropped if the game is to drop from this treasure class. Lets for the moment ignore the fact that there appear negative numbers here. For now, it is enough knowing that even a negative number tells how many items are to be dropped, they are just picked in a less random fashion.

Next we have 4 columns named unique, set, rare and magic. These are used to modify the normal chance the game has to make an item into one of those qualities. Basically the game uses the same method as before, that is it has an item ratio file which lists some numbers that are used to calculate the base chance for an item to be for example unique. If these columns are entry, that is all, otherwise these numbers are used to modify (lower) that base chance. The amount lowered is shown as fractions of 1024. Thus a value of 1024 will make any item of that Treasure Class ALWAYS be of that quality (as before, it starts off with unique, then set, rare and so on. It does however no longer make a special check for Magic Find first as it used to.

Note that this does not mean that if it says 512, in the unique column that any item in that Treasure Class (TC from here on) has a 50% chance of being unique, it means it has double the normal chance.

Next comes a column called NoDrop. This is the chance for the item dropped not being anything at all, that is, that there is nothing dropping at all. Exactly how large this is, depends on other entries as I will soon explain.

Then comes 10 entries each with a probability value. These are the possible choices (in addition to a 'nothing') that the treasure class has for picking something to drop. Now, these entries does not only have to be specific items as it used to be. In many cases the entry refers to another treasure class. In addition, although not done, but the game handle it, it could directly list specific unique and set items (nice for mod makers). For this, the name of those items should be entered (note that this is NOT the real name they appear under in the game, but the names they have in they corresponding file. Mod makers should know what I mean, for the rest of you it really doesn’t matter).

In addition to the this, each entry can take on a number of additional modifiers, all separated by a ','. The only modifier used is the mul= one, which is used for gold to give larger amounts than normal. Basically the game calculate the normal random amount (not the same as before but a bit different), then multiply by the mul value and divide by 256. Thus a value of say 1024 means the drop will be 4 times as high as normal. This mul modifier is typically seen in TCs of champions and unique monsters.

There are a bunch of unlisted modifiers. They currently do NOT work but will as far as I know, be functional with the 1.09 patch. They are not used by the game really, so are sort of bonuses for mod makers I would say (or could possibly be used in the future should Blizzard want), they are:

cu, cs, cr, cm, ce and cg

Each is followed by a '=' and a number. The first 4 ones are for unique, set, rare and magical. Basically they work like the 4 columns I explained before (as fractions of 1024 to be used to modify the normal chance for quality) but ONLY apply to that specific entry of the TC. If there is both a value given for the TC as a whole and for a specific entry, the game will use the largest of those two. This also applies if a sub TC has values for it. Currently this does not apply but as Blizzard most likely will be tweaking these values to improve item drops since many complains now, it will most likely happen. Thus, for the finally picked item, the game uses the largest of each number found while traversing the TCs.

The ce gives a similar chance for the item to be ethereal and cg is for being socketed. That is they increase the normal base chance for those things.

So, how does the game pick one of the entries in a TC? Well, each entry has a probability of being picked equal to:

prob/sum\_prob

For sum\_prob, add up all the probs of a TC (including the NoDrop).

Lets make another example. Lets look at the TC called 'Act 1 Wraith A'. It has:

NoDrop: 75 Act 1 Good: 4 Act 1 Magic A: 25

Thus there is a 75/104 (about 72%) chance for NoDrop at all from a monster using this TC. A 25/104 (about 24%) for a drop from 'Act 1 Magic A' which is another TC. And a 4/104 (about 4%) for a drop from 'Act 1 Good' which also is another Treasure class. Should the game pick one of the two other TC, it will basically repeat the above for that TC until it gets an entry which is an actual item (listed by its 3 letter code). Don’t forget about the extra treasure classes created from the Item Type table I mentioned above. Now it also makes more sense, the probability values I gave as 3 for most non class specific items and 1 for class specific ones, no?

Well, that is really al there is to it. You know how the game pick an item. As exceptional and elite items are part of the treasure classes as I explained above. There is no additional check to turn an item into exceptional or elite (this only happens for gambles, shops and such that does not use TCs). As can be seen, the same actually apply to chest drops, although there are some special cases there that makes them work a bit differently. I will not go through these, in this post, but the general idea is the same.

In addition, the Barbarian skill Find Item works the exact same way. It uses the TC a normal monster would have (even if it is a body of a boss or champion). In addition it ignores the NoDrop part (since the chance for no item is covered by the skill itself. The game does not use the values in the skills.txt for quality determination of that skill so it should be the same as for a normal drop, meaning you can get uniques, rares and so on from Find Item now.

I am sure some of you are wondering about a few issues and feel I have not covered it all. True, that is why I will go through such things now

First off, what happens if there are many people in the game? Well, for that, the game modifies the NoDrop value by lowering it (thus making a NoDrop pick less probable and thus actually dropping something more probable). How does it modify the value? Well, in the following way (note that the game uses floating-point calcs for this so don’t truncate or round any of this).

1\. Calculate the fraction of NoDrop, that is, NoDrop/Sum\_Prob

2\. Calculate 'number of people'. Here each character in the party (and in same area) of the killer count as 1 and those not in the party (but in the game) as a half. This value IS truncated to an integer.

3\. Raise the value calculated in step 1 to the power of the value from step 2. Assume, from the example above, we had 75/104=0.7212. Assume there are 2 people in the party and same area, and 3 other people, so the value from step 2 is 2+1.5=3 (truncate). So we calculate 0.712^3 = 0.375.

4\. Adjust the NoDrop value so that it is a value that makes it the fraction calculated in step 3. That is multiply the Sum\_prob minus the old NoDrop value (plus the value to be calculated) with the value from step 3. In our example it would be 29\*0.375/(1-0.375) = 17. This is the new No Drop value.

Next, how does Magic Find (MF) works? Well, first, lets recap how the base chance for item quality (that is unique, rare and such) works. For this, we uses the itemratio.txt file. We will always use the version 1 line. I am not sure if it uses the uber/class specific lines though, could be, but have not checked. It then calculate the base chance as follow:

Chance: Value - (mlvl-qlvl)/divisor

The value and divisor values are found in the itemratio.txt file.

This is the base chance. That is, there is a 1 in Chance probability of the game picking that quality. As before it starts with unique, then rare, set, magic, superior and normal (and if nothing picked so far, it is a low quality item). Please remember what I said about minimum magic quality above when we looked at item types, if the picked quality was lower, it will be pushed up to magic (or downgraded to normal if applicable).

Now, the above calculated value is the Base chance, it is modified as:

(Chance\*128) - Chance\*128\*cx/1024

This is the modified chance (ModChance), where cx is the value for unique I mentioned above (unique column or cu value, whatever was the highest for checking for unique and so on). This is only done for unique, rare, set and magic check.

To calculate the final chance (FinalChance), we then do:

ModChance \* 100/(100 + MF\*X)

Where MF is your own Magic Find number (and if it is a minion making the kill, the sum of the minions MF and your own MF) and X is a modifier as follow:

Unique: 1/5 Rare: 1/3 Set: 1/3 Magic: 1

Thus the MF is only one fifth for unique items and one third for set and rare items. It has full effect for magic check. This step is again not performed for superior and normal check for obvious reasons.

Note that in 1.08 open (and 1.07) the above does NOT apply. There, the game simply subtracted the MF value. As the Chance is multiplied by 128 earlier (for extra precision), MF was basically useless. This has been fixed server side and will be added with the 1.09 patch. The lower effectiveness for unique, set and rare should also be implemented with the 1.09 patch. I have no idea if it is implemented on the servers though (or if it will be tweaked more).

Note by Staff: the actual factors ended up as Unique: (MF\*250)/(MF+250); Set Item: (MF\*500)/(MF+500); Rare: (MF\*600)/(MF+600).\[/color:ac72d699cd\]

The game then calculates Rnd(FinalChance) and if below 128, that is 0-127, it picks the quality being checked. The multiplication by 128 and checking versus 128 later is simply to add precision to the calcs of modifying the chance, most likely to avoid things like those huge jumps in chances when the initial chance were high (that is a low value).

All this means that MF now works not only for normal monster drops, it also works for Find Item (yeah, we will probably see some decked out Item Finding Barbs running around doing Find Item, equipped to the teeth with MF items). AND also for chest drops!

This should cover most of the things in regard to item drops. Note that each monster no longer has 4 TC for each difficulty but only 1 TC for each difficulty (on the other hand the TC are much more complex and sort of hold all the old ones plus more). In addition there is a special TC for each monster when it appears as a Champion and one for when it appears as a Boss, different for each difficulty. In addition, some monsters (as would be evident from the TreassureClassEx.txt file) has their own TC as well.

What about those special potions drops of Champions and Bosses that existed? And what about those negative pick numbers I mentioned before but never explained? Well, they are sort of related. Here is how. When a TC has a negative pick number, it will still pick that number of items from the TC, BUT, it will not pick them randomly, but 1 item from each entry. Or rather, first as many items from entry 1 as its probability number, then as many from entry 2 as its probability number, until it has reached the value in the pick column (non negative value of course). Typically the probability values of such a TC should end up as the same as the pick value. However, I think there were some goofs so that they don’t. That is the intention though. Take a unique monster and a typical TC they have, lets take 'Act 3 Unique B'. It has -3 picks and thus pick one item from the first entry 'Act 3 Uitem B' and 2 items from 'Act 3 Cpot B' (which in turn pick 2 from each for a total of 4 and so on, you do the counting. Basically 1 item and two potions. In nightmare and hell difficulty it will instead pick 2 items and 1 potion TC (despite the potion entry having a probability of 7). Note that a potion TC typically drop 2 items from within it. I suspect that Champions should have had a -3 pick value and not pick 2 as they have. Many of those Cpot TC (for Champions and Bosses) also should not have a -2 pick value but rather a 2 value to pick 2 random potions and not 1 rejuv and one other. Please forgive me if I counted wrong on number of potions dropped and such. I did not go through each in detail to see how it ends up. Don’t be surprised if, in the future, you just see a -1 for picks that is then done by picking from each entry the amount of items as the prob value says.

Well, that should cover all I had to say for this time. Hopefully it was of some help for those out there messing around with item drops.
