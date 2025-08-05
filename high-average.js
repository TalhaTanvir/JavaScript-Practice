const students = {
  ali: [90, 85, 87],
  sana: [95, 91, 92],
  usman: [85, 88, 89]
};



function getTopStudent(student){
    let highestAvg = 0;
    let topStudent = "";
    for(let name in student){
        let marks = student[name]
        let total = 0;
        for (let ad of marks){
            total += ad;
        }
        
        let avg = total / marks.length;

        if (avg > highestAvg){
            highestAvg = avg;
            topStudent = name;
        }
    }
    
    return topStudent;
}


console.log(getTopStudent(students));
 