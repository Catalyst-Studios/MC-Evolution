
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes(catalyst => {

    let clusterMapping = {
        'pastel:topaz_block': 'pastel:topaz_shard',
        'pastel:citrine_block': 'pastel:citrine_shard',
        'pastel:onyx_block': 'pastel:onyx_shard',
        'pastel:moonstone_block': 'pastel:moonstone_shard',

        'geore:coal_block': 'geore:coal_shard',
        'geore:copper_block': 'geore:copper_shard',
        'geore:diamond_block': 'geore:diamond_shard',
        'geore:emerald_block': 'geore:emerald_shard',
        'geore:gold_block': 'geore:gold_shard',
        'geore:iron_block': 'geore:iron_shard',
        'geore:lapis_block': 'geore:lapis_shard',
        'geore:quartz_block': 'geore:quartz_shard',
        'geore:redstone_block': 'geore:redstone_shard',
        'geore:ancient_debris_block': 'geore:ancient_debris_shard',
        'geore:ruby_block': 'geore:ruby_shard',
        'geore:sapphire_block': 'geore:sapphire_shard',
        'geore:topaz_block': 'geore:topaz_shard',
        'geore:zinc_block': 'geore:zinc_shard',
        'geore:uraninite_block': 'geore:uraninite_shard',
        'geore:black_quartz_block': 'geore:black_quartz_shard',
        'geore:monazite_block': 'geore:monazite_shard',
        'geore:aluminum_block': 'geore:aluminum_shard',
        'geore:lead_block': 'geore:lead_shard',
        'geore:nickel_block': 'geore:nickel_shard',
        'geore:osmium_block': 'geore:osmium_shard',
        'geore:platinum_block': 'geore:platinum_shard',
        'geore:silver_block': 'geore:silver_shard',
        'geore:tin_block': 'geore:tin_shard',
        'geore:tungsten_block': 'geore:tungsten_shard',
        'geore:uranium_block': 'geore:uranium_shard',

        'pastel:bismuth_block': 'pastel:bismuth_crystal',
        'pastel:malachite_block': 'pastel:pure_malachite',
        'pastel:azurite_block': 'pastel:pure_azurite',
        'pastel:bloodstone_block': 'pastel:pure_bloodstone',
        'pastel:coal_block': 'pastel:pure_coal',
        'pastel:copper_block': 'pastel:pure_copper',
        'pastel:iron_block': 'pastel:pure_iron',
        'pastel:gold_block': 'pastel:pure_gold',
        'pastel:lapis_block': 'pastel:pure_lapis',
        'pastel:redstone_block': 'pastel:pure_redstone',
        'pastel:diamond_block': 'pastel:pure_diamond',
        'pastel:emerald_block': 'pastel:pure_emerald',
        'pastel:prismarine_block': 'pastel:pure_prismarine',
        'pastel:quartz_block': 'pastel:pure_quartz',
        'pastel:glowstone_block': 'pastel:pure_glowstone',
        'pastel:zinc_block': 'pastel:pure_zinc',
        'pastel:netherite_scrap_block': 'pastel:pure_netherite_scrap',
        'pastel:echo_block': 'pastel:pure_echo',
        'pastel:pure_echo': 'minecraft:echo_shard'
    };


    Ingredient.of('#catalyst:budding_storages').getItemIds().forEach(inputId => {
        let outputId = clusterMapping[inputId];
        if(outputId)
        {
            catalyst.shapeless(Item.of(outputId, 4), inputId).id(`catalyst:buds/${inputId.replace(":", "_")}`);
        }
    });

    console.log("[CatJS] Added some budding storage recipes")
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/