---
title: Skill Text Displays With Mouse-Over Hover (by Drackin)
summary: This tutorial shows how to display skill text with a mouse over hover.
keepId: 21
author: Phrozen Heart
posted: '2004-08-19'
views: 11928
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=21'
---
open skilldesc.txt and find salvation.

Scroll over to the column labled descline1. and from their on, enter what is listed below (i'll explain it all)

```
descline1 - 2
desctexta1 - StrSkill88
desctextb1 - StrSkill23
desccalca1 - ln34
```

(this is for manarecovery bonus)

```
descline2 - 2
desctexta2 - StrSkill31
desctextb2 - StrSkill23
desccalca2 - ln34
```

(this is for the defense bonus)

```
descline3 - 2
desctexta3 - StrSkill54
desctextb3 - StrSkill23
desccalca3 - dm34
```

(this is for the resist-all bonus)

```
descline4 - 2
desctexta4 - StrSkill22
desctextb4 - StrSkill23
desccalca4 - ln34
```

(this is for the attack% bonus)

```
descline5 - 4
desctexta5 - StrSkill50
desccalca5 - ln34/2
```

(this is for heals+25)

```
descline6 - 19
desctexta6 - StrSkill18
desccalca6 - ln12
```

(this is for the radius)

And that's all for that.

Now, if you look at the order the mods appear in the screenshot, and the order that these are written, you'll notice the first one written, is the last mod displayed. That should help with ordering the appearance.

Each column has of course, a different meaning but it is kinda hard to figure it out some of them just by looking at it so i will explain what they all mean.

Descline - I'm not 100% sure you, but I believe this is just a way of formatting how the mod is displayed

eg/ for radius, desclin6 is 19. Now add 'StrSkill23' to desctextb6 and see what appears. The word 'percent' would appear right next to radius, and looks akward, so this is how I came about what Descline means.

NOTE: For a confusing, but helpful listing of some meaning to the values, see Chippydips post here.

Desctext - Well, this is what displays the names of the properties of the skill.

StrSkill88 = 'Mana Recovery Rate'

StrSkill23 = 'percent'

StrSkill50 = 'Heals' etc etc...

Now in which order desctexta and desctextb appear depends on descline.

Desccalc - This calculates what # to display beside the stat, should be the EXACT SAME as the one used in skills.txt for that property.

now, you would use both Desccalc's for skills with chances and such, eg/ a passive skill that grants you 5% chance to cast level 10 nova when hit (where they can both increase by enhancing the skill)

EDIT: You will most likely have to come up with new formulas to display what you want, and re-arrange the parameters in skills.txt. For a list of the variables you can use in your formulas, check skillcalc.txt

Well, that's the end, now if you have any questions, don't hesitate to ask.

Hope it works for everyone.
