const url = "https://pokeapi.co/api/v2/pokemon/";

const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');

const pokeColor = {
    normal: '#A8A878', 
    fire: '#F08030',
    fighting: '#C03028',
    water: '#6890F0',
    flying: '#A890F0',
    grass: '#78C850',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    psychic: '#F85888',
    rock: '#B8A038',
    ice: '#98D8D8',
    bug: '#A8B820',
    ghost: '#705898',
    fairy: '#EE99AC',
    dragon: '#7038F8'
}

const getData = async () => {

    for(let i=1; i<152; i++) {
        const response = await fetch(url+i);
        const data = await response.json();
        const div = document.createElement('div');
        div.className = 'card';

        div.innerHTML = `<p>HP <span>${data.stats[0].base_stat}</span></p>
        <img src="${data.sprites.other.dream_world.front_default}" alt="">
        <p class="name">${data.name}</p>
        <p class='type'><span>${data.types[0].type.name}</span></p>
        <div class="skills">
            <div class="box">
                <span>${data.stats[1].base_stat}</span>
                <span>Attack</span>
            </div>
            <div class="box">
                <span>${data.stats[2].base_stat}</span>
                <span>Defense</span>
            </div>
            <div class="box">
                <span>${data.stats[5].base_stat}</span>
                <span>Speed</span>
            </div>
        </div>`
        div.style.background = `radial-gradient(circle at 50% 0%, ${pokeColor[data.types[0].type.name]} 55%, #fff 60%)`;
        wrapper.appendChild(div);
        div.childNodes[6].firstChild.style.color = `${pokeColor[data.types[0].type.name]}`;
        div.childNodes[6].firstChild.style.padding = `0.3em 0.6em`;
        div.childNodes[6].firstChild.style.background = '#333';
        div.childNodes[6].firstChild.style.borderRadius = '15px';
    }
}
getData();


input.addEventListener('input',(e)=>{
    const names = document.querySelectorAll('.name');
    names.forEach(item=> {
        if(item.innerHTML.includes(e.target.value)) {
            item.parentElement.style.display = 'block';
        }else {
            item.parentElement.style.display = 'none';
        }
    })
})



