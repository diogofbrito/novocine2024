import React from 'react';
import { Terms } from '../components/Terms';

export function Sobre() {
	return (
		<>
			<Terms />
			<div className='absolute top-16 bottom-16 right-14 left-14 flex justify-center items-center rounded-[50px] border'>
				<div className='text-xl w-2/4 leading-tight'>
					 É uma sala de cinema online que disponibiliza gratuitamente um novo filme a cada vinte dias. A plataforma surge para criar um acesso continuo a uma variedade de obras realizadas por
					cineastas e artistas visuais de língua portuguesa, celebrando novas vozes ao lado de re-descobertas, reunindo-as num arquivo aberto em constante desenvolvimento. <br></br>
					<br></br>
					Programada por Madalena Fragoso e Afonso Mota. <br></br>Design gráfico e web por Diogo Brito.
				</div>
			</div>
		</>
	);
}
