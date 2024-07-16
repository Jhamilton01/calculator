/*
Author: Jess Hamilton
Psuedo-Code
1. Create the frame of the calculator
2. create buttons that do various task when pressed
    -when the number keys are pressed display that number on the screen
    -when an operation key is pressed save the first number inputted and dont allow for other operations to be inputted unless
    the enter key is selected
    -





*/


//importing the conatiner
const container = document.querySelector('#container')
//MAKING THE DIV ELEMENT 
const contentDiv = document.createElement('div')
const screenDiv = document.createElement('div')
// GIVING THAT DIV An ID names BUTTONS
contentDiv.id ='BUTTONS'
screenDiv.id = 'SCREEN'
screenDiv.textContent = '0'
// add it back to the main container we made in the HTML
container.appendChild(screenDiv)
container.appendChild(contentDiv)
let num1 = ''
let num2 = ''
let operator = null

const screenContainer = document.getElementById('SCREEN')
const buttonsContainer = document.getElementById('BUTTONS')



function main(){
    createButtons()
}

function createButtons(){

    for (let i=9; i >= 0; i--){
        const button = document.createElement('button')
        button.classList.add('numbers')
        button.textContent = i
        buttonsContainer.appendChild(button)
        button.addEventListener('click', () => {
            num1 += i
            screenDiv.textContent = num1
            
        } )
    }

    const operations = '+-÷x=c'
    for (let char of operations){
        const button = document.createElement('button')
        button.classList.add('operations')
        button.textContent = char
        buttonsContainer.appendChild(button)

        button.addEventListener('click', () => {
            handleOperation(button.textContent)
        })
    }

    return () => parseInt(num1, 10)
}


function handleOperation(operationKey){
    switch (operationKey){
        case 'c':
            clear()
            break
        case '=':
            const result = operate(parseFloat(num1),parseFloat(num2),operationKey)
            screenContainer.textContent = result
            break
        case '+':
        case '+':
        case '+':
        case '+':

    }
}

function operate(num1, num2, operator){
    switch (operator){
        case '+':
            addition(num1, num2)
        case '-':
            subtraction(num1, num2)
        case '*':
            multiplication(num1, num2)
        case '÷':
            divison(num1, num2)
        default:
            return
    }
}

function addition(num1, num2){
    const sum = num1 + num2
    return sum
}

function subtraction(num1, num2){
    const difference = num1 - num2
    return difference
}
function multiplication(num1, num2){
    const product = num1 * num2
    return product
}
function divison(num1, num2){
    const quotient = num1 / num2
    return quotient
}

function clear(){
    num1 = ''
    num2 =''
    operator = null
    screenContainer.textContent = '0'
}



main()