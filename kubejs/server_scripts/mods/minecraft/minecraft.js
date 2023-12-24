ServerEvents.recipes((event) => {
  // 8x logs -> 4x chests through shaped crafting
  event.shaped("4x minecraft:chest", ["XXX", "X X", "XXX"], {
    X: "#minecraft:logs",
  });
  // 2x logs and 5x Iron Ingots -> 1x hopper through shaped crafting
  event.shaped("minecraft:hopper", ["TXT", "TXT", " T "], {
    T: "#forge:ingots/iron",
    X: "#minecraft:logs",
  });
  // 2x slabs -> 1x plank through shaped crafting
  event.forEachRecipe(
    { type: "minecraft:crafting_shaped", output: "#minecraft:slabs" },
    (r) => {
      let ingredients = r.originalRecipeIngredients; // returns a List<Ingredient>
      let output = r.originalRecipeResult; // returns an ItemStack
      event.shaped(ingredients[0], ["S", "S"], { S: output });
    }
  );
  // 1x stair -> 1x plank through stonecutting
  event.forEachRecipe(
    { type: "minecraft:stonecutting", output: "#minecraft:stairs" },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      event.stonecutting(ingredients[0], output);
    }
  );
});