const openModal = document.querySelector('#watch-trailer-btn');
const modal     = document.querySelector('.modal');
const closeModal = document.querySelector('#btn-cerrar');
const videoMario = document.querySelector('#video-mario');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    
});


