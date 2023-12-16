function factorial(n) {
  let factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial=factorial*i
  }
  return factorial
}

console.log(factorial(4)); 

//recursive factorial

function factorialr(num){

    if(num===0) return 1

     return num*factorialr(num-1)

    
}

console.log(factorialr(4));