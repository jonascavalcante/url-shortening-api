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

/* API LINK DOCUMENTATION : https://shrtco.de/docs/ */

const apiLink = 'https://api.shrtco.de/v2/';

let shortenLinkAreas = document.querySelector('.shorten-link-areas');

async function apiFunction() {
    
    const shortenInputValue = document.querySelector('.shorten input').value;
    document.querySelector('.link').innerText = shortenInputValue;
    
    shortenLinkAreas.classList.add('active');

    let req = await fetch(`${apiLink}shorten?url=${shortenInputValue}`);
    let res = await req.json();
    //console.log(res);

    let shortenLinkResult = res.result.short_link;

    document.querySelector('.shorten-link').value = shortenLinkResult;
}

function copyT(e) {

    let copyText = document.getElementById('shorten-link');
    
    copyText.select();
    document.execCommand('copy');

    e.style.backgroundColor = 'hsl(257, 27%, 26%)';
    e.textContent = 'Copied!';
};


/* SHORTEN */