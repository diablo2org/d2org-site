---
title: Mercenary Only Items / True Carry 1 Items (by tsuru)
summary: This tutorial will guide you thru creating mercenary only items.
keepId: 374
author: Nefarius
posted: '2007-05-04'
views: 10286
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=374'
---
I was asked how to make mercenary only items in Eastern Sun forum.  
[https://d2mods.info/forum/viewtopic.php?t=35758](https://d2mods.info/forum/viewtopic.php?t=35758)

But a mod support forum is not an appropriate place to post a tutorial, so I post it here. I also explain how to prohibit carrying multiple unique charms of the same kind, which is another feature of the latest Eastern Sun patch and uses a similar trick.

Unique charms have been much exploited, even though they have carry1 flag. Cubing unique charms have an exploitable loophole. Old versions of some utility have an exploitable bug. I hear some players intentionally use those old utilities to cheat. These are why you need this trick.

1\. Making a new property 'vit-h'

ItemStatCost.txt  
Dupe the line of vitality (ID=3) to the end of file.  
Stat: vitality\_hidden  
ID: (the next number of the line before)  
Save Bits: 10  
Save Add: 928  
(These are the values used in ES. In this case this property can take a value between 95(=2^10-2-928) to -928. This is used to negate a character's Vitality. If your Mod allows more Vitality you will need more Save Bits and Save Add.)  
descpriority ~ dgrpstneg: blank  
(This is a hidden property and needs no description.)

Properties.txt  
Dupe the line of vit (10th line) to the end of file.  
code: vit-h  
stat1: vitality\_hidden

Now you can use a new property vit-h. The difference between vit and vit-h is:  
1) vit-h can take a negative value down to -928. (vit can take down to -32)  
2) vit-h doesn't show any description on the items.

2\. Making an item Mercenary Only

Add, say, 'vit-h,,900,900' to the item.  
Vitality doesn't affect mercenaries. But if a character equip this item, his life is reduced to 1.

3\. Making new skills 'Unique Charm Check n'

Skill.txt  
You need to make as many lines as the unique charms in your Mod. (If your Mod has 3 unique charms, you need to make Unique Charm Check 1, Unique Charm Check 2 and Unique Charm Check 3)  
skill: Unique Charm Check 1 (2, 3,..)  
Id: (the next number of the line before)  
skilldesc: unicharmchk  
passivestate: unicha1 (2, 3,..)  
passivestat1: vitality\_hidden  
passivecalc1: 900

SkillDesc.txt  
skilldesc: unicharmchk  
SkillPage ~ IconCel: 0  
strname ~ stralt: unicharm

States.txt  
You need to make as many lines as Unique Charms in your Mod.  
state: unicha1 (2, 3,..)  
id: (the next number of the line before)

PatchString.tbl  
unicharm: Unique Charm Check

4\. Prohibiting carrying multiple Unique Charms of the same kind

Add 'vit-h,,-900,-900' to the item.  
Add 'oskill,Unique Charm Check n,1,1' to the item. (n= 1, 2, 3,..)

A Unique Charm gives -900 to Vitality and +1 to Unique Charm Check 1 (+900 to Vitality).  
So if you carry only one Unique Charm, they negate each other.  
2 Unique Charms give -1800 to Vitality and +2 to Unique Charm Check 1 (only +900 to Vitality, because slvl doesn't matter).  
So if you carry 2 or more Unique Charms, your life is reduced to 1.

Known Issues

1) You can still buy and gamble with 1 life. So this protection doesn't work well with Reduce Vendor Price charms. I think giving this property to a charm itself is not recommended.

2) If the target Unique Charm has any Vit bonus, the character's life is once reduced to 0 whenever you pick up or put down the charm (very annoying). To avoid this, please give the charm a Life Bonus instead of a Vit bonus.
