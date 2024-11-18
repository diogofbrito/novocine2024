import React from 'react';
import { useLang } from '../LangProvider';
import { PortableText } from '@portabletext/react';
import { translation } from '../../Lang/translation.js';
import { Links } from './Links';
import { Paragraph } from './Paragraph';
import { ImagemExtras } from './ImagemExtras';

export function TerceiraSecCreditos({ film }) {
	const { lang } = useLang();

	const extras = lang === 'PT' ? film.extras : film.extrasENG;

	if (!film.creditos || film.creditos.length === 0) return null;

	return (
		<div className='flex justify-center text-xl iphone:text-base  iphone:leading-[1.563rem] iphone:mb-[4.5rem]'>
			<div className='w-3/6 iphone:w-full '>
				<div className='text-center font-oblique '>{translation[lang].creditos}</div>
				<div className='flex flex-col gap-2 pt-2 iphone:gap-4  '>
					{film.creditos.map((credito, index) => (
						<div key={index} className='flex justify-center gap-4 iphone:flex-col iphone:gap-0 '>
							<div className=' lowercase w-1/2 text-right font-bold iphone:w-full iphone:text-center'>{lang === 'PT' ? credito.tipo : credito.tipo_ENG}</div>
							<div className='w-1/2 font-regular iphone:w-full iphone:text-center uppercase'>{credito.conteudo}</div>
						</div>
					))}
				</div>

				{extras && extras.length > 0 && (
					<div className='text-xl mt-14 '>
						<div className='text-center pb-2 font-oblique '>{translation[lang].notas}</div>

						<PortableText
							value={extras}
							components={{
								types: { image: ImagemExtras },
								block: {
									normal: Paragraph,
								},
								marks: {
									link: Links,
								},
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
