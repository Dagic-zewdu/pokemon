// import baseUrl from './base-url';
import axios from 'axios';

const baseUrl = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

const getPokemonList = async (offset, limit = 20) => {
	const res = await baseUrl.get(`?offset${offset}=&limit=${limit}`);
	return res.data;
};

const getPokemon = async name => {
	const res = await baseUrl.get(`/${name}`);
	return res.data;
};

const getPokemonByHabitat = async habitat => {
	const res = await baseUrl.get(`-habitat/${habitat}`);
	return res.data;
};

export { getPokemonList, getPokemon, getPokemonByHabitat };
