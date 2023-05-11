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
