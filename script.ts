$('#cre-btn').on('click', function () {
  $('#create-section').css('display', 'block');
  $('.index-page').css('display', 'none');
});

$('#clo-btn').on('click', function () {
  $('#create-section').css('display', 'none');
  $('.index-page').css('display', 'block');
});

$('.close-btn').on('click', function () {
  $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
  $('main').css('display', 'block')
});
$('#deposit').on('click', function () {
  $('#deposit-section').css('display', 'block');
  $('main').css('display', 'none')
});

$('#withdraw').on('click', function () {
  $('#withdraw-section').css('display', 'block');
  $('main').css('display', 'none')
});

$('#transfer').on('click', function () {
  $('#transfer-section').css('display', 'block');
  $('main').css('display', 'none')
});


const creBtn = document.getElementById('cre-btn');
const createSection = document.getElementById('create-section');
const createForm = document.getElementById('create-form');
const accName = document.getElementById('accNa') as HTMLInputElement;
const accNum = document.getElementById('accNu') as HTMLInputElement;
const accPin = document.getElementById('accPi') as HTMLInputElement;


createForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (accName.value.trim() === '' || accNum.value.trim() === '' || accPin.value.trim() === '') {
    alert('Please fill in all the fields.');
  } else {
    localStorage.setItem('accountNameInput', accName.value);
    localStorage.setItem('accNumInput', accNum.value);
    localStorage.setItem('accPinInput', accPin.value);
    window.location.href = 'start.html';
  }
});

const accountNameInput = document.getElementById('act-name') as HTMLSpanElement;
const accNumInput = document.getElementById('act-num') as HTMLSpanElement;

const storedAccountName = localStorage.getItem('accountNameInput');
if (storedAccountName !== null) {
  accountNameInput.textContent = storedAccountName?.replace(/\b\w/g, (c) => c.toUpperCase());
} else {
  accountNameInput.textContent = 'xxxxxxxxx';
}

if (localStorage.getItem('accNumInput')) {
  accNumInput!.textContent = localStorage.getItem('accNumInput');
} else {
  accNumInput!.textContent = 'xxxxxx';
}

const depositBtn = document.getElementById('deposit-btn');

const accountBalance = document.getElementById('account-balance') as HTMLInputElement;
const existingBalance = document.getElementById('act-bal') as HTMLInputElement;

const depositPin = document.getElementById('deposit-pin') as HTMLInputElement;
depositBtn?.addEventListener('click', function () {
  const parsedAccountBalance = parseInt(accountBalance.value);
  const parsedExistingBalance = parseInt(existingBalance.textContent!);

  const newBalance = parsedAccountBalance + parsedExistingBalance;

  
  if (!isNaN(parsedAccountBalance)) {
    existingBalance.textContent = newBalance.toString();
  }
  if (accountBalance.value.trim() === '' || depositPin.value.trim() === '') {
    alert('Please fill in all the fields.');
    
  }else {
    
    $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
    $('main').css('display', 'block')
  }
});

const withdrawBtn = document.getElementById('withdraw-btn');

const amountOfWithdrawal = document.querySelector('#amount') as HTMLInputElement;

const withdrawPin = document.getElementById('withdraw-pin') as HTMLInputElement;
withdrawBtn?.addEventListener('click', function () {
  const parsedwithdrawAmount = parseInt(amountOfWithdrawal.value);
  const parsedExistingBalance = parseInt(existingBalance.textContent!);

  // const newBalance =parsedExistingBalance - parsedwithdrawAmount;

  const afterWithdrawal: number = parsedExistingBalance - parsedwithdrawAmount;
  
  if (!isNaN(parsedwithdrawAmount)) {
    existingBalance.textContent = afterWithdrawal.toString();
  }
  if (amountOfWithdrawal.value.trim() === '' || withdrawPin.value.trim() === '') {
    alert('Please fill in all the fields.');
    
  }else if (afterWithdrawal < 0 ){
    alert("Total amount is bigger than available balance!")
    existingBalance.textContent = existingBalance.textContent;
  }else {
    
    $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
    $('main').css('display', 'block')
  }
});

const transferBtn = document.getElementById('transfer-btn');
const transferName = document.getElementById('recipient-name') as HTMLInputElement;
const transferNumber = document.getElementById('recipient-accNum') as HTMLInputElement;
const transferMoney = document.getElementById("reciever-money") as HTMLInputElement;
const transferPin = document.getElementById("reciever-pin") as HTMLInputElement;
const recipientName = document.getElementById("reci-name") as HTMLSpanElement;
const recipientAccNum = document.getElementById("reci-accNum") as HTMLSpanElement;
const recipientMoney = document.getElementById("reci-money") as HTMLSpanElement;
const doneBtn = document.getElementById("done");

transferBtn?.addEventListener('click', function(){
  const parsedTransferName = parseInt(transferName.value);
  const parsedTransferNumber = parseInt(transferNumber.value);
  const parsedTransferMoney = parseInt(transferMoney.value);
  const parsedExistingBalance = parseInt(existingBalance.textContent!);
  const afterTransfer = parsedExistingBalance - parsedTransferMoney;

  if (!isNaN(parsedTransferMoney)) {
    existingBalance.textContent = afterTransfer.toString();
  }
  if (transferName.value.trim() === '' || transferMoney.value.trim() === '' || transferNumber.value.trim() === '' || transferPin.value.trim() === '') {
    alert('Please fill in all the fields.');
    
  }else if (afterTransfer < 0){
    alert("Insufficient Funds! Please input the right details or you'll be in debt.")
    // existingBalance.textContent = existingBalance.textContent;
  }else {
    recipientName.textContent = transferName.value;
    recipientAccNum.textContent = transferNumber.value;
    recipientMoney.textContent = transferMoney.value;
    $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
    $('#confirmation').css('display', 'block');

    doneBtn?.addEventListener('click', function(){
      $('#confirmation').css('display', 'none');
      $("main").css('display', 'block');
    });
  }

  

  
});