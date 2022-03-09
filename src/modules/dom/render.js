import { getPokemon, getLikes } from '../api/fetch';
import { liked } from './handleLikes';

const allCards = document.querySelector('.all-cards');

const fillAllCards = async results => {
	const allLikes = await getLikes();
	results.forEach(async result => {
		const data = await getPokemon(result.name);
		let ifLikes = allLikes.find(el => el.item_id == data.id);
		const likes = ifLikes ? ifLikes.likes : '';
		const like = liked.includes(data.id) ? '❤️' : '🖤';
		const html = `<div class="card" data-id=${data.id}>
				<div class="card-img">
					<img
						src=${data.sprites.other.home.front_shiny}
						class="pokemon-img"
						alt="${result.name} image"
					/>
				</div>
				<div class="card-info">
					<div class="info">
						<h3 class="title">${result.name}</h3>
						<div class="category">
                        ${types(data.types)}
						</div>
					</div>
					<div class="likes"><span class="heart" id=${
						data.id
					}>${like}</span> <span class="count">${likes}</span></div>
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

export { fillAllCards, types };
