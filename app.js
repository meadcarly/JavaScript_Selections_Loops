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
for(let i = 0; i <=100; i++){
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

console.log("EXERCISE 3:\n==========\n");
let j = 1;
while(j <= 100){
    if(j % 2 == 1){
        console.log(`${j}`);
    }
    else{
        continue;
    }
    j++;
};

let k = 0;
do{
    if(k % 3 == 0 && k % 5 == 0){
        console.log(`${k}: FIZZBUZZ`)
    }
    else if(k % 5 == 0){
        console.log(`${k}: BUZZ`)
    }
    else if(k % 3 == 0){
        console.log(`${k}: FIZZ`)
    } 
    K++;
}while(k <= 100);

// Exercise 4 section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++){
    if(i == value){
        console.log("Found value!");
        break;
    }
    console.log("Did not find value")
}
