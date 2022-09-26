const preloder = ()=>{
  const preloder = document.querySelector('.preloder');
const swiper = 1;
preloder.classList.add('active');
setTimeout(()=>{
preloder.classList.remove('active');
},3000);
};

preloder();


//console.log(a);