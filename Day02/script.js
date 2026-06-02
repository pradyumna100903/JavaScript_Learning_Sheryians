// console.log("Hello World ");
// console.log("Day 02 ");

// var a = 10;
// var b = 20;

// console.log(a+b);  //Addition
// console.log(a-b);   // Subtraction 
// console.log(a*b);   // Multiplication or product
// console.log(a/b);   // Division returning quotient  
// console.log(a%b);   // Modulus returning remainder
// console.log(a**b);  // calculates a power b (expoential )



var a = 10;

a++ ; // Increment operator (increments value by 1 )
a-- ; // Decrement Operator (decrements value by 1) 
// console.log(++a); // Pre Increment -> First Increment the Value by 1 then print .


// console.log(a++); // Post Increment -> First Print the Value then increment by 1 . 

console.log(--a); // Pre Decrement -> First Decrement the value by 1 then print . 
console.log(a);
console.log(a--); // First Print the value then Decrement by 1 
console.log(a);


var b =20 ;

b += 20 ; // or  b = b + 20 
b -= 20 ; // or  b = b - 2;
b *=2 ; // or  b = b*2; 
b /=2 ; // or b = b/2;
b%=3 ; // or b = b%3 ;




var g = 10;   // Single = means assigning values 
var h = '20';  // Single = means assigning values 

console.log(g == h); // Comparing whether both values are same returns boolean values but ignores the type -> because == is loosely coupled 

console.log(g < h); // lesser than 
console.log(g <= h); // lesser than or equal to 


console.log(g > h ); // greater than 
console.log(g >= h ); // greater than or equal to
console.log(g === h); // Srictly Coupled -> === checks both values AND datatype 


console.log(g != h); // Not equal to 


// Logical operators 

var i = 20 ;
var j = 30 ;

var k = 40;
var l = 50;

console.log(i<j || k<l);  // Logical OR Operator 
console.log(i<j || k>j);  

console.log(i<j && k>j);  // Logical AND Operator  
console.log(i<j && k>j);  

//Conditionals -> When our code runs on some conditions


if(i<j)
{
    console.log("I Love JS");
    
} else {
    console.log(" I Hate JS ");

    
}


var age = Number(prompt('Enter Your Age'))

if(age>=18){
    console.log("You can Vote ");
    
} else {
    console.log("You Cannot Vote  ");
    
}

















