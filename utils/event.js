import {add, multiply} from "./math";

const eventHandler = () => {
    const addButton = document.getElementById('add');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    
    const updateDomWithAddedNumbers = () => {
        result.innerHTML = //parseInt(number1.ariaValueMax, 10)+parseInt(number2.ariaValueMax, 10);
        add(number1.value,number2.value)
        multiply(number1.value,number2.value)
    }



    addButton.addEventListener('click', updateDomWithAddedNumbers);
    addButton.addEventListener('click', updateDomWithAddedNumbers);

}

export {eventHandler};