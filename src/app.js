import './styles/style.css';
import './styles/main-body.css';
import { getPokemon, getPokemonList, getPokemonByHabitat } from './modules/api/fetch';
import { fillAllCards } from './modules/dom/render';

let initial = 20;
let scroll = true;
const select = document.getElementById('select');
const allCards = document.querySelector('.all-cards');
const value = +select.value;

// fillAllCards(initial);

const start = async () => {
	const { results } = await getPokemonList();
	fillAllCards(results);
	window.addEventListener('scroll', page);
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
