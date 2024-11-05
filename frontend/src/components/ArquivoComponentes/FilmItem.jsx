import React from 'react';
import { urlFor } from '../../utils/imageUrlBuilder';
import LazyLoad from 'react-lazyload';

export function FilmItem({ film }) {
	return (
		<div className='relative pb-6'>
			<div className='group relative mb-[1px] overflow-hidden rounded-3xl shadow-custom transition-all duration-300 ease-custom'>
				<LazyLoad>
					<img src={film.stills && film.stills[0] ? urlFor(film.stills[0]).url() : 'imgs/placeholder.webp'} alt={film.nome} loading='lazy' className='w-full h-full object-cover' />
				</LazyLoad>
				<div className='absolute inset-0 hidden md:flex flex-col items-center justify-center bg-opacity-50 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-custom'>
					<div className='p-8 text-center flex flex-col items-center'>
						<p className='text-6xl font-cine'>{film.nome}</p>
						<p className='text-md text-center text-white'>
							de <strong>{film.realizador}</strong>
						</p>
						<div className='flex items-center justify-center text-sm'>
							{film.ano} &bull; {film.pais} &bull; {film.minutos} min
						</div>
					</div>
				</div>
			</div>

			<div className='md:hidden flex flex-row gap-3 items-center justify-between m-1 '>
				<p className='text-base'>{film.nome}</p>
			</div>
		</div>
	);
}
