---
title: Monster Converting Tutorial (by Alkalund)
summary: >-
  Here's a simple method you can use to change the animations of monsters in the
  game, that does not involve Hex Editing of files or messing with cof files
  either.
keepId: 152
author: Phrozen Heart
posted: '2004-08-19'
views: 11226
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=152'
---
Here's a simple method you can use to change the animations of monsters in the game, that does not involve Hex Editing of files or messing with cof files either. you'll need:  
1) [CV5](http://user.cs.tu-berlin.de/%7Emickyk/files/cv5.zip) with the latest [cvDCC.dll](http://user.cs.tu-berlin.de/%7Emickyk/files/cvdcc2_1.zip) to save dccs (unzip the contents of cvdcc2\_1.zip in CV5's Addons folder);  
2) [Gamani Gif Movie Gear](http://www.gamani.com)  
3) a LOT of patience

Part 1: Replacing Single Part Monsters

Let's say you want to replace the quill rat with another monster. First thing to do is open up Cv5 and find the folder inside d2data.mpq where the quill rat's animation graphics are. They're in data\\global\\monsters\\si . The good news is that the quill rat is a monster which only has one 'part' (the torso), so this will make your job easier. It's torso animations are in the 'data\\global\\monsters\\si\\tr' folder.

In there you'll see a bunch of files, namely  
\- sitrlita1hth.dcc  
\- sitrlita2hth.dcc  
\- sitrlitddhth.dcc  
\- sitrlitdthth.dcc  
\- sitrlitghhth.dcc  
\- sitrlitnuhth.dcc  
\- sitrlitwlhth.dcc  
As you can guess the names have a structure, here's what it means:

'si' - the monster's token. The quill rat's token is 'si'. You also use the token to find the monster's animation files, as we did a while ago. For a list of all the tokens, go [here](http://dynamic2.gamespy.com/~phrozenkeep/site/mon_tokens.php).  
'tr' - Stands for 'torso'.  
'lit' - Stands for 'light' armor.  
Now for the most important codes:  
'a1' - this is the monster's attack1 animation.  
'a2' - this is the monster's attack2 animation.  
'dd' - this is the monster's corpse animation.  
'dt' - this is the monster's death animation.  
'gh' - this is the monster's gethit animation.  
'nu' - this is the monster's neutral animation.  
'wl' - this is the monster's walk animation  
's1' - this is the monster's special1 animation.  
's2' - this is the monster's special2 animation.

This is what you need to know about the .dcc filename structure for now. There is more to it, however, and I'll cover this at the end of the tutorial.

Now that you know what all those codes mean, it's time to take some notes. You'll write a simple list containing all of the animations framecounts. View the data\\global\\monsters\\si\\tr folder with Cv5; click on the first file, wich is sitrlita1hth.dcc. It has 128 frames (the animation's framecount can be seen in the information box below). Take note, and proceed to the next file. By the end you should have a list that looks like this:

A1 - 128  
A2 - 104  
DD - 8  
DT - 112  
GH - 48  
NU - 64  
WL - 72

Now grab the new animation files you will use to replace the old ones (I do NOT recommend the Dragon, start with something simpler, there are lots of choices in the animation plugins sections of the [Phrozen Keep](http://dynamic2.gamespy.com/~phrozenkeep/site/index.php) and [Incandescence](http://www.planetdiablo.com/incandescence/)).  
I'll explain the process for the attack1 animation, you'll basically do the same stuff with the other animations:

The idea is to make the framecount of the new animation match with the framecount of the older one. So, get the new attack 1 . If it is in dcc format, first you'll have to open it with Cv5 and save it as an animated gif file (use the lower right Save button, NOT the top left one). Check the animation's framecount (let's say it has 120 frames). Once you have the gif animation, open it with gamani gif movie gear. To make this animation have 128 frames, and thus match with the quill rat's original attack1 animation framecount, youll have to insert some frames. However, you should have some things in mind here: Diablo 2 monster's animations are composed of 8 directions (play the animation once, you'll quickly notice this). The thing is, ALL of the directions must have the SAME framecount. So, instead of copying and pasting 8 random frames at the end of the animation, You'll copy the last frame of EACH direction and paste it right next to the copied frame, got it?  
If you did things correctly, you should now have a 128-frame animation with 16 frames for each direction. Save the gif animation and close gamani.  
Finally, open the gif animation with Cv5. Now you'll save it as a dcc file (again with the lower right save button). The filename should be sitrlita1hth.dcc. Next a screen will appear, where you'll be able to select the animation's framecount for each direction, as well as set the animation's offsets and the palette to be used. Leave the offsets and palettes for now, just select 8 directions with 16 frames in the top box. Save (Cv5 saves slowly so don't think it has crashed or anything, just wait a little, it should save correctly).

There you have it, the new quill rat's attack1 animation!

You may want to repeat this process with the other animations (adding or removing frames from the animation where necessary to match the framecounts), and save them all to dcc.

Once you have all the finished dcc files with their correct names, just reinsert them to patch\_d2.mpq in the data\\global\\monsters\\si\\tr folder, or if you don't like to reinsert files, use the -direct -txt method using the same folder structure.

Then comes the time to test your changes. You enter the game and, assuming all goes well, the game won't crash heheh. However, when you encounter your converted monster in the game you may find that he is 'floating' on the screen, or doing weird stuff like moving up or down for no apparent reason. This happens because the animation's offsets need to be adjusted.

Basically the offsets are pairs of numbers (X,Y) that indicate where on the screen the animation will show up. The first number, X, indicates the animation displacement in the horizontal direction, and the Y coordinate indicates the displacement in the vertical direction. The concept is really easy, but there are three things to keep in mind when dealing with offsets:

1) Increasing the value of X will shift your animation to the right (and decreasing will shift it to the left);  
2) Increasing the value of Y will shift your animation down (and decreasing will shift it up);  
3) Each monster animation has 8 directions, and each direction has its own pair (X,Y) of offsets.

Ok so how to edit offsets?

Remember when you saved your dcc file, there was this screen where you could select the number of directions of the animation. This is where you will change the offsets as well. All you have to do is re-save your dcc file, when that screen shows up again, you will notice a section of that saving screen called Relative Screen Offsets. Since you are saving your animation with 8 directions, there will be 8 pairs of offsets available to edit. The big thing now is how to know what numbers to put in the offsets.

The best method to find the correct offsets for your animation is playing with a Paladin using the Conviction aura. Enter the game with your Paladin, and go find the monster you converted. When you find him, flying around with those horrible offsets, activate the Conviction aura. You will see the aura overlay (that green thing) appear exactly where the monster is supposed to be. So all you have to do is play this little game of 'put the monster over the aura overlay'. For example, if when the monster is facing the left direction he is located a little bit to the right of the aura overlay, that means you will have to increase the X offset of direction number 6 (the left direction). This can be a tiresome process, as you have to adjust all the monster's offsets, but don't give up, when you are done with the offsets your monster will be ready for battle!

Part 2: Replacing Multiple Part Monsters

Some monsters are composed of a single part, and others are composed of multiple parts. All the single part monsters have only the 'tr' (torso) part. So in the example I gave here before using the quill rat, he is a single part monster, so if you view any dcc that's in the data\\global\\monsters\\si\\tr folder, you will see the whole quill rat, with none of its parts missing.

The multiple part monsters, have their multiple part animations divided in several subdirectories. For example the zombie is a multiple part monster, you can check his animations in the data\\global\\monsters\\zm folder. The 'hd' subfolder contains its head animations, the 'lg' its leg animations, and so on. When you enter the game, the game puts all these parts together and you see the whole monster before your character.

The main question is how to work with multiple part monsters? Well, let's say you created new monster animations, and that your new monster is a single part monster. If you want to use it to replace another single part monster then you can use the method mentioned above.  
If you want to use your new single part monster to replace a multiple part monster, don't worry; you don't have to split your animations in several parts to match the old monster's parts (in fact that would be horrible, as you would have to adjust the offsets for every single animation, and that would take ages). Here's what you do: Use your new animation to replace the TORSO animations of the old monsters. Then, you'll have to make the other monster's parts become transparent, so that they don't appear in the game. This can be done by creating a 1x1 transparent (RGB 170,170,170, or AAAAAA) gif animation, matching the framecount of the body part you want to replace, converting it to dcc and using it to replace the bodypart.  
The 1x1 size is not necessary, but obviously preferrable for space saving reasons.  
In order to create 1x1 transparent animated gifs, just get any image editing software and create an image with 1 pixel width, 1 pixel height, and paint this pixel with the color RGB 170, 170, 170. Save this as a gif file. This will be the basic frame for your gif animation. Now:

\- If your imaging software already has support to animated gif editing, just duplicate this frame you just created as much as necessary, in order to match the framecount of the animation you are going to replace. Save it as an animated gif file.  
\- If your imaging software does not support animated gif editing, just open the gif you saved with Gamani Gif Movie Gear, you can create an animated gif there with as many frames as you want, duplicating your transparent 1x1 frame.

Part 3: About the .dcc Filename Structure

Considering many modmakers are now replacing not only monster animations, but character animations as well, it is good to know what some codes mean. The dcc files have a filename structure, as said before. The same structure is used by monsters and characters (and objects as well).

For example:

sitrlita1hth.dcc

\- first code is the monster/character token  
\- second code is for body part. These codes are easy to guess, like tr=torso, la=left arm, etc.  
\- third code is armor type. They are lit=Lite armor, med=Medium armor, hvy=Heavy armor.  
\- fourth code is monster/player mode Here's a list with all monster and player modes:

Player Modes:

Name / Token  
Death - DT  
Neutral - NU  
Walk - WL  
Run - RN  
Get Hit - GH  
Town Neutral - TN  
Town Walk - TW  
Attack1 - A1  
Attack2 - A2  
Block - BL  
Cast - SC  
Throw - TH  
Kick - KK  
Skill1 - S1  
Skill2 - S2  
Skill3 - S3  
Skill4 - S4  
Dead - DD  
Sequence - GH  
Knock back - GH

Monster Modes:

Name/ Token  
Death - DT  
Neutral - NU  
Walk - WL  
Get Hit - GH  
Attack1 - A1  
Attack2 - A2  
Block - BL  
Cast - SC  
Skill1 - S1  
Skill2 - S2  
Skill3 - S3  
Skill4 - S4  
Dead - DD  
Knockback - GH  
Sequence - xx  
Run - RN

\- fifth is the weapon/hit class. Here is a list of all codes you may find:

Hit Class / Code  
None  
Hand To Hand - hth  
One Hand Swing vs. Small - 1hss  
One Hand Swing vs. Large - 1hsl  
Two Hand Swing vs. Small - 2hss  
Two Hand Swing vs. Large - 2hsl  
One Hand Thrust - 1ht  
Two Hand Thrust - 2ht  
Club - club  
Staff - staf  
Bow - bow  
Crossbow - xbow  
Claw - claw  
Overlay - over

Weapon Class / Code  
None  
Hand To Hand - hth  
Bow - bow  
1 Hand Swing - 1hs  
1 Hand Thrust - 1ht  
Staff - stf  
2 Hand Swing - 2hs  
2 Hand Thrust - 2ht  
Crossbow - xbw  
Left Jab Right Swing - 1js  
Left Jab Right Thrust - 1jt  
Left Swing Right Swing - 1ss  
Left Swing Right Thrust - 1st  
One Hand-to-Hand - ht1  
Two Hand-to-Hand - ht2

You can get these lists in PlrMode.txt, MonMode.txt, ObjMode, HitClass.txt, and WeaponClass.txt.

There is still more to it though. Myhrginoc pointed it out:  
'To start with, many body parts (including torso) do use the lit/med/hvy armor classes (listed in ArmType.txt). Heads use the base helm codes from armor.txt. Hands do not use only armor codes however! They also use weapons codes from weapons.txt in the armor class slot, and there is also a 'shield body part' that has shield codes from armor.txt. This is one reason there are so many animations per class.
