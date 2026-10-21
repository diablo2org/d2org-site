---
title: Using the /time Switch
summary: >-
  {x/time}{param}{min}{max} x=type of mod param=0(day) 1(dusk) 2(night) 3(dawn)
  min=value at opposite of param max=value at param values will be half of max
  at inbetween times (ie. if max=100 during…
keepId: 422
author: Nefarius
credit: by bjhampe
posted: '2006-09-07'
views: 5740
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=422'
---
usage:

{x/time}{param}{min}{max}  
x=type of mod  
param=0(day) 1(dusk) 2(night) 3(dawn)  
min=value at opposite of param  
max=value at param  
\*values will be half of max at inbetween times  
(ie. if max=100 during night then max=50 during dawn/dusk and max=0 during day)

\*\*\*\*1 ingame Day/Night cycle ~ 1 hour play time\*\*\*\*

\*\*\*\*values cannot be negative\*\*\*\*

Here is the list of /time mods marked as WORKS, DOES NOT WORK and BUGGED: (Found in properties.txt)

ac/time (+ to total defense) - WORKS  
ac%/time (+% to total defense) - BUGGED (Displays the same as above)  
hp/time (+ life) - DOES NOT WORK  
mana/time (+ mana) - DOES NOT WORK  
dmg/time (+ to damage) - WORKS (Max damage only)  
dmg%/time (+% to damage) - BUGGED (Displays the same as above)  
str/time (+ to strength) - WORKS  
dex/time (+ to dexterity) - WORKS  
enr/time (+ to energy) - WORKS  
vit/time (+ to vitality) - WORKS  
att/time (+ to attack rating) - WORKS  
att%/time (+% to attack rating) - BUGGED (Displays the same as above)  
dmg-cold/time (+ to cold damage) - WORKS (Max damage only)  
dmg-fire/time (+ to fire damage) - WORKS (Max damage only)  
dmg-ltng/time (+ to lightning damage) - WORKS (Max damage only)  
dmg-pois/time (+ to poison damage) - WORKS (Max damage only)  
res-cold/time (+ to % resist cold) - WORKS  
res-fire/time (+ to % resist fire) - WORKS  
res-ltng/time (+ to % resist lightning) - WORKS  
res-pois/time (+ to % resist poison) - WORKS  
abs-cold/time (+ to absorbs cold) - WORKS  
abs-fire/time (+ to absorbs fire) - WORKS  
abs-ltng/time (+ to absorbs lightning) - WORKS  
abs-pois/time (+ to absorbs poison) - BUGGED (Displays "Blessed Aim")  
gold%/time (+ to % gold from monsters) - WORKS  
mag%/time (+ to % magic find) - WORKS  
regen-stam/time (+ to % regenerate stamina) - WORKS  
stam/time (+ to maximum stamina) - DOES NOT WORK  
dmg-dem/time (+ to % damage versus demons) - WORKS  
dmg-und/time (+ to % damage versus undead) - WORKS  
att-dem/time (+ to attack rating versus demons) - WORKS  
att-und/time (+ to attack rating versus undead) - WORKS  
crush/time (+ to % crushing blow) - WORKS  
wounds/time (+ to % open wounds) - WORKS  
kick/time (+ to kick damage) - WORKS  
deadly/time (+ to deadly strike) - WORKS (Displays but may not work because kick damge on boots was taken out)  
gems%/time - NEVER IMPLEMENTED
