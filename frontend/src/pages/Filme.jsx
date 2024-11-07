import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import sanityClient from '../SanityClient';

export function Filme() {
	const { slug } = useParams(); 
	const [filme, setFilme] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		sanityClient
			.fetch(
				`
        *[_type == "filme" && slug.current == "${slug}"] {
          nome,
          realizador,
          pais,
          ano,
          minutos,
          sinopse,
          entrevista,
          autorEntrevista,
          creditos,
          stills[0..6]
        }
      `,
			)
			.then(data => {
				setFilme(data[0]);
				setIsLoading(false);
			})
			.catch(err => {
				console.error('Erro ao carregar o filme', err);
				setIsLoading(false);
			});
	}, [slug]);

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	if (!filme) {
		return <div>Filme não encontrado!</div>;
	}

	return (
		<div>
			<h1>{filme.nome}</h1>
			<p>{filme.realizador}</p>
			<p>{filme.ano}</p>
			<p>{filme.pais}</p>
			<p>{filme.minutos} minutos</p>
			<p>{filme.sinopse}</p>
			{/* Exibir imagens ou outros dados */}
		</div>
	);
}
