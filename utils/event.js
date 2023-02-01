import {add, multiply} from "./math";

const eventHandler = () => {
    const addButton = document.getElementById('add');
    const multButton = document.getElementById('mult');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    
    const updateDomWithAddedNumbers = () => {
        result.innerHTML = add(number1.value,number2.value)
    }
    
    const updateDomWithMultipliedNumbers = () => {
        result.innerHTML = multiply(number1.value,number2.value)
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multButton.addEventListener('click', updateDomWithMultipliedNumbers);

}

export {eventHandler};