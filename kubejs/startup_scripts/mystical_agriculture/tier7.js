/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

const print_debug_keys = (namespace, id, type, custom_key) => {
    if(!debug_lang) return;
    
    console.log(`\n[CatJS Debug] JSON keys required for '${namespace}:${id}':`);
    if(type === 'custom_key' && custom_key)
    {
        console.log(`"${custom_key}": "PUT_NAME_HERE",`);
    }
    else
    {
        console.log(`"block.${namespace}.${id}": "PUT_NAME_HERE",`);
        console.log(`"item.${namespace}.${id}": "PUT_NAME_HERE",`);
    }
    console.log();
}

let $Rarity = Java.loadClass("net.minecraft.world.item.Rarity");
let $Farmland = Java.loadClass("net.minecraft.world.level.block.FarmBlock");
let $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks");
let $BlockBehaviour = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour");

StartupEvents.registry("block", catalyst => {

    let customFarmland = new $Farmland($BlockBehaviour.Properties.ofFullCopy($Blocks.FARMLAND)
                                              .strength(0.6));

    catalyst.createCustom('catalystcore:magical_farmland', () => customFarmland)
    .tag("minable/paxel");
    print_debug_keys('catalystcore', 'magical_farmland', 'block');
    
    catalyst.create("catalystcore:magical_block")
    .fullBlock(true)
    .lightLevel(2)
    .noValidSpawns(true)
    .suffocating(false)
    .redstoneConductor(true)
    .hardness(6.0)
    .resistance(4.0)
    .tagBlock("c:storage_blocks")
    .requiresTool(false)
    .color(0, "#AA45ED")
    .texture('up', 'catalyst:block/essence_block')
    .texture('down', 'catalyst:block/essence_block')
    .texture('north', 'catalyst:block/essence_block')
    .texture('south', 'catalyst:block/essence_block')
    .texture('east', 'catalyst:block/essence_block')
    .texture('west', 'catalyst:block/essence_block')
    .item(item => {item.color(0, "#AA45ED"); item.glow(true)})
    print_debug_keys('catalystcore', 'magical_block', 'block');

    catalyst.create("catalystcore:mystical_block")
    .fullBlock(true)
    .lightLevel(2)
    .noValidSpawns(true)
    .suffocating(false)
    .redstoneConductor(true)
    .hardness(6.0)
    .resistance(4.0)
    .tagBlock("c:storage_blocks")
    .requiresTool(false)
    .color(0, "#3DB2E0")
    .texture('up', 'catalyst:block/essence_block')
    .texture('down', 'catalyst:block/essence_block')
    .texture('north', 'catalyst:block/essence_block')
    .texture('south', 'catalyst:block/essence_block')
    .texture('east', 'catalyst:block/essence_block')
    .texture('west', 'catalyst:block/essence_block')
    .item(item => {item.color(0, "#3DB2E0"); item.glow(true)})
    print_debug_keys('catalystcore', 'mystical_block', 'block');

    catalyst.create("catalystcore:technology_block")
    .fullBlock(true)
    .lightLevel(5)
    .noValidSpawns(true)
    .suffocating(false)
    .redstoneConductor(true)
    .hardness(6.0)
    .resistance(4.0)
    .tagBlock("c:storage_blocks")
    .requiresTool(false)
    .color(0, "#EDC45F")
    .texture('up', 'catalyst:block/essence_block')
    .texture('down', 'catalyst:block/essence_block')
    .texture('north', 'catalyst:block/essence_block')
    .texture('south', 'catalyst:block/essence_block')
    .texture('east', 'catalyst:block/essence_block')
    .texture('west', 'catalyst:block/essence_block')
    .item(item => {item.color(0, "#EDC45F"); item.glow(true)})
    print_debug_keys('catalystcore', 'technology_block', 'block');

    console.log("[CatJS] Added mocking blocks");
})

StartupEvents.registry("item", catalyst => {

    catalyst.create("catalystcore:enriched_seeds")
    .texture("catalyst:item/enriched_seeds")
    .glow(true)
    .color(0, '#CD956B')
    .color(1, '#E31B4A')
    .rarity($Rarity.COMMON)
    print_debug_keys('catalystcore', 'enriched_seeds', 'item');

    catalyst.create("catalystcore:powered_seeds")
    .texture("catalyst:item/powered_seeds")
    .glow(true)
    .color(0, '#CD956B')
    .color(1, '#3477EB')
    .rarity($Rarity.COMMON)
    print_debug_keys('catalystcore', 'powered_seeds', 'item');

    catalyst.create("catalystcore:ethereal_seeds")
    .texture("catalyst:item/ethereal_seeds")
    .glow(true)
    .color(0, '#34EBE5')
    .color(1, '#3477EB')
    .rarity($Rarity.UNCOMMON)
    print_debug_keys('catalystcore', 'ethereal_seeds', 'item');

    catalyst.create("catalystcore:reinforced_seeds")
    .texture("catalyst:item/reinforced_seeds")
    .glow(true)
    .rarity($Rarity.RARE)
    print_debug_keys('catalystcore', 'reinforced_seeds', 'item');

    catalyst.create("catalystcore:activated_seeds")
    .texture("catalyst:item/activated_seeds")
    .glow(true)
    .rarity($Rarity.EPIC)
    print_debug_keys('catalystcore', 'activated_seeds', 'item');

    console.log("[CatJS] Added Mocking seeds");
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/