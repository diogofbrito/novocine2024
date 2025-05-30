import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../SanityClient';
import { urlFor } from '../utils/imageUrlBuilder';
import { Carousel } from '../components/FilmeDinamicaPagComp/Carousel';
import { CarouselMobile } from '../components/Mobile/CarouseMobile';
import { PrimeiraSecDetalhes } from '../components/FilmeComp/PrimeiraSecDetalhes';
import { SegundaSecEntrevista } from '../components/FilmeComp/SegundaSecEntrevista';
import { TerceiraSecCreditos } from '../components/FilmeComp/TerceiraSecCreditos';
import { useLang } from '../components/LangProvider';
import { FilmNavigation } from '../components/FilmeDinamicaPagComp/FilmNavigation';
import { translation } from '../Lang/translation';
import { Helmet } from 'react-helmet-async';

export function Filme() {
	const { slug } = useParams();
	const [film, setFilm] = useState(null);
	const [adjacentFilms, setAdjacentFilms] = useState({ prev: null, next: null });
	const { lang } = useLang();

	useEffect(() => {
		sanityClient
			.fetch(
				`
        *[_type == "filme" && slug.current == "${slug}"] {
          nome,
		  nomeENG,
          realizador,
          pais,
          ano,
          minutos,
          sinopse,
		  sinopseENG,
          entrevista,
  		  entrevistaENG,
		  autorEntrevista, 
		  autorEntrevistaENG,
		  extras,
		  extrasENG,
          creditos,
          stills
        }
      `,
			)
			.then(data => {
				setFilm(data[0]);
			})
			.catch(err => {
				console.error('Erro ao carregar o filme', err);
			});

		sanityClient
			.fetch(
				`
        *[_type == "filme"] | order(_createdAt desc) {
          nome,
		  nomeENG,
          slug
        }
      `,
			)
			.then(allFilms => {
				const currentIndex = allFilms.findIndex(f => f.slug.current === slug);
				const prev = allFilms[currentIndex - 1] || null;
				const next = allFilms[currentIndex + 1] || null;
				setAdjacentFilms({ prev, next });
			});
	}, [slug]);

	if (!film) {
		return null;
	}

	const stillsUrls = film.stills?.map(image => urlFor(image).url()) || [];
	const nome = lang === 'PT' ? film.nome : film.nomeENG;

	return (
		<>
			<Helmet>
				<title>Novocine | {film.nome} </title>
				<meta name='description' content={`${film.nome} ${translation[lang].filmeDe} ${film.realizador}`} />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content={translation[lang].keywordsArquivo} />
			</Helmet>
			<div className='mx-[4.5rem] mt-[4.5rem] mb-[1.5rem] iphone:mx-[1rem] iphone:mb-[2rem] '>
				<div className=' h-[calc(100vh-9rem)] flex flex-col w-full gap-6 iphone:h-[calc(100vh-5.5rem)] iphone:hidden'>
					<div className='flex flex-col text-center '>
						<div className='text-9xl font-cine iphone:text-7xl'>{nome}</div>
						<div className='text-xl iphone:flex iphone:flex-col iphone:pt-2 iphone:leading-[1.5rem]'>
							{translation[lang].filmeDe} <strong>{film.realizador}</strong>
						</div>
					</div>
					<div className='flex-grow '>{stillsUrls.length > 0 && <Carousel images={stillsUrls} />}</div>
				</div>

				<div className='pt-[4.5rem] iphone:pt-[0rem]'>
					{stillsUrls.length > 0 && <CarouselMobile images={stillsUrls} />}
					<PrimeiraSecDetalhes film={film} />
					<SegundaSecEntrevista film={film} />
					<TerceiraSecCreditos film={film} />
					<FilmNavigation adjacentFilms={adjacentFilms} />
				</div>
			</div>
		</>
	);
}
