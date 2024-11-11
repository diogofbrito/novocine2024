import React from 'react';
import { useLang } from '../LangProvider';
import { PortableText } from '@portabletext/react';
import { translation } from '../../Lang/translation.js';
import { Imagem } from './Imagem.jsx';

export function TerceiraSecCreditos({ film }) {
	const { lang } = useLang();

	const extras = lang === 'PT' ? film.extras : film.extrasENG;

	if (!film.creditos || film.creditos.length === 0) return null;

	return (
		<div className='flex justify-center text-lg iphone:pt-2'>
			<div className='w-full'>
				<div className='text-center pb-2 font-oblique'>{translation[lang].creditos}</div>
				<div className='flex flex-col gap-2 pt-2 iphone:gap-4 '>
					{film.creditos.map((credito, index) => (
						<div key={index} className='flex justify-center gap-4 iphone:flex-col iphone:gap-0  '>
							<div className='w-1/2 text-right font-bold iphone:w-full iphone:text-center'>{lang === 'PT' ? credito.tipo : credito.tipo_ENG}</div>
							<div className='w-1/2 font-regular iphone:w-full iphone:text-center'>{credito.conteudo}</div>
						</div>
					))}
				</div>

				{extras && extras.length > 0 && (
					<div className='text-center text-lg pt-14'>
						<PortableText value={extras} components={{ types: { image: Imagem } }} />
					</div>
				)}
			</div>
		</div>
	);
}
