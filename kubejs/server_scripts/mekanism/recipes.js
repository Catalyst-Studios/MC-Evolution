
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.custom({
        type: "mekanism:crushing",
        input: {
            count: 1,
            tag: "c:obsidians"
        },
        output: {
            count: 4,
            id: 'eternalores:obsidian_dust'
        }
    })

    console.log("[CatJS] Added Mekanism recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/