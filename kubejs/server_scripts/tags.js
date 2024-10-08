/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.tags('item', catalyst => {
    catalyst.add('c:armors/diamond', 'minecraft:diamond_helmet')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_chestplate')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_leggings')
    catalyst.add('c:armors/diamond', 'minecraft:diamond_boots')

    //Fluid Pumps
    catalyst.add('c:block/fluidpump', 'mekanism:electric_pump')
    catalyst.add('c:block/fluidpump', 'rangedpumps:pump')
    catalyst.add('c:block/fluidpump', 'energizedpower:fluid_pump')
    catalyst.add('c:block/fluidpump', 'xycraft_machines:hydro_pump')
    
    //Tiny (Char)Coal
    catalyst.add('c:fueltype/tinycoals', 'kubejs:tiny_charcoal')
    catalyst.add('c:fueltype/tinycoals', 'kubejs:tiny_coal')

    //Jetpacks
    catalyst.add('c:creativeflytype/jetpack', 'mekanism:jetpack')
    catalyst.add('c:creativeflytype/jetpack', 'ironjetpacks:jetpack')
    
    //Exalted Crafter Non-Powered
    catalyst.add('c:exaltedcrafter/tier/1', 'evilcraft:exalted_crafter_wooden')
    catalyst.add('c:exaltedcrafter/tier/1', 'evilcraft:exalted_crafter')

    //Exalted Crafter Powered
    catalyst.add('c:exaltedcrafter/tier/2', 'evilcraft:exalted_crafter_wooden_empowered')
    catalyst.add('c:exaltedcrafter/tier/2', 'evilcraft:exalted_crafter_empowered')
})

//block tags
ServerEvents.tags('block', catalyst => {
    //Geore
    //lets Geore buds be acceled
    catalyst.add("c:budding", "#c:budding_blocks")
    //lets geore buds be moved
    let buds_move = (buds) => { catalyst.remove('c:relocation_not_supported', buds)}
    buds_move("geore:budding_coal")
    buds_move("geore:budding_copper"),
    buds_move("geore:budding_diamond"),
    buds_move("geore:budding_emerald"),
    buds_move("geore:budding_gold"),
    buds_move("geore:budding_iron"),
    buds_move("geore:budding_lapis"),
    buds_move("geore:budding_quartz"),
    buds_move("geore:budding_redstone"),
    buds_move("geore:budding_ruby"),
    buds_move("geore:budding_sapphire"),
    buds_move("geore:budding_topaz")
    });

/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/