/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/


const print_debug_keys_items = (namespace, id, type, extra) => {
    if (!debug_lang) return;
    
    console.log(`\n[CatJS Debug] JSON keys required for '${namespace}:${id}':`);
    if(type === 'extendedae_cell')
    {
        console.log(`"catalyst.extendedae.${extra}": "Infinity ${extra.toUpperCase()} Cell",`);
    }
    else if(type === 'incomplete')
    {
        console.log(`"catalyst.item.${id}": "Incomplete PUT_NAME_HERE",`);
    }
    else
    {
        console.log(`"item.${namespace}.${id}": "PUT_NAME_HERE",`);
    }
    console.log();
}

StartupEvents.registry('item', catalyst => {

    const registerIncomplete = (displayName, texture) => {
        let incomplete = 'incomplete_' + displayName.toLowerCase()
                                       .replace(/[^a-z0-9 ]/g, '')
                                       .trim()
                                       .replace(/\s+/g, '_')

        catalyst.create(`catalystcore:${incomplete}`)
            .maxStackSize(64)
            .texture(texture)
        
        console.log(`[CatJS] Added Incomplete Item catalystcore:${incomplete}`);
        
        print_debug_keys_items('catalystcore', incomplete, 'incomplete', "");
    }

    registerIncomplete('Containment Ingot', "catalyst:item/incomplete_containment_ingot")
    registerIncomplete("Imperfect Ingot", "catalyst:item/incomplete_imperfect_ingot")
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
