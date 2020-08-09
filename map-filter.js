const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i =0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })

const result = numbers.map(x => x * x);

console.log(result);

// result = [ 9, 16, 25, 36, 49, 64 ]
// map er moddhe jodi kono function 
// k pass kora hoi tahole se 3ta parameter 
// detay paray(element, index, array).