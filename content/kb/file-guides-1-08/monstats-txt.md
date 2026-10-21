---
title: MonStats.txt
summary: 'Column A Class: the monsters name used as the string code for string.tbl.'
keepId: 397
author: Nefarius
credit: by Nefarius
posted: '2006-06-21'
views: 7002
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=397'
---
**Column A Class:** the monsters name used as the string code for string.tbl.

**Column B namco:** additional monster name used in the montype/monstats.txt only.

**Column C type:** the monsters type (I.e. skeleton, zombie etc)

**Column D Descriptor:** line for the string code for the monsters special abilities (such as revives fallen etc)

**Column E BaseId:** the ID number for the monsters type, controls its skills monsters of the same type have the same ID.

**Column F PopulateId:** the number you need to use in levels.txt in order to spawn this monster.

**Column G Spawned:** 1 means this monster can be spawned, 0 means it cant.

**Column H Beta:** reference only, 1 means it was in d2 beta, 0 means it wasn’t.

**Column I Code:** the token code for this monster type, has no effect in monstats but in montype.txt this controls the monsters graphics.

**Column J ClientOnly:** this controls if the monster is spawned only client side or only server side, 0 means the server(host) controls this monsters appearance, 1 means only the client can see this monster(client=person who joins a game).

**Column K NoMap:** Disable in v1.08+, used to make monsters appear on the auto map if set to 1.

**Column L SizeX:** controls monster overlay dimensions.

**Column M SizeY:** controls monster overlay dimensions.

**Column N Hieght:** unknown, seams to control monster height?

**Column O NoOverlays:** unknown, set to 0 for all classic d2 monsters is used only on a few expansions monsters.

**Column P OverlayHieght:** unknown, controls the height of the monsters overlay?

**Column Q Velocity:** controls the monsters walking speed.

**Column R Run:** controls the monsters running speed(if it can run).

**Column S CanStealFrom:** controls if you can leech back mana/life from this monster.

**Column T ColdEffect:** unknown, seams to control how long this monster can be chilled?

**Column U Rarity:** unknown, probably has no effect.

**Column V Level:** monster level on normal difficulty NOTE: maximum is not 99 in XyRAX I spawned monsters with lvl 150+.

Column W Level(N): monster level on nightmare difficulty NOTE: maximum is not 99 in XyRAX I spawned monsters with lvl 150+.

Column X Leve(lH): monster level on hell difficulty NOTE: maximum is not 99 in XyRAX I spawned monsters with lvl 150+.

**Column Y MeleeRange:** the attack range this monsters melee attacks have, limit is probably identical to weapons.txt and is above 50.

**Column Z MinGrp:** minimum group this monster will appear in.

**Column AA MaxGrp:** maximum Group the monster will appear in.

**Column AB HD:** Stands for head 1 probably means the head has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AC TR:** Stands for Torso 1 probably means the torso has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AD LG:** Stands for Legs 1 probably means the torso has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AE RA:** Stands for Right Arm 1 probably means the torso has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AF LA:** Stands for Left Arm 1 probably means the torso has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AG RH:** Probably stands for Right hand for monsters that can hold different weapon types randomly 1 probably means the torso has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AH LH:** Probably stands for Left hand for monsters that can hold different weapon types randomly 1 probably means the torso has more then 1 look (skeletons, corrupted rogues etc) 0 means it doesn’t. (note if you plan to switch graphics for a monster you must make sure these Columns match if not you will have to rename some .cof files for it to work).

**Column AI SH:** is set for monsters that can use a shield, this is mostly the .cof file missing when you switch graphics between monsters and will require renaming of another .cof file. Works similar to the above Column s.

**Column AJ S1:** stands for skill 1 .cof file.

**Column AK S2:** stands for skill 2 .cof file.

**Column AL S3:** stands for skill 3 .cof file.

**Column AM S4:** stands for skill 4 .cof file.

**Column AN S5:** stands for skill 5 .cof file.

**Column AO S6:** stands for skill 6 .cof file.

**Column AP S7:** stands for skill 7 .cof file.

**Column AQ S8:** stands for skill 8 .cof file.

**Column AR TotalPieces:** how many pieces is the animation made of (refereeing to the HD, TR, LG, RA, LA, RH, LH, SH, S1-8 Columns) .

**Column AS SpawnComponents:** Probably disable and unimportant due to the fact all monsters are set to 0 for this.

**Column AT BaseW:** Base Weapon this monster uses (if it can use a weapon).

Column AU, AW, AY, BA, BC AIParam 1-5: determines the AI (Artificial Intelligence) parameters for the monsters behavior.

Column AV, AX, AZ, BB, BD Comment: a comment about the AI parameter about the AIParam Column next to it.

**Column BE ModeDH:** note does not stand for death if you refere to MonMode.txt DT stands for death DH is not referred in there.

**Column BF ModeN:** Unknown.

**Column BG ModeGH:** determines if the monster can be knocked back referring to MonMode.txt.

**Column BI ModeA1:** determines the first hth (hand to hand) attack of the monster.

**Column BJ ModeA2:** determines the second hth (hand to hand) attack of the monster.

**Column BK ModeB:** unknown does not stand for blocking, blocking would be BL.

**Column BL ModeC:** unknown.

**Column BM ModeS1:** determines the first skill of the monster.

**Column BN ModeS2:** determines the second skill of the monster.

**Column BO ModeS3:** determines the third skill of the monster.

**Column BP ModeS4:** determines the fourth Skill of the Monster.

**Column BQ ModeDD:** determines the monster after its death (i.e. corpse on ground).

**Column BR ModeKB:** doesn’t determine if it can be knocked back for more info see MonMode.txt.

**Column BS ModeSQ:** sequence, seams to be unused since in MonMode.txt sequence is set to xx which means unused.

**Column BR ModeRN:** determines if the monster can run.

**Column BU ElMode:** base elemental attack, such as cold hit, fire hit etc, 4 means on hit didn’t test others yet, this is one of the Columns I used to make my blue skeletons in XyRAX do cold damage.

**Column BV ElType:** elemental damage type, like in skills, missiles.txt note, the number set for doom knights means random elemental damage.

**Column BW ElOver:** unknown, better to leave it alone if you cut/paste an attack.

**Column BX ElPct:** the percent that the monster will use its elemental enchantment on a melee attack.

**Column BY ElMinD:** the minimum damage of this attack.

**Column BZ ElMaxD:** the maximum damage of this attack.

**Column CA ElDur:** the duration of the attack effect if poison or cold.

Column CB-CI MissA1, A2, S1, S2, S3, S4, C, SQ: unknown, seams to have to do if the monster misses you with an attack.

Column CJ A1Move: seams to have to do if the monster can move wile it uses its first attack.

Column CK A2Move: seams to have to do if the monster can move wile it uses its first attack.

Column CL-CO S1, S2, S3 S4Move: seams to have to do if the monster can move wile using one of its skills.

**Column CP CMove:** unknown.

**Column CQ Aligh:** set this to 1 to make any monster fight for you, tends to cause trouble if u set a act boss to be an ally.

**Column CR IsMelee:** is this monster a primary melee attacker? 1 means yes 0 means no.

**Column CS IsSel:** determines if the monster is highlight able if you scroll over it and click on it.

**Column CT IsSel2:** only some npcs have set this, I am not sure but it might highlight them on the auto map with there name above there heads on the map like npcs, correct me if I m wrong on this one.

**Column CU NeverSel:** determines if the monster can never be highlighted even with IsSel set to 1.

**Column CV CorpseSel:** determines if you can use skills requiring a corpse on this monsters corpse, note all skills except revive and rise skeletons will work on act bosses.

**Column CW IsAtt:** can this monster be attacked? 1 means yes 0 means no.

**Column CX IsNPC:** is this a NPC? 1 means yes 0 means no.

**Column CY IsCritter:** is this monster a dummy? Like chickens etc.

**Column CZ InTown:** if this is set to 1 it means the monster CAN follow you into town a real fun and confusing thing in open games.

**Column DA Bleed:** determines if the monster bleeds if you hit it, note to reduce lag set all monsters to 0.

**Column DB Shadow:** does this monster have a shadow? Try as for bleed to set this to 0 to reduce lag.

**Column DC Light:** how much light radius does this monster have around itself.

**Column DD NoUniqueShift:** unknown, set only for a few npcs.

**Column DE CompositeDeath:** not 100% sure here its set only to 1 for monsters that can be revived by other monsters, such as fallen, skeletons etc.

Column DF, DI, DL, DO, DR Skill1-5: determines the monsters skill (only for reference the monsters skills are hardcoded inside there ID numbers).

Column DG, DJ, DM, DP, DS Skill1-5Seq: unknown but stands for Skill sequence.

Column DH, DK, DN, DQ, DT Skill1-5Lvl: the base skill level of this monsters skill.

Column DU-DW Light R,G,B: stands for Red, Green, Blue does not determine monsters color since that’s determined inside the palshift.dat files for that specific monster, you will have to hex edit these pallets or switch between them to change a monsters color.

Column DX-EO monster resistance Columns: for every difficulty there is a different sequence of Columns like DamageResist, DamageResist(N), DamageResist(H) this is the place to set the 50% physical resist to 0 on hell to remove this penalty. Note not like many ppl thought immunes are NOT hardcoded just set the monsters with Columns with the value 100 in there to less then 100 and you have removed all he immunes.

**Column EP DamageRegen:** damage regeneration, sets the mount of hit points the monster can regenerate don’t set this to high or you might be in a battle with a specific monster for VERY long.

**Column EQ eLUndead:** is this monster a regular undead (zombies, skeletons).

**Column ER eHUndead:** is this monster a caster undead (greater mummies, vampires etc).

**Column ES eDemon:** is this monster a demon 1 means yes 0 means no.

**Column ET eMagicUsing:** is this monster using magic skills.

**Column EU eLarge:** is this monster large? (urdars, threshers).

**Column EV eSmall:** is this monster small? (fallen, fetish).

**Column EW eFlying:** can this monster fly (move above water, lava), set this to 1 for lets say a golem and yes it will chase those finger mages on river of flame all thru the lava.

**Column EX eOpenDoors:** can this monster open doors? 1 means yes 0 means no.

**Column EY eSpawnCol:** is this monster area restricted (mosquito, frogs , water watchers) set it to 0 to spawn the monster thru levels.txt.

**Column EZ eBoss:** NOTE do NOT set this for a monster that doesn’t has this set already! It will cause a 100% crash since the boss does not appear in the boss table in a .dll.

**Column FA PixHeight:** how many pixels is this monster high?

**Column FB Interact:** for npcs (i.e. if you can speak to them etc). also determines if the name appears in a life bar or not.

Note the following Columns will be displayed for ever difficulty separate but since that would just be the same explanation I will just bring them for normal difficulty.

Columns FC-GP

**MinHP:** minimum value of hit points (life) this monster has.

**MaxHP:** maximum value of hit points (life) this monster has.

**AC:** armor class, the amount of DR(defense rating) this monster has.

**Exp:** the amount of experience you gain when killing this monster if it is spawned on level load (monsters hatching from eggs or nests DON’T give you exp even if they have a billion in here).

**ToBlock:** (only appears once) how much percent chance to block does this monster have. Note, not like showed on the chaos sanctuary some monster WILL block even if they don’t use a shield such as Diablo.

**A1MinD:** the minimum damage for the first physical attack of this monster.

**A1MaxD:** the maximum damage for the first physical attack for this monster.

**A1ToHit:** how much AR (attack rating) does the monster have for this attack.

**A2MinD:** the minimum damage for the second physical attack of this monster.

**A2MaxD:** the maximum damage for the second physical attack for this monster.

**A2ToHit:** how much AR (attack rating) does the monster have for this attack.

**S1MinD:** the minimum damage for the first skill.

**S1MaxD:** the maximum damage for the first skill.

**S1ToHit:** the chance to hit for the first skill.

Now back to Column by Column style

Column CQ-HB Treasureclass ### (where ### stands there is a number and difficulty setting but in general all of these work similar), enter the row name from TreasureclassEx to make it drop a specific treasureclass.

**Column HC SpawnPctBonus:** set this to higher values then 0 and the monster will drop more items.

**Column HD soft:** unknown.

**Column HE heart:** was used to spawn the heart organs now disabled since MonItemPercent.txt has no function any more.

**Column HF BodyPart:** Was used to spawn body parts now disabled since MonItemPercent.txt has no function any more.

**Column HG killable:** can this monster be killed? 1 means yes 0 means no, set this to 0 for golems or Diablo to cause confusion in multiplayer games on open, such as lamers that want to close your game cant kill Diablo now, and you can have a infinite number of golems, but take care, if u have about 50 golems they will over load the graphical limits and cause clients to drop.

**Column HH Switch:** this has to do with revive set it to 1 to revive any monster.

**Column HI Restore:** unknown

**Column HJ NeverCount:** unknown

**Column HK HitClass:** open HitClass.txt for more info.

**Column HL SplEndDeath:** unknown

**Column HM SplGetModeChart:** unknown

**Column HN SplEndGeneric:** unknown

**Column HO SplclientEnd:** unknown, has to do with client/server issues on multiplayer.

**Column HP DeadColission:** determines if the corpse can be walked above or not (Duriel etc).

**Column HQ unflatdead:** unknown maybe has to do with a monster exploding when its dead.

**Column HR BloodLocal:** unknown

**Column HS DeathDamage:** does this monster do damage when it dies (undead fetishes etc)

**Column HT Petignore:** unknown. Maybe determines if the monster will go strait for the player and not for his minions.

**Column HU NoGfxHitTest:** unknown.

**Column HV HitTestTop:** unknown.

**Column HW HitTestLeft:** unknown.

**Column HX HitTestWidth:** unknown.

**Column HY HitTestHeight:** unknown.

**Column HZ GenericSpawn:** might have to do if the monster can appear only in act 5 of d2x or not.

**Column IA AutomapCel:** might be a replacement for the NoMap Column not tested thought.

**Column IB SparsePopulate:** untested.

**Column IC zoo:** seams to be set for revive able like skeletons, fallen unknown what its function is.

Column ID Object collision: unknown.

Column IE inet: Unknown.
