// the tempin kelvin
const kelvin = 0
// temp in celsius
var celsius = kelvin - 273
// temp in fahrenheit 
let fahrenheit = celsius * (9/5) + 32
// rounded test
console.log(Math.round(fahrenheit))
// rounded fahrenheit again
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log( `The temperature is ${newton} degrees Newton.`)