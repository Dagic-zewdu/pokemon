const getPokemons = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=$20');
	const { results } = await res.json();
	console.log(results);
};

export { getPokemons };
