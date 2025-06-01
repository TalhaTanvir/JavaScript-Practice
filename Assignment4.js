
// -------------------------Question no 1----------------------------

// let userInput = prompt("Enter Alphabets:");
// let swapped = "";

// for(let i=0; i< userInput.length; i++){
//     let char = userInput[i]
//     if(char === char.toUpperCase()){
//         swapped = swapped + char.toLowerCase();
//     }else{
//         swapped = swapped + char.toUpperCase();
//     }
// }

// console.log(swapped)




// -------------------------Question no 2----------------------------

// let checkString = prompt("Enter string for counting (Numbers, Alphabets and Special Character):")

// let digit = 0;
// let alphabet = 0;
// let special = 0;

// for(let i = 0; i < checkString.length; i++){

//     let char = checkString[i];
//     if(char >= "0" && char <= "9"){
//         digit++;
//     }
//     else if((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")){
//         alphabet++;
//     }
//     else{
//         special++;
//     }    

// }

// console.log(checkString)
// console.log("")
// console.log("Total Digits:",digit)
// console.log("Total Alphabets:",alphabet)
// console.log("Total Special Character:",special)



// -------------------------Question no 3----------------------------

// let checkChar = prompt("Enter string:")

// for(let i = 0; i<checkChar.length; i++){

//     let char = checkChar[i];

//     if(char)
// }



// -------------------------Question no 4----------------------------


// let sen = prompt("Enter a line of Sentence:");


// if(sen.toLowerCase().includes("stupid") || sen.toLowerCase().includes("idiot")){
//     alert("Please use polite words.")
// }
// else{
//     console.log(sen)
// }


    // -------------------------Question no 5----------------------------

    
    // let message = prompt("Enter Your Message:")

    // let count = prompt("How many times dou you want to print.")

    // for(let i = 1; i <= count; i++){
    //     console.log(message)
    // }


    // -------------------------Question no 6----------------------------


    let email = prompt("Enter your email:");
    console.log("Your E-mail: ",email)
    console.log("")

    let index = email.indexOf("@");
    let firstChar = email[0];

    for(let i = 1; i < index; i++){
        
        firstChar = firstChar + "*";
    }
    
    let newEmail = firstChar + email.slice(index);

    console.log(newEmail)