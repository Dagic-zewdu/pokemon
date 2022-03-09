const key = 'A1FaHaIXEojEjknuBOqG';
const invUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}`;

const getPokemonList = async (offset = 0) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
	const data = await res.json();
	return data;
};

const getPokemon = async id => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json();
	return data;
};

const getPokemonByHabitat = async habitat => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`);
	const data = await res.json();
	return data;
};

const getLikes = async () => {
	const res = await fetch(`${invUrl}/likes/`);
	const data = await res.json();
	return data;
};
const postLikes = async like => {
	const res = await fetch(`${invUrl}/likes/`, {
		method: 'POST',
		headers: { 'Content-type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(like),
	});
};

const getComments = async () => {};

const postComments = async () => {};

export { getPokemonList, getPokemon, getPokemonByHabitat, postLikes, getLikes };
