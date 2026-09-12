/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    catalyst.shaped('create:extendo_grip', [
        ' B ',
        'RRR',
        ' H '
    ], {
        B: "eternalores:bronze_ingot",
        R: "eternalores:rod_brass",
        H: "create:brass_hand"
    }).id('catalyst:create/extendo_grip')

    catalyst.shaped('create:wand_of_symmetry', [
        ' G ',
        'GLG',
        ' C '
    ], {
        G: "minecraft:glass",
        L: "minecraft:glowstone",
        C: "#c:stripped_logs"
    }).id('catalyst:create/wand_of_symmetry')


    let unbreaking_list = [
        'mysticalagriculture:awakened_supremium_axe',
        "mysticalagriculture:supremium_axe",
        "mysticalagradditions:supremium_paxel",
        "mysticalagradditions:awakened_supremium_paxel",
        "catalystcore:cataclystic_battleaxe",
        "catalystcore:cataclystic_axe",
        "catalystcore:cataclystic_paxel",
        "oritech:promethium_axe" 
    ]

    let energy_list = [
        "justdirethings:celestigem_paxel",
        "justdirethings:eclipsealloy_paxel",
        "justdirethings:celestigem_axe",
        "justdirethings:eclipsealloy_axe",
    ]

    let all_special_axes = [].concat(unbreaking_list, energy_list)

    let unbreaking_axes = Ingredient.of(unbreaking_list)
    let energy_axes = Ingredient.of(energy_list)

    let all_axes_ids = Ingredient.of('#minecraft:axes').getItemIds()
    let normal_axes_ids = all_axes_ids.filter(id => !all_special_axes.includes(id.toString()))
    let normal_axes = Ingredient.of(normal_axes_ids)

    Ingredient.of('#minecraft:logs').getItemIds().forEach(logId => {
        let logString = logId.toString()
        if (logString.includes('stripped')) return

        let parts = logString.split(':')
        let namespace = parts[0]
        let path = parts[1]
        let strippedId = `${namespace}:stripped_${path}`
        let strippedIdAlternate = `${namespace}:${path}_stripped`

        let resultId = null

        if(Item.exists(strippedId)) resultId = strippedId
        else if(Item.exists(strippedIdAlternate)) resultId = strippedIdAlternate

        if(resultId)
        {
            catalyst.shapeless(resultId, 
                [ logId, normal_axes ]
            ).id(`catalyst:create/log_${path}_to_stripped_version_${namespace}`)
            .damageIngredient(normal_axes, 4)

            let unbreakingRecipe = catalyst.shapeless(resultId, [ logId, unbreaking_axes ])
                .id(`catalyst:create/log_${path}_to_stripped_version_unbreaking_${namespace}`);
            
            unbreaking_list.forEach(axeId => {
                unbreakingRecipe.keepIngredient(axeId)
            })

            catalyst.shapeless(resultId, 
                [ logId, energy_axes ]
            ).id(`catalyst:create/log_${path}_to_stripped_version_jdt_${namespace}`)
            .damageIngredient(energy_axes, 400)
            .keepIngredient(energy_axes)

        }
    })

    //Casings (andesite, copper and brass)
    catalyst.shaped('create:andesite_casing', 
    [
        'SAI',
        '  I',
        '   '
    ], {
        S: '#c:stripped_logs',
        A: normal_axes,
        I: 'create:andesite_alloy'
    })
    .id(`catalyst:create/andesite_casing_crafting`)
    .consumeIngredient(normal_axes)

    catalyst.shaped('create:copper_casing', 
    [
        'SAI',
        '  I',
        '   '
    ], {
        S: '#c:stripped_logs',
        A: normal_axes,
        I: 'minecraft:copper_ingot'
    })
    .id(`catalyst:create/copper_casing_crafting`)
    .consumeIngredient(normal_axes)

    catalyst.shaped('create:brass_casing', 
    [
        'SAI',
        '  I',
        '   '
    ], {
        S: '#c:stripped_logs',
        A: normal_axes,
        I: '#c:ingots/brass'
    })
    .id(`catalyst:create/brass_casing_crafting`)
    .consumeIngredient(normal_axes)

    //Speed controller
    catalyst.shaped('create:rotation_speed_controller', [
        'SLS',
        'PAP',
        'CBC'
    ], {
        S: 'create:shaft',
        L: 'create:large_cogwheel',
        P: 'eternalores:plate_brass',
        A: 'create:cogwheel',
        C: 'create:brass_casing',
        B: 'create_new_age:basic_motor',
    }).id('catalyst:create/speed_controller')

    catalyst.shaped('create:rotation_speed_controller', [
        'SLS',
        'PAP',
        'CBC'
    ], {
        S: 'create:shaft',
        L: 'create:large_cogwheel',
        P: 'eternalores:plate_brass',
        A: 'create:cogwheel',
        C: 'create:brass_casing',
        B: 'createaddition:electric_motor',
    }).id('catalyst:create/speed_controller_electric_motor')

    //Motors
    catalyst.shaped("create_new_age:basic_motor", [
        'CBC',
        'PAS',
        'CBC'
    ], {
        C: "eternalores:cast_iron_ingot",
        B: "oritech:magnetic_coil",
        P: 'eternalores:plate_iron',
        A: 'create:andesite_casing',
        S: 'create:shaft'
    }).id('catalyst:create/basic_motor')

    catalyst.shaped('create_new_age:advanced_motor', [
        'CBC',
        'PAS',
        'CBC'
    ], {
        C: "eternalores:electrum_ingot",
        B: "oritech:magnetic_coil",
        P: 'eternalores:plate_graphite',
        A: 'create:andesite_casing',
        S: 'create:shaft'
    }).id('catalyst:create/advanced_motor')

    //Lapis
    catalyst.custom({
        type: 'create:haunting',
        ingredients: [
            { tag: 'c:gems/lapis' }
        ],
        results: [
            {
                id: 'minecraft:prismarine_shard',
                chance: 1
            },
            {
                id: 'minecraft:prismarine_crystals',
                chance: 0.5
            }
        ]
    })
    .id("catalyst:create/lapis_to_prismarine_create")

    //Andesite alloy
    catalyst.custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
            A: { tag: 'c:stones' },
            B: { tag: 'c:nuggets/iron' }
        },
        pattern: [
            'BA',
            'AB'
        ],
        result: {
            id: 'create:andesite_alloy',
            count: 2
        }
    }).id("catalyst:create/crafting/andesite_iron")

    catalyst.custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
            A: { tag: 'c:stones' },
            B: { tag: 'c:nuggets/zinc' }
        },
        pattern: [
            'BA',
            'AB'
        ],
        result: {
            id: 'create:andesite_alloy',
            count: 3
        }
    }).id("catalyst:create/crafting/andesite_zinc")

    catalyst.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:andesite"
            },
            {
                tag: "c:nuggets/iron"
            }
        ],
        results: [
            {
                id: 'create:andesite_alloy_block'
            }
        ]
    }).id("catalyst:create/mixing/andesite_iron")

    catalyst.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:andesite"
            },
            {
                tag: "c:nuggets/zinc"
            }
        ],
        results: [
            {
                id: "create:andesite_alloy"
            }
        ]
    }).id("catalyst:create/mixing/andesite_zinc")

    //Item vault
    catalyst.shaped('2x create:item_vault', 
        [
            " P ",
            " C ",
            " P "
        ], {
            P: 'eternalores:plate_cast_iron',
            C: '#c:barrels'
        }
    )
    .id("catalyst:create/item_vault_barrels")

    catalyst.shaped('2x create:item_vault', 
        [
            " P ",
            " C ",
            " P "
        ], {
            P: 'eternalores:plate_cast_iron',
            C: '#c:chests'
        }
    )
    .id("catalyst:create/item_vault_chests")

    //Haunted belt
    catalyst.shapeless('create:haunted_bell', 
        ['#minecraft:soul_fire_base_blocks', 'create:peculiar_bell']
    ).id("catalyst:create/haunted_belt")

    //Blaze burner
    catalyst.shaped('create:blaze_burner', 
        [
            "BPB",
            "PCP",
            "BPB"
        ], {
            P: 'minecraft:blaze_powder',
            C: 'create:empty_blaze_burner',
            B: 'minecraft:blaze_rod'
        }
    )
    .id("catalyst:create/blaze_burner")

    //Eggs
    catalyst.custom({
        type: 'create:haunting',
        ingredients: [
            { item: 'create:dough' }
        ],
        results: [
            {
                id: 'minecraft:egg',
                chance: 1
            },
            {
                id: 'minecraft:egg',
                chance: 0.1
            }
        ]
    })
    .id("catalyst:create/eggs_haunted")

    catalyst.shaped('create:shadow_steel_casing', 
        [
            "PFP",
            "PCP",
            "PFP"
        ], {
            P: 'eternalores:shadowsteel_ingot',
            C: 'create:railway_casing',
            F: 'eternalores:shadowsteel_foil'
        }
    )
    .id("catalyst:create/shadow_steel_casing")

    catalyst.shaped('create:refined_radiance_casing', 
        [
            "NC ",
        ], {
            N: 'morered:not_gate',
            C: 'create:shadow_steel_casing',
        }
    )
    .id("catalyst:create/refined_radiance_casing")

    catalyst.shaped('create:shadow_steel_casing', 
        [
            "NC ",
        ], {
            N: 'morered:not_gate',
            C: 'create:refined_radiance_casing',
        }
    )
    .id("catalyst:create/shadow_steel_casing_inverted")

    catalyst.shaped(Item.of('create:crushing_wheel', 8), [
        "PAP",
        "AGA",
        "PAP"
    ],
    {
        P: 'eternalores:plate_eternal_dark',
        A: 'eternalores:plate_andesite',
        G: 'eternalores:gear_andesite'
    })
    .id("catalyst:crushing_wheel");

    catalyst.shaped(Item.of('create:crushing_wheel', 8), [
        "PAP",
        "AGA",
        "PAP"
    ],
    {
        P: 'eternalores:plate_eternal_light',
        A: 'eternalores:plate_andesite',
        G: 'eternalores:gear_andesite'
    })
    .id("catalyst:crushing_wheel_light");

    catalyst.shaped(Item.of('create:crushing_wheel', 1), [
        "BPB",
        "PGP",
        "APA"
    ],
    {
        B: 'create_new_age:basic_motor_extension',
        P: 'eternalores:plate_diamond',
        G: 'eternalores:gear_andesite',
        A: 'create_new_age:advanced_motor'
    })
    .id("catalyst:crushing_wheel_no_mechanical_crafting");

    console.log("[CatJS] Finished Create changes")

    catalyst.custom({
        type: "create:mixing",
        heat_requirement: "superheated",
        ingredients: [
            { item: "catalystcore:lava_orb" },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [
            { id: "catalystcore:liquid_light", amount: 500 },
            { id: "catalystcore:lava_orb" }
        ]
    }).id("catalyst:create/orb_to_light");

    catalyst.custom({
        type: "create:mixing",
        heat_requirement: "superheated",
        ingredients: [
            { item: 'catalystcore:end_core' },
            {
                type: "neoforge:single",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [
            { id: "catalystcore:liquid_darkness", amount: 500 },
            { id: 'catalystcore:end_core' }
        ]
    }).id("catalyst:create/orb_to_dark");

    catalyst.custom({
        type: "create:mixing",
        ingredients: [
            { item: 'catalystcore:water_orb' }
        ],
        results: [
            { id: "minecraft:water", amount: 4000 },
            { id: 'catalystcore:water_orb' }
        ]
    }).id("catalyst:create/orb_to_water");

    console.log("[CatJS] Adding mixers")
})


/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/