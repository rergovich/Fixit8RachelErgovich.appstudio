//declare variables and add first and last name to an array
let name = prompt('What is your full name (first and last)?')
let splitName = name.split(" ")
let userName = splitName.join("")
let i = 0
let letterNumber = 0

//while loop to output each letter of the name
while (i < userName.length) {
  letterNumber = i + 1
  console.log(`Letter ${letterNumber} is: ${userName[i]}.`)
  i++
}
