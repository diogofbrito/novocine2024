import React, { useState, useRef, useEffect } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

export function VimeoModal() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};


	return (
		<>
			{/* Botão de Abrir Modal */}
			<button onClick={handleOpen} className='flex items-center justify-center space-x-2 border rounded-full pl-3 pr-2 py-1 hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>
				<span className='font-bold text-xl iphone:text-lg'>PLAY</span>
				<span className='w-6 h-6'>
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

			{/* Modal */}
			{isOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center transition-opacity duration-300'>
					{/* Player */}
					<div
						className='absolute inset-0 w-full h-full'
						style={{
							position: 'absolute',
							width: '100vw',
							height: '100vh',
						}}
					>
						<Plyr
							source={{
								type: 'video',
								sources: [
									{
										src: 'https://player.vimeo.com/video/76979871',
										provider: 'vimeo',
									},
								],
							}}
							options={{
								autoplay: true,
								fullscreen: { enabled: true },
								controls: ['play', 'pause', 'fullscreen'],
							}}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</div>
				</div>
			)}
		</>
	);
}
