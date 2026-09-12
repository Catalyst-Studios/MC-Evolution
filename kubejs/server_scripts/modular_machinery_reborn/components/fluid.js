/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    // Tiny Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_tiny'),
        [
            'ACA',
            'BEB',
            'ADA'
        ],
        {
            A: 'eternalores:plate_steel',
            B: 'eternalores:plate_bronze',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:signalum_foil'
        }
    ).id(`catalyst:mmr/ports/tiny_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_tiny'),
        [
            'ADA',
            'BEB',
            'ACA'
        ],
        {
            A: 'eternalores:plate_steel',
            B: 'eternalores:plate_bronze',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:signalum_foil'
        }
    ).id(`catalyst:mmr/ports/tiny_output_fluid_hatch`);

    // Small Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_small'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:plate_cast_iron',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:biosteel_foil',
            F: 'modular_machinery_reborn:fluidinputhatch_tiny'
        }
    ).id(`catalyst:mmr/ports/small_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_small'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:plate_cast_iron',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:biosteel_foil',
            F: 'modular_machinery_reborn:fluidoutputhatch_tiny'
        }
    ).id(`catalyst:mmr/ports/small_output_fluid_hatch`);

    // Normal Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_normal'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:netherite_foil',
            F: 'modular_machinery_reborn:fluidinputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_normal'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:netherite_foil',
            F: 'modular_machinery_reborn:fluidoutputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_output_fluid_hatch`);

    // Reinforced Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_reinforced'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:cast_steel_foil',
            F: 'modular_machinery_reborn:fluidinputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_reinforced'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:cast_steel_foil',
            F: 'modular_machinery_reborn:fluidoutputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_output_fluid_hatch`);

    // Big Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_big'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:iridium_foil',
            F: 'modular_machinery_reborn:fluidinputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_big'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:iridium_foil',
            F: 'modular_machinery_reborn:fluidoutputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_output_fluid_hatch`);

    // Huge Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_huge'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:plutonium_foil',
            F: 'modular_machinery_reborn:fluidinputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_huge'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:plutonium_foil',
            F: 'modular_machinery_reborn:fluidoutputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_output_fluid_hatch`);

    // Ludicrous Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_ludicrous'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:ultimatitanium_foil',
            F: 'modular_machinery_reborn:fluidinputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_ludicrous'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:ultimatitanium_foil',
            F: 'modular_machinery_reborn:fluidoutputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_output_fluid_hatch`);

    // Vacuum Tier
    catalyst.shaped(Item.of('modular_machinery_reborn:fluidinputhatch_vacuum'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:plate_sculkite',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:gem_tachyarite',
            F: 'modular_machinery_reborn:fluidinputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/vacuum_input_fluid_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:fluidoutputhatch_vacuum'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:plate_sculkite',
            C: 'utilitarian:fluid_hopper',
            D: 'minecraft:bucket',
            E: 'eternalores:gem_tachyarite',
            F: 'modular_machinery_reborn:fluidoutputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/vacuum_output_fluid_hatch`);
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/