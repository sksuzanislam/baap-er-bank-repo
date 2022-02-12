document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const dipositAmaount = parseFloat(depositAmountText)
    // console.log(depositAmount)

    //get carrent deposit

    const depositTotal = document.getElementById('deposit-total');
    const deposiTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(deposiTotalText)
    depositTotal.innerText = previousDepositTotal + dipositAmaount
    console.log(deposiTotalText)
    // update balace
    const balanceTotat = document.getElementById('balance-total');
    const balanceTotatText = balanceTotat.innerText;
    const previousBalanceTotal = parseFloat(balanceTotatText);
    balanceTotat.innerText = previousBalanceTotal + dipositAmaount
    // clear input field
    depositInput.value = '';

})
// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmaountText = withdrawInput.value;
    withdrawAmaount = parseFloat(withdrawAmaountText)

    //upadate withdaw total
    const withdrawTotal = document.getElementById('withDraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmaount;

    //Up date banlce after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotatText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotatText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmaount
    //clear input field
    withdrawInput.value = '';
})
