// Arithemtic Operators
let a = 10;
let b = 3;

console.log(a + b); // add
console.log(a - b); // subtract
console.log(a * b); // multiply
console.log(a / b); // divide
console.log(a % b); // remainder

// Assignment Operators
let c = 5;
c += 2; // c = c + 2
console.log(c);
c *= 3; // c = c * 3
console.log(c); 
c -= 4; // c = c - 4
console.log(c);
c /= 2; // c = c / 2
console.log(c);
c %= 3; // c = c % 3
console.log(c);

//comparison Operators
console.log(a == b); // equal to
console.log(a != b); // not equal to
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to   

console.log(5 == "5");   // true 
console.log(5 === "5"); // false beacause of strict equality , Hamesha === use karna chahiye


// Logical Operators
let age = 50;

console.log(age >= 18 && age <= 30); // AND
console.log(age < 18 || age > 60);   // OR
console.log(!(age < 18));            // NOT


// Conditional Statements
if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age <= 60) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Ternary Operator
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//conditions
//1.if condition
let num = 10;
if (num > 0) {
    console.log("Positive number");
}
//2.if else condition
let num2 = -5;
if (num2 > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}
//3.if else if condition
let num3 = 0;
if (num3 > 0) {
    console.log("Positive number");
} else if (num3 < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

//4.nested if condition iska matlab hai ek if ke andar dusra if hona
let num4 = 15;
if (num4 > 0) {
    if (num4 % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }       
} else if (num4 < 0) {
    if (num4 % 2 === 0) {
        console.log("Negative even number");
    }
    else {
        console.log("Negative odd number");
    }
}
else {
    console.log("Zero");
}

//5.switch case condition
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}








