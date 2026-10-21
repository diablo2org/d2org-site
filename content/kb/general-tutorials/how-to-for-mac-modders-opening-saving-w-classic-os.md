---
title: HOW-TO for Mac modders (opening/saving w/Classic OS)
summary: >-
  Preparing modifications for Diablo II LOD Prepared and edited by Sir Xavius in
  grateful deference to Souricette
keepId: 442
author: Nefarius
credit: by Sir Xavius
posted: '2006-12-07'
views: 6684
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=442'
---
Preparing modifications for Diablo II LOD  
Prepared and edited by Sir Xavius in grateful deference to Souricette

While MPQ Tool is a great (and really the only) resource for Mac users to alter how Diablo II Lord of Destruction (D2LOD) is played, it requires very precise preparation. PC users have at their disposal a few tools to help with this prep work, but Mac users must fashion the modifications the hard way. The first thing is knowing what apps you need:

\>> MPQ Tool by Souricette, the latest version as of this writing is 1.0a11 (affectionately called ‘11’)  
\>> Microsoft EXCEL, for our examples, we’ll be using EXCEL 98  
\>> Mac OS 8.6 – 9.2.2 (OSX users should work in Classic mode)

Keep in mind, if you want your modifications to work (assuming you understand the correct syntax of the .txt files), FOLLOW THESE INSTRUCTIONS PRECISELY. If you have different options along the way, the instructions will let you know.

Basic Setup

A few things to remember:  
1\. Never open a D2LOD-generated or MPQTool-generated .txt file from the Finder. Open EXCEL first, then choose Open from the File menu. You’ll see why later!  
2\. Do not work with the originals of your Diablo II application or the Diablo II Patch. Store them away in a safe and separate folder where you can’t accidentally select them.  
3\. Don’t do too much all at once. If you modify a little at a time, you can more easily narrow down potential mistakes. Once you learn these instructions very well, but D2LOD crashes after you modify the Patch, you can pretty much figure out what you did wrong. If you follow the protocol and you check your modded files carefully for errors, but Diablo II still crashes or is not working right, then chances are that you made a change that you did not know you couldn’t do. Check the Phrozen Keep forums, do some keyword searches and see if you can find your help there.

Getting Started for the first time

Before you do any modding, you have to get the files you’ll need from Diablo II Patch (and in some cases from the Game Data or Expansion Data archives). Create a folder outside of the Diablo II folder (perhaps in your MPQ Tool folder) where you can store the files you’ll be modifying.  
Make a folder for your personal modifications (in our example we’ll call our folder D2Changes). We want to extract the .txt files into this folder. Open MPQTool and choose Open in the File menu. When the Open File Dialog comes up, select the Diablo II Patch from within the Diablo II hierarchy.  
AGAIN, make sure you have a duplicate of the original Diablo II Patch stored somewhere else safely. If you corrupt your only copy, you will have to reload the entire D2LOD from 3 or 4 CDs! (Remember how long that took?)  
Diablo II Patch is an .mpq archive of files that is unique to Blizzard games. The Mac version of Diablo II is designed to read this PC-formatted file, and MPQ Tool creates the proper format for this file to be read by Diablo II for the Mac. It also extracts the files so they can be modified.  
The 11 version of MPQ Tool has two menu items in the File menu: Extract and Extract from data folder. For .txt files you can use the former, or you can create the data/global/excel folder hierarchy somewhere and use the second version. But for now we want to grab all the .txt files from the Patch.  
At the bottom of the window are the view filters for the archive. Click on the  All checkbox to make the other filters available. Now click on all the checkboxes except for .txt. You should see only .txt files in the list. Press Cmd-A to select all of the displayed files.  
Now you can drag-and-drop this highlighted list to the D2Changes folder in the Finder, or select Extract from the File menu (and choose the D2Changes folder from there). MPQ Tool knows that these are tab-delimited files and automatically assigns them EXCEL's creator code. If you have EXCEL on your hard drive, the icons of these files will change, showing that they belong to EXCEL.

HOWEVER, DON’T OPEN ANY OF THESE FILES FROM THE FINDER!!

Using EXCEL for Mac modding

Open EXCEL 98 (hopefully newer versions work the same way) and make sure there are certain options selected. Open the Preferences menu item (under Tools), and make sure these options are correctly set:  
Under the View tab,  Zero values should be checked, so that fields that contain only a zero value will still be displayed.  
Under the Calculation tab, make sure  Manual Calculation is ON, but  Calculate before Save is OFF — THIS IS VERY IMPORTANT! Many fields start with math operators that cause EXCEL to think it’s a formula, which it isn’t. Selecting these will prevent EXCEL from automatically resolving formulas while working or before saving.

These are the two important ones, but you can select others that will make it easier for you to use this application.  
You will find it easier when you’re making modifications to the .txt files to have two versions, one without formatting that MPQTool needs, and one that’s formatted for you so you can both navigate the fields easier and more definitively show your changes. We will show how to set up everything to make these goals possible.  
First, select Open under the File menu, and choose a file you might wish to modify. Most modders wish to make changes to the skills first, so for this example, we’ll open skills.txt.

Importing .txt files properly

The Text Import wizard screen will be shown after you open the unmodified .txt file from within EXCEL (this screen does NOT appear when you double-click on the file from Finder). You should learn this opening ritual, because you have to do this EVERY TIME you open a raw .txt file for Diablo II modding, which is another reason you should keep a personally-formatted version of the file (which we’ll do later).

When the first page opens , click on Next.

In the second page, make sure that quotes (the default) are selected as the text qualifier. AGAIN, THIS IS VERY IMPORTANT! This tells EXCEL to strip any quotation marks in the fields that have them, but remember them as text fields. (See the Editor’s Note at the end for clarification.) This is another reason why you should not open previously modified unformatted .txt files. We’ll learn later how to get around this.  
Click Next to go to the third step.

Now in Step 3 you have to select every field in the preview by dragging the scrollbutton all the way to the right so that the last column (cost add) shows in the preview.  
Select the last column by pressing SHIFT while clicking on the column header as shown — this will select all of the columns.

Now press the  Text radio button. This will make sure that EXCEL knows that all of the selected columns are text fields, and not numeric fields (which causes formulas to be evaluated). This step is also paramount.

Click Finish and the .txt file will be opened properly. At this point the data is unformatted and raw. If you did everything correctly, you will not see any quotation marks, or fields that say “#NAME?” or “#VALUE?”.

Formatting for use

Now, you can format the page so that you can see all the necessary data more easily, which you should do before you make any changes. You can change the font, the color scheme, column widths, anything EXCEPT the actual data. Here are some tips to help you with this and any .txt file.  
\=> Narrow the columns to try to fit as much data on the screen as possible. If you select the  Formula Bar option in Preferences (in the View tab), you can view the entire contents of a singly-selected field, even if you can’t see all the data on the main page. This makes it easier when you narrow columns down so all you see is the first several characters.  
\=> Keep the column and row headers always visible by dragging the pane dividers (at the top and right of their respective scrollbars) just after the first row or column, and selecting Freeze Panes in the Window menu.  
\=> Distinguish blocks of rows with different line designs, and blocks of column data with highlight colors. For example, in my formatted skills.txt page, the row that ends the Amazon skills (and begins the Sorceress skills) I have separated with a double line, and (for columns that apply to different data themes) the columns that deal with aura data are pale orange, the summoning data is gray, and the passive data is pale blue. This helps so much to easily see where the pertinent and related data is located when searching or navigating.  
\=> Columns that hold Boolean information (1 = TRUE, 0 = FALSE), I put into a different font color, like red, so I can easily see that the data should only be 1 or 0 (when nothing is in a field it’s usually assumed by the Diablo II application to be 0).  
\=> It’s possible to change the labels in the first row (the one with the names of the columns), but I generally keep the original names in case I read a tutorial later and they refer to the original column names. Then i’m not lost.  
As long as you don’t modify any of the actual data in the fields, any formatting changes will not affect the .txt file that MPQ Tool needs (assuming you save it correctly!).

After you’ve done your preliminary formatting, it’s best to save a copy of the original but formatted .txt page within this file on another sheet. CONTROL-click on the page tab at the bottom of the window (it should have the name of the file — in this example, skills.txt). Select Move or Copy from the popup menu. Make sure that the  Create a copy checkbox is marked, then click OK. A new page should appear with its own tab. Rename either one to something like “Skills.txt original” and the other to “Skills.txt altered”; one of these holds the unmodified data that you will undoubtedly need when you screw up the file or when you want to start from scratch. You can choose Protection under the Tools menu to guard the sheet from having any accidental changes made to it.  
The other page is where you will make any changes you wish. Phrozenkeep has file guides for many of the .txt files you’ll want to tinker with, so visit their File Guides page to give you any idea of what everything means and what the game expects when reading certain fields. To do particular things, search the forums to see if your goal has already been addressed, and if it hasn’t, start a new thread with your question in mind.  
It’s a good idea when you make a data change to a field that you highlight it with an unusual color such vivid yellow as a visual marker. This will help later to track down problems that develop. (It’s also a good idea to highlight the row or column header with that color to help narrow the search for the changes.)

Saving .txt files properly

We can make inserting the modified files of any kind (.txt, .dc6, .ds1s etc.) easier by setting up the correct folder hierarchy, where we can take advantage of MPQ Tool’s Insert from data command when we’re ready to alter the Patch itself.  
Begin by creating the hierarchy data/global/excel (an excel folder in a global folder ina data folder). Every .txt file goes into the excel folder. It’s a good idea to keep what you’re going to insert separate from what you’re going to modify (but don’t put either into the Diablo II folder to avoid complications). Myself, I keep a folder within my MPQ Tool folder called INSERT THESE which holds all the .txt files ready to go, so I can easily see what goes where.  
After making any changes to your formatted file, but BEFORE saving as a .txt file for MPQ Tool, save these two pages together as a formatted EXCEL file but NAMED DIFFERENTLY. I will name it something close like skills.txt#, so that both formats will appear together in their list. By keeping a formatted EXCEL version of the .txt file, you don’t have to go thru the same ritual every time of properly importing the raw data. Save this file in the same directory where your extracted file is located. (You don’t HAVE to save the extracted raw file, but keeping an original version might save time later in case of an accidental deletion.)  
For a .txt file that MPQ Tool can use, choose Save As... from the File menu, and save the file as Text (Windows) — THIS IS THE MOST IMPORTANT OF ALL!! This makes EXCEL end each line with a PC version end-of-line sequence (an ASCII carriage return plus line feed $0D0A). If you store a copy next to your EXCEL version, make sure you use the correct .txt name, NOT the name of your EXCEL file, or you’ll wipe out all your formatting changes. Otherwise you can save the file in your data/global/excel hierarchy that you set up already.

You should now have two files — a plain raw .txt file for MPQTool to insert, and your EXCEL file that has the same data as the raw .txt file but with your formatting. Now whenever you want to change the .txt file, open the EXCEL version (not the raw version), make changes, save the EXCEL format first, then save&replace the Windows Text version second (making sure you name each correctly or else in different locations so as not to wipe out anything).

Modifying other files

Unfortunately, under Classic OS up to 9.2.2, there are no other tools for the Mac to edit graphics or maps (newer versions of OS X can open and use Windows applications). There is a cheaper alternative than going out to buy a used PC. If you can find a copy of Virtual PC, you’ll be able to use most of the tools available to PC users. Check a used Mac software dealer or search the Internet (eBay is where i got mine for less than $15).  
Using .dc6 editors and .ds1/.dt1 editors you can change the game’s graphics and map layouts, then put these in their correct hierarchy and use the Insert from data menu item in MPQTool.

Editor’s Note on Importing .txt files into EXCEL

I have undertaken much experimentation in determining the proper and routine method of both the importation of Diablo II’s spreadsheets (the .txt files) as well as their saving. After importing under different procedures (text qualifiers, use of quotes in columns, etc.) and saving under different formats, i checked the resulting saved files with ResEdit (plus the Forker extension) and came to the following conclusions:  
\>> The .txt file to be inserted with MPQ Tool that Diablo II is expecting MUST be tab-delimited raw text. The end of each data row ends in the traditional PC format — end-of-line + line feed ($0D0A).  
\>> Any fields with unexpected data will either crash Diablo II or unleash unpredictable results within the game — especially if each line in a .txt file does not end with $0D0A.  
\>> When EXCEL opens unformatted raw ASCII, it uses the Text Import wizard to prompt the user on how to display the data. THIS TEXT IMPORT SCREEN IS BYPASSED WHEN THE FILE IS OPENED FROM FINDER, AND THE RESULTING DATA IS ALMOST ALWAYS INCORRECTLY IMPORTED.  
\>> The ASCII data, when imported with the quotes qualifier ( ' ), is prepared so that any data cells bounded by quotes are stripped of ONE SET of their quotes — but only in display. What is done with them when they’re actually imported depends on other factors. If {none} is chosen as the text qualifier, all cells with quotes will display all the quotes.  
\>> When determining how EXCEL should interpret cells, classifying everything as General data will cause EXCEL to determine automatically for each field how data should be formatted. All fields that have ONLY numeric data are treated as numbers. All fields that seem to have an equation OR BEGIN WITH A MATH OPERATOR (such as a minus sign) will be determined to be a formula, and will be (at least be attempted to be) resolved upon importation. All other fields are formatted as text. Choosing Text as the data format forces EXCEL to consider all fields as text even if they have numbers or apparent formulas.  
\>> When EXCEL saves a tab delimited .txt file, quotes are added to enclose all fields that have a comma in them.  
\>> Saving a sheet as a Tab-delimited Text file does NOT add the end-of-line sequence that Diablo II is expecting. After many hours of frustration, i found that only saving the file as a Windows Text file adds the $0D0A marker.
