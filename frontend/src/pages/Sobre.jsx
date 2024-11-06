import React, { useState } from 'react';

export function Sobre() {
	const [isThermsView, setIsThermsView] = useState(true);

	const onToggleView = () => {
		setIsThermsView(!isThermsView);
	};

	return (
		<div className='flex flex-col mx-[4.5rem] mt-[4.5rem] h-[calc(100vh-4.5rem)] '>
			<div className='flex-grow  rounded-[50px]  flex justify-center items-center border '>
					{isThermsView ? (
						<div className='text-xl w-2/4 leading-tight '>
							É uma sala de cinema online que disponibiliza gratuitamente um novo filme a cada vinte dias. A plataforma surge para criar um acesso continuo a uma variedade de obras realizadas por
							cineastas e artistas visuais de língua portuguesa, celebrando novas vozes ao lado de re-descobertas, reunindo-as num arquivo aberto em constante desenvolvimento. <br></br>
							<br></br>
							Programada por Madalena Fragoso e Afonso Mota. <br></br>
						Design e Web por Diogo Brito.
						</div>
						
					) : (
						<div className='text-xl w-2/4 leading-tight '>
							Os autores e distribuidores dos filmes apresentados no novocine.pt detêm os direitos exclusivos de utilização, publicação e reprodução das suas obras. <br></br> <br></br>
							Nenhum dos filmes apresentados nesta plataforma poderão ser descarregados, directamente ou indirectamente publicados, reproduzidos, copiados, arquivados, manipulados, modificados,
							vendidos, transmitidos, projectados ou usados de forma alguma ou redistribuídos em qualquer meio sem a permissão explícita dos autores.
						</div>
					)}
			</div>
			<div className='flex items-center justify-center h-[4.5rem] '>
				<button onClick={onToggleView} className='link px-3 py-1 border rounded-full font-bold text-md hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>
					TERMOS
				</button>
			</div>
		</div>
	);
}
