import { getComments } from '../api/fetch';

describe('The counter should work as expected', () => {
  test('The comment length should render properly', () => getComments().then(({ data }) => {
    const allComments = document.querySelector('.messages');
    expect(allComments).toHaveLength(data.length);
  }));
});
