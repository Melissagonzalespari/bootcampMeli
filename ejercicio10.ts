//a ) Create a name function to calculate the area of a circle based on its radius as parameter.
 
function CalculateCircleArea(radius: number):number{
const pi:number=Math.PI;
  // calcular area
  return pi*radius*radius;
}
const reqradius:number=Number.parseInt(prompt('please input radius:')as string);
const resultados=CalculateCircleArea(reqradius);
console.log(`This is the area ${resultados} when the circle radius is ${reqradius}`);
 
//b) funcion para cacular el perimetro del rectangulo
function CalculatePerimeterRectang(length:number,height:number):number {
    length=10;
    height=20;
    return 2*(length+height);
 
}
const reqdimension=[10,20];
const resultadosperimeter=CalculatePerimeterRectang(reqdimension[0],reqdimension[1]);
console.log(`The perimeter of lenght ${reqdimension[0]} and height  ${reqdimension[1]} is: ${CalculatePerimeterRectang}`);
 
//c) calculate the volume of a cube based on the lenghht
function Calculatevolumencube(length:number):number{
   return length*length*length;
}
const reqvolumen=[10];
const resultadosvolumen=Calculatevolumencube(reqvolumen[0]);
console.log(`The volumen of  lenght ${reqvolumen[0]} is:${Calculatevolumencube} `);
 
 
// Exercise 2 Recursive Fibonacci sequence
// recursive function that return the nth fibonacci number
 
function fibonacci(n:number):number{
if (n<=1){
 
    return n;
}
return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(10));
 
// Exercise 3 :
// b Create an array method call numbers between 50 and 75
let numeros:number[]=[];
let start=1
let fin=70;
 
for (let i=start;i<=fin;i++ ){
    numeros.push(i)
}
 
console.log(numeros)
const evens=numeros.filter(n=>n%50===0);
 
// a Create an array method call that takes an array of strings and returns an array containing the capitalized
// of each string