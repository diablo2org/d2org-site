---
title: SkillDesc.txt File Guide
summary: >-
  First post for me, but I've learned a lot from here in the past so I figured
  I'd help out with this info I've learned so far trying to update my skill
  page. Note that this is just a first pass so I'm…
keepId: 351
author: Nefarius
credit: by chippydip
posted: '2005-10-18'
views: 9422
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=351'
---
First post for me, but I've learned a lot from here in the past so I figured I'd help out with this info I've learned so far trying to update my skill page. Note that this is just a first pass so I'm sure there are many errors sitll, but it should give enough info on how this file works for people to start playing with it.

skilldesc.txt  
\-------------  
A. skilldesc - Name used in the skilldesc column of skills.txt to refer to this entry.  
B. SkillPage - Which page is skill displayed on (lowest page is numbered 1, middle 2, top 3, non-tree skills 0)  
C. SkillRow - Which row is skill displayed on (starting from top, rows 1-6)  
D. SkillColumn - Which column is skill displayed on (starting from left, cols 1-3)  
E. ListRow - Row in the skill speed bar the skill will appear in (lower numbers toward the bottom)  
F. ListPool - Unkown (seems to control the pooling of multiple scrolls into one icon in the skill speed bar.)  
G. IconCel - (X-1) frames for the icon in data\\global\\ui\\spells\\XXskillicon.dc6 (XX is char-dependant). eg. Sorc Fire Bolt is 0, so the computer will look under SOskillicon.dc6 frames 1 and 2 for the icons.  
H. str name - String table entry containing the skill name.  
I. str short - String table entry containing a short skill description (used in hover text on the skill speed bar and selected skill icons.)  
J. str long - String table entry containing a long skill description (used in the hover text of the skill tree.)  
K. str alt - String table entry containing an alternate skill name. The text is often the same as the skill name. Not sure where its used.  
L. str mana - String table entry containing the mana cost text (StrSkill3 or blank except for Eskillincaseraven for raven.) After delving into the file more deply, I'm not even sure this is being used since there are other lines which display mana cost.

Not quite sure what the following do. Best guess is they effect the damage display in the char screen. The numbers in descdam would represent different functions and 'ddam calc1' and 'ddam calc2' would be fed into this function. Functions 1-16 and 18 are currently used.

M. descdam  
N. ddam calc1  
O. ddam calc2

Before I realized this wasn't used in the skill mouse-overs I started to try and correlate the way damage was displayed to the function numbers in descdam. I'll leave in my observations, but I now think these have more to do with how damage is calculated for display on the char screen.  
1  
2  
3  
4  
5 Convert x% Physical Damage to Magic Damage  
Damage: +x  
6 Convert x% Physical Damage to Elemental Damage  
7 Damage: +x percent  
8 Average Fire Damage: x-y per second  
Range: z yards  
or  
Average Cold Damage: x-y per second  
Cold Length: z seconds  
Range: w yards  
9 Fire Duration: x seconds  
Average Fire Damage: y-z per second  
or  
Average Fire Damage: x-y per second  
or  
Damage: a-b  
Fire Damage: x-y  
Average Fire Damage: z-w per second  
10 Damage: +x percent  
Stun Length: y seconds  
11 Cold Length: x seconds  
Elemental Damage: +y percent  
12 Magic Damage: x-y  
13 nothing (synergy damage bonus)  
14 Life Steal/Mana Steal + -75% damage  
15 Kick Damage: +x percent  
16 Fire Damage: +x percent  
17 ???  
18 Charge 1/Charge 2/Charge 3

These are all used for elemental charge up skills (descdam = 18). Again, I think this effects damage displayed on the char screen.

P. p1dmelem  
Q. p1dmmin  
R. p1dmmax  
S. p2dmelem  
T. p2dmmin  
U. p2dmmax  
V. p3dmelem  
W. p3dmmin  
X. p3dmmax

Y. descatt - I'm guessing this effects the Attack Rating display on the char screen?

References to related missiles in missiles.txt? Need to look into this a bit more.  
Z. descmissile1  
AA. descmissile2  
AB. descmissile3

Now the meat and potatoes of the file. The rest of the file consists of 3 different description sections (desc, dsc2, and dsc3) which control the following parts of the skill description:

desc\* -> level dependent description (bottom to top)  
dsc2\* -> level independent description (bottom to top)  
dsc3\* -> synergy descriptions (top to bottom)

Within each section, there are parameters for upto 7 lines of description (actually, 7 parts as a few of them actually add more than one line to the text.) As normal for skill description type stuff, desc and dsc2 add their lines to the description from bottom to top while dsc3 goes from top to bottom.

Each line consists of a type (descline), 2 text references (from .tbl files) and then 2 calculations. For those of you familiar with printf, I've compiled a list of the translations from type->format string and how it is used. This is just a first pass and I'm sure there are mistakes in there, but you get the general idea. 71 is a bit odd as it has a sort of 'nested' formatting. 53-56 are used for TP/ID scrolls/books, but I'm not sure what description they are generating to check it out. There are a few unused numbers tagged with question marks which are not currently used, but may still be implemented in the code.

1 'Mana Cost: %d',usmc>>8  
2 '%s+%d%s',desctexta,desccalca,desctextb  
3 '%s%d%s',desctexta,desccalca,desctextb  
4 '%s+%d',desctexta,desccalca  
5 '%s%d',desctexta,desccalca  
6 '+%d%s'desccalca,desctexta  
7 '%d%s'desccalca,desctexta  
8 'To Attack Rating: +%d percent',att  
9 'Duation: %d-%d seconds',?,?  
10 '%s Damage: %d-%d',etype,emin,emax  
11 '%s Damage: %d-%d',etype,emin,emax  
12 '%s%d seconds',desctexta,desccalca  
13 'Life: %d',(minionlife+desccalcb)\*(100+desccalca)/100  
14 'Poison Damage: %d-%d\\nover %d seconds',poismin,poismax,poislen  
15?  
16 '%s%d-%d seconds',desctexta,desccalca/25,desccalcb/25  
17 '%s%s%d-%d per second',desctexta,desctextb,desccalca,desccalcb  
18 desctexta  
19 '%s%d yards',desctexta,desccalca\*2/3  
20?  
21?  
22 'Average Fire Damage: %d-%d per second',burnmin,burnmax  
23 '%s%d seconds',desctexta,desccalca  
24 '%s%d-%d',desctexta1,hydramin,hydramax  
25 desctexta  
26 'Average Cold Damage: %d-%d per second',coldmin,coldmax  
27 'Average Fire Damage: %d-%d per second',burnmin,burnmax  
28 'Radius: 1 yard'  
29 '%d yards',firewallsize  
30 '%s%d seconds',desctexta,desccalca/25  
31 '%s%d seconds',desctexta,desccalca/25  
32 '%s%s+%d percent',desctexta,desctextb,desccalca  
33 '%s%s%d',desctexta,desctextb,magilifebonus  
34 'Damage: %d-%d',skelmin,skelmax  
35 '%s%d-%d',desctexta,desccalca,desccalcb  
36 '%d%s',desccalca,desccalca == 1 ? desctexta : desctextb  
37 '%s%d yards',desctexta,desccalca1\*2/3  
38 '%s%d-%d%s',desctexta,desccalca,desccalcb,desctextb  
39 'Damage: %d-%d',bgmin,bgmax  
40 desctexta,desctextb  
41 'Fire Damage: %d-%d',desccalca,desccalcb  
42 '%s: +%d.%d %s',desctexta,desccalca,desccalcb,desctextb  
43?  
44?  
45 'Thorns Damage\\n%d percent Damage Returned',thorns  
46?  
47 '%s%d-%d',desctexta,desccalca,desccalcb  
48 'Magic Damage: %d-%d',emin,emax  
49 '%s+%d-%d',desctexta,smitemin,smitemax  
50 '%s%d-%d',desctexta,holyboltmin,holyboltmax  
51 desctexta,desccalca  
52 '%s+%d-%d%s',desctexta,desccalca,desccalcb,desctextb  
53 ?  
54 ?  
55 ?  
56 ?  
57 '%s+%d seconds',desctexta,desccalca  
58?  
59 '%s%d-%d',desctexta,desccalca,desccalcb  
60?  
61 '%s%d%s',desctexta,desccalca>>8,desctextb (desccalcb not used?)  
62 '%s%s%d-%d',desctexta,desctextb,desccalca,desccalcb  
63 '%s: +%d%% %s',desctexta,desccalca,desctextb  
64?  
65?  
66 desctexta,desccalca  
67 '%s+%d%s',desctexta,desccalca,desctextb  
68 '%d%s%s',desccalca,desctexta,desctextb  
69?  
70 '%s%s+%d',desctexta,desctextb,desccalca  
71 ('%s: %s',desctexta,desctextb),desccalca  
72 '+%d/%d%s',desccalca,desccalcb,desctexta  
73 '%d/%d%s',desccalca,desccalcb,desctexta

AC. descline1  
AD. desctexta1  
AF. desctextb1  
AG. desccalca1  
AH. desccalcb1  
AI. descline2  
AJ. desctexta2  
AK. desctextb2  
AL. desccalca2  
AM. desccalcb2  
AN. descline3  
AO. desctexta3  
AP. desctextb3  
AQ. desccalca3  
AR. desccalcb3  
AS. descline4  
AT. desctexta4  
AU. desctextb4  
AV. desccalca4  
AW. desccalcb4  
AX. descline5  
AY. desctexta5  
AZ. desctextb5  
BA. desccalca5  
BB. desccalcb5  
BC. descline6  
BD. desctexta6  
BE. desctextb6  
BF. desccalca6  
BG. desccalcb6  
BH. dsc2line1  
BI. dsc2texta1  
BJ. dsc2textb1  
BK. dsc2calca1  
BL. dsc2calcb1  
BM. dsc2line2  
BN. dsc2texta2  
BO. dsc2textb2  
BP. dsc2calca2  
BQ. dsc2calcb2  
BR. dsc2line3  
BS. dsc2texta3  
BT. dsc2textb3  
BU. dsc2calca3  
BV. dsc2calcb3  
BW. dsc2line4  
BX. dsc2texta4  
BY. dsc2textb4  
BZ. dsc2calca4  
CA. dsc2calcb4  
CB. dsc3line1  
CC. dsc3texta1  
CD. dsc3textb1  
CE. dsc3calca1  
CF. dsc3calcb1  
CG. dsc3line2  
CH. dsc3texta2  
CI. dsc3textb2  
CJ. dsc3calca2  
CK. dsc3calcb2  
CL. dsc3line3  
CM. dsc3texta3  
CN. dsc3textb3  
CO. dsc3calca3  
CP. dsc3calcb3  
CQ. dsc3line4  
CR. dsc3texta4  
CS. dsc3textb4  
CT. dsc3calca4  
CU. dsc3calcb4  
CV. dsc3line5  
CW. dsc3texta5  
CX. dsc3textb5  
CY. dsc3calca5  
CZ. dsc3calcb5  
DA. dsc3line6  
DB. dsc3texta6  
DC. dsc3textb6  
DD. dsc3calca6  
DE. dsc3calcb6  
DF. dsc3line7  
DG. dsc3texta7  
DH. dsc3textb7  
DI. dsc3calca7  
DJ. dsc3calcb7  
DK. eol - Unknown (always 0)
