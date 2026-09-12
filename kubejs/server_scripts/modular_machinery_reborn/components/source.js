/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    // 1. Small Tier (Crafted from Source Jar)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_small'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:plate_cast_iron',
            C: 'ars_nouveau:source_gem_block',
            D: 'ars_nouveau:source_gem_block',
            E: 'eternalores:biosteel_foil',
            F: 'ars_nouveau:source_jar'
        }
    ).id(`catalyst:mmr/ports/small_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_small'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:plate_cast_iron',
            C: 'ars_nouveau:source_gem_block',
            D: 'ars_nouveau:source_gem_block',
            E: 'eternalores:biosteel_foil',
            F: 'ars_nouveau:source_jar'
        }
    ).id(`catalyst:mmr/ports/small_output_source_hatch`);

    // 2. Normal Tier (From Small)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_normal'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:netherite_foil',
            F: 'modular_machinery_reborn_ars:sourceinputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_normal'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:netherite_foil',
            F: 'modular_machinery_reborn_ars:sourceoutputhatch_small'
        }
    ).id(`catalyst:mmr/ports/normal_output_source_hatch`);

    // 3. Reinforced Tier (From Normal)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_reinforced'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:cast_steel_foil',
            F: 'modular_machinery_reborn_ars:sourceinputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_reinforced'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:cast_steel_foil',
            F: 'modular_machinery_reborn_ars:sourceoutputhatch_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_output_source_hatch`);

    // 4. Big Tier (From Reinforced)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_big'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:iridium_foil',
            F: 'modular_machinery_reborn_ars:sourceinputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_big'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:iridium_foil',
            F: 'modular_machinery_reborn_ars:sourceoutputhatch_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_output_source_hatch`);

    // 5. Huge Tier (From Big)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_huge'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:plutonium_foil',
            F: 'modular_machinery_reborn_ars:sourceinputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_huge'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:plutonium_foil',
            F: 'modular_machinery_reborn_ars:sourceoutputhatch_big'
        }
    ).id(`catalyst:mmr/ports/huge_output_source_hatch`);

    // 6. Ludicrous Tier (From Huge)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_ludicrous'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:ultimatitanium_foil',
            F: 'modular_machinery_reborn_ars:sourceinputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_ludicrous'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:ultimatitanium_foil',
            F: 'modular_machinery_reborn_ars:sourceoutputhatch_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_output_source_hatch`);

    // 7. Vacuum Tier (From Ludicrous)
    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceinputhatch_vacuum'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:plate_sculkite',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:gem_tachyarite',
            F: 'modular_machinery_reborn_ars:sourceinputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/vacuum_input_source_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn_ars:sourceoutputhatch_vacuum'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:etherium_ingot',
            B: 'eternalores:plate_sculkite',
            C: 'arseng:source_acceptor',
            D: 'ars_nouveau:source_jar',
            E: 'eternalores:gem_tachyarite',
            F: 'modular_machinery_reborn_ars:sourceoutputhatch_ludicrous'
        }
    ).id(`catalyst:mmr/ports/vacuum_output_source_hatch`);
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/