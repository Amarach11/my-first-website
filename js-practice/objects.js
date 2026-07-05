const token = {
    name: "AmaraToken",
    symbol:"AMT",
    price: 500,
    isLaunched: false
}

console.log(token)

token.isLaunched = true
token.price = 750 

console.log(token)

token.demand = 1000000
console.log(token)

delete token.symbol
console.log(token)