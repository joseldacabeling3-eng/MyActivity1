print("===== MINI MARKET =====")

total = 0

product1 = input("Enter first product: ")
price1 = float(input("Enter price: ₱"))
total = total + price1

product2 = input("Enter second product: ")
price2 = float(input("Enter price: ₱"))
total = total + price2

product3 = input("Enter third product: ")
price3 = float(input("Enter price: ₱"))
total = total + price3

print("\n===== RECEIPT =====")
print("First Product:", product1, "- ₱", price1)
print("Second Product:", product2, "- ₱", price2)
print("Third Product:", product3, "- ₱", price3)

print("----------------------")
print("Total: ₱", total)

payment = float(input("Enter payment: ₱"))
print("Change: ₱", payment - total)

print("Thank you for shopping!")