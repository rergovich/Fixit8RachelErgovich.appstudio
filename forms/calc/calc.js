//function to calculate the sum of two numbers
function calculate(a,b) {
  let sum = a +b
  return sum
}

//declared variables
let num1 = parseInt(prompt('Please enter a number.'))
let num2 = parseInt(prompt('Please enter a second number.'))
let summedNumbers = calculate(num1, num2)

//output
console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}.`)

