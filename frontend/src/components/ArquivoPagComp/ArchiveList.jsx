import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangProvider';
import { translation } from '../../Lang/translation.js';
import { Plus } from 'lucide-react';

export function ArchiveList({ films, onFilmClick }) {
	const { lang } = useLang();

	return (
		<div className='w-full flex flex-col justify-center gap-4 '>
			<div className='grid grid-cols-4  w-full px-4 -mb-2 iphone:hidden'>
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
					<Link onClick={onFilmClick} to={`/arquivo/${film.slug?.current}`} key={film.slug?.current}>
						<div className='grid grid-cols-4 items-center w-full p-4 border rounded-3xl listHover iphone:hidden gap-4'>
							<div className='col-span-2 text-5xl font-cine iphone:text-center'> {lang === 'PT' ? film.nome : film.nomeENG}</div>

							<div className='col-span-1 text-xl'>
								<span className='font-bold'>
									<span className='hidden iphone:inline font-regular'>de </span>
									{film.realizador}
								</span>
							</div>

							<div className='col-span-1 grid grid-cols-4 w-full text-lg iphone:flex iphone:justify-between'>
								<div className='col-span-2'>{film.pais}</div>
								<div className='col-span-1'>{film.minutos} min</div>
								<div className='col-span-1'>{film.ano}</div>
							</div>
						</div>

						{/* MOBILE VERSION */}
						<div className='hidden iphone:flex iphone:flex-col pl-4 pr-3 pt-4 pb-3 border rounded-3xl'>
							<div className='text-xl leading-[1.688rem]'>
								<div className='text-5xl font-cine '>{film.nome}</div>
								<span className=''>
									{translation[lang].de} <span className='font-bold '>{film.realizador}</span>
								</span>
								<div>
									{film.pais} &bull; {film.minutos} min &bull; {film.ano}
								</div>
							</div>
							<div className=' flex justify-end '>
								<div className='rounded-full border p-1'>
									<Plus />
								</div>
							</div>
						</div>
					</Link>
				))
			) : (
				<div className='p-2  '>{translation[lang].filmeNãoEncontrado}</div>
			)}
		</div>
	);
}
