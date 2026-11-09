const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== BREAD RECIPE MENU =====");
console.log("Available Breads:");
console.log("1. Pandesal");
console.log("2. Spanish Bread");
console.log("3. Banana Bread");
console.log("4. Garlic Bread");
console.log("5. Cinnamon Bread");

input.question("\nEnter the name of the bread: ", function(bread) {

    console.log("\n===== BREAD RECIPE =====");

    if (bread.toLowerCase() === "pandesal") {
        console.log("Bread: Pandesal");
        console.log("Ingredients: Flour, yeast, sugar, salt, milk, butter, egg");
        console.log("Instructions: Mix ingredients, knead the dough, let it rise, shape into small rolls, coat with breadcrumbs, and bake.");

    } else if (bread.toLowerCase() === "spanish bread") {
        console.log("Bread: Spanish Bread");
        console.log("Ingredients: Flour, yeast, sugar, milk, butter, egg, breadcrumbs");
        console.log("Instructions: Prepare the dough, let it rise, add sweet butter filling, roll, coat with breadcrumbs, and bake.");

    } else if (bread.toLowerCase() === "banana bread") {
        console.log("Bread: Banana Bread");
        console.log("Ingredients: Banana, flour, sugar, egg, butter, baking soda");
        console.log("Instructions: Mash bananas, mix all ingredients, pour into a baking pan, and bake.");

    } else if (bread.toLowerCase() === "garlic bread") {
        console.log("Bread: Garlic Bread");
        console.log("Ingredients: Bread, butter, garlic, parsley, cheese");
        console.log("Instructions: Mix butter and garlic, spread on bread, add parsley and cheese, then bake.");

    } else if (bread.toLowerCase() === "cinnamon bread") {
        console.log("Bread: Cinnamon Bread");
        console.log("Ingredients: Flour, yeast, milk, sugar, butter, cinnamon powder");
        console.log("Instructions: Prepare the dough, add cinnamon filling, roll, let it rise, and bake.");

    } else {
        console.log("Sorry! Bread recipe not found.");
    }

    input.close();
});