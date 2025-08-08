const data = {
  user1: [1, 2],
  user2: [3, 4],
  user3: [5, 6]
};


// Task: Write a function that combines all arrays into one array:
// [1, 2, 3, 4, 5, 6]

function combine(data){
    let single = [];
    for(const [key,value] of Object.entries(data)){
        single.push(...value)
    }
    return single;
}

console.log(combine(data));

