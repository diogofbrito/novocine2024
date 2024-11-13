import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Carousel({ images }) {
	const [selectedImage, setSelectedImage] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (image, index) => {
		setSelectedImage(image);
		setCurrentIndex(index);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	const showNextImage = () => {
		const nextIndex = (currentIndex + 1) % images.length;
		setCurrentIndex(nextIndex);
		setSelectedImage(images[nextIndex]);
	};

	const showPreviousImage = () => {
		const prevIndex = (currentIndex - 1 + images.length) % images.length;
		setCurrentIndex(prevIndex);
		setSelectedImage(images[prevIndex]);
	};

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'ArrowRight') {
				showNextImage();
			} else if (event.key === 'ArrowLeft') {
				showPreviousImage();
			} else if (event.key === 'Escape') {
				closeModal();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [currentIndex]); 
	return (
		<div className='flex flex-row justify-center items-center gap-5 h-full'>
			{images.map((image, index) => (
				<motion.div
					key={index}
					className='card cursor-pointer h-full bg-cover bg-center rounded-[20px] w-full'
					style={{
						backgroundImage: `url(${image})`,
					}}
					onClick={() => openModal(image, index)}
				></motion.div>
			))}

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'
						onClick={closeModal}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className='relative p-4 bg-cover bg-center rounded-[20px] w-[80vw] h-[80vh] bg-white'
							style={{
								backgroundImage: `url(${selectedImage})`,
							}}
							onClick={closeModal}
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							transition={{ duration: 0.3 }}
						></motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
