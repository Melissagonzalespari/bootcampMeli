var myNumberitem1 = 29.9;
var myNumberitem2 = 49.9;
var myNumberitem3 = 19.9;
var taxes = 0.07;
//The cost of the shopping cart with no taxes 
var sumtotal = myNumberitem1 + myNumberitem2 + myNumberitem3;
console.log('\n\nShopping Cart Cost without taxes:$' + sumtotal);
console.log("Shopping Cart Cost without taxes:$".concat(sumtotal));
// The cost of taxes alone 
var taxtotal = sumtotal * taxes;
console.log("Cost of taxes:$".concat(taxtotal));
//Total cost of the shopping cart
var totalshopping = sumtotal + taxtotal;
console.log("Total cost of the shopping cart:$".concat(totalshopping));
