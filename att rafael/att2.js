//imprima a tabuada do 5

let tabuada, result = ""
tabuada = Number (prompt('digite um numero n°'))
for(let i = 0; i <=  10; i++){
    result += tabuada + "x" + i + "="
    + (tabuada * i) + "\n"

}
alert("tabuada" + "\n" + result)
