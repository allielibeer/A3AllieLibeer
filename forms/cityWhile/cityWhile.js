
// While Loop
    
let goOn = true
const cityList = []

//gets city name from prompt and add to array and outputs to console when done

while (goOn == true) {
    let newCity = ''
    newCity = prompt("Enter a city name:")
    cityList.push(newCity)
    goOn = confirm("Click OK to continue. Click Cancel to stop.")
}


let i = 0

//outputs to the console each city to lowercase 
while (i < cityList.length) {
    console.log(cityList[i].toLowerCase())
    i++
}

*/