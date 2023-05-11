$('.close-btn').on('click', function () {
    $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
    $('main').css('display', 'block');
});
$('#deposit').on('click', function () {
    $('#deposit-section').css('display', 'block');
    $('main').css('display', 'none');
});
// $('#close-btn').on('click', function() {
//         $('#deposit-section, #withdraw-section, #transfer-section').css('display', 'none');
//         $('main').css('display', 'block');
// });
$('#withdraw').on('click', function () {
    $('#withdraw-section').css('display', 'block');
    $('main').css('display', 'none');
});
// $('#close-btn').on('click', function() {
//         $('section').css('display', 'none');
//         $('main').css('display', 'block');
// });
$('#transfer').on('click', function () {
    $('#transfer-section').css('display', 'block');
    $('main').css('display', 'none');
});
