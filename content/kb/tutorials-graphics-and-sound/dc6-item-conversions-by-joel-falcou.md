---
title: DC6 Item Conversions (by Joel Falcou)
summary: Indepth tutorial on creating a new DC6 inventory image.
keepId: 155
author: Phrozen Heart
posted: '2007-05-04'
views: 13315
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=155'
---
**Getting Started ...**

While moding your favorite Diablo II version, you'll surely feel the urge to give it a brand new look. If the simplest way is to change the various screen background, one of the most appealing temptation is to modify the old look of our beloved items.

First we gonna talk about the required tools. Basically you need an image editing application that can handle the most common format like BMP, JPG and obligatory PCX format. MS Paint could be enough but you could grab a free trial version of the allmighty Paint Shop Pro at [the JASC website.](http://www.jasc.com)

Then you'll need the modified version of DC6CON by Paul Siramy, that you could grab directly at [The Phrozenkeep File Center](http://files.d2mods.com).  
It's a MS-DOS based program that should work on every machines.

When you get ready, hang on to the next Section : Mastering the Tools.

[Return to Top](#up)**

---

Mastering the Tools**

Now you have all the forementioned tools, we gonna take a look at the functions we'll need to know.

> **Paint Shop Pro :**
>
> These are the following functions you'll use often. Some advanced users may use others, and I encourage them to send me their tricks. I don't mind to be omnipotent with this one ;)
>
> -   Load/Save : Obvious isn't it but you get to know how to change  
>     the output file format by using the combo box of the [Save As](https://d2mods.info/filecenter/content/tutimages/dc6/save.jpg) function.  
>     Shortcut : Ctrl+O/F12
>
> -   Resize : This function will help you to get your image into [the proper size](https://d2mods.info/filecenter/content/tutimages/dc6/size.jpg). There are many options in this function that we'll see later.  
>     Shortcut : Shift + S
>
> -   Load Palette : The bread 'n butter of us. With this one, you'll easily [apply the correct palette](https://d2mods.info/filecenter/content/tutimages/dc6/loadpal.jpg) to your image. Like the Resize function, the Load Palette function is a bit complex and will be described later.  
>     Shortcut : Shift + O
>
>
> **Modified DC6CON :**
>
> The easy one :) Paul has done a good job on this one. Without getting into the details, [there is a little bat file](http://dynamic6.gamespy.com/~phrozenkeep/files/tutorialfiles.zip) that will simplify your life. Download it, I'll use it from now.

[Return to Top](#up)**

---

Finding Originals**  

It's often the trickiest part :).

Personnaly I use my friend Google to find out some pictures or artwork that look like the items I want to convert. The Medeival - Fantasy - Weapons - Armor keywords in the images seeking sections could do miracles.

However, the major sources of new items are the other RPG. Without any order, the inventory images from Darkstone, Diablo/Hellfire, Prince of Qin, Nox, Throne of Darkness, the Baldur's Gate series and alike and many more is perfectly suitable. Don't hesitate to crawl over fan sites, strategy pages and the like.

[Return to Top](#up)**

---

The Conversion Process**  

Here we'll cover the step-by-step process of converting an item gfx to dc6 format. For this one I'll use an original item from Planescape Torment : the Godless Priestess Cleavage. [Download the needed files](http://dynamic6.gamespy.com/~phrozenkeep/files/tutorialfiles.zip) and let's start !!

![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/original.jpg)

**First Step : Correcting colors**

Open the original BMP file with Paint Shop Pro.

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep10.jpg)](https://d2mods.info/filecenter/content/tutimages/dc6/step10.jpg)  
Click to enlarge.  

As you see the background is a bit green and some shadows don't look good. Use the Magic Wand to remove the green background and the obsolete shadows. You're Cleavage should now look like this :

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep11.jpg)](https://d2mods.info/filecenter/content/tutimages/dc6/step11.jpg)  
Click to enlarge.  

Now the Cleavage looks fine, open the custom palette that comes with this tutorial package. Select the custom.pal file, and check that the palette is applied by using the 'Nearest color matching'.

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep12.jpg)  
](https://d2mods.info/filecenter/content/tutimages/dc6/step12.jpg)Click to enlarge.

When you have selected the palette, click on the color box on the right of the screen. This will open the palette screen where you'll select the index 0 color. With the custom palette, it looks bright blue. It's intentional. The actual tin' of this color isn't important. The game use the Palette Index to generate transparency so if you want to have a purple or green background, it's up to you BUT its index MUST BE 0.

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep13.jpg)  
](https://d2mods.info/filecenter/content/tutimages/dc6/step13.jpg)Click to enlarge

Select the Flood fill tools and fill all the background with your new color. When the background is a bit tricky to access (fur items, hairs etc ...), use the Color Replacer to replace all the old background color with the new one. Your item should now look ike this.

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep14.jpg)](https://d2mods.info/filecenter/content/tutimages/dc6/step14.jpg)  
Click to enlarge

Now you get the proper colors on your items, hope to the next step ...

**Second Step : Size does matter**

All inventory graphics in Diablo II follow a strict pattern. Both width and height are aligned on a 28 pixels limit. If you look closely to your inventory screen in-game, you'll see that it's composed of a bunch of little square. Each of this square is precisely 28x28 pixels. So any items must be composed of an entire number of such square.

Now, look at your cleavage item. Its size is 34x63. So if you look at a regular Diablo II armor, its size is 56x84. Yes, you guess it, it's 2x3 squares. So, as our cleavage fits in these limits, you'll just merge it with a blank image. If the item was bigger than 56x84, you should use the Resize function in 'Pixel Reduce' mode. If you use bilinear or bicubic resample, you'll create blurry pixels that will not fit right with the palette.

With Paint Shop Pro, create a new image (Ctrl+N). Make it 56 pixels wide and 84 pixels high. Turn it on 256 colors and click OK. You should get now two image : the blank one and the cleavage one.

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep20.jpg)](https://d2mods.info/filecenter/content/tutimages/dc6/step20.jpg)  
Click to enlarge

Click in the blank image and load the custom palette (Shift+O). This ensure that you won't get color distorsions while copying the cleavage to its new container.  
Press Ctrl+A to select the whole Cleavage image and then copy it to the clipboard (Ctrl+C). Click in the blank image and paste the cleavage with Ctrl+E.  
Adjust the Cleavage position into the image and press Ctrl+D when you're satisfied of the result.

##### [![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/ministep21.jpg)](https://d2mods.info/filecenter/content/tutimages/dc6/step21.jpg)  
Click to enlarge

Now, we've finished with Paint Shop Pro. For safety needs, re-apply the custom palette. PSP could sometime forget to do it and save it into PCX format with the Save As ... command. Close all the images and close PSP.

**Third Step : DC6 forever**

The trickiets part is done now. Copy your pcx into your DC6CON folder. Drag the file over my dc6item.bat and let dc6con do all the work. If everything is right, you should get a little dc6 file along in this folder. Rename it to invclvg.dc6.

Copy it into your datagloba/items folder. Open armor.txt and go to the Quilted Armor row. In the invfile row, change invqlt to invclvg. Save the file and close your text edition application. Launch Diablo II using the -direct -txt method, run a game and go buy a Quilted Armor. Normally you could now equip your sexy Priestess cleavage ;)

![](/kb/img/d2mods.info/filecenter/content/tutimages/dc6/step3.jpg)

[Return to Top](#up)

---

**Tips**

**Reallife photographs conversion**

When using a reallife photograph to create a new item image, some tricks have to be known. First don't try to cut out the items off its background. Instead resize the image right now and apply the custom palette. Then cut-off the item and correct pixels errors. When resizing, use the Bicubic resample options and check if every pixels stay fine.

[Return to Top](#up)

---

**Conclusion**

Here we are. Now the Items Gfx Conversions should be easy for anyone of you. If you got some tips or if you find some errors, feel free to send report to me.
