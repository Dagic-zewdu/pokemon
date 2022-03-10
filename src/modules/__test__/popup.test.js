import { getComments } from '../api/fetch';

describe('The counter should work as expected', () => {
  test('The comment length should render properly', async () => {
    const comments = await getComments('bulbasaur');
    expect(comments).toHaveLength(3);
  });
});
