/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    /**
     * Creates a machine with the given ResourceLocation (namespace:machine) equivalent to the json -> datapackNamespace:jsonName
     */
    catalyst.create("mmr:macerator")
        /**
         * Applies the color to the machine with the format:
         * #AlphaAlphaRedRedGreenGreenBlueBlue
         * color in int number format
         */
        .color('#fff08411')
        /**
         * The name that the machine should display in the controller item and in the controller GUI -> default localized with the id of the creation
         */
        .name(Component.translatable("catalyst.mmr.machine.macerator"))
        /**
         * The multiblock definition
         */
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa","aba","aaa"],
                ["cmc","efe","cdc"],
                ["cdc","h h","cgc"],
                ["iii","jfj","iii"],
                ["iki","ili","iki"]
            ])
            .keys({
                "a": [
                    "chipped:ancient_waxed_oxidized_copper"
                ],
                "b": [
                    "#modular_machinery_reborn:outputbus"
                ],
                "c": [
                    "eternalores:quartz_enriched_copper_block"
                ],
                "d": [
                    "chipped:barbed_iron_bars"
                ],
                "e": [
                    "rechiseled:copper_block_bars_slab_connecting[type=bottom]"
                ],
                "f": [
                    "create:chute"
                ],
                "g": [
                    "create:encased_fan"
                ],
                "h": [
                    "create:crushing_wheel[axis=z]"
                ],
                "i": [
                    "minecraft:oxidized_copper_grate"
                ],
                "j": [
                    "chipped:piked_iron_bars[east=false,north=true,south=true,west=false]"
                ],
                "k": [
                    "chipped:pressed_waxed_oxidized_copper",
                    "#modular_machinery_reborn:parallelhatch",
                    "#modular_machinery_reborn:energyinputhatch"
                ],
                "l": [
                    "#modular_machinery_reborn:inputbus"
                ]
            })
        )
});
/*
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/