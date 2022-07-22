//Variables
let nombre, genero, peso, altura, edad, calculoImc, mensaje, rtaMenu, respuesta, calculoTmbH, calculoTmbM

//Funciones 
function ingresoDatos() {
    do {
        nombre = prompt("Ingrese su nombre: ")
        genero = prompt("Ingrese su género (H o M): ").toLowerCase()
        edad = parseInt(prompt("Ingrese su edad en años: "))
        peso = parseFloat(prompt("Ingrese su peso en kilogramos: "))
        altura = parseInt(prompt("Ingrese su altura en centímetros: "))

        if (isNaN(peso) || peso <= 0) {
            mensaje = "Por favor ingrese un número válido en el peso \n"
        }
        else { mensaje = "" }

        if (isNaN(altura) || altura <= 0) {
            mensaje += "Por favor ingrese un número válido en la altura \n"
        }
        else { mensaje += "" }

        if (genero != "h" && genero != "m") {
            mensaje += "Por favor ingrese H o M en el género"
        }
        else { mensaje += "" }

        if (isNaN(edad) || edad <= 0) {
            mensaje += "Por favor ingrese un número válido en la edad"
        }
        else { mensaje += "" }

        if (mensaje != "") {
            alert(mensaje)
        }

    } while (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0 || (genero != "h" && genero != "m" || isNaN(edad) || edad <= 0));
}

function imc() {
    ingresoDatos()
    resultadoImc(genero, peso, altura)
}

const calcularIMC = (peso = 0, altura = 0) => (peso / Math.pow(altura / 100, 2))

function resultadoImc(genero, peso, altura) {
    switch (genero) {
        case "h":
            calculoImc = calcularIMC(peso, altura)

            if (calculoImc <= 20) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Bajo peso`)
            }
            else if (20 < calculoImc && calculoImc <= 25) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Peso normal`)
            }
            else if (25 < calculoImc && calculoImc <= 30) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad leve`)
            }
            else if (30 < calculoImc && calculoImc <= 40) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad severa`)
            }
            else if (40 < calculoImc) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad muy severa`)
            }
            break
            
        case "m":
            calculoImc = calcularIMC(peso, altura)

            if (calculoImc <= 20) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Bajo peso`)
            }
            else if (20 < calculoImc && calculoImc <= 24) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Peso normal`)
            }
            else if (24 < calculoImc && calculoImc <= 29) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad leve`)
            }
            else if (29 < calculoImc && calculoImc <= 37) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad severa`)
            }
            else if (37 < calculoImc) {
                alert(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad muy severa`)
            }
            break
    }
}

function tmb() {
    ingresoDatos()
    resultadoTmb(genero, peso, edad, altura)
}

function resultadoTmb(genero = "", peso = 0, altura = 0, edad = 0) {

    switch (genero) {
        case "h":
            calculoTmbH = ((10 * peso) + (6.25 * altura) + (5 * edad) + 5)
            alert(`Hola ${nombre}! El número de calorías que necesitas por día para estar saludable es: ${calculoTmbH.toFixed(0)} `)
            break

        case "m":
            calculoTmbM = ((10 * peso) + (6.25 * altura) + (5 * edad) - 161)
            alert(`Hola ${nombre}! El número de calorías que necesitas por día para estar saludable es: ${calculoTmbM.toFixed(0)} `)
            break
    }
}


//Menú 
do {
    rtaMenu = parseInt(prompt("Seleccione una opción del menú: \n 1- Calcular Índice de Masa Corporal \n 2- Calcular Tasa Metabólica Basal (Calorías necesarias por día)\n 0- Salir"))
    if (rtaMenu === 1) {
        imc()
    }
    else if (rtaMenu === 2) {
        tmb()
    }
    else if (rtaMenu === 0) {
        alert("Gracias por tu visita!")
        break
    }
    else {
        alert("Por favor ingrese una opción válida")
    }
} while (rtaMenu !== 1 || rtaMenu !== 2 || rtaMenu !== 0)




