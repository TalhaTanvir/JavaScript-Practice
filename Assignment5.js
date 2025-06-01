let itemsPrice = [250,645,300,900,50];

let discount = [];

for(let i=0; i < itemsPrice.length; i++){
    let offPrice = itemsPrice[i] - (itemsPrice[i] * 0.10);
    discount.push(offPrice)
}

console.log(discount)