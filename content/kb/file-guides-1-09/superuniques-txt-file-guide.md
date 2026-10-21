---
title: Superuniques.txt File Guide
summary: >-
  A. Name : Name of unique monster (is also the string key value in string.tbl
  and the other string tables)
keepId: 248
author: Phrozen Heart
credit: by Phrozen Heart & Nefarius
posted: '2003-12-02'
views: 7617
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=248'
---
A. Name : Name of unique monster (is also the string key value in string.tbl and the other string tables)

B. Class : Generic monster type's populate ID from the monstats.txt file

C. Mod1 : First magical ability the unique has in addition to it's regular monster version (see below for values)

D. Mod2 : Second magical ability the unique has in addition to it's regular monster version (see below for values)

E. Mod3 : Third magical ability the unique has in addition to it's regular monster version (see below for values)

F. MinGrp : Minimum number of minions accompanying unique monster

G. MaxGrp : Maximum number of minions accompanying unique monster

H. EClass : Set this to 1 to use a expansion monster (ie. if eclass is 0 you use classid Spawning Id, if its 1 you use Expansion IDs).  
For example:  

ECLASS=1, Skeleton ID=-436

  

ECLASS=0, Skeleton ID=0

I. AutoPos : This defines if the monster spawns exactly were the map places him or in a random radius around that point

J. Stacks : Unknown

K. TC : Unique monster's treasureclass in normal diffulty from the treasureclass.txt/treasureclassex.txt file

L. TC(N) : Unique monster's treasureclass in nightmare diffulty from the treasureclass.txt/treasureclassex.txt file

M. TC(H) : Unique monster's treasureclass in hell diffulty from the treasureclass.txt/treasureclassex.txt file

---

**Magical Ability Values**

1-4. {unknown}  
5\. Extra Strong  
6\. Extra Fast  
7\. Cursed  
8\. Magic Resistant  
9\. Fire Enchanted  
10-16. {unknown}  
17\. Lightning Enchanted  
18\. Cold Enchanted  
19-22. {unknown}  
23\. Immune to Poison  
24\. Thief  
25\. Mana Burn  
26\. Teleport  
27\. Spectral Hit  
28\. Stone Skin  
29\. Multiple Shots  
30\. Aura Enchanted
