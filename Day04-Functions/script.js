console.log("Hello JS");

// Functions - These are accessible , Reusable and Systematic block of code . To declare a function we use 'function ' keyword . 
 
// ex: function abc(parameter1, parameter2 , .....){

// console.log('hello all');


// }

// A function only executes when called. Here greet() indicates calling the function ;

// A function can be called any number of times and in any order .

// a method has parameters (Here 'name' is a parameter);
// function greet(name) {
//     console.log("Hello..." + name);
// }

// We can pass arguments in the function calling .
// ex: greet("Pradyumna ");  // Hello... Pradyumna 

// greet();   // Hello...undefined


// greet("Pradyumna ");  // Hello... Pradyumna 
// greet("Praddy");
// greet('Harsh');


// function partyChecker(user,age){

//     console.log("Hello Good Morning ...." , user );

//     if(age>=18){
//         console.log("Welcome To the Party ");
//     }

//     else{
//         console.log("ohh! you aren't allowed sorry..");
//     }
    
// }
// partyChecker("Pradyumna",25);
// console.log(".......");
// partyChecker("Rahul",15);



// Types of Functions

// Function Declaration 
// - Normal Function with 'function ' keyword

// function a() {      // Function Declaration 
//     console.log("Hello");                  // Function Body
    
// }

// a(); // Calling 


// Function Expression  
// - Declaring a function inside a variable 

    // var b1 = function(){     // Function Expression - Function is stored inside a variable
    //     console.log("Hello ");
        
    // }

    // b1();



// Fat Arrow / Arrow Functions 
// Using ()=> for declaring a function   


// var c1 = () => {
//     console.log("Hello ");
    
// }

// c1();



// One Liner Functions - 
// If we have only one line inside finction body then we can use One Liner function 


// var c2 = () => console.log("Hello ");

// // We an also pass parameters inside 

// var c2 = (a,b) => console.log("Hello Guys" ,a ,b);

// c2("Praddy" , 22);


// Normal Functions are "hoisted" meaning we can call the fucntion even before its defined body signature


//     abc('prad'); // Here we are calling the function before its defined .


//   function abc(a)
//   {
//     console.log(" Hello " , a);

//   }

// but in function expression it gives error so keep it in mind 


// // IIFE - Immediately Invoked Funcrion Expression
// // -> Used for Immediately Invoking Functions . It runs at the moment it's defined

// (function(){
//     console.log("Hello I am IIFE , I run immediately ");
// })();
        
// How it works -    
// 1. Wrapping the function inside () .
// 2. The (); at the end calls it . 

// We can also Write IIFE with arrow functions 

// (()=>console.log("Hello I am IIFE"))(); 



// var let and const scope and visibility

// var - function scoped
// let  -Block Scoped
// const; - Block Scoped


// A function by default returns undefined if no return statement is used . If return is used then it comes out immediately

// function aaa(){
//     console.log("Hello");
    
// }

// console.log(aaa());   // Hello undefined


// Function with return 

// function add(a,b){
//     return a+b;

// }

// console.log(add(43,33));    // 76
// console.log(add(3422,321));  //3743



// Pure and Impure Functions 

// Pure - Does not change external variable , Given the same input always returns same exact output
// No side effects of changing external variable 

// function square(x) {
//     return x*x;
// }

// let res = square(24);
// console.log(res);

// Impure Functions - The output may vaty, It modifies a global variable 

// let total = 0 
// function addTotal(n){
//     total += n;
//     return total; 
// }

// let res = addTotal(12)
// console.log(res);











