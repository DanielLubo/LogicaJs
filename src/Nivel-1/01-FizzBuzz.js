// Imprime números del 1-100. Múltiplos de 3: "Fizz", múltiplos de 5: "Buzz", ambos: "FizzBuzz"
for (let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} : FizzBuzzz`);
    } else if( i % 3 === 0){
        console.log(`${i} : Fizz`);
    } else if( i % 5 === 0){
        console.log(`${i} : Buzz`);
    } else {
        console.log(`${i}`);
    }
}

console.log('EL PEPE');