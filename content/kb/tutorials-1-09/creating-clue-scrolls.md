---
title: Creating Clue Scrolls
summary: >-
  Blizzard had intended to have informational scrolls in the game, which you
  could click to open a window with informative text. This, theoretically, would
  have been a means by which players could get…
keepId: 198
author: Phrozen Heart
credit: by JBouley
posted: '2003-12-02'
modified: '2018-01-06'
views: 7379
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=198'
---
Blizzard had intended to have informational scrolls in the  
game, which you could click to open a window with informative text. This,  
theoretically, would have been a means by which players could get clues about  
runewords, crafted recipes, and other “mysteries” of the game.

But like many other ideas Blizzard had, this one just didn’t  
make it into the final game. However, for those of you (like me) who need to  
give players clues about certain things in the game and are tired of adding  
“silent” speeches to the scrolling text boxes for NPCs, there is an answer.  
It’s not perfect, and a little sloppy sometimes, but it works nicely and once  
players of your mod get used to it, they’ll hardly notice the annoying little  
imperfections of the process.

NOTE: Yes, this tutorial is long, but it isn’t really  
complicated. I just explain a lot of things in great detail to help prevent  
confusion.

The files you will need to edit:

1) itemtypes.txt

2) misc.txt

3) string.tbl (expansionstring.tbl would also work if you  
prefer it instead)

4) TreasureClassEx.txt

I am assuming for the purposes of this tutorial that you  
already know how to open and edit the .txt files, how to edit .tbl files, and  
how to either run the modded versions of these files in -direct -txt mode or  
how to pack them into the patch\_d2.mpq file. If you don’t know these things,  
you need to read the “Idiot’s Guide to Modmaking” and practice with some very  
simple tutorials.

What you need to do:

There are two ways to do this: one-page scrolls or  
multiple-page scrolls.

The benefit of one-page scrolls is that you don’t have to  
make as many new line additions to misc.txt or string.tbl. The disadvantage is  
that you cannot say much on a one-page scroll. You see, the string.tbl file,  
which is where you will put the text that people will read, allows only three  
lines of text and only a very limited number of characters per line. So, if you  
have a lot to tell players on a scroll, a single page won’t be enough. Instead,  
you will need to create a series of items that you right-click in order to go  
from page to page. I will describe the ways to do both SINGLE-PAGE and  
MULTI-PAGE scrolls…plus an extra lesson on ROLLED SCROLLS (which are useful if  
you will be having vendors sell clue scrolls).

\-------------------------------------------------------------------

SINGLE-PAGE SCROLLS:

For our first example, we are going to assume that you have  
created a new Horadric Cube recipe, and so now you need to make a scroll that  
tells players that combining two long swords in the cube will create a  
two-handed sword.

NOTE: For this one-page scroll example, we are assuming that  
vendors will NOT sell the scrolls. The reason? When you put your cursor over  
the item, you will get the clue. So having it in a vendor window would be  
pointless. Why would you buy it if you can view it for free first? The same  
“problem” exists for the multi-page scroll that will be described later. If you  
want to keep the clue secret at first and have vendors sell them, you will need  
to make rolled scrolls, which is the last lesson in this tutorial.

1) itemtypes.txt

First, we need to create a new itemtype to assign to  
scrolls. You might be able to use some existing item types already in the game,  
but in the interests of not causing any game errors or confusion, let’s just  
create a new one, shall we?

Open itemtypes.txt

Copy the entire row for the “Skull” item type, which  
is the last row in the unmodded version of the itemtypes file. It is row number  
105 if you are using Microsoft Excel.

Paste that row at the bottom of the itemtypes file, thus  
creating a new line. Make sure to add it to the bottom (the end) of the file.  
Not in the middle, not at the top….at the end. For most files, it is always  
safest to add new rows to the end of the file.

We’re doing it this way simply to save some time, save you  
some typing, and help prevent any errors that might creep in if you’re a bad  
typist (you could simply type all the entries in, but why?). Now, we have to  
change several columns in this new row.

First, change column A (ItemType) from Skull to Info  
Scroll (Or any other simple name that will help you remember what this row  
is for). This column is for reference only, so you don’t need to be too  
particular.

Second, change column B (Code) from gemz to info (You  
can do a different code if you like. Just make sure it’s four characters long  
and isn’t already being using in itemtypes.txt. For example, I have codes like  
page, mitm, typ1, typ2 and typ3 in my mod for various item types).

Third, change column C (Equiv 1) from gem to misc

Fourth, change column S (Gem) from 1 to 0 (that’s a  
zero, NOT the letter “O”)

You are now done with this file. Save it and close the file.

2) misc.txt

Open misc.txt.

Once again, we will copy a row and paste it at the end of  
the file (to save time and cut down on errors), as we did in itemtypes.txt,  
then we will change certain columns.

Copy the Identify Scroll row (row number 24 if you are using  
MS Excel), and paste it at the end of your misc.txt file.

Change column A (name) to 2Hand Sword Clue (Or any  
other simple name that will help you remember what this row is for). This  
column is for reference only.

Change column B (namco) to info scroll (Or you could  
simply use the same name as you did in column A. This, again, is a reference  
column, and what you put in it really doesn’t matter, except to help you know  
what  the row is for. Personally, I use  
Column A to give a short, specific name that tells me quickly what the scroll  
clue is about, and I use Column B to describe the general nature of the item.  
Thus, in this tutorial, all clue scrolls we create will have “info scroll” in  
Column B. If you prefer to label your items differently with regard to column A  
and B, that’s fine.)

Change column K (cost) to 1. Since vendors don’t pay  
you full price anyway, this means you can only sell the scroll to a vendor for  
a mere 1 gold piece. Why would a vendor want to buy it anyway? However, if you  
want the scrolls to be worth more so that players can sell them for a decent  
price, Make it however high you want. This is the PURCHASE price, of course, so  
what vendors pay for it will be lower than what is in this column.

Change column M (code) to x00 (This is your item  
code. You must use a unique three-character code that is NOT used anywhere else  
in misc.txt, armor.txt or weapons.txt. Special characters like $, &, ^, ~  
and others CAN be used. Just make sure you use an orderly system so that you  
don’t lose track and accidentally use the same code elsewhere. With the code  
used in this example, of course, the next one-page scroll could be x01, and the  
one after that x02, all the way up to x99 for a total of 100 scrolls using the  
x plus a two-digit number. That give you a fair amount of maneuvering room.  
Again, though, you can use a different system. But the code MUST be three  
characters long. I’m pretty sure that codes are case-sensitive. Thus, the  
lowercase a is NOT considered the same as the uppercase A by the  
game when used in item codes.

Change columns P and Q (invwidth and invheight) to 2, as the  
inventory graphic we will be using (see change to column V below) is 2x2, NOT  
1x1 like the identify scroll.

Leave column U (flippyfile) alone if you like, or change it.  
This columns controls which animation is used when you or a monster drop the  
item. Since we have copied the identify scroll row, the animation will be the  
same as for an identify scroll. Or, you could change it to the flippyfile code  
for the town portal scroll, or the code used for the Bark Scroll. Heck, you  
could have it be the flippyfile for one of the sword rows in weapons.txt, but  
that probably wouldn’t make a lot of sense, would it? Just make sure you use a  
valid, existing flippyfile code from either misc.txt, armor.txt or weapons.txt  
in this column.

Change column V (invfile) to invscb (which is the  
inventory graphic code for the Bark Scroll from the Tree of Infniss). You could  
leave it as the inventory graphic for an ID scroll, but this could cause  
confusion later on, and to me, it doesn’t look right anyway. The invscb image  
looks more like something you would be reading.

Change column AC (useable) from 1 to 0 (that’s a  
zero, NOT an O).

Change column AF (type) to info (remember, this is  
the new item type we created in itemtypes.txt).

Leave column AH (sound) alone or change it if you like. We  
copied the ID scroll, so it will make a paper-flipping sound, which makes  
sense. But, if you want to use another sound, you can change the number in this  
column to any number used in the “sound” column in misc.txt, armor.txt or  
weapons.txt.

Change column AM (belt) from 1 to 0 (zero), unless  
for some strange reason you want clue scrolls to be able to be carried  
in a belt slot.

Make sure column AN (autobelt) is set to 0 (zero) so  
that the game doesn’t try to put the scrolls into a belt slot when you pick it  
up.

Columns BA (CharsiMin) through EG (JamellaMagicLvl) are used  
to specify how many of the item should be sold by that vendor. As we will NOT  
be selling these kinds of clue scrolls, make sure all the min and max columns  
are set to 0 (zero). You can leave all the “255” entries the way they  
are.

You are now done with this file. Save it and close the file.

3) string.tbl

NOTE: I prefer to use string.tbl, though some people will  
add their new items to expansionstring.tbl or patchstring.tbl. Just remember  
that if you add anything to patchstring.tbl, you will have to re-do all that  
work when the next patch for D2 comes out, as the newest patch has a completely  
new patchstring.tbl file. This is another reason I tend to stick with  
string.tbl.

In describing what to do to the string.tbl file in this  
example and the other ones later on, I use the term “string” and “descriptor.”

The “string” is the code you will add to the .tbl file. In  
this case, since we are essentially making a new item, the item code (from  
column M of misc.txt) will be the string you add.

The “descriptor” is the text that actually displays in the  
game (for example, the string and item code for the long sword are both lsd,  
but in the game you don’t see lsd. You see long sword.)

I use Baron Darkstorm’s Table Editor and as of the moment I  
am writing this tutorial, I haven’t used any other table editors, so I don’t  
know what their interfaces look like. But, in Baron Darkstorm’s editor, the  
strings are in the left-hand window and the descriptors are in the right-hand  
window.

Whatever editor program you use to do this, here is what you  
do:

First, add the new string to the string.tbl file. For the  
scroll in our example above, the item code was x00, so that’s the name  
of the new string we are adding.

For the descriptor, we are going to enter three lines of  
text as follows:

1 two-handed

combined make

2 long swords

Notice the rows are in “reverse order.” This is how (at  
least in Baron Darkstorm’s editor) the lines are read by the game in order to  
display:

2 long swords

combined make

1 two-handed

It may be that other .tbl editing programs allow you to  
enter descriptors for items in “normal order,” but if so, I don’t know about  
it. As far as I know, item descriptors must always be in reverse line order in  
they are multi-line entries.

NOTE: You can only have three lines maximum for an item  
descriptor. Also, you need to realize that each row has a maximum number of  
characters. If you exceed it, the extra characters will be “chopped off” and  
replaced with a few symbolic characters that will make no sense. I haven’t ever  
officially figured out if the maximum is really maximum character per line or a  
maximum number of characters total for the three lines combined. But I have  
found that I usually am OK if I don’t exceed 16 characters per line (blank  
spaces included in that character count).

Save the string.tbl file and close it when you are done  
saving it.

You know have a fully functional scroll that will display the  
message:

2 long swords

combined make

1 two-handed

…when you put your cursor over the item (whether it’s on the  
ground or in the inventory, stash or Horadric Cube).

The last thing we need to do is make it so that it can be  
dropped by monsters, which brings us to the TreasureClassEx.txt file.

4) TreasureClassEx.txt

NOTE: Really, you should read the tutorial here at Phrozen  
Keep to truly understand the TreasureClassEX.txt (TCEx) file. However, I will  
explain a few basic so that it will make more sense what I am doing. However,  
it may be confusing if you have not worked with this file before and haven’t  
read the tutorial or any forum threads that dealing with treasure drops.

For the purpose of this example, I am going to assume you  
have made 100 different single-page clue scrolls, with item code x00 through  
x99.

One thing you will notice about the TCEx file is that a lot  
of treasure classes (TCs) don’t list actual items in their fields but  
actually list other treasure classes in the TCEx file. This makes things easier  
so that you’re not entering in a ton of codes to cover every conceivable item  
in a treasure class every single time. Something else you will notice is that  
when one treasure class references another treasure class in this manner, the  
treasure class listed in there is ABOVE it in the file. That is, many rows  
reference one or more of the “jewelry” treasure classes. The jewelry TCs are above  
those other TCs in the file. If the jewelry TCs were placed lower in the file,  
underneath the TCs that list jewelry A, jewelry B, etc., then it wouldn’t work.  
A TC can only find another TC in the file if it is above it.

Why did I explain that? Well, we are going to set this up so  
that you can have any TC in the TCEx file drop clue scrolls, so we need to add  
all of our new TCs near the TOP of the TCEx file. This is one of the relatively  
few files in which you can add new rows almost anywhere without causing  
crashes. Don’t delete any existing rows, just insert all the new rows I will  
describe right below the gold row at the top of the file.

So, we are going to add 11 new rows to handle your 100 new  
clue scrolls. The first ten will be named:

clues1, clues2, clues3, clues4, etc. all the way up to  
clues10.

The eleventh row will be called Clue Scrolls

In the clues1 row, you will enter x00 for the Item1 column  
(column H), x01 for Item2, etc. until you have filled up all 10 item columns.

Then, in the clues2 row, you will add the next ten item  
codes for your scrolls in the item columns, and so on through the row clues10,  
so that all 100 of your new scrolls are represented.

I am going to assume that all scrolls are equally important  
and that you want them to drop at the same probability. So, assuming this, set  
the Prob column for each Item column to 1.

For each of these 10 new rows, set Picks (column B) to 1.  
Leave the Unique, Set, Rare, Magic and NoDrop columns blank.

(If you want to know more about what NoDrop and the Prob  
columns do in terms of determining the chances of an item dropping, and how you  
can fiddle with them for more precise drops, please read the TreasureClass/Item  
Drop tutorial here at the Keep)

For simplicity’s sake, leave columns AB through AE (SumItems  
through SumDrop) blank.

Make sure you have a 0 (zero) in the Better and Term columns  
(AF and AG). If you forget the zero in the Term column, I guarantee you will  
crash the game.

Now, we will work on the eleventh new row you created, the  
“Clue Scrolls” row.

Leave the same columns blank as you did in the other ten  
rows, and put zeros in the same columns you did before. For the Item columns,  
though, this time you will put the names of the 10 rows you created above the  
“Clue Scrolls” row. So, Item1 would be clues1, Item2 would be clues2, etc., so  
that all 10 of those treasure classes are represented in this row. Again, set  
all the Prob columns for the Item columns to 1 for now.

Now, you can do one of two things (or both things, if you  
like)

1) You can add Clue Scrolls to any other TC row with  
a blank Item column. Just type in the name of that row (Clue Scrolls) to the  
empty Item column and set the Prob value in the adjacent column to whatever you  
like to make it drop as often or as rarely as you like in relation to the other  
items being dropped by that TC row.

2) You can go into monstats.txt and enter Clue Scrolls

to the TreasureClass rows for various monsters so that they will drop the  
scrolls now instead of what they used to drop.

\--------------------------------------------------------------------

MULTI-PAGE SCROLLS:

The files you will mod for multi-page scrolls are the same  
as for single-page scrolls. Only a few things are different about what you do.

Just to give you an idea of where we are going, the scroll  
we will create in this example is a scroll telling you that you need to kill a  
certain unique monster to get a certain item. Let’s say, telling a player than  
he or she needs to kill Pindleskin to get a new item you’ve created called the  
Orb of Creation.

1) itemtypes.txt

Nothing new here. You’ve already created the new item type  
for scrolls in the single page scroll example above. You’ll use the same item  
type for the multi-page scroll rows in misc.txt.

2) misc.txt

Most of the steps are very similar or the same as for  
single-page scrolls.

I am ONLY going to describe rows that we will handle differently  
than in the single-page example above.

First off, instead of making one new row as we did for a  
single-page scroll, we will create three rows because this scroll will be three  
pages long.

Column A (name) for the three new rows might be Pindleskin  
page 1, Pindleskin page 2, and Pindleskin page 3. Again, this  
column is for reference only. Name the rows according to what you want to keep  
things straight and know what the rows are for.

Change column M (code) to y00, y01, and y02

respectively for the three new rows. Just to keep from confusing you, I wanted  
to give these multi-page scrolls a slight different item code name from the  
ones I suggested for the single-page scrolls.

Change column Y (Transmogrify) to 1 for all three  
rows.

Change column Z (TMogType) for each of the three new rows as  
follows:

Pindleskin page 1 row: y01

Pindleskin page 2 row: y02

Pindleskin page 3 row: y00

By setting column Y to 1 and putting the other pages’ item  
codes in the TMogType rows in that way, you make it so that when you  
right-click on the first page of the scroll it will turn into page 2; when you  
right-click on page 2, it will become page 3; and when you right-click on page  
3, you will start over at page 1. So, you can keep looping through the pages  
(reading down the scroll, in essence).

NOTE: If you fail to set the last page to become the first  
page, you will get “stuck” on the last page and never be able to re-read the  
scroll. If you only want to allow players to read the scroll once, then that’s  
fine. In that case, leave column Y at 0 for the last page of the multi-page  
scroll and don’t put an item code in column Z.

Every other row except for the ones mentioned above you’ll  
handle just as you did for the single-page scrolls.

You are now done with this file. Save it and close the file.

3) string.tbl

Same deal as before, except that you will be adding three  
new strings and a descriptor for each string. In other words, one new entry for  
each page of the scroll.

So, for the first page, you add the string y00 and,  
for the descriptor, type something like:

Pindleskin to

the horror named

You must slay

For the second page, you add the string y01 and the  
descriptor might be:

which will

of Creation,

gain the Orb

For the second page, you add the string y02 and the  
descriptor might be:

items into Sets

make normal

allow you to

So that your complete message would read as:

You must slay

the horror named

Pindleskin to

(right click to make)

gain the Orb

of Creation,

which will

(right click to make)

allow you to

make normal

items into Sets

The inelegant part of this is that you will always see the  
next page right away, with the words “right click to make” in between the two  
blocks of text. It doesn’t look fantastic, but it is quite readable and players  
will get used to it pretty quickly.

4) TreasureClassEx.txt

You would do the same kind of thing you did for the  
single-page scrolls. But the item code you would put for a multi-page scroll in  
an Item column for any treasure class row would be the item code for the first  
page of that multi-page scroll only.

\--------------------------------------------------------------

ROLLED SCROLLS:

Rolled scrolls are basically a variation on the multi-page  
scrolls. You basically need a couple extra rows for each scroll so that the  
text you see at first doesn’t tell you much of anything. This is useful if you  
want vendors to sell the scrolls but don’t want players to just hover the  
cursor over the item and read all or part of a clue without paying for the  
item. So, in this example, I will tell you not only how to do this, but also  
mention how you might set up the vendor rows to sell the rolled scrolls.

For this example, our scroll will describe a vulnerability  
that you have given to a certain kind of monster. Specifically, letting characters  
know that zombies are very susceptible to fire (this assumes, of course, you’ve  
given zombies a negative resistance to fire in monstats.txt, but we won’t go  
into how to do that here).

Again, you will use all the same files as before for the  
other types of scrolls, and many of the steps will be identical.

1) itemtypes.txt

Again, you already did the step of creating the item type in  
the first example. The item type we’ll use will be the same as for the other  
examples.

2) misc.txt

In this example, there will two pages of clue text, preceded  
by two other “dummy pages,” for a total of four “pages” and thus four new rows.

One again, I will discuss ONLY those rows that we will  
handle differently than in previous examples. And once again, I’m using a  
slightly different style of item code for these scrolls to help you distinguish  
them from earlier examples.

THE FIRST NEW ROW:

Column A (name) will be Zombie clue page 1

Change column K (cost) to whatever you think is a fair price  
for players to pay for the item from NPCs.

Change column M (code) to z00

Change column V (invfile) to invhscr (this is an  
inventory graphic that already exists in the game’s files that looks like a  
rolled-up scroll). For the other three pages, we will use the inventory graphic  
that we used for previous types of scrolls, which as you will recall is invscb.  
Changing the graphic for the first page simply makes everything more  
aesthetically pleasing.

Change column Y (Transmogrify) to 1

Change column Z (TMogType) to z01

Columns BA through EG:

You would only want to make the first “page” (the rolled  
scroll portion of the item) sellable, so you only need to do this for the first  
row of this rolled scroll, NOT for the other rows described below). Figure out  
which vendors you want to be selling the scroll. Set the min and max columns  
for that vendor to 1 (why would you want more than one to sell anyway?). Leave  
the magic min and magic max columns for that vendor at 0 (zero), since there is  
no magic version of the item. For the very same reason, leave the Magic Lvl  
column at 255.

THE SECOND NEW ROW:

Column A (name) will be Zombie clue page 2

Change column M (code) to z01

Change column Y (Transmogrify) to 1

Change column Z (TMogType) to z02

THE THIRD NEW ROW:

Column A (name) will be Zombie clue page 3

Change column M (code) to z02

Change column Y (Transmogrify) to 1

Change column Z (TMogType) to z03

THE FOURTH NEW ROW:

Column A (name) will be Zombie clue page 4

Change column M (code) to z03

Change column Y (Transmogrify) to 1

Change column Z (TMogType) to z00

Thus, as with the multi-page scrolls, you can cycle through  
from the rolled scroll to the readable pages and back to rolling it up so you  
can read it again later.

3) string.tbl

Same deal as before with the other scroll examples, except  
that you will be adding four new strings and a descriptor for each string,  
something along the lines of the following:

String z00:

Rolled Scroll

String z01:

Monster Lore

String z02:

walking corpses

encounter the

When you

String z03:

more quickly

end the battle

use flame to

This guarantees that when the player puts the cursor over  
the rolled scroll, he or she will only see the first two “pages,” telling them  
it’s a rolled scroll and that it will have a clue about monsters. The player  
won’t be able to see the other pages until he or she buys it and right-clicks  
to the later pages.

4) TreasureClassEx.txt

If you want these rolled scrolls to be dropped by monsters  
as well as being sold by NPC, follow the instructions noted in the previous two  
scroll examples. You would only make the first “page,” the rolled scroll  
portion, able to drop, just like you would only have the first page of a  
multi-page scroll drop.
