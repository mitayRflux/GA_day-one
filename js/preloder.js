const preloder = ()=>{
  const preloder = document.querySelector('.preloder');
preloder.classList.add('active');
setTimeout(()=>{
preloder.classList.remove('active');
},3000);

}

preloder();