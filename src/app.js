import './styles/style.css';
import './styles/main-body.css';
import { getPokemon, getPokemonList, getPokemonByHabitat } from './modules/api/fetch';
import { fillAllCards } from './modules/dom/render';
import { likeCard } from './modules/dom/handleLikes';

let initial = 0;
let scroll = true;
const select = document.getElementById('select');
const allCards = document.querySelector('.all-cards');
const title = document.querySelector('.number-of-pokemon');

const start = async () => {
	const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon');
	const allPokemon = await pokemon.json();
	const html = `<p class="number-of-pokemon">List of <span class="highlight">${allPokemon.count}</span> Pokémons and their details which can be sort based on their habitat</p>`;
	title.innerHTML = '';
	title.insertAdjacentHTML('beforeend', html);
	const { results } = await getPokemonList();
	fillAllCards(results);
	window.addEventListener('scroll', page);
	likeCard();
};

start();
const page = async () => {
	if (scroll && window.scrollY + window.innerHeight >= document.body.offsetHeight - 400) {
		scroll = false;
		initial += 20;
		const { results } = await getPokemonList(initial);
		await fillAllCards(results);
		scroll = true;
	}
};

select.addEventListener('change', async () => {
	const id = +select.value;
	if (id === 0) {
		allCards.innerHTML = '';
		start();
		return;
	} else window.removeEventListener('scroll', page);
	const res = await getPokemonByHabitat(id);
	const data = res.pokemon_species;
	allCards.innerHTML = '';
	await fillAllCards(data);
});
