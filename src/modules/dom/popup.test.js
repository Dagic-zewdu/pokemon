/* eslint-disable quotes */
import { commentsLength } from '../api/fetch';

document.body.innerHTML = `<h3 class="popup-title comment-count">Comments</h3>`;
const title = document.querySelector('.popup-title');

describe('testing the comments', () => {
  test('testing for comments in dom', () => {
    commentsLength({ length: 10 });
    expect(title.textContent).toBe('Comments (10)');
  });

  test('testing for no comments in dom', () => {
    document.body.innerHTML = `<h3 class="popup-title comment-count">Comments</h3>`;
    commentsLength({});
    expect(document.querySelector('.popup-title').textContent).toBe('Comments');
  });
});