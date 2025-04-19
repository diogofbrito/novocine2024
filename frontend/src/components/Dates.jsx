import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LangProvider';

gsap.registerPlugin(ScrollTrigger);

export function Dates({ dataInicio, dataFim }) {
	const { lang } = useLang();

	const datesRef = useRef(null);
	const [gradientColor, setGradientColor] = useState('var(--background-color-light)');

	if (!dataInicio?.dataInicio || !dataFim?.dataFim) {
		return null;
	}

	const formattedStartDate = formatDate(dataInicio.dataInicio, lang);
	const formattedEndDate = formatDate(dataFim.dataFim, lang);

	function formatDate(date) {
		const options = { day: 'numeric', month: 'long' };
		const locale = lang === 'PT' ? 'pt-PT' : 'en-US';
		return new Date(date).toLocaleDateString(locale, options);
	}

	useEffect(() => {
		const updateGradientColor = () => {
			const theme = document.documentElement.getAttribute('data-theme');
			setGradientColor(theme === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)');
		};

		updateGradientColor();

		const observer = new MutationObserver(updateGradientColor);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');

		if (mediaQuery.matches) {
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
						start: 'top+=50vh',
					},
				},
			);

			return () => {
				animation.kill();
			};
		} else {
			gsap.set(datesRef.current, { clearProps: 'all' });
		}
	}, []);

	return (
		<div ref={datesRef} className='fixed z-40 bottom-0 px-[4.5rem] iphone:px-[1rem] flex w-screen h-[4.5rem] items-center' style={{ display: 'none' }}>
			<div className='uppercase px-3 py-1 border rounded-full w-full dates text-lg'>
				<Marquee autoFill={true}  pauseOnHover speed={50} gradient={true} gradientWidth={100} gradientColor={gradientColor} direction='left'>
					{lang === 'PT' ? `de ${formattedStartDate} — ${formattedEndDate}` : `FROM ${formattedStartDate} — ${formattedEndDate}`}
					&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
					{lang === 'PT' ? `de ${formattedStartDate} — ${formattedEndDate}` : `FROM ${formattedStartDate} — ${formattedEndDate}`}
					&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
					{lang === 'PT' ? `de ${formattedStartDate} — ${formattedEndDate}` : `FROM ${formattedStartDate} — ${formattedEndDate}`}
					&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
					{lang === 'PT' ? `de ${formattedStartDate} — ${formattedEndDate}` : `FROM ${formattedStartDate} — ${formattedEndDate}`}
					&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
					{lang === 'PT' ? `de ${formattedStartDate} — ${formattedEndDate}` : `FROM ${formattedStartDate} — ${formattedEndDate}`}
					&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
				</Marquee>
			</div>
		</div>
	);
}
