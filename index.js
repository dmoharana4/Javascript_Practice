// personal Details

var name = prompt("Enter ur name");
var email = prompt("Enter ur Email");
var pswd = prompt("Enter ur pasword");
var age = prompt("Enter ur age");
alert ("Ur name is " + name + "\nUr email is " + email + "\nUr pasword is " + pswd + "\nUr age is " + age );


// calculation

var num1 = Number(prompt("Enter First Number"));
var num2 = Number(prompt("Enter Second Number"));
sum = num1+num2;
sub = num1-num2;
mult = num1*num2;
div= num1/num2 ;

alert("Sum of ur entered no. is " + sum +
"\nSubstraction of ur entered no. is " + sub +
"\nMultipliction of ur entered no. is " + mult +
"\nDivision of ur entered no. is " + div
);


// Square, Cube , squareroot , Cube root

var number = Number(prompt("Enter a Number"));
square = Math.pow(number,2)
sqroot = Math.pow(number,0.5)
cube = Math.pow(number,3)
cuberoot = Math.pow(number,1/3)
alert("Square of that number is " + square +
"\nSquareRoot of that number is " + sqroot +
"\nCube of that number is " + cube +
"\nCubeRoot of that number is " + cuberoot);
