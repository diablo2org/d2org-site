---
title: Interview - (2004-03-04) Paul Siramy
summary: >-
  Onyx interviews Paul Siramy for the Phrozen Keep on his mod making tools;
  past, present and future.
keepId: 261
author: Phrozen Heart
posted: '2006-10-06'
views: 6767
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=261'
---
## Onyx:

Paul Siramy. One of the first names you encounter after you have registered in the Phrozen Forums. And no surprise, since he created some amazing tools for modmaking. I can't imagine modding without him and his programs and researches, that's why I decided to show people who Paul Siramy really is. He was kind enough to answer my questions and reveal some interesting facts about himself and the process of creating modmaking tools.

---

## Onyx:

Could you tell us a little about yourself?

## Paul:

As you can expect, my true name is Paul Siramy. I'm 29 and live in France. I love to play video games, read science-fiction books (the cycle of Dune is certainly the only one I'd need on a desert island), Japanese animes, and programming (especially anything relatives to graphics). I am an Analyst programmer; though I'm unemployed at the moment.

I got my hands on my first computer when I was 10 (a Thomson TO8) and quickly become addicted to it. I was dreaming of a console and finally got one 2 years later, a Sega Genesis (what a change!) where I happily lost plenty of money buying games to feed it for my enjoyment. That's at this time that I started to wonder how such games were made. Years later, I bought a scientific calculator for school (a Casio 9900 GC) and couldn't resist to made great games on it (one being a 3D maze), which I had the pleasure to see published in a book. At the same time I was learning at school how to program \*properly\* (no more quick & dirty style) on a PC, and since a friend pointed me to the Allegro Game Library, I started to create lots of useless programs not good enough to be called 'demo', but that was the spirit.

I sometimes forgot what my age is (or the year we are), I don't know by heart the birthdays of my family, but I used to know by heart the ASCII table, common useful decimal / hexadecimal / binary numbers, I was able to learn 3/4 of the 'PC Bible - system programmation, 6th edition' in less than 2 weeks, and I'm still almost capable of telling you how the MS-DOS 6.22 memory was structured, so you can be sure that I'm a devoted programmer ;)

## Onyx:

Where does your interest in D2 and modding come from?

## Paul:

I have played Diablo for months with great pleasure, so I moved naturally to its sequel. After 1 year, my enjoyment to play with Diablo II started to reduce. At that time I was in a nice and friendly French D2 clan, and to also learn the HTML language I was making D2 docs for the clan web site by hand (with Notepad). I was making Set and Unique Items docs. At some points I got tired of making screenshots for the items pictures, and I couldn’t used the ones from other web site either, so I decided to makes my own.

I found the file guides and tutorials of the Phrozen Keep especially useful, and the DC6 format in a program (dc6con). So I had all I needed: the original items graphics, and the D2 database. I then made a really complex program that was reading the D2 database and item graphics, and was creating several html pages based on them. I encountered lots of difficulties, because the process of coloring Unique Item pixels wasn’t well known. For instance the rings didn’t have colors in game while in UniqueItems.txt there were some that apparently wanted some, and I was especially wondering how the gray / brown items known which pixels to replace by which ones.

I finally found how it was working after lots of tests, and I decided to make a doc on that subject, as well as another little program dedicated to show all the possible color variations of an item (dc6color), that’s how I started my relation with mod making, and I must say that making a program that is using the game datas is a lot more interesting for me than to play the game, now that I know it by heart ;) That's how I started to program D2 tools.

## Onyx:

What made you release your source codes to the public?

## Paul:

Well, I think it’s just normal. The tools I’m making for D2 are destined to be freeware after all, as I can’t imagine I can ask any money for them. And most of them are pretty easy to make (they’re mostly just command line program mind you), just a few hours of work (except for my map editor). I have nothing to protect or keep secret in the sources; on the contrary, I consider that releasing them is another proof that my programs are safe. This is also for education, in case some other programmer wants to make his own program, or a new version, or (why not) even to port them onto a new platform (Linux / Mac). This is also a security for the future: even if I had to stop making D2 tools tomorrow, since the sources of the precedent tools are released somebody else will be able to maintain them. Releasing the sources of a program is also a way to have external help, because that way anybody can check the source for errors. I also like to see the sources of other programs, so I’m releasing them the way I’d want to find others. Lastly, I consider that anybody should release his sources when it's a free software.

## Onyx:

Can we have a sneak-peek preview of your future projects?

## Paul:

Sure.

Right now I’m working on a DCC encoder, and when it’ll be finish we shouldn’t need CV5 any longer. This encoder will be released with its sources and should be easily portable to another platform (like a Mac). But the encoder is just the heart, as I’m planning to make another program, which will use that encoder but will be a full feature DCC maker. This editor should include the choice of the background color, choice of the palette to use, real-time preview, offsets adjustments, reading from a GIF, possibility to place an aura or any other animation to make easier the placement of the sprite pivot (the infamous offsets), the exact choice of colors that can be used (act-dependant color problem), maybe it’ll even write the COF and update an animdata.d2, and so on. The encoder itself is very complex but that’s what I’m working on right now.

When I’ll have the time / more motivation, I’ll update my DS1 (map) editor. It’s already capable of creating new paths in a non-released version, but it needs the capacity to edit them. A better handling of the game version is needed too, since the patch 1.10 makes some 1.09D maps incompatible with 1.10 (objects type 1 – Monsters/NPC- incompatibility).

Another idea I have is a DC6 converter. This one should use templates to know how to assemble all frames of a DC6 properly whatever its type (icon, animation, image…). It’s not really difficult, but it’ll be time-consuming for making the templates.

A DT1 maker will be a good idea, something where you open an image and split pixels into floors / walls / roofs, and place sub-tiles flags, as well as other DT1 internal datas, but it will require some work and is not my priority,

For other ideas I have, I need to code first my own GUI (Graphical User Interface), because the one contained in the Allegro Game Library is poor. Once done, I should be able to code some nice interface in my future programs and (why not) rewrite old ones with menus / icons / buttons / scroll bar, and so on. This project won’t be easy at all. I’m not even sure I’ll have the possibility to work on it.

When / if I succeed in making a GUI, this will open opportunities for brand new programs, like an all-in-one editor for create a Mod (Set / Unique items, Monsters, Runewords, with preview where possible, helps in docs, TBL editing… all that will be needed to make easier the creation of a Mod). It’ll allow me to create also my own Image editor program, a WAV editor, and such other editor. Honestly, I doubt I’ll have the time in the next 10 months to work on them, but they’re still programs I’d really like to create one day.

Somewhere between all of the element of this to-do list I’d like to finish the 1.10 file guides in html for the Keep, playing IceWindDale 1 & 2 and Fallout Tactics that I have bought 1 year ago and that I still never install, and learning C++ with VC6 to be able to make pure windows programs, not command-line programs like I’m used to, right now.

## Onyx:

Will we ever see Paul Siramy's own mod project?

## Paul:

Hmmm, I do have some ideas for an eventual Mod, but this is just a dream for now. I’m afraid I won’t take the time to change it into a reality… But if it either exists, it'll be a Mod for the Single Player only, Mac compatible (no DLL editing), the player won't have the possibility to level since all monsters will have 0 exp, as you can expect I'd focus on maps, it'd be a lot harder than D2, and I'll put many maze / dungeons with tricky rooms... Did I mention that it's just a dream ?

## Onyx:

Have you ever modded or made tools for games other than D2?

## Paul:

Long time ago I made some few maps for Doom II, Duke Nukem 3D, Warcraft II and Starcraft, but that’s all I have ever accomplish in terms of Modding a game. I remember that I made some little programs for Doom II to help me, but it wasn’t really useful to anybody else. Diablo II is the first (and for now only) game I can say I’m really making Mod Making Tools.

## Onyx:

Do you play mods, and if yes, which ones do you like best?

## Paul:

Unfortunately I don’t play Mods. I don’t really follow them either. I know I’m certainly missing lots of good stuff, but when I’m not coding Tools, I’m playing on closed B.Net, which don’t left me many times to play Mods ;)

I once played 'Ancestral Recall' and 'Demon Trip 2', but I didn't go further than the act 1, so I certainly missed lots of things.

## Onyx:

Is there any advice you'd give to anyone who's just starting out making mods for D2?

## Paul:

Hmmm, since I have never made a Mod myself, I'm certainly not the best appropriate person to ask but...

At first, read and follow the Beginner’s guide, since this document will teach very well all the basics, and the examples will bring confidence.

Now be curious. Extract all TXT in data\\global\\excel, open them all one after another in a spreadsheet (like Excel), and browse them a minimum. This will give a general idea of the size and complexity of some TXT, as well as an idea of their theme. Don’t be afraid of the complexity, all will become clear one day.

Now, for a better understanding of these TXT, read the File Guides in the Phrozen Keep. Don’t try to learn them by heart, just increase your general knowledge and comprehension of the Diablo II database logic, it will never be a waste of time.

Now you’re ready to follow the tutorials. Choose the ones that interest you, and try them by order of difficulty. Only choose the –direct –txt Mod method for now, and try to correct your errors yourself (if any). If you can’t, the Forums are there to help. Creating new Set / Unique Item, Runewords and Horadric Cube Recipes is not the hardest. Your first Mod can have only this kind of changes and still be interesting. Don’t underestimate the joy of playing with your \_own\_ items in the game ;) You can also play with some basics Monsters Stats to test your new items.

Later you’ll be able to jump to the next steps, such as adding new Monsters graphics, work with basic Map editing (just .txt editions). There are tutorials to cover this advanced step. I suggest reserving the Skill editions for even later, as this area can become quite complex.

In summary I suggest to not be too ambitious to start. Your first Mod(s) should be for testing and \_fun\_, that’s the important. Every new modder must learn the basics, so you must put time into following and testing the tutorials, that’s the easiest and quickest way to learn. When you’ll feel ready, you’ll be able to start a new Mod, more ‘seriously’. Do what you want in your mod, the more personal you’ll make it, the more different than others (and therefore the more interesting) it’ll be.

## Onyx:

Thanks for your time :)

## Paul:

Thanks you too ;)

While I’m here, I’d like to thanks Blizzard in general but especially Peter Hu for having made the patch 1.10. This is an awesome patch for us modders and therefore we‘re very grateful. The monster / skill part have been greatly rewrote (among other things), to make our work a lot more easier, with even new great possibilities. You know it of course, but you really did a great job. 1 billions of thanks to you Peter :)
