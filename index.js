const txtOp1 = document.getElementById("ope1")
const txtOperador = document.getElementById("operacion")
const txtOp2 = document.getElementById("ope2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtOperador.value
    const ope1 = parseFloat(txtOp1.value)
    const ope2 = parseFloat(txtOp2.value)


    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" )
     && !isNaN(ope1) && !isNaN(ope2) ){
        switch(operacion){
            case "+":
                resultado = ope1 + ope2
                break;
            case "-":
                resultado = ope1 - ope2 
                break;
                case "*":
                    resultado = ope1 * ope2
                    break;
                case "/":
                    resultado = ope1 / ope2
                    break;
 
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    } 

}