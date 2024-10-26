import React, { useState, useEffect } from 'react';
import { fetchFilms } from '../services/fetchFilms.js';
import { ContentBlock } from '../components/ContentBlock';
import { Dates } from '../components/Dates.jsx';

export function Home() {
	const [latestFilm, setLatestFilm] = useState(null);

	useEffect(() => {
		async function getFilms() {
			const movies = await fetchFilms();
			setLatestFilm(movies[0]);
		}

		getFilms();
	}, []);

	if (!latestFilm) return <div>Carregando...</div>;

	return (
		<>
			{latestFilm.dataExibicao ? <Dates dataInicio={latestFilm.dataExibicao.dataInicio} dataFim={latestFilm.dataExibicao.dataFim} /> : <div>Datas não disponíveis</div>}

			<div>
				<div className='ml-14 mr-14 h-screen rounded-[50px] bg-cover bg-hero-home '>
					<div className='w-full h-screen inset-0 flex flex-col gap-6 justify-center items-center -z-10 '>
						<div>
							<h1 className='text-9xl font-cine text-white'>{latestFilm.nome}</h1>
							<p className='text-lg -mt-3 text-center text-white'>
								um filme de <strong>{latestFilm.realizador}</strong>
							</p>
						</div>
						<button
							onClick={() => window.open(`https://vimeo.com/${latestFilm.vimeoId}`, '_blank')}
							className='flex items-center justify-center space-x-2 border border-white rounded-full pl-3 pr-2 py-1 text-white hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '
						>
							<span className='font-bold'>PLAY</span>
							<span className='w-5 h-5'>
								<svg width='100%' height='100%' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM15.2566 11.1728C15.39 11.0958 15.39 10.9033 15.2566 10.8264L9.02232 7.22698C8.88899 7.15 8.72232 7.24623 8.72232 7.40019V14.599C8.72232 14.7529 8.88899 14.8491 9.02232 14.7722L15.2566 11.1728Z'
										fill='currentColor'
									></path>
								</svg>
							</span>
						</button>
					</div>
				</div>

				<div className='mb-14'>
					<ContentBlock text='text-white'>
						<div className='flex'>
							<div className='flex flex-col w-1/2 '>
								<div className='text-8xl font-["Cine-Display"] '>{latestFilm.nome}</div>
								<p className='text-base'>
									um filme de <strong>{latestFilm.realizador}</strong>
									<br />
									{latestFilm.ano} &bull; {latestFilm.pais} &bull; {latestFilm.minutos}
								</p>
							</div>
							<div className='w-1/2 text-xl leading-tight flex items-center font-regular '>
								<div>
									<p dangerouslySetInnerHTML={{ __html: latestFilm.sinopse }} />
								</div>
							</div>
						</div>
					</ContentBlock>

					<ContentBlock bgColor='bg-white' text='text-black'>
						<div className='flex justify-center '>
							<div className='w-2/3 font-regular'>
								<div className='pb-2 font-oblique'>texto de joao</div>
								{latestFilm.entrevista && latestFilm.entrevista.length > 0 ? (
									latestFilm.entrevista.map((paragrafo, index) => (
										<p key={index} className='pb-2'>
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
					</ContentBlock>

					<div text='text-white'>
						<div className='flex justify-center '>
							<div className='w-2/3 '>
								<div className='text-center pb-2 font-oblique'>creditos</div>

								<div className='flex flex-col gap-2 p-2'>
									{latestFilm.creditos && latestFilm.creditos.length > 0 ? (
										latestFilm.creditos.map((credito, index) => (
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
					</div>
				</div>
			</div>
		</>
	);
}
