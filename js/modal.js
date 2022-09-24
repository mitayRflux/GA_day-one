const modal = document.querySelector('.search-model');
const modalBtn = document.querySelector('.icon_search');
const modalClose = modal.querySelector('.search-close-switch');


console.dir(modal);
//console.log(modalBtn);

modalBtn.addEventListener('click',()=>{
  modal.style.display = 'block';
//console.log('click');
});
modalClose.addEventListener('click',()=>{
  modal.style.display = 'none';
//console.log('click');
});