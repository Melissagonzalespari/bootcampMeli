var firstiventory = {
    id: '1001',
    nombre: 'cocina a gas',
    precio: '200'
};
var secondiventory = {
    id: '1002',
    nombre: 'horno',
    precio: '300',
    instock: 'NO'
};
var inventoryarray = [firstiventory, secondiventory];
//add a new item from the array based on its id.
inventoryarray.push({ id: '1003', nombre: 'terma', precio: '150' });
//remove an item from the array based on its id.
var valuetoremove1 = inventoryarray.pop();
console.log(inventoryarray);
console.log(valuetoremove1);
//supplied id pending...
// Search for another item based on its id and modify its initial price
var const1 = inventoryarray.indexOf({ id: '1002', nombre: 'horno', precio: '300' });
console.log(const1);
