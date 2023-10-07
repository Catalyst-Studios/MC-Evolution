ServerEvents.recipes( event => {
	event.shapeless(
		Item.of('kubejs:tiny_coal', 8),
		[
			'minecraft:coal'
		])
	event.shapeless(
		Item.of('kubejs:tiny_charcoal', 8),
		[
			'minecraft:charcoal'
		])
	event.shapeless(
		Item.of('minecraft:coal', 1),
		[
			'8x kubejs:tiny_coal'
		])
	event.shapeless(
		Item.of('minecraft:charcoal', 1),
		[
			'8x kubejs:tiny_charcoal'
		])
})