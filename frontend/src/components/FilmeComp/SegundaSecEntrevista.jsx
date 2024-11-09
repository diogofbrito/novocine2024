import React from 'react';

export function SegundaSecEntrevista({ film }) {
	return (
		<div className='pt-14'>
			<div className='flex justify-center pb-12'>
				<div className='w-2/3 font-regular'>
					<div className='pb-2 font-oblique'>{film.autorEntrevista}</div>
					{film.entrevista && film.entrevista.length > 0 ? (
						film.entrevista.map((paragrafo, index) => (
							<p key={index} className='pb-2 text-lg'>
								{paragrafo.children.map((child, idx) => (
									<span
										key={idx}
										style={{
											fontWeight: child.marks?.includes('bold') ? 'bold' : 'normal',
											fontStyle: child.marks?.includes('italic') ? 'italic' : 'normal',
										}}
									>
										{child.text}
									</span>
								))}
							</p>
						))
					) : (
						<div className='text-center'>Nenhuma entrevista disponível</div>
					)}
				</div>
			</div>
		</div>
	);
}
