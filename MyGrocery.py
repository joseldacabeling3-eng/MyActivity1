print("===== GROCERY SHOPPING =====")

product = input("Enter product name: ")
price = float(input("Enter product price: "))
quantity = int(input("Enter quantity: "))

total = price * quantity

print("\n===== RECEIPT =====")
print("Product:", product)
print("Price:", price)
print("Quantity:", quantity)
print("Total Amount:", total)