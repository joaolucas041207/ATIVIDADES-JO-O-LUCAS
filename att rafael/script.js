
let numero = document.getElementById('inpNumero')
let resultado = document.getElementById('resultado')
function gerarTabuada(){
    let n= Number(numero.value)
    resultado.innerHTML = ''
    for(let i = 1; i <= 10; i++){
        let multiplicaçao = n * i
        //console.log (n + "x" + 1 + "=" + multiplicaçao)   
        resultado.innerHTML += n + 'x' + i + '=' +  multiplicaçao + "<br>"     
    }

}


function gerarFizzBuzz(){
    let resultado09 = document.getElementById('resultado09')
        for(i=1; i<=100;i++){
            let fizzBuzz = false
            if(i % 3 == 0){
                resultado09.innerHTML += "Fizz"
                FizzBuzz = true
            }if(i % 5 == 0){
                resultado09.innerHTML += "Buzz"
                FizzBuzz = true
            }if(fizzBuzz == false){
                resultado09.innerHTML += i + '<br>'
            }else{
            resultado09.innerHTML += '<br>' 
            }
}
}