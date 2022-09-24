const preloder = document.querySelector('.preloder');

preloder.classList.add('active');
setTimeout(()=>{
preloder.classList.remove('active');
},1000);
//console.log(a);