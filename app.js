const billAmount = document.getElementsByClassName('field')[0];
const customPercentage = document.getElementsByClassName('custom')[0];
const peopleNumber = document.getElementsByClassName('people-field')[0]; 
const fivePercent =  document.getElementsByClassName('five')[0];
const tenPercent = document.getElementsByClassName('ten')[0];
const fifteenPercent = document.getElementsByClassName('fifteen')[0];
const twentyFive = document.getElementsByClassName('twenty-five')[0];
const fiftyPercent = document.getElementsByClassName('fifty')[0];
const tipAmount = document.getElementsByClassName('tip-amount')[0];
const totalAmount = document.getElementsByClassName('total-amount')[0];
const resetButton = document.getElementsByClassName('reset-btn')[0];

peopleNumber.addEventListener("input", (e)=> {
        updateTotal()
});

function updateTotal() {
    if(peopleNumber.value > 0) {
        totalAmount.textContent = `$${billAmount.value/peopleNumber.value}`;
    } else {
        totalAmount.textContent = "$0.00"
    }
}