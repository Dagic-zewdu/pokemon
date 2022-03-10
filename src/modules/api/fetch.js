const key = 'A1FaHaIXEojEjknuBOqG';
const invUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}`;

const getPokemonList = async (offset = 0) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
  const data = await res.json();
  return data;
};

const getPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
};

const getPokemonByHabitat = async (habitat) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`);
  const data = await res.json();
  return data;
};

const getPokemonLength = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();
  return data.count;
};

const getLikes = async () => {
  const res = await fetch(`${invUrl}/likes/`);
  const data = await res.json();
  return data;
};
const postLikes = async (like) => {
  await fetch(`${invUrl}/likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(like),
  });
};

const commentsLength = async (data) => {
  if (data.length) {
    document.querySelector('.comment-count').innerHTML += ` (${data.length})`;
  }
};

const getComments = async (id) => {
  try {
    const res = await fetch(`${invUrl}/comments?item_id=${id}`);
    const data = await res.json();
    await commentsLength(data);
    return data;
  } catch (err) {
    return (`error found${err}`);
  }
};

const postComments = async (id, user, comment) => {
  await fetch(`${invUrl}/comments`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
  });
};

export {
  getPokemonList,
  getPokemon,
  getPokemonByHabitat,
  getPokemonLength,
  postLikes,
  getLikes,
  getComments,
  postComments,
};
