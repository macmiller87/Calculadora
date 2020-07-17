function somar() {
    var n1 = document.getElementById("txtnúmero1")
    var n2 = document.getElementById("txtnúmero2")
    var resultado = document.getElementById("resultado")

    if (n1.value == 0 || n2.value == 0) {
        alert("ERRO DÍGITE UM NÚMERO VALIDO!")
    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var item = document.createElement("option")
        item.text = `A soma é igual a ${num1 + num2}`
        resultado.appendChild(item)
    }

}


function subtrair() {
    var n1 = document.getElementById("txtnúmero1")
    var n2 = document.getElementById("txtnúmero2")
    var resultado = document.getElementById("resultado")

    if (n1.value == 0 || n2.value == 0) {
        alert("ERRO DÍGITE UM NÚMERO VALIDO!")

    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var item = document.createElement("option")

        if (num1 < num2) {
            item.text = `A subtração é igual a ${num2 - num1}`
            resultado.appendChild(item)
        } else {
            item.text = `A subtração é igual a ${num1 - num2}`
            resultado.appendChild(item)
        }
    }

}

function multiplicar() {
    var n1 = document.getElementById("txtnúmero1")
    var n2 = document.getElementById("txtnúmero2")
    var resultado = document.getElementById("resultado")

    if (n1.value == 0 || n2.value == 0) {
        alert("ERRO DÍGITE UM NÚMERO VALIDO!")
    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var item = document.createElement("option")
        item.text = `A multiplicação é igual a ${num1 * num2}`
        resultado.appendChild(item)
    }

}


function dividir() {
    var n1 = document.getElementById("txtnúmero1")
    var n2 = document.getElementById("txtnúmero2")
    var resultado = document.getElementById("resultado")

    if (n1.value == 0 || n2.value == 0) {
        alert("ERRO DÍGITE UM NÚMERO VALIDO!")
    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var item = document.createElement("option")
        item.text = `A divisão é igual a ${num1 / num2}`
        resultado.appendChild(item)
    }

}


function potência() {

    var n1 = document.getElementById("txtnúmero1")
    var n2 = document.getElementById("txtnúmero2")
    var resultado = document.getElementById("resultado")

    if (n1.value == 0 || n2.value == 0) {
        alert("ERRO DÍGITE UM NÚMERO VALIDO!")
    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)
        var item = document.createElement("option")
        item.text = `A potência é igual a ${num1 ** num2}`
        resultado.appendChild(item)
    }

}


function limpar() {

    var n1 = document.getElementById("txtnúmero1")
    var n2 = document.getElementById("txtnúmero2")
    var resultado = document.getElementById("resultado")

    if (n1.value == 0 || n2.value == 0) {
        alert("ERRO DÍGITE UM NÚMERO PARA INICIAR!")
    }
    n1.value = ""
    n1.focus()
    n2.value = ""
    n2.focus()
}