import React from 'react';
import { PortableText } from '@portabletext/react';
import { Imagem } from './Imagem';
import { Iframe } from './Iframe';
import { Links } from './Links';
import { Paragraph } from './Paragraph';
import { useLang } from '../LangProvider';
import { DivideHr } from './DivideHr';
import { GalleryImgs } from './GalleryImgs';

export function SegundaSecEntrevista({ film }) {
	const { lang } = useLang();

	const entrevista = lang === 'PT' ? film.entrevista : film.entrevistaENG;
	const autorEntrevista = lang === 'PT' ? film.autorEntrevista : film.autorEntrevistaENG;

	if (!entrevista || entrevista.length === 0) return null;

	return (
		<div className='my-14 iphone:my-6 iphone:px-5'>
			<div className='flex justify-center '>
				<div className='w-3/6 font-regular text-xl leading-[1.688rem] iphone:w-full  iphone:leading-[1.5rem]'>
					{autorEntrevista && <div className='pb-8 font-oblique'>{autorEntrevista}</div>}
					<PortableText
						value={entrevista}
						components={{
							types: { image: Imagem, iframe: Iframe, dividerHr: DivideHr, galleryImgs: GalleryImgs },
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
