// 1 er ejemplo : 

const grades:number []=[100,45,89,-1,80];
let total=0;
let count=0;
let index=0;
let Exceptional=false;

// Revisar calificaciones.
for (index = 0;index <grades.length;index ++){
    let grade =grades[index];

    switch(grade){
    case -1:
    console.log(`Note in position ${index}:This student could not present this test due to a valid reason`);
    index++;
    continue;

case 1000:
    console.log(`Exceptional student! Average is 100!`);
    Exceptional=true;
    break;

default:
    total+=grade;
    count++;
    console.log(`average score ${grade}`);
    continue;

}
}