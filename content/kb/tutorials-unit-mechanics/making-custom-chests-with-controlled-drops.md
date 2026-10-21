---
title: Making custom chests with controlled drops
summary: >-
  Introduction Ok, for this tutorial I will go over the steps required to make
  simulated chests. This is done by making monsters that appear as chests. When
  we are done the only way to open the chest…
keepId: 446
author: Nefarius
credit: by Xenast
posted: '2007-05-04'
views: 10401
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=446'
---
Introduction  
Ok, for this tutorial I will go over the steps required to make simulated chests. This is done by making monsters that appear as chests. When we are done the only way to open the chest will be via physical attacks (missles such as arrows will not work).

These chests will function exactly like D2 chests, and aside from a slight string display difference, will be exactly the same as a regular chest in game, except you can fully customize the drop of these chests.

This tutorial will be a little longer then others, but that is because I will add notes on all the changes for those interested. I also take some extra steps other may not, but everythings in the details, so its best to do things properly.  
You will also need some basic mod knowledge to make this work (know how to edit strings, basic drop editing, ect).

Here is a screenshot of a chest that has been opened, as well as 2 others beside it:  
[\*Screenshot\*](https://d2mods.info/forum/album_page.php?pic_id=1943)  
As you can see the only difference between this and a real chest is the red background behind the name, other then that they are exactly the same.

Part I: Extracting/Converting the Chest Animations

First thing we must do is extract the chest Animations, rename them, and place them in their new directory. You can use any chest animation you want, however for the purpose of this tutorial I used the act 2 horadric item chest animation, which is code 'xk'.

Now open d2data.mpq and extract the following files:  
data/global/objects/xk/tr/xktrlitnuhth.dcc  
data/global/objects/xk/tr/xktrlitonhth.dcc  
data/global/objects/xk/tr/xktrlitophth.dcc  
data/global/objects/xk/cof/xkNUHTH.cof  
data/global/objects/xk/cof/xkNONTH.cof  
data/global/objects/xk/cof/xkNOPTH.cof  
  
To figure out what token each chest animation uses, extract and open objects.txt and look at the 'token' column for each chest type  

Now, go to your mod directory and make the following folder:  
data/global/monsters/!C/tr

'!C' will be our new animation token for the monster, you must make sure no other monsters use this token in monstats.txt (no existing entries use special characters, such as ! and #).

Copy xktrlitnuhth.dcc, xktrlitonhth.dcc, and xktrlitophth.dcc to this folder. Rename them to the following:

xktrlitnuhth.dcc renamed to !ctrlitnuhth.dcc  
xktrlitonhth.dcc renamed to !ctrlitddhth.dcc  
xktrlitophth.dcc renamed to !ctrlitdthth.dcc  
  
I highligthed the changes in bold to make it easier to read.

NU is the monsters Neutral animation, used when it is no moving. DD is the monsters corpse animation. DT is the animation the monster plays as it dies.  
If you use cv52 with the dcc addon you can open the three dcc's and see why we assigned each monster animation the file we did.  

Now in the mod directory add the following folder:  
data/global/monsters/!C/cof

Now copy xkNUHTH.cof, xkNONTH.cof, and xkNOPTH.cof to the folder. rneame them to the following:  
xkNUHTH.cof renamed to !CNUHTH.cof  
xkNONTH.cof renamed to !CDDHTH.cof  
xkNOPTH.cof renamed to !CDTHTH.cof

> **Note:** It is very important you do this step right. If you make any typos, place files in the wrong place, the animation won't work properly.

Part II: Adding animdata.d2 lines

Next, extract animdata.d2 from d2exp.mpq. Use animdata\_edit to convert the file to a txt file, and open it. Find the following lines:  
XKNUHTH  
XKONHTH  
XKOPHTH

Now, create three new rows at the end of the file. Copy the above lines into these rows and rename the first column as follows:  
XKNUHTH renamed to !CNUHTH  
XKONHTH renamed to !CDDHTH  
XKOPHTH renamed to !CDTHTH

As with renaming the animation files, if you make a mistake here, it will also cause animation errors. Be careful and take your time.

Part III: Monstats.txt Entries

Ok, if you made it this far, your done the most tedious part. Now, go to the end of monstats.txt and add a new row. Give it the following entries (If I don't mention a column, leave it blank):

Id: Chest1  
hcidx: 704 (or if you have added new lines before use the next avilable value)  
Baseid: Chest1  
NameStr: Chest1 Your string id, don't forget to add it to your string file after  
MonStatsEx: Chest1  
MonProp: chest1  
AI: Idle This AI allows the chest to be idle, as well as prevents hirelings from targeting the chest  
Code: !C Make sure this matches the code you used for the animation/animdata.d2 files  
Enabled: 1  
MinGrp: 1  
MaxGrp: 1  
Velocity: 0  
Run: 0  
Rarity: 1If left blank chests will not spawn. Higher values will increase the number of chests spawned.  
Level: 1 (same for all difficulty settings)  
monsound: chest1  
Umonsound: chest1  
Threat: 1 This will make sure minions/hirlings dont attack the chest unless your literally standing on top of it  
isSpawn: 1  
Boss: 1 This will make the chest immune to curses as well as a few other unimportant unseen effects  
killable: 1  
noAura: 1 This will prevent the chest from receiving auras fro monsters, which would look out of place  
petIgnore: 1 Apparently disabled in 1.10, it is supposed to make hirelings/minions ignore the monster  
Noratio: 1 If left blank elemental damage immunities will not work properly  
minHP:1 (same for all difficulty settings)  
maxHP:1 (same for all difficulty settings)  
Ac: 1 (same for all difficulty settings)  
Treasureclass columns: Whatever you want, heres how you get your custom drop  
Eol: 0  
  
We did not use the immunity columns here because they will display under the chest name, which won't look right. Instead we add damage immunitues with monprop later in the tutorial.  

Part IV: Monstats2.txt Entries  
Ok, same deal as the monstats.txt explanation:

Id: Chest1  
Height: 3  
OverlayHeight: 3  
pixHeight: 96  
SizeX: 1  
SizeY: 1 Take values from the same columns for the chest you converted in objects.txt  
MeleeRng: 0  
BaseW: hth  
HitClass: 3  
TRv: lit  
TR: 1  
TotalPeices: 1  
mDT: 1  
mNU: 1  
mDD: 1  
dDT though dRN: 8 in each column  
Restore: 1  
noOvly: 1 Only set if noaura is set to 1 in monstats.txt, prevents visual glitches  
isSel: 1  
isAtt: 1  
deadCol: 1  
unflatDead: 1 alone this column does nothing, but with the deadCol it makes it so players can't alk on the corpse, which is another detail to making the chest appear real  
Shadow: 1  
light-r: 255  
light-b: 255  
light-g: 255  
Heart: xxx  
BodyPart: xxx  
Infernolen: 1  
RessurectMode: NU  
Eol: 0

Part V: Testing  
Ok, now spawn the chest via levels.txt to see if it working right (you should be able to walk up and 'kill' it, and the whole process should look like you opened a chest).  
Many of you will probably find animation errors (no 'corpse', chest doesn't appear at all). This is 99.9999% caused by messing up steps 1 and 2. I confused the files myself the first time I tried this and spent hours fixing and testing typos. The above will work if you have done everything right.

Anyway, once you confirm you have the above done right, there is a few more steps, outlined below.

Part VI: Sound Effects  
Time to make the chest play that nice little sound effect when you open it. Open monsounds.txt and make a new row, give it the following entries:

id: chest1 This entry much match your monstats.txt 'monsound' and 'Umonsound' entries  
DeathSound: object\_chest\_small  
Eol: 0

Thats it, run the game and open your chest, it should now have sound.  
There is also 2 more chest noises, 'object\_chest\_large' and 'object\_chest\_special', use whichever suits you best. Also, the names to put in the 'Deathsound' column are referenced from sounds.txt for those of you wondering

Part VII: Properties.txt  
What does this have to do with anything you ask? Well, before we give our chest its elemental immunities, we need to add one more property. We are going to also make our chest immune to missles, primarily useful for preventing arrows from opening the chest.

This actually quite simple, open properties.txt and make a new row with the following entries:

code: missim  
\*done: 1  
func1: 1  
stat1: passive\_avoid This stat already exists in itemstatcost.txt  
Eol: 0

What passive\_avoid actually does is give the player a chance to avoid missle attacks while standign still, but we will make it simmulate immunity by granting 100% chance to avoid.  
You can also add a string entry to the \*desc column and use this as an item stat also if you wish.

Part VIII: Giving the chest elemental immunitues  
Ok, we are at the last required step. Here we will use monprop to make our chest immune to all elemental damage, as well as apply our missle immunity.

Id: chest1  
prop1: missim This is our missle immunity property we created earlier  
min1: 100  
max1: 100  
prop2: res-all  
min2: 200  
max2: 200  
prop3: res-mag The res-all stat does not cover Magic Damage, hence why we added mag-res on its own  
min3: 200  
max3: 200  
Eol: 0

IMPORTANT: You must add the above entries for each difficulty column, or else your chest will only have immunities on Normal Difficulty.

Part IX: Final Test, Check List  
Ok, congrats, you now know how to make your own custom chests. Below is a final list of things to check:  
~Animations work properly  
~Monster auras do not affect chest  
~Player cannot walk through chest  
~Player cannot walk through chest after its been opened  
~Posion, Magic, Cold, Lightning, Fire damage do not damage chest  
~Curses cannot be applied to chest  
~Missles such as arrows will not open the chest

Part X: Spawning the chest  
Its best to spawn the chest as an object and later insert it into a ds1 of choice, I won't cover how to do so here, as a tutorial already exists for that.  
[Adding ANY Monsters and ANY Objects to a DS1 (by Paul Siramy)](https://d2mods.info/forum/kb.php?mode=article&k=287)

Part XI: Optional Touches  
Yup, even when you think your done, theres more. The following is some examples of just how versatile these chests are.

Automap  
Remember how quest related chests have their own automap? The same can be done with our chests.

Open monstats2.txt, and add the following column entries:  
automapcel: 318  
noMap:1

Thats it, now go in the game, and your chest will have an automap.

Trapped Chests  
Since we have already added a monprop row for the chest, we can add a death-skill, which can essentialy make a very customized trapped chest.

Open monprop.txt and add the following:  
prop4: death-skill  
par4: skill id from skills.txt that you wish to use for the trap  
min4: minimum skill level  
max4: maximum skill level

Extra Display  
You can also add a small message under the chest name by editing the following in monstats.txt (this text would go in the same size/place immunities are usually listed at for monsters in-game):

DescStr: add the string for your extra txt message

Concepts  
1\. Since the chest is immune to elemental damage, you can place it near a monster that has an aura that grants physical immunity, thus making the chest unable to be opened before the monster is killed. Just make sure if you do this you go back to monstats.txt and make 'noaura' column blank.

2\. For advanced modders, you can also make the chest immune to physical damage, and create a new damage type that only effects this chest. Then, you place the new damage type on a 'key', thus making soft-coded locked chests.  
Discussion of softcoded new damage types can be found [here](https://d2mods.info/forum/viewtopic.php?t=17112)

3\. The above technique can also be applied to other objects. For example, you could make a simulated shrine that applies a benificial curse to you when it 'dies'.

Part XII: Credits  
librarian, Nefarius and onyx for corrections/improvements. See [This](https://d2mods.info/forum/viewtopic.php?t=42689) thread for more information.
