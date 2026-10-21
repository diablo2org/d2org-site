---
title: NPC.txt
summary: >-
  NPC.TXT File Guide By Nefarius (in part based on Phrozen Heart & Mordini's
  guide)
keepId: 387
author: Nefarius
credit: 'by Nefarius (ex Mordini and Phrozen Heart), restyled by HarvestWombs'
posted: '2006-06-05'
modified: '2018-10-25'
views: 12920
originalUrl: 'https://d2mods.info/forum/kb/viewarticle?a=387'
---
**_NPC.TXT File Guide_**  
By Nefarius (in part based on Phrozen Heart & Mordini's guide)

The old guide is not very accurate when it comes to how the various columns interact, I hope this one will clear the shroud.

**npc:** an ID pointer to that NPCs row in monstats.txt, do not change this name, otherwise you will recieve an assertion error as soon as you open that vendors inventory.

**buy mult:** percentage of the items base price to use when it is bought by the NPC.  
This does not refer to the prices listed in armor, weapons or misc, it refers to the actual base price, that is, after all stat related boosts have been applied.  
This column holds a fraction of 1024, thus 512/1024 would be equal to 50%, lets say we have Cleglaw's Tooth, its actual price is 4027 gold.  
If we set this column to 1024 that is what we will recieve for selling it to an NPC, if we set this column to 512 we will recieve floor(price/1024\*value) aka 2013 gold.

**sell mult:** this follows the same principle as the above, however this controls the price when you buy something from an NPC.

**rep mult:** this column controls the base price used as the basis of the item repair calculation, it follows the same principle as the two other columns above.  
But this does not control the actual repair price. How does the game do it then?  
First of all the base repair price is established using the same formula as for the other columns, namely floor(price/1024\*value)  
Now lets take Cleglaw's Tooth again for our example, if you set this column to 1024 then a full repair (when the item has 0 durability left), will cost 4027 gold, the full price of the item.  
Should it have 22/44 durability, you rather pay 2013 gold. Thus the whole repair calculation is basically: cost\*(1-current\_dur/maximum\_dur).  
The recharge cost is added on top of the durability repair calculation.  
Note that the recharge cost is not controlled by this field, the parameters for this calc are spread throughout the games code and skills.txt.

**questflag A**, **B** and **C:** this controls the quest flag that must be checked in order for the following price alterations to take place.

**questbuymult A**, **B** and **C:** this controls the percentage the percentage indicated in the **buy mult** column is modified.  
Lets say buy mult contains 512, if we put 1024 in **questbuymult A** the item will \_not\_ be sold at any different price, since we tell the game to use 100% of 50%, which quite clearly is 50%.  
Thus the Cleglaw's Tooth will be bought for 2013 gold, irregardless of the quest, but what if we set this column to 2048?  
Well, then we will recieve 4027 gold when we sell it to the npc, since we are telling the game to use 200% of 50%, which is 100%.  
Finally, if we set this column to 512 then we will recieve an item that costs 1006 gold, since we are now using 50% of 50%, which is 25%.  
The subsequent columns, **questbuymult B** and **questbuymult C** stack with this one, they do not replace it. So, to clear up the mess I just wrote:

base price = GLD  
buy mult = BM

questbuymult = QBM1  
questbuymult = QBM2  
questbuymult = QBM3

floor( GLD / 1024 \* BM / 1024 \* QGM1 / 1024 \* QGM2 / 1024 \* QMG3 ) = actual price

So if we again use the example item from above, GLD=4027. Lets say BM=512 and QBM1-3 are all 2048, then we get: 16108 gold.

**questsellmult A**, **B** and **C:** the same as the above, only that this applies when you buy something from an NPC.

**questrepmult A**, **B** and **C:** again as the above, however this controls the alteration of the base repair price.

**max buy**, **(N)** and **(H):** the maximum amount of gold this NPC will ever pay you for an item you sell on the respective difficulty, the maximum is 2147483647.

_Other facts_

NPCs will never use values below 1 gold, thus an item that is worth 0 gold will still be bought for 1 gold and sold for 1 gold.  
This does not apply to gambling, where prices above the maximum result in free gambles.  
Prices above 2147483647 either as result of stats, base price in a file or the NPC calculation itself will be treated as 1.

The buy-price of some items will be off the sell-price by about 10% irregardless of NPC.txt, I haven't quite understood why this happens yet.

Selling price is not influenced by the amount of durability, it used to be like that early on.
