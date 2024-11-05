import { Link } from 'react-router-dom';
import sanityClient from '../SanityClient.js';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { FilterSearch } from '../components/ArquivoComponentes/FilterSearch.jsx';
import { FilmItem } from '../components/ArquivoComponentes/FilmItem.jsx';
import { createSlug } from '../utils/slug.js';
import { ArchiveList } from '../components/ArquivoComponentes/ArchiveList.jsx';
import { motion, AnimatePresence } from 'framer-motion';



const search = ({ searchTerm, selectedYear, selectedCountry }) =>
	sanityClient.fetch(`
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

const fetchAll = () =>
	sanityClient.fetch(`
	*[_type == "filme"] | order(_createdAt desc) {
		nome,
		realizador,
		ano,
		pais,
		minutos,
		stills[0..4] 
	}
`);

export function Arquivo() {
	const [allFilms, setAllFilms] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isListView, setIsListView] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [selectedCountry, setSelectedCountry] = useState('');

	useEffect(() => {
		if (searchTerm.trim() === '' && selectedYear === '' && selectedCountry === '') {
			fetchAll().then(data => {
				setAllFilms(data);
				setIsLoading(false);
			});
		} else {
			search({ searchTerm, selectedYear, selectedCountry }).then(data => {
				setAllFilms(data);
				setIsLoading(false);
			});
		}
	}, [searchTerm, selectedYear, selectedCountry]);

	const onToggleView = () => {
		setIsListView(!isListView);
	};

	if (isLoading) return <div className='w-screen h-screen fixed flex justify-center items-center'>A Carregar...</div>;

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		768: 1,
	};

	return (
		<>
			<div className='margin-general pt-[2rem] '>
				<FilterSearch
					films={allFilms}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					selectedYear={selectedYear}
					setSelectedYear={setSelectedYear}
					selectedCountry={selectedCountry}
					setSelectedCountry={setSelectedCountry}
					onToggleView={onToggleView}
					isListView={isListView}
				/>

				<div className='pt-8'>
					<AnimatePresence mode='wait'>
						{isListView ? (
							<motion.div key='list' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
								<ArchiveList films={allFilms} />
							</motion.div>
						) : (
							<motion.div key='gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
								<Masonry breakpointCols={breakpointColumnsObj} className='flex gap-6' >
									{allFilms.length > 0 ? (
										allFilms.map(film => (
											<Link to={`/Arquivo/${createSlug(film.nome)}`} key={film.nome}>
												<FilmItem film={film} />
											</Link>
										))
									) : (
										<div>Filme não encontrado</div>
									)}
								</Masonry>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}
