const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter product name: ", function(product) {
    input.question("Enter product price: ", function(price) {
        input.question("Enter quantity: ", function(quantity) {

            let total = Number(price) * Number(quantity);

            console.log("\n===== PURCHASE DETAILS =====");
            console.log("Product: " + product);
            console.log("Price: " + price);
            console.log("Quantity: " + quantity);
            console.log("Total: " + total);

            input.close();
        });
    });
});