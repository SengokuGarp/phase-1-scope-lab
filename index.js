// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob'; // Initialize customerName to 'bob' initially.

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

// Write a function that when called, declares a variable called bestCustomer
// in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'new best customer'; // Change the value to 'new best customer'.
}

// See the consequences of declaring a variable in global scope,
// by writing a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Change the value to 'maybe bob'.
}

// Define the changeLeastFavoriteCustomer function (even though it will result in an error).
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will result in an error.
}

// Testing the functions
console.log(customerName); // bob

upperCaseCustomerName();
console.log(customerName); // BOB
