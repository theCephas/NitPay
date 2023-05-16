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
    $('main').css('display', 'block');
});
$('#deposit').on('click', function () {
    $('#deposit-section').css('display', 'block');
    $('main').css('display', 'none');
});
$('#withdraw').on('click', function () {
    $('#withdraw-section').css('display', 'block');
    $('main').css('display', 'none');
});
$('#transfer').on('click', function () {
    $('#transfer-section').css('display', 'block');
    $('main').css('display', 'none');
});
var creBtn = document.getElementById('cre-btn');
var createSection = document.getElementById('create-section');
var createForm = document.getElementById('create-form');
var accName = document.getElementById('accNa');
var accNum = document.getElementById('accNu');
var accPin = document.getElementById('accPi');
createForm === null || createForm === void 0 ? void 0 : createForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (accName.value.trim() === '' || accNum.value.trim() === '' || accPin.value.trim() === '') {
        alert('Please fill in all the fields.');
    }
    else {
        localStorage.setItem('accountNameInput', accName.value);
        localStorage.setItem('accNumInput', accNum.value);
        localStorage.setItem('accPinInput', accPin.value);
        window.location.href = 'start.html';
    }
});
var accountNameInput = document.getElementById('act-name');
var accNumInput = document.getElementById('act-num');
var storedAccountName = localStorage.getItem('accountNameInput');
if (storedAccountName !== null) {
    accountNameInput.textContent = storedAccountName === null || storedAccountName === void 0 ? void 0 : storedAccountName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
}
else {
    accountNameInput.textContent = 'xxxxxxxxx';
}
if (localStorage.getItem('accNumInput')) {
    accNumInput.textContent = localStorage.getItem('accNumInput');
}
else {
    accNumInput.textContent = 'xxxxxx';
}
var depositBtn = document.getElementById('deposit-btn');
var accountBalance = document.getElementById('account-balance');
var existingBalance = document.getElementById('act-bal');
var depositPin = document.getElementById('deposit-pin');
depositBtn === null || depositBtn === void 0 ? void 0 : depositBtn.addEventListener('click', function () {
    var parsedAccountBalance = parseInt(accountBalance.value);
    var parsedExistingBalance = parseInt(existingBalance.textContent);
    var newBalance = parsedAccountBalance + parsedExistingBalance;
    if (!isNaN(parsedAccountBalance)) {
        existingBalance.textContent = newBalance.toString();
    }
    if (accountBalance.value.trim() === '' || depositPin.value.trim() === '') {
        alert('Please fill in all the fields.');
    }
    else {
        $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
        $('main').css('display', 'block');
    }
});
var withdrawBtn = document.getElementById('withdraw-btn');
var amountOfWithdrawal = document.querySelector('#amount');
var withdrawPin = document.getElementById('withdraw-pin');
withdrawBtn === null || withdrawBtn === void 0 ? void 0 : withdrawBtn.addEventListener('click', function () {
    var parsedwithdrawAmount = parseInt(amountOfWithdrawal.value);
    var parsedExistingBalance = parseInt(existingBalance.textContent);
    // const newBalance =parsedExistingBalance - parsedwithdrawAmount;
    var afterWithdrawal = parsedExistingBalance - parsedwithdrawAmount;
    if (!isNaN(parsedwithdrawAmount)) {
        existingBalance.textContent = afterWithdrawal.toString();
    }
    if (amountOfWithdrawal.value.trim() === '' || withdrawPin.value.trim() === '') {
        alert('Please fill in all the fields.');
    }
    else if (afterWithdrawal < 0) {
        alert("Total amount is bigger than available balance!");
        existingBalance.textContent = existingBalance.textContent;
    }
    else {
        $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
        $('main').css('display', 'block');
    }
});
var transferBtn = document.getElementById('transfer-btn');
var transferName = document.getElementById('recipient-name');
var transferNumber = document.getElementById('recipient-accNum');
var transferMoney = document.getElementById("reciever-money");
var transferPin = document.getElementById("reciever-pin");
var recipientName = document.getElementById("reci-name");
var recipientAccNum = document.getElementById("reci-accNum");
var recipientMoney = document.getElementById("reci-money");
var doneBtn = document.getElementById("done");
transferBtn === null || transferBtn === void 0 ? void 0 : transferBtn.addEventListener('click', function () {
    var parsedTransferName = parseInt(transferName.value);
    var parsedTransferNumber = parseInt(transferNumber.value);
    var parsedTransferMoney = parseInt(transferMoney.value);
    var parsedExistingBalance = parseInt(existingBalance.textContent);
    var afterTransfer = parsedExistingBalance - parsedTransferMoney;
    if (!isNaN(parsedTransferMoney)) {
        existingBalance.textContent = afterTransfer.toString();
    }
    if (transferName.value.trim() === '' || transferMoney.value.trim() === '' || transferNumber.value.trim() === '' || transferPin.value.trim() === '') {
        alert('Please fill in all the fields.');
    }
    else if (afterTransfer < 0) {
        alert("Insufficient Funds! Please input the right details or you'll be in debt.");
        // existingBalance.textContent = existingBalance.textContent;
    }
    else {
        recipientName.textContent = transferName.value;
        recipientAccNum.textContent = transferNumber.value;
        recipientMoney.textContent = transferMoney.value;
        $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
        $('#confirmation').css('display', 'block');
        doneBtn === null || doneBtn === void 0 ? void 0 : doneBtn.addEventListener('click', function () {
            $('#confirmation').css('display', 'none');
            $("main").css('display', 'block');
        });
    }
});
