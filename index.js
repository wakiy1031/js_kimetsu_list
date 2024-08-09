const GITHUB_URL = 'https://ihatov08.github.io/';
const API_URL = 'https://ihatov08.github.io/kimetsu_api/api/';

function getCategoryFileName(category) {
  switch(category) {
    case '鬼殺隊':
      return 'kisatsutai';
    case '柱':
      return 'hashira';
    case '鬼':
      return 'oni';
    default:
      return 'all';
  }
}

async function fetchCharacters(category = 'all') {
  try {
    const fileName = getCategoryFileName(category);
    const response = await fetch(`${API_URL}${fileName}.json`);
    if (!response.ok) {
      throw new Error(`サーバーエラーです。`);
    }
    const characters = await response.json();
    displayCharacters(characters);
  } catch (error) {
    console.error( "エラー：", error.message );
  }
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

document.querySelectorAll('input[name="category"]').forEach(radio => {
  radio.addEventListener('change', (event) => {
    fetchCharacters(event.target.value);
  });
});

fetchCharacters();