
let workers = [
    "John Smith",
    "Mary Jane",
    "Peter Cruz",
    "Anna Mae",
    "Mark Lee"
];

console.log("===== WORKER LIST =====");

workers.forEach((worker, index) => {
    console.log((index + 1) + ". " + worker);
});

// Add a new worker
workers.push("James Brown");

console.log("\n===== UPDATED WORKER LIST =====");

workers.forEach((worker, index) => {
    console.log((index + 1) + ". " + worker);
});
