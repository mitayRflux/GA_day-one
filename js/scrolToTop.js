const topBtn = ()=>{
const toTop = document.querySelector('#scrollToTopButton');
toTop.addEventListener('click',(event)=>{
  event.preventDefault();
  seamless.scrollIntoView(document.querySelector(".header"), {
    behavior: "smooth",
    block: "center",
    inline: "center",
});
});

}

topBtn();
