/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    let storages = [];
    
    Ingredient.of('#catalyst:budding_storages').getItemIds().forEach(id => {
        storages.push(id);
    });
    
    let missingStorages = [
        "ae2:quartz_block",
        "extendedae:entro_block",
        "justdirethings:time_crystal_block"
    ];
    
    missingStorages.forEach(s => {
        if(!storages.includes(s)) storages.push(s);
    });

    storages.forEach(block => {
        let budding = block.replace("_block", "").replace(":", ":budding_").replace("_geore", "").replace("_geo", "");
        
        if(block === "ae2:quartz_block") budding = "ae2:flawless_budding_quartz";
        else if(block === "extendedae:entro_block") budding = "extendedae:entro_budding_fully";
        else if(block === "justdirethings:time_crystal_block") budding = "justdirethings:time_crystal_budding_block";
        else if(block === "minecraft:amethyst_block") budding = "minecraft:budding_amethyst";
        
        catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:crystalline_fabricator", 2400)
        .progressData(ProgressData.create().x(54).y(20))
        .width(110)
        .height(60)
        .requireEnergyPerTick(100000, 0, 4)
        .requireItem(Item.of(block, 32), 25, 20)
        .produceItem(Item.of(budding, 1), 90, 20)
        .id(`catalyst:mmr/crystalline_fabricator/${budding.replace(":", "_")}`)
    });

    console.log("[CatJS] Added buds creation recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/