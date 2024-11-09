import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../SanityClient';
import { urlFor } from '../utils/imageUrlBuilder';
import { Carrossel } from '../components/FilmeDinamicaPagComp/Carrossel';
import { PrimeiraSecDetalhes } from '../components/FilmeComp/PrimeiraSecDetalhes';
import { SegundaSecEntrevista } from '../components/FilmeComp/SegundaSecEntrevista';
import { TerceiraSecCreditos } from '../components/FilmeComp/TerceiraSecCreditos';

export function Filme() {
	const { slug } = useParams();
	const [film, setFilm] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

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
          entrevista,
          autorEntrevista,
          creditos,
          stills
        }
      `,
			)
			.then(data => {
				setFilm(data[0]);
				setIsLoading(false);
			})
			.catch(err => {
				console.error('Erro ao carregar o filme', err);
				setIsLoading(false);
			});
	}, [slug]);

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	if (!film) {
		return <div>Filme não encontrado!</div>;
	}

	const stillsUrls = film.stills?.map(image => urlFor(image).url()) || [];

	return (
		<div className='margin-general'>
			<div className=' h-[calc(100vh-9rem)] flex flex-col w-full gap-6 '>
				<div className='flex flex-col text-center'>
					<h1 className='text-9xl font-cine text-white '>{film.nome}</h1>
					<p>
						um filme de <strong>{film.realizador}</strong>
					</p>
				</div>
				<div className='flex-grow '>{stillsUrls.length > 0 && <Carrossel images={stillsUrls} />}</div>
			</div>

			<div className='pt-[4.5rem]'>
				<PrimeiraSecDetalhes film={film} />
				<SegundaSecEntrevista film={film} />
				<TerceiraSecCreditos film={film} />
			</div>
		</div>
	);
}
