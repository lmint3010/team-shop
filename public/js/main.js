<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    let topmenu = document.querySelector('.menu-fixed');
    let menu = document.querySelector('.main-menu');
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > menu.offsetTop + 50) {
            topmenu.classList.add('visible');
        } else {
            topmenu.classList.remove('visible');
        }
    });


    // accordion
    let accordion = document.getElementsByClassName('accordion');
    let allPanel = document.getElementsByClassName('panel');
    for(let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function(event) {
            let panel = event.target.parentElement.nextElementSibling;
            if (panel.style.display === "block"){
                panel.style.display = "none";
            } else {
                for(let j = 0; j < allPanel.length; j++) {
                    allPanel[j].style.display = "none";
                }
                panel.style.display = "block";
            }
        })
    }
})
=======
>>>>>>> edit-task
