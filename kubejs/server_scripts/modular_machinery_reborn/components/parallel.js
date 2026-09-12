/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of('modular_machinery_reborn:parallel_hatch_basic'),
        [
            'CSC',
            'PEP',
            'CSC'
        ],
        {
            C: 'modular_machinery_reborn:casing_plain',
            E: 'modular_machinery_reborn:casing_reinforced',
            P: 'eternalores:plate_sculkite',
            S: 'eternalores:plate_shadowsteel'
        }
    ).id(`catalyst:mmr/ports/basic_parallel_hatch`);

    catalyst.shaped(Item.of('modular_machinery_reborn:parallel_hatch_medium'),
        [
            'CPC',
            'PEP',
            'CPC'
        ],
        {
            C: 'eternalores:gear_etherium',
            P: 'modular_machinery_reborn:parallel_hatch_basic',
            E: 'eternalores:compressed_replica_block_2x'
        }
    ).id(`catalyst:mmr/ports/medium_parallel_hatch`);

})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/