import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangProvider';
import { translation } from '../../translation.js';

export function ArchiveList({ films }) {
	const { lang } = useLang();
	return (
		<div className='w-full flex flex-col justify-center gap-4 '>
			<div className='grid grid-cols-4  w-full px-4 '>
				<p className='col-span-2 '>{translation[lang].titulo}</p>
				<p className='col-span-1 '>{translation[lang].realizador}</p>
				<div className='col-span-1 grid grid-cols-4 w-full'>
					<p className='col-span-2'>{translation[lang].pais}</p>
					<p className='col-span-1'>{translation[lang].duracao}</p>
					<p className='col-span-1'>{translation[lang].ano}</p>
				</div>
			</div>
			{films.length > 0 ? (
				films.map(film => (
					<Link
						to={`/arquivo/${film.slug?.current}`}
						key={film.slug?.current}
						className='grid grid-cols-4 items-center w-full p-4 border rounded-3xl hover:bg-[var(--text-color-light)] dark:hover:bg-[var(--text-color-dark)]'
					>
						<p className='col-span-2 text-5xl font-cine max-md:text-base  '>{film.nome}</p>

						<p className='col-span-1  '>
							 <span className='font-bold'>{film.realizador}</span>
						</p>

						<div className='col-span-1 grid grid-cols-4 w-full'>
							<p className='col-span-2'>{film.pais}</p>
							<p className='col-span-1'>{film.minutos} min</p>
							<p className='col-span-1'>{film.ano}</p>
						</div>
					</Link>
				))
			) : (
				<div className='p-2'>No projects found</div>
			)}
		</div>
	);
}
