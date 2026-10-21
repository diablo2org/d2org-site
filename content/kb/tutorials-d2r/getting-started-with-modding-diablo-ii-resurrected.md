---
title: 'Getting Started with Modding Diablo II: Resurrected'
summary: This guide outlines how to get started with modding D2R.
keepId: 477
author: cla$$ics
posted: '2021-05-14'
views: 13473
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=477'
---
Introduction  
At this point, Diablo 2: Resurrected is still in its alpha stages, but that doesn't mean we can't start modding it yet. Modding has kept Diablo 2 alive all of these years, and modders here are determined to get started in working on it. New discoveries about the game are being made daily. In fact, much of the softcoded methods that worked in v1.10 still work in v1.15, and have been expanded upon with this release. However, Vicarious Visions have disabled the ability to use -direct and -txt in the alpha version of D2R. Instead, you'll have to run a launcher to manually enable the bits that turn on modding. In this guide, I will walk you through enabling Akara to sell the Token of Absolution.

Tools required  
The following tools are needed to make this edit:

-   A launcher, such as [shalzuth's D2RModding](https://github.com/shalzuth/D2RModding), or [eezstreet's fork](https://github.com/shalzuth/D2RModding).
-   An excel editor, such as AFJ's Sheet Editor or D2Excel. Avoid using Microsoft Excel or OpenOffice as they can corrupt the files. Take a look at the Keep's file center.
-   [Ladik's CASC Viewer](http://www.zezula.net/en/casc/main.html)

Getting Started  
If you haven't already, go ahead and run D2RModding. It will download the necessary game files for you, if you don't already have the game installed. (If you already have Diablo II: Resurrected installed, it will know where to look for the games' files, so where you place it doesn't matter). You can tweak the config.json file that's included to change many game features already (including an experimental multi-mercenary mode, which was tucked away inside the game files). But for more advanced mods and tweaks, you'll need to pry apart the game's files and start modding.

Extracting Files  
Diablo II used to use MPQ files. This is an outdated technology that Blizzard no longer uses. Instead, they have switched to CASC repos, which are similar in function. The purpose of the CASC repos is to store all of the games' files. Think of them as ZIP files that hold all of the art, sound, and data that the game needs to operate.

Generally, the files are split up as such:

-   Resurrected graphics: data/global/hd
-   Legacy graphics: data/global
-   Excel data, used by both games: data/global/excel
-   Localized data, shared by both games: data/local/lng

In order to make the Token of Absolution available at Akara's shop, we'll need to extract the Excel data. Go ahead and extract that data to "<game directory>/data" You should have a directory structure that looks like: "<path to executable>/data/global/excel".

Making Edits  
The excel files are the bread-and-butter of all mods. They control monsters, skills, items, levels, and almost everything in-between. The availability of items in the shops is actually controlled by the files that control items. Let's take a look at the main item related files:

-   armor.txt outlines all of the basic armor items (Cap, Skull Cap, ..)
-   weapons.txt outlines all of the basic weapon items (Club, Spiked Club, ...)
-   misc.txt covers all basic items that don't fall into the above two categories.

We want to alter the **misc.txt** file. Go ahead and open it now using your excel editor of choice. Find the AkaraMin and AkaraMax columns. These dictate the number of items that are sold by Akara. You might notice that potions and other items have their data filled in. Find the row titled "Token of Absolution". Put a 1 in AkaraMin and AkaraMax and test to see that the item is sold by Akara.

You're now done. There are additional things we can tweak here. We can change the price by changing the "cost" value. We can make the item purchasable multiple times by turning on Multibuy and PermStoreItem columns by putting a "1" in them.

Now that you understand the basics, take a look at some of the other tutorials here on the Keep.
