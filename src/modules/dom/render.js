import { getPokemonList, getPokemon, getPokemonByHabitat } from '../api/fetch';

const allCards = document.querySelector('.all-cards');

const fillAllCards = async () => {
	const { results } = await getPokemonList(20);
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
                       <span class=${data.types[0].type.name}>${data.types[0].type.name}</span>
						</div>
					</div>
					<div class="likes">💝</div>
				</div>
			</div>`;
		allCards.insertAdjacentHTML('beforeend', html);
	});
};

export { fillAllCards };
