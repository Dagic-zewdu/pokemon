import { getPokemonList, getPokemon, getPokemonByHabitat } from '../api/fetch';
// import { scroll } from '../../app.js';

const allCards = document.querySelector('.all-cards');

const fillAllCards = async results => {
	results.forEach(async result => {
		const data = await getPokemon(result.name);
		const html = `<div class="card">
				<div class="card-img">
					<img
						src=${data.sprites.other.home.front_shiny}
						class="pokemon-img"
						alt=""
					/>
				</div>
				<div class="card-info">
					<div class="info">
						<h3 class="title">${result.name}</h3>
						<div class="category">
                        ${types(data.types)}
						</div>
					</div>
					<div class="likes">💝</div>
				</div>
			</div>`;
		allCards.insertAdjacentHTML('beforeend', html);
	});
};

const types = arr => {
	let html = '';
	arr.forEach(el => {
		html += `<span class=${el.type.name}>${el.type.name}</span>`;
	});
	return html;
};

export { fillAllCards };
