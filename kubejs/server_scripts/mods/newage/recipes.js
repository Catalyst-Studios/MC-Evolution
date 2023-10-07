ServerEvents.recipes( event => {
	event.shaped('create_new_age:magnetite_block', ['AAA', 'ABA', 'AAA'], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:flint'
	})
})