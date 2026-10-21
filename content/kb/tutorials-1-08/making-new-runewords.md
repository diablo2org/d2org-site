---
title: Making new Runewords
summary: >-
  Lord of Destruction's release version contains a lot of runewords. A good
  hundred of them are not finished, and not enabled. If you download the 1.08
  LoD patch, then you will have just disabled 21…
keepId: 411
author: Nefarius
credit: by 54x
posted: '2006-08-19'
views: 9291
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=411'
---
(note: anything in quotes is a value that goes in a column)

Lord of Destruction's release version contains a lot of runewords. A good hundred of them are not finished, and not enabled. If you download the 1.08 LoD patch, then you will have just disabled 21 rune words, and only left 1.

The first thing I'm going to get your to do in your quest for runewords is to open up d2exp.mpq in mpqview.

Look for data\\global\\excel\\ . Once you've found that, locate runes.txt and save it to your mod's directory. Save runes.bin, too, if you want to. Once you insert these two files into an LoD patch, you will have re-enabled 21 runewords. That's everything Blizzard had finished coding.

There are a lot of runewords in there that aren't complete- that gives us a nice headstart. We can use the bits they did complete to make our own runewords.

This tutorial will take you through modding runeword 23, or 'Desire,' to fit it's name.

Open up runes.txt and move down to the row 'Runeword 23.' You'll see the string for it's name is Desire. Add that to patchstring.tbl, or string.tbl, or whatever you use.

Set the completed column to 1. This activates the runeword.

Having 'Desire' as a helm runeword is good enough for us for now, so we're not going to mess with the itypes and etypes right now. If you want to know what to put there, they match the types in magicprefix.txt and magicsuffix.txt.

We're also going to leave the columns for those runes alone, at the moment. Changing them would mean checking we weren't using the same runes as another helm runeword... which is extra work :)

OK, now the next bit will be similar if you have edited set items, automagic prefixes, unique items, or affixes in 1.08.

In T1code1 we place the affix code of our first property. For the code columns, in order please, insert: 'lifesteal', 'manasteal', 'res-all', 'ac', and 'str'. Override 'res-pois' with 'lifesteal'.

OK, set 'lifesteal' and 'manasteal' to 5 in their T1min and T1max columns. Set 'res-all' and 'ac' to -5 in those columns. And set 'str' to 10. This will add 5% dual leech, -5% to all resists, -5 Defense Rating, and +10 to Strength when those three runes are socketed in a helm, ALONG WITH any properties those runes add.

To test the runeword, socket a helm with: 'LoOrtIth' that's runes: Lo, Ort, and Ith in that order. Note that not many helms have three sockets in their normal forms, so this word is for exceptional or elite helms. Enjoy playing with 'Desire' and other Runewords that you've enabled with Runes.txt!
