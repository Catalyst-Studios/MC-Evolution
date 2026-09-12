/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

StartupEvents.registry('item', catalyst => {

    const fluids = [
        'minecraft:lava',
        'minecraft:milk',
        'industrialforegoing:latex',
        'industrialforegoing:sewage',
        'industrialforegoing:sludge',
        'immersiveengineering:creosote',
        'evilcraft:blood',
        'mob_grinding_utils:fluid_xp'
    ];

    fluids.forEach(id => {
        let name = id.split(':')[1];
        let cell_id = `infinity_${name}_cell`;

        catalyst.create(`catalystcore:${cell_id}`, 'extendedae:custom_infinity_cell')
            .displayName(Component.translatable(`catalyst.extendedae.${name}`))
            .texture('extendedae:item/infinity_cell')
            .fluidType(id)
            .cellModel('ae2:block/drive/cells/fluid_cell_1k');

        console.log(`[CatJS] Added Infinity Cell catalystcore:${cell_id}`);

        print_debug_keys_items('catalystcore', cell_id, 'extendedae_cell', name);
    });

});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
