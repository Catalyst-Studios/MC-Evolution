/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {

    catalyst.shaped('evilcraft:spirit_furnace', [
        ' D ',
        'DSD',
        ' D '
    ], {
        D: 'evilcraft:dark_blood_brick',
        S: 'evilcraft:spirit_reanimator'
    }).id('catalyst:evilcraft/spirit_furnace')

    catalyst.shaped('evilcraft:colossal_blood_chest', [
        ' U ',
        'UCU',
        ' U '
    ], {
        U: 'evilcraft:reinforced_undead_planks',
        C: 'evilcraft:blood_chest'
    }).id('catalyst:evilcraft/colossal_blood_chest')

    catalyst.shapeless(
        'evilcraft:dark_gem_crushed',
        [
            'evilcraft:dark_gem',
            '#c:tools/hammers'
        ]
    ).id('catalyst:evilcraft/dark_gem_crushed_hammer')

    catalyst.shaped('evilcraft:blood_orb_empty', [
        'GGG',
        'GOG',
        'GGG'
    ],
    {
        G: 'evilcraft:dark_gem',
        O: 'minecraft:obsidian'
    })
    .id("catalyst:evilcraft/blood_orb_empty");

    catalyst.shapeless('evilcraft:origins_of_darkness', ['minecraft:book', 'evilcraft:dark_gem'])
    .id("catalyst:evilcraft/origins_of_darkness");

    catalyst.shaped('evilcraft:dark_tank', [
        'DSD',
        'SGS',
        'DSD'
    ],
    {
        D: 'evilcraft:dark_gem',
        S: 'minecraft:iron_ingot',
        G: 'minecraft:glass'
    })
    .id("catalyst:evilcraft/dark_tank");

    catalyst.shaped('evilcraft:blood_extractor', [
        '  I',
        ' G ',
        'G  '
    ],
    {
        I: 'minecraft:iron_ingot',
        G: 'evilcraft:dark_gem'
    })
    .id("catalyst:evilcraft/blood_extractor");

    console.log("[CatJS] Added recipes evilcraft")
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/