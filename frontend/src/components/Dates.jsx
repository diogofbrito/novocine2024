import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Dates({ dataInicio, dataFim }) {
	/* const [position, setPosition] = useState({ bottom: '2%', right: '40%' });

	const moveDiv = event => {
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		let newX, newY;

		do {
			newX = Math.random() * (window.innerWidth - 200);
			newY = Math.random() * (window.innerHeight - 100);
		} while (Math.abs(mouseX - newX) < 100 || Math.abs(mouseY - newY) < 100);

		setPosition({ bottom: `${newY}px`, right: `${newX}px` });
	};

	const formattedDataInicio = dataInicio ? format(parseISO(dataInicio), 'd MMMM', { locale: ptBR }) : 'data não disponível';
	const formattedDataFim = dataFim ? format(parseISO(dataFim), 'd MMMM', { locale: ptBR }) : 'data não disponível';
 */

	return (
		<div className='fixed text-center backdrop-blur bg-opacity-50 bg-white py-5 px-12 rounded-3xl transition-all duration-300 text-2xl font-bold leading-7 z-50' style={{ bottom: position.bottom, right: position.right }} onMouseEnter={moveDiv}>
			 {formattedDataInicio}
			<br></br> até <br></br>
			{formattedDataFim}
		</div>
	);
}
