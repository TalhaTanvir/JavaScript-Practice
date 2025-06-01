// let i=0;
// while(i<=5){
//     console.log(i)
//     i++
// }


// let sum=0;
// let i=1;
// while(i<=100){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);


let gamenum = 27;

let usernum = prompt("Guess number:");

while(gamenum != usernum){
   usernum = prompt("Wrong Guess! Enter again:")
}

alert("Congratulations! you guess a correct number.")