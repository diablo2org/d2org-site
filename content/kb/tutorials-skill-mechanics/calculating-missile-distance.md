---
title: Calculating Missile Distance
summary: >-
  Relevant Files: missiles.txt skillcalc.txt skilldesc.txt radius.png (attached
  below)
keepId: 463
author: Necrolis
credit: >-
  How to calculate exact missile distances for missile with a static velocity by
  Demon9ne
posted: '2010-12-07'
modified: '2018-01-06'
views: 6669
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=463'
---
Relevant Files:  
missiles.txt  
skillcalc.txt  
skilldesc.txt  
radius.png (attached below)

Synopsis:

Below is the method to use to exactly calculate the distance (the range or radius in yards) of missiles with a static velocity and display it correctly in your skill descriptions. Missiles fitting this criteria have a positive Vel and Range, and lack acceleration in missiles.txt. They may or may not have a LevRange.

The Distance Formula:

**Yards = Velocity \* Range / Screenlength**

**Velocity** (missiles.txt Vel) is the distance in pixels a missile travels per frame (1/25th of a second).  
**Range** (missiles.txt Range) is the existence of a missile, in frames.  
**Screenlength** is the amount of yards on screen, diagonally. This is always 32 (refer to radius.png).

Yards vs. Tiles/Subtiles:

**Subtiles = Yards \* 2 / 3**

Units in Diablo 2, whether the player, an enemy, or a missile, occupy an isometric space in subtiles (missiles.txt: Size, monstats.txt: SizeX/SizeY). The player occupies a space with a sizeX and sizeY of 2, as seen in radius.png.

**Subtiles** are 16px vertical x 32px horizontal; Blizzard refered to subtiles as 'squares' in some places.  
**Yards** are 24px vertical x 48px horizontal; according to the [Arreat Summit](http://classic.battle.net/diablo2exp/faq/gameplay.shtml) and confirmed by the math here and radius.png.  
**Tiles** are 80px vertical x 160px horizontal; note that the 80th pixel exists, but does not actually display on screen.

Skilldesc.txt - Relevant Desclines:

**Descline 19: S2S1(C1\*2/3)(StrSkill26)**  
If you've read the math above, you're probably wondering why Descline 19's formula to calculate subtiles is followed by the string index displaying ' yards'. There is a possibility that Blizzard corrected for this using missile acceleration or math inside the skill or missile functions, and there is also a possibility that every vanilla skill using this descline has the incorrect distance displayed. This descline should be using the string index displaying ' squares', aka StrSkill 19. Note the number 19 appearing twice; probably not a coincidence.

**Descline 37: S2S1(C1\*1/3)(StrSkill26)**  
This descline, which should also end in ' squares', calculates distance in subtiles when C1 points to a distance in half-subtiles, such as in the case of Corpse Explosion.

**Descline 3: S1C1S2**  
This descline has no math or text hiding behind it and makes a good replacement for either of the two desclines above.

Skilldesc.txt and String.tbl - Displaying Distance in Skill Descriptions:

**Option 1: Distance in Yards**  
Display: arrow range: 30 yards  
descmissile1: arrow \[missiles.txt: Missile, used in all the examples below, for simplicity.\]  
desclineX / dscXlineX: 19 \[Display: S2S1(C1\*2/3)(StrSkill26)\]  
S1: StrSkill56 \[This vanilla string index in string.tbl will add 'range: ' to the skill description.\]  
S2: (string index) \[Create a new string index in patchstring.tbl to add 'arrow ' to the skill description.\]  
C1: (24 \* m1rn / 32) \* 150 / 100 \[24 is missiles.txt: Vel, m1rn refers to the Range and LevRange of descmissile1, 32 is screenlength. The rest of the formula here nullifies the descline's math to ensure a distance correctly displayed in yards rather than subtiles.\]  
C2: (empty/notes) \[This calc is not read by descline 19, so you can leave it blank or enter a note about your formula here, if you prefer.\]

**Option 2: Distance in Yards (Using 1 String Index)**  
Display: radius: 30 yards  
descmissile1: arrow \[As in Option 1.\]  
desclineX / dscXlineX: 19 \[As in Option 1.\]  
S1: StrSkill18 \[This vanilla string index in string.tbl will add 'radius: ' to the skill description.\]  
S2: blank \[This vanilla string index in string.tbl will add nothing to the skill description.\]  
C1: (24 \* m1rn / 32) \* 150 / 100 \[As in Option 1.\]  
C2: (empty/notes) \[As in Option 1.\]

**Option 3: Distance in Subtiles**  
Display: arrow range: 20 squares  
descmissile1: arrow \[As in Option 1.\]  
desclineX / dscXlineX: 19 \[As in Option 1.\]  
S1: StrSkill56 \[This vanilla string index in string.tbl will add 'range: ' to the skill description.\]  
S2: (string index) \[Create a new string index in patchstring.tbl to add 'arrow ' to the skill description.\]  
C1: 24 \* m1rn / 32 \[As in Option 1, except utilizing the formula of the descline.\]  
C2: (empty/notes) \[As in Option 1.\]  
StrSkill26 in String.tbl: ' squares' \[Change this string to display subtiles correctly. This changes every occurance of descline 19 and 37.\]  
StrSkill19 in String.tbl: ' yards' \[To display distance in yards elsewhere, change this string for future use. It is not used in the vanilla game and will not impact any text if changed.\]

**Option 4: Distance in Screen Percentage**  
Display: range: 93% of screen  
descmissile1: arrow \[As in Option 1.\]  
desclineX / dscXlineX: 3 \[Display: S1C1S2\]  
S1: StrSkill56 \[This vanilla string index in string.tbl will add 'range: ' to the skill description.\]  
S2: (string index) \[Create a new string index in patchstring.tbl to add '% of screen' to the skill description.\]  
C1: 24 \* m1rn \* 100 / 1024 \[As in Option 1, except calculating screenlength by a percentage.\]  
C2: (empty/notes) \[As in Option 1.\]

Notes:

• Changing a C1 distance calc to m1rn \* velocity / 32 (in that order, with m1rn first in the formula) will bug your math.  
• Some skills have a hardcoded range. The Barbarian's Howl skill is an example, in which the radius is always a full screen (or perhaps higher). In such a situation, you can choose to use descline 19 with C1: Vel + 48 (in the dsc2lineX section, to avoid the current/next level display) to always show a radius of 32+ yards. You could also use descline 18 with a new string index to show only 'full screen radius'.

\[img=[https://d2mods.info/forum/download/file.php?id=363](https://d2mods.info/forum/download/file.php?id=363)\]\[/img\]

Credits:

Nefarius and Brother Laz (missiles.txt file guide)  
RicFaith (skilldesc.txt file guide)  
Paul Siramy (radius.png)  
Onyx (tile/subtile information)  
RedHavoc (tile/subtile information)

Edit 1: Added a final note about possible hardcoded range and a credit I missed.  
Edit 2: Rewrote the majority of the tutorial to include a multitude of corrections.
