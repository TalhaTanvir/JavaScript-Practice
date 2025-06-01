// let number = prompt("Enter a number:");

// if(number%5==0){
//     console.log("This number is multiple of 5.")
// }else{
//     console.log("This number is not multiple of 5.")
// }



// let grade = prompt("Enter your number between (0-100):");

// if(grade>=80 && grade<=100){
//     console.log("Grade A")
// }else if(grade>=70 && grade<=79){
//     console.log("Grade B")
// }else if(grade>=60 && grade<=69 ){
//     console.log("Grade C")
// }else if(grade>=50 && grade<=59){
//     console.log("Grade D")
// }else if(grade>=0 && grade<=49){
//     console.log("Grade F")
// }else{
//     console.log("Enter valid number between 0-100.")
// }



let data = prompt("Enter your name:");

if(data == "var" || data == "console" || data == "function" || data == "prompt" || data == "null" || data == "public" || data == "double" || data == "try" || data == "break" || data == "finally"){
  alert("Invalid Input or Reserved Keyword")
}else{
  console.log(data)
}