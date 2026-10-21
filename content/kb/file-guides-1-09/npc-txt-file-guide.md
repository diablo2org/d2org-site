---
title: Npc.txt File Guide
summary: >-
  B. buy mult : Pecentage of the item's value the vendor will buy items from you
  (see note below for values)
keepId: 240
author: Phrozen Heart
credit: by Phrozen Heart & Mordini
posted: '2003-12-02'
views: 7120
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=240'
---
A. npc : Name of the NPC vendor

B. buy mult : Pecentage of the item's value the vendor will buy items from you (see note below for values)

C. sell mult : Pecentage of the item's value the vendor will sell items to you (see note below for values)

D. rep mult : Pecentage of the item's value the vendor will repair items for you (see note below for values)

E. questflag A : First quest flag that changes the percentages that vendors will pay for an item (eg. Flag 9 is at the end of A2Q1 after you kill Radement)

F. questbuymult A : Pecentage of the item's value the vendor will buy items from you when questflag A is set (see note below for values)

G. questsellmult A : Pecentage of the item's value the vendor will sell items to you when questflag A is set (see note below for values)

H. questreplmult A : Pecentage of the item's value the vendor will repair items for you when questflag A is set (see note below for values)

I. questflag B : Second quest flag that changes the percentages that vendors will pay for an item (eg. Flag 9 is at the end of A2Q1 after you kill Radement)

J. questbuymult B : Pecentage of the item's value the vendor will buy items from you when questflag B is set (see note below for values)

K. questsellmult B : Pecentage of the item's value the vendor will sell items to you when questflag B is set (see note below for values)

L. questreplmult B : Pecentage of the item's value the vendor will repair items for you when questflag B is set (see note below for values)

M. questflag C : Third quest flag that changes the percentages that vendors will pay for an item (eg. Flag 9 is at the end of A2Q1 after you kill Radement)

N. questbuymult C : Pecentage of the item's value the vendor will buy items from you when questflag C is set (see note below for values)

O. questsellmult C : Pecentage of the item's value the vendor will sell items to you when questflag C is set (see note below for values)

P. questreplmult C : Pecentage of the item's value the vendor will repair items for you when questflag C is set (see note below for values)

Q. max buy : Vendor will never pay more than this amount for any item in normal difficulty no matter what the multiplier in column A is

R. max buy (N) : Vendor will never pay more than this amount for any item in nightmare difficulty no matter what the multiplier in column A is

S. max buy (H) : Vendor will never pay more than this amount for any item in hell difficulty no matter what the multiplier in column A is

---

'One basic principal you need to understand to edit this file effectively is that the multiplier values in most of the columns work on the premise that 100% of an item's value in either the armor.txt, weapons.txt or misc.txt file is represented by the value 1024. For instance a value of 768 would mean just 75% of the item's value while 2048 would be 200% (twice it's regular value)' -Mordini

---

Example (v1.09):

At the start of Act 2, Fara will sell you a regular crossbow for 2345 gold right? Column C in npc.txt for Fara is 1024 which is 100% so we know that 2345 is 100% of the crossbow's value in weapons.txt. If you then changed you mind, you could sell it back to her for half it's actual value (512 in Column B = 50%). Once you kill Radament and visit Atma this sets off quest flag A (Column E in npc.txt) which makes all of the act 2 vendors suddenly get very generous. With your latest spoils, you decide that the crossbow was a good idea in the first place and buy it back from Fara which now only costs 2111 because Fara is now selling all her wares at 90% of their regular value (922 in Column G) once the flag is set.
