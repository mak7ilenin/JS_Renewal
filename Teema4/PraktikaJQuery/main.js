$(document).ready(function() {

    $('#hideBtn').click(() => {
        $('p:first').toggleClass('text-animate');
        $('p:first').css('transition', 'ease all 1s');
        console.log($('#hideBtn').attr('class'));
        if(!$('p:first').hasClass('text-animate')) {
            $('#hideBtn').text('Hide Text');
        }
        if($('p:first').hasClass('text-animate')) {
            $('#hideBtn').text('Show Text');
        }
    });

    var controll = false;
    $('#n4').css('display', 'none');
    $('#n5').css('display', 'none');
    // ----------------------
    $('#but1').click(() => {
        $('#n1').fadeIn(1500);
        $('#n2').hide();
    });
    $('#but2').click(() => {
        $('#n2').fadeIn(1500);
        $('#n1').hide();
    });
    // -----------------
    $('#result').text('Characters output: ' + $(this).val().length);
    $('#username').keyup(() => {
        let k = $('#username').val().length;
        console.log(k);
        $('#result').text('Characters output: ' + k);
        // left?
        let n = $('#username').attr('maxlength');
        $('#counter').text('Left for output: ' + (n-k) + ' from ' + n);
    })

});