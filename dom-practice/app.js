const tokenName = document.getElementById("tokenName")
tokenName.textContent = "ZenkaiToken"

const tokenPrice = document.getElementById("tokenPrice")
tokenPrice.textContent = "Price: 2500"

tokenName.style.color = "purple"
tokenName.style.fontSize = "60px"
tokenPrice.style.color ="green"

const myButton = document.getElementById("myButton")

myButton.addEventListener("click", () => {
    tokenName.textContent = "Button was clicked!"
    tokenName.style.color = "red"
    tokenPrice.textContent = "Price: 9999"
})