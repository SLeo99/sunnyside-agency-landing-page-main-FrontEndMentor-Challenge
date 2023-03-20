const hamburguer = document.querySelector('.hamburguer');
const burguerList = document.querySelector('.navbar__list');

hamburguer.addEventListener('click', ()=> {
    let isOpen = burguerList.getAttribute('aria-expanded');
    const burguerAriaAtt = (bool)=> {
        burguerList.setAttribute('aria-expanded', bool);
    }
    isOpen == 'false' ? burguerAriaAtt('true') : burguerAriaAtt('false');

    hamburguer.classList.toggle('hamburguer--opened');
});
