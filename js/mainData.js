const mainData = ()=>{
   const renderAnimeList = (arrey,ganres)=>{
     console.log(arrey);
     console.log(ganres);

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