const num1= document.getElementById("num1")
const num2 = document.getElementById("num2")
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")
const divide  = document.getElementById("divide")
const result = document.getElementById("result")

add.addEventListener("click", () => {
    const number1 = Number(num1.value)
    const number2 = Number(num2.value)
    const answer = number1 + number2
    result.textContent = "Result: " + answer
})

subtract.addEventListener("click", () => {
    const number1 = Number(num1.value)
    const number2 = Number(num2.value)
    const answer = number1 - number2
    result.textContent = "Result: " + answer
})

multiply.addEventListener("click", () => {
    const number1 = Number(num1.value)
    const number2 = Number(num2.value)
    const answer = number1 * number2
    result.textContent = "Result: " + answer
})

divide.addEventListener("click", () => {
    const number1 = Number(num1.value)
    const number2 = Number(num2.value)
    const answer = number1 / number2
    result.textContent = "Result: " + answer
})
