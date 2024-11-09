import React from 'react';

export function TerceiraSecCreditos({ film }) {
	return (
		<div className='flex justify-center '>
			<div className='w-2/3 '>
				<div className='text-center pb-2 font-oblique'>créditos</div>

				<div className='flex flex-col gap-2 pt-2'>
					{film.creditos && film.creditos.length > 0 ? (
						film.creditos.map((credito, index) => (
							<div key={index} className='flex justify-center gap-4'>
								<div className='w-1/2 text-right font-bold'>{credito.tipo}</div>
								<div className='w-1/2 font-regular'>{credito.conteudo}</div>
							</div>
						))
					) : (
						<div className='text-center'>Nenhum crédito disponível</div>
					)}
				</div>
			</div>
		</div>
	);
}
