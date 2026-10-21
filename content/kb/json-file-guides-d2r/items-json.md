---
title: items.json
summary: File guide for items.json
keepId: 476
author: cla$$ics
posted: '2021-05-12'
modified: '2021-05-12'
views: 5915
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=476'
---
items.json is a small but important file. It dictates the visual appearance of an item in Resurrected graphics - both the 3D model and 2D sprite.

Please note that the Legacy/Classic graphics uses the same method that was used in 1.10 - 1.14 to dictate the graphics for on ground and 2D display, and it's recommended that you edit the "invfile" and "flippyfile" fields in misc.txt/armor.txt/weapons.txt.

If you're making your own items, you'll need to put a new entry in this file to tell the game how its graphics look.

This file consists of an array, each entry following this syntax:

```
{ "<item code>": { "asset": "<asset path>" } }
```

**item code**  
This is the exact item code, from misc.txt, weapons.txt, or armor.txt.

**asset path**  
This is the path to the asset. Specifically, it instructs the game to look for files in these directories:  

-   _3D model -_ data/hd/items/source .txt name/asset path.json
-   _2D sprite -_ data/hd/global/ui/items/source .txt name/asset path.sprite

The source .txt name refers to the TXT file where the item lives - either "misc", "armor" or "weapons".
