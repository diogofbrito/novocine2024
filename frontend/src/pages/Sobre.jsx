import React, { useState } from 'react';
import { translation } from '../Lang/translation';
import { useLang } from '../components/LangProvider';
import { Helmet } from 'react-helmet-async';

export function Sobre() {
	const [isThermsView, setIsThermsView] = useState(true);
	const { lang } = useLang();

	const onToggleView = () => {
		setIsThermsView(!isThermsView);
	};

	return (
		<>
			<Helmet>
				<title>Novocine | {translation[lang].sobre}</title>
				<meta name='description' content={translation[lang].sobreText} />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='novocine, cinema, portugal, lisboa, madalena fragoso, afonso mota, diogo brito, filmes em portugal, streaming, cinema online, artes visuais, cineastas' />
			</Helmet>
			<div className='flex flex-col mt-[4.5rem] h-[calc(100vh-4.5rem)]  iphone:mb-[1rem]  iphone:h-full iphone:pt-[1rem] '>
				<div className='flex-grow flex justify-center items-center iphone:px-[1rem]'>
					{isThermsView ? (
						<div className='text-xl w-2/4 iphone:w-full leading-[1.5rem] iphone:leading-[1.563rem]'>
							{translation[lang].sobreText}

							<div className='pt-6'>
								{translation[lang].sobreCreditos.map((text, index) => (
									<p key={index}>{text}</p>
								))}
							</div>
						</div>
					) : (
						<div className='text-xl w-2/4 leading-[1.688rem] iphone:leading-[1.5rem] flex flex-col gap-6 iphone:w-full '>
							{translation[lang].termosText.map((text, index) => (
								<p key={index}>{text}</p>
							))}
						</div>
					)}
				</div>

				<div className='flex items-center justify-center iphone:justify-between h-[4.5rem] gap-4 iphone:fixed  iphone:bottom-0 iphone:w-full iphone:left-0 iphone:px-[1rem]'>
					<button
						onClick={onToggleView}
						className='uppercase link px-3 py-1 border rounded-full  text-md hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out iphone:text-base'
					>
						{isThermsView ? translation[lang].termos : translation[lang].voltar}
					</button>

					<a
						href='https://www.instagram.com/novocine/'
						target='_blank'
						className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out iphone:text-base'
					>
						INSTAGRAM
					</a>

					<a
						href='mailto:geral@novocine.pt?subject=Olá!'
						className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out  iphone:text-base'
					>
						EMAIL
					</a>
				</div>
			</div>
		</>
	);
}
