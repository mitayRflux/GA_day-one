const mainData = ()=>{


  const renderAnimeList = (arrey,ganres)=>{
    const wrapper = document.querySelector('.product .col-lg-8');
    wrapper.innerHTML = '';  


   ganres.forEach((ganre)=>{
    const productBlock=document.createElement('div');//делаем контейнер
    const listBlock = document.createElement('div');//делаем блок
    const list = arrey.filter(item=>item.ganre===ganre);//фильтруем массив по жанрам

    listBlock.classList.add('row');//добавляем блоку класс
    



    productBlock.insertAdjacentHTML('afterbegin',`
         <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8">
              <div class="section-title">
                  <h4>${ganre}</h4>
               </div>
              </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                   <div class="btn__all">
                     <a href="/categories.html" class="primary-btn">View All <span class="arrow_right"></span></a>
                   </div>
                </div>
          </div>
    `);
    list.forEach((item)=>{
      listBlock.insertAdjacentHTML('afterbegin',`
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${item.image}">
              <div class="ep">${item.rating}/ 10</div>
              <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
            </div>
                <div class="product__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                <h5><a href="/anime-details.html">${item.title}</a></h5>
          </div>
         </div>
      </div>
      `);
    });

    productBlock.append(listBlock);//добавляем блок в блок
    wrapper.append(productBlock);//добавляем блок в контейнер
    wrapper.querySelectorAll('.set-bg').forEach((elem)=>{
      elem.style.backgroundImage= `url(${elem.dataset.setbg})`;
    });
   });
  };

 const renderTopAnime = (arrey)=>{
    const wrapp = document.querySelector('.filter__gallery');
   wrapp.innerHTML='';
     arrey.forEach((item)=>{
   wrapp.insertAdjacentHTML('afterBegin',`
   <div class="product__sidebar__view__item set-bg mix"
      data-setbg="${item.image}">
       <div class="ep">${item.rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
         <h5><a href="/anime-details.html">${item.title}</a></h5>
   </div>
   `);
   });
   wrapp.querySelectorAll('.set-bg').forEach((elem)=>{
     elem.style.backgroundImage= `url(${elem.dataset.setbg})`;
   });
 };

fetch('./db.json')
.then((response)=>{
 return response.json();
})
 .then((data)=>{
   const ganres=new Set();
   renderTopAnime(data.anime.sort((a,b)=> b.views-a.views).slice(0,5));
   data.anime.forEach((item)=>{
     ganres.add(item.ganre);
   });
   renderAnimeList(data.anime,ganres);
 });
};


mainData();