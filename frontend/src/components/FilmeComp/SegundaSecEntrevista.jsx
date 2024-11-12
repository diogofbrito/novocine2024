import React from 'react';
import { PortableText } from '@portabletext/react';
import { Imagem } from './Imagem';
import { Iframe } from './Iframe';
import { Links } from './Links';
import { Paragraph } from './Paragraph';
import { useLang } from '../LangProvider';
import { DivideHr } from './DivideHr';

export function SegundaSecEntrevista({ film }) {
	const { lang } = useLang();

	const entrevista = lang === 'PT' ? film.entrevista : film.entrevistaENG;
	const autorEntrevista = lang === 'PT' ? film.autorEntrevista : film.autorEntrevistaENG;

	if (!entrevista || entrevista.length === 0) return null;

	return (
		<div className='my-14 iphone:my-6'>
			<div className='flex justify-center '>
				<div className='w-3/5 font-regular text-xl leading-[1.4] iphone:w-full iphone:text-base '>
					{autorEntrevista && <div className='pb-4 font-oblique text-center'>{autorEntrevista}</div>}
					<PortableText
						value={entrevista}
						components={{
							types: { image: Imagem, iframe: Iframe, dividerHr: DivideHr },
							block: {
								normal: Paragraph,
							},
							marks: {
								link: Links,
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
