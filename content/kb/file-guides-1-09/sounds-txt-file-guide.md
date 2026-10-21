---
title: Sounds.txt File Guide
summary: B. INDEX - ID number for the record. This ID is used in other txt files
keepId: 247
author: Phrozen Heart
credit: by Myhrginoc & Isolde
posted: '2003-12-02'
views: 6530
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=247'
---
A. HANDLE - descriptive column

B. INDEX - ID number for the record. This ID is used in other txt files

C. FILENAME - Rather self-explanatory. When you are substituting or adding sound files, use the directory format of the files you are mimicking (e.g for Act1 music it would be data\\global\\music\\act1.

D. VOLUME - Also self-explanatory. I think this is a one-byte field, nothing over 255 which is the loudest

E. GROUP SIZE - # when asked to play a sound in a group, it plays one of the sounds in the grou at random

F. LOOP - Boolean field, 1 repeats indefinitely and 0 plays through once

G/H. FADE IN, FADEOUT - Probably durations for changing volume to or from the specified loudness

I. DEFER INST - ?

J. STOP INST - ?

K. DURATION - # how long to play the sound for

L. COMPOUND - # controls overlap of same sound group on a unit where it'll not play a sound if the previous sound playing is within the compound duration

M. REVERB - 0|1 whether or not to add reverb effect to sound

N. FALLOFF - 0-4, controls how quickly the sound attenuates with distance (inverse)

O. CACHE - 0|1 mark sounds played frequently to cache

P. ASYNC ONLY - 0|1 mark unimportant sounds to skip playing if it can't load them in time

Q. PRIORITY - 0|1 controls what order to drop sounds if too many are playing at once

R. STREAM - 0|1 streams the sound while playing it instead of loading it all at once, used for music and such

S. STEREO - Boolean field, music is stereo, all others are not. I think I heard that people have used mono music files without ill effect, as long as the format is still 16 bits at 22,050 Hz

T. TRACKING - 0|1 sound moves with unit it's attached to

U. SOLO - 0|1 marks the sound as a soloist (quiets all other sounds while it's playing)

V. MUSIC VOL - 0|1 sound uses the setting for music volume

W. BLOCK 1 - # offsets into sound file for looping of music

X. BLOCK 2 - # offsets into sound file for looping of music

Y. BLOCK 3 - # offsets into sound file for looping of music
