const products = {
  laptop: [
    { user: "a", rating: 5 },
    { user: "b", rating: 4 },
    { user: "c", rating: 5 }
  ],
  phone: [
    { user: "d", rating: 4 },
    { user: "e", rating: 4 },
    { user: "f", rating: 4 }
  ],
  tablet: [
    { user: "g", rating: 5 },
    { user: "h", rating: 3 }
  ]
};



// Write a function called getTopRatedProduct(products) that:

// Calculates the average rating for each product.

// Returns the name(s) of the product(s) with the highest average rating.

// If there's a tie, return an alphabetically sorted array of product names.


function getTopRatedProduct(products){
    let maxAvg = 0;
    let highRate = [];


    for(const [key,value] of Object.entries(products)){

      
        let total = 0;
        for(let rate of value){
            total += rate.rating
        }
        let avg = total/value.length
        

        if(avg>maxAvg){
          maxAvg = avg
          highRate = [key]
        }else if(avg == maxAvg){
          highRate.push(key)
        }
        
    }
    return highRate;

}


console.log(getTopRatedProduct(products));

