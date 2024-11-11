import React, { useState } from 'react';
import { translation } from '../Lang/translation';
import { useLang } from '../components/LangProvider';

export function Sobre() {
	const [isThermsView, setIsThermsView] = useState(true);
	const { lang } = useLang();

	const onToggleView = () => {
		setIsThermsView(!isThermsView);
	};

	return (
		<div className='flex flex-col mt-[4.5rem] h-[calc(100vh-4.5rem)] iphone:mx-[1.5rem] iphone:mb-[1.5rem]  iphone:h-[calc(100vh-9rem)] '>
			<div className='flex-grow flex justify-center items-center '>
				{isThermsView ? (
					<div className='text-xl w-2/4 leading-tight iphone:w-full iphone:text-base iphone:leading-[1.3] '>
						{translation[lang].sobreText}

						<div className='pt-6'>
							{translation[lang].sobreCreditos.map((text, index) => (
								<p key={index}>{text}</p>
							))}
						</div>
					</div>
				) : (
					<div className='text-xl w-2/4 leading-tight flex flex-col gap-6 iphone:w-full iphone:text-base iphone:leading-[1.3]'>
						{translation[lang].termosText.map((text, index) => (
							<p key={index}>{text}</p>
						))}
					</div>
				)}
			</div>

			<div className='flex items-center justify-center h-[4.5rem] gap-4 iphone:fixed  iphone:bottom-0 iphone:w-full iphone:left-0 '>
				<button onClick={onToggleView} className='uppercase link px-3 py-1 border rounded-full font-bold text-md hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>
					{isThermsView ? translation[lang].termos : translation[lang].voltar}
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
