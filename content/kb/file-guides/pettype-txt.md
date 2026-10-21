---
title: PetType.txt
summary: >-
  PetType.txt file guide. The following is the description of what the columns
  from PetType.txt do.
keepId: 355
author: Nefarius
credit: 'by HellSpawn, reviewed by Ogodei'
posted: '2005-10-18'
modified: '2018-10-24'
views: 14671
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=355'
---
PetType.txt file guide.  
The following is the description of what the columns from PetType.txt do.

**pet type** = name of the pet type, referred by the "pettype" column in skills.txt.

**idx** \= id number of the pet type

**group** \= This is a softcoded field, and assigns each minion to a specific "group" . Pets in the same group tend to exclude each other, so that you can only have one pet type of the group at a time.

**basemax** = Basemax does not interfere with the skill quantity formula. It is relevant for pets summoned with oskills or with some bonuses that updates from time to time, like sets. I have made some tests and it turns out that if you set a high number here, you aren't likely to lose pets generated via set bonuses (which either grant +skills or +oskills).

**warp** = This field states if the minion is teleported with you (1) or dies when you teleport or warp to other areas (0)

**range** = Use this field if you want your pets to stay alive when you teleport even if "**warp**" is set to 0 . Keep in mind, however, that your minions will still die if your distance from them exceeds **41** sub-tiles (notice: a good vanilla example of this is the Sorceress' Hydra). These minion's death is only trigger by teleporting. If you keep venturing far they will just disappear as the other normal pets do

**partysend** = I didn't find any real use for that.

**unsummon** = Can the pet be unsummoned with the 'unsummon' skill? Set it to 1 for unsummonable pets.

**automap** = is the pet displayed on the map? Set it to 1 to make this happen

**name** = string file for the text under the pet's icon (taken from the .tbl files)

**drawhp** = is the pet's life displayed under its icon? Set it to 1 to make it happen, but be warned that the HP display will be canceled when you summon more than 1 pet belonging to this type.

**icontype** = the type of the pet icon:

```
0 - no icon
1 - Show Icon, but not quantity
2 - Show Icon and quantity
3 - Show Icon, but not quantity
```

**baseicon** \= The .dc6 file for the pet's icon, located in **_data\\global\\ui\\hireables\\_**  
**mclass1-4** = the alternative (of the same type) pets' hcldx numbers taken from Monstats.txt . A typical example of this are Hirelings and Golems.

**micon1-4** \= the alternative pet's .dc6 icons, that depends on the **mclass1-4** fields.

**eol** \= end of line.
