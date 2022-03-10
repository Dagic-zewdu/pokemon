/* eslint-disable quotes */
import { getPokemonLength } from '../api/fetch';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ count: 1126 }),
}));

document.body.innerHTML = `<p class="number-of-pokemon">List of <span class="highlight"></span> Pokémons and their details which can be sort based on their habitat</p>`;
const title = document.querySelector('.highlight');

describe('Testing Items Count', () => {
  test('pokemon count is 1126', async () => {
    const count = await getPokemonLength();
    title.innerHTML = count;
    expect(count).toBe(1126);
  });

  test('Count of pokemon in DOM', () => {
    expect(+title.textContent).toBe(1126);
  });
});