import React from 'react';
import { useLang } from '../LangProvider';
import { translation } from '../../Lang/translation.js';
import { ShareFilmIcons } from './ShareFilmIcons';

export function PrimeiraSecDetalhes({ film }) {

	const { lang } = useLang();

	const sinopse = lang === 'PT' ? film.sinopse : film.sinopseENG;

	return (
		<div className='rounded-[50px] iphone:rounded-[40px] border p-10 iphone:p-5'>
			<div className='flex gap-6 items-center iphone:flex-col iphone:items-start '>
				<div className='flex flex-col w-1/2 iphone:w-full  '>
					<div className='text-8xl font-cine iphone:text-6xl '>{lang === 'PT' ? film.nome : film.nomeENG}</div>
					<div className='text-xl iphone:text-lg iphone:leading-[1.5rem]'>
						{translation[lang].de} <strong>{film.realizador}</strong>
						<div className='text-lg '>
							{film.ano}&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;{film.pais}&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;{film.minutos} {translation[lang].minutos}
						</div>
					</div>
					<ShareFilmIcons films={film} />
				</div>
				<div className='w-1/2 text-xl leading-[1.688rem] font-regular iphone:w-full iphone:text-lg iphone:leading-[1.5rem]'>
					<div>
						<p dangerouslySetInnerHTML={{ __html: sinopse }} className='whitespace-pre-line' />
					</div>
				</div>
			</div>
		</div>
	);
}
