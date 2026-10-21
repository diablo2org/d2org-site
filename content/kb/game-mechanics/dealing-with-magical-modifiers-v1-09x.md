---
title: Dealing with Magical Modifiers (v1.09x)
summary: >-
  Magic modifiers are wonderful things which allow us to set the properties of
  unique items, set items, gems, magic affixes, runewords, auto-prefixes, and
  all that sort of thing.
keepId: 56
author: Phrozen Heart
credit: by 54x
posted: '2003-09-17'
views: 7714
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=56'
---
Magic modifiers are wonderful things which allow us to set the properties of unique items, set items, gems, magic affixes, runewords, auto-prefixes, and all that sort of thing.

They are actually -very- simple to deal with in v1.08 and up, because they now have plain-English codes. I'll treat the columns like this: Mofier Code / Param / Min / Max

They come in a variety of types, and the most common one is a simple min-max value. This means you simply need to know what the code does, and set the minimum and maximum values it can reach. For example, allskills / / 1 / 2 would add between +1 to all skills and +2 to all skills.

This also applies to the damage mods, dmg-fire and dmg-ltng. In these cases min is the minimum damage, and max is the maximum damage.

The next type is modifiers that are still min-max, but use the parameter column for various reasons. The most simple of these being dmg-cold and dmg-pois, which function the same as dmg-fire and dmg-ltng except for the fact that the number in the param column is the number of frames the damage/chill is spread over. (each frame is 1/25 of a second)

The next part of this type modifiers that deal with skills. in the case of the 'skill' one, it's min and max are still minimums and maximums, and it's param column is the ID number for the skill you want to add to. 'charged' also has the param column dealing with it's skill ID, and it's min deals with number of charges. The max column should be the level of the skill. Other skill-related affixes will deal with percentage chance (in the min column) and the skill level. (in the max column)

(time based modifiers are the third part of that type, but as far as I know do not work so I am not covering them)

The other type of modifier is level-based modifiers. These always end in /lvl, and ONLY use the param column. This is the amount of this statistic that you will gain every eight levels. (or per level divided by eight) This way you can have 3/8 per level, or 7/8 per level or something similar. Remember to be VERY careful of these affixes when you adjust the number of levels in your mod. If you have raised the number, you will need to use reduced versions of these affixes. If you lower the number of levels, then you will need increased versions of these affixes.

One final note: When you are entering affixes, the number closest to 0 goes in the minimum column. Therefore negative affixes are entered as -2 / -27 rather than -27 / -2, despite -2 being 'larger.'
