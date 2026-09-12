/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:fission")
        .color('#FFE31F5C')
        .name(Component.translatable("catalyst.mmr.machine.fission"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaaaaaaaa","aaaaaaaaa","aaaaaaaaa","aaaaaaaaa","aaaaaaaaa","aaaaaaaaa","aaaaaaaaa","aaaaaaaaa","aaaaaaaaa"],
                ["         "," aagmhaa "," a     a "," c d d c "," e  d  f "," c d d c "," a     a "," aabcbaa ","         "],
                ["         "," accccca "," c     c "," c did c "," c idi c "," c did c "," c     c "," accccca ","         "],
                ["         "," accccca "," c     c "," c d d c "," c  d  c "," c d d c "," c     c "," accccca ","         "],
                ["         "," accccca "," cj   jc "," c did c "," c idi c "," c did c "," cj   jc "," accccca ","         "],
                ["         "," accccca "," c     c "," c d d c "," c  d  c "," c d d c "," c     c "," accccca ","         "],
                ["         "," accccca "," c     c "," c iii c "," c iii c "," c iii c "," c     c "," accccca ","         "],
                ["kaaajaaak","aaaaaaaaa","aacccccaa","aacccccaa","jacccccaj","aacccccaa","aacccccaa","aaaaaaaaa","kaaajaaak"],
                ["         "," aa   aa "," a     a ","         ","         ","         "," a     a "," aa   aa ","         "]
            ])
            .keys({
                "a": [
                    "mekanismgenerators:fission_reactor_casing"
                ],
                "b": [
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:energyoutputhatch',
                    '#modular_machinery_reborn_mekanism:chemicalhatch'
                ],
                "c": [
                    "catalystcore:reinforced_glass"
                ],
                "d": [
                    "mekanismgenerators:fission_fuel_assembly"
                ],
                "e": [
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:energyoutputhatch',
                    '#modular_machinery_reborn_mekanism:chemicalhatch'
                ],
                "f": [
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:energyoutputhatch',
                    '#modular_machinery_reborn_mekanism:chemicalhatch'
                ],
                "g": [
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:energyoutputhatch',
                    '#modular_machinery_reborn_mekanism:chemicalhatch'
                ],
                "h": [
                    '#modular_machinery_reborn:outputbus'
                ],
                "i": [
                    "eternalores:ultimatitanium_block"
                ],
                "j": [
                    "chipped:fancy_sea_lantern"
                ],
                "k": [
                    "eternalores:lead_block"
                ]
            })
        )
        
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/