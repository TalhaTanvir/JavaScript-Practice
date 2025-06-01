// for(let i = 0; i<=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


let gamenum = 27;

let usernum = prompt("Guess number:");

while(gamenum != usernum){
   usernum = prompt("Wrong Guess! Enter again:")
}

alert("Congratulations! you guess a correct number.")