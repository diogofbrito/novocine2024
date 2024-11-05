import React from 'react';

export function Sobre() {
	return (
		<div className='flex flex-grow mx-[4.5rem] flex-col gap-4'>
			<div className=' mt-[4.5rem] rounded-[50px] h-[calc(100vh-9rem)] flex justify-center items-center border'>
				<div className='text-xl w-2/4 leading-tight'>
					É uma sala de cinema online que disponibiliza gratuitamente um novo filme a cada vinte dias. A plataforma surge para criar um acesso continuo a uma variedade de obras realizadas por
					cineastas e artistas visuais de língua portuguesa, celebrando novas vozes ao lado de re-descobertas, reunindo-as num arquivo aberto em constante desenvolvimento. <br></br>
					<br></br>
					Programada por Madalena Fragoso e Afonso Mota. <br></br>Design gráfico e web por Diogo Brito.
				</div>
			</div>
			<div className=' h-[4.5rem] text-center'>
				<button className='link px-3 py-1 border rounded-full font-bold text-md hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>TERMOS</button>
			</div>
		</div>
	);
}
