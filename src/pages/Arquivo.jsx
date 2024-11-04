import { Link } from 'react-router-dom';
import sanityClient from '../SanityClient.js';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FilterSearch } from '../components/ArquivoComponentes/FilterSearch.jsx';
import { FilmItem } from '../components/ArquivoComponentes/FilmItem.jsx';
import { createSlug } from '../utils/slug.js';
import { ArchiveList } from '../components/ArquivoComponentes/ArchiveList.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const FILMS_PER_LOAD = 15;

export function Arquivo() {
	const [allFilms, setAllFilms] = useState([]); 
	const [filteredFilms, setFilteredFilms] = useState([]);
	const [displayedFilms, setDisplayedFilms] = useState([]); 
	const [isLoading, setIsLoading] = useState(true);
	const [isListView, setIsListView] = useState(false);
	const [showLoadMore, setShowLoadMore] = useState(true);

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
			setAllFilms(data);
			setFilteredFilms(data);
			setDisplayedFilms(data.slice(0, FILMS_PER_LOAD)); 
			setIsLoading(false);
			setShowLoadMore(data.length > FILMS_PER_LOAD); 
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
			${selectedCountry ? `&& pais == "${selectedCountry}"` : ''}
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
				minutos,
				stills[0..4]
			}`);

		setFilteredFilms(results);
		setDisplayedFilms(results); 
		setShowLoadMore(false); 
	};

	const loadMoreFilms = () => {
		const newDisplayCount = displayedFilms.length + FILMS_PER_LOAD;
		setDisplayedFilms(filteredFilms.slice(0, newDisplayCount));
		setShowLoadMore(newDisplayCount < filteredFilms.length); 
	};

	const onToggleView = () => {
		setIsListView(!isListView);
	};

	if (isLoading) return <div className='w-screen h-screen fixed flex justify-center items-center'>A Carregar...</div>;

	return (
		<>
			<div className='margin-general pt-[2rem] '>
				<FilterSearch films={filteredFilms} onSearchChange={handleSearchChange} onToggleView={onToggleView} isListView={isListView} />

				<div className='pt-8'>
					<AnimatePresence mode='wait'>
						{isListView ? (
							<motion.div key='list' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
								<ArchiveList films={displayedFilms} />
							</motion.div>
						) : (
							<motion.div key='gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
								<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} className='w-full'>
									<Masonry gutter='2rem'>
										{displayedFilms.length > 0 ? (
											displayedFilms.map(film => (
												<Link to={`/Arquivo/${createSlug(film.nome)}`} key={film.nome}>
													<FilmItem film={film} />
												</Link>
											))
										) : (
											<div>Filme não encontrado</div>
										)}
									</Masonry>
								</ResponsiveMasonry>
							</motion.div>
						)}
					</AnimatePresence>

					{showLoadMore && (
						<div className='flex justify-center mt-4'>
							<button
								onClick={loadMoreFilms}
								className='border rounded-full py-1 px-3   hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] '
							>
								Carregar Mais
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
