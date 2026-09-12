/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {
    const mmr = 'modular_machinery_reborn:';

    // Helper function to create the shaped recipe
    // D = Input Port (Side), A = Center (Core), B = Top, C = Bottom
    const createPort = (input, output, core, top, bottom) => {
        
        catalyst.shaped(output, [
            'B B',
            'DAD',
            'C C'
        ], {
            D: input,
            A: core,
            B: top,
            C: bottom
        }).id(`catalyst:mmr/ports/${input.split(':')[1]}_to_${output.split(':')[1]}`);
    };

    //misc
    const miscRecipes = [
        ['minecraft:redstone_block',            `${mmr}casing_vent`,           `${mmr}casing_plain`,      'stevescarts:component_cleaning_fan', 'stevescarts:component_cleaning_fan'],
        ['mekanism:ultimate_control_circuit',   `${mmr}casing_circuitry`,      `${mmr}casing_plain`,      'railcraft:radio_circuit',            'railcraft:controller_circuit'],
        ['minecraft:paper',                     `${mmr}blueprint`,             `${mmr}outputbus_tiny`,    'minecraft:blue_dye',                 'minecraft:blue_dye'],
        ['minecraft:repeater',                  `${mmr}redstone_port`,         `${mmr}casing_plain`,      'minecraft:redstone',                 'minecraft:redstone'],
        ['minecraft:redstone',                  `${mmr}entity_detector`,       `${mmr}casing_plain`,      'hostilenetworks:deep_learner',       'hostilenetworks:prediction_matrix'],
    ];

    miscRecipes.forEach(r => {
        // createPort(input, output, core, top, bottom)
        createPort(r[0], r[1], r[2], r[3], r[4]);
    });

    catalyst.shaped(
            Item.of("modular_machinery_reborn:dimensional_detector"),
            [
                'ABA',
                'CDE',
                'AFA'
            ],
            {
                A: 'eternalores:modularium_ingot',
                B: 'minecraft:deepslate',
                C: 'eternalores:ender_pearl_block',
                D: 'modular_machinery_reborn:casing_reinforced',
                E: 'eternalores:blaze_block',
                F: 'utilitarian:tps_meter'
            }
        ).id(`catalyst:mmr/ports/dimensional_detector_detector`);

    catalyst.shaped(Item.of('modular_machinery_reborn:casing_gearbox'),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'eternalores:rod_steel',
                B: 'eternalores:gear_steel',
                C: 'modular_machinery_reborn:casing_plain'
            }
        ).id(`catalyst:mmr/ports/casing_gear`);
    
    catalyst.shaped(Item.of(`${mmr}blueprint`, 1), [
        'B B',
        'DAD',
        'C C'
    ], {
        D: "minecraft:paper",
        A: `${mmr}inputbus_tiny`,
        B: 'minecraft:blue_dye',
        C: 'minecraft:blue_dye'
    }).id(`catalyst:mmr/ports/blueprint_output`);

    catalyst.shaped(Item.of('modular_machinery_reborn:wrench'),
        [
            ' WD',
            ' GW',
            'W  '
        ],
        {
            W: 'eternalores:rod_wrought_iron',
            G: 'eternalores:gear_copper',
            D: 'minecraft:orange_dye'
        }
    ).id(`catalyst:mmr/ports/wrench`);

    console.log("[CatJS] Added hatches and buses for MMR")
});

ItemEvents.modifyTooltips(catalyst => {
    // Define tank sizes for each tier
    const tankSizes = {
        tiny: 1000,
        small: 10000,
        normal: 50000,
        reinforced: 200000,
        big: 1000000,
        huge: 5000000,
        ludicrous: 20000000,
        vacuum: 2147483647
    };

    // Process both input and output hatches for all tiers
    ['input', 'output'].forEach(ioType => {
        Object.keys(tankSizes).forEach(tier => {
            const targetId = `modular_machinery_reborn_mekanism:chemical${ioType}hatch_${tier}`;
            
            if(Item.exists(targetId))
            {
                catalyst.modify(targetId, text => {
                    text.removeLine(1);
                    text.add(Text.of("Stores ").append(Text.of(tankSizes[tier]).red()).append(Text.of(" chemicals")));
                });
            }
        });
    });

    console.log("[CatJS] Added tooltips to MMR hatches and buses");
});
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
