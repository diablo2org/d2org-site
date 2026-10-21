---
title: Itemratio.txt File Guide
summary: D. Class Specific - 1 if this line applies to class specific items
keepId: 229
author: Phrozen Heart
credit: by Isolde
posted: '2003-12-02'
views: 9010
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=229'
---
A. Function - description string, not used & not read in

B. Version - 0 for classic, 1 for expansion

C. Uber - 1 if this line applies to elite items

D. Class Specific - 1 if this line applies to class specific items

E/F Unique,UniqueDivisor - chance it'll be unique is 1 / (U - (drop level - item level)/UD) modified by Treasure Class and magic find

G. UniqueMin - column is unused but are read in anyway so you can use them as custom fields if you're going to be dll editing item ratio code

H/I Rare,RareDivisor - chance it'll be rare is 1 / (R - (drop level - item level)/RD) modified by Treasure Class and magic find

J. RareMin - column is unused but are read in anyway so you can use them as custom fields if you're going to be dll editing item ratio code

K/L Set,SetDivisor - chance it'll be set is 1 / (S - (drop level - item level)/SD) modified by Treasure Class and magic find

M. SetMin - column is unused but are read in anyway so you can use them as custom fields if you're going to be dll editing item ratio code

N/O. Magic,MagicDivisor - chance it'll be set is 1 / (M - (drop level - item level)/MD) modified by Treasure Class and magic find

P. MagicMin - column is unused but are read in anyway so you can use them as custom fields if you're going to be dll editing item ratio code

Q/R. HiQuality,HiQualityDivisor - chance it'll be high quality is 1 / (H - (drop level - item level)/HD) modified by Treasure Class and magic find

S/T. Normal,NormalDivisor - chance it'll be normal is 1 / (N - (drop level - item level)/ND) modified by Treasure Class and magic find
