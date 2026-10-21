---
title: Overview of Walkable Flags
summary: >-
  The list below contains information on walkable flags that I have gathered
  while making tests. The list shouldn´t be considered final, as there certainly
  are properties that I haven´t checked for,…
keepId: 443
author: Nefarius
credit: by Red Havoc
posted: '2006-12-27'
views: 7305
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=443'
---
The list below contains information on walkable flags that I have gathered while making tests. The list shouldn´t be considered final, as there certainly are properties that I haven´t checked for, but further tests will be made at some point. For now this table should serve as temporary reference for mapmakers and creators of .dt1 files for D2, the final version will be released as part of an extensive Dt1 Editing tutorial that I´m working on.  
If you find mistakes or if you can add something to it, please feel free to send me a PM in the [Phrozenkeep forums](http://phrozenkeep.it-point.com/forum/index.php).

> **Note:** the exact meaning of the properties in the _Effect_ column are explained below.

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| EFFECT | Floor Flag values in hex |     |     |     |     | EFFECT |
| **00** | **01** | **02** | **03** | **04** |
| allow player walk | yes | no  | yes | no  | yes | allow player walk |
| allow minion walk | yes | no  | yes | no  | yes | allow mercenary walk |
| allow monster walk | yes | no  | yes | no  | yes | allow monster walk |
| allow jumping over | yes | yes | yes | yes | no  | allow jumping over |
| allow teleport | yes | yes | yes | yes | yes | allow teleport |
| line of sight (players) | yes | yes | no  | no  | yes | line of sight (players) |
| line of sight (minions) | yes | yes | yes | yes | no  | line of sight (minions) |
| line of sight (monsters) | yes | yes | yes | yes | no  | line of sight (monsters) |
| transmit light radius | yes | yes | no  | no  | yes | transmit light radius |
| allow missiles pass | yes | yes | yes | yes | no  | allow missiles pass |
| drop corpses | yes | yes | yes | yes | yes | drop corpses |
| allow select corpses | yes | yes | yes | yes | yes | allow select corpses |
| allow action on corpses | yes | yes | yes | yes | yes | allow action on corpses |
| allow cast monster | yes | no  | yes | no  | no  | allow cast monster |

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| EFFECT | Floor Flag values in hex |     |     |     |     | EFFECT |
| **05** | **06** | **07** | **08** | **09** |
| allow player walk | no  | yes | no  | no  |     | allow player walk |
| allow minion walk | no  | yes | no  | yes | allow mercenary walk |
| allow monster walk | no  | yes | no  | yes | allow monster walk |
| allow jumping over | no  | no  | no  | yes | allow jumping over |
| allow teleport | yes | yes | yes | yes | allow teleport |
| line of sight (players) | yes | no  | no  | yes | line of sight (players) |
| line of sight (minions) | no  | no  | no  | yes | line of sight (minions) |
| line of sight (monsters) | no  | no  | no  | yes | line of sight (monsters) |
| transmit light radius | yes | no  | no  | yes | transmit light radius |
| allow missiles pass | no  | no  | no  | yes | allow missiles pass |
| drop corpses | yes | yes | yes | yes | drop corpses |
| allow select corpses | yes | yes | yes | yes | allow select corpses |
| allow action on corpses | yes | yes | yes | yes | allow action on corpses |
| allow cast monster | no  | no  | no  | yes | allow cast monster |

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| EFFECT | Floor Flag values in hex |     |     |     |     | EFFECT |
| **0A** | **0B** | **0C** | **0D** | **0E** |
| allow player walk | no  |     | no  |     | no  | allow player walk |
| allow minion walk | yes | yes | yes | allow mercenary walk |
| allow monster walk | yes | yes | yes | allow monster walk |
| allow jumping over | yes | no  | no  | allow jumping over |
| allow teleport | yes | yes | yes | allow teleport |
| line of sight (players) | no  | yes | no  | line of sight (players) |
| line of sight (minions) | yes | no  | no  | line of sight (minions) |
| line of sight (monsters) | yes | no  | no  | line of sight (monsters) |
| transmit light radius | no  | yes | no  | transmit light radius |
| allow missiles pass | yes | no  | no  | allow missiles pass |
| drop corpses | yes | yes | yes | drop corpses |
| allow select corpses | yes | yes | yes | allow select corpses |
| allow action on corpses | yes | yes | yes | allow action on corpses |
| allow cast monster | yes | no  | no  | allow cast monster |

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| EFFECT | Floor Flag values in hex |     |     |     |     | EFFECT |
| **0F** | **10** | **20** | **40** | **80** |
| allow player walk |     | yes | yes | yes | yes | allow player walk |
| allow minion walk | yes | yes | yes | yes | allow mercenary walk |
| allow monster walk | yes | yes | yes | yes | allow monster walk |
| allow jumping over | yes | yes | yes | yes | allow jumping over |
| allow teleport | yes | yes | yes | yes | allow teleport |
| line of sight (players) | yes | yes | yes | yes | line of sight (players) |
| line of sight (minions) | yes | yes | yes | yes | line of sight (minions) |
| line of sight (monsters) | yes | yes | yes | yes | line of sight (monsters) |
| transmit light radius | yes | no  | yes | yes | transmit light radius |
| allow missiles pass | yes | yes | yes | yes | allow missiles pass |
| drop corpses | yes | yes | yes | yes | drop corpses |
| allow select corpses | yes | yes | yes | yes | allow select corpses |
| allow action on corpses | yes | yes | yes | yes | allow action on corpses |
| allow cast monster | yes | yes | yes | yes | allow cast monster |

**Parameter explanations**

Here´s a more comprehensive list of how the parameters above should be understood:

|     |     |
| --- | :--- |
| _allow player walk_ | Can the player character walk over a tile with this flag? |
| _allow minion walk_ | Can the player´s minions (including hirelings, summons and revives) walk over a tile with this flag? |
| _allow monster walk_ | Can monsters walk over a tile with this flag? |
| _allow jumping over_ | Are barbarians allowed to jump over tiles with this flag using their jump skills? |
| _allow teleport_ | Are sorceresses allowed to teleport over a tile with these flags? |
| _line of sight (players)_ | Does a tile with this flag allow the player to see things (monsters, objects) behind it? |
| _line of sight (minions)_ | Does a tile with this flag allow the player´s minions (hirelings, summons, revives) to see things behind it? |
| _line of sight (monsters)_ | Does a tile with this flag allow monsters to see things behind it? |
| _transmit light radius_ | Does the player´s light radius spread over tiles with this flag? |
| _allow missiles pass_ | Does a tile with this flag allow missiles to fly through them? |
| _drop corpses_ | Can corpses be dropped on a tile with this flag? |
| _allow select corpses_ | Can corpses on the tile be selected? |
| _allow action on corpses_ | Can actions (skills) be performed on corpses laying on tiles with this flag? |
| _allow cast monster_ | Can a monster be casted or summoned on a tile with this flag? |

---

All rights reserved; created by Red Havoc
