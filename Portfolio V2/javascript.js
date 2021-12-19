$(document).ready(function() {

    let a = $('#a img').css('height');
    $('#b').css('height', a);
    let c = parseInt(a, 10) - 30;
    $('#c').css('top', c);

    let d = $('#d img').css('height');
    $('#e').css('height', d);
    let f = parseInt(d, 10) - 30;
    $('#f').css('top', f); 
    
    let g = $('#g img').css('height');
    $('#h').css('height', g);
    let i = parseInt(g, 10) - 30;
    $('#i').css('top', i);






    $(window).resize(function() {
        let a = $('#a img').css('height');
        $('#b').css('height', a);
        let c = parseInt(a, 10) - 30;
        $('#c').css('top', c);


        let d = $('#d img').css('height');
        $('#e').css('height', d);
        let f = parseInt(d, 10) - 30;
        $('#f').css('top', f);   
        if($('#f').css('height') === '60px') {
            $('#f').css('top', parseInt(d, 10) - 60)
        }

        let g = $('#g img').css('height');
        $('#h').css('height', g);
        let i = parseInt(g, 10) - 30;
        $('#i').css('top', i);

        
    })
    
    $('#down_arrow').click(function() {
        $('html, body').animate({scrollTop: 700}, 3000)
    })

    
    
   
})