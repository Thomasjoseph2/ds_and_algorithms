let limit=7;
const fib=[1,1]
for(let i=0;i<limit-2;i++){
    fib[i+2]=fib[i]+fib[i+1]
}
console.log(fib);

//using recurssion 
let fibi = 0;

// function fibonacci(number) {
//     if (number <= 1) {
//         fibi += number;
//     } else {
//         // Calculate the Fibonacci sequence and add to fib
//         fibonacci(number - 1);
//         fibonacci(number - 2);
//     }
// }

// fibonacci(7);
// console.log(fibi);

function fibina(n) {

    if(n<2)return n;

    return fibina(n-1)+fibina(n-2)
    
}

console.log(fibina(7));