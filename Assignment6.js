// ----------------------Question no 1----------------------
// Sort an array of numbers in ascending order.

// let asec = [7,3,12,9,1,50,8]

// asec.sort((a,b)=>a-b)

// console.log(asec)


// ----------------------Question no 2----------------------

// Reverse the order of an array.

// let car = ["Tesla", "Bmw", "Toyota", "Mercedes", "Ford", "Audi"]
// console.log("Original Array:", car)
// console.log("")

// car.reverse()

// console.log("Reverse Array:",car)


// ----------------------Question no 3----------------------

// Write a function to find the largest number in the array.

// let find = [5,8,2,4,7,9,1]

// function largest (){
//     let max = find[0];
//     for(let m of find){
//         if(m>max){
//             max=m
//         }
//     }
//     console.log("The largest number in an array is: ",max)
// }

// largest()



// ----------------------Question no 4----------------------
// Write a function that takes an array and returns a new array where each number is doubled.


// function double (arr){
//     let answer = []

//     for(let a of arr){
//         answer.push(a*2)
//     }
//     return answer;
// }

// const originalArray = [1,2,3,4,5];

// const doubleArray = double(originalArray)

// console.log(`Double Array: ${doubleArray}`)


// ----------------------Question no 5----------------------
// Write an arrow function that takes a name and returns "Hello, name!"

// let greating = (name)=>{
//     return `"Hello, ${name}!"`
// }

// console.log(greating("Talha"))


// Another Way

// console.log(((name)=>`"Hello, ${name}!"`)("Talha"))

// ----------------------Question no 6----------------------
// Write an arrow function getLength that returns the length of a string.

// let stringLength = (str)=>{
//     return str.length
// }

// console.log(stringLength("Hello"))



// ----------------------Question no 7----------------------
// Write a function that returns the sum of all numbers in the array.


// let array = [1,2,3,4,5]

// function sumArray (arr){
//     let sum = 0;

//     for (const s of arr) {
//         sum = sum + s;
//     }
//     return sum;

// }

// console.log("Sum of array is:", sumArray(array))



// ----------------------Question no 8----------------------
// Write a function that takes a city name and checks if it exists in the array. Return true or false.

const city = ["Islamabad", "Lahore", "Karachi", "Sargodha", "Gujranwala", "Peshawar", "Sahiwal", "Jauharabad", "Khushab", "Faisalabad"]

function cityName(str){

    for (const s of city) {
        if(s.includes(str)){
            console.log("True")
        }else{
            console.log("False")
        }
        
    }

}

cityName("Failsalabad")



// ----------------------Question no 9----------------------
// Write a function that removes duplicates and returns a new array.