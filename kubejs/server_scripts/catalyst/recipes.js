/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

ServerEvents.recipes( catalyst => {
	catalyst.shapeless(
		Item.of('catalyst:tiny_coal', 8),
		[
			'minecraft:coal'
		])
	catalyst.shapeless(
		Item.of('catalyst:tiny_charcoal', 8),
		[
			'minecraft:charcoal'
		])
	catalyst.shapeless(
		Item.of('minecraft:coal', 1),
		[
			'8x catalyst:tiny_coal'
		])
	catalyst.shapeless(
		Item.of('minecraft:charcoal', 1),
		[
			'8x catalyst:tiny_charcoal'
		])
})

/* 
This script is property of Catalyst Studios for use in the modpack Evolution. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/