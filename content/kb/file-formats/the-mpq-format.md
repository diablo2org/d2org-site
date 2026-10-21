---
title: The MPQ Format
summary: >-
  What’s an MPQ? MPQ, or MoPaQ, is a proprietary archive format created by Mike
  O'Brien, the man hailed as Blizzard's multiplayer engine genius, back in 1996
  as a general-purpose archive for use with…
keepId: 39
author: Phrozen Heart
credit: by Quantum
posted: '2003-09-16'
views: 15250
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=39'
---
What’s an MPQ?  
MPQ, or MoPaQ, is a proprietary archive format created by Mike O'Brien, the man hailed as Blizzard's multiplayer engine genius, back in 1996 as a general-purpose archive for use with Diablo, and named narcissistically for its creator - 'Mike O'brien PaCK'; the copyrights to it, however, are held by Havas Interactive, Blizzard's parent company, and it may continue to be used now that Mike O'Brien has left Blizzard. MPQs apparently excelled in their role in Diablo, because Havas has turned back to them time and time again for Starcraft, Warcraft 2: BNE, Diablo 2, Lords of Magic (by Sierra, another company owned by Havas), and possibly others that I'm not aware of. An archive is a file that contains other files inside it, usually in a compressed state. Havas uses MPQs to hold all sorts of things ranging from files that are copied to the hard drive to game data. It is the game data that is particularly useful. Those MPQs contain everything including graphics, sounds, animations, levels, strings, numeric data, and storyline information.

What’s ‘Storm’?  
Blizzard uses a shared library called Storm (Storm.dll on PCs, Storm.bin on Macs) in all their modern games to store important functions like MPQ reading, Battle.net, and even some graphics routines. Like all shared libraries, Storm makes its functions available to any program that wants to use them, which is not very good for security. It is for this reason that Storm only contains MPQ reading functions. The MPQ writing functions are Blizzard's prized possessions, and they're not going to let just anyone use them.

What’s the MPQ API Library DLL?  
Although Storm provides public functions for reading MoPaQs, for security reasons it does not contain any functions to edit MoPaQs. However, StarEdit does, since SCMs/SCXs are really MoPaQs. Unfortunately, these functions are under tight lock and key, so all but the most knowledgeable (and persistent) hackers will be unable to use them. Unfortunately for Blizzard, there does exist one such hacker, named Andrey Lelikov (aka Lelik). He has found a way to access these precious functions, and has encapsulated this complex process in LMPQAPI.DLL (Lelik’s MPQ API Library DLL), which automatically cracks open StarEdit to reveal these functions to any programmer.

For More Information about MoPaQs - Inside MoPaQ  
Clearly, with MoPaQs being used in Diablo, Diablo 2, Starcraft, and others, the customization power is tremendous. So, I decided to share my considerable knowledge I gained about MoPaQ, and, after writing Mo’PaQ 2000, to write Inside MoPaQ (at ), which has since become the definitive, all-in-one source of information about MPQs, Storm, StarEdit, and the MPQ API Library.
