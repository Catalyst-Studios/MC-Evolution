ServerEvents.recipes( event => {
// Action sheet
	event.shapeless(
		Item.of('action_packed:action_sheet'),
		[
			'#forge:tools/hammers',
			'2x action_packed:action_ingot'
		])

// Action ingot
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {
		  amount: 160,
		  tag: 'mekanism:refined_obsidian'
		},
		itemInput:{
		  ingredient: {
			item: 'action_packed:action_dust'
		  }
		},
		output:{
		  item: 'action_packed:action_ingot'
		}
	  });

// Action dust - prob redo this later tbh
	  event.custom({
		type: 'powah:energizing',
		ingredients: [
			Ingredient.of('minecraft:netherite_block'),
			Ingredient.of('minecraft:nether_star'),
			Ingredient.of('minecraft:lapis_block')
		],
		energy: '50000',
		result: Item.of('action_packed:action_dust')
	  })
// Action Dust infusion (though I don't really like it...too cheap)
/*	  event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {
			amount: 240,
			tag: 'mekanism:redstone'
		},
		itemInput: {
			ingredient: {
				item: 'minecraft:lapis_lazuli'
			}
		},
		output: {
			item: 'action_packed:action_dust'
		}
	  })
*/

// Armors
	  event.shaped(
		Item.of('action_packed:aps_armor_helmet'),
		[
			'AAA',
			'A A',
			'   '
		],
		{
			A: 'action_packed:action_sheet'
		}
	  )
	  event.shaped(
		Item.of('action_packed:aps_armor_chestplate'),
		[
			'A A',
			'AAA',
			'AAA'
		],
		{
			A: 'action_packed:action_sheet'
		}
	  )
	  event.shaped(
		Item.of('action_packed:aps_armor_leggings'),
		[
			'AAA',
			'A A',
			'A A'
		],
		{
			A: 'action_packed:action_sheet'
		}
	  )
	  event.shaped(
		Item.of('action_packed:aps_armor_boots'),
		[
			'   ',
			'A A',
			'A A'
		],
		{
			A: 'action_packed:action_sheet'
		}
	  )

})