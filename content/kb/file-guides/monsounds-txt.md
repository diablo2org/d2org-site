---
title: MonSounds.txt
summary: >-
  This used to reside in a table that was located in the data section of
  D2Client.dll before 1.10.
keepId: 418
author: Nefarius
credit: 'by Nefarius, restyled by Ogodei'
posted: '2006-09-07'
modified: '2018-10-22'
views: 8812
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=418'
---
_This used to reside in a table that was located in the data section of D2Client.dll before 1.10._

**Id**: this column represents the ID pointer you'd use in MonStats.txt to link this sound-index to a monster, read the file guide for that file for more information.

**Attack1 - Attack2**: the ID pointer of the sound to play for melee attack1 and melee attack2 (respectively), this is an ID pointer from [Sounds.txt](/kb/file-guides-1-09/sounds-txt-file-guide). This is played when the monster starts attacking.

**Weapon1- Weapon2**: this is the ID pointer to another sound from [Sounds.txt](/kb/file-guides-1-09/sounds-txt-file-guide) which is used by Blizzard for monsters that wield a weapon. However, it can be used for any monster.

**Att1Prb - Att2Prb**: chance to play the attack sound (not the weapon sound), this is quite obviously x out of 100 .

**Wea1Vol- Wea2Vol**: sets the volume for the weapon sound to something other then what the sound has defined in Sounds.txt, 255 is full volume, 0 would mute the sound.

**HitSound**: The ID pointer of the sound to play when the monster takes a hit (it doesn't have to get into GH mode for this to play).

**DeathSound**: The ID pointer of the sound to play when the monster dies.

**HitDelay - DeathDelay - Wea1Del - Wea2Del - Att1Del- Att2Del**: Time to wait (in frames) before playing the hit-sound, after the monster gets hit.

**Skill1 - Skill4**: Sound to play when the monster enters S1, S2, S3 or S4 mode.  
NOTE: it refers to the mode itself, and not to the **Skill#**columns in [MonStats.txt](/kb/file-guides/monstats-txt).

**Footstep**: An ID pointer to a sound that is played each loop of the WL animation.

**FootstepLayer**: This is an additional sound to play when the monster is in the WL animation mode, like the above.

**FsCnt**: Number of times to play the footstep sound, for a monster with two legs you'd set this to 2 quite obviously.

**FsOff**: Could be related to the delay in frames between playing the individual footsteps.

**FsPrb**: Chance to play the footstep sound. Again, x out of 100.

**Neutral**: An ID pointer to a sound that is played when the monster is neutral (actually, it's played even if the monster isn't in NU mode, but also when it is walking).

**NeuTime**: Delay in frames between playing the Neutral sound.

**Init**: An ID pointer to sounds that should start playing the moment the monster is initialized (AI related I guess), this is mainly used for looping sounds.

**Taunt**: An ID pointer to the sound that is played when you encounter the monster, which naturally means, the speech of bosses and the like.

**Flee**: An ID pointer to a sound that is played when the monster retreats, originally, all monsters were meant to escape when they were low on HP, but Blizzard changed this during the alpha of the game, back then this was probably a lot more significant, right now it's only used by Fallen Ones.

**CvtMo1 to CvtMo3**: This is related to sounds that are played when certain skills or sequences are used, this contains the initial animation, like WL for the charge skill.

**CvtSk1 to CSkMo3**: This is like the above, it contains the ID pointer to the skill in question.

**CvtTgt1 to CvtTgt3**: This is related to sounds that are played when certain skills or sequences are used, this contains the end-animation of the sequence, like A2 for the charge skill.
