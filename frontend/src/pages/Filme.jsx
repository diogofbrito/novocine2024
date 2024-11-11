import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../SanityClient';
import { urlFor } from '../utils/imageUrlBuilder';
import { Carrossel } from '../components/FilmeDinamicaPagComp/Carrossel';
import { PrimeiraSecDetalhes } from '../components/FilmeComp/PrimeiraSecDetalhes';
import { SegundaSecEntrevista } from '../components/FilmeComp/SegundaSecEntrevista';
import { TerceiraSecCreditos } from '../components/FilmeComp/TerceiraSecCreditos';
import { useLang } from '../components/LangProvider';
import { translation } from '../Lang/translation';

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
	}, [slug]);

	if (!film) {
		return null;
	}

	const stillsUrls = film.stills?.map(image => urlFor(image).url()) || [];

	return (
		<div className='margin-general'>
			<div className=' h-[calc(100vh-9rem)] flex flex-col w-full gap-6 '>
				<div className='flex flex-col text-center'>
					<h1 className='text-9xl font-cine '>{film.nome}</h1>
					<p>
						{translation[lang].filmeDe} <strong>{film.realizador}</strong>
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
