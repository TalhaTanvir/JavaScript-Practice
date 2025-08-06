const students = {
  ali: {
    subjects: [
      { name: "Math", marks: 85 },
      { name: "English", marks: 78 }
    ]
  },
  sara: {
    subjects: [
      { name: "Math", marks: 92 },
      { name: "English", marks: 88 },
      { name: "Science", marks: 75 }
    ]
  },
  zain: {
    subjects: [
      { name: "Math", marks: 70 },
      { name: "Science", marks: 80 }
    ]
  }
};


function getStudentSummary(students){
    let result = [];
    for(const [key,value] of Object.entries(students)){
        let total = 0;
        for(const subject of value.subjects){
            total += subject.marks
        }
        let average = total / value.subjects.length
        
        result.push({
            name: key,
            totalMarks: total,
            average: average,
        })

    }

    return result;
}


console.log(getStudentSummary(students));
 