import React, { useState, useEffect } from 'react';
import sanityClient from '../SanityClient.js';
import { PrimeiraSecDetalhes } from '../components/FilmeComp/PrimeiraSecDetalhes.jsx';
import { SegundaSecEntrevista } from '../components/FilmeComp/SegundaSecEntrevista.jsx';
import { TerceiraSecCreditos } from '../components/FilmeComp/TerceiraSecCreditos.jsx';
import { urlFor } from '../utils/imageUrlBuilder.js';
import { SkeletonHome } from '../components/Skeleton/SkeletonHome';
import { useLang } from '../components/LangProvider';
import { translation } from '../Lang/translation.js';
import { VimeoModal } from '../components/FilmeComp/VimeoModal.jsx';

export function Home() {
	const [film, setFilm] = useState(null);
	const { lang } = useLang();

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
					sinopseENG,
					entrevista,
					entrevistaENG,
					autorEntrevista, 
					autorEntrevistaENG,
					creditos, 
					extras,
					extrasENG,
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
				className='iphone:mx-[1.5rem] iphone:mb-[1.5rem] m-[4.5rem] rounded-[50px] iphone:rounded-[40px]  h-[calc(100vh-9rem)] iphone:h-[calc(100vh-6rem)]'
				style={{
					backgroundImage: `url(${film.stills ? urlFor(film.stills).url() : 'imgs/placeholder.webp'})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='w-full inset-0 flex h-full flex-col gap-6 justify-center items-center -z-10 px-20 '>
					<div>
						<h1 className='text-9xl font-cine text-center iphone:text-7xl'>{film.nome}</h1>
						<div className='iphone:hidden text-lg -mt-3 text-center iphone:text-base iphone:mt-0 '>
							{translation[lang].filmeDe} <strong>{film.realizador}</strong>
						</div>
						<div className='hidden iphone:block text-lg -mt-3 text-center iphone:text-base iphone:mt-0 '>
							{translation[lang].filmeDe} <div><strong>{film.realizador}</strong></div>
						</div>
					</div>
					<VimeoModal videoUrl={film.vimeoId} film={film} />
				</div>
			</div>

			<div className='mx-[4.5rem] iphone:mx-[1.5rem] mb-[4.5rem] iphone:mb-[1.5rem]'>
				<PrimeiraSecDetalhes film={film} />

				<SegundaSecEntrevista film={film} />

				<TerceiraSecCreditos film={film} />
			</div>
		</>
	);
}
