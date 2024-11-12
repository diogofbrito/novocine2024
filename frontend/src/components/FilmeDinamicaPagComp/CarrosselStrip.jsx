import React from 'react';
import { motion } from 'framer-motion';

export function  CarouselStrip  ({ image, isActive }) {
	return (
		<motion.div
			className='w-full h-full bg-cover bg-center flex-shrink-0 rounded-lg'
			style={{
				backgroundImage: `url(${image})`,
			}}
			initial={{ scale: 0.9, opacity: 0.7 }}
			animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.7 }}
			transition={{ duration: 0.5 }}
		/>
	);
};

