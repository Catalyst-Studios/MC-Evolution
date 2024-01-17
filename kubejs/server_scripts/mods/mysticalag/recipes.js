ServerEvents.recipes(event => {
    event.remove('mysticalagriculture:inferium_seeds')
    event.shaped('mysticalagriculture:inferium_seeds', ['AAA','ABA','AAA'], {
        A: 'mysticalagriculture:inferium_block',
        B: 'minecraft:wheat_seeds'
    })
})