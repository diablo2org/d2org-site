---
title: ObjGroup.txt
summary: >-
  GroupName: A reference field for internal use, so you know what kind of
  objects this line will spawn.
keepId: 394
author: Nefarius
credit: 'by Nefarius, restyled by Ogodei'
posted: '2006-06-16'
modified: '2018-10-22'
views: 9791
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=394'
---
**GroupName**: A reference field for internal use, so you know what kind of objects this line will spawn.

**Offset**: The unique ID number of this group, this is the number you would use in [Levels.txt](/kb/file-guides/levels-txt) to assign this object group to a level.

**ID0 - ID7**: This column contains the unique ID numbers of the objects assigned to this object group.

**Density0 - Density7**: These fields are related to how densly the level will be filled with this object. These work like the '**MonDen**' column in [Levels.txt](/kb/file-guides/levels-txt). However, the density of objects is influenced by the objects PopulateFn in [Objects.txt](https://d2mods.info/forum/kb/posting?mode=edit&a=393) to a much higher degree. This column cannot exceed **125**, higher values will cause the game to crash.

**Prob0 - Prob7**: These fields represent the chance that these object will be picked, and work on a direct basis, which means that the value entered in this field is the actual chance for the objects to spawn.  
NOTE: Due to this mechanic, setting one of the objects in the group to have a probability of 100% will prevent the other ones from spawning. (it should actually equal 100 for best results, but no single object should have 100, it is best to divide 100 by number of objects and use that value in this field).

**Shrines**: Whenever to use shrine-logic when spawning this object group in a level, note that the object must not have '**DensityX**' assigned and it also needs to use the proper PopulateFn for this to work.

**Wells**: Whenever to use well-logic when spawning this object group in a level, note that the object must not have '**DensityX**' assigned and it also needs to use the proper PopulateFn for this to work.
