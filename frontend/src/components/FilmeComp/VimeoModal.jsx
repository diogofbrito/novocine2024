import React, { useState , useRef, useEffect } from 'react';
import ReactModal from 'react-modal';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';


export function VimeoModal({ videoUrl }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
 const playerRef = useRef(null);

 useEffect(() => {
		const plyr = new Plyr(playerRef.current, {
			autoplay: true,
			muted: false,
			controls: ['play', 'progress', 'volume', 'fullscreen'],
		});
		return () => plyr.destroy();
 }, []);
	
	
	// Função para abrir o modal
	const openModal = () => {
		setIsOpen(true);
		setIsPlaying(true); // Começa automaticamente o vídeo
	};

	
	return (
		<div>
			<button onClick={openModal}>Assistir Filme</button>

			<ReactModal
				isOpen={isOpen}
				ariaHideApp={false}
				style={{
					overlay: {
						backgroundColor: 'rgba(0, 0, 0, 0.75)',
					},
					content: {
						position: 'fixed',
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						transform: 'translate(-50%, -50%)',
						width: '100%',
						height: '100vh',
						padding: 0,
						border: 'none',
						zIndex: 9999999999,
						backgroundColor: 'green',
					},
				}}
			>
				<div id='player' className='plyr__video-wrapper'>
					<div ref={playerRef} className='plyr__video-embed'>
						<iframe src={videoUrl} frameBorder='0' allow='autoplay; fullscreen' allowFullScreen title='Video Player' />
					</div>
				</div>
			</ReactModal>
		</div>
	);
}

