---
title: Interview - (2005-04-16) SVR
summary: >-
  Onyx interviews for the Phrozen Keep SVR on his modmaking tools and future
  plans.
keepId: 321
author: onyx
posted: '2006-10-06'
views: 7003
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=321'
---
## Onyx:

First of all, could you please say several words about who SVR is?

**SVR:**

I'm a programmer... er, programaholic.  
I live in Texas with my wife & 3 kids. (Well, my oldest son is off to college).  
When I'm not at work (programming there of course) I'm in my computer room writing code.

## Onyx:

How did you find the Keep and what attracted you to it back then?

**SVR:**

I stumbled across it while looking for DCC info for Udie2.  
I had dc6 & savefile formats down but DCC was a tough nut to crack.  
Paul answered my post and we started exchanging info's and working on other code.

## Onyx:

Have you ever thought about starting your own mod project and what would it's theme be if you ever do?

**SVR:**

Not really. I'd much rather make tools than mod ;)  
But if I ever did it would be a party oriented dungeon crawl, probably patterned after the old Wizardy theme.

## Onyx:

Tell us a bit more about your UDIE2 editor. It's clear that it's not simply another character editor for Diablo II.

**SVR:**

Yeah, I had 2 goals making it, to allow it read & write unknown/changed item formats and work just like the game.  
It's one of the few editors that can load & save unknown items without trashing the character.  
The binary editor turned into a handy tool for format discovery also.  
If an item is not decoded correctly I can play with the unknown bits to find out what they do and add the new info into the item format txt.  
No need to rewrite the code :)

After hooking up with the Keep, it turned out to be a good modding tool.  
So I focused on keeping it flexible for modified txt's.

## Onyx:

Do you plan new versions of UDIE2?

**SVR:**

I would love to do Udie3.

The limitation of Udie2 is that it relies on txt's and doesn't have access to all the info needed to be completely mod compatible.  
Udie3 would be made as a D2Mod plugin and would use D2 code for everything.  
So any mod will be automatically handled.

## Onyx:

Your Dr.Tester tool has quickly become the favorite testing tool for the modmakers. What were the main goals in front of you when you developed it, was it hard to implement support for that many file formats and is there anything that you wanted, but couldn't include in it?

**SVR:**

Dr Tester grew out of test code I made while building Udie2.  
I needed a way to explore file formats & test the results.  
Every format I use in Udie2 was developed in Dr Tester.

After Udie2, I added some functionality (mainly requests from Paul ) and released it.

There really isn't anything else I wanted to add (I had all I needed for Udie :) but it could stand a few more 'features', especially for mapping.

## Onyx:

Let's say a few words about the D2Mod system. Could you make a quick review of it?

**SVR:**

Well, basically it lets modmakers add code edit discoveries to their mods without code editing.  
It also provides a common framework for coders to easily create plugins for their discoveries using C language.  
This makes it possible to take on even larger code modification projects and focus on the functionality instead of the bits & bytes.

## Onyx:

Plugin development for D2Mod has been quite active recently. Could you give us several hints on what have you planned to release as plugins?

**SVR:**

The utility kit is due for a face lift. I've added several new goodies there.  
My main focus though has been on a new Quest System.  
This plugin will softcode the entire quest process to let modmakers design the whole game from buttom up.

## Onyx:

Are there any completely new tools on the schedule?

**SVR:**

I've got a few half finished tools ATM...

D2VisEdit - World space & warp editor. Lets you drag & drop to move levels around and change links.  
DCxTool - yet another DC6Tool. Will support DCC eventually :P  
DT1Edit - Full function Dt1 editor, cut/paste, import/export & visual flag editing.

It would be nice to finish them but it won't happen soon.

## Onyx:

What's your life like outside of the Phrozen Keep? Do you have other hobbies?

**SVR:**

Life ? what's that :P

Well, programming is pretty much it.

## Onyx:

Thanks for your time.

**SVR:**

Welcome :)

Now that I've revealed my secret projects, I better get after it and finish some ;)
