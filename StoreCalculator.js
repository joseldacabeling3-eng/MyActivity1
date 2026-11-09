// STORE CALCULATOR

let store = {
    itemName: "Milk",
    price: 50,
    quantity: 3
};

function calculateTotal() {
    let total = store.price * store.quantity;

    console.log("STORE CALCULATOR");
    console.log("----------------------");
    console.log("Item: " + store.itemName);
    console.log("Price: ₱" + store.price);
    console.log("Quantity: " + store.quantity);
    console.log("----------------------");
    console.log("Total Amount: ₱" + total);
}

calculateTotal();