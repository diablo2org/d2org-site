---
title: Matching New Monster Animations to an AI (by I_Burner)
summary: This tutorial helps solve AI problems when adding new animation tokens.
keepId: 286
author: Phrozen Heart
posted: '2007-05-04'
views: 9296
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=286'
---
A frequent source of trouble for modders attempting to add new monster animations to the game is attempting to find the right AI to use with them. A wrong AI choice can leave you with a monster that disappears when trying to use missing animation modes, or otherwise does not work properly. Here, I will layout some quick tips for picking an AI to match your animations, as well as a very easy technique for making any monster animation work with any AI. This tutorial was written for use with D2:LoD v1.10.

Files needed:  
\- animdata.d2  
\- monstats2.txt  
\- skills.txt (may not always be needed)  
\- DCC and COF files, with animdata entries (a new token plugin is usually easiest to work with)

Tools needed:  
\- animdata\_edit  
\- COFEDIT (may not always be needed)  
\- spreadsheet editor of your choice

Reccommended reading:  
\- Diablo II Animation Conversion Extended Tutorial  
\- Adding New Monsters with New Tokens  
\- Creating a New Token from Existing DCC animations  
\- Monster Sequence Tutorial

Picking an AI (Basic):  
The first topic we will look at is simply how to pick an AI that will work with an animation you are trying to add to the game. First, take a look at the animation files you have chosen, and take note of what modes they have (“A1”, “A2”, “GH”, etc). One way to pick an AI that will work is to simply open up monstats2.txt, scroll over to the columns “mDT” through “mRN”, and scroll through the file to find monsters that have a “1” in every mode that your animations possess. To make this a little easier, I have compiled a list of most of the useful AIs and the animation modes that they make use of (included at the end of this tutorial).  
There are a few things to keep in mind when using this method. A few of the modes listed in monstats2 don’t actually refer to files, namely “KB” and “SQ”. “KB” denotes if the monster is affected by knockback, and “SQ” shows that the monster has one or more skills that use a sequence from monseq.txt. Depending on the skills you want your new monster to use, you may have some flexibility here. Many AIs are for monsters that are summoned or resurrected at some point, which may either use a sequence, an “S1” animation mode, or a combination of both. If your new monster is not going to make use of this ability, you can ignore those modes (be sure to clear these columns in the monstats2 row you will be using). Also, some skills can be used with several modes. Some will let you interchange modes like “S1”, “SC”, or “A2”. Others, like Nest, only seem to accept sequences or a specific mode. Take a look in skills.txt at the columns “anim”, “seqtrans”, and “monanim”. These can give you some clues about what modes the game typically accepts if you are having trouble with this. Also, check out kingpin’s excellent tutorial on monster sequences to learn how to make sequences for your monsters.

Matching an Animation to an AI (Advanced):  
OK, so you’ve tried using the basic method, but you really had your heart set on using a specific AI and your animation just won’t work with it. Fear not! You can clone existing animation modes to make up for ones you are missing, and it’s really quite easy to do. Lets say your chosen AI uses a run animation, but your new monster doesn’t have one. You can fix this very easily by making copies of your “WL” DCCs and COFs and renaming them. Then, using animdata\_edit, copy the WL entry for the token you are using to a new row, and change “WL” to “RN”. Make sure “mRN” has a “1” in it in the monstats2 row this monster will use. Simple, isn’t it? This will work for any of the other animation modes, but does have an extra consideration for attack and cast modes. Modes like “A1”, “A2”, “SC”, etc. typically have triggers set in their COFs and animdata entries. In order to make sure any modes like this that you create by cloning work properly, always start with another mode that uses an event trigger. It is also very important NOT to create a death animation (“DT”) from a mode with a trigger in it, as this results in an invincible, auto-resurrecting enemy (although some of you might want such a thing).  
Lastly, remember that if for any reason you want to add or remove a trigger from an animation mode, you must create a new COF file for it. For example, if you want to use an “NU” mode as the basis for a new “SC”, you can’t just rename the files and entries as there is no information contained in the “NU” mode to tell the game when to actually cast the skill. In your new SC animdata line, place a “1” or “2” in the frame you want to use as your trigger. Now, use COFEDIT to generate a new COF based on your new “SC” animation, with the appropriate trigger and frame set in the COFEDIT .ini file (or edit the COF files manually with a hex editor, if you prefer).

Well, that should about cover it! As always, happy modding!

AI/Animation Mode Reference Chart

For your convenience, I have compiled a list of animation modes used by most of the monster AI choices.

AbyssKnight - DT,NU,WL,DD,GH,A1,S1,S3  
Ancient - DT,NU,WL,DD,GH,BL,A1,A2,SC,S1  
Andariel - DT,NU,WL,DD,GH,A1,SC  
Arach - DT,NU,WL,DD,GH,A1,A2  
ArcaneTower - DT,NU,DD,A1  
AssassinSentry - DT,NU,DD,S1,S2  
BaalCrab - DT,NU,WL,DD,A1,A2,SC,S1,S2,S3  
BaalCrabClone - DT,NU,WL,DD,A1,A2,SC,S1,S2,S3  
BaalMinion - DT,NU,WL,DD,GH,A1,A2  
BaalTentacle - DT,NU,DD,GH,A1,S1(summon)  
Baboon - DT,NU,WL,DD,GH,A1,A2  
BatDemon - DT,NU,WL,DD,GH,A1,S2,S3,S4  
Bighead - DT,NU,WL,DD,GH,A1,A2  
BladeCreeper - DT,NU,WL,DD,S1  
Bloodhawk - DT,NU,WL,DD,GH,A1  
BloodLord - DT,NU,WL,DD,GH,A1,A2  
BloodRaven - DT,NU,WL,DD,GH,A1,S1,RN  
BoneWall - DT,NU,DD,GH,S1(summon)  
Brute - DT,NU,WL,DD,GH,A1,A2  
Catapult - DT,NU,DD,A1  
ClawViper - DT,NU,WL,DD,GH,A1,A2  
ClawViperEx - DT,NU,WL,DD,GH,A1,A2  
CorruptArcher - DT,NU,WL,DD,GH,A1,RN  
CorruptLancer - DT,NU,WL,DD,GH,A1,RN  
CorruptRogue - DT,NU,WL,DD,GH,A1,BL,RN  
CycleOfLife - DT,NU,WL,DD,A1,S1  
DeathMauler - DT,NU,WL,DD,GH,A1,A2  
DeathSentry - DT,NU,DD,S1,S2  
DesertTurret - DT,NU,DD,A1  
Diablo - DT,NU,WL,DD,A1,A2,BL,SC,S1,S2,S3,S4,RN  
DoomKnight - DT,NU,WL,DD,GH,A1,BL,S3  
DruidBear - DT,NU,WL,DD,GH,A1,A2,S1  
DruidWolf - DT,NU,WL,DD,GH,RN,A1,A2,S1  
Duriel - DT,NU,WL,DD,GH,A1,A2  
ElementalBeast - DT,NU,WL,DD,S1  
EvilHole - DT,NU,DD,S3,S4  
Fallen - DT,NU,WL,DD,GH,A1,A2,BL,S1(raise),S2(taunt)  
FallenShaman - DT,NU,WL,DD,GH,A1,A2  
Fetish - DT,NU,WL,DD,GH,A1  
FetishBlowgun - DT,NU,WL,DD,GH,A1  
FetishShaman - DT,NU,WL,DD,GH,A1,SC  
Fingermage - DT,NU,WL,DD,GH,A1,S1  
FlyingScimitar - DT,NU,WL,DD,GH,A1,S1(summon)  
FrogDemon - DT,NU,WL,DD,GH,A1,A2,S1(emerge)  
FrozenHorror - DT,NU,WL,DD,GH,A1,A2  
FoulCrowNest - DT,NU,S1,DD  
GargoyleTrap - DT,NU,DD,GH,A1  
Goatman - DT,NU,WL,DD,GH,A1  
GreaterMummy - DT,NU,WL,DD,GH,A1,A2,SC  
Griswold - DT,NU,WL,DD,A1  
HighPriest - DT,NU,WL,DD,GH,A1,S1  
Hydra - DT,NU,DD,A1,S2  
Imp - DT,NU,WL,DD,GH,A1,SC,S1,S2  
Izual - DT,NU,WL,DD,GH,A1,SC  
MaggotLarva - DT,NU,WL,DD,GH,A1,A2,S1(spawn)  
MegaDemon - DT,NU,WL,DD,GH,A1,S1  
Mephisto - DT,NU,WL,DD,GH,A1,A2  
Minion - DT,NU,WL,DD,GH,A1,A2  
Mosquito - DT,NU,WL,DD,GH,A1,A2  
MosquitoNest - DT,NU,DD,S1  
Mummy - DT,NU,WL,DD,GH,A1,A2,S1(raise)  
NecroPet - DT,NU,WL,DD,A1,S1(summon)  
Nihlathak - DT,NU,WL,DD,GH,A1,A2  
NpcBarb - DT,NU,WL,DD,RN,A1,A2  
OblivionKnight - DT,NU,WL,DD,GH,S1,S2,S3  
Overseer - DT,NU,WL,DD,GH,A1,A2,S1,S2  
PantherJavelin - DT,NU,WL,DD,GH,A1,BL  
PantherWoman - DT,NU,WL,DD,GH,A1,BL  
PinHead - DT,NU,WL,DD,GH,A1,A2  
PutridDefiler - DT,NU,WL,DD,GH,A1,S1,S2  
QuillMother - DT,NU,WL,DD,GH,A1  
Quillrat - DT,NU,WL,DD,GH,A1,A2  
Raven - DT,NU,WL,DD,A1,S1(summon)  
ReanimatedHorde - DT,NU,WL,DD,GH,RN,A1,A2,S1(raise)  
Regurgitator - DT,NU,WL,DD,GH,A1,A2,S1(eat)  
SandLeaper - DT,NU,WL,DD,GH,A1,A2  
SandMaggot - DT,NU,WL,DD,GH,A1,A2,S1(burrow)  
SandMaggotQueen – DT,NU,S1,DD  
Sandraider - DT,NU,WL,DD,GH,A1,A2  
Sarcophagus – DT,NU,S1,DD  
Scarab - DT,NU,WL,DD,GH,A1,A2  
ShadowMaster - DT,NU,WL,DD,GH,BL,A1,A2,SC,S1,S2,S3,S4,RN  
ShadowMasterNoInit - DT,NU,WL,DD,GH,BL,A1,A2,SC,S1,S2,S3,S4,RN  
ShadowWarrior - DT,NU,WL,DD,GH,BL,A1,A2,SC,S1,S2,S3,S4,RN  
SiegeBeast - DT,NU,WL,DD,GH,A1,A2  
SiegeTower – DT,NU,GH,DD  
Skeleton – DT,NU,WL,DD,GH,A1,A2,BL,S1(summon)  
SkeletonBow - DT,NU,WL,DD,GH,A1,S1(summon)  
SkeletonMage - DT,NU,WL,DD,GH,A1,A2,BL,S1(summon)  
Smith - DT,NU,WL,DD,GH,A1  
Succubus - DT,NU,WL,DD,GH,A1,S2  
SuccubusWitch - DT,NU,WL,DD,GH,A1,S2  
SuicideMinion - DT,NU,WL,DD,S1  
Summoner - DT,NU,WL,DD,GH,S1,SC  
Swarm - DT,NU,WL,DD,GH,A1  
Tentacle - DT,NU,DD,GH,A1,S1(emerge)  
TentacleHead - DT,NU,DD,GH,A1,S1(emerge)  
ThornHulk - DT,NU,WL,DD,GH,A1,A2  
Totem - DT,NU,WL,DD  
TrappedSoul - DT,NU,DD,A1,A2,S1,S2,S3  
Vampire - DT,NU,WL,DD,GH,A1,SC  
VileDog - DT,NU,WL,DD,GH,A1  
VileMother - DT,NU,WL,DD,GH,A1,S1  
Vines - DT,NU,WL,DD,A1,S1(summon)  
Vulture - DT,NU,WL,DD,GH,A1,S1,S2  
WillOWisp - DT,NU,WL,DD,GH,A1,SC,S1(appear)  
Wraith - DT,NU,WL,DD,GH,A1  
ZakarumPriest - DT,NU,WL,DD,GH,A1,S1  
ZakarumZealot - DT,NU,WL,DD,GH,A1,A2,RN  
Zombie - DT,NU,WL,DD,GH,A1,A2,S1(summon),RN

---

For further information and discussion, check out [the designated thread](https://d2mods.info/forum/viewtopic.php?t=23804).
