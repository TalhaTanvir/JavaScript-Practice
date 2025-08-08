// Given an array of objects, return the total sum of a specific property.
const items = [
  { name: "apple", price: 50 },
  { name: "banana", price: 30 },
  { name: "orange", price: 20 },
];
// Output: 100 (sum of all prices)

let sumPrice = 0;
for(const item of items){
    sumPrice += item.price
}

console.log(sumPrice)