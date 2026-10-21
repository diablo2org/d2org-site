---
title: Changing the Title Screen
summary: >-
  First you will need to make a new image or convert a existing one, for this to
  work make
keepId: 426
author: Nefarius
credit: by Nefarius
posted: '2006-09-07'
modified: '2018-01-06'
views: 6644
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=426'
---
First you will need to make a new image or convert a existing one, for this to work make

sure the image is 800x600 pixels and not even on pixel bigger!!! If you do make a image

with other pixel amount the results can often be VERY nice(laugh), next you must make

sure that the image has only 256 colors and is in pcx format(zsoft paintbrush), next

you will have to apply a palette to the file that matches the Diablo II palette, if

you don't know where to get something like that simply go here. After

you applied the palette you will need to save the image as titlescreen.pcx and convert

the image from pcx to the dc6 format used by Diablo II, do this with dc6con(also get

that one from the phrozenkeep), now simply use dc6con

like mpq2k(throughout run option in start menu) note: since this and also mpq2k are

dos programs you will need to have all files in the same folder, type in

'dc6con titlescreen.pcx' (DO NOT APPLY A TRANSCOL!!!), now after you have the dc6

image use psidc6(also from the phrozenkeep) to test the image, if it works then

read the green text, if it does not work read the red text:

1\. If the image seems to get twisted or has messed up colors then you  
have not applied the palette, or your image is more then 256 colors, or  
you may have applied a transcol by mistake, or your image is to big in  
size.

2\. If it does work launch mpq2k and put the new image into this location:

mpq2k a patch\_d2.mpq titlescreen.dc6 data\\global\\ui\\frontend\\titlescreen.dc6

now  
simply test it and your mod should have a new title screen like my mods  
do 8-), aka: with this very same method you can also change the char  
select screen(charselectbckg.dc6) and also the trademark screen  
named(trademark.dc6).
