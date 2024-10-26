import sanityClient from '../SanityClient'; 

export async function fetchFilms () {
	const query = '*[_type == "filme"] | order(dataExibicao.dataInicio desc)';
	const films = await sanityClient.fetch(query);
	return films;
};
