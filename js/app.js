let scrollHtml = document.querySelector('.scroll');
let line = document.querySelector('.line');
let sub = document.querySelector('.sub');

window.addEventListener('scroll', function(){
    let body = document.querySelector('body');
    let totalHeight = body.clientHeight;
    let countHeight = totalHeight - window.innerHeight;
    let scroll = window.scrollY;
    let result = Math.round((100 / countHeight ) * scroll);
    
    scrollHtml.style.backgroundImage = `conic-gradient(#00ffff ${result}% , rgb(207, 204, 204) ${result}%)`

    sub.innerHTML = result + '%'
    line.style.width = `${result}%`

})

function scrollToTop(){
    window.scrollTo(0,0);
}

