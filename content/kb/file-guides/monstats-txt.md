---
title: MonStats.txt
summary: This guide contains all the information you need concerning MonStats.txt
keepId: 360
author: Nefarius
credit: 'by Nefarius, expanded, corrected and restyled by Nizari'
posted: '2007-11-01'
modified: '2024-10-29'
views: 52613
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=360'
---
This guide contains all the information you need concerning MonStats.txt

\- Related text files: MonStats.txt

\- Is used together with/is related to/reads from:  
[DifficultyLevels.txt](/kb/file-guides/difficultylevels-txt)  
[Levels.txt](/kb/file-guides/levels-txt)  
[Missiles.txt](/kb/file-guides/missiles-txt)  
[MonEquip.txt](/kb/file-guides/monequip-txt)  
[MonLvl.txt](/kb/file-guides/monlvl-txt)  
[MonSeq.txt](/kb/file-guides/monseq-txt)  
[MonSounds.txt](/kb/file-guides/monsounds-txt)  
[MonStats2.txt](/kb/file-guides/monstats2-txt)  
[MonType.txt](/kb/file-guides/montype-txt)  
[MonProp.txt](/kb/file-guides/monprop-txt)  
[Skills.txt](/kb/file-guides/skills-txt)  
[SuperUniques.txt](/kb/file-guides/superuniques-txt)  
[TreasureClass.txt](/kb/file-guides/treasureclassex-txt-file-guide-totally-new)

**Id:** this column contains the pointer that will be used in other txt files such as levels.txt and superuniques.txt.  
**Warning: vanilla file got a nasty broken id chain error, because of that, if you will try to add a brand new monster, the game will spawn willowisp8 instead. To fix this, you have to rename cr\_lancer8 from row number 725 (hcidx 723) to cr\_lancer9, as cr\_lancer8 is doubled (the first one is present at row 619, (hcidx 617)**

**hcIdx:** this is the actual internal ID of the unit (this is what the ID pointer actually points at) remember that no two units can have the same ID, this will result in lots of unpredictable behaviour and crashes so please don’t do it. This 'HarcCodedInDeX' is used for several things, such as determining whenever the unit uses DCC or DC6 graphics (like mephisto and the death animations of Diablo, the Maggoc Queen etc.), the hcIdx column also links other hardcoded effects to the units, such as the transparency on necro summons and the name-color change on unique boss units (thanks to Kingpin for the info)

**BaseId:** this column contains the ID pointer of the “base” unit for this specific monster type (ex. There are five types of “Fallen”; all of them have fallen1 as their “base” unit). The baseID is responsible for some hardcoded behaviours, for example moving thru walls (ghosts), knowing what units to ressurect, create etc (putrid defilers, shamans etc), the explosion appended to suicide minions (either cold, fire or ice). Thanks to Kingpin for additional info on this column.

**NextInClass:** this column contains the ID of the next unit in the chain. (Continuing on the above example, fallen1 has the ID pointer of fallen2 in here). If you want to make a monster subtype less you should simply leave this blank and make BaseId point at itself (its ID pointer). The game uses this for “map generated” monsters such as the fallen in the fallen camps, which get picked based on area level (the same camp, that in the cold plains contains normal fallen will contain carvers and devilkin elsewhere, read Levels.txt to check how to adjust area level).

**TransLvl:** this indicates which palette (color) entry the unit will use, most monsters have a palshift.dat file in their COF folder, this file contains 8 palettes, starting from index 0. These palettes are used by the game to make the various monster sub-types appear with color variations. The game with use the palette from the palettes file corresponding to the value in this column plus 2; eg: translvl = 0 will use the third palette in the file.  
**_NOTE: some tokens (token = IE name of a folder that contains animations) such as FC do not accept their palettes._**  
**_NOTE no 2: some monsters got unused palettes, ZM (zombie) for example will turn light-rotten-green with palette nr 5 and pink-creamy with 6._**

**NameStr:** this column contains the string-key used in the TBL (string.tbl, expansionstring.tbl and patchstring.tbl) files to make this monsters name appear when you highlight it. Without that your monster will be displayed as "not used - tell ken" or "an evil force".

> **Warning:** string keys are case sensitive, so if you enter a key like “Foo” in monstats.txt you must enter exactly that in the TBL file! (IE if you enter “foo” or “fOO” you will get "not used - tell ken" or "an evil force").

**MonStatsEx:** this column contains the ID pointer to an entry in MonStats2.txt. In 1.10 Blizzard has moved all the graphical aspects (light radius, bleeding etc) to a new file to conserve space (MonStats.txt is one column short of 256, the maximum MS Excel can handle, and that’s what they probably used for their files).

**MonProp:** this column contains the ID pointer to an entry in MonProp.txt which controls what special modifiers are appended to the unit, for example you can use it to give your monsters auras, states, random resistances or immunities, give them “get hit skills” and almost anything else.

**MonType:** this column contains the group ID of the “super group” this monster belongs to, IE all skeletons belong to the "super group" skeleton. The 1.10 MonType.txt works exactly like ItemTypes.txt, furthermore this file is used for special modifiers such as additional damage vs. monster-class.

**AI:** this column tells the game which AI to use for this monster. Every AI needs a **_specific set_** of animation modes (GH, A1, A2, S1, WL, RN etc). Most of AI's require a configuration in aip columns (read about them below), without that they (most of them) will do absolutely nothing.

**DescStr:** this column contains the string-key used in the TBL (string.tbl, expansionstring.tbl and patchstring.tbl) files for the monsters description (leave it blank for no description).  
**_NOTE: ever wondered how to make it say something below the monster name (such as “Drains Mana and Stamina etc), well this is how you do it. Just put the string-key of the string you want to display below the monsters name in here._**

**Code:** this is the only graphical setting (besides TransLvl) left in MonStats.txt, this controls which token (IE name of a folder that contains animations) the game uses for this monster.

**enabled:** Boolean, 1=enabled, 0=disabled. This controls whenever the unit can be used at all for any purpose whatsoever. This is not the only setting that controls this; there are some other things that can also disable the unit (Rarity and isSpawn columns see those for description).

**rangedtype:** Boolean, 1=ranged attacker, 0=melee attacker. This tells the game whenever this is a ranged attacker. It will make it possible for monsters to spawn with multiple shot modifier. Also, I suspect this has to do with the RANGEDSPAWN column in Levels.txt. (Could it be the game uses this for preference settings when spawning monsters to avoid areas being populated only with melee monsters, IE the game picks a set amount of monsters for every level, randomly, only based on their rarity values, from those specified in Levels.txt, now I assume that it could pick 4 melee monsters, however in 1.10 Blizzard added a check to prevent this from happening AFAIK and this could be how they control it.)

**placespawn:** Boolean, 1=spawner, 0=not a spawner. This tells the game whenever this unit is a “nest”. IE, monsters that spawn new monsters have this set to 1. Note that you can make any monster spawn new monsters, irregardless of its AI, all you need to do is adjust spawn related columns and make sure one of its skills is either “Nest” or “Minion Spawner”.

**spawn:** this column contains the ID pointer of the unit to spawn. (in case it is a spawner that is), so if you want to make a new monster that generates Balrogs this is where you would put the Balrog ID pointer.

**spawnx, spawny:** the x/y offsets at which spawned monsters are placed. IE this prevents the spawned monsters from being created at the same x/y coordinates as the spawner itself, albeit its not needed, Blizzards collision detection system is good enough to prevent them from getting stuck.

**spawnmode:** which animation mode will the spawned monster be spawned in. IE. If you make a golem summoner (yes I know, “very original”) you could put S1 in here to make it look as if the golems are really summoned (otherwise they would just appear), in most cases you will probably want to use NU mode or a sequence though.

**minion1, minion2:** these columns contain the ID pointers to the minions that spawn around this unit when it is created.  
**_NOTE + MINI TUTORIAL: lets say you want your super-strong boss to spawn with 5 Oblivion Knights. To do this you would simply enter the Oblivion Knights ID pointer in the MINION1 column. And set PARTYMIN and PARTYMAX both to 5. MINION1/2 are used for several other things. If the monster spawns as unique or superunique then it will have the unit from MINION1/2 set as its minion instead of monsters of its own type. That’s why Lord De Seis doesn’t spawn with other oblivion knights anymore. To semi-circumvent this I suggest you simply put the monsters ID pointer in the MINION2 column (I.E. if you give the Oblivion Knights their own ID pointer in MINION2, Lord De Seis should spawn with both Doom Knights and Oblivion Knights again). The other use controls what monster is created when this unit dies. For example Flayer Shamans will spawn a regular Flayer when they are killed. To enable this you must set SPLENDDEATH to 1, make sure the unit you spawn this was has a raise or resurrect sequence otherwise it will look weird (but it works)._**

**SetBoss:** Boolean, 1=set unit as boss, 0=don’t set unit as boss. This is related to hardcoded behavior of some of the AI's. IE Scarabs are spawned a bit different than most of other monsters. There are 1 or 2 with minions of own kind. Thanks to this colums, the "bosses" of a group can have ('can" because you may set the chance in percentages ia aip5 column of Scarab AI) a chance to order "raid on tagret", what does it change is they will always use SK1 instead of A1 and A2 modes while raiding.

**BossXfer:** Boolean, 1=true, 0=false. This field is connected with the previous one, when "boss of the group" is killed, his "leadership" is passed to one of his minions.

**PartyMin, PartyMax:** how many minions are spawned together with this unit. As mentioned above in the MINION1/2 columns, this controls the quantity of minions this unit has.

**MinGrp MaxGrp:** exactly like the previous two columns, just that this controls how many units of the base unit to spawn. In versions 1.00-1.06, setting the minimum to more then 99 would crash the game.

**sparsePopulate:** this column controls the overall chance something will spawn in percentages, leaving it blank is the same as 100%. If you enter "80" in this column then whenever the game chooses to spawn this unit it will first roll out the chances. So in 2 out of 10 cases the monster will not be spawned and other one may take its place. If you use some low number there can be a situation when the game doesn't roll out the monster and if this monster has units specified in minion1/minion2 columns it will only spawn those minions without the "main" unit.

**Velocity, Run** controls the walking and running speed of this monster respectively.  
**_NOTE: RUN is only used if the monster has a RN mode and its AI uses that mode._**

**Rarity:** this column controls the overall odds that this monster will be spawned. IE Lets say in Levels.txt you have two monsters set to spawn - Monster A has rarity of 10 whereas Monster B has rarity of 1 and the level in question is limited to 1 monster type. First the game sums up the chances (11) and then calculates the odds of the monster spawning. Which would be 1/11 (9% chance) for Monster B and 10/11 (91% chance) for Monster A, thus Monster A is a lot more common than monster B. If you set this column to 0 then the monster will never be selected by Levels.txt for obvious reasons.

**Level, Level(N), Level(H):** controls the monsters level on the specified difficulty. This setting is only used on normal. On nightmare and hell the monsters level is identical with the area level from Levels.txt, **unless** your monster has BOSS column set to 1, in this case its level will be always taken from these 3 columns.

**MonSound:** specifies the ID pointer to this monsters “Sound Bank” in MonSound.txt when this monster is normal.

**UMonSound:** specifies the ID pointer to this monsters “Sound Bank” in MonSounds.txt when this monster is unique or champion. For SuperUnique monsters this is controlled by SuperUniques.txt.

**threat:** used by the game to tell AIs which unit to target first. The higher this is the higher the threat level. Setting this to 25 or so on Maggot Eggs would make your Merc try to destroy those first.

**aidel, aidel(N), aidel(H):** this controls delays between AI ticks (on normal, nightmare and hell). The lower the number, the faster the AI's will attack thanks to reduced delay between swings, casting spells, throwing missiles etc. Please remember that some AI's got individual delays between attacks, this will still make them faster and seemingly more deadly though.

**aidist, aidist(N), aidist(H):** the distance in cells from which AI is activated. Most AI"s have base hardcoded activation radius of 35 which stands for a distamnce of about 1 screen, thus leaving these fields blank sets this to 35 automatically.

**aip1-8, aip1-8(N), aip1-8(H):** these cells are very important, they pass on parameters (in percentage) to the AI code. For descriptions about what all these AI's do, check [The AI Compendium](https://d2mods.info/forum/viewtopic.php?t=36230).

> **Warning:** many people have trouble with the AI of the Imps, this AI is special and uses multiple rows.

**MissA1, MissA2, MissS1, MissS3, MissS4, MissC, MissSQ:** these columns control “non-skill-related” missiles used by the monster. For example if you enter a missile ID pointer (from Missiles.txt) in MissA1 then, whenever the monster uses its A1 mode, it will shoot a missile, this however will succesfully prevent it from dealing any damage with the swing of A1.  
**_NOTE: for the beginners, A1=Attack1, A2=Attack2, S1=Skill1, S2=Skill2, S3=Skill3, S4=Skill4, C=Cast, SQ=Sequence._**

**Align:** Switch, 0=enemy, 1=aligned, 2=neutral. This setting controls whenever the monster fights on your side or fights against you (or if it just walks around, IE a critter). If you want to turn some obsolete NPCs into enemies, this is one of the settings you will need to modify. Setting it to 2 without adjusting other settings (related to AI and also some in MonStats2) it will simply attack everything.

**IsSpawn:** Boolean, 1=spawnable, 0=not spawnable. This controls whenever this unit can be spawned via Levels.txt.

**IsMelee:** Boolean, 1=melee attacker, 0=not a melee attacker. This controls whenever this unit can spawn with boss modifiers such as multiple shot or not. IE melee monsters will never spawn with multiple shot.

**npc:** Boolean, 1=I’m a NPC, 0=I’m not. This controls whenever the unit is a NPC or not.

**interact:** Boolean, 1=Special NPC features enabled, 0=No special NPC features. This controls whenever you can interact with this unit. IE this controls whenever it opens a speech-box or menu when you click on the unit. To turn units like Kaeleen or Flavie into enemies you will need to set this to 0 (you will also need to set NPC to 0 for that).

**inventory:** Boolean, 1=Has an inventory, 0=Has no inventory. Controls whenever this NPC or UNIT can carry items with it. For NPCs this means that you can access their Inventory and buy items (if you disable this and then try to access this feature it will cause a crash so don’t do it unless you know what you’re doing). For Monsters this means that they can access their equipment data in MonEquip.txt.

**InTown:** Boolean, 1=I can enter towns, 0=I can’t enter towns. This controls whenever enemies can follow you into a town or not. This should be set to 1 for everything that spawns in a town for obvious reasons. According to informations from Ogodei, it also disables/enables collision in singleplayer and allows pets to walk/not walk in city in multiplayer. In multiplayer collision is always set to 0 for pets.

**lUndead:** Boolean, 1=I'm the low undead, 0=I'm not. Blizzard used this to differentiate High and Low Undead (IE low undead like Zombies, Skeletons etc are set to 1 here), both this and HUNDEAD will make the unit be considered undead. Low undeads can be resurrected by high undeads. High undeads can't resurrect eachother.

**hUndead:** Boolean, 1=I'm the high undead, 0=I'm not. See comments under the previous column.

**demon:** Boolean, 1=I'm a demon, 0=I'm not. This makes the game consider this unit a demon.

**flying:** Boolean, 1=I can fly, 0=I can’t fly. If you set this to 1 the monster will be able to move fly over obstacles such as puddles and rivers.  
**_TIP: Setting this to 1 for Mephisto will prevent the possibility of making him stuck and being slaughtered by blizzard or other ranged spells easily._**

**opendoors:** Boolean, 1=I can open doors, 0=I’m too damn retarded to open doors. Ever wanted to make the game more like D1 (where closing doors could actually protect you), then this column is all you need. By setting this to 0 you will succesfully lobotomize the monster, thus he will not be able to open doors any more.

**boss:** Boolean, 1=I’m a boss, 0=I’m not a boss. This controls whenever this unit is a special boss, as mentioned already, monsters set as boss IGNORE the level settings, IE they will always spawn with the levels specified in MonStats.txt, thus if a superunique monster has this flag set to 1, its level will be monstats level + 3 (level from monstats because of boss flag and +3 levels because of being a super unique). Boss will gain some special resistances, such as immunity to being stunned (!!!), also crushing blow has a 1/2 effectiveness multiplier against bosses.

**primeevil:** Boolean, 1=I’m a prime evil, 0=I’m not a prime evil. (=Act Boss). Setting this to 1 will give your monsters huge (300% IIRC) damage bonus against hirelings and summons. Ever wondered why Diablo destroys your skeletons with 1 fire nova while barely doing anything to you? Here is your answer.

**killable:** Boolean, 1=Mortal, 0=Immortal. Setting this to 0 will make the monster absolutely unkillable.

**switchai:** Boolean, 1=Can chance sides, 0=Cannot change sides. Gives your monster something what I call "Strong Mind", it decides if this units mind may be altered by “mind altering skills” like Attract, Conversion, Revive etc or not.

**noAura:** Boolean, 1=Can’t get an aura, 0=Can get an aura. Monsters set to 0 here will not be effected by friendly auras.

**nomultishot:** Boolean, 1=Can’t get multishot modifier, 0=Can get multishot modifier. This is another layer of security to prevent this modifier from spawning, besides the ISMELEE layer.

**neverCount:** Boolean, 1=Never accounted for, 0=Accounted for. Setting this to 1 prevents your pets from being counted as population in said area, for example thanks to this you can finish The Den Of Evil quest while having pets summoned.

**petIgnore:** Boolean 1=Summons and hirelings are ignored by this unit, 0=Summons and hirelings are noticed by this unit. If you set this to 1 you will the monsters going directly for the player.

**deathDmg:** Boolean, 1=Damage players colliding with my death animation, 0=Don’t damage anything. This works similar to corpse explosion (its based on hitpoints) and damages the surrounding players when the unit dies. (Ever wanted to prevent those undead stygian dolls from doing damage when they die, this is all there is to it)

**genericSpawn:** Boolean, 1=Use generic spawning, 0=Don’t use generic spawning. Has to do something is with minions being transformed into suicide minions, the exact purpose of this is a mystery to me though.

**zoo:** Boolean, 1=true, 0=false. Unused.

**SendSkills:** Switch, 1=Unknown, 2=Used for assassin traps, 0=Don’t send skills. This is only used by two of the Assassin traps, however it doesn't serve any purpose anymore.

**Skill1-8:** the ID Pointer to the skill (from Skills.txt) the monster will cast when this specific slot is accessed by the AI. Which slots are used is determined by the units AI.

**Sk1mode-Sk8mode:** the graphical MODE (or SEQUENCE) this unit uses when it uses this skill.

**Sk1lvl-Sk8lvl:** the skill level of the skill in question. This gets a bonus on nightmare and hell which you can modify in DifficultyLevels.txt.

**Drain, Drain(N), Drain(H):** controls the effectiveness of Life and Mana steal from equipment on this unit on the respective difficulties. 0=Can’t leech at all. (negative values don't damage you, thanks to Doombreed-x for testing this), setting it to more then 100 would make LL and ML more effective. Remember that besides this, Life and Mana Steal is further limited by DifficultyLevels.txt.

**coldeffect, coldeffect(N), coldeffect(H):** controls the effectiveness of cold effect and its duration and freeze duration on this unit. The lower this value is, the more speed this unit looses when its under the effect of cold, also freezing/cold effect will stay for longer. Positive values will make the unit faster (thanks to Brother Laz for confirming my assumption), and 0 will make it unfreezeable. Besides this, cold length and freeze length settings are also set in DifficultyLevels.txt.

**ResDm, ResDm(N), ResDm(H):** damage resistance on the respective difficulties. Negative values mean that the unit takes more damage from this element, values at or above 100 will result in immunity.  
**_NOTE: even though it may be quite obvious, I already met many people who do not know about it. Each point of resistance means 1% of reduction (or increase if the value is <0) of damage from said source. The same stands for player characters. Same stands for all other resistances. 81% of fire resist means 81% of incoming fire damage reduction.  
NOTE 2: when resistance is >100 (immunity), you need 5 points of resistance reducing stat applied DIRECTLY to the unit to reduce 1% of immunity. It means if you want to break 105% immunity, you will need at least 30 resist reduction stat (105 - 6 = 99 and 6 \* 5 = 30).  
NOTE 3: yes, yes, indeed, "damage reduced by x%" stat that may spawn on items such as The Crown Of Ages or Ber rune is nothing else than physical resistance._**

**ResMa, ResMa(N), ResMa(H):** magic resistance on the respective difficulties. Negative values mean that the unit takes more damage from this element, values at or above 100 will result in immunity. Check ResDm description for additional info.

**ResFi, ResFi(N), ResFi(H):** fire resistance on the respective difficulties. Negative values mean that the unit takes more damage from this element, values at or above 100 will result in immunity. Check ResDm description for additional info.

**ResLi, ResLi(N), ResLi(H):** lightning resistance on the respective difficulties. Negative values mean that the unit takes more damage from this element, values at or above 100 will result in immunity. Check ResDm description for additional info.

**ResCo, ResCo(N), ResCo(H):** cold resistance on the respective difficulties. Negative values mean that the unit takes more damage from this element, values at or above 100 will result in immunity. Check ResDm description for additional info.

**ResPo, ResPo(N), ResPo(H):** poison resistance on the respective difficulties. Negative values mean that the unit takes more damage from this element, values at or above 100 will result in immunity. Check ResDm description for additional info.

**DamageRegen:** this controls how much health this unit regenerates **per frame**. Sometimes this is altered by the units AI. The formula is (REGEN \* HP) / 4096. So a monster with 200 hp and a regen rate of 10 would regenerate ~0,5 HP (~12 per second) every frame (1 second = 25 frames).

> **Warning:** Can safely be set to a negative value in 1.10f, but in 1.11b+ a negative value will cause an immediate crash when the monster spawns

**SkillDamage:** ID Pointer to the skill that controls this units damage. This is used for the druids summons. IE their damage is specified solely by Skills.txt and not by MonStats.txt.

**NoRatio:** Boolean, 1=Don’t use MonLevel.txt, 0=Use MonLevel.txt. Does this unit use MonLevel.txt or does it use the stats listed in MonStats.txt as is. Setting this to 1 will result in an array of problems, such as the appended elemental damage being completely ignored, irregardless of the values in it.

**NoShldBlock:** Boolean, 1=Can block without a blocking animation, 0=Can’t block without a blocking animation. Quite self explanatory, in order for a unit to block it needs the BL mode, if this is set to 1 then it will block irregardless of what modes it has.

**ToBlock, ToBlock(N), ToBlock(H):** this units chance to block. See the above column for details when this applies or not. Monsters are capped at 75% block as players are AFAIK.

**Crit:** this units chance of scoring a critical hit (dealing double the damage).

**minHp, maxHp, minHp(N), maxHp(N), minHp(H), maxHp(H):** this units minimum and maximum HP on the respective difficulties.  
**_NOTE: Monster HitPoints are calculated as the following: (minHp \* Hp from MonLvl.txt)/100 for minimal hp and (maxHp \* Hp from MonLvl.txt)/100 for maximum hp.  
To make this guide idiot-proof, we will calculate the hit points of a Hungry Dead from vanilla on Normal difficulty and Single Player mode. It has minHp = 101 and maxHp = 186 and level 2. Hp for level 2 in MonLvl.txt = 9  
It means Hungry Dead has (101\*9)/100 ~ 9 of minimum hp and (186\*9)/100 ~ 17 maximum hit points. You have to remember monsters on nightmare and hell take their level (unless Boss = 1) from area level of Levels.txt instead of Level column of MonStats.txt. I hope this is clear._**

**AC, AC(N), AC(H):** this units Armor Class on the respective difficulties. The calculation is the same (analogical) as for hit points.

**Exp, Exp(N), Exp(H):** the experience you get when killing this unit on the respective difficulty. The calculation is the same (analogical) as for hit points.

**A1MinD, A1MaxD, A1MinD(N), A1MaxD(N), A1MinD(H), A1MaxD(H):** this units minimum and maximum damage when it uses A1 mode. The calculation is the same (analogical) as for hit points.

**A2MinD, A2MaxD, A2MinD(N), A2MaxD(N), A2MinD(H), A2MaxD(H):** this units minimum and maximum damage when it uses A2 mode. The calculation is the same (analogical) as for hit points.

**S1MinD, S1MaxD, S1MinD(N), S1MaxD(N), S1MinD(H), S1MaxD(H):** this units minimum and maximum damage when it uses S1 mode (or Skill 1), usually used for missiles like arrows and specially charged attacks like Sand Raider Flurry, Viper Charge or Duriel Jab etc. The calculation is the same (analogical) as for hit points.

**A1TH, A1TH(N), A1TH(H):** this units attack rating for A1 mode on the respective difficulties. The calculation is the same (analogical) as for hit points.

**A2TH, A2TH(N), A2TH(H):** this units attack rating for A2 mode on the respective difficulties. The calculation is the same (analogical) as for hit points.

**S1TH, S1TH(N), S1TH(H):** this units attack rating for S1 mode (or Skill 1) on the respective difficulties. Check S1MinD\[...\] description for additional info. The calculation is the same (analogical) as for hit points.

**El1Mode-El3Mode:** the mode to which the elemental damage is appended. The modes to which you would usually attack elemental damage are A1, A2, S1, S2, S3, S4, SQ or C as these are the only ones that naturally contain trigger bytes.

**El1Type-El3Type:** the type of the elemental damage appended to an attack. There are several elements: fire=Fire Damage, ltng=Lightning Damage, cold=Cold Damage (uses duration), pois = Poison Damage (uses duration), mag=Magic Damage, life=Life Drain (the monster heals the specified amount when it hits you), mana=Mana Drain (the monster steals the specified amount of mana when it hits you), stam=Stamina Drain (the monster steals the specified amount of stamina when it hits you), stun=Stun Damage (uses duration, damage is not used, this only effects pets and mercs, players will not get immobilized but they will get thrown into hit recovery whenever they get hit by an attack, no matter what type of attack it is, thanks to Brother Laz clearing this one up), rand=Random Damage (uses duration, either does Poison, Cold, Fire or Lightning damage, randomly picked for every attack), burn=Burning Damage (uses duration, this damage type cannot be resisted or reduced in any way), frze=Freezing Damage (uses duration, this will effect players like normal cold damage but will freeze and shatter pets). If you want to give your monster knockback use MonProp.txt.

**El1Pct-El3Pct, El1Pct(N)-El3Pct(N), El1Pct(H)-El3Pct(H):** chance to append elemental damage to an attack on the respective difficulties. 0=Never append, 100=Always append.

**El1MinD-El3MinD, El1MaxD-El3MaxD, El1MinD-El3MinD(N), El1MaxD-El3MaxD(N), El1MinD-El3MinD(H), El1MaxD-El3MaxD(H):** minimum and Maximum elemental damage to append to the attack on the respective difficulties. Note that you should only append elemental damage to those missiles that don’t have any set in Missiles.txt. The calculation is the same (analogical) as for hit points.

**El1Dur-El3Dur, El1Dur(N)-El3Dur(N), El1Dur(H)-El3Dur(H):** duration of the elemental effect (for freeze, burn, cold, poison and stun) on the respective difficulties.

**TreasureClass1, TreasureClass1(N), TreasureClass1(H):** the TreasureClass used by this unit as a normal monster on the respective difficulties.  
**_NOTE: because of the new TreasureClass system introduced in 1.10 and later patches, TC entries are only of minor influence regarding what TC is being selected unless you change the system by editing TreasureClassEX.txt._**

**TreasureClass2, TreasureClass2(N), TreasureClass2(H):** the TreasureClass used by this unit as a champion on the respective difficulties.

**TreasureClass3, TreasureClass3(N), TreasureClass3(H):** the TreasureClass used by this unit as a unique or superunique on the respective difficulties.

**TreasureClass4, TreasureClass4(N), TreasureClass4(H):** the Quest TreasureClass used by this monster. (For example, the act bosses always have better odds of dropping rare, set and unique items the first time you kill them).

**TCQuestTId:** the ID of the Quest that triggers the Quest Treasureclass drop.

**TCQuestCP:** the ID of the Quest State that you need to complete to trigger the Quest Treasureclass trop.

**SplEndDeath:** Switch, 0=no special death, 1=spawn the monster in the MINION1 column when I die, 2=kill whatever monster is mounted to me when I die (used by guard towers that kill the imps that are on top of them when they die).

**SplGetModeChart:** Boolean, 1=Get Special Mode Chart, 0=Don’t get special mode chart. Unknown but could be telling the game to look at some internal table. This is used for some Act Bosses and monsters like Putrid Defilers.

**SplEndGeneric:** Boolean, 1=true, 0=false. Works in conjunction with SPLCLIENTEND, this makes the unit untargetable when it is first spawned (used for those monsters that are under water, under ground or fly above you)

**SplClientEnd:** Boolean, 1=true, 0=false. Works in conjunction with SPLENDGENERIC, this makes the unit invisible when it is first spawned (used for those monsters that are under water, under ground or fly above you), this is also used for units that have other special drawing setups.

**\*eol:** End of Line, used to avoid the trailing bit error M$ Excel usually causes when adjusting the end of the rows. This column must contain 0 unless you want to crash when the game loads.
