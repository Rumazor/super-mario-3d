const menuButton = document.querySelector('#mobile-menu');

menuButton.addEventListener('click', e =>{
    const menu = document.querySelector('.mobile-links');

    menu.classList.toggle('hidden');
});


