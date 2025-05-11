// import {anime} from animejs 
const pokemons = document.querySelectorAll('.pokemon');
const centerImg = document.getElementById('center-img');
const centerName = document.getElementById('center-name');
const centerDescription = document.getElementById('center-description');
const centerDisplay = document.getElementById('center-display');
const closeBtn = document.getElementById('close-btn');
const dialContainer = document.getElementById('dial-container');

const hoverDisplay = document.getElementById('hover-display');
const hoverImg = document.getElementById('hover-img');

pokemons.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    dialContainer.style.animationPlayState = 'paused';

    centerImg.src = pokemon.src;
    centerName.textContent = pokemon.dataset.member;
    centerDescription.textContent = pokemon.dataset.description;

    centerDisplay.style.top = '50%';
    centerDisplay.style.left = '50%';
    centerDisplay.classList.remove('hidden');
  });

  pokemon.addEventListener('mouseenter', (e) => {
    const imgSrc = pokemon.src;
    const name = pokemon.dataset.member;
   

    hoverImg.src = imgSrc;
    hoverDisplay.innerHTML = `
        <img src="${imgSrc}" alt="${name}" class="w-24 h-24 mx-auto rounded-lg">
        <h3 class="font-bold text-lg mt-1">${name}</h3>`;
        dialContainer.style.animationPlayState = 'paused';
    hoverDisplay.style.left = `${e.pageX + 15}px`;
    hoverDisplay.style.top = `${e.pageY - 30}px`;
    hoverDisplay.classList.remove('hidden');
});

pokemon.addEventListener('mousemove', (e) => {
    hoverDisplay.style.left = `${e.pageX + 45}px`;
    hoverDisplay.style.top = `${e.pageY - 30}px`;
});

pokemon.addEventListener('mouseleave', () => {
    hoverDisplay.classList.add('hidden');
    dialContainer.style.animationPlayState = 'running';
});
});

closeBtn.addEventListener('click', () => {
  centerDisplay.classList.add('hidden');
  dialContainer.style.animationPlayState = 'running';
});
