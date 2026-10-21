---
title: Changing Monster Base Colors (by Acromatic Aria)
summary: >-
  This tutorial will instruct you on how to set a monster’s default color using
  just the text files. For this example, I’m going to turn a maggot baby gold.
keepId: 3
author: Phrozen Heart
posted: '2004-08-19'
modified: '2018-01-06'
views: 10632
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=3'
---
To do this you will need the following files:

states.txt  
monprop.txt  
monstats.txt

First, let’s create our color. Open states.txt and scroll down to the row titled “revive”. It will have id 96. Copy that row and paste it at the bottom. Change its ID number to the next number in your list. Give a name for your new state such as goldcolored. Scroll over to the column titled “colorpri.” We will need to use this column and the next four to get our new color. Colorpri sets a priority for this state’s color. This means if this state and another state that involves a color change are inflicted on a single creature at the same time, the one with the higher colorpri value takes precedence. For example, the poison state has a higher colorpri than your new state presently has (unless you’ve already changed it), so if your creature is poisoned, the green color will take precedence. If you want your new monster color to function normally, leave this value alone.

To get the actual color, you need to place a numerical value in the “colorshift” column (next one over). The “golden” color I’m using in this example is 102. I believe there’s still a link featuring the full list of colorshift values (does anyone have the URL?)

The next three columns control the intensity of red, green, and, blue for your color. Lowering their value tends to make your color a little more dull. You can lower these values if you like or simply leave them as they are (mine are still set to 255).

Because we copied the “revive” state, we need to make a couple of other small changes. If a monster uses your new state to change its normal color, you won’t be able to select the monster’s corpse for any skills after killing it. To solve this problem, scroll over to the “setfunc” column and remove the value for the new state. Then scroll left to the “udead” column and remove the value there. Now save states.txt

Open monprop.txt and make a new entry at the bottom. Give it a name like goldmaggotbaby. In the “prop1” column for this row, enter state. This means that the monster that uses this entry will be automatically in a defined “state” from states.txt. Next place the number of your new color state in the par1 column. Place a 1 in the following two columns. Scroll over to the “prop 1 (N)” column and place the same things as before in the next few columns (starting with the word “state”). Do the same thing starting with the “prop 1 (H)” column. Now save monprop.txt.

Open monstats.txt. Scroll down to the entry for maggotbaby1. For this entry, enter the name of the new monster property (goldmaggotbaby) in the “MonProp” column (8th column over). Save monstats.txt.

I’ve told you how to change the default color of an existing monster, but you can easily extend this to newly created monsters (useful if you like creating evil hirelings or boss clones and want to give them different colors without messing with animation or palette files)
