ItemEvents.modifyTooltips(catalyst => {

    catalyst.add('create:limestone', Component.translatable("catalyst.create.limestone"))
    catalyst.add('create:scoria', Component.translatable("catalyst.create.scoria"))

    console.log("[CatJS] Added tooltip to Create items")
});