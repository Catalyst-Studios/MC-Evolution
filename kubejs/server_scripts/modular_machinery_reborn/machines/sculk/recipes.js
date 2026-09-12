/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    const energyX = 4;
    const energyY = 9;

    const inputX = 25; 
    const inputY1 = 8;
    const inputY2 = 29;
    const inputY3 = 50;
    const arrowX = 51;  
    const arrowY = 29;
    const outputX = 83; 

    const quadX1 = 25; 
    const quadX2 = 43; 
    const quadY1 = 17;
    const quadY2 = 38;
    const quadArrowX = 69; 
    const quadOutputX = 101; 

    const altarEnergyX = 4;
    const altarEnergyY = 12;
    const altarArrowX = 101; 
    const altarArrowY = 32;
    const altarOutputX = 141; 
    const ALTAR = {
        CENTER:     {x: 51, y: 32}, 
        NORTH_WEST: {x: 25, y: 32},  
        NORTH:      {x: 51, y: 0},  
        NORTH_EAST: {x: 77, y: 32},  
        SOUTH:      {x: 51, y: 63}  
    };

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 50)
        .progressData(ProgressData.create().x(arrowX).y(arrowY))
        .width(110)
        .height(76)
        .requireEnergyPerTick(100000, energyX, energyY)
        .requireChemical(`100x eternalores:shadow`, inputX, inputY1)
        .requireItem(Item.of('minecraft:vine', 1), inputX, inputY2)
        .requireItem(Item.of('eternalores:eternal_dark_nugget', 1), inputX, inputY3)
        .produceItem(Item.of('minecraft:sculk_vein', 1), outputX, inputY2)
        .id(`catalyst:mmr/vat/sculk_vein_dark`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 50)
        .progressData(ProgressData.create().x(arrowX).y(arrowY))
        .width(110)
        .height(76)
        .requireEnergyPerTick(100000, energyX, energyY)
        .requireChemical(`100x eternalores:shadow`, inputX, inputY1)
        .requireItem(Item.of('minecraft:vine', 1), inputX, inputY2)
        .requireItem(Item.of('eternalores:eternal_light_nugget', 1), inputX, inputY3)
        .produceItem(Item.of('minecraft:sculk_vein', 1), outputX, inputY2)
        .id(`catalyst:mmr/vat/sculk_vein_light`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 350)
        .progressData(ProgressData.create().x(quadArrowX).y(arrowY))
        .width(125)
        .height(76)
        .requireEnergyPerTick(50000, energyX, energyY)
        .requireChemical(`512x eternalores:shadow`, quadX1, quadY1)
        .requireItem(Item.of('eternalores:compressed_stone_2x', 1), quadX2, quadY1)
        .requireItem(Item.of('eternalores:eternal_dark_ingot', 3), quadX1, quadY2)
        .requireItem(Item.of('eternalores:eternal_light_ingot', 3), quadX2, quadY2)
        .produceItem(Item.of('minecraft:sculk', 81), quadOutputX, arrowY)
        .id(`catalyst:mmr/vat/sculk`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 350)
        .progressData(ProgressData.create().x(quadArrowX).y(arrowY))
        .width(125)
        .height(76)
        .requireEnergyPerTick(50000, energyX, energyY)
        .requireChemical(`120x eternalores:shadow`, quadX1, quadY1)
        .requireItem(Item.of('rftoolsutility:sensor', 64), quadX2, quadY1)
        .requireItem(Item.of('eternalores:eternal_dark_ingot', 3), quadX1, quadY2)
        .requireItem(Item.of('eternalores:eternal_light_ingot', 3), quadX2, quadY2)
        .produceItem(Item.of('minecraft:sculk_sensor', 64), quadOutputX, arrowY)
        .id(`catalyst:mmr/vat/sensor`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 100)
        .progressData(ProgressData.create().x(quadArrowX).y(arrowY))
        .width(125)
        .height(76)
        .requireEnergyPerTick(50000, energyX, energyY)
        .requireChemical(`75x eternalores:shadow`, quadX1, quadY1)
        .requireItem(Item.of('minecraft:amethyst_shard', 1), quadX2, quadY1)
        .requireItem(Item.of('eternalores:eternal_dark_nugget', 3), quadX1, quadY2)
        .requireItem(Item.of('eternalores:eternal_light_nugget', 3), quadX2, quadY2)
        .produceItem(Item.of('minecraft:echo_shard', 1), quadOutputX, arrowY)
        .id(`catalyst:mmr/vat/echo_shard`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 600)
        .progressData(ProgressData.create().x(quadArrowX).y(arrowY))
        .width(125)
        .height(76)
        .requireEnergyPerTick(50000, energyX, energyY)
        .requireChemical(`512x eternalores:shadow`, quadX1, quadY1)
        .requireItem(Item.of('minecraft:sculk', 3), quadX2, quadY1)
        .requireItem(Item.of('eternalores:eternal_dark_block', 3), quadX1, quadY2)
        .requireItem(Item.of('eternalores:eternal_light_block', 3), quadX2, quadY2)
        .produceItem(Item.of('minecraft:sculk_catalyst', 3), quadOutputX, arrowY)
        .id(`catalyst:mmr/vat/catalyst`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 800)
        .progressData(ProgressData.create().x(altarArrowX).y(altarArrowY))
        .width(160)
        .height(85)
        .requireEnergyPerTick(500000, altarEnergyX, altarEnergyY)
        .requireChemical(`1024x eternalores:shadow`, ALTAR.CENTER.x, ALTAR.CENTER.y)
        .requireItem(Item.of('minecraft:sculk_vein', 1), ALTAR.NORTH.x, ALTAR.NORTH.y)
        .requireItem(Item.of('minecraft:sculk', 3), ALTAR.NORTH_EAST.x, ALTAR.NORTH_EAST.y)
        .requireItem(Item.of('minecraft:sculk_sensor', 4), ALTAR.SOUTH.x, ALTAR.SOUTH.y)
        .requireItem(Item.of('minecraft:echo_shard', 1), ALTAR.NORTH_WEST.x, ALTAR.NORTH_WEST.y)
        .produceItem(Item.of('minecraft:sculk_shrieker', 1), altarOutputX, altarArrowY)
        .id(`catalyst:mmr/vat/shrieker`)

    catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:vat", 1200)
        .progressData(ProgressData.create().x(arrowX).y(arrowY))
        .width(110)
        .height(76)
        .requireEnergyPerTick(4500000, energyX, energyY)
        .requireChemical(`2048x eternalores:shadow`, inputX, inputY1)
        .requireItem(Ingredient.of('#c:ores', 1), inputX, inputY2)
        .requireItem(Item.of('minecraft:sculk', 42), inputX, inputY3)
        .produceItem(Item.of('eternalores:sculkite_ore_block', 1), outputX, inputY2)
        .id(`catalyst:mmr/vat/sculkite`)

    console.log("[CatJS] Added Sculk Vat recipes");
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/