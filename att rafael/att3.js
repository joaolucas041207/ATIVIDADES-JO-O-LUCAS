//Altere o programa anterior para fornecer a tabuada do número que o usuário pedir.

let tabuada, result = ""
tabuada = Number (prompt('qual tabuada você quer'))
for(let i = 0; i <=  10; i++){
    result += tabuada + "x" + i + "="
    + (tabuada * i) + "\n"

}
alert("tabuada" + "\n" + result)