import React, { useState } from 'react';
import { translation } from '../translation';

export function Sobre() {
	const [isThermsView, setIsThermsView] = useState(true);
	const { lang, toggleLang } = useLang();

	const onToggleView = () => {
		setIsThermsView(!isThermsView);
	};

	return (
		<div className='flex flex-col  mt-[4.5rem] h-[calc(100vh-4.5rem)] '>
			<div className='flex-grow flex justify-center items-center '>
				{isThermsView ? (
					<div className='text-xl w-2/4 leading-tight '>
						É uma sala de cinema online que disponibiliza gratuitamente um novo filme a cada vinte dias. A plataforma surge para criar um acesso continuo a uma variedade de obras realizadas por
						cineastas e artistas visuais de língua portuguesa, celebrando novas vozes ao lado de re-descobertas, reunindo-as num arquivo aberto em constante desenvolvimento. <br></br>
						<br></br>
						Programada por Madalena Fragoso e Afonso Mota. <br></br>
						Design Gráfico e Web por Diogo Brito.
					</div>
				) : (
					<div className='text-xl w-2/4 leading-tight '>
						Os autores e distribuidores dos filmes apresentados no novocine.pt detêm os direitos exclusivos de utilização, publicação e reprodução das suas obras. <br></br> <br></br>
						Nenhum dos filmes apresentados nesta plataforma poderão ser descarregados, directamente ou indirectamente publicados, reproduzidos, copiados, arquivados, manipulados, modificados,
						vendidos, transmitidos, projectados ou usados de forma alguma ou redistribuídos em qualquer meio sem a permissão explícita dos autores.
					</div>
				)}
			</div>
			<div className='flex items-center justify-center h-[4.5rem] gap-4'>
				<button onClick={onToggleView} className='link px-3 py-1 border rounded-full font-bold text-md hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>
					{isThermsView ? 'TERMOS' : 'VOLTAR'}
				</button>
				<a
					href='https://www.instagram.com/novocine/'
					target='_blank'
					className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out font-bold'
				>
					INSTAGRAM
				</a>
				<a
					href='mailto:geral@novocine.pt?subject=Olá!'
					className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out font-bold'
				>
					EMAIL
				</a>
			</div>
		</div>
	);
}
