---
title: Creating the Skill-Enchanted Bone Maul
summary: >-
  As some of you probably know, I had a version of this tutorial posted
  previously for an earlier version of D2. That one was a little makeshift in
  nature so I thought I might as well redo it somewhat…
keepId: 196
author: Phrozen Heart
credit: by Phrozen Heart
posted: '2003-12-02'
views: 6523
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=196'
---
As some of you probably know, I had a version of this tutorial posted previously for an earlier version of D2. That one was a little makeshift in nature so I thought I might as well redo it somewhat and also make sure it works for the latest version of the game (which is v1.09d at the time of writing this tutorial).

---

The files you'll need to make this modification are:

data/global/excel/itemtypes.txt  
data/global/excel/weapons.txt  
data/local/lng/eng/patchstring.tbl (English version only)

---

ItemTypes.txt

Find an unused line in the spreadsheet (eg. Lines 16,19,25 etc)

**Column A ItemType** - Just for reference. Enter in 'Enchanted Club' or whatever.  

**Column B Code** - The code that the other files reference this item type as. Enter in 'encl'  

**Column C Equiv1** - The main itemtype this itemtype is a subtype of. Enter in 'blun' as the bonemaul is a subtype of the Blunt Weapons itemtype.  

**Column D Equiv2** - The second main itemtype this itemtype is a subtype of. Just leave it empty.  

**Column E Repair** - Enter 1 if you want the item to be repairable or 0 if you don't.  

**Column F Body** - Whether the item can be equiped to the character's body as opposed to an inventory item such as charms. Obviously as this is a weapon, you want the character to be able to equip it so enter a 1.  

**Column G BodyLoc1** - The first slot on the body the item can go in. Weapons need to be carried for enter 'rarm' for the right arm body slot.  

**Column H BodyLoc2** - The second slot on the body the item can go in. Weapons need to be carried for enter 'larm' for the left arm body slot.  

**Column I Shoots** - Not a missile weapon so leave this blank.  

**Column J Quiver** - Not a missile weapon so leave this blank.  

**Columns K-T** - Leave these all as 0. Optionally, you can set column P (Rare) to a 1 if you want your new item type to be spawnable as a rare item.  

**Column U MaxSock1** - Maximum number of sockets the item can spawn with in normal difficulty. The bone maul will have a 2x3 inventory size so it can have up to 6 six sockets without looking too screwy. To show a progression through the difficulty levels, I'd suggest using a 2 in here for normal. This number will cap off any value entered in the 'gemsockets' column of the weapons.txt file.  

**Column V MaxSock25** - Maximum number of sockets the item can spawn with in nightmare difficulty. The bone maul will have a 2x3 inventory size so it can have up to 6 six sockets without looking too screwy. To show a progression through the difficulty levels, I'd suggest using a 4 in here for nightmare. This number will cap off any value entered in the 'gemsockets' column of the weapons.txt file.  

**Column W MaxSock40** - Maximum number of sockets the item can spawn with in hell difficulty. The bone maul will have a 2x3 inventory size so it can have up to 6 six sockets without looking too screwy. To show a progression through the difficulty levels, I'd suggest using a 6 in here for hell. This number will cap off any value entered in the 'gemsockets' column of the weapons.txt file.  

**Column X TreasureClass** - Just leave this as 0.  

**Column Y Rarity** - How frequently the itemtype will drop. The lower the value, the less frequent you'll see the item spawing. Most regular items have a 3 while the rarer class items have a 1 so it's up to you.  

**Column Z StaffMods** - This is where you can determine which class skills spawn on the item. Personally I'd say the Bone Maul would most likely be a necromancer item so I'd enter 'nec' but you also enter in the first three letters of any of the other classes to give bonus skills for those classes. Be wary about making weapons with barbarian skills though, considering the nature of the class' masteries. Spawning an enchanted maul with sword, axe and polearm skill mastery bonuses is a little useless.  

**Column AA Cost Forumla** - Just leave this as 0.  

**Column AB Class** - If you want this weapon to be class specific, just enter the same value as you did in StaffMods, otherwise leave this one blank.  

**Column AC VarInvGfx** - The bone maul won't have random inventory graphics like charms, rings and amulets so just leave this as 0.  

**Column AD-AI** - See the previous column and just leave these blank.  

**Column AJ StorePage** - Which tab of a vendor's inventory this item appears in. Enter in 'weap' for the weapons tab.

---

weapons.txt

For convience sake, we'll use the regular maul as a model to work from. Find the lines for the Maul (Line 25), War Club (Line 118) and Ogre Maul (Line 222) which are the three variants of the standard maul. Copy these lines in full to the end of the file which would make them lines 309, 310 and 311.

**Column A name** - Just for reference. Enter in 'Bone Maul', 'Grim Maul' and 'Skull Hammer' which are the names I've given the three new variants but you can call them what you like.

**Column B type** - The itemtype of this item. Change all three to 'encl' which is the new itemtype you just created in itemtypes.txt.

**Column C type** - The 3 character code that the game internally references this item. Change the first line to 'bm1', the second to 'bm2' and the third to 'bm3'.

**Columns D-AJ** - Just leave them with the existing values.

**Column AK normcode** - The normal variant of this item. Enter in 'bm1' in each of the rows.

**Column AL ubercode** - The exceptional variant of this item. Enter in 'bm2' in each of the rows.

**Column AM ultracode** - The elite variant of this item. Enter in 'bm3' in each of the rows.

**Columns AN-AX** - Just leave them with the existing values.

**Column AY invfile** - The item's inventory graphic. Change the value 'invmau' (regular maul) to 'invmauu' (unique maul Bonesnap) in all three rows.

**Column AZ uniqueinvfile** - The item's unique inventory graphic. We've already used this graphic for the regular version so it doesn't matter if there's anything in this column or not, the regular and unique versions will both have the same image.

**Column BA setinvfile** - The item's set inventory graphic. We've already used this graphic for the regular version so it doesn't matter if there's anything in this column or not, the regular and set versions will both have the same image.

**Column BB hasinv** - Whether the item can have sockets or not. Just leave this as a '1' which means yes.

**Column BC gemsockets** - The maximum number of sockets this item can spawn with. Remember this amount is capped off by the 'maxsockets' columns in ItemTypes depending on the difficulty level. Just set this to the value you used in the MaxSockets40 column in itemtypes.txt for your new item type.

**Column BD gemapplytype** - Which modifiers are applied when a gem or rune is socketed into this item. Use a value of '0' which means the Weapon modifiers of the gem/rune.

**Columns BE-BS** - Just leave them with the existing values.

**Columns BT CharsiMin** - The minimum number of regular versions of this item Charsi will have available each time you visit town (space permmitting).

**Columns BU CharsiMax** - The maximum number of regular versions of this item Charsi will have available each time you visit town (space permmitting).

**Columns BV CharsiMagicMin** - The minimum number of magical versions of this item Charsi will have available each time you visit town (space permmitting).

**Columns BW CharsiMagicMax** - The maximum number of magical versions of this item Charsi will have available each time you visit town (space permmitting).

**Columns BX CharsiMagicLvl** - Maximum level of magic items Charsi can have for sale. Just leave this with the existing value of '255'.  

**Columns BY-EZ** - See columns BT through BX for Charsi and apply to the appropriate vendor. I'm pretty sure Cain was never implemented however.

**Columns FA-FE** - Just leave them with the existing values.

**Column FF NightmareUpgrade** - Which item spawns in place of this one in Nightmare difficulty. You can enter another item's code here if you like or just use 'xxx' in each row to leave the item the same.

**Column FG HellUpgrade** - Which item spawns in place of this one in Hell difficulty. You can enter another item's code here if you like or just use 'xxx' in each row to leave the item the same.

**Column FH Nameable** - Whether or not this item is nameable as a reward for rescuing Anya in act 5, 1 means yes and 0 means no.

**Column FI PermStoreItem** - Whether or not this item is always buyable from the chosen vendors. If this is set to 1, no matter how many of the item you buy there'll still alwsys be one available (for example, Akara sells infinite health potions in act 1).

---

patchstring.tbl

For these changes, I'd recommend using Darkstorm's Table Editor v1.02 which is available from the File Center.

**Add These New Strings**  
String Key 'bm1' with a string value of 'Bone Maul'  
String Key 'bm2' with a string value of 'Grim Maul'  
String Key 'bm3' with a string value of 'Skull Hammer'
