console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <=100; i++){
    if(i % 2 == 1){
        console.log(`${i}`);
    }
    else{
        continue;
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i}: FIZZBUZZ`)
    }
    else if(i % 5 == 0){
        console.log(`${i}: BUZZ`)
    }
    else if(i % 3 == 0){
        console.log(`${i}: FIZZ`)
    }
}
// Exercise 3 section
