function sendMail() {
    var link = "mailto:oleg.ymmy@gmail.com"
             + "?cc=chem-pion@mail.ru"
             + "&subject=" + encodeURIComponent(document.getElementById('mySubject').value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}