ServerEvents.recipes( event => {
    event.shaped(
        Item.of('ae2:sky_stone_block'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:smooth_stone',
            B: 'ae2:quartz_block'
        }
    )
})