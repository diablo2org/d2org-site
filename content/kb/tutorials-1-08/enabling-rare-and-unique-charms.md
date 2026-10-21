---
title: Enabling Rare and Unique Charms
summary: >-
  NOTE : With the release of patch v1.09, this tutorial no longer works due to
  the removal of several columns in the itemtypes.txt file.
keepId: 425
author: Nefarius
credit: by Phatose
posted: '2006-09-07'
views: 8054
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=425'
---
NOTE : With the release of patch v1.09, this tutorial no longer works due to the removal of several columns in the itemtypes.txt file.

For this tutorial, you will need the following: mpq2k, Excel (or an equivalent tab delimited text editor), and an appropriate editor for strings.tbl if you wish to add new uniques.

You first step in allowing higher grade charms to drop is to extract the needed files from patch\_d2.mpq. You will need itemtypes.txt. If you wish to add rare charms, you'll also need rareprefix.txt and raresuffix.txt. For unique's, you'll need uniqueitems.txt, and string.tbl if you wish to add new uniques. You can extract these with MPQView if you have a file list for the patch, or you can use mpq2k from the command line. Exact instruction in using either of these programs are available from the programs readme.txts.

After you have gotten the files you'll need, you first move is to open up itemtypes.txt in Excel. Across the type are the column names, down the left side are the item types. You'll need to go down to where the 3 charms types are listed, small, medium and large charm. These are below 'Expansion'. The row with itemtype charm above 'Expansion' is irrelevant. In those three rows (85, 86, and 87) scroll over to the column labeled 'Mods' (column H). Change the 0's in these three spots to 1. Then save itemtypes.txt.

If you want to allow rare charms to drop, you'll now need to edit rareprefix.txt. Open in in Excel. The first column are the prefixes used in naming rares. Choose a couple of prefixes that you would like to be available as first names of rare charms. Columns C through H list what types of items those prefixes are available to. In the rows you have chosen, add char in a free space in those columns, immediately following the last current entry. Save rareprefix.txt, and open raresuffix.txt, and repeat this process for that file.

If you wish to allow unique charms to drop, you need to either alter existing uniques to charms, or create new unique charms in uniqueitems.txt. The details of adding in new uniques goes beyond the scope of this tutorial, so we'll just edit an existing entry. Open uniqueitems.txt in excel. We'll change the Gnasher into a unique grand charm, as it is the first entry. Go to the row labeled 'The Gnasher'. Scroll to column H, Code. We'll change this to cm3, the item code for a grand charm. Column I does not seem to have any effect, but you should change it to Grand Charm for reference. If you're familiar with uniqueitems.txt, change the other columns to create exactly the Unique you want, though for now, we'll just leave the rest they way it is. Adding in new uniques goes beyond the scope of this tutorial, as I've said, but if you choose to, remember that entries are case sensitive, and 'The one ring' and 'The One ring' would be treated as different values. For now, save uniqueitems.txt.

The modification neccessary are now done. Repack the modded files into patch\_d2.mpq with mpq2k, then either use the run LoD using -direct, or create the .bin files you'll need with -txt and back the new .bins. (The exact method for -txt is covered in ThresholdRPG's tutorial for working with patch 1.08). Run LoD, and go kill things. Eventually, you're newly avaiable rare or unique charms will drop. There are ways to speed up this process by modding treasureclassex.txt or cubemain.txt, but neither will be covered in this tutorial.

An additional note - while the modifications to itemtypes.txt will allow charms to be used in sets, it is not recommended. Sets only gain bonuses when the individual items are actually equipped, and charms cannot be equipped. While it is possible to modify charms so they can be equipped, or create a new type of charm that can be worn, it is not recommended for inexperienced modders.

This explains how to allow unique/rare charms to drop. Do be careful with these though. They can very easily become imbalancing in quantities, as I can attest to. Rare charms add up quickly, and can be a major thorn to game balance. But if balance isn't your thing....go to it.
