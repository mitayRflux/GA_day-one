const totop = function(){
  const totop = document.querySelector('#scrollToTopButton');
totop.addEventListener('click',(event)=>{
  event.preventDefault();
  seamless.scrollIntoView(document.querySelector(".header"), {
    behavior: "smooth",
    block: "center",
    inline: "center",
});
});
};

totop();