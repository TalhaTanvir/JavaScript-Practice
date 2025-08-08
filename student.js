// Question
const students = [
  { name: "Ayesha", age: 19, scores: [78, 82, 91], department: "CS" },
  { name: "Ali", age: 21, scores: [69, 75], department: "Math" },
  { name: "Zara", age: 20, scores: [85, 87, 90, 92], department: "CS" },
  { name: "Bilal", age: 22, scores: [55, 60], department: "Physics" },
  { name: "Hina", age: 19, scores: [90, 88, 95], department: "Math" },
];


// Task 1: Add Average Score to Each Student

let average = 0;

for(const student of students){
    let total = 0;
    for(const score of student.scores){
        total += score;
    }
    average = total/student.scores.length

    student.averageScore = average.toFixed(2)

}

// console.log(students)


// Task 2: Top Scorer

let topAverage = 0;

let topScore = "";

for(const avgSco of students){
    if(avgSco.averageScore > topAverage){
        topAverage = avgSco.averageScore;
        topScore = {
            Name: avgSco.name,
            AverageScore: avgSco.averageScore,
        }
    }
    
}

// console.log(`Top Score: ${topScore.Name} (Average Score: ${topScore.AverageScore})`);

// Task 3: Group Students by Department

let CS = [];
let Math = [];
let Physics = [];

for(const student of students){
    if(student.department === "CS"){
        CS.push(student.name)
    }else if(student.department === "Math"){
        Math.push(student.name)
    }else if(student.department === "Physics"){
        Physics.push(student.name)
    }
}

// console.log("CS:", CS);
// console.log("Math:", Math);
// console.log("Physics:", Physics);


// Task 4: Students with More Than 3 Scores

let top = "";

for(const student of students){
    if(student.scores.length > 3){
        top = student.name
    }
    
}
// console.log(top);


// Task 5: Department with Highest Average Score

let departmentData = {}; // Stores total and count for each department

for (const student of students) {
    let dept = student.department;

    // If this department is not yet in the object, create it
    if (!departmentData[dept]) {
        departmentData[dept] = { total: 0, count: 0 };
    }

    // Add this student's score to the department total
    departmentData[dept].total += student.averageScore;

    // Increase the count of students in this department
    departmentData[dept].count++;
}

let highestDept = "";
let highestAvg = 0;

for (const dept in departmentData) {
    let avg = departmentData[dept].total / departmentData[dept].count;

    if (avg > highestAvg) {
        highestAvg = avg;
        highestDept = dept;
    }
}

console.log(`Department with highest average score: ${highestDept} (${highestAvg.toFixed(2)})`);