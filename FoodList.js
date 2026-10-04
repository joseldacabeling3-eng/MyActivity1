let foods = [
    "Adobo",
    "Sinigang",
    "Fried Chicken",
    "Pancit",
    "Lechon"
];

function showFoods() {
    console.log("My Favorite Foods:");

    for (let i = 0; i < foods.length; i++) {
        console.log((i + 1) + ". " + foods[i]);
    }
}

showFoods();