
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    let green = 'farmingforblockheads:green_fertilizer';
    let red = 'farmingforblockheads:red_fertilizer';
    let yellow = 'farmingforblockheads:yellow_fertilizer';
    let farmland = 'minecraft:farmland';

    catalyst.shapeless(Item.of('farmingforblockheads:fertilized_farmland_rich', 1), 
        [farmland, green]
    ).id("catalyst:farming/farmland_green")

    catalyst.shapeless(Item.of('farmingforblockheads:fertilized_farmland_rich_stable', 1), 
        [farmland, green, yellow]
    ).id("catalyst:farming/farmland_green_yellow")

    catalyst.shapeless(Item.of('farmingforblockheads:fertilized_farmland_healthy', 1), 
        [farmland, red]
    ).id("catalyst:farming/farmland_red")

    catalyst.shapeless(Item.of('farmingforblockheads:fertilized_farmland_healthy_stable', 1), 
        [farmland, red, yellow]
    ).id("catalyst:farming/farmland_red_yellow")

    catalyst.shapeless(Item.of('farmingforblockheads:fertilized_farmland_stable', 1), 
        [farmland, yellow]
    ).id("catalyst:farming/farmland_yellow")

    console.log("[CatJS] Added Farming For BlockHead recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/