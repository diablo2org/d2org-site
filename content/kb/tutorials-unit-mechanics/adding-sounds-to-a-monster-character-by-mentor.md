---
title: Adding Sounds To A Monster-Character (by Mentor)
summary: This tutorial will explain how to add sounds to monster-characters.
keepId: 375
author: Nefarius
posted: '2006-01-05'
modified: '2018-01-06'
views: 10167
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=375'
---
Greetings, everyone!

I thought I'd add some info related to the Characters as Monsters tutorial, as I believe some of you might want to use this in your mod: the sound!

Having an assassin sound like Shadow Master is one thing, but having a paladin sound like Hephasto or Diablo might be inappropriate, as some of them have those taunt sounds (that tick you off and make you whack them silly) which don’t always apply. Imagine a paladin asking: “Looking for Baal”?

Tools needed:

MPQ extractor

Text editor

Any sound player.

Files needed:

Monstats.txt

Monsound.txt

Sounds.txt

OK, now let’s get to work!

1\. No character sound can be used by any monster because…characters are not monsters! It sounds like a truism, but, in terms of modding, it means that any char sound must be placed where all other monster sounds are placed: in data/global/sfx/monster/.

Let’s say you made an enemy druid. In data/global/sfx/monster/ make a new folder named evildru. You can extract any char sound you like, but I recommend death, attack, gethit, and a catch-phrase (for starters) for taunting, if you want your new monster to be a boss. So, extract data\\global\\sfx\\Combat\\Player\\Druid\\gethit7.wav and data\\global\\sfx\\Combat\\Player\\Druid\\death3.wav from d2exp.mpq. Then, extract data\\local\\sfx\\Common\\Druid\\dru\_die.wav, data\\local\\sfx\\Common\\Druid\\dru\_thisisforyou.wav and data\\local\\sfx\\Common\\Druid\\dru\_timetodie.wav to data/global/sfx/monster/evildru folder.

Now, rename the sounds like this: gethit7.wav to gethit.wav, death3.wav to death.wav and the others by deleting 'druid\_'(e.g. timetodie.wav).

2\. Open monstats.txt, go to your monster row and in columns monsound and umonsound write evildru. Save and close, but don’t enter the game, yet.

3\. Open monsound.txt and copy the frozenhorror line at the bottom. Change ID it to evildru. Now, in the attack1 column write evildru\_attack. Delete Weapon1, (our evildru is a caster)Wea1Del and Wea1Vol. In the HitSound column write evildru\_hit and in the DeathSound column write evildru\_death. Set HitDelay and DeaDelay to 0.Go to the Neutral column and write evildru\_neutral. Leave Init blank and in taunt column write evildru\_taunt. Save and close, but don’t enter the game, yet.

4\. Open Sounds.txt. Add a new line, copy the frozenhorror\_attack\_1 line (line #1000) and paste it at the bottom. Rename Sound to evildru\_attack, change Index to next available (4699 unmodded) and Filename to monster\\evildru\\die.wav. Then change Group Size to 0.

```
Add a new line, copy the druid_hit_5 line (line #2931) and paste it at the bottom. Rename Sound to evildru_hit, change Index to next available and Filename to monster\evildru\gethit.wav.
Add a new line, copy the druid_death_3 line (line #2934) and paste it at the bottom. Rename Sound to evildru_death, change Index to next available and Filename to monster\evildru\death.wav.
Add a new line, copy the druid_chat_c_1 line (line #3410) and paste it at the bottom. Rename Sound to evildru_neutral, change Index to next available and Filename to monster\evildru\thisisforyou.wav.
Add a new line, copy the monster_duriel_taunt_1 line (line #4642) and paste it at the bottom. Rename Sound to evildru_taunt, change Index to next available and Filename to monster\evildru\timetodie.wav.
```

Just out of precaution, check that the sound names put in Filename column coinincide with the ones in your evildru folder and that the monster says exactly what you want!

Place your monsters in a near-town area and make them scream!

Comments:

I will try to shed some light on the skill sounds, which are more delicate than expected, in the near future.

As a variation, you can add quest-related sounds to your monster sounds, especially to taunt, as the monster uses it only one time during its 'lifetime'-this is controlled by the 1 value in Solo column (file guide, anyone?).

Hail to you, champions!
