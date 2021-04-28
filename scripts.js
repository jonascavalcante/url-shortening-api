/* HEADER */

function menuToggle() {
    
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');  
    
    let links = document.querySelectorAll('.menu a');
    links.forEach(e => e.addEventListener('click', () => menu.classList.remove('active')));
    
    let buttons = document.querySelectorAll('.menu button');
    buttons.forEach(e => e.addEventListener('click', () => menu.classList.remove('active')));
}

/* HEADER */


/* SHORTEN */




/* SHORTEN */