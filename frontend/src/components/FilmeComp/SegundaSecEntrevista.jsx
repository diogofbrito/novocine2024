import React from 'react';
import { PortableText } from '@portabletext/react';
import { Imagem } from './Imagem.jsx';
import { useLang } from '../LangProvider';

export function SegundaSecEntrevista({ film }) {
	const { lang } = useLang();

	const entrevista = lang === 'PT' ? film.entrevista : film.entrevistaENG;

	if (!entrevista || entrevista.length === 0) return null;

	return (
		<div className='my-14 '>
			<div className='flex justify-center '>
				<div className='w-2/4 font-regular text-xl'>
					<div className='pb-4 font-oblique text-base'>{film.autorEntrevista}</div>
					<PortableText value={entrevista} components={{ types: { image: Imagem } }} />
				</div>
			</div>
		</div>
	);
}
