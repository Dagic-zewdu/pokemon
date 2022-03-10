import {
  getPokemon,
  getComments,
  postComments,
} from '../api/fetch';
// eslint-disable-next-line import/no-cycle
import { types } from './render';

const container = document.querySelector('.popup-section');

const newDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};
const renderPopup = async (id) => {
  const data = await getPokemon(id);
  const comments = await getComments(id);
  let count = comments.length === undefined ? 0 : comments.length;
  const allComments = comments?.error?.status === 400
    ? 'No comments found'
    : comments.map((comment) => `<p><span class="date">${comment.creation_date}</span> | <span class="username">${comment.username}:</span><span class="user-message">${comment.comment}</span></p>`).join('');
  container.innerHTML = '';
  container.hidden = false;
  /* eslint-disable */

  const html = `<div class="popup">
				<svg class="close-btn" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
					/>
				</svg>
				<div class="popup-header">
					<div class="popup-img">
						<img
							src=${data.sprites.other.home.front_shiny}
							alt="${data.name} image"
						/>
						<h3 class="popup-title">${data.name}</h3>
                        <div class="category type-popup">
                        ${types(data.types)}
						</div>
						
					</div>
					<ul class="stats">
						<h3>Base stats:</h3>
						<li class="each-stat" title="weight">
							<svg viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z"
								/>
							</svg>
							<span>${data.weight}</span>
						</li>
						<li class="each-stat" title="height">
							<svg viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21"
								/>
							</svg>
							<span>${data.height}</span>
						</li>
						<li class="each-stat" title="HP">
							<svg viewBox="0 0 24 24">
								<path fill="currentColor" d="M18 14H14V18H10V14H6V10H10V6H14V10H18" />
							</svg>
							<span>${data.stats[0].base_stat}</span>
						</li>
						<li class="each-stat" title="Attack">
							<svg viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z"
								/>
							</svg>
							<span>${data.stats[1].base_stat}</span>
						</li>
						<li class="each-stat" title="Defense">
							<svg viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"
								/>
							</svg>
							<span>${data.stats[2].base_stat}</span>
						</li>
						<li class="each-stat" title="Special Attack">
							<svg viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"
								/>
							</svg>
							<span>${data.stats[3].base_stat}</span>
						</li>
						<li class="each-stat" title="Special defense">
							<svg viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M15.08 16L12 14.15L8.93 16L9.74 12.5L7.03 10.16L10.61 9.85L12 6.55L13.39 9.84L16.97 10.15L14.26 12.5L15.08 16Z"
								/>
							</svg>
							<span>${data.stats[4].base_stat}</span>
						</li>
						<li class="each-stat" title="Speed">
							<svg viewBox="0 0 24 24">
								<path fill="currentColor" d="M11 15H6L13 1V9H18L11 23V15Z" />
							</svg>
							<span>${data.stats[5].base_stat}</span>
						</li>
					</ul>
				</div>
				<div class="popup-form">
					<h3 class="popup-title comment-count">Comments (${count})</h3>
						<div class="messages">
							${allComments}
						</div>
					<form action="post" class="form">
						<input id="name" class="input-name" type="text" placeholder="Your name" required />
						<textarea class="input-name" type="text" id="comment" name="comment" row="3" placeholder="Leave your message" required></textarea>
                        <button type="submit" class="comment-btn">Comment</button>
					</form>
				</div>
			</div>`;
  /* eslint-enable */
  container.innerHTML = html;
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    container.hidden = true;
  });
  const messages = document.querySelector('.messages');

  const form = document.querySelector('.form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputName = document.querySelector('.input-name');
    const inputMessage = document.getElementById('comment');
    postComments(data.id, inputName.value, inputMessage.value);
    const html = `<p><span class="date">${newDate()}</span> | <span class="username">${
      inputName.value}:</span><span class="user-message">${inputMessage.value}</span></p>`;
    if (messages.textContent.trim() === 'No comments found') {
      messages.textContent = '';
    }
    messages.insertAdjacentHTML('beforeend', html);
    count += 1;
    document.querySelector('.comment-count').innerText = `Comments (${count})`;
    inputName.value = '';
    inputMessage.value = '';
  });
};
export default renderPopup;