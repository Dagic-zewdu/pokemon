const getPokemonList = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=$20');
	const { results } = await res.json();
	return results;
};

const getPokemon = async name => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const data = await res.json();
	return data;
};

const getPokemonbyHabitat = async habitat => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`);
	const data = await res.json();
	return data;
};

export { getPokemonList, getPokemon, getPokemonbyHabitat };
