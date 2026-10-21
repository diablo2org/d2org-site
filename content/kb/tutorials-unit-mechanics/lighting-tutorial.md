---
title: Lighting tutorial
summary: a tutorial for how to change various lighting levels in D2
keepId: 295
author: Ray K
posted: '2004-08-19'
views: 9580
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=295'
---
Like a lot of other people, I have wanted to mod D2 to lower the lighting levels in the game. My belief is that this would improve the game in several areas. First, a darker area would make the mood a little more tense, as with the original D1. Second, this would increase the difficulty of the game since a player would have less time to react to monsters. Finally, one minor benefit would be to provide some real value to the “+X light radius” enchantments.

There are four mods that I felt were necessary to accomplish my goals:  
1) eliminate the light radius around monsters  
2) eliminate the huge light radius around players  
3) add torches as items for players to use  
4) lower the nighttime light levels for outdoor areas

The first three of these mods can be accomplished with changes to \*.txt files, making them fairly easy for novice modders like myself. I will describe each mod separately.

\[b:9133059ef2\]1. eliminate the light radius around monsters\[/size:9133059ef2\]\[/b:9133059ef2\]

Files changed: monstats2.txt

There are 4 columns of interest in the \[i:9133059ef2\]monstats2.txt\[/i:9133059ef2\] file: Light, light-r, light-g, light-b. The \[i:9133059ef2\]Light\[/i:9133059ef2\] column controls the radius of the monster’s light, and the r-g-b files control the color.

HOW TO: To remove a particular monster’s light radius, delete any value in the \[i:9133059ef2\]Light\[/i:9133059ef2\] column and then set each of the remaining 3 columns to 255.

There are 3 types of monsters to consider: 1) monsters with a specified value in the Light column, 2) monsters without a Light value, and 3) mercenaries.

If you want to leave alone the monsters that you’d expect to have a light radius, then don’t change any monsters that already have a light radius set. Examples include act bosses, mages/shamans, will o’ wisps, etc. The only change I made was in the light color of some of the act bosses:  
Andariel (set to green) 0-255-0  
Duriel (set to blue) 0-0-255  
Diablo (set to red) 255-0-0

I removed the lighting from the other monsters and the mercenaries. If you are not planning to remove the light radius from the players, then you might not want to change the mercenaries.

\[b:9133059ef2\]2. eliminate the light radius around players\[/size:9133059ef2\]\[/b:9133059ef2\]

Files changed: charstats.txt, skills.txt, states.txt

This change is more involved because player classes are defined in the charstats.txt file, which has far fewer columns that the monstats files. The only way I’ve seen to make this happen by changing only txt files involves creates a new passive skill that reduces light radius, and then assign this as a starting skill to each class. This is almost verbatim from what I read on the Phrozen Forums, so I am not taking credit for creating this technique! Here’s how it is done…

\[i:9133059ef2\]Step 1. create a ‘notorch’ state in the states.txt file\[/i:9133059ef2\]  
Add a new row to the end of this file. Here are the values I used:  
State: notorch  
Id: 184 (this should be 1 greater than the Id value in the preceding row)  
Light-r: 3  
Light-g: 3  
Light-b: 3  
Eol: 0

All other columns should be blank.

\[i:9133059ef2\]Step 2. create a ‘startingpassive’ skill in the skills.txt file\[/i:9133059ef2\]  
Add a new row to the end of the skills.txt file. I am not an expert with this table; I copied the row for an existing passive skill already in the table. Here are values I used:  
Skill: StartingPassive  
Id: 357 (this should be 1 greater than the Id value in the preceding row)  
Skill desc: starting passive for players  
Passivestate: notorch  
Passivestat1: item\_lightradius  
Passivecalc1: -12  
Enhanceable: 1  
Attackrank: 3  
Range: none  
Monanim: xx  
useAttackRate: 1  
reqLevel: 1  
minmana: 0  
manashift: 8  
mana: 0  
lvlmana: 0  
interrupt: 1  
passive: 1  
InGame: 1  
HitShift: 8  
Cost add: 0

\[i:9133059ef2\]Step 3: Assign StartingPassive skill to each class\[/i:9133059ef2\]

The charstats.txt file is the easiest to change because you do not have to add any new rows. You simply add your new ‘StartingPassive’ skill to the row for each class. There are ten columns provided for starting skills, ‘Skill 1’ through ‘Skill 10’. Most of these fields are already used for such skills as ‘Throw’, ‘Kick’, ‘Unsummon’, etc.

However, most classes still have 3 open skill slots although barbarians have just 1 remaining and Assassins have 2. Regardless, you will need to set the first available Skill column to ‘StartingPassive’ for each character row. Unless you have already added skills from a previous mod, this will be the ‘Skill 10’ column for barbarians, the ‘Skill 9’ column for assassins, and the ‘Skill 8’ column for all other classes.

Once this change is in effect, you will notice a drastic difference in the light levels, especially in the caves. In fact, you will see total blackness in most caves. Just FYI, the Den of Evil will turn black only AFTER you have cleared it to complete the Act 1 quest. I’m telling you that because I wasted an entire evening trying to figure out why the Den wasn’t dark for new characters.

Known bug: when you first create a character, he will have a normal light radius in his first game. Why? I don’t know.

\[b:9133059ef2\]3. add torches as items for players to use\[/size:9133059ef2\]\[/b:9133059ef2\]

Files changed: automagic.txt, armor.txt

After you’ve removed the light radius from players, you will quickly see the need to provide some form of torch for players to use, at least until they acquire magical forms of lighting. A lot of people want torches with animated lighting, but that is not within the scope of this mod. After some thought, I settled on a simple shield that looked like a club and came with a +8 light radius. To get the +8 light radius, you’ll need to edit the automagic.txt file.

Why a shield? Realistically, torches cannot be used as weapons because they are too frail. If they are defined as shields, then characters can use them in their off-hand while wielding a weapon in the other. They will provide minimal blocking, but will break easily in combat. Bring more than one torch for any extended cave adventures!

In the automagic.txt file, I created a new row at the end with the following values:  
Name: Torch  
Version: 100  
Spawnable: 1  
Level: 1  
Levelreq: 1  
Frequency: 12  
Group: 306 (this must be a unique value in this file)  
Mod1code: light  
Mod1min: 8  
Mod1max: 8  
Itype1: armo  
Divide: 0  
Multiply: 0  
Add: 0

In the armor.txt file, I copied the row for ‘Buckler’ to the end of the file and made a few changes. Here are the values I ended up with:  
Name: Torch  
Version: 0  
Compactsave: 0  
Rarity: 2  
Spawnable: 1  
Minac: 1  
Maxac: 1  
Absorbs: 0  
Speed: 0  
Reqstr: 0  
Block: 0  
Durability: 1  
Nodurability: 0  
Level: 1  
Levelreq: 0  
Cost: 5  
Code: torch  
Namestr: tch  
Auto prefix: 306 (must match the ‘group’ value in the automagic.txt row)  
Alternategfx: club  
openBetaGfx: club  
normcode: torch  
ubercode: torch  
ultracode: torch  
spelloffset: 0  
component: 7  
invwidth: 1  
invheight: 3  
hasinv: 0  
gemsocket: 0  
gemapplytype: 0  
flippyfile: flpclb  
invfile: invclbu  
uniqueinvfile: invclbu  
setinvfile: invclbu  
useable: 0  
throwable: 0  
stackable: 0  
minstack: 0  
maxstack: 0  
type: shie  
dropsound: item\_wood  
dropsfxframe: 12  
usesound: item\_wood  
unique: 0  
transparent: 0  
transtbl: 5  
quivered: 0  
lightradius: 0 (not a shortcut – this field does not work!)  
belt: 0  
quest: 0  
missiletype: 0  
durwarning: 0  
qntwarning: 0  
mindam: 0  
maxdam: 0  
gemoffset: 0  
bitfield1: 3  
various vendor fields: --- unchanged from ‘Buckler’ row.

Some notes about these torches…  
1) the vendors will sell them in the ‘armor’ tab, but they look like clubs  
2) they block like bucklers, but provide a defense of only 1  
3) their durability is only 1, and their light goes out when they break (not long in combat)

\[b:9133059ef2\]4. lower the nighttime light levels for outdoor areas \[/size:9133059ef2\]\[/b:9133059ef2\]

I still haven’t figured out how to do this. By changing r-g-b light values in the levels.txt file, you can create a \[i:9133059ef2\]permanent\[/i:9133059ef2\] darkness in outdoor areas that ignores the day/night cycle, but that is not something I want to do.

If anyone knows how to decrease nighttime light levels in outdoor areas, let me know and I’ll add it to this tutorial.
