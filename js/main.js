let elList = document.querySelector(".list");
let elBtn1 = document.querySelector(".btn__1");
let elBtn2 = document.querySelector(".btn__2");
let elBtnClean = document.querySelector(".btn__clean");
let elResult = document.querySelector(".result");
let bothBtn = document.querySelector('.btn__3');
let elPokemonLogo = document.querySelector(".pokemon__logo");
let elMoviesLogo = document.querySelector(".movies__logo");


let pokemonArray = pokemons;
let moviesArray = movies.slice(0, 151);

elBtn1.addEventListener("click", function () {
    elList.innerHTML = null
    render(pokemonArray)
    elPokemonLogo.style = "display:block"
    elMoviesLogo.style = "display:none"
});

elBtn2.addEventListener("click", function () {
    elList.innerHTML = null
    render(moviesArray)
    elMoviesLogo.style = "display:block"
    elPokemonLogo.style = "display:none"
});

bothBtn.addEventListener("click", function () {
    elList.innerHTML = null
    render(bothArray)
    elMoviesLogo.style = "display:block"
    elPokemonLogo.style = "display:block"
});

elBtnClean.addEventListener("click", function () {
    elList.innerHTML = null
    elList.innerHTML = `<li class="list__item text-center m-0">Choose buttons!</li>`
    elResult.textContent = "Cleaned" 
    elPokemonLogo.style = "display:none"
    elMoviesLogo.style = "display:none"
});

function render(array) {
    elResult.textContent = array.length
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item"
        
        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newH5 = document.createElement("h5");
        let newH6 = document.createElement("h6");
        let newsH6 = document.createElement("h6");
        let newHref = document.createElement("a");
        newImg.width = "200"
        
        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
            newH5.textContent = item.type;
            newH6.textContent = item.weight;
            newsH6.textContent = item.height;
            newHref.style = "display:none"
        }else {
            newH3.textContent = item.Title;
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newH5.textContent = item.fulltitle;
            newH6.textContent = item.imdb_rating;
            newsH6.textContent = item.movie_year;
            newHref.href = `https://www.youtube.com/watch?v=${item.ytid}`;
            newHref.textContent = "Watch trailer";
        }
        
        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newH5);
        newLi.appendChild(newH6);
        newLi.appendChild(newsH6);
        newLi.appendChild(newHref);
        
        
        elList.appendChild(newLi);
    }
}

bothBtn.addEventListener('click', function() {  
    let bothArray = movies.concat(pokemons);
    render(bothArray)
});

