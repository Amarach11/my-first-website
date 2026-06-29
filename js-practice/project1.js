const wallets = [
    {address: "0xAAA", balance: 600},
    {address: "0xBBB", balance: 80},
    {address: "0xCCC", balance: 250},
    {address: "0xDDD", balance: 1200},
    {address: "0xEEE", balance: 45},
]

console.log(wallets)

const checkAccess = (wallet) => {
    if (wallet.balance > 500) {
        return wallet.address + "->VIP Access"
    } else if (wallet.balance > 100){
        return wallet.address + "->Regular Access"
    } else {
        return wallet.address + "->Access Denied"
    }
}

for (let i =0; i < wallets.length; i++) {
    console.log(checkAccess(wallets[i]))
}