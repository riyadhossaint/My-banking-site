
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposit
   const depositField = document.getElementById('deposit-amount');
   const newDepositAmountText = depositField.value;
    const newDepositeTotal = parseFloat(newDepositAmountText);
   const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositTotal =parseFloat(previousDepositAmountText);

    const newDepositTotals = previousDepositTotal + newDepositeTotal;
    depositTotal.innerText = newDepositTotals;
  // update total balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    const newTotalAmount = previousBalanceAmount + newDepositeTotal;
    balanceTotal.innerText = newTotalAmount;
  

   // clear deposit input field
   depositField.value = '';
   
   
});

// handle withdraw balance by using eventhandler

document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawInput =document.getElementById('withdraw-amount');
   const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmout = parseFloat(withdrawAmountText);
   console.log(newWithdrawAmout);
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = newWithdrawAmout
 + previousWithdrawTotal;

 withdrawTotal.innerText = newWithdrawTotal;


 // update balance
 const balanceTotal = document.getElementById('balance-total');
 const previousBalanceText= balanceTotal.innerText;
 const previousBalanceTotal =parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmout;
balanceTotal.innerText = newBalanceTotal;
// clear withdraw input
 withdrawInput.value = '';
});

