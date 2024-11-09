import React from 'react';
import { PortableText } from '@portabletext/react';


export function SegundaSecEntrevista({ film }) {
	return (
		<div className='pt-14'>
			<div className='flex justify-center pb-12'>
				<div className='w-2/3 font-regular'>
					<div className='pb-2 font-oblique'>{film.autorEntrevista}</div>
					{film.entrevista && film.entrevista.length > 0 ? (
						
						<PortableText value={film.entrevista} />
					) : (
						<div className='text-center'>Nenhuma entrevista disponível</div>
					)}
				</div>
			</div>
		</div>
	);
}
