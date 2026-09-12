/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    // First tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_tiny'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_invar',
            B: 'eternalores:plate_aluminum',
            C: 'eternalores:rod_bronze',
            D: 'energizedpower:battery_2',
            E: 'eternalores:gear_copper',
            F: 'energizedpower:copper_cable'
        }
    ).id(`catalyst:mmr/ports/tiny_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_tiny'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_invar',
            B: 'eternalores:plate_aluminum',
            C: 'eternalores:rod_bronze',
            D: 'energizedpower:battery_2',
            E: 'eternalores:gear_copper',
            F: 'energizedpower:copper_cable'
        }
    ).id(`catalyst:mmr/ports/tiny_output_energy_hatch`);

    // Second tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_small'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:rod_cast_iron',
            C: 'eternalores:biosteel_foil',
            D: 'energizedpower:battery_4',
            E: 'energizedpower:gold_cable',
            F: 'modular_machinery_reborn:energyinputhatch_tiny'
        }
    ).id(`catalyst:mmr/ports/small_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_small'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:rod_cast_iron',
            C: 'eternalores:biosteel_foil',
            D: 'energizedpower:battery_4',
            E: 'energizedpower:gold_cable',
            F: 'modular_machinery_reborn:energyoutputhatch_tiny'
        }
    ).id(`catalyst:mmr/ports/small_output_energy_hatch`);

    // Third tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_normal'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:rod_lumium',
            C: 'eternalores:netherite_foil',
            D: 'mekanism:advanced_energy_cube',
            E: 'powah:energy_cable_blazing',
            F: 'modular_machinery_reborn:energyinputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_normal'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:rod_lumium',
            C: 'eternalores:netherite_foil',
            D: 'mekanism:advanced_energy_cube',
            E: 'powah:energy_cable_blazing',
            F: 'modular_machinery_reborn:energyoutputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_output_energy_hatch`);

    // Fourth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_reinforced'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:rod_nethersteel',
            C: 'eternalores:cast_steel_foil',
            D: 'mekanism:elite_energy_cube',
            E: 'enderio:vibrant_crystal',
            F: 'modular_machinery_reborn:energyinputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_reinforced'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:rod_nethersteel',
            C: 'eternalores:cast_steel_foil',
            D: 'mekanism:elite_energy_cube',
            E: 'enderio:vibrant_crystal',
            F: 'modular_machinery_reborn:energyoutputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_output_energy_hatch`);

    // Fifth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_big'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:rod_uraninite',
            C: 'eternalores:iridium_foil',
            D: 'mekanism:ultimate_energy_cube',
            E: 'energizedpower:crystal_matrix',
            F: 'modular_machinery_reborn:energyinputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_big'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:rod_uraninite',
            C: 'eternalores:iridium_foil',
            D: 'mekanism:ultimate_energy_cube',
            E: 'energizedpower:crystal_matrix',
            F: 'modular_machinery_reborn:energyoutputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_output_energy_hatch`);

    // Sixth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_huge'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:rod_eternal_light',
            C: 'eternalores:plutonium_foil',
            D: 'powah:capacitor_nitro',
            E: 'energizedpower:energized_crystal_matrix_cable',
            F: 'modular_machinery_reborn:energyinputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_huge'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:rod_eternal_light',
            C: 'eternalores:plutonium_foil',
            D: 'powah:capacitor_nitro',
            E: 'energizedpower:energized_crystal_matrix_cable',
            F: 'modular_machinery_reborn:energyoutputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_output_energy_hatch`);

    // Seventh tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_ludicrous'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:rod_shadowsteel',
            C: 'eternalores:ultimatitanium_foil',
            D: 'energizedpower:solar_panel_6',
            E: 'sfm:cable',
            F: 'modular_machinery_reborn:energyinputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_ludicrous'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:rod_shadowsteel',
            C: 'eternalores:ultimatitanium_foil',
            D: 'energizedpower:solar_panel_6',
            E: 'sfm:cable',
            F: 'modular_machinery_reborn:energyoutputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_output_energy_hatch`);

    // Eighth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:energyinputhatch_ultimate'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:rod_sculkite',
            C: 'eternalores:gem_tachyarite',
            D: 'replication:replica_ingot',
            E: 'eternalores:gear_etherium',
            F: 'modular_machinery_reborn:energyinputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/ultimate_input_energy_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:energyoutputhatch_ultimate'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:rod_sculkite',
            C: 'eternalores:gem_tachyarite',
            D: 'replication:replica_ingot',
            E: 'eternalores:gear_etherium',
            F: 'modular_machinery_reborn:energyoutputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/ultimate_output_energy_hatch`);
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/