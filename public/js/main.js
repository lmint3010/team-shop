document.addEventListener('DOMContentLoaded', function() {
    var topmenu = document.querySelector('.menu-fixed');
    var menu = document.querySelector('.main-menu');
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > menu.offsetTop + 50) {
            topmenu.classList.add('visible');
        } else {
            topmenu.classList.remove('visible');
        }
    })
})