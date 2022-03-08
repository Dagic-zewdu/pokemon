import './styles/style.css';
import './styles/main-body.css';
import { getPokemon, getPokemonList } from './modules/api/fetch';
import { fillAllCards } from './modules/dom/render';

let initial = 20;

fillAllCards(initial);

window.addEventListener('scroll', () => {
	if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
		initial += 20;
		fillAllCards(initial);
	}
});
