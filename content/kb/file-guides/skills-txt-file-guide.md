---
title: Skills.txt File Guide
summary: >-
  SKILLS.TXT-Beastly Huge File. now with 256 columns. Some of this info was
  taken from the 1.09 guide, some was figured out with help from the 1.09 guide.
  Joel will grind some of this down to make sure…
keepId: 350
author: Nefarius
credit: by Thendain (corrections by Joel and subsequent corrections by Nefarius)
posted: '2005-10-18'
views: 18206
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=350'
---
SKILLS.TXT-Beastly Huge File. now with 256 columns. Some of this info was taken from the 1.09 guide, some was figured out with help from the 1.09 guide. Joel will grind some of this down to make sure it is right, and do most of the testing on it. Here is what i got, good luck, happy reading, and excuse me while i go take a huge dose of aleve and rest....

Correction made by me are in red. Joel

skill=skill name

Id=skill id number

charclass=who can use

skilldesc=player/item skill name excepting delerium charge

srvstfunc=Server Starting function like in the 1.09 DLL skill table. Now this is just a number and they need to be swapped to swap skill effect or create new.

srvdofunc=Server FInishing function like in the 1.09 DLL. Same remark as above, all the skill swap play here almosT.

prgstack=progressive stack No idea what it is

srvprgfunc1,2,3=server controlled attack function with progressive skills  
prgcalc1,2,3=calculations to call for assassin progressive skills  
prgdam=type of damage released by assassin progressive skills  
The progressive stuff is maybe related to charge-up. Can we create new ones ?

srvmissile=server controlled missile type (from missiles.txt)

decquant=decrease quantity for zon attack

lob=54X : It's to know if th emisisle is launched in an arc or in a straight line.

srvmissilea,b,c=server calls to Missile.txt for type

srvoverlay=server controlled overlay image name?

aurafilter=hard to tell...might have something to do with who it  
affects....can't tell right now  
aurastate=effect name on character/mob using aura  
auratargetstate=effect name on who it affects other than char/mob using  
auralencalc=how long it lasts, use skillcalc.txt for equations  
aurarangecalc=how far the aura affect goes.

aurastat1-6=stats affected by aura  
aurastatcalc1-6=calculations used for stats affected.  
auraevent1-3=events that happen in aura. reference events.txt  
auraeventfunc1-3=function call when event happens (where does this GO?!?!??)  
auratgtevent=not used, aura target event?  
auratgteventfunc=not used, aura target event function....?  
Here we can change what the aura do. Life leech aura anyone ???? Note that combined with the satte.txt, an 'aura' can be more than a simpel overlay, like having your char turn into a blakc druid when using it ...

passivestate=name of skill in states.txt  
passiveitype=weapon type from weapons.txt  
passivestat1-5=stats used for passive statistics (necro raising mostly)  
passivecalc1-5=how to figure out each stat (again mostly for necros)  
passiveevent=not used, passive event happens?  
passiveeventfunc=not used, function call on passive events?  
Same as above but for passive skill .... I dunno if aura/passive can work together on the same skills.

summon=name of summon, critter/spell/trap  
pettype=type of pet from pettype.txt  
petmax=max number allowed at once.  
summode=mode of summoned monster see monmode.txt  
sumskill1-5=skillnames that summons Have  
sumsk1-5calc=skill level and ability for skills for summons  
sumumod=not sure. only affects 4 assassin skills and the Overlord's whip??....  
sumoverlay=image overlaid on a summon? only affects dopplezon and minion spawners....  
Change this to make new summon skill or swap summon skill. We can alos add rows to pettype me thinks.

stsuccessonly=  
stsound=starting sound?  
stsoundclass=starting sound class?  
stsounddelay=starting sound delay?

weaponsnd=weapon sound with skill.  
dosound,a,b=sounds that happen when skill is done? seems to happen for monsters too.

tgtoverlay=image applied to target temporarily when hit by skill.  
tgtsound=sound made by skill when affecting a target.  
Hmmm can someone check if ltnghit is set for ltng skills here ?

prgoverlay=progressive image overlay  
prgsound=progressive sound for skill

castoverlay=temporary image overlay on character/mob when skill used.  
cltoverlaya,b=temp image overlay from skills run by client  
Client overlay like in 1.09 DLL skill table.

cltstfunc=not sure... maybe client standard function?  
cltdofunc=not sure... maybe client direct object function?  
cltprgfunc1-3=not sure... maybe client program functions?  
cltmissile -d=Client side calls to Missile.txt  
cltcalc1-3=Client controld calculations for skills  
\*cltcalc1-3 desc=English descriptions of calculations (not used in game.)  
Same effect as svtxxxx but on client (like in the 1.09D skill table.

warp=does skill warp character to new location (1 yes 0 no)  
Used by teleport ???

immediate=aura start immediately? (1 yes 0 no)  
enhanceable=can skill be enhanced? (1 yes 0 no)  
attackrank=no idea...

noammo=does skill not take ammo? (1 no ammo magic arrow)

range=range of physical attack skills h2h=hand to hand, rng=ranged attack, both=use both, none=not used.

weapsel=weapon select? weapon type? looks like a hardcode to me.

itypea1-3=item type needed in right hand to use skill.

etypea1-2=tpot for just attack and left hand Swing....no idea what for.

itypeb1-3=item type needed in left hand to use skill.

etypeb1-2=Not Used.

anim=same us as in 1.09 skill.txt  
seqtrans=same as in 1.09 seq column  
monanim=same as in 1.09  
seqnum=Same as in 1.09  
seqinput=not sure... input needed during sequence?

durability=does skill check durability use of weapon/armor during skill? 1 for yes.

UseAttackRate  
LineOfSight  
TargetableOnly  
SearchEnemyXY  
SearchEnemyNear  
SearchOpenXY  
SelectProc  
TargetCorpse  
TargetPet  
TargetAlly  
TargetItem  
AttackNoMana  
All these are the same as in 1.09

TgtPlaceCheck=for ressurect and ressurect2 only...check for target placement?

ItemEffect=Can the skill appear on a charged or gethit skill prop.

ItemCltEffect=not sure... only used for nova, frost nova, chain lightning...

ItemTgtDo=skill can target item and make it do something? only active on teleport.

ItemTarget=type of target for skill? rather hard to decipher what this is for.

ItemCheckStart=don't know. only has a 1 for hydra and bone prison

ItemCltCheckStart=don't know. only has a 1 for poison/corpse explosion

ItemCastSound=sound for skill used from an item

ItemCastOverlay=image overlay on char when skill is used from item.

skpoints=skill points? Not used.

reqlevel=required level for skill use

maxlvl=max number of skill levels for skill

reqstr=required strength for skill  
reqdex=required dexterity for skill  
reqint=required intelligence for skill  
reqvit=required vitality for skill  
Are they truly used and functionnal ???

reqskill1-3=required skills needed to attain this skill. Can call a skill that has requirements.

restrict=druid only 1 human 2 wereform

State1-3=states other than human required for skill use

delay=time delay in 25ths of a second.

leftskill=able to use skill on left attack button 1 for yes

repeat=continuous skill usage if button held down. 1 for yes.  
Used for inferno, can be used on others ???

checkfunc=check to make sure of item/condition for use. various numbers.

nocostinstate=only used for werewolf/bear. 1 for no cost.

usemanaondo=only has a 1 for blade fury, maybe costs full mana for each use even if continuous?

startmana=for continuous skills, amount of mana for start of use.

minmana=minimum mana for skill use?

manashift=the equation is 1/2^(9-manashift) so the higher the mana shift the lower the multiplier for how much mana is needed for the skill. 8=1, 7=.5, 6=.25, 5=.125, 4=.0625 (1, 1/2, 1/4, 1/8, 1/16).

mana=mana needed for skill, affected by manashift

lvlmana=how much more (or less) mana is needed per level of the skill before manashift

interrupt=skill interruptible? 1 for yes.

InTown=can skill be used in town? 1 for yes.

aura=is skill an aura. 1 for yes.

periodic=does skill attack periodically for you? 1 for yes. (thunderstorm/blade shield)

perdelay=period of delay between uses of skill by skill or effect by aura.

finishing=assassin finish skill/attack

passive=is the skill passive? 1 for yes.

progressive=does the skill grow as used? 1 for yes.

general=skill that everyone has. 1 for yes.

scroll=is skill from a scroll only? 1 for yes (scroll/book identify and town portal only)

calc1-4=calculations for the skill

\*calc1-4 desc=English descriptions of the calculations (not used in game.)

Param1-8=various parameter settings.  
They also need to be copied when skill swapping in order to give svr/clt functions good parameters.

\*Param1-8 Description=English descriptions of the calculations (not used in game.)

InGame=is skill in game? 1 for yes.

ToHit=bonus percent chance to hit with skill at level 1

LevToHit=addition bonus percent chance to hit added with each additional skill level.

ToHitCalc=not sure. only used on Valkyrie, bash, and stun....

ResultFlags=not sure. various numbers...

HitFlags=no idea. only a 2 on telekinesis/rabies...any ideas?

HitClass=no idea. various numbers on 6 skills...

Kick=does the skill use kick for its attack? 1 for yes.

HitShift=same as manashift for hit?

SrcDam=fractional part of damage in 128ths

MinDam=minimum physical damage at slevel 1

MinLevDam1-5=increment to minimum damage. Since skills max out at 20th level i'm guessing it is 4 levels for each column. so dam1=slvls 2-4, 2=5-8, 3=9-12, 4=13-16, 5=17-20

MaxDam=maximum physical damage at slevel 1

MaxLevDam1-5=increment to maximum damage. Since skills max out at 20th level i'm guessing it is 4 levels for each column. so dam1=slvls 2-4, 2=5-8, 3=9-12, 4=13-16, 5=17-20

DmgSymPerCalc=increased damage from synergy bonuses...maybe they left out a few for the paladin?

EType=type of element for attack. fire, cold, ltng, pois, mag

EMin=minimum elemental damage at slevel 1

EMinLev1-5=increment to minimum elemental damage. Since skills max out at 20th level i'm guessing it is 4 levels for each column. so dam1=slvls **EDIT (Nefarius) the correct range is 2-8, 9-16, 17-22, 23-28 and 29+**

EMax=maximum elemental damage at slevel 1

EMaxLev1-5=increment to elemental maximum damage. Since skills max out at 20th level i'm guessing it is 4 levels for each column. so dam1=slvls **EDIT (Nefarius) the correct range is 2-8, 9-16, 17-22, 23-28 and 29+**

EDmgSymPerCalc=increased damage from synergy bonuses.

ELen=length of time for cold/poison in 25ths of a second.

ELevLen1-3=increase in length of time for elemental duration since slvl stops at 20 my guess is 1=2-7, 2=8-14, 3=15-20 (7,7,6 with first level used)

ELenSymPerCalc=synergy bonus to Elemental duration length.

aitype=not sure. Looks like it might be Attack Item type....only really in the assassin skills except for the frozen armor and monster frozen armor.  
aibonus=not sure. Attack Item bonus?

cost mult=not sure. if skill is on an item, multiply cost by this?  
cost add=not sure. if skill is on an item, add this to cost?
