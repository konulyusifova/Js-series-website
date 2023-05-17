let row=document.querySelector(".row")

axios.get('https://api.tvmaze.com/shows').then(res => {

var datas=res.data;

datas.forEach(el =>{
    row.innerHTML += ` <div class="col-3">
    <div class="card">
    <img src="${el.image.medium}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.externals.imdb}</p>
          <a href="${el.url}" class="btn btn-primary">Details</a>
        </div>
      </div>
</div>`
})
});
