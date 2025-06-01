// let array = [1,2,3,4,5]

// array.forEach((num)=>{
//     console.log(num*num)
// })




let marks = [35,67,86,45,98,73]

let grade = marks.filter((num)=>{
    return num > 90;
})

console.log(grade);