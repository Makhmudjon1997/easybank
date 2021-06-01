let openBtnElement = document.querySelector('.open-btn');
let navListElement = document.querySelector('.nav-list');
let bodyElement= document.querySelector('.generation    ');
let navListItemsElement = document.querySelectorAll('.nav-link');

openBtnElement.addEventListener('click', () =>{
    openBtnElement.classList.toggle('activated'),
    navListElement.classList.toggle('activated'),
    bodyElement.style.backgroundColor = 'grey';
})

navListItemsElement.forEach(navItem => {
    navItem.addEventListener('click', ()=> {
        openBtnElement.classList.remove('activated');
        navListElement.classList.remove('activated');
        bodyElement.style.backgroundColor = 'white';
    })
})

