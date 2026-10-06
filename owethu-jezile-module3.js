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

//Challenge 2
//part A

/*i think it wil be true because 0 is equals to false in a boolean 
  actual result - as predicted*/
1. 0 == false;

/*i think false because its different data type one is boolean one is number
  actual result - as predicted */
2. 0 === false;

/*i predict false because no value in the first operand
  actual result - true*/
3. "" == 0;

/*false because of data types
 actual result - as predicted */
4. "" === 0;

/*true because we are not strictly comparing data types
actual result - as predicted */
5."0" == 0;

/*false because of not matching data types
actual result - as predicted */
6. "0" === 0;

/*i predict false because null is something you can use as a placeholder and is defined
actual result - true */
7. null == undefined;

/*true because we are not strictly comparing data types
actual result - as predicted */
8. null === undefined;

/*i predict false because 0 is a value which null is not
actual result - as predicted */
9. null == 0;

/* false because null holds no value
actual result - true  */
10. null >= 0;

/* false again because null has no number value
actual result - as predicted*/
11. null > 0;

/* true because its the same value
actual result - false  */
12. NaN == NaN

/*true becuase it is the same data type
actual result - false */
13. NaN === NaN

/* i do not have a prediction i dont know what object.is does*/
14. Object.is(NaN, NaN)

/*i predict true because prefix operators implicitly convert
values into the number type
actual result - true */
15. +0 === -0

/* i do not have a prediction i dont know what object.is does*/
16. Object.is(+0, -0)

/* true because the values will be conveerted by javascript
actual result -  as predicted*/
17. [1,2,3] == "1,2,3"

/*i pedrict true because there is no value inside the array
actual result - as predicted */
18. [] == false

/* i predict false because there is no value inside the array
actual result - true*/
19. [] == 0

/* i predict true because zero is equals to false when you convert a boolean
actual result - as predicted */
20. [0] == false

//part B

let newPassword;
let confirmPassword;
let currentEmail;
let confirmEmail;

//ternaries for the if checks
let passWordMessage = newPassword === confirmPassword ? "successfully created" : "your passwords do not match please check and try again";

let emailMessage = currentEmail == confirmEmail ? "successfully created" : "your emails do not match please check and try again";

let passWordSafetyMessage = newPassword != currentEmail ? "you cannot have your email the same as your password it is not safe please change as needed" : "successfully created";

let passWordLengthMessage = newPassword.length<=8 ? "please make sure your password is atleast 8 characters long" : "succesfully created";

/* i used === for the password to make sure the type is the same as well and its a string the password requires
 */

//challenge 3
/*i predict 13
 step by step - 3*4=12 then 2+12-1= 13*/
1. 2 + 3 * 4 - 1

/*i predict 15
step by step - solve the brackets first 2+3=5 and 4-1=3 then 5*3=15 */
2. (2 + 3) * (4 - 1)

/*i predict 4
step by step - 10-4=6 then 6-2=4 */
3. 10 - 4 - 2

/*i predict 64
step by step - 2**3 = 8 then 8**2=64
actual answer - 512 */
4. 2 ** 3 ** 2 

/*i predict 3
step by step -10%3=1 then 1*2=2 then 2+1=3 */
5. 10 % 3 * 2 + 1

/*i predict 5
step by step -100/4=25 then 25/5=5 */
6. 100 / 4 / 5

/*i predict true
step by step - 5+2=7 then 6&&3=3 then 7>3<4 */
7. 5 + 2 > 6 && 3 < 4

/*i predict true
step by step- true&&false=false then true&&true=true then false||true=true */
8. true && false || true && true

/*i predeict true
step by step- !false=true then !!0=0/true then false && true */
9. !false && !!0

/*i predict true
step by step- !(2 === "2")=true then 3 && 10=10 then 5>10<20=false then false || true  */
10. 5 > 3 && 10 < 20 || !(2 === "2")

/*i predict 1125
step by tep- 1000*0.9=900 then 900*1.15=1035 */
11. 1000 * 1.15 * 0.9 

/* i predict number
step by step -5+1=6 then you run it 
answer came back as number1 which is interesting*/
12. typeof 5 + 1

/* i predict number
// step by step- 5+1=6 then you run it */
13. typeof (5 + 1)

/*i predict 56
step by step- 3*2=6 then "5"+6 */
14. "5" + 3 * 2

/*i predict 4because of implicit conversion
step by step "5"-3=2 then 2+2=4 */
15. "5" - 3 + 2

/*interview answer- you add parentheses to make code easy to ready */

//Challenge4

//partA
let percentage =;
let grade = percentage>=90 ? "A": percentage>=80 ? "B": percentage>=70 ? "C": percentage>=60 ? "D": percentage>=50 ? "E": "F";

/* result for 95 = A;
   result for 82 = B;
   result for 73 = C ;
   result for 65 = D;
   result for 54 = E;
   result for 42 = F;
   result for 0 = F;
   result for 100 = A;
*/

//partB

//user 1 object
const user1 ={
    displayName:undefined,
    theme:undefined,
    maxResults:undefined,
    lastLogin:undefined,
    notificationCount:undefined
};

//tests for user1
let displayName = user1.displayName || "Guest User";
let theme = user1.theme || "Guest User";
let maxResults = user1.maxResults || 10 ;

//i did not know what nullish coalescing is i had to go read some documentation before answering
let lastLogin = user1.lastLogin ?? "Never";
let notificationCount = user1.notificationCount ?? 0;

//user 2 object
const user2 ={
    displayName:undefined,
    theme:"",
    maxResults:undefined,
    lastLogin:undefined,
    notificationCount:0
};

//tests for user2
let displayName1 = user1.displayName || "Guest User";
let theme1 = user1.theme || "Guest User";
let maxResults1 = user1.maxResults || 10 ;
let lastLogin1 = user1.lastLogin ?? "Never";
let notificationCount1 = user1.notificationCount ?? 0;



/* ?? behaves different because its a nullish coalescing and || is OR which gives the option between
two options unlike the nullish which  just gives you ption 2 when option 1 is null or undefined */

//part c
//1
 console.log(user && user.address && user.address.city);
 
 //2
  console.log(user?.address?.city);

//3
console.log(user?.address?.city ?? 'Unknown city');

//part d
// my predictions are null,0,"first truthy",0,false,"third","yes",true,1,i dont know

// 1
// Prediction: null ,datatype: string
console.log(null || undefined || 0 || "" || "finally");
// Actual: "finally" | string

// 2
// Prediction: 0 ,datatype: number
console.log(null ?? undefined ?? 0 ?? "" ?? "finally");
// Actual: 0 ,datatype: number

// 3
// Prediction: "first truthy" ,datatype: string
console.log(0 || "first truthy");
// Actual: "first truthy" ,datatype: string

// 4
// Prediction: 0 ,datatype: number
console.log(0 ?? "first non-nullish");
// Actual: 0 ,datatype: number

// 5
// Prediction: false ,datatype: boolean
console.log(true && false && "never reached");
// Actual: false ,datatype: boolean


// 6
// Prediction: "third" ,datatype: string
console.log("first" && "second" && "third");
// Actual: "third" ,datatype: string

// 7
// Prediction: "yes" ,datatype: string
console.log(false || (true && "yes"));
// Actual: "yes" ,datatype: string

// 8
// Prediction: "yes" ,datatype: string
console.log((false || true) && "yes");
// Actual: "yes" ,datatype: string

// 9
// Prediction: 1 ,datatype: number
console.log(1 && 2 && 3);
// Actual: 3 ,datatype: number

// 10
// Prediction: i dont know
console.log(null?.foo?.bar?.baz);
// Actual: undefined,datatype:| undefined


//challenge5
//partA

//prediction and output
/*prediction - number
  output - number*/
1. typeof 42

/*prediction - string
output- string  */
2. typeof "hello"

/*prediction - boolean
output - boolean*/
3. typeof true

/*prediction -undefined
output - undefined */
4. typeof undefined

/*prediction -null
output- object */
5. typeof null 

/* prediction - object
ouput- object*/
6. typeof {}

/* prediction - array
output- object */
7. typeof [] 

/* prediction - function
output- function */
8. typeof function() {}

/*prediction - NaN
output- number */
9. typeof NaN

/*prediction - undefined
output - undefined */
10. typeof undeclaredVariable

//difference between an object and array

let object = {} ; let array = [];

//partb
/*prediction - true
output - true */
1. [] instanceof Array

/*prediction - true
output - true*/
2. [] instanceof Object

/*prediction - true
output - true */
3. {} instanceof Object

/*prediction - false
output- false  */
4. "hello" instanceof String

/*prediction - true
output- true  */
5. new String("hello") instanceof String

/*prediction - false
output - false */
6. 42 instanceof Number

/* prediction - true
output - true*/
7. new Date() instanceof Date

/*prediction- false
output - true*/
8. /abc/ instanceof RegExp

/*typeof is the right tool when we have a primitive data type and instanceof os wrong there
  instanceof is the right tool for when we have object types to check the instance of a data type inside that object
  and typeof wont be the right tool at that time because it wi return an object */

//partc 
//1.
const user = {
    name:"Lerato",
    age:25,
    role: "student"
};

delete user.role

//2.
let x = 5;
delete x

//3.
const arr = [1, 2, 3, 4];
delete arr[1];
//delete does not remove the value it just leaves an empty item

//4.
delete Math.PI
//it does not work and non configurable property is something you cannot edit or add yourself it is built in

/* interview answer : i will not use delete because it does not remove items in the array it just leaves and empty one
and i would use splice or pop instead depending on the item index */

//challenge6
//1.
{
    const READ = 1; // binary 0001
    const WRITE = 2; // binary 0010
    const DELETE = 4; // binary 0100
    const ADMIN = 8; // binary 1000
    
    let userReadWrite = READ | WRITE ;
    console.log(userReadWrite);
}

//2.
{
    const READ = 1; // binary 0001
    const WRITE = 2; // binary 0010
    const DELETE = 4; // binary 0100
    const ADMIN = 8; // binary 1000
    
    let userAdmin = READ | WRITE |DELETE | ADMIN ;
    console.log(userAdmin);
}

//3.
let checkPerm = userReadWrite & READ ? "yes" : "No"

//4.
let checkPerm2 = userReadWrite & DELETE ? "yes" : "No"

//5.
let userReadWrite = READ | WRITE | DELETE;

//6.
let revokePerm = userReadWrite & !WRITE ;

//7. i do not know what XOR is or what it does but ill try

^userAdmin.ADMIN

//8.i also did not encounter this in the modules we have done
SUPER_ADMIN<<userAdmin;

/*interview questions

1- for better security and it uses less space

2- reading it in code would be hard unlike a string

3- & is to check whether something has this and that then && is for comparison ,same applies with | and ||

if you confuse them lets say you use || instead of | when assigning the permisions you might return only the first permision if true and omiting the rest then the user can only use one permission*/

//challenge7
// scenario1

let savingsAccount = 25000;
let annualInt = savingsAccount*(7.5/100);
let monthlyInt = annualInt/12

let finalBalance = (savingsAccount + annualInt)*3;
console.log(finalBalance.toFixed(2));//balance is 80625

let totalInt = finalBalance - savingsAccount;
console.log(totalInt.toFixed(2));//55625

//battling with this section i never did accounting

//scenario2
let balance=;
let accFee = balance>=25000 ? "free" :balance>=1000 ? "R50 fee" :balance>=5000 ? "R75 feee":"R25 fee"
/* Test 1: Balance of R500
console.log("Annual fee: R" + (monthlyFee * 12));
Annual fee: R300

Test 2: Balance of R1500
console.log("Annual fee: R" + (monthlyFee * 12));
Annual fee: R600

Test 3: Balance of R10000
console.log("Annual fee: R" + (monthlyFee * 12));
Annual fee: R900

Test 4: Balance of R50000
console.log("Annual fee: R" + (monthlyFee * 12));
Annual fee: R0

 */