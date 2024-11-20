import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../LangProvider';
import { translation } from '../../Lang/translation';
import { routeTranslations } from '../../Lang/translationRoutes.js';


export function FilmNavigation({ adjacentFilms }) {
	const { lang } = useLang();
	const previousFilm = adjacentFilms.prev;
	const nextFilm = adjacentFilms.next;
	const navigate = useNavigate();

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const handleNavigation = slug => {
		navigate(`/${routeTranslations.arquivo[lang]}/${slug}`);
		scrollToTop();
	};

	useEffect(() => {
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
					</>
				)}
			</div>
		</div>
	);
}
