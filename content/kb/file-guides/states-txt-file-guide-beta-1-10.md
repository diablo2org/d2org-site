---
title: States.txt File Guide (Beta 1.10)
summary: >-
  THis guide was written from the first 1.10 beta txt file. It will surely
  change in contents and/or composition.
keepId: 344
author: Nefarius
credit: by Joel Falcou
posted: '2005-10-18'
views: 9536
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=344'
---
STATES.TXT

THis guide was written from the first 1.10 beta txt file.  
It will surely change in contents and/or composition.

state - The state name.  
id - The Satte ID, dunno yet if it's extendable.  
group - state group. It seems that state of a same group can't be active at the same time (check bear/wolf)  
remhit - Unknown (no state are using it)  
nosend - Seems to deal with client/server stuff  
transform - Does the unit shapeshift in some way ? (boolean)  
aura - Does the state works as an aura ? (boolean)  
curable - Does the state can be healed in some way ? (boolean)  
curse - Does the state works as a curse ? (boolean)  
active - Does the state have an active effect (shiver armor for ex.) ? (boolean)  
immed - Is the State immediate ?  
restrict - ??? (seems to deal with wolf/bear form) ? (boolean)  
disguise - Does the state change of gfx (wolf/bear/valkyrie) ? (boolean)  
blue - Does it turn the affected unit blue ? (boolean)  
attblue - Does the state turns the attack rating display blue ? (boolean)  
damblue - Does the state turns the damage display blue ? (boolean)  
armblue - Does the state turns the ac display blue ? (boolean)  
rfblue - Does the state turns the res-fire display blue ? (boolean)  
rlblue - Does the state turns the res-ltng display blue ? (boolean)  
rcblue - Does the state turns the res-cold display blue ? (boolean)  
stambarblue - Does the state turns the stamina bar blue ? (boolean)  
rpblue - Does the state turns the res-pois display blue ? (boolean)  
attred - Does the state turns the attack rating display red ? (boolean)  
damred - Does the state turns the damage display red ? (boolean)  
armred - Does the state turns the ac display red ? (boolean)  
rfred - Does the state turns the res-fire display red ? (boolean)  
rlred - Does the state turns the res-ltng display red ? (boolean)  
rcred - Does the state turns the res-cold display red ? (boolean)  
rpred - Does the state turns the res-pois display red ? (boolean)  
exp - Deals with conversion skills. If set to 1, the converted unit give you xp. (boolean)  
plrstaydeath - Related with corpse ... (boolean)  
monstaydeath - Related with corpse ... (boolean)  
bossstaydeath - Related with corpse ... (boolean)  
hide - ??? Hide the actual gfx of the unit ?? (boolean)  
shatter - Does the affected unit shatters on death ? (boolean)  
udead - Does the states remove the corpse it targets ? (boolean)  
life - Does state affect life ? (boolean)  
green - Does the life bubble turn grren ?  
pgsv - Is the state effect progressive ? (like burn,poison) (boolean)  
nooverlays - ???  
noclear - ???  
bossinv - ??? (only valkyrye use it) (boolean)  
meleeonly - When the state is active it prevent all attack except melee one. (boolean).  
notondead - ??? corpse related. (boolean)  
overlay1-4 - Overlay id in overlay.txt  
pgsvoverlay - Overlay to use when the progreessive effect take place.  
castoverlay - Overlay to use on casting.  
removerlay - Overlay to use on removing  
stat - Stat affected by the state.  
setfunc - Function to call when state is activated.  
remfunc - Function to call when state is stopped.  
missile - Missile to launch on state activation.  
skill - Skill to use when State is trigered.  
itemtype - Itemtype affected by the state.  
itemtrans - Colorshift applied to the itemtypes.  
colorpri - Colorshift intensity  
colorshift - New color of the unit (think green for poison etc ...)  
light-r - State change light red component.  
light-g - State change light green component.  
light-b - State change light blue component.  
onsound - Sounds to play when states starts.  
offsound - Sounds to play when states ends.  
gfxtype - When states have disguise/transform set to 1, it tells the game whicg gfx to use. 2:player character,1:monster  
gfxclass - if gfxtype = 2, it's equal to class ID, if 1 it's equal to monster ID.  
cltevent - Event triggering state on client ???  
clteventfunc - Function for client.  
cltactivefunc - Fonctuion for client wwhen state active.  
srvactivefunc - Serveur active function.  
eol - Design the end of line.
