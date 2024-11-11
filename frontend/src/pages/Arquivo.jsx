import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../SanityClient.js';
import Masonry from 'react-masonry-css';
import { FilterSearch } from '../components/ArquivoPagComp/FilterSearch.jsx';
import { FilmItem } from '../components/ArquivoPagComp/FilmItem.jsx';
import { SkeletonArchiveMasonry } from '../components/Skeleton/SkeletonArchiveMasonry.jsx';
import { ArchiveList } from '../components/ArquivoPagComp/ArchiveList.jsx';
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
			slug,
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
		slug,
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

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		768: 1,
	};

	return (
		<>
			<div className='mx-[4.5rem] mb-[3rem] mt-[4.5rem] pt-[2rem] iphone:pt-2 iphone:mx-[1.5rem] iphone:mb-[1.5rem] '>
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

				<div className='pt-6'>
					<AnimatePresence mode='wait'>
						{isLoading ? (
							<SkeletonArchiveMasonry />
						) : (
							<motion.div key={isListView ? 'list' : 'gallery'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
								{isListView ? (
									<ArchiveList films={allFilms} />
								) : (
									<Masonry breakpointCols={breakpointColumnsObj} className='flex gap-6'>
										{allFilms.length > 0 ? (
											allFilms.map(film => (
												<Link to={`/arquivo/${film.slug?.current}`} key={film.slug?.current}>
													<FilmItem film={film} />
												</Link>
											))
										) : (
											<div>Filme não encontrado</div>
										)}
									</Masonry>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}
