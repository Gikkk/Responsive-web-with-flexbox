const backDrop = document.querySelector('.backdrop');
const chooseBtn = document.querySelectorAll('.plan button');
const modal =  document.querySelector('.modal');
const modalActionNeg = document.querySelector('.modal__action--negative');
const toggleBtn =  document.querySelector('.toggle-button');
const mobileNav =  document.querySelector('.mobile-nav');



for(let i = 0; i < chooseBtn.length; i++){
    chooseBtn[i].addEventListener('click', function(){
        modal.classList.add('open')
        backDrop.classList.add('open')
    })
}

backDrop.addEventListener("click", function() {
    mobileNav.classList.remove('open')
    closeModal();
});

if(modalActionNeg){
    modalActionNeg.addEventListener("click", closeModal);
}

function closeModal() {
    if(modal){
        modal.classList.remove('open')
    }
    backDrop.classList.remove('open')
}

toggleBtn.addEventListener('click', function() {
    mobileNav.classList.add('open')
    backDrop.classList.add('open')
});
