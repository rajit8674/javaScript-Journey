// Student Result System

let students = [
  { name: "Amit", marks: 75 },
  { name: "Rajit", marks: 85 },
  { name: "Rahul", marks: 30 },
  { name: "Neha", marks: 95 }
];

// Function to calculate grade
function getGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 33) {
    return "D";
  } else {
    return "Fail";
  }
}

// Loop through students
for (let i = 0; i < students.length; i++) {
  let student = students[i];

  let grade = getGrade(student.marks);

  console.log(
    "Name: " + student.name +
    " | Marks: " + student.marks +
    " | Grade: " + grade
  );
}
