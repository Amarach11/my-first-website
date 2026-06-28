const token = {
    name: "AmaraToken",
    symbol: "AMT",
    totalSupply: 1000000
}

const getTokenInfo = () => {
    return "Name: " + token.name + " | Symbol: " + token.symbol + " | Supply: " + token.totalSupply
}

console.log(getTokenInfo())