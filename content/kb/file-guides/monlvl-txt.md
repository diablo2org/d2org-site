---
title: MonLvl.txt
summary: >-
  NOTE From Kingpin: "I didn't see that this is mentioned here. In MonLvl.txt
  all L-XX columns is used for ladder/single player and tcp-ip. So here is a
  fileguide for this file. MonLvl.txt"
keepId: 354
author: Nefarius
credit: 'by Kingpin, restyled by Ogodei'
posted: '2005-10-18'
modified: '2018-10-24'
views: 16700
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=354'
---
**NOTE From Kingpin:**  
"**_I didn't see that this is mentioned here. In MonLvl.txt all L-XX columns is used for ladder/single player and tcp-ip. So here is a fileguide for this file.  
MonLvl.txt_**"

\- Official Battle.Net-only columns - \[i.e Closed Battle.Net\]

**AC - AC(N) - AC(H)**: Armor Class, which is calculated together with [MonStats.txt](/kb/file-guides/monstats-txt) columns. The formula is **(MonLvl.txt Ac \* Monstats.txt AC) / 100**.

**TH - TH(N) - TH(H)**: To Hit, calculated together with monstats.txt column(s) **(MonLvl.txt TH \* Monstats.txt A1TH and MonLvl.txt TH \* Monstats.txt A2TH) / 100**.

**HP - HP(N) - HP(H)**: Hitpoints, calculated together with monstats.txt columns. The formula is **(MonLvl.txt HP \* Monstats.txt minHP) / 100 and MonLvl.txt HP \* Monstats.txt maxHP) / 100**.

**DM - DM(N) - DM(H)**: Damage (Normal), is calculated together with monstats.txt columns. The formula is .**(MonLvl.txt DM \* Monstats.txt A1MinD) / 100 and MonLvl.txt DM \* Monstats.txt A1MaxD) / 100 and MonLvl.txt DM \* Monstats.txt A2MinD) / 100 and MonLvl.txt DM \* Monstats.txt A2MaxD) / 100**

**XP - XP(N) - XP(H)**: Experience Points (Normal) , is calculated together with monstats.txt columns. **The formula is (MonLvl.txt XP \* Monstats.txt Exp) / 100**.

\- Single Player / Open Battle.Net / Mod-only columns - \[i.e Closed Battle.Net\]

**L-AC - L-AC(N) - L-AC(H)**: Armor Class, calculated together with monstats.txt columns. The formula is **(MonLvl.txt Ac \* Monstats.txt AC) / 100**.

**L-TH - L-TH(N) - L-TH(H)**: To Hit, is calculated together with monstats.txt columns. The formula is **(MonLvl.txt TH \* Monstats.txt A1TH and MonLvl.txt TH \* Monstats.txt A2TH) / 100**.

**L-HP - L-HP(N) - L-HP(H)**: Hitpoints (Normal), is calculated together with monstats.txt columns. The formula is **(MonLvl.txt HP \* Monstats.txt minHP) / 100 and MonLvl.txt HP \* Monstats.txt maxHP) / 100)**.

**L-DM - L-DM(N) - L-DM(H)**: Damage (Normal), is calculated together with monstats.txt columns. The formula is **(MonLvl.txt DM \* Monstats.txt A1MinD) / 100 and MonLvl.txt DM \* Monstats.txt A1MaxD) / 100 and MonLvl.txt DM \* Monstats.txt A2MinD) / 100 and MonLvl.txt DM \* Monstats.txt A2MaxD) / 100**.

**L-XP - L-XP(N) - L-XP(H)**: Experience Points (Normal) , is calculated together with monstats.txt columns. **The formula is (MonLvl.txt XP \* Monstats.txt Exp) / 100**.
