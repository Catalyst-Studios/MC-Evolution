/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of("modular_machinery_reborn:inputbus_tiny"),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: "minecraft:mud_bricks",
            A: "minecraft:bricks",
            C: "minecraft:chest"
        }
    ).id(`catalyst:mmr/ports/tiny_input_bus`);

    catalyst.shaped(Item.of("modular_machinery_reborn:outputbus_tiny"),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: "minecraft:mud_bricks",
            B: "minecraft:bricks",
            C: "minecraft:chest"
        }
    ).id(`catalyst:mmr/ports/tiny_output_bus`);

    // Second tier
    catalyst.shaped(Item.of('modular_machinery_reborn:inputbus_small'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_biosteel',
            B: 'eternalores:plate_cast_iron',
            C: 'eternalores:biosteel_foil',
            D: 'eternalores:biosteel_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:inputbus_tiny'
        }
    ).id(`catalyst:mmr/ports/small_input_bus`);

    catalyst.shaped(Item.of('modular_machinery_reborn:outputbus_small'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_cast_iron',
            B: 'eternalores:plate_biosteel',
            C: 'eternalores:biosteel_foil',
            D: 'eternalores:biosteel_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:outputbus_tiny'
        }
    ).id(`catalyst:mmr/ports/small_output_bus`);

    // Third tier
    catalyst.shaped(Item.of('modular_machinery_reborn:inputbus_normal'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'energizedpower:energized_copper_plate',
            B: 'eternalores:plate_lumium',
            C: 'eternalores:netherite_foil',
            D: 'eternalores:netherite_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:inputbus_small'
        }
    ).id(`catalyst:mmr/ports/normal_input_bus`);

    catalyst.shaped(Item.of('modular_machinery_reborn:outputbus_normal'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_lumium',
            B: 'energizedpower:energized_copper_plate',
            C: 'eternalores:netherite_foil',
            D: 'eternalores:netherite_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:outputbus_small'
        }
    ).id(`catalyst:mmr/ports/normal_output_bus`);

    // Fourth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:inputbus_reinforced'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_titanium',
            B: 'eternalores:plate_nethersteel',
            C: 'eternalores:cast_steel_foil',
            D: 'eternalores:cast_steel_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:inputbus_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_input_bus`);

    catalyst.shaped(Item.of('modular_machinery_reborn:outputbus_reinforced'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_nethersteel',
            B: 'eternalores:plate_titanium',
            C: 'eternalores:cast_steel_foil',
            D: 'eternalores:cast_steel_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:outputbus_normal'
        }
    ).id(`catalyst:mmr/ports/reinforced_output_bus`);

    // Fifth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:inputbus_big'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_tungsten',
            B: 'eternalores:plate_uraninite',
            C: 'eternalores:iridium_foil',
            D: 'eternalores:iridium_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:inputbus_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_input_bus`);

    catalyst.shaped(Item.of('modular_machinery_reborn:outputbus_big'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_uraninite',
            B: 'eternalores:plate_tungsten',
            C: 'eternalores:iridium_foil',
            D: 'eternalores:iridium_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:outputbus_reinforced'
        }
    ).id(`catalyst:mmr/ports/big_output_bus`);

    // Sixth tier
    catalyst.shaped(Item.of('modular_machinery_reborn:inputbus_huge'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:plate_eternal_dark',
            B: 'eternalores:plate_eternal_light',
            C: 'eternalores:plutonium_foil',
            D: 'eternalores:plutonium_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:inputbus_big'
        }
    ).id(`catalyst:mmr/ports/huge_input_bus`);

    catalyst.shaped(Item.of('modular_machinery_reborn:outputbus_huge'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_eternal_light',
            B: 'eternalores:plate_eternal_dark',
            C: 'eternalores:plutonium_foil',
            D: 'eternalores:plutonium_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:outputbus_big'
        }
    ).id(`catalyst:mmr/ports/huge_output_bus`);

    // Seventh tier
    catalyst.shaped(Item.of('modular_machinery_reborn:inputbus_ludicrous'),
        [
            'BCB',
            'FEF',
            'ADA'
        ],
        {
            A: 'eternalores:modularium_ingot',
            B: 'eternalores:plate_shadowsteel',
            C: 'eternalores:ultimatitanium_foil',
            D: 'eternalores:ultimatitanium_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:inputbus_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_input_bus`);

    catalyst.shaped(Item.of('modular_machinery_reborn:outputbus_ludicrous'),
        [
            'BDB',
            'FEF',
            'ACA'
        ],
        {
            A: 'eternalores:plate_shadowsteel',
            B: 'eternalores:modularium_ingot',
            C: 'eternalores:ultimatitanium_foil',
            D: 'eternalores:ultimatitanium_foil',
            E: 'minecraft:chest',
            F: 'modular_machinery_reborn:outputbus_huge'
        }
    ).id(`catalyst:mmr/ports/ludicrous_output_bus`);
})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/