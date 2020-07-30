// Boton activar y desactivar el modo nocturno
$(document).ready(() => {
    $('.btn-active').click(() => {
        $('body').toggleClass('active')
      })
}) 


//Events Dom

let response = document.getElementById('response')

document.getElementById('key_1').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '1'
    }

    else{
       response.textContent += '1' 
    }
})

document.getElementById('key_2').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '2'
    }

    else{
       response.textContent += '2' 
    }
})

document.getElementById('key_3').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '3'
    }

    else{
       response.textContent += '3' 
    }
})

document.getElementById('key_4').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '4'
    }

    else{
       response.textContent += '4' 
    }
})

document.getElementById('key_5').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '5'
    }

    else{
       response.textContent += '5' 
    }
})

document.getElementById('key_6').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '6'
    }

    else{
       response.textContent += '6' 
    }
})

document.getElementById('key_7').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '7'
    }

    else{
       response.textContent += '7' 
    }
})

document.getElementById('key_8').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '8'
    }

    else{
       response.textContent += '8' 
    }
})

document.getElementById('key_9').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '9'
    }

    else{
       response.textContent += '9' 
    }
})

document.getElementById('key_0').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = ' '
        response.textContent += '0'
    }

    else{
       response.textContent += '0' 
    }
})

document.getElementById('key_decimal').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent += '.'
    }

    else{
       response.textContent += '.'
    }
})

// Operadores
document.getElementById('key_reset').addEventListener('click', () => {
    response.textContent = "0"
    valor_1 = 0
    valor_2 = 0
    operador = ''
})

let valor_1 = 0
let valor_2 = 0
let operador = ''

document.getElementById('key_sumar').addEventListener('click', () => {
    valor_1 = parseFloat(response.textContent)
    operador = 'sumar'
    response.textContent = '0'
})

document.getElementById('key_restar').addEventListener('click', () => {
    if(response.textContent === '0'){
        response.textContent = '-'
    }
    valor_1 = parseFloat(response.textContent)
    operador = 'restar'
    response.textContent = '0'
})

document.getElementById('key_multiplicar').addEventListener('click', () => {
    valor_1 = parseFloat(response.textContent)
    operador = 'multiplicar'
    response.textContent = '0'
})

document.getElementById('key_dividir').addEventListener('click', () => {
    valor_1 = parseFloat(response.textContent)
    operador = 'dividir'
    response.textContent = '0'
})

document.getElementById('key_igual').addEventListener('click', () => {
    valor_2 = parseFloat(response.textContent)
    let resultado

    switch(operador) {
        case 'sumar':
          resultado = sumar(valor_1, valor_2)
          break
          
        case 'restar':
          resultado = restar(valor_1, valor_2)
          break
          
        case 'multiplicar':
          resultado = multiplicar(valor_1, valor_2)
          break
          
        case 'dividir':
          resultado = dividir(valor_1, valor_2)
          break
      }
      
    response.textContent = resultado
    valor_1 = 0
    valor_2 = 0
})

// Funciones de calculo
const sumar = (valor_1, valor_2) => {
    return valor_1 + valor_2
  }
  
  const restar = (valor_1, valor_2) => {
    return valor_1 - valor_2
  }
  
  const multiplicar = (valor_1, valor_2) => {
    return valor_1 * valor_2
  }
  
  const dividir = (valor_1, valor_2) => {
    return valor_1 / valor_2
  }