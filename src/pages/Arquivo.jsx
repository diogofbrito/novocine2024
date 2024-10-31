import { Link } from 'react-router-dom';
import sanityClient from '../SanityClient.js';
import React, { useEffect, useState } from 'react';
import { Masonry } from '@mui/lab';
import { FilterSearch } from '../components/FilterSearch.jsx';

export function Arquivo() {
	const [films, setFilms] = useState([]);
	const [filteredFilms, setFilteredFilms] = useState([]);
	const [iso, setIso] = useState(null);
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

	const handleFilterChange = ({ searchTerm, selectedYear, selectedCountry }) => {
		let results = films;

		if (searchTerm) {
			const lowerTerm = searchTerm.toLowerCase();
			results = results.filter(film => (film.nome && film.nome.toLowerCase().includes(lowerTerm)) || (film.realizador && film.realizador.toLowerCase().includes(lowerTerm)));
		}

		if (selectedYear) {
			results = results.filter(film => film.ano === parseInt(selectedYear));
		}

		if (selectedCountry) {
			results = results.filter(film => film.pais === selectedCountry);
		}

		setFilteredFilms(results);
	};

	if (isLoading) return <div className='w-screen h-screen fixed flex justify-center items-center'>A Carregar...</div>;

	return (
		<div className='margin-general pt-6'>
			<FilterSearch films={films} onFilterChange={handleFilterChange} />

			<Masonry columns={{ xs: 1, sm: 3 }} spacing={{ xs: 3, sm: 5}}>
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
