---
title: Adding a New Helm
summary: >-
  I'm going to assume that you have already read the basic tutorials before
  reading this tutorial and you therefore already know how to extract txt files
  and insert them into the patch file.
keepId: 429
author: Nefarius
credit: by Fusman
posted: '2006-09-07'
modified: '2018-01-06'
views: 8005
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=429'
---
I'm going to assume that  
you have already read the basic tutorials before reading this tutorial and  
you therefore already know how to extract txt files and insert  
them into the patch file.

Armor.txt  
Start off by opening up armor.txt, from the latest patch, with  
excel. Since we are adding a helm the easiest thing to do is to  
copy a line of an existing helm, for example the great helm. So  
select all of line 6 and copy and paste it below in line 7. You do  
this by clicking on the 6 on the far left on your screen, this  
should select all of line 6, then you right click on the line and  
select copy. Now select line 7, right click again and select  
'insert copied cells'.   
Now you have your new line and you are ready to change some values  
to make your new helm special. If I dont mention a column you most  
likely do not have to change it from what is already given for the  
great helm you just copied.   
Selecting a name is the first thing to do, for this example we  
will choose the name 'Chaos Helm' and put that text in  
column A, called 'name' column. Next up is column D  
called 'rarity' this tells the game how rare the helm  
is, for example if the helm is suppose to be valuable you  
probably want it to be pretty rare. Putting 1 in there is for  
normal helms, 2 is more rare than 1,  3 more rare than 2 and  
so on. However this column doesnt seem to do a hell of a lot in  
making an item any more rare than normal items so dont put a lot  
of thought in it. For this example we'll throw in 2 for the rarity  
column.  
Now to decide just how much armor this helm will provide, in  
columns H and I, called 'minac' and 'maxac'.  
Lets say you want to make a helm that tops even the best crown  
that has a maxac value of 45, so lets put in 47 for minac and 55  
for maxac. This should make your helm a good one but it is not  
totally of the charts. Next you choose the required strength for  
your new helm in column L called 'reqstr'. Since it is  
such a high ac helm you might want to have high requirements to  
keep the balance of the game ;-). So lets put 70 in there since  
the great helm requires 63 but gives lower ac. Column N called  
'durability' decides how much durability your helm has,  
of course. Keeping with the theme of it being a chaos helm lets  
put a decent number in there like 60, that is 10 higher than the  
Crown has. Column P called 'level' is next up and I find  
it pretty safe to put in a number there that is just about what  
level you will be when you find one. Lets say you already decided  
that this helm will drop in act 4 so you might be around level  
23-25 when you find one, so for this example we'll put 25 in the  
level column. Column Q, called 'cost' decides how much the helm  
is going to cost. Since our helm is pretty much top of the line  
for normal difficulty it might suit to price it accordingly, take  
a look at the price for crown and decide how much more you think  
your helm is worth. For this example we'll just stick 10000 in  
there.  
Next column, R or 'code' column, is very important. The  
code you put in there is the code you also put in the string file  
later. You have to choose a 3 letter code that is not being used  
in any other code column in other txt files, like weapons.txt,  
misc.txt and armor.txt. Lets put in xxh for our new helm. Remember  
this code because you have to put it in the string file later. Next up is column S, called 'alternategfx' the  
codes that are already in there for helms are the only codes you  
can use. This tells the game what character graphic to use when  
you equip the helm. As you can see by looking at the file in excel  
the codes that are available are:  
cap = cap  
skp = skull cap  
hlm = helm  
fhl = full helm  
ghm = great helm  
crn = crown  
msk = mask  
bhm = bone helm  
lit = no animation, like the new xpack circlets.  
These are your options, you'll have to choose one that looks like  
the helm graphic you have chosen for your new helm. Since we chose  
the helm from d1 that looks pretty much like the great helm we are  
going to choose 'ghm' for our alternategfx.  
Next up is column U, called 'ubercode', this column is  
also important like the 'code' column. This tells the  
game which item is the exceptional for this item. If you put in 0  
the game will treat the item like an exceptional and give it a  
level requirement of 25. But since our item is for normal  
difficulty and we are going to add an exceptional version of it as  
well then we have to find another 3 letter code to use for our  
exceptional that is not being used elsewhere. Lets choose xx9 for  
our example.  
Columns AB and AC tell the game if and how many sockets our item  
has. Column AB, called 'hasinv' turns sockets on(1) and  
off(0). 1 if it has sockets, 0 if it is not available with  
sockets. Column AC, called 'gemsockets' tells the game  
how many sockets the item has if it has sockets turned on. For our  
example we'll stick in 2 for number of sockets like the rest of  
all the helms.  
Column AD, called 'flippyfile', is next. It tells the  
game what animation to use when the item is dropped, you know that  
animation of an item flying and flipping when you or a monster drop it on the  
ground. Like with the alternategfx column we are pretty much stuck  
with using what is already in the game so pick something that  
looks like the item you are adding. In this example it is flpghm  
for the great helm flip animation.  
Column AE, called 'invfile' tells the game what  
inventory picture to use for you item. You can download a file at  
the end of this tutorial. The game uses dc6 format files for the  
inventory graphic files so you will have to use dc6maker to  
convert bmp files to dc6 files, doing that is simple and I will  
not go into that here. Simply download dc6maker from tools of the  
trade and convert the file, it is a simple windows program. Once  
you got your dc6 file ready you'll have to give it a name, for  
example invxxh would be good cause it follows the pattern already  
in the most of the txt files. So the file would be called invxxh.dc6 after you  
convert it, and you put 'invxxh' in column AE  
then.   
Now it is time to decide just who is going to be selling this new  
helm of ours, well, since we already decided to make the helm drop  
in act 4 then it would seem reasonable to make either one of the  
npcs in act 4 carry the helm. Remember though that since you  
copied the line for great helm you'll have to go through the line  
and make Hratli not sell it by putting 0 in columns CL, CM, CN, CO  
and 255 in column CP, do the same for all other npcs you dont want  
selling this item. Yes I know you'll see Cain has settings in  
there to sell stuff but those columns dont work. Columns DP to DT  
are for Halbu in act 4, so lets add some numbers in there for him  
to sell this item. The 'halbumin' and 'halbumax'  
columns tell the game how many normal versions of the item halbu  
will carry when you go see him, not always 100% precise but close  
enough. Lets put 1 for both min and max, so he should always carry  
1 of these helms. The 'HalbuMagicMin' and 'HalbuMagicMax'  
columns tell the game how many magic versions of the item halbu  
will carry. Lets put 1 for both min and max there too, so he  
should always have 1 magic chaos helm. HalbuMagicLvl column is set  
to 1.  
Sometimes when you add your own graphics they get corrupt when the  
game tries to change their color with magic codes, like the plus  
max damage makes items black. If this happens to your item  
graphics you need to put 0 in columns EG and EH, called Transform  
and  InvTrans.  
Now to make the exceptional version of the new helm. Copy the line  
for the new Chaos Helm and insert copied cells above the grand  
crown. There are only a few columns you need to change in this  
copied line to make the exceptional. First column A, change the  
name to 'Berserk Helm'. Next up is column E, called  
spawnable, put 0 in there for exceptional items. Since it is the  
exceptional it needs higher ac values in minac maxac columns, so  
lets put something like 120 and 135 in those two. More strength is  
required for exceptionals so lets put 130 in column L, the 'reqstr'  
column. Up the level of the item to about 45 in column P also  
increase the price to something like 40000.  
Change column R to xx9 or the code you selected as ubercode back  
when you were making the normal item. Change column U to 0 like  
the rest of the exceptional items.  
You dont want Halbu selling these helms in normal so put 0 in his  
min max columns, DP-DS and put 255 in column DT.  
Now save and close the armor.txt file.  
Treasureclass.txt  
Open up treasureclass.txt in excel. Find line number 81 called  
'act4-hth' change the 23 to 24 in that line and also add  
your item code xxh behind the last item in that line. This will  
make some monsters in act 4 drop this new helm.  
Save and close treasureclass.txt file.  
The string file  
Fire up tbled 1.02 and open up the string file from the latest  
patch.  
Hit the 'add key' button and type in xxh and press OK.  
Have the new key 'xxh' selected in the list on the left  
and put in the name for the helm, Chaos Helm, in the big window on  
the right. Now press 'add key' button again and put in  
xx9 and press OK. Have xx9 selected and put in the name of the  
exceptional in the window on the right, Berserk Helm.  
Now save the string file and exit tbled.  
Next you have to add all the files back to patch\_d2.mpq.  
This is what the script file looks like that adds these 4 files  
needed to the patch file:  
O patch\_d2.mpq  
A string.tbl data\\local\\LNG\\eng\\string.tbl  
A armor.txt data\\global\\excel\\armor.txt  
A treasureclass.txt data\\global\\excel\\treasureclass.txt  
A invxxh.dc6 data\\global\\items\\invxxh.dc6  
C patch\_d2.mpq

Save this file as newhelm.txt and then create a bat file that  
looks like this:

mpq2k s newhelm.txt  
Save this file as newhelm.bat. Make sure all the files  
mentioned are in the same directory (not your d2 directory,  
however). Mpq2k, your armor txt file, your dc6 file and all the  
others AND an unmodified copy of the latest patch\_d2.mpq. Now you  
simply double click on your bat file and the mod is ready. Just  
copy your modified patch to your diablo directory, make sure you  
have a backup of the original patch and your characters. Note that  
when you add new items to d2 your old chars will not work with  
that mod.  
The files:  
newhelm.bat  
newhelm.txt  
invxxh.bmp  
invxxh.dc6  
string.tbl  
armor.txt  
treasureclass.txt  
that are used in this tutorial can be downloaded already modified HERE.  
To download mpq2k and tbled check out the tools of the trade  
section.

click on the image for a screenshot of the chaos helm
