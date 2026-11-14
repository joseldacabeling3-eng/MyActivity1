import java.util.Scanner;

public class PhilHealthTaxCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your Name: ");
        String name = scanner.nextLine();

        System.out.print("Monthly Salary: ₱");
        double salary = scanner.nextDouble();

        double philHealth = salary * 0.025;
        double taxableIncome = salary - philHealth;

        double incomeTax;

        if (taxableIncome <= 20_833) {
            incomeTax = 0;
        } else if (taxableIncome <= 30_000) {
            incomeTax = (taxableIncome - 20_833) * 0.15;
        } else if (taxableIncome <= 76_890) {
            incomeTax = 290 + (taxableIncome - 30_000) * 0.20;
        } else {
            incomeTax = 590.90 + (taxableIncome - 76_890) * 0.25;
        }

        double netSalary = salary - philHealth - incomeTax;

        System.out.println("\n========== PAYROLL RESULT ==========");
        System.out.println("Name: " + name);
        System.out.printf("Monthly Salary: ₱%.2f%n", salary);
        System.out.printf("PhilHealth: ₱%.2f%n", philHealth);
        System.out.printf("Taxable Income: ₱%.2f%n", taxableIncome);
        System.out.printf("Income Tax: ₱%.2f%n", incomeTax);
        System.out.printf("Net Salary: ₱%.2f%n", netSalary);
        System.out.println("====================================");

        scanner.close();
    }
}