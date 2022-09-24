const elements = document.querySelectorAll('.set-bg');


//console.log(elements);

for(let i= 0;i<elements.length;i++){
const src = elements[i].dataset.setbg;
//elements[i].style.backgroundImage= 'url('+src+')';
elements[i].style.backgroundImage= `url(${src})`;
//console.dir(src);
}