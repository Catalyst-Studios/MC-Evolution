/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

const debug_lang = false;

const print_debug_keys_fluids = (namespace, id) => {
    if (!debug_lang) return;
    
    console.log(`\n[CatJS Debug] JSON keys required for '${namespace}:${id}':`);
    console.log(`"${id}": "PUT_NAME_HERE",`);
    console.log(`"fluid.${namespace}.${id}": "PUT_NAME_HERE",`);
    console.log(`"fluid_type.${namespace}.${id}": "PUT_NAME_HERE",`);
    console.log(`"block.${namespace}.${id}": "Block of PUT_NAME_HERE",`);
    console.log(`"item.${namespace}.${id}_bucket": "PUT_NAME_HERE Bucket",\n`);
}

StartupEvents.registry('fluid', catalyst => {
    const registerLiquid = (displayName) => {
        let liquid = 'liquid_' + displayName.toLowerCase()
                       .replace(/[^a-z0-9 ]/g, '')
                       .trim()
                       .replace(/\s+/g, '_')

        catalyst.create(`catalystcore:${liquid}`)
                .stillTexture(`catalyst:block/${liquid}_still`)
                .flowingTexture(`catalyst:block/${liquid}_flow`)
        
        console.log(`[CatJS] Added Liquid ${liquid}`);
        
        print_debug_keys_fluids('catalystcore', liquid);
    }
    
    const registerMolten = (displayName) => {
        let molten = 'molten_' + displayName.toLowerCase()
                       .replace(/[^a-z0-9 ]/g, '')
                       .trim()
                       .replace(/\s+/g, '_')

        catalyst.create(`catalystcore:${molten}`)
                .stillTexture(`catalyst:block/${molten}_still`)
                .flowingTexture(`catalyst:block/${molten}_flow`)

        console.log(`[CatJS] Added Molten ${molten}`);

        print_debug_keys('catalystcore', molten);
    }

    registerLiquid('Darkness')
    registerLiquid('Light')
    registerLiquid('Blood')
    registerLiquid('Phyto Oil')
    registerLiquid('Gunk')
    //registerLiquid('Benzene')
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
