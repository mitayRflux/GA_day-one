const mainData = ()=>{
fetch('./db.json')
.then((response)=>{
  return response.json();
})
  .then((data)=>{
    console.log(data.anime[35]);
  });
};


mainData();