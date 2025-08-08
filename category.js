const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Jeans", category: "Clothing" }
];



// Task: Write a function groupByCategory(products) that returns:

// {
//   Electronics: ["Laptop", "Phone"],
//   Clothing: ["Shirt", "Jeans"]
// }


function groupByCategory(products){
    let result = {};

    for(const product of products){
        const name = product.name;
        const category = product.category;
        console.log(name)

        if(!result[category]){
            result[category] = [];
        }
        
        result[category].push(name)
        
    }

    return result;

}


console.log(groupByCategory(products));

