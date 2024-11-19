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
import { Helmet } from 'react-helmet-async';
import { Intro } from '../components/Intro.jsx';
import { Dates } from '../components/Dates.jsx';


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
					videoUrl, 
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
			<Helmet>
				<title>Novocine</title>
				<meta name='description' content='Novocine é uma sala de cinema online que disponibiliza gratuitamente um novo filme a cada vinte dias.' />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='novocine, cinema, portugal,  lisboa, lingua, portuguesa, filmes, filme, indie, filmes indie' />
			</Helmet>
			<Intro />
			<Dates dataInicio={film.dataExibicao} dataFim={film.dataExibicao} />
			<div
				className='iphone:mx-[1rem] iphone:mb-[1rem] m-[4.5rem] rounded-[50px] iphone:rounded-[40px]  h-[calc(100vh-9rem)] iphone:h-[calc(100vh-5.5rem)]'
				style={{
					backgroundImage: `url(${film.stills ? urlFor(film.stills).url() : 'imgs/placeholder.webp'})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='w-full inset-0 flex h-full flex-col gap-5 justify-center items-center -z-10 px-20 '>
					<div>
						<div className='text-[9rem] font-cine text-center iphone:text-7xl '>{film.nome}</div>
						<div className='iphone:hidden text-xl -mt-10 text-center iphone:text-base iphone:mt-0 '>
							{translation[lang].filmeDe} <strong>{film.realizador}</strong>
						</div>
						<div className='hidden iphone:block text-lg -mt-3 text-center iphone:text-base iphone:mt-0 '>
							{translation[lang].filmeDe}{' '}
							<div>
								<strong>{film.realizador}</strong>
							</div>
						</div>
					</div>

					<VimeoModal videoId={film.videoUrl} />
				</div>
			</div>

			<div className='mx-[4.5rem] iphone:mx-[1rem] mb-[8rem] iphone:mb-[4.5rem] '>
				<PrimeiraSecDetalhes film={film} />

				<SegundaSecEntrevista film={film} />

				<TerceiraSecCreditos film={film} />
			</div>
		</>
	);
}
