// Cash Register App

// Cash register
var cashRegister = {
  total: 0, // Total bill
  // Sums up the cost of the items
  add: function (itemCost) {
    this.total += (itemCost || 0); // Makes this.total equal to the value of this.total plus the value of itemCost if it has a value. If not, just use 0 instead
  }
};
