ServerEvents.recipes( event => {

// Fluix Blocks	
	event.custom({
		type: 'powah:energizing',
		ingredients: [
			Ingredient.of('ae2:quartz_block'),
			Ingredient.of('minecraft:redstone'),
			Ingredient.of('minecraft:redstone'),
			Ingredient.of('minecraft:redstone'),
			Ingredient.of('minecraft:redstone'),
			Ingredient.of('minecraft:quartz_block')
		],
		energy: '10000',
		result: Item.of('2x ae2:fluix_block')
	}).id(`kubejs:energizing/fluix_block`)

// Energized Steel Block
	 event.custom({
		type: 'powah:energizing',
		ingredients: [
			Ingredient.of('minecraft:iron_block'),
			Ingredient.of('minecraft:gold_block')
		],
		energy: '90000',
		result: Item.of('powah:energized_steel_block')
	}).id(`kubejs:energizing/energized_steel_block`)

// Niotic Crystal Block
	event.custom({
		type: 'powah:energizing',
		ingredients: [
			Ingredient.of('minecraft:diamond_block')
		],
		energy: '2700000',
		result: Item.of('powah:niotic_crystal_block')
	}).id(`kubejs:energizing/niotic_crystal_block`)

// Spirited Crystal Block
	event.custom({
		type: 'powah:energizing',
		ingredients: [
			Ingredient.of('minecraft:emerald_block')
		],
		energy: '9000000',
		result: Item.of('powah:spirited_crystal_block')
	}).id(`kubejs:energizing/spirited_crystal_block`)
})