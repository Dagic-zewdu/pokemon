import './styles/style.css';
import './styles/main-body.css';
import { getPokemon, getPokemonList } from './modules/api/fetch';
import { fillAllCards } from './modules/dom/render';

let initial = 20;
let scroll = true;

fillAllCards(initial);

window.addEventListener('scroll', async () => {
	if (scroll && window.scrollY + window.innerHeight >= document.body.offsetHeight - 400) {
		scroll = false;
		initial += 20;
		await fillAllCards(initial);
		scroll = true;
	}
});
