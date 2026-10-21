---
title: How To Edit The LoD v1.09b DLL Files
summary: >-
  The quick and easy way... grab a hex editor, and change all of the XX to the
  skill limit you want (in hex of course):
keepId: 185
author: Phrozen Heart
credit: by Sir_General
posted: '2003-12-02'
views: 7255
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=185'
---
The quick and easy way... grab a hex editor, and change all of the XX to the skill limit you want (in hex of course):

In d2game.dll:

Offset BE554h - 83 F8 XX  
Offset 4A8B8h - 83 F8 XX

In d2common.dll:

Offset 620CBh - 83 FF XX  
Offset 61E8Bh - 83 F8 XX  
Offset 61E96h - 83 F8 XX

In d2client.dll:

Offset 7BF4Bh - 83 F8 XX  
Offset 7A252h - 83 F8 XX

That's all there is too it.

For those interested in how I figured this out, here we go...

Like I've said before, maxbogus made a very important post about the creation, drawing, and event handling of the various windows in D2 (including the skills window). From this information, we we obtained the following list of possible window function:k

000D03B8 6FB90C98 D2CLIENT.6FB90C98  
000D03BC 00000000  
000D03C0 00000000  
000D03C4 00000201  
000D03C8 6FB1B5F0 D2CLIENT.6FB1B5F0  
000D03CC 00000000  
000D03D0 00000202  
000D03D4 6FB1BBF0 D2CLIENT.6FB1BBF0  
000D03D8 00000000  
000D03DC 00000201  
000D03E0 6FB1F190 D2CLIENT.6FB1F190  
000D03E4 00000000  
000D03E8 00000000  
000D03EC 00000201  
000D03F0 6FACA9C0 D2CLIENT.6FACA9C0  
000D03F4 00000000  
000D03F8 00000202  
000D03FC 6FACABA0 D2CLIENT.6FACABA0  
000D0400 00000000  
000D0404 00000201  
000D0408 6FAE8250 D2CLIENT.6FAE8250  
000D040C 00000000  
000D0410 00000202  
000D0414 6FAE8510 D2CLIENT.6FAE8510  
000D0418 00000003  
000D041C 0000007A  
000D0420 6FAD5840 D2CLIENT.6FAD5840  
000D0424 00000000  
000D0428 00000000  
000D042C 00000201  
000D0430 6FAE83A0 D2CLIENT.6FAE83A0  
000D0434 00000000  
000D0438 00000202  
000D043C 6FAE8680 D2CLIENT.6FAE8680  
000D0440 00000000  
000D0444 00000201  
000D0448 6FB015B0 D2CLIENT.6FB015B0  
000D044C 00000000  
000D0450 00000202  
000D0454 6FB01830 D2CLIENT.6FB01830

  
And the list goes on. So I fired up OllyDbg (maxbogus was right, not only does this program kick ass, but its free of charge - if you're doing any dissasembling I highly recommend this program) and started to look at the functions. In not time, I found that the mouse function for the skill window is broken into two routines. The first occurs when the user clicks down, the second when they release the button. The down click is provided by maxbogus and is 6Fb1B5F0. A little testing showed that the up function is 6FB1BBF0. The skill code we're looking for is in this function, and here's the proof... When you have an extra skill point, click down on a skill that you can put it in, but DON'T RELEASE THE BUTTON. Now drag off of the button and release, you'll notice that no points go into that skill. This means it doesn't do the skill stuff until we let the button up. So let's go in and have a look at this function:

6FB1BBF0 53 PUSH EBX  
6FB1BBF1 55 PUSH EBP  
6FB1BBF2 56 PUSH ESI  
6FB1BBF3 8B7424 10 MOV ESI,DWORD PTR SS:\[ESP+10\]  
6FB1BBF7 57 PUSH EDI  
6FB1BBF8 33FF XOR EDI,EDI  
6FB1BBFA 8B6E 0C MOV EBP,DWORD PTR DS:\[ESI+C\]  
6FB1BBFD 66:8B7E 0C MOV DI,WORD PTR DS:\[ESI+C\]  
6FB1BC01 C1ED 10 SHR EBP,10  
6FB1BC04 E8 37200100 CALL D2CLIENT.6FB2DC40  
6FB1BC09 56 PUSH ESI  
6FB1BC0A 8BD8 MOV EBX,EAX  
6FB1BC0C E8 EFA30300 CALL D2CLIENT.6FB56000  
6FB1BC11 8BCE MOV ECX,ESI  
6FB1BC13 E8 58F9FDFF CALL D2CLIENT.6FAFB570  
6FB1BC18 85C0 TEST EAX,EAX  
6FB1BC1A 0F85 80030000 JNZ D2CLIENT.6FB1BFA0  
6FB1BC20 A1 B84BBC6F MOV EAX,DWORD PTR DS:\[6FBC4BB8\]  
6FB1BC25 33C9 XOR ECX,ECX  
6FB1BC27 3BC1 CMP EAX,ECX  
6FB1BC29 75 20 JNZ SHORT D2CLIENT.6FB1BC4B  
6FB1BC2B E8 F0FCF8FF CALL D2CLIENT.6FAAB920  
6FB1BC30 56 PUSH ESI  
6FB1BC31 C746 18 01000000 MOV DWORD PTR DS:\[ESI+18\],1  
6FB1BC38 C746 1C 00000000 MOV DWORD PTR DS:\[ESI+1C\],0  
6FB1BC3F E8 8E4E0400 CALL <JMP.&Storm.#511>  
6FB1BC44 5F POP EDI  
6FB1BC45 5E POP ESI  
6FB1BC46 5D POP EBP

And it continues in this fashion for longer than we can even imagine. I'm not sure what half the code in this function does, but we don't need to know. We can use OllyDbg's trace feature to trace the function from beginning to end for a skill that is below 20 (and will give a point of skill) and one that is at 20 (and won't give a point of skill). We can compare the differences to figure out what needs to be changed. The full trace is something like 4000 instructions and I'm not about to post it. What we get, however, is an important difference in the following code:

6FB1BD41 3BFE CMP EDI,ESI  
6FB1BD43 7C 23 JL SHORT D2CLIENT.6FB1BD68  
6FB1BD45 83C6 22 ADD ESI,22  
6FB1BD48 3BFE CMP EDI,ESI  
6FB1BD4A 7F 1C JG SHORT D2CLIENT.6FB1BD68  
6FB1BD4C 8D55 DE LEA EDX,DWORD PTR SS:\[EBP-22\]  
6FB1BD4F 3BC2 CMP EAX,EDX  
6FB1BD51 7C 15 JL SHORT D2CLIENT.6FB1BD68  
6FB1BD53 3BC5 CMP EAX,EBP  
6FB1BD55 7F 11 JG SHORT D2CLIENT.6FB1BD68  
6FB1BD57 6A 00 PUSH 0  
6FB1BD59 BA 02000000 MOV EDX,2  
6FB1BD5E B9 04000000 MOV ECX,4  
6FB1BD63 E8 D8CB0000 CALL D2CLIENT.6FB28940  
6FB1BD68 8B7424 14 MOV ESI,DWORD PTR SS:\[ESP+14\]  
6FB1BD6C 56 PUSH ESI  
6FB1BD6D C746 18 01000000 MOV DWORD PTR DS:\[ESI+18\],1  
6FB1BD74 C746 1C 00000000 MOV DWORD PTR DS:\[ESI+1C\],0  
6FB1BD7B E8 524D0400 CALL <JMP.&Storm.#511>  
6FB1BD80 5F POP EDI  
6FB1BD81 5E POP ESI  
6FB1BD82 5D POP EBP  
6FB1BD83 5B POP EBX  
6FB1BD84 C2 0400 RETN 4  
6FB1BD87 A1 E450B76F MOV EAX,DWORD PTR DS:\[6FB750E4\]

The difference between a skill you can put points into and a skill you can't put points into is in ESI, and the difference is 5 (CAN PUT) and 1 (CAN'T PUT). A little analysis shows us that this is the difference between something that CAN be clicked and something that CAN'T be clicked. I found this out when I clicked an empty area on the window (where there were no buttons) and it ran the button up routine. The problem now is to find out how and where it chooses to enable what buttons. For this, I used a little logic and OllyDbg's search all commands function. Being a program myself, I can guess fairly well that the difference between an enabled button and a disabled button is a simple comparison. CMP EAX, 14 to be precise. This being the case, I took the opportunity to place a break at every CMP EAX, 14 instruction in d2client.dll. Low and behold, one pops up when we do the click.

6FB1A252 83F8 14 CMP EAX,14

Well now, I think we know what to change on this, just set 14 to our new max. So we make the change and see what this does for us. And goody goody!! We're a step further. This time, when we open our skill tree, the skill at 20 has an enabled button!! But clicking reveals the unhappy truth that we still can't put skills above 20. Time for another trace comparison. This one gives us another line of code:

6FB1BF4B 83F8 14 CMP EAX,14

...There's something vaguely familiar with this instructor... we know what to do.. 14 to our new max. Now we make run it again to see what happens... and what happens? It still doesn't work. Time for another trace comparison, this one gives us:

6FC7A8B8 83F8 14 CMP EAX,14

This one's in d2game.dll and looks like it is a check to see if we can increase the skill to this level. This is called after we've clicked. Change the 14 to the new max and see what happens. And what does happen? The skill doesn't go up but D2 is kind of to take one of hard earned skill points in the process (that bastard of a game!!). Time for another trace comparison, and we wind up with the following segment of code:

6FDA1E8B 83F8 14 CMP EAX,14  
6FDA1E8E 7D 77 JGE SHORT D2COMMON.6FDA1F07  
6FDA1E90 833B 01 CMP DWORD PTR DS:\[EBX\],1  
6FDA1E93 74 72 JE SHORT D2COMMON.6FDA1F07  
6FDA1E95 40 INC EAX  
6FDA1E96 83F8 14 CMP EAX,14  
6FDA1E99 8947 28 MOV DWORD PTR DS:\[EDI+28\],EAX

This bad boy is located inside d2common.dll. It doesn't take a genius to see what to do with that first CMP EAX, 14 and if our experience has taught us anything, we need we should be changing that second one as well. So we make the change and see what happens... and it WORKS!! Praise the gods after two sleepless nights, a lot of scribbled notes, and some swearing it WORKS!! Until we try to load our saved character and it crashes because we're over the skill limit. Fortunately, a little forum browsing provides us with the solution for that (so I won't go into it. The post is 'setting the skill limit of 20, sortof'). Just make the changes from in there, and we're good to go. That's the second half of skills over 20.
