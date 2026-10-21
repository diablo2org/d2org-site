---
title: String Tables and Enquettar
summary: >-
  What is a string? 'String' is a computer jargon which basically means a
  collection of 'characters'. A 'Character' is computer-speak for any symbols on
  the keyboard, and more. Hence, a sentence is a…
keepId: 217
author: Phrozen Heart
credit: by Rana Loreus
posted: '2003-12-02'
views: 7989
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=217'
---
What is a string?  
'String' is a computer jargon which basically means a collection of 'characters'. A 'Character' is computer-speak for any symbols on the keyboard, and more. Hence, a sentence is a string for it is a collection of alphabets.

When you modify any strings in any of .txt files, you are heading towards trouble. (Some examples of such strings include items' names, suffixes' names and so on). For your changes to take effect without crashing the game, you will also need to modify the string.tbl file as well.

What's in the string.tbl file?  
Imagine a gigantic table divided into 2 columns. The first column holds a 'code', and the second column holds a string. For example:

|     |     |
| --- | --- |
| Code | String |
| skp | Skull Cap |
| xkp | Sallet |
| The Stone of Jordan | The Stone of Jordan |

The 'code' column is known as the 'key', and each key represents a full text string. Hence, the key 'skp' represents 'Skull Cap' and the key 'The Stone of Jordan' represents the text string 'The Stone of Jordan'.

Basically, the string.tbl file holds such a big table -- it includes every strings used in the game and their respective keys. The keys are used in various 'names' columns of the .txt files that you have extracted. If you change the value of a key, you will change the string that will appear in the game.

Confused? Here's an example. From the table, we know that the 'skp' key represents the string 'Skull Cap'. If we change 'Skull Cap' to 'Gold Cap', and if there is an armour with the name 'skp', it will become a Gold Cap. Likewise, if we change 'The Stone of Jordan' key to 'The Stone of Loreus', wherever 'The Stone of Jordan' appears in UniqueItems.txt, the game will display 'The Stone of Loreus'.

Hint:For those who does programming, imagine this whole table to be one big array. The keys are just like variables, each keys can store a string. If you want to display a string, you just put in the key, and the string stored inside it will appear in the game.

How do change string.tbl  
It's all right if you don't understand the concept of keys and strings, just as long you get what you want...

To change string.tbl, you will need a program called Enquettar. However, this program is written in Perl, so you will need a Perl interperter to get it working. I recommend the [Indigo Perl](http://www.indigostar.com/indigoperl.htm), and it's worth the hefty 7 megabytes download.

The doucmentation for using Enquettar can be gotten at the website, so this is just an add-on to it. For every new string you want to be in the game, you need to provide a key for it. Any key will do, but take care that it is not already use. For names of items, suffixes and prefixes, the key and the actual text must be the same. You will know more about this in the specific tutorials

How do \_really\_ use Enquettar  

Using Enquettar may be frustrating because it is a command-line program and you will need Perl to operate it. Here are some guidelines and tips to help you:

-   Make sure Perl is working. Go to DOS, type 'Perl' and hit . If all you get is 'Bad Command or File Name' then Perl is not installed correctly. Check your Perl doucmentation.
-   Enquettar requires two components to work its magic -- a string.tbl file and a text file containing all the changes/additions to the string.tbl.
-   The command line execution for Enquettar goes as:

    perl Enquettar.pl string.tbl StringChanges.txt > new.tbl

-   In the above example, new.tbl is the modified string.tbl with all your changes and additions. Add it as string.tbl into your patch\_d2.mpq.

Where StringChanges.txt is the text file containing all the changes and additions.

-   To change a keycode or item code, use the c command. It goes as

    c \[keycode\] \['string'\] \[new keycode\] \['string'\].

-   The Most Common Form of Changes That You Will Make:

    To change a string that a keycode represents:  
    c 'skp' '' 'skp' 'Baseball Cap' - _The itemcode 'skp' now displays 'Baseball Cap'_

-   Adding new strings is done with the a command, and it goes like this:

    a \[new keycode\] \[new string\]

-   The Most Common Form of Addition That You Will Make:

    Adding a unqiue item  
    a 'The Sword of Friendship' 'The Sword of Friendship'

    Adding a new base item  
    a 'eem' 'Eternal Mail'

    Adding a new suffix/prefix  
    a 'of Myths' 'of Myths'

-   Play-test your strings. Test them with a passion. Strings are often the main villians which cause your MOD to bomb out with an assertion error.
-   IMPORTANT: Spacing counts in strings.tbl! Leading or trailing spaces (spaces before or after the string) does counts. Make sure your strings match!
