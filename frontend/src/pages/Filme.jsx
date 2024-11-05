import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../SanityClient.js';

export function Filme() {
	const { slug } = useParams(); 
	const [film, setFilm] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		console.log('Fetching film for slug:', slug); 
		sanityClient
			.fetch(
				`
            *[_type == "filme" && nome == $name][0] {
                nome,
                realizador,
                pais,
                ano,
                minutos,
                sinopse,
                entrevista,
                autorEntrevista,
                creditos,
                stills
        }
    `,
				{ name: slug.replace(/-/g, ' ') },
			)
			.then(data => {
				console.log('Film data:', data);
				setFilm(data);
				setIsLoading(false);
			})
			.catch(error => {
				console.error('Error fetching film:', error);
				setIsLoading(false);
			});
	}, [slug]);

	if (isLoading) return <div>Carregando...</div>;
	if (!film) return <div>Filme não encontrado</div>;

	return (
		<div>
			<h1>{film.nome}</h1>
			<p>Realizador: {film.realizador}</p>
			<p>País: {film.pais}</p>
			<p>Ano: {film.ano}</p>
			<p>Duração: {film.minutos} minutos</p>
			<p>Sinopse: {film.sinopse}</p>
			<h2>Entrevista</h2>
			<p>{film.entrevista.map(block => block.children.map(child => child.text).join(' ')).join('\n')}</p>
			<h3>Autor da Entrevista: {film.autorEntrevista}</h3>
			<h4>Créditos:</h4>
			<ul>
				{film.creditos.map(credito => (
					<li key={credito.conteudo}>
						{credito.tipo}: {credito.conteudo}
					</li>
				))}
			</ul>
			<div>
				{film.stills.map((still, index) => (
					<img key={index} src={still.asset.url} alt={`Still ${index + 1}`} />
				))}
			</div>
		</div>
	);
}
