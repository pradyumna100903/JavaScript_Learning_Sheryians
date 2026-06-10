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








