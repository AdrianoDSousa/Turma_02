let alt = 1
let acp = true



function podeSubir(alt, acp) {
    if (alt >= 1.4 && alt <= 2) {
    console.log("positivo!!!")
    } 
    else if ((alt < 1.4 && alt >= 1.2) && acp) {
    console.log("Positivo com exceção!!!")
    } 
    else {
    console.log("Negativo!!!")
    }
}
podeSubir(1.2, false)