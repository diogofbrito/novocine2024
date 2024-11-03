import React, { useState, useEffect } from 'react';
import sanityClient from '../SanityClient.js';
import XIcon from '@mui/icons-material/X';
import Facebook from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Collapse from '@mui/material/Collapse';

export function Filme() {
	const [latestFilm, setLatestFilm] = useState(null);
	const [showShareOptions, setShowShareOptions] = useState(false);

	useEffect(() => {
		async function getLatestFilm() {
			const filmData = await sanityClient.fetch(`
        *[_type == "filme"] | order(_createdAt desc)[0]{
          nome,
          realizador,
          pais,
          ano,
          minutos,
          imagem,
          sinopse,
          entrevista,
          autorEntrevista,
          creditos,
        }
      `);
			if (filmData) {
				setLatestFilm(filmData);
			}
		}

		getLatestFilm();
	}, []);

	const handleCopyLink = () => {
		navigator.clipboard.writeText(window.location.href).catch(err => console.error('Erro ao copiar o link: ', err));
	};

	if (!latestFilm) return <div>Carregando...</div>;

	return (
		<>
			<div className='margin-general flex flex-col '>
				<button className='link border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '>
					ARQUIVO
				</button>
				<div>
					<h1 className='text-9xl font-cine text-white text-center'>{latestFilm.nome}</h1>
					<p className='text-lg -mt-3 text-center text-white'>
						um filme de <strong>{latestFilm.realizador}</strong>
					</p>
				</div>
			</div>

			<article className='mx-[4.5rem] mb-[4.5rem]'>
				<div >
					<div className='flex'>
						<div className='flex flex-col w-1/2 '>
							<div className='text-8xl font-["Cine-Display"] '>{latestFilm.nome}</div>
							<p className='text-lg'>
								de <strong>{latestFilm.realizador}</strong>
								<br />
								{latestFilm.ano} &bull; {latestFilm.pais} &bull; {latestFilm.minutos} minutos
							</p>
							<div className='flex pt-4 -mx-2 -my-2'>
								<IconButton onClick={() => setShowShareOptions(!showShareOptions)} sx={{ color: 'white' }}>
									<Tooltip title='Partilhar'>
										<ShareIcon />
									</Tooltip>
								</IconButton>

								<Collapse in={showShareOptions} timeout='auto'>
									<div className='flex'>
										<IconButton onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} sx={{ color: 'white' }}>
											<Tooltip title='Facebook'>
												<Facebook />
											</Tooltip>
										</IconButton>

										<IconButton
											onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=NOVOCINE: ${latestFilm.nome}`, '_blank')}
											sx={{ color: 'white' }}
										>
											<Tooltip title='X'>
												<XIcon />
											</Tooltip>
										</IconButton>

										<IconButton onClick={handleCopyLink} sx={{ color: 'white' }}>
											<Tooltip title='Copiar Link'>
												<LinkIcon />
											</Tooltip>
										</IconButton>
									</div>
								</Collapse>
							</div>
						</div>
						<div className='w-1/2 text-xl leading-tight flex items-center font-regular '>
							<div>
								<div className='text-base font-oblique mb-2'>sinopse</div>
								<p dangerouslySetInnerHTML={{ __html: latestFilm.sinopse }} className='whitespace-pre-line' />
							</div>
						</div>
					</div>
				</div>

				<div className='pt-14'>
					<div className='flex justify-center pb-12'>
						<div className='w-2/3 font-regular'>
							<div className='pb-2 font-oblique'>{latestFilm.autorEntrevista}</div>
							{latestFilm.entrevista && latestFilm.entrevista.length > 0 ? (
								latestFilm.entrevista.map((paragrafo, index) => (
									<p key={index} className='pb-2 text-lg'>
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
				</div>

				<div className='flex justify-center text-white'>
					<div className='w-2/3 '>
						<div className='text-center pb-2 font-oblique'>créditos</div>

						<div className='flex flex-col gap-2 pt-2'>
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
			</article>
		</>
	);
}
