---
title: Reasonable Rune Drops
summary: >-
  This tutorial assumes you have read the other FAQs that explain how to extract
  and edit excel .txt data files and know how to repack them into an MPQ file.
keepId: 186
author: Phrozen Heart
credit: by ThresholdRPG
posted: '2003-12-02'
views: 7944
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=186'
---
**Introduction:**

This tutorial assumes you have read the other FAQs that explain how to extract and edit excel .txt data files and know how to repack them into an MPQ file.

Long before the release of Lord of Destruction, Blizzard was ever so proud of the extreme rarity of some of their runes. In multiple fan chats, they bragged about how only 1 in 600,000 people would ever get the rarest rune (Zod Rune). Somewhere they lost sight of the fact that those numbers mean 599,999 people are going to be unhappy. Fortunately, modders to the rescue!

So you want to improve the chances of all runes dropping> Tired of finding endless El Runes? Good news, it is actually very easy to do.

The file you will be working with is: **TreasureClassEx.txt**

The rows you will be mostly working with are **rows 27-43** (Rune 1 through Rune 17).

If you do a search through TreasureClassEx.txt, you will see that various monster types have Rune # as one of their possible drops. For example, Runes 1 is listed in row 212 (Act 2 Good). So whenever an 'Act 2 Good' (which means normal mode Act 2) drop is called for, a Runes 1 drop is possible. In fact, a Runes 2 drop is possible there as well. A little more poking around should show that a Runes 17 (the highest) drop is only possible in Act 5 (H) Good. In other words, your only chance to get the Zod Rune (the only rune in the Runes 17 section) is in Act V Hell difficulty.

You might be thinking 'Well, if I can get a Zod Rune in Act V hell, that isn't so bad.' Well, it isn't that simple unfortunately.

---

  
**Examination:**

Let us take a more detailed look at the actual **Runes 1-17** rows.

The headings are: **Picks**, **Unique**, **Set**, **Rare**, **NoDrop**, and **Item1-10**, **Prob1-10**. The Picks, Unique, Set, Rare, and NoDrop columns appear to be irrelevant to the Rune columns. What matters are the **Item** and **Prob** columns.

**Runes 1** has: **Item1 = r01**, **Prob1 = 3**, **Item2 = r02**, **Prob2 = 2**

r01 is the El Rune and r02 is the Eld Rune. Add the two Prob numbers together for the total number of 'chances'. 3+2=5. Thus, whenever a Runes 1 drop is called for, you have a 3 in 5 chance of an El Rune, and a 2 in 5 chance of the Eld Rune. Runes 1 is simple. It gets more interesting in the later columns.

**Runes 2** has: **Item1 = r03**, **Prob1 = 3**, **Item2 = r04**, **Prob2 = 2**, **Item3 = Runes 1**, **Prob3 = 9**.

The total 'chances' now adds up to 14. Thus you have a 3 in 14 chance of getting a Tir Rune (r03), a 2 in 14 chance of getting a Nef Rune (r04), and a 9 in 14 chance of getting downgraded to Runes 1. In other words, whenever you earned a Runes 2 drop, you are most likely going to get a Runes 1 drop instead.

If you look through the rest of the columns, you can see that the odds of getting downgraded to the next lower class of Rune increases rapidly. Keep in mind that when the actual rune drop is being calculated, you can get downgraded multiple times. If you earn a Runes 16 drop, your worst case scenario is not a Runes 15 drop. If you look at the odds, you are most likely going to get downgraded NUMEROUS times whenever you get a rune drop. Now, to really see how absurd these downgrade chances get, let's take a look at Runes 17:

**Runes 17** has: **Item1 = r33**, **Prob1 = 1**, **Item2 = Runes 16**, **Prob2 = 184320 !!!!!!!!!!!**

So even if you are in Act V Hell difficulty and get a Runes 17 drop, you only have a 1 in 184321 chance (that is a **.0000054%** chance!!!!!). In other words: **Dream on!** =)

As you can see, your chances of getting anything in the Runes 10 or above section is very, very slim.

---

  
**Remedy:**

I can already hear you: 'That is insane! How can I fix this?!?!?!'

Not to fear. As I said in the introduction, it is actually pretty easy.

Whenever I am changing drops, I try to be careful and change as little as possible. I do not want the game to get unbalanced. All I want is for good stuff to have a reasonable chance of dropping sometime in my lifespan. You could do things like lower the downgrade chanes and add Runes10-17 into more treasure classes, or you could manually add things like r33 to other classes, but in my opinion those are bad ideas. There is nothing wrong with some runes only being obtainable in Hell difficulty, or even Act V Hell difficulty. My problem with the drops is that even if you make it there, you are most likely never going to get one anyway. Everyone who buys the game should have a \*CHANCE\* at getting everything in the game. You should not find a Zod rune off the corpse of a Quill Rat, but if you play the game for hundreds of hours, you deserve to find one!

The safest thing to do in my opinion is lower those downgrade values. I am talking about the ones in the column Prob3. I think it is reasonable for that number to never be any higher than 50. That means you still have to find (on average) 50 runes in Act V/Hell difficulty before you find a single Zod rune. Thus, they aren't flying off the shelves, but you can get one if you play enough. If you change the Prob3 column to 50 everywhere it is currently higher than 50, you will start to see greater variety of rune drops from Runes 6 and beyond. If you want an even greater variety of runes, you might want to change things a little more drastically. An example would be:

Stock/Base downgrade chances:

Runes    2 downgrade chance: **9**  
Runes    3 downgrade chance: **20**  
Runes    4 downgrade chance: **30**  
Runes    5 downgrade chance: **50**  
Runes    6 downgrade chance: **90**  
Runes    7 downgrade chance: **180**  
Runes    8 downgrade chance: **360**  
Runes    9 downgrade chance: **720**  
Runes 10 downgrade chance: **1440**  
Runes 11 downgrade chance: **2880**  
Runes 12 downgrade chance: **5760**  
Runes 13 downgrade chance: **11520**  
Runes 14 downgrade chance: **23040**  
Runes 15 downgrade chance: **46080**  
Runes 16 downgrade chance: **92160**  
Runes 17 downgrade chance: **184320**

New downgrade chances:

Runes    2 downgrade chance: **5**  
Runes    3 downgrade chance: **10**  
Runes    4 downgrade chance: **15**  
Runes    5 downgrade chance: **20**  
Runes    6 downgrade chance: **25**  
Runes    7 downgrade chance: **30**  
Runes    8 downgrade chance: **35**  
Runes    9 downgrade chance: **40**  
Runes 10 downgrade chance: **45**  
Runes 11 downgrade chance: **50**  
Runes 12 downgrade chance: **50**  
Runes 13 downgrade chance: **50**  
Runes 14 downgrade chance: **50**  
Runes 15 downgrade chance: **50**  
Runes 16 downgrade chance: **50**  
Runes 17 downgrade chance: **50**

A brief look at the rune powers shows that runes are really not that powerful. Even Rune Words, which are nice, require that you have a generally non-magical item that has the right amount of sockets for the rune word. It is quite difficult to create a runic item that can even begin to rival a good rare, an exceptional/elite unique, or the items from a good set. Thus, making the more powerful runes a little more common at least makes runes and runic items something you might reasonably be able to create and use before you find rares that make them obsolete.

Everyone remembers how useless sets were in CD2. By the time you collected all the pieces, you had rares that were 10 times better. The same goes for runes right now. By the time you collect the runes for a rune word, you have a rare that is even better. Of course, the lack of enabled rune words is another problem, but that is a subject for a separate tutorial! =)

---

  
**Conclusions:**

To summarize, the only column you need to change to improve the variety of rune drops is the Prob3 column (column M). The only exception is that for Runes 17 you need to change Prob2 (column K). Those are the columns that determine the (generally overwhelming) chance that the Rune drop will be downgraded to the next lower Rune drop. By lowering that number, you reduce the chances of a given Rune drop being downgraded to the next lowest one (and so on, and so on, ad nauseum until you get an El Rune in Act V hell =) ).

The ability for a normal human being to find all the runes within the span of a common lifetime is a good thing in my opinion.
