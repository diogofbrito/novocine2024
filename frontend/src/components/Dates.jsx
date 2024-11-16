import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);

export function Dates() {
	const datesRef = useRef(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');

		if (mediaQuery.matches) {
			// GSAP para mobile (<= 768px)
			const animation = gsap.fromTo(
				datesRef.current,
				{ y: 50, opacity: 0, display: 'none' },
				{
					y: 0,
					opacity: 1,
					display: 'flex',
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: datesRef.current,
						start: 'top+=100vh', // Dispara a animação ao ultrapassar 100vh
					},
				},
			);

			return () => {
				animation.kill(); // Remove a animação ao desmontar
			};
		} else {
			// Certifica-se de que está visível para telas maiores
			gsap.set(datesRef.current, { clearProps: 'all' });
		}
	}, []);

	return (
		<div
			ref={datesRef}
			className='fixed z-50 bottom-0 px-[4.5rem] iphone:px-[1rem] flex w-screen h-[4.5rem] items-center'
			style={{ display: 'none' }} // Oculto por padrão para mobile
		>
			<div className='uppercase px-3 py-1 border rounded-full w-full dates text-lg'>
				<Marquee pauseOnHover speed={50} gradient={true} gradientWidth={100} gradientColor={'var(--background-color-light)'} direction='right'>
					DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE
					DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
				</Marquee>
			</div>
		</div>
	);
}
