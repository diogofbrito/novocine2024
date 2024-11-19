import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLang } from '../LangProvider';
import { translation } from '../../Lang/translation';
import { useLenis } from '@studio-freight/react-lenis';

export function FilmNavigation({ adjacentFilms }) {
	const { lang } = useLang();
	const previousFilm = adjacentFilms.prev;
	const nextFilm = adjacentFilms.next;
	const navigate = useNavigate();

	const scrollToTop = () => {
		window.scrollTo(0, 0); // Rola a página para o topo
	};

	const handleNavigation = slug => {
		navigate(`/arquivo/${slug}`);
		scrollToTop(); // Força o scroll para o topo
	};

	useEffect(() => {
		// Garante que o scroll vai para o topo quando a página mudar
		scrollToTop();
	}, []);

	return (
		<div className='flex justify-between mt-[4rem] gap-6 '>
			<div className='w-1/2 flex flex-col items-start gap-2'>
				{previousFilm && (
					<>
						<button
							onClick={() => handleNavigation(previousFilm.slug.current)}
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							{translation[lang].filmeAnterior}
						</button>
						{/* 	<div className='text-6xl font-cine truncate'>{lang === 'PT' ? previousFilm.nome : previousFilm.nomeENG}</div> */}
					</>
				)}
			</div>
			<div className='w-1/2 flex flex-col items-end gap-2 '>
				{nextFilm && (
					<>
						<button
							onClick={() => handleNavigation(nextFilm.slug.current)}
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							{translation[lang].proximoFilme}
						</button>
						{/* 	<div className='text-6xl font-cine truncate text-right'>{lang === 'PT' ? nextFilm.nome : nextFilm.nomeENG}</div> */}
					</>
				)}
			</div>
		</div>
	);
}
