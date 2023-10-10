ServerEvents.recipes( event => {
	event.shapeless(
		Item.of('createaddition:zinc_sheet'),
		[
			'#forge:tools/hammers',
			'#forge:ingots/zinc'
		])
	event.shapeless(
		Item.of('create:brass_sheet'),
		[
			'#forge:tools/hammers',
			'#forge:ingots/brass'
		])
})