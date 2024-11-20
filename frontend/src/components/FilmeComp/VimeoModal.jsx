import React, { useState, useCallback } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { translation } from '../../Lang/translation';
import { useLang } from '../LangProvider';

export function VimeoModal({ videoId }) {
	const [isOpen, setIsOpen] = useState(false);
	const lenis = useLenis();
	const { lang } = useLang();

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const cancelSmoothScrolling = useCallback(() => {
		lenis.scrollTo(0, {
			duration: 0,
			lerp: 0,
		});
	}, [lenis]);

	const handleClose = () => {
		cancelSmoothScrolling();
		handleCloseModal();
	};

	return (
		<>
			<button
				onClick={handleOpenModal}
				className='flex items-center justify-center space-x-2 border rounded-full pl-3 pr-2 py-1 hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'
			>
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

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='fixed inset-0 z-50 flex items-center justify-center bg-black '
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
					>
						<div className='relative w-full h-full'>
							<div className='absolute top-0 left-0 w-full z-50 flex justify-center p-4'>
								<button
									onClick={handleClose}
									className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out uppercase '
								>
									{translation[lang].fechar}
								</button>
							</div>

							<motion.iframe
								src={`https://player.vimeo.com/video/${videoId}&autoplay=1&color=efe200&byline=0&portrait=0`}
								style={{
									position: 'fixed',
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									width: '100%',
									height: '100%',
									border: 'none',
								}}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: 'easeInOut' }}
								allow='autoplay;fullscreen; picture-in-picture'
								allowFullScreen
							></motion.iframe>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
