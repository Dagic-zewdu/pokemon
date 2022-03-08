import './styles/style.css';
import './styles/main-body.css';
import { getPokemon, getPokemonList } from './modules/api/fetch';
import { fillAllCards } from './modules/dom/render';

let ready = false;

fillAllCards();

window.addEventListener('scroll', () => {
	console.log('y ' + window.scrollY);
	console.log('innerHeight ' + window.innerHeight);
	console.log(document.body.offsetHeight);
	console.log('y + innerHeight ' + window.scrollY + window.innerHeight);
	if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000) {
		fillAllCards(20);
	}
});
