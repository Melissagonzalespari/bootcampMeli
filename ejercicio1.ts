let myNumberitem1: number =29.9;
let myNumberitem2: number =49.9;
let myNumberitem3: number =19.9;
let taxes: number =0.07;

//The cost of the shopping cart with no taxes 
let sumtotal: number=myNumberitem1 + myNumberitem2 + myNumberitem3;
console.log('\n\nShopping Cart Cost without taxes:$'+sumtotal);
console.log(`Shopping Cart Cost without taxes:$${sumtotal}`);
// The cost of taxes alone 
let taxtotal: number =sumtotal*taxes;
console.log(`Cost of taxes:$${taxtotal}`);

//Total cost of the shopping cart
let totalshopping: number=sumtotal+ taxtotal;
console.log(`Total cost of the shopping cart:$${totalshopping}`);