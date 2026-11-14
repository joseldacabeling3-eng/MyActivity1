const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter Name: ", function(name) {

    console.log("Name: ", name);

    input.question("Monthly Salary: ₱", function(salary) {

        salary = Number(salary);

        let philHealth = salary * 0.025;
        let tax = salary - philHealth;
        let incomeTax;

        if (tax <= 20833) {
            incomeTax = 0;

        } else if (tax <= 33333) {
            incomeTax = (tax - 20833) * 0.15;

        } else if (tax <= 66667) {
            incomeTax = 1875 + (tax - 33333) * 0.20;

        } else {
            incomeTax = 8541.80 + (tax - 66667) * 0.25;
        }

        let netSalary = salary - philHealth - incomeTax;

        console.log("\n========== PAYROLL RESULT ==========");

        console.log("Name: ", name);
        console.log("Monthly Salary: ₱" + salary.toFixed(2));
        console.log("PhilHealth: ₱" + philHealth.toFixed(2));
        console.log("Taxable Income: ₱" + tax.toFixed(2));
        console.log("Income Tax: ₱" + incomeTax.toFixed(2));
        console.log("Net Salary: ₱" + netSalary.toFixed(2));

        console.log("====================================");

        input.close();
    });
});