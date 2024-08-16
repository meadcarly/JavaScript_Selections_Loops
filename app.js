console.log("Hello World!\n==========\n");
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <=100; i++){
    if(i % 2 !== 0){
        console.log(`${i}`);
    }
    else{
        continue;
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i <=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i}: FIZZBUZZ`);
    } else if(i % 5 === 0){
        console.log(`${i}: BUZZ`);
    } else if(i % 3 === 0){
        console.log(`${i}: FIZZ`);
    }
}
// Exercise 3 section
console.log("EXERCISE 3:\n==========\n");
console.log("EXERCISE 3: Ignore evens: While loop");

let j = 1;
while(j <= 100) {
    if(j % 2 !== 0){
        console.log(`${j}`);
    }
    j++;
}

console.log("EXERCISE 3: Ignore evens: Do/While loop");

let a = 1;
do{
    if(a % 2 !== 0){
        console.log(`${a}`);
    }
    a++;
}while(a <= 100)

    console.log("EXERCISE 3: FIZZBUZZ: While loop");

let b = 0;
while(b <= 100){
if(b % 3 === 0 && b % 5 === 0){
        console.log(`${b}: FIZZBUZZ`);
    } else if(b % 5 === 0){
        console.log(`${b}: BUZZ`);
    } else if(b % 3 === 0){
        console.log(`${b}: FIZZ`);
    }
    b++
}

console.log("EXERCISE 3: FIZZBUZZ: Do/While loop");

let c = 0;
do{
    if(c % 3 === 0 && c % 5 === 0){
        console.log(`${c}: FIZZBUZZ`);
    } else if(c % 5 === 0){
        console.log(`${c}: BUZZ`);
    } else if(c % 3 === 0){
        console.log(`${c}: FIZZ`);
    }
    c++
}while(c <= 100)



// Exercise 4 section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;
for(let i = 0; i <= n; i++){
    if(i == value){
        console.log(`${i} = ${value}: Found value!`);
        found = true;
        break;
    }
}
if(found == false){
    console.log(`did not find ${value}`)
}

// Exercise 5 section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(let i = start; i <= end; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(`${i}, fizzDivisor is ${fizzDivisor}, buzzDivider is ${buzzDivisor}: FIZZBUZZ`)
    }
    else if(i % buzzDivisor == 0){
        console.log(`${i}, buzzDivider is ${buzzDivisor}: BUZZ`)
    }
    else if(i % fizzDivisor == 0){
        console.log(`${i}, fizzDivisor is ${fizzDivisor}: FIZZ`)
    }
}

