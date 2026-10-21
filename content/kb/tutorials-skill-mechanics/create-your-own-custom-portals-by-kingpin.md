---
title: Create your own custom portals (by Kingpin)
summary: >-
  Learn how to create your own town portal skill and other things related to
  portals
keepId: 291
author: kingpin
posted: '2004-08-19'
modified: '2018-01-06'
views: 15216
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=291'
---
**Introduction**  
After my discovery that Blizzard had soft coded parts of the Red Portal missile (that is used by Tristram) over a half a year ago, I promised to write a tutorial about that subject. But, as you can read now the tutorial took over a half a year to make. The tutorial has extended far more than I initially intented and thinks it will be a lot better than previously.

To be able to follow this tutorial, you will be needed to know how to make own items and skills. You aren’t needed to know any code editing to be able to follow this tutorial.

You will be able to add this code by either using the modified d2game.dll that is included in this tutorial or use the d2mod.dll system by SVR (The needed code editing in this tutorial is added to the d2mod.dll system by SVR)

**General information about portals**  
In Diablo2 you have two different types of objects that are known as type1 and type2 objects. A portal is a type2 object and this means it is using objects.txt to set up all needed information about the object. The two most common portals is known as Red Portal (Tristram and other special areas is using this portal) and Blue Portal (Town portal).

**Town Portals**  
Town portals exist as books and scrolls. Those is using object ID 59 and token TP. Both town portal books and scrolls are using an entry in books.txt. This is used to add the skill to the item that you are using. We can’t add new entries to books.txt without code editing, so then we are working with our own custom portals we are not going to use books.txt.

Book of Town Portal is using skill ID 220 (Book of Town portal) and Scroll of Town portal is using skill ID 219 (Scroll of Town portal). As you probably know this skill isn’t added to a specific class. Instead it’s a general skill viable for all classes and since it uses general flag in skills.txt it also need an entry in charstats.txt.

**Town Portal’s object creation code is located at:** 6FD02D6C

If you are familiar with OllyDbg or any other debugger you can have a little fun and do a minor change related to town portal scrolls.

6FD02D61 6A3B push 0000003B ; Tells what object it will use when it creates the town portal

Change the 3B to 3C and we will use the red portal graphics instead of blue portal for our town portals. This change will also make the town portal as permanent portal. Since the code also looks for object ID 3B in the code it will show the label “No Level Name”, this because it never adds the destination level to the source object. We will ignore this problem for now.

**Red Portals**  
The other common type of portals that exists is red portals that are used in many places in the game. There are two major types of red portals; one is quest related portals and the other is used as permanent portals (mostly in act 5 special areas). Red portals is using ID 60 and token PP.

If we look deeper into the missile that is released when you have touched the Cairn Stones we will find something’s very interesting here. When the missile is finished it will spawn a red portal, in this case it spawns the portal to Tristram.

Before continue we take a look into missiles.txt and we will find 4 missiles that are related to Cairn stones.

Cairnstones ID (288)  
Cairnstonessky ID (289)  
Cairnstonesground ID (290)  
cairn stones bolt ID (384)

Cairn Stones missile ID (288) has one field of most interest and that is Param4 that controls objects destination level and as you can see here it uses 38 that is the ID for Tristram.

We will do a test here so go to the param4 field and change destination from 38 to 39. This will set Red Portal at Cairn Stone to be linked to Moo Moo Farm instead (remember you will need to change the destination ID before you do the quest other vise you changes will not be added).

There are several locations where Red Portal object is created. Down here you have a code location for those if you want to add your own changes.

**Custom Cairn Stone Missile:** 6FC585B4  
**Tristram:** 6FC9A852  
**Canyon of the Magic Red Portal:** 6FCA2B2A  
**Portal to Nihlathak’s Temple:** 6FCB5E4B (This location is the only one that I have seen to be used), 6FCB5BB2, 6FCB68EE  
**Portal to Cow Level:** 6FC9C6A1

**Other Blue Portals**  
There are other portals that use the same graphics as blue town portals in the game also. All those portals except portal’s spawned from shrines are used as quest related portals.

The code locations for those portals are down here.

**Andariel’s Town Portal:** 6FC9EE43  
**Tyriel’s Portal from Duriel’s Lair:** 6FCA4F9F

Non-walk able portals  
_There should obvious be a portal used by Barbarian’s in act 5_

**Cain’s portal (only used by Cain):** 6FC9A343  
**Anya’s Portal (only used by Anya):** 6FC86889

**Permanent Shrines:** 6FC768FB

**Red Portal Fix**  
_The code fix for Red portals is coded by SVR_

Anyone who has tried to do their own custom portal skill has come across the No Name that appears when moving the mouse pointer over the portal. The reason why this is appearing is because no destination id is stored in the portal object. Instead Blizzard do hardcoded checks, if the object is ID 59 it adds current town as destination id. If the portal is object ID 60 it has instead a lot of hardcoded checks to add correct name to the portal. To make this working in the way we want, we will be needed to add custom code to fix this problem.

If you want to add the code yourself you will be needed to use Ollydbg or any similar tool to add the code.

We are going to replace the Test ESI and JNZ so we can add a jump to our own custom code near end in d2game.dll

**Original Code:**  

```
000E3FD0 8BF0 MOV ESI,EAX
000E3FD2 85F6 TEST ESI,ESI
000E3FD4 75 0A JNZ SHORT 000E3FE0
000E3FD6 5F POP EDI
```

**Change Code:**  

```
000E3FD0   E9 712C0100      JMP 000F6A4C ; This will jump to our custom code

000E3FD5   90               NOP
```

**Custom Code:**  

```
000F6A4C 50 PUSH EAX ; add the value in EAX to stack so we can save it for later use
000F6A4D 51 PUSH ECX ; add the value in ECX to stack so we can save it for later use
000F6A4E 8B4E 14 MOV ECX,DWORD PTR DS:[ESI+14] ; Move portal pointer to ECX
000F6A51 8B4424 38 MOV EAX,DWORD PTR SS:[ESP+38] ; Move Destination Level ID to EAX
000F6A55 8841 04 MOV BYTE PTR DS:[ECX+4],AL ; Move lower byte from EAX that contains our destination level ID to the object pointer
000F6A58 59 POP ECX ; restore ECX from stack
000F6A59 58 POP EAX ; restore EAX from stack
000F6A5A E9 81D5FEFF JMP 000E3FE0 ; Jump back to original code
```

**Custom parameters for Red Portal missile**  
Our next part is to extend the use of Red Portal missile. There are two things we are going to soft code, we will add a check for what act the missile is allowed to be used in and also add what object the missile is spawned when the object is created.

The code is already containing a missile pointer that contains all server and client parameters. We will use the two last unused ClpParam4 and 5 and add our own info there.

**Missiles.txt**  
CltParam4 Act ID  
CltParam5 Object ID

This code will read the act ID value and do a check if the missile is allowed to spawn the portal object. This code is added to prevent the portal object to spawn in wrong act. Othervise you will get the problem with assertion errors, so better to be on the safe side to add a check than allow users to do the errors.

**Original Code:**  

```
000284BE 85FF TEST EDI,EDI
000284C0 75 0A JNZ SHORT D2Game.6FC584CC
000284C2 5F POP EDI
```

**Change Code:**  

```
000284BE   E9 9CE50C00      JMP 000F6A5F ; we have replaces the EDI and JNZ calls above to point to our custom code.
```

**Custom Code:**  

```
000F6A5F   56               PUSH ESI ; ptUnit
000F6A60   E8 454CFFFF      CALL 000EB6AA ; Get ptRoom from PtUnit
000F6A65   50               PUSH EAX ; ptRoom
000F6A66   E8 F14BFFFF      CALL 000EB65C ; Get Level ID From ptRoom
000F6A6B   50               PUSH EAX ; Level ID
000F6A6C   E8 F34CFFFF      CALL 000EB764 ; Get Act from LevelID
000F6A71   8B4F 64          MOV ECX,DWORD PTR DS:[EDI+64] ; Act ID (that we have set in our custom missile)
000F6A74   3BC1             CMP EAX,ECX ; compare if player is in same act as missile
000F6A76   74 06            JE SHORT 000F6A7E ; jump if same act
000F6A78   5F               POP EDI ; we are not in same act, pop edi
000F6A79  E9 451AF3FF      JMP 000284C3 ; jump to end code, no portal object is
000F6A7E  E9 491AF3FF      JMP 000284CC ; jump back to code that will spawn our portal object
```

Our next code will add our CltParam5 (object ID) as parameter to the object creation code.

The object creation function is D2Game.6FD13DF0 that contains of nine arguments.

arg9 = permanent/non permanent (1 = permanent, 0 = non permanent)  
arg8 = Object ID  
arg7 = unit (is used to create source pointer for the portal, is either set to 0 or added as pointer. My guess is if it’s set to 0 it creates a new pointer internal. If its sets to use pointer, it uses the pointer that is added here.)  
arg6 = Level ID  
arg5 = y-offset from hPath (Destination room y Offset)  
arg4 = x-offset from hPath (Destination room X Offset)  
arg3 = ptRoom (Room skill is cast in)  
Arg2 = ptPlayer  
Arg1 = ptGame

**Original Code:**  

```
000285A0   6A 3C            PUSH 3C ; object ID
000285A2   6A 00            PUSH 0 ; Unit type (used for source object pointer)
000285A4   57               PUSH EDI
```

**Change Code:**  

```
000285A0   E9 DEE40C00      JMP 000F6A83 ; the above code is moved to our custom code and replaced with a jump
```

**Custom Code:**  

```
000F6A83   8B5424 04        MOV EDX,DWORD PTR SS:[ESP+4] ; move missile pointer to EDX
000F6A87   8B4A 68          MOV ECX,DWORD PTR DS:[EDX+68] ; move object ID to ecx
000F6A8A   51               PUSH ECX ; object ID
000F6A8B   6A 00            PUSH 0 ; Unit type (used for source object pointer)
000F6A8D   57               PUSH EDI ; level ID
000F6A8E  E9 121BF3FF      JMP 000285A5 ; jump back to original code
```

**Pre Edit d2game.dll**  
There is a pre edit d2game.dll called 'D2Game\_red\_portal\_fix\_custom\_params.dll” that you need to rename to d2game.dll and copy to your diablo2 mod directory. Remember to make a backup of your original d2game.dll. This dll contains the red portal fix and the new custom parameters for red portal missiles.

**Restrict where Town Portal is allowed to cast**  
In this part we will start looking into how to restrict town portals from be cast in more than the town. The code we will modify is related to town portal books/scrolls.

**Original Code:**  

```
000D2CBB   50               PUSH EAX ; Level ID
000D2CBC   E8 A38A0100      CALL 000EB764 ; Get Act from Level ID

000D2CC1   884424 10        MOV BYTE PTR SS:[ESP+10],AL  ; Store Current act as byte in ESP+10
```

**Changed Code:**  

```
000D2CBB   E9 D33D0200      JMP 000F6A93 ; we is replacing Level ID and Get Act function with a jump to our own custom code.
000D2CC0   90               NOP
```

**Custom Code:**  

```
000F6A93   83F8 02          CMP EAX,2 ; EAX contains Level ID and we check if is equal to 2. If it’s this it will not allow you to cast the portal.
000F6A96   74 0B            JE SHORT 000F6AA3 : Jump if portal not allowed to cast
000F6A98   50               PUSH EAX ; Level ID
000F6A99   E8 C64CFFFF      CALL 000EB764 ; Get Act from Level ID
000F6A9E  ^E9 1EC2FDFF      JMP 000D2CC1 ; Jump back to the code that will spawn the portal
000F6AA3  ^E9 35C2FDFF      JMP 000D2CDD ; Jump to end code, no portal is spawned. The town sound will also be added. Since it uses town sound you maybe want to replace the town sound sequence with something else.
```

**Add Portal Restrictions**  
Now, then we have learned to add restrictions where we can cast town portal it’s time to look how we can restrict access to town portal.

Currently in Diablo you are only able to restrict portal access from town back to an area by adding values to QuestFlag/QuestFlagEx to restrict access until a certain quest has been accomplish.

This was part of Blizzards anti rush feature. They could have done this in a better way if they had wanted. Now, you will be able to learn how you can make your own restrictions. We will with the code down here be able to check player level, player class and also change the player’s stat.

**Original Code**  

```
00048F63   85ED             TEST EBP,EBP ; This is a test to see if you are allowed to enter portal
00048F65   75 18            JNZ SHORT 00048F7F ; if allowed to enter jump, other vise continue code below and play sound not able to access.
00048F67   8B4E 08          MOV ECX,DWORD PTR DS:[ESI+8] ; Move ptPlayer to ECX
```

**Changed Code**  

```
00048F63   E9 6EDB0A00      JMP 000F6AD6 ; Jump to custom code
00048F68   90               NOP
00048F69   90               NOP
```

**Custom Code**  

```
000F6AD6   50               PUSH EAX : store object pointer to stack
000F6AD7   8B4E 08          MOV ECX,DWORD PTR DS:[ESI+8] ; get ptPlayer from ESI+8
000F6ADA   6A 00            PUSH 0 ; Index table (Usually set to 0)
000F6ADC   6A 0C            PUSH 0C : Level (See itemstatscost.txt ID 12)
000F6ADE   51               PUSH ECX ; ptPlayer
000F6ADF   E8 AE4BFFFF      CALL 000EB692 ; Get Unit Stats (Current Player Level)
000F6AE4   83F8 0A          CMP EAX,0A ; This compare if player level is 10 or above to allow access to the portal
000F6AE7   7C 20            JL SHORT 000F6B09 ; Jump if lower than Level 10
000F6AE9   8B4E 08          MOV ECX,DWORD PTR DS:[ESI+8] ; Get ptPlayer from ESI+8
000F6AEC   8B49 04          MOV ECX,DWORD PTR DS:[ECX+4] ; Get Player Class from ECX+4
000F6AEF   83F9 03          CMP ECX,3 ; Check if player class is Paladin
000F6AF2   75 15            JNZ SHORT 000F6B09 ; Jump if player class isn’t Paladin
000F6AF4   8B4E 08          MOV ECX,DWORD PTR DS:[ESI+8] ; Get ptPlayer from ESI+8
000F6AF7   6A 00            PUSH 0 ; Table Index
000F6AF9   6A FF            PUSH -1 ; We will add -1 to the player each time he walks throu the portal
000F6AFB   6A 03            PUSH 3 ; Vitality
000F6AFD   51               PUSH ECX ; ptPlayer
000F6AFE   E8 B74DFFFF      CALL 000EB8BA ; Add -1 to players current vitality (note: this will be added permanently)
000F6B03   58               POP EAX ; Restore object pointer from stack
000F6B04  E9 7624F5FF      JMP 00048F7F ; jump back to code and let Diablo handle the portal part.
000F6B09   8B4E 08          MOV ECX,DWORD PTR DS:[ESI+8] ; get ptPlayer
000F6B0C   58               POP EAX ; Restore object pointer from stack
000F6B0D  E9 5524F5FF      JMP 00048F67 ; jump to code that handle not allowed to access portal code.
```

**Pre Edit DLL files**  
There is also a pre edit dll with above changes and it also includes red portal fix and custom parameters. The file is named “D2Game\_pre\_edit.dll” you need to rename it to d2game.dll and remember to make a backup of your original d2game.dll.

**Make your custom portal skill**  
Now it’s time to create our own custom portal skills. In this part we will use the pre edit red portal fix + custom parameters d2game.dll.

Open up skills.txt  
_Do the following changes down here related to the skill. All modified text files are included in the tutorial._

Start with make a copy of Fire Bolt skill (ID 36) and add it to first empty row in your skills.txt.

**Skill:** enter CowLevelPortal as skillname  
**Id:** Next avaible ID, in this tutorial I’m using 357  
**skilldesc:** enter CowSkillDesc as skilldescription.  
**charclass:** remove ama and leave it empty  
**srvmissile:** change the name to cowlevelmissile  
**stsound:** sorceress\_cast\_lightning  
**castoverlay:** light\_cast\_1  
**cltmissile:** change the name to cowlevelmissile  
**ItemCastSound:** sorceress\_cast\_lightning  
**Leftskill:** remove 1 from here and leave it empty  
**Minmana:** set it to 0 in this field  
**Manashift:** set it to 8 in this field  
**Mana:** set it to 0 in this field  
**lvlmana:** set it to 0 in this field  
**Param8:** remove the value here and leave it empty  
**\*Param8:** Description: remove the text here and leave it empty  
**EType:** remove the value here and leave it empty  
**EMin:** remove the value here and leave it empty  
**EMinLev1 to 5:** remove the value here and leave it empty  
**EMax:** remove the value here and leave it empty  
**EMaxLev1 to 5:** remove the value here and leave it empty  
**EDmgSymPerCalc:** remove the value here and leave it empty

For now we will leave skills.txt so save and close this file.

Now open up missiles.txt, now we are going to add our cowlevelmissile

Start with make a copy of the following three lines to end of your missiles.txt file

Cairnstones ID (288)  
cairnstonessky ID (289)  
cairnstonesground ID (290)  
cairn stones bolt ID (384)

**Rename those to following**  
Cowlevelmissile  
Cowlevelsky  
Cowlevelground  
Cowmissilebolt

We will first work with Cowlevelmissile and leave the other two as they are for the moment. Do the following changes down here.

**Id:** set it to 684 or your next availed missile ID.  
**Param4:** change to 39 (this will set destination level to Cow Level)  
**CltParam4:** set the value to 0, this will set the missile to allow the portal object to be spawned in first act only.  
**\*client param4 desc:** Act ID  
**CltParam5:** set the value to 60 (this is referring to ID in objects.txt, se this file for more portal objects). These will se the portal to create a red portal.  
**\*client param5 desc:** Object ID  
**SubMissile1:** set it to use Cowlevelsky  
**CltSubMissile1:** set it to use Cowmissilebolt  
**CltSubMissile2:** Cowlevelground

We will leave the rest as it is now. We will just use a cloned cairn stone missile that you see when the portal appears at Tristram. Now it’s time to save our file and close it.

Now we have created our first custom portal skill. We have still things left to do, as it is now you aren’t able to use our new skill in the game. We still need to get it in there.

We will use two ways, first add our skill to a unique item and spawn the unique item in blood moor by quillrats. The second way will be to add it as a player skill.

We will be needed to create a custom description for our portal skill also. So, it’s time to open up skilldesc.txt

Copy “delerium change” row and add it at end of your skilldesc.txt row.

Rename it to CowSkillDesc

Add the following changes  
**IconCel:**18  
**str name:** Portal01  
**str short:** Portalsd01  
**str long:** Portalld01  
**str alt:** Portalan01

Nothing more is needed to add here so we save and close it down.

Open up patchstring.tbl with Afj Tbl Editor or any similar editor that are able to edit this table.

Now add the following string and enter the strings as mentioned down here.

**String keys:**  
Portal01: Enter the string Cow Portal  
Portalsd01: Enter the string (Opens up a permanent portal to Cow Level when cast)  
Portalld01: Don’t add anything here, leave it empty  
Portalan01: Don’t add anything here, leave it empty

Nothing more is needed to add so save and close.

Open up itemstatscost.txt  
Search for item\_levelreq stat and do the change down here so we are able to add negative values as levelreq.

**Save Add:** 10

Save and close the file.

**Open up uniqueitems.txt**  
We will use an existing (unused) unique ring that blizzard have left that is called constricting ring and modify it to be able to use for a first level character and also have our own new portal skill.

Modify the following columns for Constricting Ring  
**Enabled:** change the value to 1  
**Lvl:** set level to 1 (so quillrats will be able to drop it)  
**Lvl req:** set level req to 1 (so your character will be able to use it)  
**prop5:** set modifier oskill  
**par5:** enter our custom portals skill name: CowLevelPortal  
**min5:** set min level to 1 (we have no use to use a higher value)  
**max5:** set max level to 1 (we have no use to use a higher value)  
**prop6:** levelreq  
**min6:** -7  
**max6:** -7

We are done now in this file and have one left thing to do before we can test this. So, save and close this file.

As I have mentioned already we will use quillrats to always spawn our unique Constricting Ring.

**Open up treasureclassEx.txt**  
Search for Quill 1 treasureclass and do the changes down here.

**Picks:** set -1 so it always drops one item (our unique item)  
**NoDrop:** set it to 0 (it doesn’t matter if we set it to 0 since it’s not used when picks is set to -1)  
**Item1:** Constricting Ring (we call the unique item name directly so it always drop this ring)  
**Prob1:** set this to 1 (it doesn’t matter since we already force it to drop one item to change this value to 1)  
**Item2:** empty this field  
**Prob2:** empty this field

**Time for our first test**  
Now we have added our custom code, added a new skill that releases our own portal. So, now it’s time to test this before we are going to do our final step.

**Make a Town Portal Skill**  
We have now the last part left to do and that is to add a Town Portal Skill to sorceress. We will replace the firebolt skill with our new Town Portal Skill.

Open up skills.txt

Go down to fire bolt row and remove in charclass column the sor (we just inactivate the fire bolt skill for sorceress)

Make a copy of our CowPortalSkill and add the row below CowPortalSkill row (first empty row). Rename the skill to TownPortalSkill and do the following changes down here.

**Id:** Next avaible ID, in this tutorial I’m using 358  
**Charclass:** sor  
**Skilldesc:** TownPortalDesc  
**Srvmissile:** TownPortalmissile  
**Cltmissile:** TownPortalmissile  
**Minmana:** 1  
**Mana:** 10

You know the process now? All is edited for the skill and time to save and close.

**Open up missiles.txt**  
Make a copy of Cowlevelmissile and add it at your first empty row and rename it to TownPortalmissile. Do the following changes down here.

**Id:** Next avaible ID, in this tutorial I’m using 688  
**Param4:** set 1 as destination ID (remember this means the skill only works in first act)  
**Param5:** set portal delay to 1  
**CltParam5:** set object ID to 59 (we are going to use blue portal for this portal skill)  
**Range:** 1 (we restrict the range to 1 so the portal is cast with no delay)

Save and close the file.

**Open up skilldesc.txt**  
Make a copy of fire bolt and add it to your first empty row (should be below CowSkillDesc row) and change the name to TownPortalDesc. Do the following changes down here.

**SkillPage:** enter the value 1 here  
**SkillRow:** enter the value 1 here  
**SkillColumn:** enter the value 2 here  
**ListRow:** enter the value 1 here  
**IconCel:** 0  
**str name:** Portal02  
**str short:** Portalsd02  
**str long:** Portalld02  
**str alt:** Portalan02

Now we have only one left thing to make so save and close this file.

Open up patchstring.tbl in afj tbl editor or any editor of your choice. Add the following stringkeys to your table.

**String key:**  
Portal02: Enter the string Town Portal  
Portalsd02: Enter the string (Opens up a permanent portal to Rogue Town when cast)  
Portalld02: Enter the string (Opens up a permanent portal to Rogue Town when cast)  
Portalan02: Don’t add anything here, leave it empty

Now we are done and it’s time to test our new skill. So create a new sorceress and test.

**A last word**  
Hopefully you have enjoyed to read and learned how to make new type of portals restrictions and the code fix/added parameter. I believe many modders will have come up with many great ideas related to the new possibilities. However there are still parts I haven’t take up in this tutorial that I could have. There is a possibility I will extend the tutorial in the future to include the additional code edits that could have been made.

Before I end this tutorial I will mention where the permanent/non permanent check in the code are located. I will not explain it anything this time, but this part is for sure something’s I will add later to the tutorial.  

```
6FC791E1   66:3D 3C00       CMP AX,3C
6FC791E5   74 76            JE SHORT D2Game.6FC7925D
6FC791E7   8B4E 08          MOV ECX,DWORD PTR DS:[ESI+8]
6FC791EA   E8 312F0000      CALL D2Game.6FC7C120
6FC791EF   3B43 0C          CMP EAX,DWORD PTR DS:[EBX+C]
6FC791F2   0F85 9E000000    JNZ D2Game.6FC79296
```

Finally you can get the pre-edit files from [here.](http://www.fileplanet.com/dl.aspx?/planetdiablo/phrozenkeep/files/resources/Portal_Pre_edited_Files.rar)
