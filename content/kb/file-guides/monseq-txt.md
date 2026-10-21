---
title: MonSeq.txt
summary: >-
  MonSeq.txt This file is a softcoded monster sequence table (the character
  sequences remain hardcoded), each line herein represents one frame of the
  sequence, a sequence can have 0xFF (255) lines and…
keepId: 395
author: Nefarius
credit: 'by Nefarius, restyled by HarvestWombs'
posted: '2006-06-16'
modified: '2018-10-22'
views: 10931
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=395'
---
**_MonSeq.txt_**  
This file is a softcoded monster sequence table (the character sequences remain hardcoded), each line herein represents one frame of the sequence, a sequence can have 0xFF (255) lines and the file can hold 0xFF individual sequences. The ID of the sequence (the first column) is used to group the lines together to a single record.

**sequence:** The ID of this sequence when used inside the sequence columns of MonStats.txt, this is also what is used to group the various frames associated with this sequence together.

**mode:** The animation mode to use for this frame of the sequence (this is an ID pointer from MonMode.txt).

**frame:** The frame from the associated animation mode that will be used for this frame of the sequence, so if you use A1 as the mode, and use 12 as the frame for your first like, then the monster will use frame 12 as the first frame of the animation, rather then frame 0.

**dir:** What direction will the above frame be taken from, most animations have 8 directions.

```
0	South West
1	North West
2	North East
3	South East
4	South
5	West
6	North
7	Wast
```

**event:** What event will this frame trigger.

```
0	No event
1	Melee attack (missiles are only released client-side)
2	Missile attack (melee attacks will deal no damage)
3	Play a sound
4	Launch a spell
```

**eol:** End of line, this field prevents M$ Excel from messing up the file, if you fill the empty cells of the previous column with 0 this is not needed.
