jQuery(document).ready(function($) {

    $('.contact-link').click(function(e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top - 20
        }, 750);
    });

    $('.hover_place').mouseenter( handlerIn ).mouseleave( handlerOut );
});

function handlerIn () {
    $( this ).find(".hover").css( "opacity", "1" );
}
function handlerOut () {
    $( this ).find(".hover").css( "opacity", "0" );
}

function sendMail() {
    var link = "mailto:oleg.ymmy@gmail.com"
             + "?cc=chem-pion@mail.ru"
             + "&subject=" + encodeURIComponent(document.getElementById('mySubject').value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}