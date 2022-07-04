const baseUrl = 'https://swapi.dev/api/';
const container = document.querySelector('.container');
const btnGetInfo = document.querySelector('#getInfo');
const btnGetPlanets = document.querySelector('#getPlanets');
const nav = document.querySelector('.nav');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const episode = document.querySelector('#episode');

let page = 1;

async function getInfo() {
    container.innerHTML = '';
    nav.classList.remove('active');
    const request = await fetch(`${baseUrl}films/${episode.value}`);
    const data = await request.json();
    const characters = data.characters;
    for (let i = 0; i < characters.length; i++) {
        const request = await fetch(characters[i]);
        const data = await request.json();
        container.innerHTML += `
        <div class="card">
            <h2 class="card--name">${data.name}</h2>
            <p class="card--birth">Birth: ${data.birth_year}</p>
            <p class="card--gender">Gender: ${data.gender}</p>
        </div>
        `;
    };
};

async function getPlanets() {
    next.disabled = page === 6 ? true : false;
    prev.disabled = page === 1 ? true : false;

    container.innerHTML = '';
    nav.classList.add('active');

    const request = await fetch(`${baseUrl}planets/?page=${page}`);
    const data = await request.json();
    console.log('data: ', data);
    for (let i = 0; i < data.results.length; i++) {
        container.innerHTML += `
        <div class="card">
            <h2 class="card--name">${data.results[i].name}</h2>
        </div>
        `;
    }
}

btnGetInfo.addEventListener('click', getInfo);

btnGetPlanets.addEventListener('click', getPlanets);

next.addEventListener('click', () => {
    page++;
    getPlanets();
});

prev.addEventListener('click', () => {
    page--;
    getPlanets();
});