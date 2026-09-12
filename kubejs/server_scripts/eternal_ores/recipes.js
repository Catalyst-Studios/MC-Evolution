/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('eternalores:catalyrium_dust', 4), // arg 1: output
        [
            'CAC',
            'BDB', // arg 2: the shape (array of strings)
            'CAC'
        ],
        {
            A: 'minecraft:sculk_catalyst',
            B: 'minecraft:dragon_breath',  //arg 3: the mapping object
            C: 'minecraft:blaze_powder',
            D: 'minecraft:redstone'
        }
    ).id('catalyst:eternalores/catalyrium_dust')

    catalyst.shaped(Item.of('eternalores:shadow_blend', 3),
        [
            'KKK',
            'CEO',
            'SS '
        ],
        {
            S: 'eternalores:shadowsteel_dust',
            O: 'eternalores:onyx_dust',
            E: 'eternalores:endergetic_blend',
            C: 'eternalores:cobalt_dust',
            K: 'eternalores:sculk_dust'
        }
    ).id('catalyst:eternalores/shadow_blend')

    catalyst.shapeless(Item.of('eternalores:gem_certus_quartz', 1), [
        'ae2:certus_quartz_crystal'
    ])
    .id("catalyst:gem_certus_quartz");

    catalyst.shapeless(Item.of('eternalores:gem_fluix', 1), [
        "ae2:fluix_crystal"
    ])
    .id("catalyst:gem_fluix");

    catalyst.shapeless(Item.of('eternalores:modularium_ingot', 1), [
        "modular_machinery_reborn:modularium"
    ])
    .id("catalyst:modularium_ingot");

    console.log("[CatJS] Added EternalOres recipes")
})

ItemEvents.modifyTooltips(catalyst => {

    catalyst.add('ae2:certus_quartz_crystal', Component.translatable("catalyst.eo.unify"))
    catalyst.add("ae2:fluix_crystal", Component.translatable("catalyst.eo.unify"))
    catalyst.add("modular_machinery_reborn:modularium", Component.translatable("catalyst.eo.unify"))

    console.log("[CatJS] Added tooltip to EO unification items")
});


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/