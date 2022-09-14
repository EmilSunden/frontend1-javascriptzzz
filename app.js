const prompt = require('prompt-sync')();


const subfolders = [
        'Variabler',
        'if switcher',
        'Funktioner'
]

for(let i = 0; i < subfolders.length; i++){
    console.log(i + 1 + ". " + subfolders[i])
}

let subfolder = prompt("Välj en modul att köra (1-3): ")


switch(subfolder){
    case "1":
        console.log("Du har valt " + subfolders[0])
        require("./01-variabler/app.js")
        break
    case "2":
        console.log("Du har valt " + subfolders[1])
        require("./02-if-switch/app.js")
        break
    case "3":
        console.log("Du har valt " + subfolders[0])
        require("./03-funktioner/app.js")
        break
    default:
        console.log("Välj en modul mellan 1-3 ")
}


/* subfolders.forEach(subfolder => {
    for(number of subfolder){
        console.log(number)
        require("./01-variabler/app.js")
        require("./02-if-switch/app.js")
        require("./03-funktioner/app.js")
    return subfolder
}
})*/