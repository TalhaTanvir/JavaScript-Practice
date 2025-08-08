const university = {
  cs: {
    courses: [
      { title: "Data Structures", credits: 3 },
      { title: "Algorithms", credits: 4 }
    ]
  },
  math: {
    courses: [
      { title: "Calculus", credits: 4 },
      { title: "Linear Algebra", credits: 3 }
    ]
  }
};

// Task: Write a function getAllCourseTitles(university)
// Return:
// ["Data Structures", "Algorithms", "Calculus", "Linear Algebra"]


function getAllCourseTitles(university){
    let result = [];
    for(const [key,value] of Object.entries(university)){
        for(const course of value.courses){
            result.push(course.title)
            
        }
    }
    return result;
}

console.log(getAllCourseTitles(university));