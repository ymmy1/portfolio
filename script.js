// Wrap every letter in a span
$( document ).ready(function() {
    
    goodMorningTitle();
    setTimeout(function(){ frontEndTitle()}, 3000);
});

function sendMail() {
    var link = "mailto:oleg.ymmy@gmail.com"
             + "?cc=chem-pion@mail.ru"
             + "&subject=" + encodeURIComponent(document.getElementById('mySubject').value)
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}

// Good Morning Animate\
function goodMorningTitle()
{
    var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
        anime.timeline({loop: false})
        .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 250,
            delay: (el, i) => 50 * (i+1)
        }).add({
            targets: '.ml3',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

// Front End Developer Animate
function frontEndTitle()
{
    var textWrapper = document.querySelector('.ml5');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    textWrapper.style.opacity = "1"
    anime.timeline({loop: false})
    .add({
        targets: '.ml5 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 250,
        delay: (el, i) => 50 * (i+1)
    }).add({
        targets: '.ml5',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}