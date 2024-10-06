/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes( catalyst => {  
 /*dragon prediction*/
  catalyst.recipes.mekanismCombining("64x minecraft:dragon_breath",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ender_dragon"]', "minecraft:dragon_breath" )
  catalyst.recipes.mekanismCombining("64x minecraft:dragon_egg",'64x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ender_dragon"]', "minecraft:dragon_egg" )

 /*blaze prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:blaze_rod",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:blaze"]', "minecraft:blaze_rod" )

 /*chicken prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:chicken",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:chicken"]', "minecraft:chicken" )
 catalyst.recipes.mekanismCombining("48x minecraft:feather",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:chicken"]', "minecraft:feather" )

 /*cod prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:cod",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:cod"]', "minecraft:cod" )
 catalyst.recipes.mekanismCombining("64x minecraft:bone_meal",'32x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:cod"]', "minecraft:bone_meal" )

 /*cow prediction*/
 catalyst.recipes.mekanismCombining("48x minecraft:leather",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:cow"]', "minecraft:leather" )
 catalyst.recipes.mekanismCombining("64x minecraft:beef",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:cow"]', "minecraft:beef" )

 /*creeper prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:gunpowder",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:creeper"]', "minecraft:gunpowder" )
 catalyst.recipes.mekanismCombining("64x minecraft:creeper_head",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:creeper"]', "minecraft:creeper_head" )

 /*drowned prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:rotten_flesh",'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:drowned"]', "minecraft:rotten_flesh" )
 catalyst.recipes.mekanismCombining("64x minecraft:copper_ingot",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:drowned"]', "minecraft:copper_ingot" )

 /*elder_guardian prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:cod",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:cod" )
 catalyst.recipes.mekanismCombining("64x minecraft:salmon",'32x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:salmon" )
 catalyst.recipes.mekanismCombining("64x minecraft:pufferfish",'32x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:pufferfish" )
 catalyst.recipes.mekanismCombining("64x minecraft:tropical_fish",'32x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:tropical_fish" )
 catalyst.recipes.mekanismCombining("64x minecraft:prismarine_crystals",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:prismarine_crystals" )
 catalyst.recipes.mekanismCombining("48x minecraft:prismarine_shard",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:prismarine_shard" )
 catalyst.recipes.mekanismCombining("64x minecraft:wet_sponge",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]', "minecraft:wet_sponge" )


 /*enderman prediction*/
 catalyst.recipes.mekanismCombining("16x minecraft:ender_pearl",'1x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:enderman"]', "minecraft:ender_pearl" )
 catalyst.recipes.mekanismCombining("64x minecraft:end_crystal",'64x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:enderman"]', "minecraft:end_crystal" )
 catalyst.recipes.mekanismCombining("64x evilcraft:ender_tear",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:enderman"]', "evilcraft:ender_tear" )

 /*evoker prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:emerald",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:evoker"]', "minecraft:emerald" )

 /*ghast prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:ghast_tear",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ghast"]', "minecraft:ghast_tear" )
 catalyst.recipes.mekanismCombining("64x minecraft:gunpowder",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ghast"]', "minecraft:gunpowder" )

 /*glow_squid prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:glow_ink_sac",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:glow_squid"]', "minecraft:glow_ink_sac" )

 /*guardian prediction*/
 catalyst.recipes.mekanismCombining("48x minecraft:cod",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:guardian"]', "minecraft:cod" )
 catalyst.recipes.mekanismCombining("64x minecraft:prismarine_crystals",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:guardian"]', "minecraft:prismarine_crystals" )

 /*hoglin prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:porkchop",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:hoglin"]', "minecraft:porkchop" )
 catalyst.recipes.mekanismCombining("64x minecraft:leather",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:hoglin"]', "minecraft:leather" )

 /*iron_golem prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:iron_ingot",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:iron_golem"]', "minecraft:iron_ingot" )
 catalyst.recipes.mekanismCombining("48x minecraft:poppy",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:iron_golem"]', "minecraft:poppy" )

 /*magma_cube prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:magma_cream",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:magma_cube"]', "minecraft:magma_cream," )
 catalyst.recipes.mekanismCombining("64x minecraft:magma_block",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:magma_cube"]', "minecraft:magma_block" )
 catalyst.recipes.mekanismCombining("64x minecraft:pearlescent_froglight",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:magma_cube"]', '64x ae2:magenta_lumen_paint_ball' )
 catalyst.recipes.mekanismCombining("64x minecraft:verdant_froglight",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:magma_cube"]', '64x ae2:lime_lumen_paint_ball' )
 catalyst.recipes.mekanismCombining("64x minecraft:ochre_froglight",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:magma_cube"]', '64x ae2:yellow_lumen_paint_ball' )
 
 /*mooshroom prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:beef",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:mooshroom"]', "minecraft:beef" )
 catalyst.recipes.mekanismCombining("48x minecraft:leather",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:mooshroom"]', "minecraft:leather" )
 catalyst.recipes.mekanismCombining("64x minecraft:red_mushroom",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:mooshroom"]', "minecraft:red_mushroom" )
 catalyst.recipes.mekanismCombining("64x minecraft:brown_mushroom",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:mooshroom"]', "minecraft:brown_mushroom" )

 /*phantom prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:phantom_membrane",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:phantom"]', "minecraft:phantom_membrane" )

 /*pig prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:porkchop",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:pig"]', "minecraft:porkchop" )

 /*polar_bear prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:cod",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:polar_bear"]', "minecraft:cod" )
 catalyst.recipes.mekanismCombining("64x minecraft:salmon",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:polar_bear"]', "minecraft:salmon" )

 /*rabbit prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:rabbit",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:rabbit"]', "minecraft:rabbit" )
 catalyst.recipes.mekanismCombining("64x minecraft:rabbit_hide",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:rabbit"]', "minecraft:rabbit_hide" )
 catalyst.recipes.mekanismCombining("64x minecraft:rabbit_foot",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:rabbit"]', "minecraft:rabbit_foot" )

 /*sheep prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:white_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:white_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:orange_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:orange_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:magenta_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:magenta_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:light_blue_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:light_blue_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:yellow_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:yellow_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:lime_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:lime_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:pink_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:pink_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:gray_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:gray_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:light_gray_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:light_gray_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:cyan_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:cyan_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:purple_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:purple_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:blue_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:blue_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:brown_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:brown_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:green_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:green_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:red_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:red_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:black_wool",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:black_wool" )
 catalyst.recipes.mekanismCombining("64x minecraft:mutton",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:sheep"]', "minecraft:mutton" )
 /*shulker prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:shulker_shell",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:shulker"]', "minecraft:shulker_shell" )
 catalyst.recipes.mekanismCombining("64x minecraft:end_rod",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:shulker"]', "minecraft:end_rod" )

 /*skeleton prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:arrow",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:skeleton"]', "minecraft:arrow" )
 catalyst.recipes.mekanismCombining("48x minecraft:bone",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:skeleton"]', "minecraft:bone" )
 catalyst.recipes.mekanismCombining("64x minecraft:skeleton_skull",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:skeleton"]', "minecraft:skeleton_skull" )

 /*slime prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:slime_ball",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:slime"]', "minecraft:slime_ball" )
 catalyst.recipes.mekanismCombining("64x minecraft:slime_block",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:slime"]', "minecraft:slime_block" )

 /*snow_golem prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:snowball",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:snow_golem"]', "minecraft:snowball" )

 /*spider prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:string",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:spider"]', "minecraft:string" )
 catalyst.recipes.mekanismCombining("64x minecraft:spider_eye",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:spider"]', "minecraft:spider_eye" )
 catalyst.recipes.mekanismCombining("64x minecraft:cobweb",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:spider"]', "minecraft:cobweb" )

 /*squid prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:ink_sac",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:squid"]', "minecraft:ink_sac" )
 

 /*vindicator prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:emerald",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:vindicator"]', "minecraft:emerald" )
 
 /*warden prediction*/
 catalyst.recipes.mekanismCombining("64x apothic_enchanting:warden_tendril",'64x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:warden"]', "apothic_enchanting:warden_tendril" )
 catalyst.recipes.mekanismCombining("64x minecraft:echo_shard",'32x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:warden"]', "minecraft:echo_shard" )

 /*witch prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:redstone",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]', "minecraft:redstone" )
 catalyst.recipes.mekanismCombining("64x minecraft:glowstone_dust",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]', "minecraft:glowstone_dust" )
 catalyst.recipes.mekanismCombining("64x minecraft:sugar",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]', "minecraft:sugar" )
 catalyst.recipes.mekanismCombining("64x minecraft:stick",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]', "minecraft:stick" )
 catalyst.recipes.mekanismCombining("64x minecraft:spider_eye",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]', "minecraft:spider_eye" )
 catalyst.recipes.mekanismCombining("64x minecraft:glass_bottle",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]', "minecraft:glass_bottle" )

 /*wither prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:nether_star",'64x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]', "minecraft:nether_star" )
 catalyst.recipes.mekanismCombining("64x minecraft:wither_rose",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]', "minecraft:poppy" )
 
 /*wither_skeleton prediction*/
 catalyst.recipes.mekanismCombining("64x wstweaks:fragment",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither_skeleton"]', "wstweaks:fragment" )
 catalyst.recipes.mekanismCombining("48x minecraft:bone",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither_skeleton"]', "minecraft:bone" )
 catalyst.recipes.mekanismCombining("64x minecraft:coal",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither_skeleton"]', "minecraft:coal" )
 catalyst.recipes.mekanismCombining("63x minecraft:wither_skeleton_skull",'21x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither_skeleton"]', "minecraft:wither_skeleton_skull" )
 
 /*zombie prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:rotten_flesh",'1x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombie"]', "minecraft:rotten_flesh" )
 catalyst.recipes.mekanismCombining("64x minecraft:iron_ingot",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombie"]', "minecraft:iron_ingot" )
 catalyst.recipes.mekanismCombining("64x minecraft:carrot",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombie"]', "minecraft:carrot" )
 catalyst.recipes.mekanismCombining("64x minecraft:potato",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombie"]', "minecraft:potato" )

 /*zombified_piglin prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:rotten_flesh",'1x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombified_piglin"]', "minecraft:rotten_flesh" )
 catalyst.recipes.mekanismCombining("64x minecraft:gold_ingot",'8x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombified_piglin"]', "minecraft:gold_ingot" )


 /*ars_nouveau*/
 /*wilden prediction*/
 catalyst.recipes.mekanismCombining("64x ars_nouveau:wilden_spike",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ars_nouveau/wilden_mobs"]', "ars_nouveau:wilden_spike" )
 catalyst.recipes.mekanismCombining("64x ars_nouveau:wilden_wing",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ars_nouveau/wilden_mobs"]', "ars_nouveau:wilden_wing" )
 catalyst.recipes.mekanismCombining("64x ars_nouveau:wilden_horn",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ars_nouveau/wilden_mobs"]', "ars_nouveau:wilden_horn" )

 /*twilight_forest*/
 /*alpha yeti prediction*/
 catalyst.recipes.mekanismCombining("64x twilightforest:ice_bomb",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:alpha_yeti"]', "twilightforest:ice_bomb" )
 catalyst.recipes.mekanismCombining("64x twilightforest:alpha_yeti_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:alpha_yeti"]', "twilightforest:alpha_yeti_trophy" )
 catalyst.recipes.mekanismCombining("64x twilightforest:alpha_yeti_fur",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:alpha_yeti"]', "twilightforest:alpha_yeti_fur" )

 /*carminite golem prediction*/
 catalyst.recipes.mekanismCombining("64x twilightforest:towerwood",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/carminite_golem"]', "twilightforest:towerwood" )
 catalyst.recipes.mekanismCombining("64x minecraft:iron_ingot",'1x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/carminite_golem"]', "minecraft:iron_ingot" )

 /*death tome prediction*/
 catalyst.recipes.mekanismCombining("64x minecraft:book",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/death_tome"]', "minecraft:paper" )
 catalyst.recipes.mekanismCombining("64x minecraft:book",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/death_tome"]', "minecraft:book" )
 catalyst.recipes.mekanismCombining("64x twilightforest:magic_map_focus",'64x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/death_tome"]', "twilightforest:magic_map_focus" )

 /*giant*/
 catalyst.recipes.mekanismCombining("64x twilightforest:giant_cobblestone",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/giant"]', "twilightforest:giant_cobblestone" )
 catalyst.recipes.mekanismCombining("64x twilightforest:giant_log",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/giant"]', "twilightforest:giant_log" )
 catalyst.recipes.mekanismCombining("64x twilightforest:giant_leaves",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/giant"]', "twilightforest:giant_leaves" )
 catalyst.recipes.mekanismCombining("64x twilightforest:giant_obsidian",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/giant"]', "twilightforest:giant_obsidian" )

 /*goblin*/
 catalyst.recipes.mekanismCombining("64x twilightforest:armor_shard",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/goblin"]', "twilightforest:armor_shard" )

 /*helmet crab*/
 catalyst.recipes.mekanismCombining("64x twilightforest:armor_shard",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/helmet_crab"]', "twilightforest:armor_shard" )
 catalyst.recipes.mekanismCombining("48x minecraft:cod",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/helmet_crab"]', "minecraft:cod" )

 /*giant*/
 catalyst.recipes.mekanismCombining("64x twilightforest:hydra_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/hydra"]', "twilightforest:hydra_trophy" )
 catalyst.recipes.mekanismCombining("48x twilightforest:hydra_chop",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/hydra"]', "twilightforest:hydra_chop" )
 catalyst.recipes.mekanismCombining("64x twilightforest:fiery_blood",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/hydra"]', "twilightforest:fiery_blood" )

 /*lich*/
 catalyst.recipes.mekanismCombining("64x twilightforest:lich_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/lich"]', "twilightforest:lich_trophy" )

 /*minoshroom*/
 catalyst.recipes.mekanismCombining("64x twilightforest:meef_stroganoff",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/minoshroom"]', "twilightforest:meef_stroganoff" )
 catalyst.recipes.mekanismCombining("64x twilightforest:minoshroom_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/minoshroom"]', "twilightforest:minoshroom_trophy" )

 /*minotaur*/
  catalyst.recipes.mekanismCombining("64x twilightforest:raw_meef",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/minotaur"]', "twilightforest:raw_meef" )
  catalyst.recipes.mekanismCombining("64x twilightforest:maze_map_focus",'64x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/minotaur"]', "twilightforest:maze_map_focus" )

 /*naga*/
 catalyst.recipes.mekanismCombining("64x twilightforest:naga_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/naga"]', "twilightforest:naga_trophy" )
 catalyst.recipes.mekanismCombining("64x twilightforest:naga_scale",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/naga"]', "twilightforest:naga_scale" )

  /*raven*/
  catalyst.recipes.mekanismCombining("64x twilightforest:raven_feather",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/raven"]', "twilightforest:raven_feather" )

 /*snow queen*/
 catalyst.recipes.mekanismCombining("64x minecraft:snowball", '2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/snow_queen"]', "minecraft:snowball" )
 catalyst.recipes.mekanismCombining("48x minecraft:packed_ice",'2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/snow_queen"]', "minecraft:packed_ice" )
 catalyst.recipes.mekanismCombining("64x twilightforest:snow_queen_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/snow_queen"]', "twilightforest:snow_queen_trophy" )

 /*ur ghast*/
 catalyst.recipes.mekanismCombining("64x twilightforest:carminite", '2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/ur_ghast"]', "twilightforest:carminite" )
 catalyst.recipes.mekanismCombining("64x twilightforest:fiery_tears",'4x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/ur_ghast"]', "twilightforest:fiery_tears" )
 catalyst.recipes.mekanismCombining("64x twilightforest:ur_ghast_trophy",'16x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/ur_ghast"]', "twilightforest:ur_ghast_trophy" )
 
 /*yeti*/
 catalyst.recipes.mekanismCombining("64x twilightforest:arctic_fur", '2x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/yeti"]', "twilightforest:arctic_fur" )

 /*mobs not added
twilight deer
twilight fire beetle
twilight kobold
twilight redcap
twilight stable ice core
twilight troll
twilight winter wolf
twilight wraith
twilight druid skeleton
twilight towerwood borer
*/
})

/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

