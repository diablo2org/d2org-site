---
title: Charstats.txt File Guide
summary: >-
  Many people making mods seem to have a problem grasping some of the columns
  within the charstats.txt file. In this tutorial, I’ll explain in detail the
  functions of each of the columns, as well as…
keepId: 223
author: Phrozen Heart
credit: by Maxx Power
posted: '2003-12-02'
modified: '2018-01-06'
views: 10510
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=223'
---
Many people  
making mods seem to have a problem grasping some of the columns within  
the charstats.txt file. In this tutorial, I’ll explain in detail the  
functions of each of the columns, as well as giving some other  
information when required. To  
find the charstats.txt file, it is within the d2exp.mpq file in the  
Diablo directory, not the patch\_d2.mpq file. You can easily pack the  
charstats.txt file into the patch\_d2.mpq file and do the usual -direct  
\-txt execute, and it will over-ride the one in the d2exp.mpq. I won’t  
go into detail about this, just look at the Keep for a tutorial as to  
how (NB All those making a normal Diablo II mod, use the charstats.txt  
file found in the d2data.mpq file). This  
is basically where the name of the class is placed in the .txt file.  
Its easy enough to understand, as the character names are in full.  
Changing the character name here will NOT change it in the game. You  
need to hex-edit for that to happen. Changing the names may cause  
problems, crashing the mod. Just leave these be. However, if you do the  
relevant editing in the .tbl files within the .mpq archives, then you  
could change these columns, though don’t ask how through this tutorial.  
This is for the charstats.txt file only! Str, dex, int, vit;  
These are the base stats for the characters. From left to right, its  
Strength, Dexterity, Energy and Vitality. These only affect the  
characters base stats. It doesn’t affect any levelling up in any way.  
Note that the amount put into Energy and Vitality will affect that  
characters base hp. Tot;  
The total amount your stats come to when added together. This is one of  
the unused columns in the file, so just leave them alone. You can  
delete the entries here easily and put whatever you want in (comments,  
funny faces, whatever). Stamina and hp add;

The stamina column is basically the amount of stamina you have at the  
start of the game with a base character. Note that base stamina is NOT  
affected by your character’s base Vitality. Hp add is the number of hp  
added on top of the vitality bonus. Note that the base hp for all  
characters is base vitality + hp add. The amount of hp gained per  
vitality in the game doesn’t affect the amount of hp with a base  
character. PercentStr, Dex, Int and Vit;  
These columns are read as bytes but aren't used for anything in the  
game, so you may enter any byte value here and use them if you make dll  
changes. (Thanks to Isolde for the above paragraph!) ManaRegen;  
This the speed at which characters regenerate their mana. It is  
interesting to see that all the characters have equal mana regen. Just  
so you know, the lower this value is, the faster that character will  
regenerate their mana reserves. This value is the amount of seconds it  
takes for a character to regain full mana from nothing. Just to note, a  
sorceress can regenerate her own mana with max warmth skill in a few  
seconds. (This is calculated as  
MaxMana/(ManaRegen\*25)\*ManaRegBonus/100) If you know its on that kind  
of sliding scale, then you have a general idea as to how changing this  
value may affect a character. ToHitFactor;  
This is used in the calculation to hit a monster using a non-magic  
weapon (sword, bow etc.) The higher the value, the more of a bonus that  
character will gain. This also affects your characters chance to be hit  
by non-magical means. An e.g. of how this works can be seen here. A  
barbarian, with a ToHitFactor of 20 has an attack rating of 72. An  
amazon, with a ToHitFactor of 5, has an attack rating of 77. Both have  
an equal chance to hit a fallen (94%). Another example is following. An  
amazon has an AC of 6, a sorc, with a ToHitFactor of -15, has a AC of  
7\. Both have an equal chance of being hit by a fallen (66%). Basically,  
the higher this value, the better that character is at landing physical  
blows, and avoiding them. This is a straight add to attack rating and  
defense bonus, so is only really useful for lower level characters in  
the game. WalkVelocity and RunVelocity;

Pretty much self-explanatory. The higher it is, the faster your  
character can walk and run. Try to have the RunVelocity higher than the  
WalkVelocity, or it may cause problems. These are the stats affect by  
item which increase walk/run speed by a percentage. E.g. A Barbarian,  
who has a walk/run velocity of style='mso-spacerun: yes'> 6 and 9  
respectively, has a pair of boot which increase walk/run velocity by  
20%. His new speed = 6 \* 1.2 / 9 \* 1.2 = 7 walk speed and 10 run  
velocity. RunDrain;  
This is the amount of stamina drained whilst your chracter is running.  
This is the stat affect by items which have stamina drain reduction  
(see above). Basically, the lower it is, the longer your character can  
run in affect. This is lost in 256ths every frame. Comment; Jus’ a little ol’ comment by the good people at Blizzard to help mod makers :-) Life/Stamina/Mana per level;  
As mentioned in the document, the following numbers are fourths (incase  
your wondering why an Amazon doesn’t gain 8 hp per level). This means  
that any number you place in here is divided by four before it is added  
to the character. This is how some characters gain 1 and a half hp per  
level (see the necromancers column). This pattern follows for each of  
the columns, with Life Stamina and Mana self-explanatory. Life/Stamina per Vit and Mana per Int;

Exactly the same as the per level columns, except these relate to the  
amount of hp, mp and stamina gained with each point put into their  
respective stats. Note that these values are also in fourths. Also note  
that these values will not affect your characters base Life, Stamina  
and Mana (see above). Values with a # in front of them;  
These appear to be pre-beta values, most likely used by Blizzard whilst  
the art teams were devising the animations. Changing these values will  
probably do nothing to your characters which are noticable, so changing  
them won’t do much (Another bit of info provided by Ruvanal) BlockFactor;  
Whilst playing Diablo, you will probably have noticed that all the  
shields have a blue number for their blocking, indicating an  
enhancement to that item, even though there are no visible changes.  
This is the value which affects that. If you open the armor.txt file,  
you will see that most shields have really low blocking %, such as 15  
or 10. This is because the BlockFactor of a character is added on top  
of this. Paladins use shields the most, so their BlockFactor is the  
highest. As calculations go, a value of 75 or higher will allow a char  
to have almost full blocking (>75 = 75% blocking). The formula used  
(Blocking \* (Dexterity - 15)) / (Character Level \* 2) means that a char  
will most likely have full blocking, but not all the time. StartSkill; Another unused, pre-beta column still in there. Nothing important. BaseWClass;

This just determines that your character is in hth, or combat, mode,  
with both skills set to normal attack. This won’t really affect  
anything, so just leave it. The  
next columns are for the use of your base equipment. Here you can put  
any item you want into the character, either in their inventory or  
equipped (NB You can’t put stuff in the Horadric Cube or the stash,  
even if you give your character it as a starting item. It won’t work). The  
first column is basically where you put the item code. These codes can  
be found in the items.txt, weapons.txt, armor.txt, or runes.txt if you  
want to put specialist stuff in there. The next column is where the  
item is. Leaving this blank will put it in your inventory (potions  
should automatically go into the belt if there is room. Otherwise,  
they’ll stay in the inventory). If you want to put the item in a  
specific place, then you must place in the relevant code for that part  
of the character. Look in the .txt files for the column which describes  
where an item goes, and then use that code. The next column allows you  
to put in more that one of an item. Try to do this only for potions and  
the like, otherwise you may have problems with doing stuff like, say,  
spawning ten short swords. For  
the columns, you can have a total of ten separate items either equipped  
or in your inventory. If you don’t want any item, then put a 0 in the  
first and third columns, then put nothing in the second one. That  
just about covers everything there is to know about the charstats.txt  
file. Remember, it only take a few minutes, but you can almost totally  
change the way in which Diablo is played altogether if you know how to  
change the stats in the right way. Have fun! Maxx Power (P.S. Thanks to both Isolde and Ruvanal on the forums who corrected some of the mistakes on this tutorial. Big props you guys!)
