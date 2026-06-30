const Tokens = [
    
    {name: "IyToken", symbol: "IYT", price: 500},
    
   { name: "AbToken", symbol: "ABT", price: 50},

   {name: "MoToken", symbol: "MOT", price: 250},

   {name: "AmaraToken", symbol: "AMT", price: 2500}
]

console.log(Tokens)

const checkPrice = (Token) => {
if (Token.price > 1000) {
    console.log("Premium Token")
} else if (Token.price > 100) {
    console.log("Mid Token")
} else {
    console.log("Low Value Token")
}
}

for (let i = 0; i < Tokens.length; i++) {
    checkPrice(Tokens[i])
}