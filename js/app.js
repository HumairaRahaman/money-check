// document.getElementById('calculate-button').addEventListener('click', function() {

//     const foodField = document.getElementById('food-input').value;
//     const rentField = document.getElementById('rent-input').value;
//     const clothesField = document.getElementById('clothes-input').value;

//     const calculateValue = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);



//     const totalExpenses = document.getElementById('total-expenses').innerText = calculateValue;

//     const incomeField = document.getElementById('income-input').value;

//     const totalBalence = parseFloat(incomeField) - parseFloat(calculateValue)

//     const BalenceOf = document.getElementById('Balance').innerText = totalBalence
// })

// document.getElementById('save-button').addEventListener('click', function() {
//     const incomeField = document.getElementById('income-input').value;
//     console.log(incomeField);
//     const discounField = document.getElementById('save-input').value;
//     console.log(discounField);

//     const Discount = (parseFloat(incomeField) * parseFloat(discounField)) / 100;

//     console.log(Discount);
//     const savingAmount = document.getElementById('saving-amount').innerText = Discount;

//     const BalenceOf = document.getElementById('Balance').innerText;

//     const remainingBalence = parseFloat(BalenceOf) - parseFloat(savingAmount)

//     document.getElementById('remaining-balance').innerText = remainingBalence;
// })


////////////////////////////////////////////////////////////////
// input function
function getInputValue(catagory){
    const valueInput = document.getElementById(catagory +'-input');
    const elementValue = parseFloat(valueInput.value);
    return elementValue;
  
    // calc();
}

//calculate button

document.getElementById('calculate-button').addEventListener('click',function calc(){

    //expence
    let totalExpense = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    document.getElementById('total-expenses').innerText = totalExpense;

    //balance
    let balance = getInputValue('income') - totalExpense;

    document.getElementById('Balance').innerText = balance;
    
});

document.getElementById('save-button').addEventListener('click', function(){

    //saving amount
    let savingBalance = getInputValue('income') * getInputValue('save') / 100;
    
    document.getElementById('saving-amount').innerText = savingBalance

    //reaming balance
    let totalExpense = getInputValue('food') + getInputValue('rent') + getInputValue('clothes')

    let remainingBalence = getInputValue('income') - (totalExpense+ savingBalance)
    console.log(remainingBalence)

    document.getElementById('remaining-balance').innerText = remainingBalence;


});

