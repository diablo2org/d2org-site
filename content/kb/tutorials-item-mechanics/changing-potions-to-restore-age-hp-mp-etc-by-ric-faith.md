---
title: Changing Potions to restore %age HP/MP/etc.. (by Ric Faith)
summary: >-
  This will teach you how to change those potions to restore life based on a
  percentage, without instantly healing the character.
keepId: 372
author: Nefarius
posted: '2005-11-18'
modified: '2018-01-06'
views: 10235
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=372'
---
Ok, even if no one is as estatic as I am about this, I'm gonna share this! In 1.09 I had to hard code this, but it's so simply softcoded now! Hahaha

Files: ONLY misc.txt

Columns to edit: ONLY calc1 (col BF) and spelldesccalc (col BM)

well you can edit other stuff like duration and what else, but for the sake of the tutorial, we'll stick to these two...

Currently, these are the effects of potions:

Healing Potions = 30/60/100/180/320

Mana Potions = 20/40/80/150/250

Ok, this tutorial will add a %age effect to Potions. In other words, the potion will restore a %age of your total HP or MP instead of just a flat rate.

So let's say we want the following effects

Healing Potions = 25%/50%/75%/100%/150%

Mana Potions = 25%/50%/75%/100%/150%

But we want to keep the potion working as per normal D2 until the point where your life has increased such that small healing potions are worthless.

Here is an example for small healing potion that I will use to explain:

max(stat('maxhp'.accr)/256/4,30) - put this value in calc1 and spelldesccalc

First, HitPoints and Mana (and Stamina) have 8 bits of accuracy, so that value that you see in your health globe is actually 256 times less. So for us to use the value of 'maxhp', we must divide it by 256.

Second, to have a minimum value of healing, we use the max() function. This means that if ¼ of our life is less than 30, we want 30HP. If ¼ of our life is more than 30, I want 25%HP back.

Finally here are the values that I am currently using:

Lesser Healing Potion = max(stat('maxhp'.accr)/256/4,30)

Light Healing Potion = max(stat('maxhp'.accr)/256/2,60)

Healing Potion = max(stat('maxhp'.accr)/256\*3/4,100)

Strong Healing Potion = max(stat('maxhp'.accr)/256,180)

Greater Healing Potion = max(stat('maxhp'.accr)/256\*3/2,320)

Lesser Mana Potion = max(stat('maxmana'.accr)/256/4,20)

Light Mana Potion = max(stat('maxmana'.accr)/256/2,40)

Mana Potion = max(stat('maxmana'.accr)/256\*3/4,80)

Strong Mana Potion = max(stat('maxmana'.accr)/256,150)

Greater Mana Potion = max(stat('maxmana'.accr)/256\*3/2,250)

> **Note:** The values of calc1 and spelldesccalc are the same so that your potion will tell you how much it will really heal.

You can always fiddle with your own values, there is no need to follow these strictly. If you like you could make a kind of healing potion that gives you life back based on Strength or Vitality! Or a healing totem that gives you life based on Energy. These items will only need 1 type, because it will always be useful, as long as your character has improved his stats, he'd get better powered healing.

Which, in essence, is the point of making %age restoration potions.
