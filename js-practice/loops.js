const balances = [500, 30, 1200, 80, 900]

for (let i = 0; i < balances.length; i++) {
    if (balances[i] > 100) {
        console.log(balances[i], "Enough balance")
    } else {
        console.log(balances[i], "Not enough balance")
    }

}