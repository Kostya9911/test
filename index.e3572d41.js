let e;const a=document.querySelector(".hero__list");(async(e,a=1)=>{const n=await fetch("https://api.themoviedb.org/3/search/movie?api_key=eb611ceade777fa79974e7594715897c&language=en-US&query=terminator&page=1&include_adult=false");return await n.json()})().then((n=>{e=n.results,function(e){const n=e.map((({title:e,id:a,release_date:n,genre_ids:t,poster_path:i,vote_average:s})=>`<li class="film-card" data-action="${a}">\n        <div class="film-card__img-thumb">\n          <a class="film-card__link" href="#"\n            ><img\n              class="film-card__img"\n              src="https://image.tmdb.org/t/p/w500${i}"\n              alt="movie poster"\n          /></a>\n        </div>\n        <h2 class="film-card__title">${e}</h2>\n        <div class="film-card__thumb-info">\n          <p class="film-card__genre">${t}</p>\n          <p class="film-card__line">|</p>\n          <p class="film-card__year">${n}</p>\n          \n        </div>\n      </li>`)).join("");a.insertAdjacentHTML("beforeend",n)}(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.e3572d41.js.map
