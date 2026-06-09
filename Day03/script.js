// console.log("Day 3 Phase 2 ");


// console.log("Before if");
// if(10>5){
// console.log(" if block executed");
// }

// console.log('outside if ');


// Loops - Executing some code for a specific number of times for a given condition 


//  4 types of loops in JS - 
//  - while 
//  - do while
// - for 
// - for each

// Infinite Loops using While 

// while(10>5){
//     console.log("Hello ");
    
// }


//  var a = 0;
// console.log('loop ke pehle');

//  while(a<5){
//     console.log('Hello');
//     a++;
//  } 

// console.log('loop ke baad ');

// Print Numbers in Descending Order 

// var a = 10; 
// while (a > 0)
// {
//     console.log(a);
//     a--
// }

// To Print Numbers till a range as given by user 

// var num = Number(prompt('Enter the Number '));

// var a = 0 ;

// while(a<=num)
// {
//     console.log(a);
//     a++;
    
// }

// To print even numbers 

// var num = Number(prompt('Enter the Number '));

// var a = 1;

// while(a<=num)
// {
//     if(a%2==0){
//         console.log(a);
//     }
//     a++
// }

// Print Table of  Number given by user 

// var num = Number(prompt('Enter The Number'));

// var a = 1 
// while(a  <=10) {

//     console.log(num+ " X " + a + " = " +num*a);
//     a++;
// }

// Program to ask password until correct password is entered


// do{
//     var password = prompt("Enter The Password ");

// } while(password =='123')

// console.log('Welcome');
    

// Browsers support  some API's called WEB API's so we can run JS Seamlessly without any extra tools / configurations . ex : alert() , prompt(), confirm() are all part of Web API's provided by the Browser's 


// 3 Types of Variable Declaration in JavaScript
// var , let , const ;

// Till ES5 version only we had var for declaring variables till 2015 

// in 2015 when ES6 version was launched they introduced 2 new types let and const 

// var - Value can be reassigned / Function Scoped
// let - Value can be reassigned / Block Scoped
// const - Value cannot  be reassigned / Block Scoped 

// Example for var and let where we can reaasign values 
// var a = 10;
// console.log(a); // 10  
// a = 12;
// console.log(a);  // a value will be updated to 12 



// But for const you cannot reassign the value 

// const a =20;
// console.log(a);
// a = 29;
// console.log(a);  // Uncaught TypeError: Assignment to constant variable.


// Strings = Set of characters / Sequence of Characters 

// we can declare Strings with 3 types -
// '' - Single Quotes
// " " - Double Quotes
// ` ` - Backtick or Template Literals 

// ex: var name = 'Praddy';

// let firstName = "Aman";
// let lastName = "Kumar";
// let fullName = firstName + " " + lastName;
// console.log(fullName);   // "Aman Kumar"

// Template Literals or Backtick 

// let name = "Aman";
// let age = 25;

// console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// // "Hello, my name is Aman and I am 25 years old."

// // Multi-line strings work naturally too:
// let poem = `Roses are red,
// Violets are blue,
// JS is awesome,
// And so are you.`;





// Different String methods 

let s = "Hello, World!";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(7, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(", "));         // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[0]);                  // "H" (also works)


// Important: Strings are immutable. Methods don't change the original — they return a new string.


// let x = "hello";
// x.toUpperCase();
// console.log(x); // "hello" — unchanged!
// x = x.toUpperCase();
// console.log(x); // "HELLO"


// //  The Math Object

// // `Math` is a built-in object with mathematical methods and constants.


// console.log(Math.PI);            // 3.14159...
// console.log(Math.E);             // 2.71828...

// console.log(Math.round(4.6));    // 5
// console.log(Math.floor(4.9));    // 4 (always rounds down)
// console.log(Math.ceil(4.1));     // 5 (always rounds up)
// console.log(Math.abs(-7));       // 7
// console.log(Math.max(1, 5, 3));  // 5
// console.log(Math.min(1, 5, 3));  // 1
// console.log(Math.pow(2, 10));    // 1024
// console.log(Math.sqrt(16));      // 4
// console.log(Math.random());      // random number between 0 and 1


















