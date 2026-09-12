
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of("energizedpower:cable_insulator", 32),
    [
        "WS ",
    ],{
        W: 'minecraft:white_wool',
        S: "minecraft:shears",
    
    }).id("catalyst:energized_power/cable_insulator");

    catalyst.shaped(Item.of('energizedpower:press_mold_maker', 1),
    [
        "BBB",
        "BSB",
        "FFF"
    ],{
        B: 'minecraft:bricks',
        F: 'minecraft:smooth_stone',
        S: 'minecraft:wooden_shovel'
    
    }).id("catalyst:energized_power/press_mold_maker");

    console.log("[CatJS] Added Energized Power recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/