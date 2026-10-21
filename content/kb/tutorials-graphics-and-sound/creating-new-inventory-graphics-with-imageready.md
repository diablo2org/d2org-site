---
title: Creating New Inventory Graphics with ImageReady
summary: >-
  This is a step-by-step tutorial on how to use Adobe ImageReady to create new
  .dc6 inventory graphics in Diablo II.
keepId: 451
author: Nefarius
credit: by Shuffles
posted: '2008-09-11'
modified: '2018-01-06'
views: 10907
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=451'
---
\-----------------------------------------------------------

Creating New Inventory Graphics with ImageReady

\-----------------------------------------------------------

This is a step-by-step tutorial on how to use Adobe ImageReady to create new .dc6 inventory graphics in Diablo II.

First off you will need some tools:

\-Adobe ImageReady CS (Other Versions could work too)

\-ImageReady Palette Pack

\-DC6 Creator v1.02

\-MPQ packer/extractor

Opening The Graphic

\------------------------

Extract your image from its location in one of Blizzard's MPQs.

Open up DC6 Creator and Open your graphic of choice. Then Extract the graphic as a .gif. Open this .gif in ImageReady.

Editing The Graphic

\----------------------

Edit your image. You can do this in millions for colors if you want or you can restrict yourself to a palette. Either way be aware that the color quality of the final will end up looking a little different than the original.

A couple of tips with ImageReady:

\-It is usually helpful to create a new layer right away, a build on that, so you don't get mixed up with any previous images.

\-Remember with gifs that the graphic can either be transparent or not. it MUST NOT have partial opacity, or the color will be messed up in game.

\-Use the pencil setting on the brush/eraser to create these hard edges.

\-If you need to use tools from Photoshop, you can easily import you graphic back and forth between the 2 programs. Simple go File -> Edit with Photoshop. (or vice versa)

\-The Magic Wand tool is your friend for getting transparencies correct.

Before applying the palette:

\-Be sure there is no partial transparencies.

\-Be sure there is no pure black. Some colors close to black may also become transparent so use an almost black color which will basically appear as black ingame.

last, fill all areas to be transparent with black. The magic wand with 'contigious' unchecked, and tolerance at 0 is ideal for this. It will select all perfectly transparent pixels, and go around ones that arent (some partials you may have missed). They can be easily corrected.

Applying the Palette

\-----------------------

Once you are done editing, in the WebContent/ColorTable window, click on the arrow in the upper right of the pane to open a menu. Select Load Color Table...

choose units.act for inventory items. Click Open, this will apply the palette.

You can see your optimized image by clicking on the Optimized tab if you want. It may appear quite pixellated, but most often ingame it won't be too bad.

Before we save, we need to check our optimize settings. in the Info/Optimize/LayerComps panel, click the optimize tab. Under color table, it should say reduction:Custom, colors:256, WebSnap:0 by default. The Dither pane is irrelevant because our opacities are not partial.

Uncheck Transparency in the Transparency pane. Under options, uncheck everything and ensure lossy is at 0.

Putting the Graphic into Diablo II

\-------------------------------------

At this point we're about to put the image back into Diablo II. But first (if you haven't already) save your .psd file for later use or editing.

Ok, lets export. Go File -> Save Optimized As...

save it as a .gif with your item name.

Now pop open DC6 creator again. click on the palette menu and press delete (you've already applied the palette. Click on new. a placeholder frame will appear.

Next, click Import. find and select your .gif.

Now we need to save it as a dc6, so click Save As and save it as the item name referenced by either the game, or your modded .txt files. You also need to save it in the correct folder if using -direct -txt mode (data\\global\\items\\) for items or pack it into your MPQ.

At last you're done! Fire up your mod to check out your creation.

...

But wait, what if your image didn't turn out exactly like you wanted? Thats no problem, just pop back into ImageReady, and make the necessary changes. Then BE SURE to reapply your palette, then you can continue with your normal saving process.

Troubleshooting

\------------------

1) My image has pixels in the transparent areas.

Be sure you have no partial transparent areas, or other colors where the transparent areas should be. It must be only pure black #000000.

2) I have bits of transparent areas where my image should be.

This is because these areas are being read as black which becomes transparent. Change them to a slightly brighter shade of black to fix it.

3) My image looks way too pixelated.

This is likely a palette problem. You can somewhat correct it by opening your optimized .gif and manually correcting pixels with the pencil/eyedropper. Again, don't forget to reapply the palette before saving.

4) The image is too bright.

Adjust the brightness is ImageReady, then apply the palette. If you make it darker, make sure there isn't any dark colors that turn black when you adjust the brightness. If it can't be avoided, use the eyedropper and an off-black to correct it.

As, my first tutorial, feedback is appreciated.
