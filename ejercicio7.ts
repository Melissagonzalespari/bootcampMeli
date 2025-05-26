
interface item {
    nombre: string;
    precio: number;
    id:number;
}

let items: item[] = [
    { nombre: "cocina", precio: 1800,id:1001 },
    { nombre: "terma", precio: 2100,id:1002  },
    { nombre: "mesa", precio: 700,id:1003  }
];
 
//add a new item from the array based on its id.
items.push({nombre:'horno',precio:1500,id:1004});

//remove an item from the array based on its id.
const indextoRemove=1;
items.splice(indextoRemove,1);
console.log(items);
//search for another item based on its id and modify its initial price
const itemtomodify=items[2].precio=1800
console.log(itemtomodify);
console.log(items);

//This requires to iterate over the array and compare the id of each element to the supplied id . Then,remove 
//the element that matches
// Standard for loop
//for (let i = 0; i < items.length; i++) {
  //  console.log(items[i].id + "matches " + items[i].id);
  //}
  //Declaracion de numero ingresado por el usuario
  let userInput :number;
  for (let i = 0; i < items.length; i++) {
  if (userInput =items[i].id){
    console.log(`ID ingresado: ${userInput} + "matches " + items[i].id`);
    }
    else{
      break;
    }
  }

