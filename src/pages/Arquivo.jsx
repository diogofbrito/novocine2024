import { Link } from 'react-router-dom';
import sanityClient from '../SanityClient.js';
import React, { useEffect, useState } from 'react';
import { Masonry } from '@mui/lab';
import { FilterSearch } from '../components/FilterSearch.jsx';

export function Arquivo() {
	const [films, setFilms] = useState([]);
	const [filteredFilms, setFilteredFilms] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchFilms() {
			const data = await sanityClient.fetch(`
                *[_type == "filme"] | order(_createdAt desc) {
                    nome,
                    realizador,
                    ano,
					pais,
                    minutos,
                    stills[0..4] 
                }
            `);
			setFilms(data);
			setIsLoading(false);
			setFilteredFilms(data);
		}

		fetchFilms();
	}, []);

	const handleSearchChange = async ({ searchTerm, selectedYear, selectedCountry }) => {
		const results = await sanityClient.fetch(`
		*[
  _type == "filme" 
  && !(_id in path("drafts.**"))
  && _score > 0
  ${selectedYear ? `&& ano == ${selectedYear}` : ''}
${selectedCountry ? `&& ano == ${selectedCountry}` : ''}
] | score(
boost(nome match "*${searchTerm}*", 5),
  realizador match "*${searchTerm}*",
  autorEntrevista match "*${searchTerm}*",
  sinopse match "*${searchTerm}*",
  pt::text(entrevista) match "*${searchTerm}*",
  creditos[].conteudo match "*${searchTerm}*"
) | order(_score desc) {
  _score,
  nome,
  realizador,
  ano,
  pais,
  minutos
}`);

		setFilteredFilms(results);
	};

	if (isLoading) return <div className='w-screen h-screen fixed flex justify-center items-center'>A Carregar...</div>;

	return (
		<div className='margin-general pt-6'>
			<FilterSearch films={films} onSearchChange={handleSearchChange} />

			<Masonry columns={{ xs: 1, sm: 3 }} spacing={{ xs: 3, sm: 5 }}>
				{filteredFilms.length > 0 ? (
					filteredFilms.map((film, index) => (
						<article key={index}>
							<Link to=''>
								<div>
									<h1 className='font-cine text-5xl pl-2 '>{film.nome}</h1>
									<img src='/imgs/1.png' className='rounded-[25px] mt-4'></img>
									<div className='flex flex-row justify-between mt-4 pl-2'>
										de António Macedo 68 29min
										<button className='flex items-center justify-center space-x-2 border border-white rounded-full px-3 py-1 text-white hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '>
											<span className='font-bold'>MAIS INFO</span>
										</button>
									</div>
								</div>
							</Link>
						</article>
					))
				) : (
					<div>Filme não encontrado</div>
				)}
			</Masonry>
		</div>
	);
}
