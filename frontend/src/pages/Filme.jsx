import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../SanityClient';
import { urlFor } from '../utils/imageUrlBuilder';
import { Carousel } from '../components/FilmeDinamicaPagComp/Carousel';
import { PrimeiraSecDetalhes } from '../components/FilmeComp/PrimeiraSecDetalhes';
import { SegundaSecEntrevista } from '../components/FilmeComp/SegundaSecEntrevista';
import { TerceiraSecCreditos } from '../components/FilmeComp/TerceiraSecCreditos';
import { useLang } from '../components/LangProvider';
import { translation } from '../Lang/translation';
import { Helmet } from 'react-helmet-async';

export function Filme() {
	const { slug } = useParams();
	const [film, setFilm] = useState(null);
	const { lang } = useLang();

	useEffect(() => {
		sanityClient
			.fetch(
				`
        *[_type == "filme" && slug.current == "${slug}"] {
          nome,
          realizador,
          pais,
          ano,
          minutos,
          sinopse,
		  sinopseENG,
          entrevista,
  		  entrevistaENG,
		  extras,
		  extrasENG,
          autorEntrevista,
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
		
		
		window.scrollTo(0, 0);
	}, [slug]);

	if (!film) {
		return null;
	}

	const stillsUrls = film.stills?.map(image => urlFor(image).url()) || [];

	return (
		<>
			<Helmet>
				<title>Novocine | {film.nome} </title>
				<meta name='description' content={`${film.nome} ${translation[lang].filmeDe} ${film.realizador}`} />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content={translation[lang].keywordsArquivo} />
			</Helmet>
			<div className='m-[4.5rem] iphone:mx-[1rem] iphone:mb-[2rem]'>
				<div className=' h-[calc(100vh-9rem)] flex flex-col w-full gap-6 iphone:h-[calc(100vh-5.5rem)]'>
					<div className='flex flex-col text-center'>
						<div className='text-9xl font-cine iphone:text-7xl'>{film.nome}</div>
						<div className='text-xl iphone:flex iphone:flex-col iphone:pt-2 iphone:leading-[1.5rem]'>
							{translation[lang].filmeDe} <strong>{film.realizador}</strong>
						</div>
					</div>
					<div className='flex-grow '>{stillsUrls.length > 0 && <Carousel images={stillsUrls} />}</div>
				</div>

				<div className='pt-[4.5rem]'>
					<PrimeiraSecDetalhes film={film} />
					<SegundaSecEntrevista film={film} />
					<TerceiraSecCreditos film={film} />
				</div>
			</div>
		</>
	);
}
