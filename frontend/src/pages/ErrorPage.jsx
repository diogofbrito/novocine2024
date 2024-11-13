import { useEffect } from 'react';
import { translation } from '../Lang/translation.js';
import { useLang } from '../components/LangProvider';


export function ErrorPage() {
	const { lang } = useLang();

	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = '/';
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<div className='w-full h-screen flex justify-center items-center text-xl flex-col'>
				{translation[lang].errorPage.map((text, index) => (
					<p key={index}>{text}</p>
				))}
			</div>
		</div>
	);
}
