import React, { useState, useEffect } from 'react';
import sanityClient from '../SanityClient.js';
import { PrimeiraSecDetalhes } from '../components/FilmeComp/PrimeiraSecDetalhes.jsx';
import { SegundaSecEntrevista } from '../components/FilmeComp/SegundaSecEntrevista.jsx';
import { TerceiraSecCreditos } from '../components/FilmeComp/TerceiraSecCreditos.jsx';
import { urlFor } from '../utils/imageUrlBuilder.js';
import { SkeletonHome } from '../components/Skeleton/SkeletonHome';

export function Home() {
	const [film, setFilm] = useState(null);

	useEffect(() => {
		async function getLatestFilm() {
			const filmData = await sanityClient.fetch(`
				*[_type == "filme"] | order(_createdAt desc)[0]{
					nome, 
					realizador, 
					pais, 
					ano, 
					minutos, 
					vimeoId, 
					sinopse, 
					entrevista,
					autorEntrevista, 
					creditos, 
					dataExibicao, 
					stills[0]
				}
			`);
			if (filmData) {
				setFilm(filmData);
			}
		}

		getLatestFilm();
	}, []);

	if (!film) return <SkeletonHome />;

	return (
		<>
			<div
				className='mx-[4.5rem] my-[4.5rem] rounded-[50px] h-[calc(100vh-9rem)]'
				style={{
					backgroundImage: `url(${film.stills ? urlFor(film.stills).url() : 'imgs/placeholder.webp'})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='w-full inset-0 flex h-full flex-col gap-6 justify-center items-center -z-10 px-20 '>
					<div>
						<h1 className='text-9xl font-cine text-white text-center'>{film.nome}</h1>
						<p className='text-lg -mt-3 text-center text-white'>
							um filme de <strong>{film.realizador}</strong>
						</p>
					</div>
					<button
						onClick={() => window.open(`https://vimeo.com/${film.vimeoId}`, '_blank')}
						className='flex items-center justify-center space-x-2 border  rounded-full pl-3 pr-2 py-1  hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '
					>
						<span className='font-bold'>PLAY</span>
						<span className='w-5 h-5'>
							<svg width='100%' height='100%' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM15.2566 11.1728C15.39 11.0958 15.39 10.9033 15.2566 10.8264L9.02232 7.22698C8.88899 7.15 8.72232 7.24623 8.72232 7.40019V14.599C8.72232 14.7529 8.88899 14.8491 9.02232 14.7722L15.2566 11.1728Z'
									fill='currentColor'
								></path>
							</svg>
						</span>
					</button>
				</div>
			</div>

			<div className='mx-[4.5rem] mb-[4.5rem]'>
				<PrimeiraSecDetalhes film={film} />

				<SegundaSecEntrevista film={film} />

				<TerceiraSecCreditos film={film} />
			</div>
		</>
	);
}
