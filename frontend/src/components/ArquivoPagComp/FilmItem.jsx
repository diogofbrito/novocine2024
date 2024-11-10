import React , { useState } from 'react';
import { urlFor } from '../../utils/imageUrlBuilder';
import { Skeleton } from '@mui/material';
import { useLang } from '../LangProvider';
import { translation } from '../../translation.js';


export function FilmItem({ film }) {
	const [imageLoaded, setImageLoaded] = useState(false);
	const { lang } = useLang();

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div className='relative pb-6'>
			<div className='group relative mb-[1px] overflow-hidden rounded-3xl shadow-custom transition-all duration-300 ease-custom'>
				{!imageLoaded && <Skeleton variant='rectangular' width='100%' height={500} sx={{ bgcolor: 'grey.800', borderRadius: '20px' }} />}
				<img
					src={film.stills && film.stills[0] ? urlFor(film.stills[0]).url() : 'imgs/placeholder.webp'}
					alt={film.nome}
					loading='lazy'
					className='w-full h-full object-cover'
					onLoad={handleImageLoad}
				/>

				<div className='absolute inset-0 hidden md:flex flex-col items-center justify-center bg-opacity-50 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-custom'>
					<div className='p-8 text-center flex flex-col items-center'>
						<p className='text-6xl font-cine'>{film.nome}</p>
						<p className='text-md text-center text-white'>
							{translation[lang].de} <strong>{film.realizador}</strong>
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
