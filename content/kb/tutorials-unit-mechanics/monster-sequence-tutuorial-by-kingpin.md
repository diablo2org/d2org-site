---
title: Monster Sequence Tutuorial (by Kingpin)
summary: This tutorial shows how to make any monster use it's own sequences
keepId: 19
author: Phrozen Heart
posted: '2004-08-19'
views: 10242
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=19'
---
You will need this tools and files to accomplish this tutorial.

Tools: (If you don’t have these files you find them on the keep).  
MPQExtractor  
Excel (D2excel/MS excel/staroffice to name a few spreadsheets)

Files to work with:  
monstats.txt - From patch\_d2.mpq  
monseq.txt - From patch\_d2.mpq  
string.tbl - From d2data.mpq

Required Knowledge to accomplish this tutorial:  
You need to be familar how to work with text files and extracting files with a mpq unpacker

PartI: Make a skeleton summon other skeletons

Open up monstats.txt

First we will make two copies of skeleton1 and copy them to your last row. What we are going to do here is to make the skeleton to ressurect the other skeleton.

Next we need to rename both monsters id to NewSkeleton1 and NewSkeleton2. After that do the changes for each row that are  
describe down here.

NewSkeleton1:  
hcIdx: use the next number (if the number above is 703, add 704 here)  
baseID: fallen1  
NextInClass: empty

NewSkeleton2:  
hcIdx: use the next number (if the number above is 704, add 705 here)  
baseID: SkeletonSummoner1  
NextInClass: empty  
AI: FallenShaman  
DescStr: raise skeleton (add use raise skeleton as string key and raise skeleton as string in string.tbl)  
minion1: NewSkeleton1  
SetBoss: 1  
PartyMin: 2  
PartyMax: 4  
MinGrp: 1  
MaxGrp: 1  
threat: 12  
aip1: 45  
aip2: 60  
aip3: 100  
aip4: 24  
aip5: 15  
Skill1: Resurrect  
Sk1mode: seq\_SkeletonRessurect  
Sk1lvl: 1  
Skill2: ShamanIce (You can use your favorite skill here)  
Sk2mode: A2  
Sk2lvl: 1

Now we are done in monstats.txt save and close it

Adding a new sequence  
If we look close at Ressurect skill, this skill is using a sequence as animation and the actuall use of the skill. This is what fallenshaman are using. We find the sequence table in monseq.txt and the good in here is that we can add our own sequences. This table is used to build custom sequences from existing dcc files, so instead of making a new animation for each skill use we can add it in here. Its a very pratical file to use and with this we can add a missing sequence for a monster. We will add a new sequence for our new Skeleton summoner so he can ressurect his friends.

First open up monseq.txt

We will first look what it columns does.

sequence: This is the name of the sequence that are going to be used in monstats.txt  
mode: what mode are we going to use. You can add any mode that a monster has a dcc file for.  
frame: How many frames are this animation going to be. You can make a monster to cast fast or slow by decreasing/increasing the number of frames it needs to cast the skill.  
dir: unknown  
event: What event is going to trigger, there are different events a skill uses. As example Ressurect skill uses event 2.

We have used above seq\_SkeletonRessurect as the name of the sequence the skeleton are going to use. Add the following rows at end of the file.

sequence mode frame event  
seq\_SkeletonRessurect A2 0  
seq\_SkeletonRessurect A2 1  
seq\_SkeletonRessurect A2 2  
seq\_SkeletonRessurect A2 3  
seq\_SkeletonRessurect A2 4  
seq\_SkeletonRessurect A2 5  
seq\_SkeletonRessurect A2 6  
seq\_SkeletonRessurect A2 7  
seq\_SkeletonRessurect A2 8  
seq\_SkeletonRessurect A2 9  
seq\_SkeletonRessurect A2 10 2

We have now added 11 frames to the animation and at the 11 frame the use of the skill is triggered by its event.

PartII: Make a skeleton use jump

Open up monstats.txt

We will copy an additional row to the end. Make a copy of NewSkeleton1 and put on the row below NewSkeleton2.

First we rename monsters id to NewSkeleton3. After that do the changes for each row that are describe down here.

NewSkeleton3:  
hcIdx: use the next number (if the number above is 705, add 706 here)  
NextInClass: empty  
AI: SandLeaper  
DescStr: leap (add use leap as string key and leap as string in string.tbl)  
aip1: 20  
aip2: 50  
aip3: 30  
aip4: 50  
aip5: 15  
Skill1: Leap  
Sk1mode: seq\_Skeletonleap  
Sk1lvl: 1

Now we are done in monstats.txt save and close it

Adding a new sequence  
We can again look how a sandleaper uses its sequence for Leap. Its a good way to start looking into how a sequence is built up to understand how it works. We will add the needed sequence so it can use Leap.

First open up monseq.txt

Add the following in your monseq file.

sequence mode frame event  
seq\_Skeletonleap A1 0  
seq\_Skeletonleap A1 1 1  
seq\_Skeletonleap A1 2  
seq\_Skeletonleap A1 3  
seq\_Skeletonleap A1 4  
seq\_Skeletonleap A1 5  
seq\_Skeletonleap A1 6  
seq\_Skeletonleap A1 7 2  
seq\_Skeletonleap A1 8  
seq\_Skeletonleap A1 9 1  
seq\_Skeletonleap A1 10  
seq\_Skeletonleap A1 11 1  
seq\_Skeletonleap A1 12  
seq\_Skeletonleap A1 13  
seq\_Skeletonleap A1 14  
seq\_Skeletonleap A1 15  
seq\_Skeletonleap A1 16  
seq\_Skeletonleap A1 17  
seq\_Skeletonleap A1 18  
seq\_Skeletonleap A1 19

We have now added 20 frames to the animation and several event are triggered to do the jump.

Final Word:  
With monseq.txt table we can add our own sequences. This open up for monsters to use skills it othervise couldn't use. As a practise you can try to get charge to work on the skeleton.

Appedix A  
This explains what each event number are, that is used in monseq.txt.

Author: Alkalund

(empty) - no event  
01 - attack  
02 - missile  
03 - sound  
04 - skill

This animated GIF show a skeleton doing its leap attack :

![](http://dynamic6.gamespy.com/~phrozenkeep/tutimages/skel_leap.gif)
