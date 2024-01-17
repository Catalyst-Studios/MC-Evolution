WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "railcraft:lead_ore",
      "railcraft:deepslate_lead_ore",
      "railcraft:tin_ore",
      "railcraft:deepslate_tin_ore",
      "railcraft:zinc_ore",
      "railcraft:deepslate_zinc_ore",
      "railcraft:nickel_ore",
      "railcraft:deepslate_nickel_ore",
      "railcraft:sulfur_ore",
      "railcraft:deepslate_sulfur_ore",
      "railcraft:silver_ore",
      "railcraft:deepslate_silver_ore",
      "immersiveengineering:ore_nickel",
      "immersiveengineering:deepslate_ore_nickel"
      ]
    })
})