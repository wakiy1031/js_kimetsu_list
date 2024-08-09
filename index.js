const GITHUB_URL = 'https://ihatov08.github.io/';
const API_URL = 'https://ihatov08.github.io/kimetsu_api/api/';

async function fetchCharacters() {
  const response = await fetch(`${API_URL}all.json`);
  const characters = await response.json();
  displayCharacters(characters);
}

function displayCharacters(characters) {
  const container = document.getElementById('character-container');
  container.innerHTML = '';

  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.className = 'character-card';
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${GITHUB_URL}${character.image}">
      <p>カテゴリ: ${character.category}</p>
    `;
    container.appendChild(characterElement);
  });
}

fetchCharacters();