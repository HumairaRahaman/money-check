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
}

//calculate button

document.getElementById('calculate-button').addEventListener('click',function (){

    let totalExpense = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    // document.getElementById('total-expenses').innerText = totalExpense;
    
    let valueError = document.getElementById('error-bigValue');
    let inputError = document.getElementById('error-input');
    //error handle
    if(getInputValue('income') < totalExpense){
        errorHandel(true);
    }
    else if(getInputValue('income') < 0  || getInputValue('food') < 0 || getInputValue('rent')< 0 || getInputValue('clothes') < 0){
  
        errorHandel(false);
        
    }
    else{
        //expence
      
        document.getElementById('total-expenses').innerText = totalExpense;
        
        //balance
        let balance = getInputValue('income') - totalExpense;
        document.getElementById('Balance').innerText = balance;
     
    }
   

    
});

document.getElementById('save-button').addEventListener('click', function(){

    //saving amount
    let savingBalance = getInputValue('income') * getInputValue('save') / 100;
    
    document.getElementById('saving-amount').innerText = savingBalance

    //reaming balance
    let totalExpense = getInputValue('food') + getInputValue('rent') + getInputValue('clothes')

    let remainingBalence = getInputValue('income') - (totalExpense+ savingBalance)
   

    document.getElementById('remaining-balance').innerText = remainingBalence;

    //error
    if((getInputValue('income') - totalExpense) < savingBalance){
    errorHandel(true);
    document.getElementById('remaining-balance').innerText = 0;
    document.getElementById('saving-amount').innerText = 0;
    }
    else{
        errorHandel(false);
        document.getElementById('remaining-balance').innerText = 0;
        document.getElementById('saving-amount').innerText = 0;
    }
    clear('save');
    clear('income');
     clear('food');
     clear('rent');
     clear('clothes');

});


//error function

function errorHandel(errorType){
    let valueError = document.getElementById('error-bigValue');
    let inputError = document.getElementById('error-input');
    if (errorType == true){
        valueError.style.display = 'block';
        inputError.style.display = 'none';
        clear('save');
        clear('income');
        clear('food');
        clear('rent');
        clear('clothes');
        
    }
    else{
        inputError.style.display = 'block';
        valueError.style.display = 'none';
        clear('save');
        clear('income');
        clear('food');
        clear('rent');
        clear('clothes');
    }
}

//input vield clear
function clear(cost){
    const valueInput = document.getElementById(cost +'-input');
    valueInput.value = "";
    // const elementValue = parseFloat(valueInput.value);

}
