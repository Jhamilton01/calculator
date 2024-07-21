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
        button.classList.add('number'+i)
        button.textContent = i
        buttonsContainer.appendChild(button)
        button.addEventListener('click', () => {
            getNumber(i) 
        } )
    }

    const operations = ['+', '-', '÷', 'x', '=', 'ce', '←', '.']
    operations.forEach((char, index) => {
        const button = document.createElement('button')
        if(char == '='){
            button.classList.add('operationsEqual')
        } else if (char == '+'){
            button.classList.add('operationsAdd')
        }else if (char == '.'){
            button.classList.add('operationsPoint')
        } else{
            button.classList.add('operations'+char)

        }
        button.textContent = char
        buttonsContainer.appendChild(button)
    
        button.addEventListener('click', () => {
            handleOperation(button.textContent)
    
        })

    })


}

function getNumber(i){
    if (operator){
        num2 += i
        screenDiv.textContent = num1 +' '+ operator +' '+ num2
    }else{
        num1 += i
        screenDiv.textContent = num1
    }
}

function handleOperation(operationKey){
    switch (operationKey){
        case 'ce':
            clear()
            break
        case '←':
            backspace()
        case '=':
            const result = operate(parseFloat(num1),parseFloat(num2),operator)
            screenContainer.textContent = result.toString()
            num1 = result.toString()
            num2 = ''
            operator = null
            break
        case 'x':
        case '-':
        case '+':
        case '÷':
            if (num1 && !operator){
                operator = operationKey
                screenContainer.textContent = num1 + ' ' + operator
            }
            break
            //console.error(`Unknown ioerations: ${operationKey}`)
    }
}

function operate(num1, num2, operator){
    switch (operator){
        case '+':
            return addition(num1, num2)
        case '-':
            return subtraction(num1, num2)
        case 'x':
            return multiplication(num1, num2)
        case '÷':
            return divison(num1, num2)
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

function backspace(){
    //get the number in the ones position of the recently enetered number
    //if currently typing num1
    if (operator) {
        if (num2) {
            num2 = num2.slice(0, -1);
            screenDiv.textContent = num1 + ' ' + operator + ' ' + num2;
        } else {
            operator = null;
            screenDiv.textContent = num1;
        }
    } else if (num1) {
        num1 = num1.slice(0, -1);
        screenDiv.textContent = num1 || '0';
    }

    console.log('num1:', num1, 'num2:', num2, 'operator:', operator, 'screen:', screenDiv.textContent);

}



main()