const billAmount = document.getElementsByClassName('field')[0];
const customPercentage = document.getElementsByClassName('custom')[0];
const peopleNumber = document.getElementsByClassName('people-field')[0]; 
const zero = document.getElementsByClassName('zero')[0];
const tipPercentage = document.querySelectorAll(".tip");
const tipAmount = document.getElementsByClassName('tip-amount')[0];
const totalAmount = document.getElementsByClassName('total-amount')[0];
const resetButton = document.getElementsByClassName('reset-btn')[0];
let tip = 0, amt = 0, ppl = 0;


tipPercentage.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("selected")) {
            tip = 0;
            btn.classList.remove("selected");
            btn.classList.add("unselected");
        } else {
            tipPercentage.forEach(e => {
                e.classList.remove("selected");
            })
            tip = btn.value;
            btn.classList.remove("unselected");
            btn.classList.add("selected");
        }
        customPercentage.value = "";
        amount();
    });
});

customPercentage.addEventListener("input", ()=>{
    if(customPercentage.value >= 0) {
        {    
        tipPercentage.forEach(e =>{
            e.classList.remove("selected");
        })
            tip = customPercentage.value;
        amount();
    }
    }
})

billAmount.addEventListener("input", (e) => {
    amt = Number(billAmount.value);
    amount()
});

peopleNumber.addEventListener("input", (e)=> {
    ppl = peopleNumber.value;
    if (peopleNumber.value > 0 || peopleNumber.value == "") {
        amount()
        zero.style.display = "none";
    } else {
        zero.style.display = "flex"
    }
});

function amount() {
    if (amt > 0 && ppl > 0) {
       let totalTip = (tip*amt)/(100);
        let totalAmt = amt + totalTip;
        tipAmount.innerHTML = `$${((totalTip)/(ppl)).toFixed(2)}`;
        totalAmount.innerHTML = `$${((totalAmt)/(ppl)).toFixed(2)}`;
    } else {
        totalAmount.innerHTML = "$0.00"
        tipAmount.innerHTML= "$0.00"
    }
}

resetButton.addEventListener('click', ()=> {
    amt = "";
    billAmount.value = ""
    peopleNumber.value = "";
    customPercentage.value = "";
    tipAmount.textContent = "$0.00"
    totalAmount.textContent = "$0.00"

    tipPercentage.forEach(e => {
        tip = 0;
        e.classList.remove("selected");
        e.classList.add("unselected");
    })
});