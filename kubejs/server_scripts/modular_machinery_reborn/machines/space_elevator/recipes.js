/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
ServerEvents.recipes(catalyst => {

    const energy_x = 4;
    const energy_y = 9;
    const input_x = 25;
    const input_y1 = 8;
    const input_y2 = 29;
    const input_y3 = 50;
    const output_x = 83;
    const arrow_x = 51;
    const arrow_y = 29;

    const width = 110;
    const height = 76;

    const plutonium_counts = [1, 2, 3, 4, 5, 9];
    const durations = [600, 500, 400, 300, 200, 75];
    const total_energy = 1000000000;

    const first_group = [
        { input: 'replication:replica_ingot', output: 'eternalores:cosmic_matter_nugget' },
        { input: 'replication:replica_block', output: 'eternalores:cosmic_matter_ingot' },
        { input: 'eternalores:compressed_replica_block_1x', output: 'eternalores:cosmic_matter_block' }
    ];
    const dust_first = 'eternalores:stellarium_small_dust';

    const second_group = [
        { input: 'eternalores:etherium_ingot', output: 'eternalores:stellarium_ingot' },
        { input: 'eternalores:etherium_block', output: 'eternalores:stellarium_block' }
    ];
    const dust_second = 'eternalores:cosmic_matter_small_dust';

    let create_recipe = (input_item, output_item, dust_item, plutonium_count, duration, has_dust, priority) => {
        const energy_per_tick = Math.floor(total_energy / duration);
        const id_base = `catalyst:mmr/space/${input_item.replace(/:/g, '_')}_${plutonium_count}`;
        const id = has_dust ? `${id_base}_with_dust` : id_base;

        let recipe = catalyst.recipes.modular_machinery_reborn.machine_recipe("mmr:space", duration)
            .progressData(ProgressData.create().x(arrow_x).y(arrow_y))
            .width(width)
            .height(height)
            .requireEnergyPerTick(energy_per_tick, energy_x, energy_y)
            .requireItem(Item.of('eternalores:plutonium_block', plutonium_count), input_x, input_y1)
            .requireItem(Item.of(input_item, 1), input_x, input_y2)
            .produceItem(Item.of(output_item, 1), output_x, input_y2);

        if(has_dust)
        {
            recipe = recipe.requireItem(Item.of(dust_item, 5), input_x, input_y3)
                .produceItem(Item.of('eternalores:plutonium_block', 1), 0.5, output_x, input_y1)
                .produceItem(Item.of(input_item, 1), 0.3, output_x, input_y3);
        }

        recipe.priority(priority).id(id);
    };

    let recipe_specs = [];

    first_group.forEach(item => {
        let input = item.input;
        let output = item.output;
        plutonium_counts.forEach((count, idx) => {
            let duration = durations[idx];
            recipe_specs.push({
                input: input,
                output: output,
                dust: dust_first,
                count: count,
                duration: duration,
                has_dust: true
            });

            recipe_specs.push({
                input: input,
                output: output,
                dust: dust_first,
                count: count,
                duration: duration,
                has_dust: false
            });
        });
    });

    second_group.forEach(item => {
        let input = item.input;
        let output = item.output;
        plutonium_counts.forEach((count, idx) => {
            let duration = durations[idx];
            recipe_specs.push({
                input: input,
                output: output,
                dust: dust_second,
                count: count,
                duration: duration,
                has_dust: true
            });
            
            recipe_specs.push({
                input: input,
                output: output,
                dust: dust_second,
                count: count,
                duration: duration,
                has_dust: false
            });
        });
    });

    recipe_specs.sort((a, b) => {
        if(a.has_dust !== b.has_dust)
        {
            return a.has_dust ? -1 : 1;
        }
        return b.count - a.count;
    });

    let total = recipe_specs.length;
    recipe_specs.forEach((spec, index) => {
        let priority = total - index;
        create_recipe(
            spec.input,
            spec.output,
            spec.dust,
            spec.count,
            spec.duration,
            spec.has_dust,
            priority
        );
    });

    console.log("[CatJS] Added Space Elevator recipes");
});

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/