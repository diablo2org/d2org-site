---
title: DC6 Files
summary: >-
  Many people have asked me(and other people) how to add items in Diablo 2. In
  this tutorial I won't explain how to add new items,just new graphics for the
  items.
keepId: 179
author: Phrozen Heart
credit: by Digibo
posted: '2003-12-02'
views: 8436
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=179'
---
Many people have asked me(and other people) how to add items in Diablo 2.  
In this tutorial I won't explain how to add new items,just new graphics for the items.

1.Tools  
For my graphics I make .pcx files and convert them in .dc6. At http://www.d2mods.com  
you can find Diablo 1 graphics in .pcx format.I used some of the in my mod because they  
are very easy to convert and look great.You can start from there then try making your own  
graphics.To convert the .pcx in .dc6 you need DC6CON,you can find it at http://www.d2mods.com.  
For editing the .pcx files(you will need to edit them even if they are the complete D1 graphics) I use  
Paint Shop Pro 7.You can use any other program able to edit .pcx files.The last thing you need is the palette.  
On my page you will find the palette I use for Paint Shop Pro 7.If you have other version of PSP or you use  
another program you can make your own palette - just follow the tutorial at http://www.d2mods.com

2.Prepaering the picture  
I repeat - I use PSP to edit the pics and I can't help you with other programs.  
First open the picture and apply the palette(you may need switching to 256 colors).If you are making  
your own pictures first apply the palette then start making the pic.Now make color 0 transparent  
(color 0 - Pure Black R-G-B 0-0-0).If there are parts of the background which don't become transparent just  
choose Pure Black and correct them.It is possible that some black parts of the picture to become transparent.  
Make them a color near the black but not Pure Black.When changing the palette some parts of the picture may become  
strange so you will need to fix them.After everything is ready save the picture.

3.Converting  
Now use DC6CON to convert the picture.Use 'dc6con \[filename\] -transcol 0'.You will have the dc6 now.  
You may want to make the dc6 back to pcx to check is everything ok.If the new pcx looks ok the dc6 is ready.

4.Finishing  
Rename the dc6 to inv\*\*\*.dc6(where \*\*\* is what you want).I think that D2 won't be able to read the graphic if  
there are more than 3 characters after 'inv'.Now use mpq2k to put the file in your patch\_d2.mpq  
Find a good tutorial about weapons.txt or armor.txt and make a new item with the new graphic.
