//Login form hide js

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {

  const wrapper = document.getElementById('client-login-area');
  wrapper.style.display = 'none';
  //transaction area show js  
  const transactionArea = document.getElementById('transaction-area');
  transactionArea.style.display = 'block';

});

//deposit button event handler


const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {

  const depositNumber = getInputNumber('depositAdd');

  updateSpanText('currentBalance', depositNumber);
  updateSpanText('currentDeposit', depositNumber);
  document.getElementById('depositAdd').value = '';
});

//withdraw button event handler

const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function () {

  const withdrawNumber = getInputNumber('withdrawAmount');
  updateSpanText('currentWithdraw', withdrawNumber);
  updateSpanText('currentBalance', -1 * withdrawNumber);
  document.getElementById('withdrawAmount').value = '';

})

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

// update span text function

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalBalance = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalBalance;
}