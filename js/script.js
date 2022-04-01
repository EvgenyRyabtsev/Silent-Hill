window.addEventListener('DOMContentLoaded', () => {

const   modal           = document.querySelector('.modal'),
        modalClose      = document.querySelector('.modal__close');


let interval = setTimeout( () => {
    showModal()
},30000);

function showModal () {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    clearInterval(interval);
}

function closeModal () {
    modal.style.display = "";
    document.body.style.overflow = '';
} 

document.addEventListener('click', (e) => { 
     if (e.target === modal)      
    closeModal() 
})

modalClose.addEventListener('click', (e) =>{
    closeModal() 
})

document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
    closeModal() 
})

function showModalByScroll (){
    if(window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        showModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll); 







})