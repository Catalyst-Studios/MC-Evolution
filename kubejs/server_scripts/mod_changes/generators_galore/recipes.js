/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped('generatorgalore:iron_generator', ['III','IFI', 'GRG'], {
        I: 'minecraft:iron_ingot',
        G: 'enderio:stone_gear',
        F: 'minecraft:furnace',
        R: 'minecraft:redstone_block'
    }).id('evolution:generatorgalore/iron_generator')

    //Culinary Generator- Potato recipe
    catalyst.shaped('generatorgalore:culinary_generator', ['AAA', 'ABA', 'ACA'], {
        A: '#c:crops',
        B: 'generatorgalore:iron_generator',
        C: 'enderio:basic_capacitor'
    }).id('evolution:generatorgalore/culinary_generator')

    //Netherstar generator
    catalyst.shaped('generatorgalore:netherstar_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:nether_star',
        B: 'generatorgalore:ender_generator',
        C: 'enderio:reinforced_obsidian_block'
    }).id('evolution:generatorgalore/netherstar_generator')

    //ender generator
    catalyst.shaped('generatorgalore:ender_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:ender_pearl',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:end_stone'
    }).id('evolution:generatorgalore/ender_generator')
   
    //enchantment generator
    catalyst.shaped('generatorgalore:enchantment_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:enchanted_book',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:obsidian'
    }).id('evolution:generatorgalore/enchantment_generator')
       
    //magmatic generator
    catalyst.shaped('generatorgalore:magmatic_generator', ['AAA', 'ABA', 'CCC'], {
        A: 'minecraft:gold_ingot',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:lava_bucket'
    }).id('evolution:generatorgalore/magmatic_generator')

    //removals
    catalyst.remove({ output: 'generatorgalore:iron_to_culinary_upgrade' })
    catalyst.remove({ output: 'generatorgalore:iron_to_potion_upgrade' })
    catalyst.remove({ output: 'generatorgalore:iron_to_netherstar_upgrade' })
    catalyst.remove({ output: 'generatorgalore:iron_to_enchantment_upgrade' })
    catalyst.remove({ output: 'generatorgalore:iron_to_magmatic_upgrade' })
    catalyst.remove({ output: 'generatorgalore:iron_to_honey_upgrade' })
    catalyst.remove({ output: 'generatorgalore:iron_to_ender_upgrade' })
})

/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/