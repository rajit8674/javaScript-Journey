// object creation
// 1. object literal syntax
let person = {
    name: "Rajit",
    age: 25,
    city: "New York"
};
console.log(person);

// 2. constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}


let person1 = new Person("Alice", 30, "Los Angeles");
console.log(person1);


let user = {
  name: "Rajit",
  age: 22,
  city: "Delhi",
  isStudent: true
};

console.log(user);



//data accessing
console.log(user.name); // dot notation
console.log(user["age"]); // bracket notation

//data updating
user.age = 23; // dot notation
user["city"] = "Mumbai"; // bracket notation
console.log(user);

// adding new property
user.country = "India";
console.log(user);

// deleting property
delete user.isStudent;
console.log(user);


// Ek user object banao
let user1 = {
    name: "Alice",
    age: 30,
    city: "Los Angeles",
    isStudent: false
};
// user ke name ko update karo
user1.name = "Bob";
console.log(user1);
// user ke city ko update karo
user1.city = "San Francisco";
console.log(user1);

//Students array banao (3 students) Students array banao (3 students) sabke naam print karo
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
];
for (let student of students) {
    console.log(student.name);
}



//Highest marks wale student ka name print karo
let studentsMarks = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];
let highestMarks = 0;
let topStudent = "";    
for (let student of studentsMarks) {
    if (student.marks > highestMarks) {
        highestMarks = student.marks;
        topStudent = student.name;
    }


}console.log("Highest marks: " + highestMarks);
console.log("Top student: " + topStudent);

//Count karo kitne students pass (>=33) hain

let passCount = 0;
for (let student of studentsMarks) {
    if (student.marks >= 33) {  
        passCount++;
    }
}
console.log("Number of students passed: " + passCount);



