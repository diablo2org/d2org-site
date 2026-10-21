---
title: Hex Editing
summary: >-
  In Diablo II, there are many things that can't be modified via the text files.
  If you'd like to give your monsters a new coat of paint, if you want your
  paladin to throw blizzards, if you would like…
keepId: 184
author: Phrozen Heart
credit: by Foxbat
posted: '2003-12-02'
views: 7004
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=184'
---
In Diablo II, there are many things that can't be modified via the text files. If you'd like to give your monsters a new coat of paint, if you want your paladin to throw blizzards, if you would like to gamble a unique in your lifetime, then you will need to delve into modifying binary files via hex editing.

There are some freeware and shareware hex editors out there, I use XVI32 at [http://wielandbelka.hypermart.net/opera/tools/xvi32.htm](http://wielandbelka.hypermart.net/opera/tools/xvi32.htm) . Hex workshop is shareware but is popular, which you can find at [http://www.bpsoft.com/](http://www.bpsoft.com/). One handy utility is a hex calculator, which you already have. Just open up the windows calculator, go to scientific mode, then select hex from the view menu.

You may be able to open a file in a hex editor , but when you see 0A 3F 44 F6 it all looks like greek (geek?) to you. But the greek is simple to read once you understand it.

All data on a computer is stored as a series of on/off states, represented by a 0 or a 1. Everything on your hard drive, from your Windows operating system to microsoft word to even the D2 text files, is stored as an ordered series of 0s and 1s. A specifc instance of 0 or 1 is called a bit. A byte is a series of 8 bits, and is an important unit as we will see.

A byte can be represented as a whole number between 0 and 255, like so:

0 0 0 0 0 0 0 0 = 0  
0 0 0 0 0 0 0 1 = 1  
0 0 0 0 0 0 1 0 = 2  
0 0 0 0 0 0 1 1 = 3  
0 0 0 0 0 1 0 0 = 4  
0 0 0 0 0 1 0 1 = 5  
0 0 0 0 0 1 1 0 = 6  
0 0 0 0 0 1 1 1 = 7  
0 0 0 0 1 0 0 0 = 8

and so on. This continues all the way up to 11111111, which is 255.

We can use Hex instead to represent a byte. A byte is made up of two alpha-numeric hex digits (meaning it is represented by both numbers and letters) Below is a table with numbers on the left and hex on the right.

0 = 00  
1 = 01  
2 = 02  
3 = 03  
4 = 04  
5 = 05  
6 = 06  
7 = 07  
8 = 08  
9 = 09  
10 = 0A  
11 = 0B  
12 = 0C  
13 = 0D  
14 = 0E  
15 = 0F  
16 = 10  
17 = 11  
18 = 12

...

25 = 19  
26 = 1A  
27 = 1B  
28 = 1C  
29 = 1D  
30 = 1E  
31 = 1F  
32 = 20  
33 = 21

...

This goes all the way up to 255, represented as FF. If you want to find the whole number value for a hex number like B7, we should

1) convert each digit to whole number

B = 11, 7 = 7

2) use the following formula

1st number \* (16^0) + 2nd no. \* (16^1) + 3rd no. \* (16^2) ... + Nth no. \* (16^\[n-1\])

for n digits, with the digits being numbered from right to left.

In this case we have two digits, so n = 2

7 \* (16^0) + 11 \* (16^1)  
7 \* 1 + 11 \* 16  
7 + 176  
183 therefore B7 = 183.

Most hex editors usually offer some way to do the conversion for you. Hex Workshop has a specific option for it, XVI32 you can do the conversion by selecting 'goto' from the menu, select the 'hex' option, put in your hex value, then click on 'decimal' and it's converted to whole number.

So great, now we know how to convert hex to whole number(usually referred to as decimal) or to 0s and 1s. What can we do with this?

Well, say you want to change how much hit points a light healing potion gives you. Someone has found a place in the 1.09 file d2game.dll that controls this. They tell you to go to address B2B50.

What's an address you say? It's a way of keeping track of where we are in a file. They are also called offsets sometimes. A hex editor will number every byte, usually in hex. So the first byte in a file is adress 0. The second byte in a file is adress 1. The sixteenth byte is at adress F. The seventeenth is at adress 10. And so on. Usually hex editors have a 'go to' feature, you just need to put the hex value into the editor and it will take you there. So go to address B2B50. Once you're there, a hex editor should let you know where you are. You should be at adress B2B50. move to the right, and it will tell you that you are at B2B51. To the left, and you'd instead go to B2B4F.

Anyways, at B2B50 you will find the value of that byte is x32 (hex 32), or dec (decimal) 50. So the light healing potion will give sorceress/necro/druid 50 HP. Pal/Zon/Asn get 1.5 times this value, barbs 2 times this value. Say you want to double it to 100 HP. Convert 100 dec to hex with long division by sixteen and hold onto the remainder. That gives us 6 R 4, so in hex 64. Now you want to replace that 32 at B2B50 with 64. Be careful that you are not in INSERT mode, we want to over-write what is already there not add new stuff (adding new will change the location of all the bytes following and will crash Diablo II) Once that is done, save the file (hopefully you made a backup first though) and now your light healing potions will be twice as good.

What if we want our healing potion to be rediculously good? Say we want it to be 300, well we can do that too. First convert 300 to hex, which can be a little tricky since we need to represent it with two hex bytes.

We want to convert from dec to hex, so we should use this general formula

1) Divide the number by 16 with long divison and remainder.

300/16 = 18 R 12

2) If the whole number result is 16 or larger, then divide that whole number by 16 and keep the remainder.

18/16 = 1 R 2

3) Repeat step 2 until we have a number smaller than 16

1 < 16 so we are done

4) Convert number and remainders to hex

1 2 12  
1 2 C

5) Put it together

12C

in two bytes, this is represented as 01 2C.

So now we will replace 32 with 012C. But wait, that is two bytes replacing one, how would that work?

Fortunately for us, healing potions are stored in unsigned DWORDs. These range in dec from 0 to 4,294,967,295 (more than enough) A DWORD is made of four bytes, so we can represent a DWORD with four hex bytes. Thus the original would be

```
00 00 00 32
and our modification
00 00 01 2C
```

but wait, that's not what is there. At B2B50, you see a 32, at B2B51, a 00, and so on. What you are seeing is

32 00 00 00

That's because DWORDS are stored with the bytes in REVERSE order. So we would write our new value of 300 as

2C 01 00 00

That replaces the 4 bytes from B2B50 to B2B53.

OK, thats great, but what if we wanted to give our barbarian ice bolt instead of taunt? Well it can be done by swapping pointers.

Locations in the computer's memory can also be stored in hex, like in a file. So we can have memory addresses. A pointer is an address of memory. It can 'point' to all sorts of things: it can point to a piece of code within the dll file, it can point to code outside the dll file, it can point to other data loaded in memory. Pointers are usually stored in DWORDS.

To swap skills, what we will do is change the pointers to the skill code. We will go to the pointers to the barbarian's taunt skill, and change those pointers so that they instead point at the sorceresses' icebolt. When D2 loads up, it will look in the same pointer for the location of taunt, but now that it is pointing to icebolt it will use icebolt instead.

First open up D2Game.dll. The sorceress' table is at adress EF518. Like I said this is a table of all the sorceress' skills, with an entry for each skill. An entry consists of 3 dwords in this particular table.

First we must figure out the number of the ice bolt skill. Open up skills.txt with excel and notice the order of the sorceress skills there, it appears in the same order in the dll files. To figure out the skill number, look at the ID column. Subtract the ID of the ice bolt skill from the ID of the first sorceress skill (fire bolt), that will give us 3. So ice bolt is skill 3. Thus we must go to entry 3 in this table. The first entry starting at EF518 is entry 0. It is 12 bytes long. If your hex editor has a 'jump' function like XVI32, you can set it to jump each entry. Set your jump width to 12 dec, or C hex. then you jump 3 times, and you will arrive at entry 3. Or you can multiply by 3 and just jump once. Or, if you don't have a jump function, just add the amount you want to jump to your present location. (Windows calculator is very handy for this!)

So once we arrive there (EF53C hopefully) we now need to copy 12 bytes from there, which would include bytes EF53C through EF547. Use the copy command. Then we need to go to our barbarian table at ED618. Repeat the same procedure for finding the skill like with the sorc. We should be looking at taunt, skill 11, at ED69C. Now, we want to replace the 12 bytes from ED69C to ED6A7. Make sure you replace and NOT just insert. On some hex editors, you may have to first delete this place and then paste the sorceress data, others will let your paste 'overwrite' what is already there. Save your work.

You should now be able to load the game if everything went well. Make a new barbarian, get him to level 2, and put a point into taunt. Try it out.

Not what you expected eh? What you should have seen is the barb still making his taunt sounds, but if you found some monsters, you would notice they were being frozen too. Well that's because we've only gone and changed the 'effect' of the ice bolt. D2game.dll covers many of the server calculations, for example, do you hit an enemy, how much damage do you do, etc. To change the apperance of skills, you must edit D2client.dll.

The Sorceress table in D2client.dll is at CF210, the Barbarian at CDEC8. Each entry in the table is 5 dwords rather than three, and is thus 20 dec bytes (hex 14) long rather than the 12 (hex C) in d2game.dll. The skills here are numbered in the same fashion as in d2game. Copy the ice bolt entry over the taunt entry. You should now know enough to make this change in d2client, and see some ice bolt graphics when you are done.

Now you know alot about hex editing, but if you want to follow code gurus like Jarulf, you may need to know just a little more. These guys work with Disassemblers that generate 'assembly language' based on the binary of the file. You will see things like this

:6FABD15D E8B4370A00 Call 6FB60916

The first value is usually the adress, that's where it is in the file. But this is the address of the file when it is loaded into memory, not the address when it's just sitting on the hard drive. To get that, you will need to subtract a 'memory offset' from the given value. This particular instruction is from D2Client.dll, and the memory offset for that file is 6FAA0000. So the hex adress in the file for this code is 1D15D.

The second value you see is a series of bytes. This is the hex data starting at the given adress. If you jump to the 'corrected' adress (1D15D) you will find this data there.

What follows is the assembly commands which you don't have to understand. Usually, when someone has a modification they will tell you the new hex to replace the old hex. Just correct the address and drop the new hex in.

If you would like some idea as to what is going on with the assembly, then take a look at the assembly FAQ at [http://www2.dgsys.com/~raymoon/x86faqs.html](http://www2.dgsys.com/%7Eraymoon/x86faqs.html)
