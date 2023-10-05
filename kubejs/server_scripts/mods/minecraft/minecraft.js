ServerEvents.recipes( event => {
    event.shaped('4x minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:logs'
    })
    event.shaped('minecraft:hopper', ['IAI', 'IAI', ' I '], {
        A: '#minecraft:logs',
        I: 'minecraft:iron_ingot'
    })
})