
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:miner")
        .color('#ffe69986')
        .name(Component.translatable("catalyst.mmr.machine.miner"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["             ","             ","             ","             ","             ","     aa      ","      aa     ","       aa    ","             ","             ","             ","             ","             "],
                ["bbb       bbb","bcddddmddddcb","bdb       bdb"," d    ge   d "," d    g    d "," d   ee    d "," d   efeg  d "," d   eee   d "," d  ee     d "," d         d ","bdb       bdb","bcdddddddddcb","bbb       bbb"],
                ["             "," h         h ","             ","             ","             ","             ","      i      ","             ","             ","             ","             "," h         h ","             "],
                ["             "," h         h ","             ","             ","             ","             ","      i      ","             ","             ","             ","             "," h         h ","             "],
                ["             "," h         h ","             ","             ","             ","             ","      i      ","             ","             ","             ","             "," h         h ","             "],
                ["             "," h         h ","             ","             ","      s      ","     hrh     ","    lnopq    ","     hkh     ","      j      ","             ","             "," h         h ","             "],
                ["             "," h         h ","             ","             ","      t      ","             ","    t   t    ","             ","      t      ","             ","             "," h         h ","             "],
                ["             "," bb       bb "," bh       hb ","   uh   hu   ","   hvvAvvh   ","    v   v    ","    x y z    ","    v   v    ","   hvvwvvh   ","   uh   hu   "," bh       hb "," bb       bb ","             "],
                ["             ","             ","  bhu   uhb  ","  hhh   hhh  ","  uhb   bhu  ","             ","      y      ","             ","  uhb   bhu  ","  hhh   hhh  ","  bhu   uhb  ","             ","             "],
                ["             ","             ","             ","   h     h   ","             ","     uuu     ","     uyu     ","     uuu     ","             ","   h     h   ","             ","             ","             "],
                ["             ","             ","             ","   b     b   ","   h     h   ","   hu   uh   ","   bccbccb   ","   hu   uh   ","   h     h   ","   b     b   ","             ","             ","             "]
            ])
            .keys({
                "a": [
                    "minecraft:iron_ore"
                ],
                "b": [
                    "minecraft:deepslate_brick_slab[type=bottom]"
                ],
                "c": [
                    "minecraft:deepslate_bricks"
                ],
                "d": [
                    "modular_machinery_reborn:casing_plain",
                    '#modular_machinery_reborn:energyinputhatch',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus',
                    'modular_machinery_reborn:dimensional_detector',
                    '#modular_machinery_reborn:parallelhatch',
                    'eternalores:pig_iron_block'
                ],
                "e": [
                    "minecraft:cobbled_deepslate_slab[type=bottom]"
                ],
                "f": [
                    "create:cut_scorchia_wall"
                ],
                "g": [
                    "minecraft:cobbled_deepslate_slab[type=double]"
                ],
                "h": [
                    'ae2:sky_stone_block'
                ],
                "i": [
                    "ae2:sky_stone_wall"
                ],
                "j": [
                    "powah:energy_cable_blazing"
                ],
                "k": [
                    "create_new_age:basic_motor"
                ],
                "l": [
                    "powah:energy_cable_blazing"
                ],
                "n": [
                    "create_new_age:basic_motor"
                ],
                "o": [
                    "industrialforegoing:ore_laser_base"
                ],
                "p": [
                    "create_new_age:basic_motor"
                ],
                "q": [
                    "powah:energy_cable_blazing"
                ],
                "r": [
                    "create_new_age:basic_motor"
                ],
                "s": [
                    "powah:energy_cable_blazing"
                ],
                "t": [
                    "powah:energy_cable_blazing"
                ],
                "u": [
                    "minecraft:deepslate_brick_slab[type=top]"
                ],
                "v": [
                    "immersiveengineering:coil_hv"
                ],
                "w": [
                    "industrialforegoing:laser_drill"
                ],
                "x": [
                    "industrialforegoing:laser_drill"
                ],
                "y": [
                    "eternalores:pig_iron_block"
                ],
                "z": [
                    "industrialforegoing:laser_drill"
                ],
                "A": [
                    "industrialforegoing:laser_drill"
                ]
            })
        )

})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/