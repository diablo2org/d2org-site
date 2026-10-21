---
title: SkillDesc.txt File Guide (v. 2)
summary: >-
  Overview: Skilldesc is an important part of the skill making process. It gives
  the modder the ability to fully customize the skill descriptions of his
  skills. It is also important for the placement…
keepId: 370
author: Nefarius
credit: 'by Ric Faith, restyled by HarvestWombs'
posted: '2005-11-18'
modified: '2019-09-17'
views: 28956
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=370'
---
**_SkillDesc.txt File Guide_**  
& descline reference by RicFaith

**_Overview:_**  
Skilldesc is an important part of the skill making process. It gives the modder the ability to fully customize the skill descriptions of his skills. It is also important for the placement and arrangement of skills on the skilltrees.

Files used by SkillDesc:  
[Missiles.txt](/kb/file-guides/missiles-txt)  
[MonStats.txt](/kb/file-guides/monstats-txt)  
[Skills.txt](/kb/file-guides/skills-txt)

String.tbl  
Expansionstring.tbl  
Patchstring.tbl

Note:  
Patchstring > Expansionstring > String  
This means that any entry in Patchstring will overwrite the an entry of the same index in Expansionstring or String, and any entry in Expansionstring will overwrite another entry sharing the same name in String. Thus to find the most recent string, you should check in the order stated above.

Naming convention:  
So as to make certain things clearer, and to simplify this File Guide, here are some naming conventions that I will use while describing:

string(s) - refers to an entry in any of the .tbl files  
tree(s) or page(s) - the skill trees available to the character  
shortcut(s) - the list of skills that show up when you press 'S'  
charscreen - character screen, shows up when you press 'C'  
selected skill - one of the two active skills that are set to your mouse buttons

### -

**skilldesc:** Name of the skill description, referenced by skills.txt (col D).

### -

**SkillPage:** (Allowed values = 0 - 3) Determines which page the skill will show up.

```
0 - not on trees
1 - bottom page
2 - middle page
3 - top page

```

**SkillRow:** (Allowed values = 0 - 6) Determines which row the skill will show up.

```
0 - not on page
1 - top row
6 - bottom row
```

**SkillColumn:** (Allowed values = 0 - 3) Determines which column the skill will show up.

```
0 - not on page
1 - left column
2 - middle column
3 - right column  

```

**ListRow:** (Allowed Values = -1 - 4) Determines which row the skill will show up in the shortcuts

```
-1 & every other value - skill will not shot up  
0 - reserved for basic attacks and unsummon  
1-3 - for skills, from bottom up, usually the same value as SkillPage, but not necessarily
4 - reserved for Identify and Town Portal
```

**ListPool:** (Allowed Values = 0 - 2) Used only by Identify and Town Portal scrolls.

```
0 - Everything else
1 - scroll of identify
2 - scroll of town portal
```

**IconCel:** (Allowed Values = 0 - X) (user defined, read below)  
Used to determine the icons (usable and unusable) used by the skill. Value that is put here determines the usable icon, and the next icon will be the unusable icon.  
Icons always come in pairs, so if you're making your own skill icons, do put them in the right order.

If skill is a class skill, icons will be taken from :  
dataglobaluispellsXXskillicon.dc6 where XX is -

```
XX	Class
am	Amazon
as	Assassin
ba	Barbarian
dr	Druid
ne	Necromancer
pa	Paladin
so	Sorceress
```

If skill is not a class skill, icons will be taken from :  
dataglobaluispellsskillicon.dc6

**str name:** This is the string that is used as the skill name in the trees, the shortcuts and the selected skill.

**str short:** This is the string that is used as the skill description in the shortcuts and the selected skill.

**str long:** This is the string that is used as the skill description in the trees.

**str alt:** This is the string that is used as the skill name in the charscreen.

**str mana:** Usual values = StrSkill3 or (blank)  
Even if your skill has no mana cost, putting a string here will not display a 0 mana cost. You can use StrSkill3 ('Mana Cost: ') or your own fancy string for mana cost.  
_Eg. Raven has its own mana cost string ('Mana Cost Per Raven')_

**descdam:** Allowed values = 1 - 24 or (blank)  
If your skill deals damage, then you need to use this to tell skilldesc how to go about calculating the damage. Here is a list of the various values for descdam.

```
descdam   description  
1   attack
2   kick
3   throw
4   left hand throw
5   check dmg cols
6   arrow with explode
7   attacks w dmg increases
8   inferno type dmg
9   blaze,firestorm  
10   smite
11   vengeance  
12   blessed hammer
13   double throw
14   hunger
15   kick combo  
16   kick AoE
17   cstrike
18   royal strike  
19   2h attacks
20   assn chargeups
21   lightbolt
22   javelin with explode
23   rabies
24   blade fury
```

Some skills have their own special descdam, so you should check the most relevant skill to yours to see if it requires something different, otherwise it's almost always 5.

**ddam calc1** / **ddam calc2** If your skill has an increase in damage, you'll need to fill in one or both of these columns. The resulting damage is given by this formula:  
_Damage = (Original Damage) \* (100 + ddam calc1)/100 + ddam calc2_  
Thus if your skill has a %age increase in damage, put the increase or calc in **ddam calc1**. Or if your skill has a flat +X increase in damage, put the increase or calc in **ddam calc2**.

**pXdmelem** / **pXdmmin** / **pXdmmax** where X = 1 - 3  
These are only used by the Assassin charge-up attacks. These columns describe the necessary details.  
**pXdmelem** - The element type for that charge  
**pXdmmin** - Minimum damage for that charge  
**pXdmmax** - Maximum damage for that charge

**descat:** (Allowed values = 1 - 5 or (blank))  
If your skill has an increase in attack rating, you will need to fill this column. I can't see any difference between 1 and 2, so I guess you should look at the skill that is closest to yours.

```
descatt  description
1   increase in attack rating
2   increase in attack rating
3   throw
4   left hand throw
5   kick finishers
```

**descmissileX** where X = 1 - 3 In the case where your damage, duration or other values are taken from missiles, you will need to put the primary missile in descmissile1.  
Currently, it seems that the **descmissile2** and **descmissile3** are only used by assassin charge-ups, but I think you should be able to put other missiles here for description too.

From here, the real stuff begins. Since it is highly repetive in nature, I will explain it differently.

There are 3 main sections for descriptions, **desc**, **dsc2** and **dsc3**. First a breakdown of where these descriptions show up.

**desc:** Shows up in trees, shortcuts and selected skill.  
**dsc2:** Shows up in trees, shortcuts and selected skill.  
**dsc3:** Sshows up in trees only.

Next, I'll describe what the different descriptions show.

Shortcuts and Selected skill - **desc** and **dsc2** show current level stats only.  
Trees -  
**desc:** Show current and next level stats  
**dsc2:** Show current stats  
**dsc3:** Show current stats (but is currently used for synergies)  
For a more precise layout of the stats, see Appendix A below.

If you leave a set blank, they will simply be ignored. So you can fill any  
sets of columns, the blank ones will be skipped.

Now, we will cover the different parts of a description. I will use just 1 set of columns for simplicity, the effect is the same for all columns. Each set of columns will have:  
**descline**, **desctexta**, **desctextb**, **desccalca**, **desccalcb**  
with various numbers appended to them.

**descline:** (Allowed values = 1 - 75 or (blank))  
This tells skilldesc the format of the description, which values to take and which order to place them. Read further for an example. All desclines and their usage can be found in Appendix B.

**desctexta** / **desctextb:** These are strings that may be filled or left blank.  
Some desclines are not picky about whether these are filled, but since there are so many desclines, you can find something that matches your needs quite closely.

**desccalca** / **desccalcb:** These are numbers or calcs that may be filled or left blank.  
Similar to **desctexts**, **desccalcs** may be treated as empty or 0 if not present, so if you don't need the extra space, choose a suitable descline.

### -

In Appendix B, I used the following notation:  
S1 & S2 refer to desctexta and desctextb respectively. S for String because that is what these two columns are.  
C1 & C2 refer to desccalca and desccalcb respectively. C for Calc  
I used S1,S2,C1,C2 because these are immediately identifiable. Most of the desclines come with fixed text. You can change the 'fixed' part in the .tbl files, but you'll be changing them for all skills that use that descline. Anyway there are so many workarounds that you really don't have to change it, just use another descline.

_Example 1:_  
I'll use descline 3 as an example.  
Descline 3 gives the following output: S1C1S2  
This means that if my input is  
S1 = 'Good'  
S2 = 'Nothing'  
C1 = 4  
C2 = 365  
The result will be 'Good4Nothing'. There are no spaces, because the output merely concatenates everything. C2 is ignored because it is not included in the output.  
If S1 was blank, the output is '4Nothing'  
If S2 was blank, the output is 'Good4'  
If C1 was blank, the output is 'GoodNothing'

I'm sure that is quite clear, now on to some of the more complex desclines

_Example 2:_  
Some desclines don't use string or calcs, so I'll show a nice one for poison skills.  
Descline 14 has the following output:  
Poison Damage: X-Y  
over Z seconds

Yes, some desclines produce more than one line, but they're usually a little hardcoded. This descline reads the values of EMin, EMax and ELen from skills.txt and does some math before displaying the values.

For this example, I'll use Poison Nova Lvl 1  
From skills.txt:  
HitShift = 4  
EMin = 14  
EMax = 25  
ELen = 50

First, some things you have to know about the values in Len, this value is in frames, and Diablo has 25 frames to a second. Thus Poison Nova does damage for 2 seconds.

Next, for HitShift, this is because Blizzard uses 8 bits of accuracy for HitPoints, Mana and Stamina. HitShift for Poison Nova is 4, so the damage is 'divided' by 2^4 = 16.

Anyway, back to the descline and the formula.  
The output has X,Y and Z, this is because even these values are not raw values. Here's how we calculate them:  
X = EMin\*ELen/16 = 43  
Y = EMax\*ELen/16 = 78  
Z = ELen/25 = 2

Last thing to note, Blizzard rounds everything down to the integer. So 3/4 = 0, 41/40 = 79/40 = 1.

In the end, we get the final output:  
Poison Damage: 43-78  
over 2 seconds

### -

Conclusion:  
Skilldesc can get a bit tricky, and sometimes some things just don't work so well. My advice is that even though some of the desclines may look perfect for your skill description, if they don't work, try using some of the more common ones. Some of the desclines are not used in skilldesc, I found them by trying every number. Some are only used by one skill, so I classed it as being specific, though they may still be able to work, don't get too worked up when it doesn't. In my opinion, you can do a lot with just the basic few. You can do your own calcs and display a raw number instead of leaving it to the hardcoded desclines. But it's up to the individual modder

### -

Appendix A: Layout of Skill Description on the Tree.

\-----  
str name  
str long

(all dsc2 lines)

Current Level: X  
(all desc lines)

Next Level: X+1  
(all desc lines)

(all dsc3 lines)  
\-----

As mentioned earlier, synergies are using dsc3 lines, so they'll be shown right at the bottom. If you want some stats that only show for current level, use dsc2. If you want stats that show for current and next levels, use desc.

### -

Appendix B: List of desclines

This list is a bit long (75 entries), so I put it in a code. I'm thinking of making an excel page that allows you to put values in to see the result, but there may or may not be a need for it. I'll see how it goes. If you think that it'd be good, PM me so I know there's a demand.

Explanations:  
descline = descline number  
formula used = result from the inputs  
calc/desc = in the event that the numbers are not directly related to inputs S1,S2,C1,C2, I explained it here  
elem = if this descline refers to a specific elem, because of the calc method or if it can take any elem based on the EType in skills.txt, then I'll state it here  
reference = the files it references, such as skills.txt, missiles.txt etc.

[https://docs.google.com/spreadsheets/d/ ... sp=sharing](https://docs.google.com/spreadsheets/d/1JrMKz_q-DjkPxYmrnn95oKF2HLi8bEMkRHj1SIxy85I/edit?usp=sharing)

Appendix C: Color Codes

The values that you can put in the C1 column for skilldesc 40 and a couple of others can be found here:

```
0 - Light Gray (normal text)
1 - Red  
2 - Bright Green (Set Items)  
3 - Blue (Magic Items)  
4 - Gold (Unique Items)  
5 - Dark Gray (Socketed/Ethereal Items)
6 - Transparent (Text Doesn't Show)  
7 - Tan  
8 - Orange (Crafted Items)  
9 - Yellow (Rare Items)
```
