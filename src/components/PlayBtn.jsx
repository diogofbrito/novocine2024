import React, { useEffect, useState, useRef } from 'react';

export function PlayBtn() {
	const [color, setColor] = useState('white'); 
	const btnRef = useRef(null);

	useEffect(() => {
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setColor('#FD6CB4'); 
				} else {
					setColor('white'); 
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			threshold: 0.05, 
		});

		const contentBlocks = document.querySelectorAll('.content-block');

		contentBlocks.forEach(block => {
			observer.observe(block); 
		});

		return () => {
			if (contentBlocks) {
				contentBlocks.forEach(block => observer.unobserve(block));
			}
		};
	}, []);

	return (
		<div className='fixed bottom-0 left-0 right-0 mb-4 flex justify-center z-10'>
			<button className='font-["Cine-Display"] text-6xl transition' style={{ color }}>
				PLAY
			</button>
		</div>
	);
}
