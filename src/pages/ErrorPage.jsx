import { useEffect } from 'react';

export function ErrorPage() {
	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = '/';
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<h2 className='w-full h-screen flex justify-center items-center text-xl'>
				Página não encontrada.<br></br>
				Vais ser reencaminhado para a página inicial em 5 segundos...
			</h2>
		</div>
	);
}
