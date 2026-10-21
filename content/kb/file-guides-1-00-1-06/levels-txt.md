---
title: Levels.txt
summary: 'Column A Name: The name of the level as it is represented in the txt file.'
keepId: 384
author: Nefarius
credit: by Nefarius
posted: '2006-06-21'
views: 6953
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=384'
---
Column A Name: The name of the level as it is represented in the txt file.

Column B Id: the ID number of the level which represents it in this and other txt files.

Column C pal: The palette to use, Blizz did multiple 256 color palettes.  
EDIT: One for each act.

Column D Act: Determines which act the level belongs to.

Column E Layer: ~~Unknown is set to 0 for the most act 1 wilderness levels.~~  
EDIT: Determines what AutoMap layer this level uses.

Column F ~~SizeX: Seams to control level size.~~  
EDIT: The horizontal expanse of this level, in subtiles

Column G  
EDIT: The vertical expanse of this level, in subtiles.

Column H ~~OffsetX: Unknown seams to do with level size.~~  
EDIT: The horizontal placement of this level within the worldspace.

Column I ~~OffsetY: Unknown seams to do with level size.~~  
EDIT: The vertical placement of this level within the worldspace.

Column J Depend: ~~Unknown is set to 0 for all levels, except the first courtyard(outer cloister) and barracks(barracks) of act 1.~~  
EDIT: Contains the level ID this levels' warp is dependant upon, so that their are always properly aligned.

Column K Rain: Determines if it can rain in this level,(1 means it can rain 0 means it cannot).

Column L Mud: Unknown is set to 1 only for the levels of act 3,(1 means there is mud in the level 0 means there is not).  
EDIT: Blizzard originally intended there to be mud after it rains, which had a similar effect on the characters movement speed as the goo the giant spiders make when they attempt to escape. There is no underlying code, so this column serves no purpose.

Column M NoPer: For D2 in 3D (like direct 3D) which allows perspective.  
EDIT: 0 = allow perspective, 1 = forbid perspective.

Column N LOSDraw: ~~unknown but seams to determine if the area is an underground or none natural level.~~  
EDIT: Infravision enabled, 0 = don't draw LoS (overground levels), 1 = draw LoS (caves). Setting this to 0 will allow you to see enemies behind walls etc.

Column O IsInside: ~~determines if the level is underground or none natural.~~  
EDIT: Determines whenever the level is influenced by day and night lightning effects. 0 = use day and night lightning, 1 = always day.

Column P DrlgType: ~~Unknown~~  
EDIT: Determines the type of level generation to use, 1 = random dungeon, 2 = preset map (LvlPrest.txt) and 3 = random wilderness.

Column Q LevelType: Determines what type the level is (from LvlTypes.txt).

Column R SubType: ~~Unknown is set to -1 for all levels but the act 1 wilderness levels~~.  
EDIT: This determines what subtype this level belongs to, some values are unused, so it leaves place for experimentation.

Column S SubTheme: ~~Unknown~~  
EDIT: This influences what subtheme is picked from the main theme. For example, the one used for the Dark Wood will spawn more trees.

Column T SubWaypoint: ~~Unknown~~  
EDIT: Related to waypoints in non-preset levels, might handle what map index the waypoint object is on. Here also there are manu unused indexes to test.

Column U SubShrine: ~~Unknown~~  
EDIT: This influences how random preset shrines are spawned, as you know shrines spawn as part of the map in the wilderness, this is doubtlessly related to this in some way.

Column V-AC Vis0-7: ~~Unknown~~  
EDIT: Determines the level IDs linked to this level. The Vis (for visual I think) used is based on the warp tile ID within the map.

Column AD-AK Warp0-7: ~~Unknown~~  
EDIT: This handles the display part of level connections, this column contains IDs from LvlWarp.txt. The Warp used must be in-sync with the Vis used.

Column AL Intensity: ~~Unknown(is set to 0 for most levels(not including act4).~~  
EDIT: This controls the intensity of the RGB lighting, setting it to 255 will make the colors the most intense (if you remember XyRAX 15.0) you know what 255 looks like in-game.

**Column AM Red:** like the RGB columns in monstats.txt, stands for red.

**Column AN Green:** like the RGB columns in monstats.txt, stands for Blue.

**Column AO Blue:** like the RGB columns in monstats.txt, stands for Blue.

**Column AP Portal:** Unknown

Column AQ Position: ~~Unknown~~  
EDIT: Can a portal be re-positioned within the level? 1 = it can be repositioned, 0 = it cannot be repositioned.

Column AR SaveMonster: 0 or 1, if you set 1 in town, the NPC you set in town will not disappear when you get out of town. ~~This has something to do with re-spawning and also monsters that are killed will be dead when you go back to the same area instead of re-spawning every time.~~

Column AS Quest: ~~Seams to have to do if the area contains quest items or other quest related stuff, (is set to 0 for almost all levels except for 2 on is set to 11 and the other one to 1).~~  
EDIT: Determines what quest the level in question is linked to.

Column AT WarpDist: ~~Unknown is set to 2025 for almost all levels.~~  
EDIT: Controls the size, in subtiles, of the saftey zone around level entrances and waypoints (to prevent stair-traps).

Column AU MonLvl1: is determining the monster and object level of this area in normal difficulty.  
EDIT: Only effects monsters spawned via DS1s.

Column AV MonLvl2: is determining the monster and object level of this area in nightmare difficulty.  
EDIT: Only effects monsters spawned via DS1s.

Column AW MonLvl3: is determining the monster and object level of this area in Hell difficulty.  
EDIT: Only effects monsters spawned via DS1s.

Column AX MonDen: Determines the density of monsters for the area (if you type in 3000 it does not mean there 3000 monsters in the area there will be a density of 3000).

Column AY MonUMin: minimum boss and champion monsters of the area.

Column AZ MonUMax: Maximum Boss and champion monsters of the area.

Column BA MonWndr: ~~Unknown seams to determine if there are monsters in the area(towns are all set to 0).~~  
EDIT: Can monsters which have not been activated by the player yet execute AI commands? 1 = yes (which allows them to wander around for example), 0 = no (they remain idle until activated).

Column BB MonSpcWalk: ~~Unknown~~  
EDIT: Unknown, but 1 is used for levels with metal grates (Act 1 Jails, Act 2 Basement) and 5 is used for levels with 'liquid' tiles (Act 3 Jungle, Act 4 River of Flame)

Column BC Mtot: the total amount of different monster types,(eg: if 4 different monsters can appear in an area this

Column is set to 4 for this area) note: the game cannot spawn more than 4 different non-boss monsters at a time so you can make it more random if you ad more monster types and make monden that number will make it so that almost every time you play there will be different monsters.

Column BD-CB M1-25: the different monster types this level can spawn(to find out what monster numbers to enter into these columns check monstats and delete 2 from the monster rows number and ad it into these slots in levels.txt(note: if you ad or delete monsters from this

Column make sure Mtot(Colum BC) matches the number of different types).

Column CC-DA S1-25: determines what nest types may appear in the area (you can also try to add other monsters with these columns).  
EDIT: When M1 is spawned the game will automatically also spawn a copy of S1 (etc).

Column DB Utot: the total amount of monster species that can appear as bosses and champions in the area (works similar to Mtot and the M1-25 columns).

Column DC-EA U1-25: Determines the different monster types can appear as bosses for eg: if you put in a pitlord (blue Balrog) in the bloodmoor row and you haven't set Utot to more than 3 it wont appear if you want it to appear 100% make there 10 unique monsters appear in the bloodmoor (with the use of MonUMin MonUMax columns) now delete all other numbers out of the U1-25 columns and put only 360(Balrogs number) in all slots of U in this row put Utot column to 25 and ad this file to your mpq and you will get 10 Balrog bosses in the bloodmoor

Column EB-EF C1-5: Determins which critter appears in the area (snakes, chickens, camels etc).

Column EG-EK CA1-5: ~~Unknown (is set to 30 for all columns that have critters in them in the C1-% columns) eg: if Colum C1 has a 149(chicken) in it then Colum CA1 has 30 in it, NOTE: does not determine the number of chickens or other critter this is determined in monstats.txt.~~  
EDIT: Percentage chance that the critter in question will spawn.

Column EL-EO CD1-CD4: ~~Unknown~~  
EDIT: Also related to critters but not used in vanilla. Might handle maximum number to spawn.

**Column EP Themes:** Unknown

**Column ER SoundEnv:** determines the music this area has (open soundenviron.txt for the numbers that should be put inside these slots.

**Column ES Waypoint:** determines if the area has a way point (255 means none). you can also switch way points with this WARNING if you let the old way point 'as is' you will Probaly be crashed out your game you must make the old waypoint 255(for eg the way point to cold plain is number 1 put 1 into the chaos sanctuary or cowlvl and now make the cold plain 255 now you will have a way point to cowlvl or the chaos sanctuary(all has to do how you choose it).

**Column ET LevelName:** determines the name of the area but it must also be changed in String and patchstring.tbl to appear in the game.

**Column EU LevelWarp:** Determines the name that appear above the entrance to the area(like the caves entrance if you scroll over it will say the warps name, eg: to the den of evil(must also be changed to appear in the game in string and patchstring.tbl.

Column EV EntryFile: ~~Unknown:(note: this is also appearing in other level txts like lvlprest.txt).~~  
EDIT: Determines what 'entry message' DC6 file is played when you enter this level.

Column EW-FD objGrp: this determines what shrines and objects will appear in the level( open objgroup.txt for the numbers that should be placed into these slots).

Column FE-FK objPct: ~~Unknown (if you change these column the game tends to crash).~~  
EDIT: Chance that the object group in question is spawned. Setting this to more then 100 prior to 1.10 crashed the game.

Column FM Beta: seams to determine if the area appeared in the beta, only for reference.
