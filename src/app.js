import './styles/style.css';
import './styles/main-body.css';
import { getPokemonList, getPokemonByHabitat, getPokemonLength } from './modules/api/fetch';
import { fillAllCards } from './modules/dom/render';
import { likeCard } from './modules/dom/handleLikes';
import './styles/spinner.css';

let initial = 0;
let scroll = true;
const select = document.getElementById('select');
const allCards = document.querySelector('.all-cards');
const title = document.querySelector('.highlight');

const page = async () => {
  if (scroll && window.scrollY + window.innerHeight >= document.body.offsetHeight - 400) {
    scroll = false;
    initial += 20;
    const { results } = await getPokemonList(initial);
    await fillAllCards(results);
    scroll = true;
  }
};
const start = async () => {
  const length = await getPokemonLength();
  title.innerHTML = '';
  title.insertAdjacentHTML('beforeend', length);
  const { results } = await getPokemonList();
  fillAllCards(results);
  window.addEventListener('scroll', page);
  likeCard();
};

start();

select.addEventListener('change', async () => {
  const id = +select.value;
  if (id === 0) {
    allCards.innerHTML = '';
    start();
    return;
  } window.removeEventListener('scroll', page);
  const res = await getPokemonByHabitat(id);
  const data = res.pokemon_species;
  allCards.innerHTML = '';
  await fillAllCards(data);
});
