//importing the conatiner
const conatiner = document.querySelector('#container')
//MAKING THE DIV ELEMENT 
const operationsDiv = document.createElement('div')
// GIVING THAT DIV An ID names BUTTONS
operationsDiv.id ='BUTTONS'
// add it back to the main container we made in the HTML
conatiner.appendChild(operationsDiv)



function main(){
    createButtons()
}

function createButtons(){

    const buttonsContainer = document.getElementById('BUTTONS')

    for (let i=0; i < 10; i++){
        const button = document.createElement('button')
        button.classList.add('numbers')
        button.textContent = i
        buttonsContainer.appendChild(button)
    }

    const operations = '+-÷x='
    for (let char of operations){
        const button = document.createElement('button')
        button.classList.add('operations')
        button.textContent = char
        buttonsContainer.appendChild(button)
    }
}

main()