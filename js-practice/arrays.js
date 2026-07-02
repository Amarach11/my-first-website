const tokens = ["ETH", "USDC", "DAI"]
console.log(tokens)
console.log("Length:", tokens.length)

tokens.push("LINK")
console.log(tokens)
console.log("Length:",  tokens.length)

tokens.pop()
console.log(tokens)
console.log("Length:", tokens.length)

console.log("position of USDC:", tokens.indexOf("USDC"))
console.log("position of ETH:", tokens.indexOf("ETH"))

console.log("Has ETH?", tokens.includes("ETH"))
console.log("Has BTC?", tokens.includes("BTC"))