//Challenge 1

//1.arithmetic
//storing our values into variables before working on them

let salary = 45000;
let tax = 0.25;
let uif = salary*1/100;
let medicalAid = 2500;

//calculating our net salary befor logging it
let netSalary = salary - tax - uif - medicalAid;
console.log(`Your net salary is: ${netSalary}`);

//2.assignment
//declaring our total for the cart

let total = 0;

//declaring the cart items

let item1 = 150;
let item2 = 85;
let item3 = 220;

//calculating our cart total before discount is applied
total = item1 + item2 + item3;
let discount = total*10/100;
total -= discount;

let vat = total*15/100;

total += vat;
console.log(`Your total is :${total}`);

//3.comparison
//declaring our confirmed email

let confirmedEmail = "example@gmail.com";

//making our form now where our user will give us info

let age = prompt("please enter your age");
let password = prompt("please enter your password");
let userEmail = prompt("please enter your email");

//validating the user input to our requirements
//responses for wrong inputs
age<18;
console.log("user must be 18 years or older");

password.length<8;
console.log(" password must have at least 8 characters");

userEmail !== confirmedEmail;
console.log("does not match confirmed password");

//responses for right inputs
age>=18;
console.log("user old enough");

password.length>=8;
console.log(" password correct ");

userEmail === confirmedEmail;
console.log("matches confirmed password");

//4.logical
// declare the booleans for our program

let loggedIn = true;
let verified = true;
let admin = true;

//decalre the type of user that is allowed to access premium dashboard
let allowedUser = loggedIn && verified || admin ;
console.log("Premium access granted"); 

//5.unary

let exampleString = "25";

//a prefix operator to an operand does implicit conversion to a number
exampleString= +"25";

let isDarkMode = true;

!isDarkMode;
isDarkMode;

//6.ternary

let premium = true;
let premiumUser = premium ? "trial member" : " not premium member";
let free = true;
let freeMember = free ? "Free Member" : " trial member";

//7.String concatenation

let firstName = "Thabo";
let lastName = "Nkosi";
let age1  = 28;

//this is using the + method 
console.log("Welcome back " + firstName + lastName + " you are " + age1 + " years old ");

//this is using template literals which is better for readability
console.log(`Welcome back ${firstName} ${lastName}, you are ${age1} years old.`);

/* 1- difference between prefix is it comes before an operand and postfix xomes after here is an example:
  prefix - let number = +"46";
  psotfix - let number = 46++
  
  2- number %2 ,i do not have two other uses
  
  3-a nested ternary is not good practice because harder to read and maintain*/

  






