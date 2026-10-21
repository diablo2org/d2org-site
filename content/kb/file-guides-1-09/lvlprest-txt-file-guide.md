---
title: Lvlprest.txt File Guide
summary: >-
  A Name: Internal Name of the Maps loaded thru this Line. B Def: Definition ID
  of the Tiles loaded for this Map. C LevelId: If this map is a Level by itself
  ratter then a component this cell contains…
keepId: 233
author: Phrozen Heart
credit: by Nefarius
posted: '2003-12-02'
views: 7255
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=233'
---
A Name: Internal Name of the Maps loaded thru this Line.  
B Def: Definition ID of the Tiles loaded for this Map.  
C LevelId: If this map is a Level by itself ratter then a component this cell contains the levels ID (from levels.txt)  
D Populate: Possible connected to the Ability of monsters to spawn in this map section. (1/0)  
E Logicals: Related to Buildings, like the Cottages in act 1 and the cow kings Bivouac. (1/0)  
F Outdoors: 0=Subterranean Level (or Buildings etc) 1=Wilderness etc. (May be related to the Day/Night light shift.)  
G Animate: Does this map contain animated tiles? (Lava) (1/0)  
H KillEdge: Related to special edges drawn for outdoors levels. (1/0)  
I FillBlanks: Maybe a setting blizzard added to fix the walk able lava tile bug in Act 4?  
It is disabled only for those areas. (Chaos Sanctuary and River of Flame) (1/0)  
J SizeX: Amount of Horizontal Cells. (Map Size)  
K SizeY: Amount of Vertical Cells. (Map Size)  
L AutoMap: Probably Has to do with areas automatically revealed on the Automap such as towns. (1/0)  
M Scan: Enable/Disable VIS tiles (1=enabled, 0=disabled) ('as far as I can tell, you need to set to 1 in order to make your Vis (warps) in a ds1 take effect. In other words, if you take a ds1 that didn't have Vis at all before, and then make at least one (yes, you can add warps to any ds1), set this to 1')  
N Pops: Is related to roofs that become transparent when you enter a specific map ('have something to do with the area where the roof and/or walls disapear when you enter them (aka houses). It's some kind of the # of areas that are delimited by 2 special tiles in the .ds1.')  
O PopPad: Related to the previous settings. (Not a Boolean)  
P Files: Total number of DS1 files loaded for this component.  
Q File1: DS1 Map File #1  
R File2: DS1 Map File #2  
S File3: DS1 Map File #3  
T File4: DS1 Map File #4  
U File5: DS1 Map File #5  
V File6: DS1 Map File #6  
W Dt1Mask: Setting for the Tiles Mask used for the DS1 files loaded thru the File1-6 entries, If you switch Maps you must adjust this cell!  
('Dt1mask is a bitfield value, size is 32 bits. If you take a line from lvltypes.txt (32 column files in there), the Dt1Mask tells exactly for this ds1 which files from this list to really use, and the ones to skip')  
X Beta: No function, just an internal comment fields. (1/0)  
Y Expansion: 1=Expansion Map, 0=Classic Diablo II Map. (1/0)
