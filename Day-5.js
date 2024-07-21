//  check if a number is even or odd and log the result to the console

function checkEvenOrOdd(num){
    if ( num % 2 === 0){
      console.log(`${num} is Even`);
    }
    else {
        console.log(`${num} is odd`);
    }
}

checkEvenOrOdd(5);
checkEvenOrOdd(44);
checkEvenOrOdd(74);
checkEvenOrOdd(97);
checkEvenOrOdd(34);
checkEvenOrOdd(41);
checkEvenOrOdd(37);
 
// function to calculate the square of a number and return the result

function calculateSquare(num) {
  return num * num;
}

const result1 = calculateSquare(15);
const result2 = calculateSquare(4);
const result3 = calculateSquare(44);
const result4 = calculateSquare(9);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


// find max number

const findMax = function (a, b) {
  const max = Math.max(a, b);
  console.log(` The maximum of ${a} and ${b} is ${max}`);
};

findMax(4, 7);
findMax(3, 8);
findMax(9, 14);
findMax(74, 95);



//  function to express to concatenate two strings contains a specific character and return a boolean value

function concatenateAndCheck(str1, str2, char){
    const concatenatedString = str1 + str2;
    return concatenatedString.includes(char);
}

const result11 = concatenateAndCheck('hello', 'world', 'o');
const result21 = concatenateAndCheck('hello', 'world', 'z');
console.log(result11);
console.log(result21);


// write a function that takes two parameter and return their product . provide a default value for the second parameter 

function multiply (a, b = 1){
    return a * b;
}

const result10 = multiply(5,3);
const result20 = multiply(7);
console.log(result10);
console.log(result20);



// function that takes a person's name and age and returns a greeting message.Provide default value for the age 

function greet(name, age = 25){
return `Hello, ${name}! You are ${age} years old.`;
}

const message1 = greet('Ritika', 21);
const message2 = greet('Rishabh');
const message3 = greet('Priya');

console.log(message1);
console.log(message2);
console.log(message3);



// write a higher order function that takes a function and a number, and calls the function that many times 

function repeatFunction(fn, times){
    for(let i = 0; i< times; i++){
        fn();
    }
}
const sayHello = () => console.log('Hello!');
repeatFunction(sayHello, 10);



// write a higher order function that takes two functions and a value, applies a first function to the value, and then applies to the second function to the result 


function applyFunctions(fn1, fn2, value){
    return fn2(fn1(value));
}

const add5 = x => x + 5;
const multiply3 = x => x*3;

const result = applyFunctions(add5, multiply3, 2);
console.log(result);
