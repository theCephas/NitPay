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

$('#deposit-btn').on('click', function(){
    var accountName = $('#account-name').val();
    
    var accountBalance = parseInt($('#account-balance').val());

    var existingbalance = parseInt($('#act-bal').text());

    var newBalance = accountBalance + existingbalance;

    var accountNumber = $('#account-number').val();

    
    if (accountName){
        $('#act-name').text(accountName);
    }
    if (accountNumber){
        $('#act-num').text(accountNumber);
    }
    
    if(accountBalance){
        $('#act-bal').text(newBalance);
    }

    $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
    $('main').css('display', 'block');
})

$('#withdraw-btn').on('click', function(){
    var accountName = $('.account-name').val();
    
    var accountBalance = parseInt($('.amount').val());

    var existingbalance = parseInt($('#act-bal').text());

    var newBalance = existingbalance - accountBalance;

    var accountNumber = $('#account-number').val();

    
    if (accountName){
        $('#act-name').text(accountName);
    }
    if (accountNumber){
        $('#act-num').text(accountNumber);
    }
    
    if(accountBalance){
        $('#act-bal').text(newBalance);
    }

    $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
    $('main').css('display', 'block');
})
