import { postLikes } from '../api/fetch';
const allCards = document.querySelector('.all-cards');

const liked = localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : [];

export const likeCard = data => {
	allCards.addEventListener('click', e => {
		if (e.target.classList.contains('heart')) {
			const id = +e.target.id;
			if (!liked.includes(id)) {
				liked.push(id);
				e.target.innerHTML = '❤️';
				localStorage.setItem('liked', JSON.stringify(liked));
				postLikes({ item_id: id });
			}
		} else if (e.target.closest('.card')) {
			const target = e.target.closest('.card').dataset.id;
			renderPopup(target);
		}
	});
};

export { liked };
