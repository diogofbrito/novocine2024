import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export function Carrossel({ images }) {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className='flex gap-4  h-full'>
			{images.map((image, index) => (
				<div className='relative overflow-hidden h-full min-w-[100px] bg-slate-400 rounded-xl flex justify-center'>
					<img src={image} alt={image} style={{objectFit: "cover"}} />
				</div>
			))}
		</div>
	);
}
