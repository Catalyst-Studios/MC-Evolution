/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:hourglass")
        .color('#FF7658d0')
        .name(Component.translatable("catalyst.mmr.machine.hourglass"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["     a     ","    aaa    ","  bcaaacb  ","  cdefedc  "," aaeghgeaa ","aaafhmhfaaa"," aaeghgeaa ","  cdefedc  ","  bcaaacb  ","    aaa    ","     a     "],
                ["     i     ","           ","  j  k  j  ","           ","    e e    ","i k     k i","    e e    ","           ","  j  k  j  ","           ","     i     "],
                ["           ","           ","  l     l  ","           ","           ","     e     ","           ","           ","  l     l  ","           ","           "],
                ["           ","           ","  n     n  ","           ","    ooo    ","    ogo    ","    ooo    ","           ","  n     n  ","           ","           "],
                ["           ","           ","           ","    ooo    ","   o   o   ","   o   o   ","   o   o   ","    ooo    ","           ","           ","           "],
                ["           ","           ","  g     g  ","    ooo    ","   o   o   ","   o   o   ","   o   o   ","    ooo    ","  g     g  ","           ","           "],
                ["           ","           ","           ","    ooo    ","   o   o   ","   o   o   ","   o   o   ","    ooo    ","           ","           ","           "],
                ["           ","           ","  n     n  ","           ","    ooo    ","    ogo    ","    ooo    ","           ","  n     n  ","           ","           "],
                ["           ","           ","  l     l  ","           ","           ","     e     ","           ","           ","  l     l  ","           ","           "],
                ["     i     ","           ","  j  k  j  ","           ","    e e    ","i k     k i","    e e    ","           ","  j  k  j  ","           ","     i     "],
                ["     a     ","    aaa    ","  bcaaacb  ","  chefehc  "," aaegdgeaa ","aaafdkdfaaa"," aaegdgeaa ","  chefehc  ","  bcaaacb  ","    aaa    ","     a     "]
            ])
            .keys({
                "a": [
                    "eternalores:onyx_block"
                ],
                "b": [
                    "eternalores:osmium_block"
                ],
                "c": [
                    "eternalores:platinum_block"
                ],
                "d": [
                    "eternalores:eternal_dark_block"
                ],
                "e": [
                    "eternalores:gallium_block"
                ],
                "f": [
                    "chipped:reinforced_sea_lantern"
                ],
                "g": [
                    "eternalores:tanzanite_block"
                ],
                "h": [
                    "eternalores:eternal_light_block"
                ],
                "i": [
                    "eternalores:nethersteel_block"
                ],
                "j": [
                    "eternalores:britannia_silver_block"
                ],
                "k": [
                    "modular_machinery_reborn:casing_reinforced"
                ],
                "l": [
                    "modular_machinery_reborn:casing_plain",
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:fluidinputhatch',
                    '#modular_machinery_reborn:energyinputhatch',
                    "#modular_machinery_reborn:parallelhatch"
                ],
                "n": [
                    "ars_additions:sourcestone_wall"
                ],
                "o": [
                    "catalystcore:reinforced_glass"
                ]
            })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/