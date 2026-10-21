---
title: ItemType Table
summary: >-
  The 'type' I'm referring to is the Type column, which appears in only three
  files to my knowledge: misc.txt, weapons.txt, and armor.txt.
keepId: 424
author: Nefarius
credit: by JBouley
posted: '2006-09-07'
views: 6097
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=424'
---
The 'type' I'm referring to is the Type column, which appears in only three files to my knowledge: misc.txt, weapons.txt, and armor.txt.

1 - **unknown**  
2 - shield  
3 - armor  
4 - gold  
5 - arrows  
6 - bolts  
7 - ear  
8 - **unknown**  
9 - potion  
10 - ring  
11 - elixir  
12 - amulet  
13 - **unknown**  
14 - **unknown**  
15 - boots  
16 - gloves  
17 - **unknown**  
18 - tome (town portal or identify)  
19 - belts  
20 - gem  
21 - torch  
22 - scroll (town portal or identify)  
23 - **unknown**  
24 - scepter  
25 - wand  
26 - staff  
27 - bow  
28 - axe  
29 - club  
30 - sword  
31 - hammer  
32 - dagger  
33 - javelin  
34 - polearm  
35 - crossbow  
36 - mace  
37 - helmet  
38 - throwing potion  
39 - quest item  
40 - organ/body part  
41 - key  
42 - throwing knife  
43 - throwing axe

Examples on how you can use these numbers in your own mod:

1) If you read the 'socketing armor' tutorial, you'll see that using the helm's Type code is key to making the process work.

2) If you gave a longsword (or any other weapon) the Type code for a staff, that weapon would appear a lot of the time with sorc skill bonuses (you can do similar stuff for the pally and necro with the scepter and wand Type codes). Drawback is that the weapon then ends up with the capabilities of the weapon that normally has that type code. For example, a sword with a scepter type code becomes scepter class weapon.

3) You could give the key Type code to something else (say, a monster organ), and it would become able to open chest.
