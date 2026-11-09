const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter student name: ", function(name) {
    input.question("Enter age: ", function(age) {
        input.question("Enter course: ", function(course) {
            console.log("\n===== STUDENT INFORMATION =====");
            console.log("Name: " + name);
            console.log("Age: " + age);
            console.log("Course: " + course);
            input.close();
        });
    });
});