---
title: MonStats.txt
summary: >-
  In this tutorial, I'll provide you with all the information I've uncovered so
  far in the monstats.txt file in Diablo 2. This tutorial is largely incomplete
  as there are still numerous columns that I…
keepId: 383
author: Nefarius
credit: by Fecesfaerie
posted: '2006-06-21'
views: 8164
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=383'
---
In this tutorial, I'll provide you with all the information I've uncovered so far in the monstats.txt file in Diablo 2. This tutorial is largely incomplete as there are still numerous columns that I don't yet understand. Hopefully, it will be completed in time with further study and the help of any other hackers out there willing to share their secrets. The first part of this tutorial simply lists all the columns in this file by name and gives a description of what they do if known. Since some of us use a spreadsheet program like excel to view and edit these files, I'll also refer to these columns by the letter at the top of the spreadsheet as well as their name. The second part of this tutorial will go over a few simple tricks on what you can do with this file.

Part I:  
Class (column A): This determines what name appears over the monster's head when  
you move the mouse over it.

Namco (column B): I've heard (but not extensively tested) that this determines what  
animation file is generated for a monster. (Nefarius: infact this is controlled by the token column in MonType.txt - not this column.)

Type (column C): Identifies monster by type.

Discriptor (column D): Short comment to describe any special or unusual attribute of this  
monster. For example, all the giant maggot monsters can lay eggs, so that ability is listed  
in this column beside their name.

Base ID (column E): A simple number that identifies what type of enemy this is. All  
monsters of the same type generally have the same ID. This ID seems to determine what  
kind of abilities or skills the game generates for that monster when it appears in the game.  
For example, you may have noticed the monster entries for the Rogue Scout, Rogue  
Hireling, and Rogue Town. They each have different ID's because they have some  
different behavior. The Rogue Town monsters are the rogues in the Act I town who  
simply stand there. A Rogue Scout and Rogue Hireling will move around and shoot  
nearby monsters, but the Rogue Hireling seems different because it seems to reference  
other files besides this monstats.txt to get all of its abilities (such as randomly generated  
levels and magic arrow attacks). Changing these ID's causes the game to expect later  
columns to have specific things set for them (like certain skills), so be aware of this if you  
decide to go manipulating these numbers.

Spawned (column F): This value is set for zero or one for every monster. A one means  
that monster can be randomly generated in a level. A zero means that monster can't. If  
you want monsters like bosses to appear in areas other than they normally do (like the  
Cow Level) then set this value to one. In part two, I'll describe what else needs to be  
done to get that enemy to appear in the level of your choosing.

Beta (column G): Determines if the monster appeared in the beta version of the game.  
Seems to be only for reference.

Code (column H): Another identifier for a monster along with Base ID. (Nefarius: controlls from what token-folder the palshift.dat is picked.)

Client Only (column I) and NoMap (column J): These are set at either zero or one. Not  
exactly sure what they do, but every monster either has both set to zero or both set to one.  
Only the little critters that appear running around (bats, rats, scorpions, etc.) have this set.  
It seems to be special settings for monsters that don't do much more than act as scenery.

Size X, Size Y, Height, Overlay Height (columns K-N): Determines the physical  
dimentions of the monster. (Nefarius: these columns function as for 1.10+ \[MonStats2.txt\])

Velocity (column O): The walking speed of the monster.

Run (column P): The running speed of the monster. There's a later column that controls  
if the monster has the ability to run at all. If it doesn't, this column is unused for that  
monster.

Rarity (column Q): Seems to control frequency of appearance. (Nefarius: not used prior to 1.10)

Level, Level(N), Level(H) (columns R-T): Determines what level this monster is on in  
each difficulty.

Melee Rng (column U): Determines the reach of a monster's melee attack. The higher  
the value, the further distance a monster can hit you with its melee attack.

Min Grp (column V): Determines the minimum number of monsters of this type that are  
spawned at a time. You've noticed that some monsters (like cows) appear in larger  
groups than others. Most monsters have this set around 1 to 3. Hell Bovines have it set  
at 5. Increase this number to make larger minimum monster groups.

Max Grp (column W): Determines the maximum number of monsters of this type that  
are spawned at a time. Make sure this value is the same or higher than Min Grp if you  
decide to change these values. Most monsters have this column set around 2 to 4. Hell  
Bovines have it set at 10.

(Nefarius: pre 1.10 it was impossible to modify which components a monster has, it was handled by a hardcoded table - the columns below are used after that table has been loaded, and thus serve no real purpose. )  
HD (column X): Stands for head. Not sure of its significance. I think it has something to  
do with wheather or not that enemy can have something equipted on its head.

TR (column Y): Stands for torso.

LG (column Z): Stands for legs.

RA (column AA): Unknown. (Nefarius: right arm )

LA (column AB): Unknown.(Nefarius: left arm )

RH (column AC): Unknown.(Nefarius: right hand )

LH (column AD): unknown.(Nefarius: left hand )

SH (column AE): Stands for shield. I think it determines if the monster can equip a  
shield or not.

S1 (column AF): Some kind of setting for specials. Not sure what it means. (Nefarius: overlay 1)

S2 (column AG): unknown(Nefarius: overlay 2)

S3 (column AH): unknown(Nefarius: overlay 3)

S4 (column AI): unknown(Nefarius: overlay 4)

S5 (column AJ): unknown(Nefarius: overlay 5)

S6 (column AK): unknown(Nefarius: overlay 6)

S7 (column AL): unknown(Nefarius: overlay 7)

S8 (column AM): unknown(Nefarius: overlay 8)

TotalPieces (AN): unknown  
(Nefarius: number of components)  
SpawnComponets(AO): Unknown, but every monster has it set to zero, so it's probably  
not important.

BaseW (AP): Base weapon that the monster carries when it appears. Several monsters  
have an hth listed in this column. This means either the monster uses no weapon, or the  
weapon it uses is not referenced in this file (the rogue scouts and hirelings have hth set  
here).(Nefarius: back in classic changing this allowed you to make necro skeletons use a bow etc, never featured in a mod, but doable.)

AIParam 1-AIParam 5 (columns AQ-AY): These columns determine the AI parameters  
for the monsters. The comment field after some entries give a description of what the AI  
parameter causes the monster to do.

ModeDH (column AZ): This is set to one if the monster can die. It's set to zero if it  
can't. Some monsters, like rogues or other hirelings that appear in town may have this  
set at zero. You can set it to one without causing any problems, but to make that monster  
actually killable you also have to set a couple of other columns that appear later.

ModeN (column BA): unknown. (Nefarius: neutral)

ModeW(column BB): Determines if the monster can walk or move. One means yes, zero  
means no.

ModeGH(column BC): GH stands for get hit. This column determines if a monster can  
be attacked. One means yes; zero means no.

ModeA1(column BD): Determines if the monster has a physical attack (usually melee  
but not necessarily). One means yes; zero means no.

ModeA2(column BE): Determines if the monster has a second physical attack.

ModeB (column BF): Determines if a monster can block a physical attack

ModeC (column BG): Seems to determine if a monster casts spells or not.

ModeS1-ModeS4 (column BH-BL): unknown(Nefarius: Skill1 to Skill4 anims)

ModeDD (column BM): Another column that determines if a monster can die or not. As  
usual, one means yes; zero means no. (Nefarius: has corpse, yes/no)

ModeKB (column BN): Determines if a monster can be knocked back by certain attacks.

ModeSQ (column BO): Some kind of sequence field. Not sure what it controls. (Nefarius: can use skill sequence yes/no)

ModeRN (column BP): Determines if a monster can run or not.

ElMode (column BQ): Some kind of setting for an element attached to a monster that  
used when it attacks you.

Eltype (column BR): The type of element associated with that monster. An example  
would be the Claw Vipers who have the ability to freeze a character when they attack  
them. Their element type is cold.

ElOver (column BS): unknown (Nefarius: display an overlay when using element)

ElPct (column BT): Percent chance that the particular element will take effect when the  
monster attacks.

ElMinD (column BU): Minimum damage caused by the elemental attack.

ElMaxD (column BV): Max damage caused by the elemental attack.

ElDur (column BW): Duration that the elemental attack has affect over the targeted  
character. Cold and Poison attacks have something set in this column. The actual  
duration of this attack is (number in column / 25= #seconds element has effect).  
(Nefarius: the following columns are missile indexes, FFFF = no missile)  
MissA1 (column BX): Not sure beyond that it has some association with an enemy's first  
physical attack.

MissA2 (column BY): Has something to do with enemy's second attack.

MissS1 (column BZ): unknown

MissS2 (column CA): unknown

MissS3 (column CB): unknown

MissS4 (column CC): unknown

MissC (column CD): unknown

MissSQ (column CE): Somehow relates to whatever a monster's sequence is.

A1Move (column CF): unknown

A2Move (column CG): unknown

S1Move (column CH): unknown

S2Move (column CI): unknown

S3Move (column CJ): unknown

S4Move (column CK): unknown

Cmove (column CL): Not set for any monster, so doesn't seem to be used.

Align (colimn CM): This determines if a monster is an enemy or an ally. You can have a  
lot of fun with this column. Set it to one, and that monster will fight other monsters and  
not attack you. Set it to zero to make any monster an enemy.

IsMelee (column CN): Determines if the monster is a melee fighter. (Nefarius: spawn with multi-shot? yes/no)

IsSel (column CO): Determines if the monster is 'selectable.' What that means is, if it's  
set to one then moving the cursor over that monster's body will cause his/her name to  
display. It will also allow you to target a monster with attacks by moving the mouse  
cursor over it.

IsSel2 (column CP): Not sure what this one does. Only a few NPC's have it set though.

NeverSel (column CQ): This determines if the monster can not be selected. It's basically  
the opposite of IsSel. In fact, if this column is set to one for a monster, than even if you  
set IsSel to one, you still can't highlight that monster by moving the mouse over it.

CourpseSel (column CR): This determines if the monster's courpse can be selected for  
certain spells after it dies. Examples of spells are, Raise Skeleton, Corpse Explosion,  
Find Potion, and Grim Ward. Set it to one to allow a character to use this skill on that  
dead monster. You may notice that the Abyss Knight in Act 4 can have some courpse  
selected spells cast on it, but a Necromancer can't revive it. There's another field that  
controls that. It appears towards the end of the file.

IsAtt (column CS): This determines if the monster can be attacked.

IsNPC (column CT): Determines if the monster is an NPC or not.

IsCritter (column CU): Determines if the monster is a critter. Critters are those little  
crawling monsters like scorpions and rats.

InTown (column CV): Determines if the monster can appear in or enter a town. Set it to  
one for an enemy monster and it'll walk right into town to chase you. It won't be able to  
attack you in town though.

Bleed (column CW): Determines if the monster bleeds when you attack it.

Shadow (column CX): Determines if the monster casts a shadow.

Light (column CY): This determines how much of a light radius the monster creates  
around him. The higher the number, the greater the light it creates.

NoUniqueShift (column CZ): unknown (Nefarius: prevent bosses from using RandTransforms.dat)

CompositeDeath (column DA): unknown (Nefarius: death anim composed of more then one component.)

Skill1 (column DB): This is the first skill that a monster possesses. You can look in  
skills.txt to see a full listing of all skills in the game. Each skill has an ID number. That  
id number is what appears in this file. One thing to note is that changing the skill number  
in this column does not seem to affect what skill the monster actually possesses. I think  
the skill number is listed here just for reference, and the actual monster's skills is  
determined by its ID number.

Skill1Seq (column DC): Some kind of sequence involved with a skill. I haven't messed  
with this field.

Skill1Lvl (column DD): What skill level the first skill is on. Monsters have levels  
associated with their skills just like characters do. Changing this value will change how  
strong that skill is for the monster.

Skill2-Skill5, Skill2Seq-Skill5Seq, Skill2Lvl-Skill5Lvl (columns DE-DP): Same as the  
fields for the first skill. They just affect the 2nd, 3rd, 4th, and 5th skills a monster has.

LightR: (column DQ): I haven't messed with this one, but I imagine it stands for light  
red, and affects the color of the monster.

LightG: (column DR): Stands for light green.

LightB: (column DS): Light blue.

Damage Resist (column DT): Determines what percentage of a character's attack does  
not hurt the monster. For example, if you hit the monster for 200 points of damage, and  
the monster had a damage resist of 10, then the monster would lose 180 hit points.

Magic Resist (Column DU): Determines what percentage of magic damage does not  
affect the monster. I'm not sure if magic resistance works as a general resistance towards  
all magic (including poison, fire, lightning, and cold) or just a resistance to cover all  
forms of magic other than the elemental ones. For example, resistance against an attack  
like bone spear probably falls under this category.

Fire Resist (Column DV): Determines what percentage of fire attacks a monster ignores.

Lightning Resist (Column DW): Determines what percentage of lightning attacks the  
monster ignores.

Cold Resist (Column DX): Determines what percentage of cold attacks the monster  
ignores.

Poison Resist (Column DY): Determines what percentage of poison attacks a monster  
ignores.

DamageResist(N) (Column DZ): Determines a monster's damage resistance for  
Nightmare difficulty.

MagicResist(N) (Column EA): Magic resist for Nightmare.

FireResist(N) (Column EB): Fire resist for Nightmare.

LightningResist(N) (Column EC): Lightning resist for Nightmare.

ColdResist(N) (Column ED): Cold resist for Nightmare.

PoisonResist(N): (Column EE): Poison Resist for Nightmare.

(Columns EF-EK): Resistances for Hell difficulty.

DamageRegen (Column EL): Determines the rate at which a monster recovers hit points.  
this is similer to the life replenish ability some magic items have.

eLUndead (Column EM): The first of two columns that can determines if a monster is  
undead. Basic undead like skeletons and mummies have this column set. Wheather or  
not a monster is undead will affect how much damage certain weapons do against it.

eHUndead (Column EN): The second undead field. I'm not sure what the difference is  
between this one and the first one, but the undead who have this field set tend to be the  
more magically oriented undead like Vampires, Greater Mummies, and Mephisto.

eDemon (Column EO): Determines if the monster is a demon. Again, this will determine  
how much damage certain weapons do against these monsters.

eMagicUsing (Column EP): Determines if the monster is a spell caster.

eLarge (Column EQ): Determines if the monster is classified as 'large.' This won't  
affect how the monster appears on screen. It again affects damage obtained by certain  
weapons.

eSmall (Column ER): Classifies a monster as small.

eFlying (Column ES): Classifies a monster as flying. I don't know if setting this column  
to one for a monster that has it at zero will actually give the monster the ability to fly (i.e.  
walk over walls or rivers) or just affect how much damage weapons do against them.

eOpensDoors (Column ET): Determines if a monster can open doors or not.

eSpawnCol (Column EU): unknown (Nefarius: how the unit is spawned: 0 = use m1-25 columns, 1 = DS1 generated only, 2 = use s1-25 columns)

eBoss (Column EV): Determines if an enemy is classified as a boss (Duriel, Diablo, etc.).  
This field is usually best left alone unless you want to make clones of bosses (more on  
that later). Making an enemy a boss tends to crash the game when you kill it. You'll get  
a message along the lines of 'error, boss not in table.' I don't know where this table it  
refers to is located.

PixHeight (Column EW): Not sure it does anything since changing it doesn't change  
how tall or short a monster appears. (Nefarius: overlay offset)

Interact (Column EX): You've noticed throughout the game that moving the mouse  
corsor over someone displays differently for different monsters. More specifically,  
moving the cursor over a monster displays its name inside a life bar while moving it over  
a townsperson will display its name in white. This column determines which appears.  
Set to zero to show the name inside the life bar. set to one to display the name in white.

MinHP (Column EY): The smallest number of hitpoints a monster can have when it's  
generated in Normal difficulty.

MaxHP (Column EZ): The largest number of hitpoints a monster can have when it's  
generated in Normal difficulty.

AC (Column FA): This is the enemy's defense for Normal difficulty. The higher it is,  
the harder it is to hit the monster.

EXP (Column FB): How much exp you get from killing this monster in Normal  
Difficulty.

ToBlock (Column FC): This determines the percentage chance a monster has to block an  
attack (assuming it's capable of blocking an attack). One thing to keep in mind, is that  
this number sets its blocking ability for all three difficulties.

A1MinD (Column FD): Determines the minimum amount of damage the monster does  
with its first physical attack.

A1MaxD (Column FE): Determines the maximum amount of damage the monster does  
with its first physical attack.

A1ToHit (Column FF): Determines the attack rating the monster has with its first hysical  
attack. the higher it is, the more likely it is to hit someone with this attack.

A2MinD (Column FG): Determines the minimum damage of the monster's second  
physical attack (if it has one).

A2MaxD (Column FH): Determines the max damage of a monster's second physical  
attack in Normal difficulty.

A2ToHit (Column FI): Determines the attack rating of the monster's second physical  
attack.

S1MinD (Column FJ): Determines the min damage done by a special attack. This field is  
used mostly by traps.

S1MaxD (Column FK): Determines the max damage done by a special attack.

S1ToHit (Column FL): Determines the attack rating of a special attack.

MinHP(N) (Column FM): The smallest number of hitpoints a monster can have when it's  
generated in Nightmare difficulty.

MaxHP(N) (Column FN): The largest number of hitpoints a monster can have when it's  
generated in Nightmare difficulty.

AC(N) (Column FO): This is the enemy's defense for Nightmare difficulty. The higher  
it is, the harder it is to hit the monster.

EXP(N) (Column FP): How much exp you get from killing this monster in Nightmare  
Difficulty.

A1MinD(N) (Column FQ): Determines the minimum amount of damage the monster  
does with its first physical attack.

A1MaxD(N) (Column FR): Determines the maximum amount of damage the monster  
does with its first physical attack.

A1ToHit(N) (Column FS): Determines the attack rating the monster has with its first  
hysical attack. the higher it is, the more likely it is to hit someone with this attack.

A2MinD(N) (Column FT): Determines the minimum damage of the monster's second  
physical attack (if it has one).

A2MaxD(N) (Column FU): Determines the max damage of a monster's second physical  
attack in Nightmare difficulty.

A2ToHit(N) (Column FV): Determines the attack rating of the monster's second  
physical attack.

S1MinD(N) (Column FW): Determines the min damage done by a special attack. This  
field is used mostly by traps.

S1MaxD(N) (Column FX): Determines the max damage done by a special attack.

S1ToHit(N) (Column FY): Determines the attack rating of a special attack.

(Columns FZ-GL): Monster stats for hell difficulty.

TreasureClass1-4 (Columns GM-GP): The numbers in the treasure class fields determine  
what kind of items monsters drop when you kill them. You can see what these fields are  
by looking in TreasureClasses.txt and looking at the column numbers. The number listed  
in the monstats.txt file is the row of the file in TreasureClasses.txt – 1 (I think).

TreasureClass1-4(N) (Columns GQ-GT): Determines the items a monster drops in  
nightmare difficulty.

TreasureClass1-4(H) (Columns GU-GX): Determins the items a monster drops in hell  
difficulty.

SpawnPctBonus (Column GY): This is a fun column to play around with. This column  
determines any percentage bonuses to a monster's chances of dropping an item when you  
kill it. Set it to something around 100, and they'll drop items like mad (and they'll often  
be magical).

Soft (Column GZ): unknown (Nefarius: soft or hard skinned foe.)

Heart (Column HA): unknown, but every monster has it set to xxx. (Nefarius: set to an item code, the monster will drop this item if MonItemPercent.txt is edited)

BodyPart (Column HB): Unknown, but every monster has it set to xxx. (Nefarius: set to an item code, the monster will drop this item if MonItemPercent.txt is edited)

Killable (Column HC): The last column that determines if a monster can be killed.  
Almost everything has this column set.

Switch (Column HD): Remember when I said earlier that the ability of Reveive to work  
on a monster was set by something other than the CourpseSel solumn? Well, this is that  
column. Set to one to make Revive work on this enemy's courpse. Set to zero to make it  
not work.

Restore (Column HE): unknown

Never Count (Column HF): unknown

Hit Class (Column HG): unknown (Nefarius: what hitclass effect is used when it hits something)

SplEndDeath (Column HH): unknown (Nefarius: as for all subsequent versions, just that the absence of minion columns makes this here useless)

SplGetModeChart (Column HI): unknown

SplEndGeneric (Column HJ): unknown

SplClientEnd (Column HK): unknown

DeadCollision (Column HL): Determines if an enemy's courpse will block a character's  
path. An example is Duriel's courpse which can't be walked over when you kill him.

UnflatDead (Column HM): unknown

BloodLocal (Cloumn HN): unknown

DeathDamage (Column HO): Haven't tested, but it probably determines how much  
damage a monster does when it dies. (Nefarius: boolean: does damage on death yes/no)

PetIgnore (Column HP): Set to one to make a monster fighting for you (Golem, Valkerie,  
etc.) never attack it.  
(Nefarius: the below work as for 1.10+)  
NoGfxHitTest (Column HQ): unknown

HitTestTop (Column HR): unknown

HitTestLeft (Column HS): unknown

HitTestWidth (column HT): unknown

HitTestHeight (Column HU): unknown

Part II:  
Trick One: Make any monster appear in any area  
You'll need to use levels.txt for this one as well. If you're looking at monstats.txt using  
a spreedsheet program of somekind, notice that the rows are numbered. These numbers-2  
actually give you the monster number for each monster in the game. For example, let's  
look at Hell Bovines (cows). They're on row 393. The monster number for them is 391  
(393-2=391).  
Now open up levels.txt. Scroll left until you see some columns labeled M1, M2, M3,  
etc. You'll see numbers under these columns. These are the monsters that appear in  
these levels. If you look at the entry for the secret cow level you'll notice 391 listed in  
these columns. To the left of the M1 column is the column that determines how many  
different monsters can appear in this level. If you add an entry to the M columns, make  
sure you also change the value in the other column.  
If you want to make a Boss monster like Diablo, Blood Raven or the Summoner appear,  
there's one other thing you need to change. Go to the Spwaned column (column F) in  
monstats.txt file and make the column entry for the monster you want to appear a one.

Trick Two: Cloning a Monster  
This trick is useful if you want to spawn a Boss monster, but you think the boss is too  
hard to fight as a regular enemy. It's also useful to do this in order to get around some of  
the annoyances of killing Bosses. For example, killing a spawned Diablo will trigger the  
counter that ends the game. Killing a spawned Andarial causes a massive explosion that  
kills every other monster within several screens of her. A cloned monster will usually not  
carry over any special death animation with it.  
To actually clone a monster, open up both the monstats.txt file and the file name  
montypes.txt. For my example, I'll clone Diablo.  
\-First go to the entry for Diablo in monstats.txt (Row 245).  
\-Copy that entire row.  
\-Now go to the entry labeled Diablo Clone (Row 335).  
\-Paste the row you copied earlier over this row.  
\-Set the Spawned entry (Column F) to one if you haven't already.  
\-Set the eBoss entry (Column EV) to zero. If you leave it at one, the game will crash  
when you kill this clone.  
\-Now go into montypes.txt  
\-Find Diablo's entry (also row 245).  
\-Copy that entire row.  
\-Find the Diablo Clone entry (Row 335).  
\-Paste what you copied into that row.

And that's it. Go back through and change the stats for you're cloned Diablo if you'd  
like. If you know how to work with string.tbl, you can even give your new Diablo clone  
a different name by inserting it into the string.tbl file and then typing its name in the class  
column in monstats.txt. One thing to note is that sometimes if you copy a large monster  
into another spot, that clone may not display correctly. For example, copying Diablo to  
somewhere other than the Diablo Clone entry may make your new Diablo appear without  
a body, or he may even be invisible. It's best to use on of the unused rows in the  
monstats.txt file to create your clones (there are at least 20 of them, so don't worry about  
running out unless you're really imaganitive). Do not place your copied monster at the  
end of the monstats.txt file after the last monster entry. The game will crash if you do.

Trick 3: Kill Jar-Jar!  
Okay, so you're not really killing the Star Wars Jar-Jar, but you may have noticed that  
the namco for Kaleen in the monstats.txt file lists Jar-Jar. Well, Kaleen's pretty annoying  
too ('you may not pass' 'you may not pass' blah blah blah). While I don't know how to  
make attacks work in town, you can make the character killable and then spawn him in  
some other area of the game. Here's what to do, and this will work on other characters  
that look like hirelings in the game.  
\-Set ModeDH (Column BA) to one if it isn't set already.  
\-Set ModeGH (Column BD) to one if it isn't already.  
\-Set ModeDD (Column BM) to one.  
\-Set Align (Column CM) to zero.  
\-Make sure the IsSel entry (Column CO) is set to one.  
\-Make sure NeverSel (Column CR) is set to zero.  
\-Set IsAtt (Column CS) is set to one.  
\-Set Interact (Column EX) to zero.  
\-Make sure Killible (Column HC) is set to one.

And there you have it. You can try this on other NPC's as well like the guards in each  
act. The game tends to crash if you use these settings to make important NPC's like Cain  
or Izual killable though.
