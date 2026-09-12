/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:primitive_alloy")
        .color('#ff5d4737')
        .name(Component.translatable("catalyst.mmr.machine.primitive_alloy_maker"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["bba", "bba", "bba"],
                ["bma", "dca", "bba"],
                ["eje", "ihg", "efe"]
            ])
            .keys({
                "a": [
                    "modular_machinery_reborn:inputbus_tiny",
                    "minecraft:mud_bricks"
                ],
                "b": ["minecraft:mud_bricks"],
                "c": ["minecraft:campfire"],
                "d": ["modular_machinery_reborn:outputbus_tiny"],
                "e": ["minecraft:mud_brick_slab[type=bottom]"],
                "f": ["minecraft:mud_brick_stairs"],
                "g": ["minecraft:mud_brick_stairs"],
                "h": ["minecraft:iron_trapdoor[half=top,open=false]"],
                "i": ["minecraft:mud_brick_stairs"],
                "j": ["minecraft:mud_brick_stairs"]
            })
        )
        .texture("modular_machinery_reborn:item_input_bus_tiny",
                false,
                null,
                "catalyst:block/mud_brick_tiny_input_bus"
        )
        .texture("modular_machinery_reborn:item_output_bus_tiny",
                false,
                null,
                "catalyst:block/mud_brick_tiny_input_bus"
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/