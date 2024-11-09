import React, { useState, useEffect } from 'react';
import sanityClient from '../SanityClient.js';
import XIcon from '@mui/icons-material/X';
import Facebook from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Collapse from '@mui/material/Collapse';
import { urlFor } from '../utils/imageUrlBuilder.js';
import { SkeletonHome } from '../components/Skeleton/SkeletonHome';

export function Home() {
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
          vimeoId,
          sinopse,
          entrevista,
          autorEntrevista,
          creditos,
		  dataExibicao,
		  	stills[0]
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

	if (!latestFilm) return <SkeletonHome />;

	return (
		<>
			
			<div
				className='mx-[4.5rem] my-[4.5rem] rounded-[50px] h-[calc(100vh-9rem)]'
				style={{
					backgroundImage: `url(${latestFilm.stills ? urlFor(latestFilm.stills).url() : 'imgs/placeholder.webp'})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='w-full inset-0 flex h-full flex-col gap-6 justify-center items-center -z-10 px-20 '>
					<div>
						<h1 className='text-9xl font-cine text-white text-center'>{latestFilm.nome}</h1>
						<p className='text-lg -mt-3 text-center text-white'>
							um filme de <strong>{latestFilm.realizador}</strong>
						</p>
					</div>
					<button
						onClick={() => window.open(`https://vimeo.com/${latestFilm.vimeoId}`, '_blank')}
						className='flex items-center justify-center space-x-2 border  rounded-full pl-3 pr-2 py-1  hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '
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

			<article className='mx-[4.5rem] mb-[4.5rem]'>
				<div className='rounded-[50px] border  p-10 '>
					<div className='flex'>
						<div className='flex flex-col w-1/2 '>
							<div className='text-8xl font-["Cine-Display"] '>{latestFilm.nome}</div>
							<p className='text-lg'>
								de <strong>{latestFilm.realizador}</strong>
								<br />
								{latestFilm.ano} &bull; {latestFilm.pais} &bull; {latestFilm.minutos} minutos
							</p>
							<div className='flex pt-4 -mx-2 -my-2'>
								<IconButton onClick={() => setShowShareOptions(!showShareOptions)} sx={{ color: 'inherit' }}>
									<Tooltip title='Partilhar'>
										<ShareIcon />
									</Tooltip>
								</IconButton>

								<Collapse in={showShareOptions} timeout='auto'>
									<div className='flex'>
										<IconButton onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} sx={{ color: 'inherit' }}>
											<Tooltip title='Facebook'>
												<Facebook />
											</Tooltip>
										</IconButton>

										<IconButton
											onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=NOVOCINE: ${latestFilm.nome}`, '_blank')}
											sx={{ color: 'inherit' }}
										>
											<Tooltip title='X'>
												<XIcon />
											</Tooltip>
										</IconButton>

										<IconButton onClick={handleCopyLink} sx={{ color: 'inherit' }}>
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

				<div className='flex justify-center '>
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
