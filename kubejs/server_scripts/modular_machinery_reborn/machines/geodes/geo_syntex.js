/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:geo_syntex")
        .color('#fffff9f9')
        .name(Component.translatable("catalyst.mmr.machine.geo_synthesizer"))
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["afhmgfa", "bcdddcb", "bddeddb", "bdeeedb", "bddeddb", "bcdddcb", "abbbbba"],
                    ["icdddci", "cj   jc", "d     d", "d     d", "d     d", "cj   jc", "icdddci"],
                    ["iddeddi", "d     d", "d     d", "e  k  e", "d     d", "d     d", "iddeddi"],
                    ["ideeedi", "d     d", "e  k  e", "n kpk n", "e  k  e", "d     d", "ideeedi"],
                    ["iddeddi", "d     d", "d     d", "e  k  e", "d     d", "d     d", "iddeddi"],
                    ["icdddci", "cj   jc", "d     d", "d     d", "d     d", "cj   jc", "icdddci"],
                    ["abbbbba", "bcdddcb", "bddeddb", "bdeeedb", "bddeddb", "bcdddcb", "abbbbba"]
                ])
                .keys({
                    "i": ["rechiseled:quartz_block_chiseled_pillar_connecting"],
                    "b": ["rechiseled:quartz_block_rows_connecting"],
                    "j": ["ae2:quartz_vibrant_glass"],
                    "d": ["chisel:steelframe/glass"],
                    "c": ["modular_machinery_reborn:casing_plain"],
                    "a": ["modular_machinery_reborn:casing_reinforced"],
                    "n": ["modular_machinery_reborn:casing_circuitry"],
                    "f": ["#modular_machinery_reborn:inputbus"],
                    "g": ["#modular_machinery_reborn:energyinputhatch"],
                    "h": ["#modular_machinery_reborn:outputbus"],
                    "e": [
                        "#catalyst:budding_storages"
                    ],
                    "p": [
                        "#catalyst:budding_blocks"
                    ],
                    "k": [
                        "#catalyst:clusters"
                    ]
                })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

