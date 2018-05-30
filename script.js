// Cash Register App

// Cash register
var cashRegister = {
  total: 0, // Total bill
  lastTransactionAmount: 0,
  // Sums up the cost of the items
  add: function (itemCost) {
    this.total += (itemCost || 0); // Makes this.total equal to the value of this.total plus the value of itemCost if it has a value. If not, just use 0 instead
    this.lastTransactionAmount = itemCost;
  },
  // Scans item - knowing the item name will automatically add the cost of that item to the total. If the scanner is told the quantity of each item, it will add the right amount to the total
  scan: function (item, quantity) {
    switch (item) {
      case "eggs": this.add(0.98 * quantity); break; // price of eggs is 0.98
      case "milk": this.add(1.23 * quantity); break; // price of milk is 1.23
      case "magazine": this.add(4.99 * quantity); break; // magazine of eggs is 4.99
      case "chocolate": this.add(0.45 * quantity); // chocolate of eggs is 0.45
    }
    return true;
  },
  // Voids the last transaction if a mistake has been made
  voidLastTransaction: function () {
    this.total -= this.lastTransactionAmount;
    this.lastTransactionAmount = 0;
  }
};
