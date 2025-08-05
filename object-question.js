const users = {
  alice: {
    courses: [
      { title: "JS Basics", enrollments: 150 },
      { title: "DOM Mastery", enrollments: 120 }
    ]
  },
  bob: {
    courses: [
      { title: "CSS Magic", enrollments: 180 },
      { title: "Flexbox Fun", enrollments: 160 }
    ]
  },
  charlie: {
    courses: [
      { title: "React Essentials", enrollments: 190 },
      { title: "Hooks in Depth", enrollments: 50 }
    ]
  }
};


function getTopInstructor(users){
    let maxTotal = 0;
    let topUsers = [];
    for (let name in users){
        let total = 0;
        for (let course of users[name].courses){
            total = total + course.enrollments
        }
        if (total > maxTotal){
            maxTotal = total;
            topUsers = [name]
        }else if (total === maxTotal){
            topUsers.push(name)
        }
    }
    return topUsers.length === 1 ? topUsers[0] : topUsers.sort()
}

getTopInstructor(users)