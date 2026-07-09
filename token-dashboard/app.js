const tokenName = document.getElementById("tokenName")
const price = document.getElementById("price")
const counter = document.getElementById("counter")
const changeBtn = document.getElementById("changeBtn")
const colourBtn = document.getElementById("colourBtn")

let clickCount = 0

changeBtn.addEventListener("click", () =>{
    tokenName.textContent = "AmaraToken"
    price.textContent = "Price: $2500"
    clickCount = clickCount + 1
    counter.textContent = "Clicks: " + clickCount
})

let isBlue = false

colourBtn.addEventListener("click", () => {
    if (isBlue === false){
        tokenName.style.color = "blue"
        isBlue = true 
    } else {
        tokenName.style.color = "black"
        isBlue = false
    }
})