// import baseUrl from './base-url';
// import axios from 'axios';

// let baseUrl = axios.create({
// 	baseURL: 'https://pokeapi.co/api/v2/pokemon',
// });

const getPokemonList = async offset => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
	const data = await res.json();
	return data;

	// const res = await baseUrl.get(`?offset${offset}=&limit=20`);
};

const getPokemon = async name => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const data = await res.json();
	return data;
	// const res = await baseUrl.get(`/${name}`);
	// return res.data;
};

const getPokemonByHabitat = async habitat => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${habitat}`);
	const data = await res.json();
	return data;
	// const res = await baseUrl.get(`-habitat/${habitat}`);
	// return res.data;
};

export { getPokemonList, getPokemon, getPokemonByHabitat };
